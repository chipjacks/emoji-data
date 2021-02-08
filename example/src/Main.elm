module Main exposing (main)

import Browser
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input as Input
import EmojiData exposing (EmojiData)
import EmojiData.Category as Category exposing (Category)
import EmojiData.Fetch
import EmojiData.Import
import EmojiData.View exposing (Source(..))
import Html exposing (Html)
import Http
import Process
import Task



-- MAIN


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , view = view
        }


type alias Model =
    { emojis : List EmojiData
    , search : String
    , results : List EmojiData
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model EmojiData.Import.all "" [], Cmd.none )


type Msg
    = FetchedEmojiData (Result Http.Error (List EmojiData))
    | SearchInput String
    | SelectCategory Category


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchedEmojiData result ->
            case result of
                Ok emojis ->
                    ( { model | emojis = emojis }, Cmd.none )

                Err err ->
                    ( { model | emojis = [] }, Task.attempt FetchedEmojiData (Process.sleep 1000 |> Task.andThen (\_ -> EmojiData.Fetch.task)) )

        SearchInput str ->
            ( { model | search = str, results = EmojiData.search model.emojis str |> List.take 100 }, Cmd.none )

        SelectCategory category ->
            ( { model | results = EmojiData.category model.emojis category }, Cmd.none )


view : Model -> Html Msg
view model =
    Element.layout
        [ Font.color (rgb255 11 33 39)
        , Font.size 16
        , Font.family [ Font.typeface "Open Sans", Font.sansSerif ]
        ]
    <|
        column [ width (fill |> maximum 1030), centerX ]
            [ row [ padding 5, width fill ]
                [ Input.text [ width (shrink |> minimum 200) ]
                    { onChange = SearchInput
                    , text = model.search
                    , placeholder = Just (Input.placeholder [] (text "Search"))
                    , label = Input.labelHidden "Search"
                    }
                , row [ centerX, Font.bold, Font.size 20 ] [ el [] (text "Emoji Data") ]
                , row [ alignRight, spacing 20 ]
                    [ el [] (text "Elm Docs")
                    , el [] (text "Github")
                    ]
                ]
            , viewCategories
            , viewEmojis model.results
            ]


viewCategories : Element Msg
viewCategories =
    let
        viewCategory ( name, category ) =
            Input.button
                [ Background.color (rgb255 132 142 147)
                , Element.focused
                    [ alpha 0.5 ]
                , padding 10
                , Border.solid
                , Border.color (rgb255 255 255 255)
                , Border.width 2
                , Border.rounded 4
                , Font.color (rgb255 255 255 255)
                ]
                { onPress = Just (SelectCategory category)
                , label = text name
                }
    in
    wrappedRow [ width fill ]
        (List.map viewCategory (Category.list |> List.take 9))


viewEmojis : List EmojiData -> Element Msg
viewEmojis emojis =
    row [ width fill ] [ column [ width fill ] (List.map viewEmoji emojis) ]


viewEmoji : EmojiData -> Element Msg
viewEmoji emoji =
    row [ spaceEvenly, width fill ]
        [ el [ width (shrink |> minimum 200) ] (text emoji.name)
        , el [] (text emoji.char)
        , html (EmojiData.View.emoji Apple 32 emoji)
        , html (EmojiData.View.emoji Google 32 emoji)
        , html (EmojiData.View.emoji Facebook 32 emoji)
        , html (EmojiData.View.emoji Twitter 32 emoji)
        ]
