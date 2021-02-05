module EmojiData exposing (EmojiData, list, listCategory, search)

import EmojiData.Category exposing (Category)
import EmojiData.Json
import Json.Decode as Decode


type alias EmojiData =
    { name : String
    , char : String
    , category : Category
    , keywords : List String
    , x : Int
    , y : Int
    }


list : List EmojiData
list =
    let
        decoded =
            Decode.decodeString (Decode.list emojiDecoder) EmojiData.Json.list
    in
    case decoded of
        Ok data ->
            data

        Err err ->
            []


listCategory : Category -> List EmojiData
listCategory c =
    List.filter (\e -> e.category == c) list


search : String -> List EmojiData
search str =
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
        (Decode.field "keywords" (Decode.list Decode.string))
        (Decode.field "x" Decode.int)
        (Decode.field "y" Decode.int)
