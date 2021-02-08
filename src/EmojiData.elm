module EmojiData exposing (EmojiData, category, search)

{-|


# Emoji Data

@docs EmojiData, all, category, search

-}

import EmojiData.Category exposing (Category)
import EmojiData.Json
import Json.Decode as Decode


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


emojiDecoder : Decode.Decoder EmojiData
emojiDecoder =
    Decode.map6 EmojiData
        (Decode.field "name" Decode.string)
        (Decode.field "char" Decode.string)
        (Decode.field "category" EmojiData.Category.decoder)
        (Decode.field "x" Decode.int)
        (Decode.field "y" Decode.int)
        (Decode.field "keywords" (Decode.list Decode.string))
