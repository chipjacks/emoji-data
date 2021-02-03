module EmojiData exposing (EmojiData, list, search)

import Json
import Json.Decode as Decode


type alias EmojiData =
    { name : String
    , char : String
    , category : String
    , keywords : List String
    , x : Int
    , y : Int
    }


list : List EmojiData
list =
    let
        decoded =
            Decode.decodeString (Decode.list emojiDecoder) Json.list
    in
    case decoded of
        Ok data ->
            data

        Err err ->
            []


search : String -> List EmojiData
search str =
    List.filter (\e -> String.join " " e.keywords |> String.contains str) list


emojiDecoder : Decode.Decoder EmojiData
emojiDecoder =
    Decode.map6 EmojiData
        (Decode.field "name" Decode.string)
        (Decode.field "char" Decode.string)
        (Decode.field "category" Decode.string)
        (Decode.field "keywords" (Decode.list Decode.string))
        (Decode.field "x" Decode.int)
        (Decode.field "y" Decode.int)
