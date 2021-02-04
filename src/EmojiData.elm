module EmojiData exposing (Category(..), EmojiData, category, list, search)

import Enum exposing (Enum)
import Json
import Json.Decode as Decode


type alias EmojiData =
    { name : String
    , char : String
    , category : Category
    , keywords : List String
    , x : Int
    , y : Int
    }


type Category
    = SmileysAndEmotion
    | PeopleAndBody
    | AnimalsAndNature
    | FoodAndDrink
    | TravelAndPlaces
    | Activities
    | Objects
    | Symbols
    | Flags
    | SkinTones


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
    let
        isMatch emoji =
            (String.join " " emoji.keywords |> String.contains str)
                || String.contains emoji.char str
    in
    List.filter isMatch list


emojiDecoder : Decode.Decoder EmojiData
emojiDecoder =
    Decode.map6 EmojiData
        (Decode.field "name" Decode.string)
        (Decode.field "char" Decode.string)
        (Decode.field "category" category.decoder)
        (Decode.field "keywords" (Decode.list Decode.string))
        (Decode.field "x" Decode.int)
        (Decode.field "y" Decode.int)


category : Enum Category
category =
    Enum.create
        [ SmileysAndEmotion
        , PeopleAndBody
        , AnimalsAndNature
        , FoodAndDrink
        , TravelAndPlaces
        , Activities
        , Objects
        , Symbols
        , Flags
        , SkinTones
        ]
        (\c ->
            case c of
                SmileysAndEmotion ->
                    "Smileys & Emotion"

                PeopleAndBody ->
                    "People & Body"

                AnimalsAndNature ->
                    "Animals & Nature"

                FoodAndDrink ->
                    "Food & Drink"

                TravelAndPlaces ->
                    "Travel & Places"

                Activities ->
                    "Activities"

                Objects ->
                    "Objects"

                Symbols ->
                    "Symbols"

                Flags ->
                    "Flags"

                SkinTones ->
                    "Skin Tones"
        )
