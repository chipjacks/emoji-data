module EmojiData.Fetch exposing (task)

import Dict exposing (Dict)
import EmojiData exposing (EmojiData)
import EmojiData.Category
import Hex
import Http
import Http.Tasks exposing (get, resolveJson)
import Json.Decode as Decode
import Task exposing (Task)


emojiLibCDN =
    "https://unpkg.com/emojilib@3.0.0/dist/emoji-en-US.json"


emojiDataCDN =
    "https://cdn.jsdelivr.net/npm/emoji-datasource@6.0.0/emoji.json"


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


emojiDataDecoder : Decode.Decoder EmojiData
emojiDataDecoder =
    Decode.map6 EmojiData
        (Decode.field "short_name" Decode.string)
        (Decode.field "unified" unicodeHexDecoder)
        (Decode.field "category" EmojiData.Category.decoder)
        (Decode.field "sheet_x" Decode.int)
        (Decode.field "sheet_y" Decode.int)
        (Decode.succeed [])


emojiLibDecoder : Decode.Decoder (Dict String (List String))
emojiLibDecoder =
    Decode.dict (Decode.list Decode.string)


joinKeywords : Dict String (List String) -> List EmojiData -> List EmojiData
joinKeywords keywords emojis =
    List.map
        (\e ->
            { e
                | keywords =
                    e.name
                        :: (Dict.get e.char keywords |> Maybe.withDefault [])
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
