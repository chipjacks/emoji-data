module Main exposing (main)

import Browser
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input as Input
import EmojiData exposing (EmojiData)
import Html exposing (Html)
import View exposing (EmojiSource(..))



-- MAIN


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , view = view
        }


type alias Model =
    { search : String
    , results : List EmojiData
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model "" [], Cmd.none )


type Msg
    = SearchInput String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SearchInput str ->
            ( { model | search = str, results = EmojiData.search str }, Cmd.none )


view : Model -> Html Msg
view model =
    Element.layout
        [ Font.color (rgb255 11 33 39)
        , Font.size 16
        , Font.family [ Font.typeface "Open Sans", Font.sansSerif ]
        ]
    <|
        column [ width (fill |> maximum 1000) ]
            [ row []
                [ Input.text []
                    { onChange = SearchInput
                    , text = model.search
                    , placeholder = Nothing
                    , label = Input.labelAbove [] (text "Search")
                    }
                ]
            , if model.search == "" then
                viewCategories

              else
                viewEmojis model.results
            ]


viewCategories : Element Msg
viewCategories =
    row [ width fill ]
        (List.map (\( str, _ ) -> text str) EmojiData.category.list)


viewEmojis : List EmojiData -> Element Msg
viewEmojis emojis =
    row [ width fill ] [ column [ width fill ] (List.map viewEmoji (List.take 100 emojis)) ]


viewEmoji : EmojiData -> Element Msg
viewEmoji emoji =
    row [ spaceEvenly, width fill ]
        [ el [ width (shrink |> minimum 200) ] (text emoji.name)
        , el [] (text emoji.char)
        , html (View.emoji Apple 32 emoji)
        , html (View.emoji Google 32 emoji)
        , html (View.emoji Facebook 32 emoji)
        , html (View.emoji Twitter 32 emoji)
        ]
