module EmojiData exposing (EmojiData, search)

{-|


# Emoji Data

@docs EmojiData, search

-}

import EmojiData.Category exposing (Category)


{-| -}
type alias EmojiData =
    { name : String
    , char : String
    , category : Category
    , x : Int
    , y : Int
    , keywords : List String
    }


{-| -}
search : List EmojiData -> String -> List EmojiData
search emojis str =
    let
        isMatch emoji =
            (String.join " " emoji.keywords |> String.contains str)
                || String.contains emoji.char str
    in
    if str == "" then
        []

    else
        List.filter isMatch emojis
