module Tests exposing (suite)

import EmojiData
import EmojiData.List
import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Task
import Test exposing (..)


search =
    EmojiData.search EmojiData.List.emojis


suite : Test
suite =
    describe "EmojiData"
        [ describe ".search"
            [ test "keywords" <|
                \_ ->
                    Expect.equal
                        (search "farmer" |> List.map .name)
                        [ "male-farmer", "female-farmer", "farmer" ]
            , test "emoji name" <|
                \_ ->
                    Expect.equal
                        (search "bearded_person" |> List.map .name)
                        [ "bearded_person" ]
            , test "unicode character" <|
                \_ ->
                    Expect.equal
                        (search "\u{1F9D1}\u{200D}🌾" |> List.map .name)
                        [ "farmer" ]
            , test "ascii" <|
                \_ ->
                    Expect.equal
                        (search ":)" |> List.map .name)
                        [ "smiley", "smile" ]
            ]
        ]
