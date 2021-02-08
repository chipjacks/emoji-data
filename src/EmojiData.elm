module EmojiData exposing (EmojiData, search)

{-|

@docs EmojiData, search

-}

import EmojiData.Category exposing (Category)


{-| -}
type alias EmojiData =
    { name : String
    , char : String
    , category : Category
    , sprite : ( Int, Int )
    , keywords : List String
    }


{-| Search for emojis by keyword.

    import EmojiData.Import exposing (emojis)

    EmojiData.search emojis "farmer"
        == [ { category = PeopleAndBody, char = "👨‍🌾", keywords = ["man farmer","rancher","gardener","man","human"], name = "male-farmer", sprite = (14,27) }
           , { category = PeopleAndBody, char = "👩‍🌾", keywords = ["woman farmer","rancher","gardener","woman","human"], name = "female-farmer", sprite = (17,20) }
           , { category = PeopleAndBody, char = "🧑‍🌾", keywords = ["farmer"], name = "farmer", sprite = (45,35) }
           ]

    EmojiData.search emojis "😀"
        == [ { category = SmileysAndEmotion
             , char = "😀"
             , keywords = [ "grinning face", "face", "smile", "happy", "joy", ":D", "grin" ]
             , name = "grinning"
             , sprite = (30,32)
             }
           ]

-}
search : List EmojiData -> String -> List EmojiData
search emojis str =
    let
        isMatch emoji =
            (String.join " " emoji.keywords |> String.contains str)
                || String.contains str emoji.name
                || String.contains str emoji.char
    in
    if str == "" then
        []

    else
        List.filter isMatch emojis
