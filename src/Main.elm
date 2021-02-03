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
        column []
            ([ Input.text []
                { onChange = SearchInput
                , text = model.search
                , placeholder = Nothing
                , label = Input.labelAbove [] (text "Search")
                }
             ]
                ++ (model.results
                        |> List.map (\emoji -> el [] (text emoji.name))
                   )
            )
