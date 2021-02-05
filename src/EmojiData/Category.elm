module EmojiData.Category exposing (Category(..), decoder, encode, fromString, list, toString)

import Enum exposing (Enum)


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


list : List ( String, Category )
list =
    enum.list


toString : Category -> String
toString category =
    enum.toString category


fromString : String -> Maybe Category
fromString str =
    enum.fromString str


encode =
    enum.encode


decoder =
    enum.decoder


enum : Enum Category
enum =
    Enum.create
        [ ( "Smileys & Emotion", SmileysAndEmotion )
        , ( "People & Body", PeopleAndBody )
        , ( "Animals & Nature", AnimalsAndNature )
        , ( "Food & Drink", FoodAndDrink )
        , ( "Travel & Places", TravelAndPlaces )
        , ( "Activities", Activities )
        , ( "Objects", Objects )
        , ( "Symbols", Symbols )
        , ( "Flags", Flags )
        , ( "Skin Tones", SkinTones )
        ]
