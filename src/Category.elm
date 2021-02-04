module Category exposing (Category(..), enum, fromString, list, toString)

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


enum : Enum Category
enum =
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
