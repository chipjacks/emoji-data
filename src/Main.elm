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
import Html.Attributes exposing (style)



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
            ([ Input.text []
                { onChange = SearchInput
                , text = model.search
                , placeholder = Nothing
                , label = Input.labelAbove [] (text "Search")
                }
             ]
                ++ List.map viewEmoji model.results
            )


viewEmoji : EmojiData -> Element Msg
viewEmoji emoji =
    row [ spaceEvenly, width fill ]
        [ el [ width (shrink |> minimum 200) ] (text emoji.name)
        , el [] (text (String.fromInt emoji.x))
        , el [] (text (String.fromInt emoji.y))
        , el [] (text emoji.char)
        , el (width (px 22) :: (twemoji emoji |> List.map htmlAttribute)) none
        ]


twemoji : EmojiData -> List (Html.Attribute msg)
twemoji emoji =
    [ style "display" "inline-block"
    , style "height" "22px"
    , style "width" "22px"
    , style "background-image" "url(https://cdn.jsdelivr.net/npm/emoji-datasource-twitter@5.0.1/img/twitter/sheets/64.png)"
    , style "background-repeat" "no-repeat"
    , style "background-size" "1254px"
    , style "background-position"
        (String.concat
            [ String.fromInt <| (emoji.x * -22)
            , "px "
            , String.fromInt <| (emoji.y * -22)
            , "px"
            ]
        )
    ]
