module View exposing (EmojiSource(..), emoji)

import EmojiData exposing (EmojiData)
import Html exposing (Html)
import Html.Attributes exposing (style)


type EmojiSource
    = Apple
    | Google
    | Twitter
    | Facebook


emoji : EmojiSource -> Int -> EmojiData -> Html msg
emoji source size data =
    let
        sheetRows =
            58

        sheetSize =
            if size > 32 then
                "64"

            else if size > 16 then
                "32"

            else
                "16"

        sourceStr =
            case source of
                Apple ->
                    "apple"

                Google ->
                    "google"

                Twitter ->
                    "twitter"

                Facebook ->
                    "facebook"

        cdnUrl =
            "https://cdn.jsdelivr.net/npm/emoji-datasource-" ++ sourceStr ++ "@6.0.0/img/" ++ sourceStr ++ "/sheets/" ++ sheetSize ++ ".png"
    in
    Html.div
        [ style "display" "inline-block"
        , style "height" (String.fromInt size ++ "px")
        , style "width" (String.fromInt size ++ "px")
        , style "background-image" ("url(" ++ cdnUrl ++ ")")
        , style "background-repeat" "no-repeat"
        , style "background-size" (String.fromInt (size * sheetRows) ++ "px")
        , style "background-position"
            (String.concat
                [ String.fromInt <| (data.x * (0 - size))
                , "px "
                , String.fromInt <| (data.y * (0 - size))
                , "px"
                ]
            )
        ]
        []
