module EmojiData.Category exposing (Category(..), list, toString, fromString)

{-|


# Emoji Categories

@docs Category, list, toString, fromString

-}

import Enum exposing (Enum)
import Json.Decode
import Json.Encode


{-| -}
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


{-| -}
list : List ( String, Category )
list =
    enum.list


{-| -}
toString : Category -> String
toString category =
    enum.toString category


{-| -}
fromString : String -> Maybe Category
fromString str =
    enum.fromString str


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
