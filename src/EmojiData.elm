module EmojiData exposing (EmojiData, category, search)

{-|


# Emoji Data

@docs EmojiData, all, category, search

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
category : List EmojiData -> Category -> List EmojiData
category list c =
    List.filter (\e -> e.category == c) list


{-| -}
search : List EmojiData -> String -> List EmojiData
search list str =
    let
        isMatch emoji =
            (String.join " " emoji.keywords |> String.contains str)
                || String.contains emoji.char str
    in
    if str == "" then
        []

    else
        List.filter isMatch list
