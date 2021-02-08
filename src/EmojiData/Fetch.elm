module EmojiData.Fetch exposing (task)

{-|

@docs task

-}

import Dict exposing (Dict)
import EmojiData exposing (EmojiData)
import EmojiData.Category exposing (Category)
import Hex
import Http
import Http.Tasks exposing (get, resolveJson)
import Json.Decode as Decode
import Task exposing (Task)


{-| Make two CDN requests to load emoji data JSON. This is an alternative to
using `EmojiData.Import.emojis` that reduces bundle size by about 300KB.

    type alias Model =
        { emojis : List EmojiData
        }

    init : () -> ( Model, Cmd Msg )
    init _ =
        ( Model [], Task.attempt FetchedEmojiData EmojiData.Fetch.task )

    type Msg
        = FetchedEmojiData (Result Http.Error (List EmojiData))

    update : Msg -> Model -> ( Model, Cmd Msg )
    update msg model =
        case msg of
            FetchedEmojiData result ->
                case result of
                    Ok emojis ->
                        ( { model | emojis = emojis }, Cmd.none )

                    Err err ->
                        ( model
                        , Task.attempt FetchedEmojiData
                            (Process.sleep 1000
                                |> Task.andThen (\_ -> EmojiData.Fetch.task)
                            )
                        )

-}
task : Task Http.Error (List EmojiData)
task =
    Task.map2 joinKeywords
        (get
            { url = emojiLibCDN
            , resolver = resolveJson emojiLibDecoder
            }
        )
        (get
            { url = emojiDataCDN
            , resolver = resolveJson (Decode.list emojiDataDecoder)
            }
        )


emojiDataCDN =
    "https://cdn.jsdelivr.net/npm/emoji-datasource@6.0.0/emoji.json"


emojiDataDecoder : Decode.Decoder EmojiData
emojiDataDecoder =
    Decode.map5 EmojiData
        (Decode.field "short_name" Decode.string)
        (Decode.field "unified" unicodeHexDecoder)
        (Decode.field "category" categoryDecoder)
        (Decode.map2 Tuple.pair
            (Decode.field "sheet_x" Decode.int)
            (Decode.field "sheet_y" Decode.int)
        )
        (Decode.succeed [])


emojiLibCDN =
    "https://unpkg.com/emojilib@3.0.0/dist/emoji-en-US.json"


emojiLibDecoder : Decode.Decoder (Dict String (List String))
emojiLibDecoder =
    Decode.dict (Decode.list Decode.string)


joinKeywords : Dict String (List String) -> List EmojiData -> List EmojiData
joinKeywords keywords emojis =
    List.map
        (\e ->
            { e
                | keywords =
                    (Dict.get e.char keywords |> Maybe.withDefault [])
                        |> List.map (String.replace "-" " ")
                        |> List.map (String.replace "_" " ")
            }
        )
        emojis


unicodeHexDecoder : Decode.Decoder String
unicodeHexDecoder =
    let
        replacemantCharacterCodepoint =
            65533

        hexToUnicode str =
            String.toLower str
                |> String.split "-"
                |> List.map (Hex.fromString >> Result.withDefault replacemantCharacterCodepoint)
                |> List.map Char.fromCode
                |> String.fromList
    in
    Decode.string
        |> Decode.map hexToUnicode


categoryDecoder : Decode.Decoder Category
categoryDecoder =
    Decode.string
        |> Decode.map EmojiData.Category.fromString
        |> Decode.andThen
            (\categoryM ->
                case categoryM of
                    Just category ->
                        Decode.succeed category

                    Nothing ->
                        Decode.fail "Category missing"
            )
