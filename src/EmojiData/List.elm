module EmojiData.List exposing (emojis)

{-|

@docs emojis

-}

import EmojiData exposing (EmojiData)
import EmojiData.Category exposing (Category(..))


{-| Staticly import the list of emojis. This adds about 300KB to your bundle
size compared to using `EmojiData.Fetch`.
-}
emojis : List EmojiData
emojis =
    [ { category = Symbols, char = "#️⃣", keywords = [ "keycap ", "symbol", "blue square", "twitter" ], name = "hash", sprite = ( 0, 0 ) }
    , { category = Symbols, char = "*️⃣", keywords = [ "keycap ", "star", "keycap" ], name = "keycap_star", sprite = ( 0, 1 ) }
    , { category = Symbols, char = "0️⃣", keywords = [ "keycap 0", "0", "numbers", "blue square", "null" ], name = "zero", sprite = ( 0, 2 ) }
    , { category = Symbols, char = "1️⃣", keywords = [ "keycap 1", "blue square", "numbers", "1" ], name = "one", sprite = ( 0, 3 ) }
    , { category = Symbols, char = "2️⃣", keywords = [ "keycap 2", "numbers", "2", "prime", "blue square" ], name = "two", sprite = ( 0, 4 ) }
    , { category = Symbols, char = "3️⃣", keywords = [ "keycap 3", "3", "numbers", "prime", "blue square" ], name = "three", sprite = ( 0, 5 ) }
    , { category = Symbols, char = "4️⃣", keywords = [ "keycap 4", "4", "numbers", "blue square" ], name = "four", sprite = ( 0, 6 ) }
    , { category = Symbols, char = "5️⃣", keywords = [ "keycap 5", "5", "numbers", "blue square", "prime" ], name = "five", sprite = ( 0, 7 ) }
    , { category = Symbols, char = "6️⃣", keywords = [ "keycap 6", "6", "numbers", "blue square" ], name = "six", sprite = ( 0, 8 ) }
    , { category = Symbols, char = "7️⃣", keywords = [ "keycap 7", "7", "numbers", "blue square", "prime" ], name = "seven", sprite = ( 0, 9 ) }
    , { category = Symbols, char = "8️⃣", keywords = [ "keycap 8", "8", "blue square", "numbers" ], name = "eight", sprite = ( 0, 10 ) }
    , { category = Symbols, char = "9️⃣", keywords = [ "keycap 9", "blue square", "numbers", "9" ], name = "nine", sprite = ( 0, 11 ) }
    , { category = Symbols, char = "©️", keywords = [ "copyright", "ip", "license", "circle", "law", "legal" ], name = "copyright", sprite = ( 0, 12 ) }
    , { category = Symbols, char = "®️", keywords = [ "registered", "alphabet", "circle" ], name = "registered", sprite = ( 0, 13 ) }
    , { category = Activities, char = "🀄", keywords = [ "mahjong red dragon", "game", "play", "chinese", "kanji" ], name = "mahjong", sprite = ( 0, 14 ) }
    , { category = Activities, char = "🃏", keywords = [ "joker", "poker", "cards", "game", "play", "magic" ], name = "black_joker", sprite = ( 0, 15 ) }
    , { category = Symbols, char = "🅰️", keywords = [ "a button", "red square", "alphabet", "letter" ], name = "a", sprite = ( 0, 16 ) }
    , { category = Symbols, char = "🅱️", keywords = [ "b button", "red square", "alphabet", "letter" ], name = "b", sprite = ( 0, 17 ) }
    , { category = Symbols, char = "🅾️", keywords = [ "o button", "alphabet", "red square", "letter" ], name = "o2", sprite = ( 0, 18 ) }
    , { category = Symbols, char = "🅿️", keywords = [ "p button", "cars", "blue square", "alphabet", "letter" ], name = "parking", sprite = ( 0, 19 ) }
    , { category = Symbols, char = "🆎", keywords = [ "ab button", "red square", "alphabet" ], name = "ab", sprite = ( 0, 20 ) }
    , { category = Symbols, char = "🆑", keywords = [ "cl button", "alphabet", "words", "red square" ], name = "cl", sprite = ( 0, 21 ) }
    , { category = Symbols, char = "🆒", keywords = [ "cool button", "words", "blue square" ], name = "cool", sprite = ( 0, 22 ) }
    , { category = Symbols, char = "🆓", keywords = [ "free button", "blue square", "words" ], name = "free", sprite = ( 0, 23 ) }
    , { category = Symbols, char = "🆔", keywords = [ "id button", "purple square", "words" ], name = "id", sprite = ( 0, 24 ) }
    , { category = Symbols, char = "🆕", keywords = [ "new button", "blue square", "words", "start" ], name = "new", sprite = ( 0, 25 ) }
    , { category = Symbols, char = "🆖", keywords = [ "ng button", "blue square", "words", "shape", "icon" ], name = "ng", sprite = ( 0, 26 ) }
    , { category = Symbols, char = "🆗", keywords = [ "ok button", "good", "agree", "yes", "blue square" ], name = "ok", sprite = ( 0, 27 ) }
    , { category = Symbols, char = "🆘", keywords = [ "sos button", "help", "red square", "words", "emergency", "911" ], name = "sos", sprite = ( 0, 28 ) }
    , { category = Symbols, char = "🆙", keywords = [ "up button", "blue square", "above", "high" ], name = "up", sprite = ( 0, 29 ) }
    , { category = Symbols, char = "🆚", keywords = [ "vs button", "words", "orange square" ], name = "vs", sprite = ( 0, 30 ) }
    , { category = Flags, char = "🇦🇨", keywords = [ "flag ascension island" ], name = "flag-ac", sprite = ( 0, 31 ) }
    , { category = Flags, char = "🇦🇩", keywords = [ "flag andorra", "ad", "flag", "nation", "country", "banner" ], name = "flag-ad", sprite = ( 0, 32 ) }
    , { category = Flags, char = "🇦🇪", keywords = [ "flag united arab emirates", "united", "arab", "emirates", "flag", "nation", "country", "banner" ], name = "flag-ae", sprite = ( 0, 33 ) }
    , { category = Flags, char = "🇦🇫", keywords = [ "flag afghanistan", "af", "flag", "nation", "country", "banner" ], name = "flag-af", sprite = ( 0, 34 ) }
    , { category = Flags, char = "🇦🇬", keywords = [ "flag antigua barbuda", "antigua", "barbuda", "flag", "nation", "country", "banner" ], name = "flag-ag", sprite = ( 0, 35 ) }
    , { category = Flags, char = "🇦🇮", keywords = [ "flag anguilla", "ai", "flag", "nation", "country", "banner" ], name = "flag-ai", sprite = ( 0, 36 ) }
    , { category = Flags, char = "🇦🇱", keywords = [ "flag albania", "al", "flag", "nation", "country", "banner" ], name = "flag-al", sprite = ( 0, 37 ) }
    , { category = Flags, char = "🇦🇲", keywords = [ "flag armenia", "am", "flag", "nation", "country", "banner" ], name = "flag-am", sprite = ( 0, 38 ) }
    , { category = Flags, char = "🇦🇴", keywords = [ "flag angola", "ao", "flag", "nation", "country", "banner" ], name = "flag-ao", sprite = ( 0, 39 ) }
    , { category = Flags, char = "🇦🇶", keywords = [ "flag antarctica", "aq", "flag", "nation", "country", "banner" ], name = "flag-aq", sprite = ( 0, 40 ) }
    , { category = Flags, char = "🇦🇷", keywords = [ "flag argentina", "ar", "flag", "nation", "country", "banner" ], name = "flag-ar", sprite = ( 0, 41 ) }
    , { category = Flags, char = "🇦🇸", keywords = [ "flag american samoa", "american", "ws", "flag", "nation", "country", "banner" ], name = "flag-as", sprite = ( 0, 42 ) }
    , { category = Flags, char = "🇦🇹", keywords = [ "flag austria", "at", "flag", "nation", "country", "banner" ], name = "flag-at", sprite = ( 0, 43 ) }
    , { category = Flags, char = "🇦🇺", keywords = [ "flag australia", "au", "flag", "nation", "country", "banner" ], name = "flag-au", sprite = ( 0, 44 ) }
    , { category = Flags, char = "🇦🇼", keywords = [ "flag aruba", "aw", "flag", "nation", "country", "banner" ], name = "flag-aw", sprite = ( 0, 45 ) }
    , { category = Flags, char = "🇦🇽", keywords = [ "flag aland islands", "Åland", "islands", "flag", "nation", "country", "banner" ], name = "flag-ax", sprite = ( 0, 46 ) }
    , { category = Flags, char = "🇦🇿", keywords = [ "flag azerbaijan", "az", "flag", "nation", "country", "banner" ], name = "flag-az", sprite = ( 0, 47 ) }
    , { category = Flags, char = "🇧🇦", keywords = [ "flag bosnia herzegovina", "bosnia", "herzegovina", "flag", "nation", "country", "banner" ], name = "flag-ba", sprite = ( 0, 48 ) }
    , { category = Flags, char = "🇧🇧", keywords = [ "flag barbados", "bb", "flag", "nation", "country", "banner" ], name = "flag-bb", sprite = ( 0, 49 ) }
    , { category = Flags, char = "🇧🇩", keywords = [ "flag bangladesh", "bd", "flag", "nation", "country", "banner" ], name = "flag-bd", sprite = ( 0, 50 ) }
    , { category = Flags, char = "🇧🇪", keywords = [ "flag belgium", "be", "flag", "nation", "country", "banner" ], name = "flag-be", sprite = ( 0, 51 ) }
    , { category = Flags, char = "🇧🇫", keywords = [ "flag burkina faso", "burkina", "faso", "flag", "nation", "country", "banner" ], name = "flag-bf", sprite = ( 0, 52 ) }
    , { category = Flags, char = "🇧🇬", keywords = [ "flag bulgaria", "bg", "flag", "nation", "country", "banner" ], name = "flag-bg", sprite = ( 0, 53 ) }
    , { category = Flags, char = "🇧🇭", keywords = [ "flag bahrain", "bh", "flag", "nation", "country", "banner" ], name = "flag-bh", sprite = ( 0, 54 ) }
    , { category = Flags, char = "🇧🇮", keywords = [ "flag burundi", "bi", "flag", "nation", "country", "banner" ], name = "flag-bi", sprite = ( 0, 55 ) }
    , { category = Flags, char = "🇧🇯", keywords = [ "flag benin", "bj", "flag", "nation", "country", "banner" ], name = "flag-bj", sprite = ( 0, 56 ) }
    , { category = Flags, char = "🇧🇱", keywords = [ "flag st barthelemy", "saint", "barthélemy", "flag", "nation", "country", "banner" ], name = "flag-bl", sprite = ( 0, 57 ) }
    , { category = Flags, char = "🇧🇲", keywords = [ "flag bermuda", "bm", "flag", "nation", "country", "banner" ], name = "flag-bm", sprite = ( 1, 0 ) }
    , { category = Flags, char = "🇧🇳", keywords = [ "flag brunei", "bn", "darussalam", "flag", "nation", "country", "banner" ], name = "flag-bn", sprite = ( 1, 1 ) }
    , { category = Flags, char = "🇧🇴", keywords = [ "flag bolivia", "bo", "flag", "nation", "country", "banner" ], name = "flag-bo", sprite = ( 1, 2 ) }
    , { category = Flags, char = "🇧🇶", keywords = [ "flag caribbean netherlands", "bonaire", "flag", "nation", "country", "banner" ], name = "flag-bq", sprite = ( 1, 3 ) }
    , { category = Flags, char = "🇧🇷", keywords = [ "flag brazil", "br", "flag", "nation", "country", "banner" ], name = "flag-br", sprite = ( 1, 4 ) }
    , { category = Flags, char = "🇧🇸", keywords = [ "flag bahamas", "bs", "flag", "nation", "country", "banner" ], name = "flag-bs", sprite = ( 1, 5 ) }
    , { category = Flags, char = "🇧🇹", keywords = [ "flag bhutan", "bt", "flag", "nation", "country", "banner" ], name = "flag-bt", sprite = ( 1, 6 ) }
    , { category = Flags, char = "🇧🇻", keywords = [ "flag bouvet island" ], name = "flag-bv", sprite = ( 1, 7 ) }
    , { category = Flags, char = "🇧🇼", keywords = [ "flag botswana", "bw", "flag", "nation", "country", "banner" ], name = "flag-bw", sprite = ( 1, 8 ) }
    , { category = Flags, char = "🇧🇾", keywords = [ "flag belarus", "by", "flag", "nation", "country", "banner" ], name = "flag-by", sprite = ( 1, 9 ) }
    , { category = Flags, char = "🇧🇿", keywords = [ "flag belize", "bz", "flag", "nation", "country", "banner" ], name = "flag-bz", sprite = ( 1, 10 ) }
    , { category = Flags, char = "🇨🇦", keywords = [ "flag canada", "ca", "flag", "nation", "country", "banner" ], name = "flag-ca", sprite = ( 1, 11 ) }
    , { category = Flags, char = "🇨🇨", keywords = [ "flag cocos islands", "cocos", "keeling", "islands", "flag", "nation", "country", "banner" ], name = "flag-cc", sprite = ( 1, 12 ) }
    , { category = Flags, char = "🇨🇩", keywords = [ "flag congo kinshasa", "congo", "democratic", "republic", "flag", "nation", "country", "banner" ], name = "flag-cd", sprite = ( 1, 13 ) }
    , { category = Flags, char = "🇨🇫", keywords = [ "flag central african republic", "central", "african", "republic", "flag", "nation", "country", "banner" ], name = "flag-cf", sprite = ( 1, 14 ) }
    , { category = Flags, char = "🇨🇬", keywords = [ "flag congo brazzaville", "congo", "flag", "nation", "country", "banner" ], name = "flag-cg", sprite = ( 1, 15 ) }
    , { category = Flags, char = "🇨🇭", keywords = [ "flag switzerland", "ch", "flag", "nation", "country", "banner" ], name = "flag-ch", sprite = ( 1, 16 ) }
    , { category = Flags, char = "🇨🇮", keywords = [ "flag cote d ivoire", "ivory", "coast", "flag", "nation", "country", "banner" ], name = "flag-ci", sprite = ( 1, 17 ) }
    , { category = Flags, char = "🇨🇰", keywords = [ "flag cook islands", "cook", "islands", "flag", "nation", "country", "banner" ], name = "flag-ck", sprite = ( 1, 18 ) }
    , { category = Flags, char = "🇨🇱", keywords = [ "flag chile", "flag", "nation", "country", "banner" ], name = "flag-cl", sprite = ( 1, 19 ) }
    , { category = Flags, char = "🇨🇲", keywords = [ "flag cameroon", "cm", "flag", "nation", "country", "banner" ], name = "flag-cm", sprite = ( 1, 20 ) }
    , { category = Flags, char = "🇨🇳", keywords = [ "flag china", "china", "chinese", "prc", "flag", "country", "nation", "banner" ], name = "cn", sprite = ( 1, 21 ) }
    , { category = Flags, char = "🇨🇴", keywords = [ "flag colombia", "co", "flag", "nation", "country", "banner" ], name = "flag-co", sprite = ( 1, 22 ) }
    , { category = Flags, char = "🇨🇵", keywords = [ "flag clipperton island" ], name = "flag-cp", sprite = ( 1, 23 ) }
    , { category = Flags, char = "🇨🇷", keywords = [ "flag costa rica", "costa", "rica", "flag", "nation", "country", "banner" ], name = "flag-cr", sprite = ( 1, 24 ) }
    , { category = Flags, char = "🇨🇺", keywords = [ "flag cuba", "cu", "flag", "nation", "country", "banner" ], name = "flag-cu", sprite = ( 1, 25 ) }
    , { category = Flags, char = "🇨🇻", keywords = [ "flag cape verde", "cabo", "verde", "flag", "nation", "country", "banner" ], name = "flag-cv", sprite = ( 1, 26 ) }
    , { category = Flags, char = "🇨🇼", keywords = [ "flag curacao", "curaçao", "flag", "nation", "country", "banner" ], name = "flag-cw", sprite = ( 1, 27 ) }
    , { category = Flags, char = "🇨🇽", keywords = [ "flag christmas island", "christmas", "island", "flag", "nation", "country", "banner" ], name = "flag-cx", sprite = ( 1, 28 ) }
    , { category = Flags, char = "🇨🇾", keywords = [ "flag cyprus", "cy", "flag", "nation", "country", "banner" ], name = "flag-cy", sprite = ( 1, 29 ) }
    , { category = Flags, char = "🇨🇿", keywords = [ "flag czechia", "cz", "flag", "nation", "country", "banner" ], name = "flag-cz", sprite = ( 1, 30 ) }
    , { category = Flags, char = "🇩🇪", keywords = [ "flag germany", "german", "nation", "flag", "country", "banner" ], name = "de", sprite = ( 1, 31 ) }
    , { category = Flags, char = "🇩🇬", keywords = [ "flag diego garcia" ], name = "flag-dg", sprite = ( 1, 32 ) }
    , { category = Flags, char = "🇩🇯", keywords = [ "flag djibouti", "dj", "flag", "nation", "country", "banner" ], name = "flag-dj", sprite = ( 1, 33 ) }
    , { category = Flags, char = "🇩🇰", keywords = [ "flag denmark", "dk", "flag", "nation", "country", "banner" ], name = "flag-dk", sprite = ( 1, 34 ) }
    , { category = Flags, char = "🇩🇲", keywords = [ "flag dominica", "dm", "flag", "nation", "country", "banner" ], name = "flag-dm", sprite = ( 1, 35 ) }
    , { category = Flags, char = "🇩🇴", keywords = [ "flag dominican republic", "dominican", "republic", "flag", "nation", "country", "banner" ], name = "flag-do", sprite = ( 1, 36 ) }
    , { category = Flags, char = "🇩🇿", keywords = [ "flag algeria", "dz", "flag", "nation", "country", "banner" ], name = "flag-dz", sprite = ( 1, 37 ) }
    , { category = Flags, char = "🇪🇦", keywords = [ "flag ceuta melilla" ], name = "flag-ea", sprite = ( 1, 38 ) }
    , { category = Flags, char = "🇪🇨", keywords = [ "flag ecuador", "ec", "flag", "nation", "country", "banner" ], name = "flag-ec", sprite = ( 1, 39 ) }
    , { category = Flags, char = "🇪🇪", keywords = [ "flag estonia", "ee", "flag", "nation", "country", "banner" ], name = "flag-ee", sprite = ( 1, 40 ) }
    , { category = Flags, char = "🇪🇬", keywords = [ "flag egypt", "eg", "flag", "nation", "country", "banner" ], name = "flag-eg", sprite = ( 1, 41 ) }
    , { category = Flags, char = "🇪🇭", keywords = [ "flag western sahara", "western", "sahara", "flag", "nation", "country", "banner" ], name = "flag-eh", sprite = ( 1, 42 ) }
    , { category = Flags, char = "🇪🇷", keywords = [ "flag eritrea", "er", "flag", "nation", "country", "banner" ], name = "flag-er", sprite = ( 1, 43 ) }
    , { category = Flags, char = "🇪🇸", keywords = [ "flag spain", "spain", "flag", "nation", "country", "banner" ], name = "es", sprite = ( 1, 44 ) }
    , { category = Flags, char = "🇪🇹", keywords = [ "flag ethiopia", "et", "flag", "nation", "country", "banner" ], name = "flag-et", sprite = ( 1, 45 ) }
    , { category = Flags, char = "🇪🇺", keywords = [ "flag european union", "european", "union", "flag", "banner" ], name = "flag-eu", sprite = ( 1, 46 ) }
    , { category = Flags, char = "🇫🇮", keywords = [ "flag finland", "fi", "flag", "nation", "country", "banner" ], name = "flag-fi", sprite = ( 1, 47 ) }
    , { category = Flags, char = "🇫🇯", keywords = [ "flag fiji", "fj", "flag", "nation", "country", "banner" ], name = "flag-fj", sprite = ( 1, 48 ) }
    , { category = Flags, char = "🇫🇰", keywords = [ "flag falkland islands", "falkland", "islands", "malvinas", "flag", "nation", "country", "banner" ], name = "flag-fk", sprite = ( 1, 49 ) }
    , { category = Flags, char = "🇫🇲", keywords = [ "flag micronesia", "micronesia,", "federated", "states", "flag", "nation", "country", "banner" ], name = "flag-fm", sprite = ( 1, 50 ) }
    , { category = Flags, char = "🇫🇴", keywords = [ "flag faroe islands", "faroe", "islands", "flag", "nation", "country", "banner" ], name = "flag-fo", sprite = ( 1, 51 ) }
    , { category = Flags, char = "🇫🇷", keywords = [ "flag france", "banner", "flag", "nation", "france", "french", "country" ], name = "fr", sprite = ( 1, 52 ) }
    , { category = Flags, char = "🇬🇦", keywords = [ "flag gabon", "ga", "flag", "nation", "country", "banner" ], name = "flag-ga", sprite = ( 1, 53 ) }
    , { category = Flags, char = "🇬🇧", keywords = [ "flag united kingdom", "united", "kingdom", "great", "britain", "northern", "ireland", "flag", "nation", "country", "banner", "british", "UK", "english", "england", "union jack" ], name = "gb", sprite = ( 1, 54 ) }
    , { category = Flags, char = "🇬🇩", keywords = [ "flag grenada", "gd", "flag", "nation", "country", "banner" ], name = "flag-gd", sprite = ( 1, 55 ) }
    , { category = Flags, char = "🇬🇪", keywords = [ "flag georgia", "ge", "flag", "nation", "country", "banner" ], name = "flag-ge", sprite = ( 1, 56 ) }
    , { category = Flags, char = "🇬🇫", keywords = [ "flag french guiana", "french", "guiana", "flag", "nation", "country", "banner" ], name = "flag-gf", sprite = ( 1, 57 ) }
    , { category = Flags, char = "🇬🇬", keywords = [ "flag guernsey", "gg", "flag", "nation", "country", "banner" ], name = "flag-gg", sprite = ( 2, 0 ) }
    , { category = Flags, char = "🇬🇭", keywords = [ "flag ghana", "gh", "flag", "nation", "country", "banner" ], name = "flag-gh", sprite = ( 2, 1 ) }
    , { category = Flags, char = "🇬🇮", keywords = [ "flag gibraltar", "gi", "flag", "nation", "country", "banner" ], name = "flag-gi", sprite = ( 2, 2 ) }
    , { category = Flags, char = "🇬🇱", keywords = [ "flag greenland", "gl", "flag", "nation", "country", "banner" ], name = "flag-gl", sprite = ( 2, 3 ) }
    , { category = Flags, char = "🇬🇲", keywords = [ "flag gambia", "gm", "flag", "nation", "country", "banner" ], name = "flag-gm", sprite = ( 2, 4 ) }
    , { category = Flags, char = "🇬🇳", keywords = [ "flag guinea", "gn", "flag", "nation", "country", "banner" ], name = "flag-gn", sprite = ( 2, 5 ) }
    , { category = Flags, char = "🇬🇵", keywords = [ "flag guadeloupe", "gp", "flag", "nation", "country", "banner" ], name = "flag-gp", sprite = ( 2, 6 ) }
    , { category = Flags, char = "🇬🇶", keywords = [ "flag equatorial guinea", "equatorial", "gn", "flag", "nation", "country", "banner" ], name = "flag-gq", sprite = ( 2, 7 ) }
    , { category = Flags, char = "🇬🇷", keywords = [ "flag greece", "gr", "flag", "nation", "country", "banner" ], name = "flag-gr", sprite = ( 2, 8 ) }
    , { category = Flags, char = "🇬🇸", keywords = [ "flag south georgia south sandwich islands", "south", "georgia", "sandwich", "islands", "flag", "nation", "country", "banner" ], name = "flag-gs", sprite = ( 2, 9 ) }
    , { category = Flags, char = "🇬🇹", keywords = [ "flag guatemala", "gt", "flag", "nation", "country", "banner" ], name = "flag-gt", sprite = ( 2, 10 ) }
    , { category = Flags, char = "🇬🇺", keywords = [ "flag guam", "gu", "flag", "nation", "country", "banner" ], name = "flag-gu", sprite = ( 2, 11 ) }
    , { category = Flags, char = "🇬🇼", keywords = [ "flag guinea bissau", "gw", "bissau", "flag", "nation", "country", "banner" ], name = "flag-gw", sprite = ( 2, 12 ) }
    , { category = Flags, char = "🇬🇾", keywords = [ "flag guyana", "gy", "flag", "nation", "country", "banner" ], name = "flag-gy", sprite = ( 2, 13 ) }
    , { category = Flags, char = "🇭🇰", keywords = [ "flag hong kong sar china", "hong", "kong", "flag", "nation", "country", "banner" ], name = "flag-hk", sprite = ( 2, 14 ) }
    , { category = Flags, char = "🇭🇲", keywords = [ "flag heard mcdonald islands" ], name = "flag-hm", sprite = ( 2, 15 ) }
    , { category = Flags, char = "🇭🇳", keywords = [ "flag honduras", "hn", "flag", "nation", "country", "banner" ], name = "flag-hn", sprite = ( 2, 16 ) }
    , { category = Flags, char = "🇭🇷", keywords = [ "flag croatia", "hr", "flag", "nation", "country", "banner" ], name = "flag-hr", sprite = ( 2, 17 ) }
    , { category = Flags, char = "🇭🇹", keywords = [ "flag haiti", "ht", "flag", "nation", "country", "banner" ], name = "flag-ht", sprite = ( 2, 18 ) }
    , { category = Flags, char = "🇭🇺", keywords = [ "flag hungary", "hu", "flag", "nation", "country", "banner" ], name = "flag-hu", sprite = ( 2, 19 ) }
    , { category = Flags, char = "🇮🇨", keywords = [ "flag canary islands", "canary", "islands", "flag", "nation", "country", "banner" ], name = "flag-ic", sprite = ( 2, 20 ) }
    , { category = Flags, char = "🇮🇩", keywords = [ "flag indonesia", "flag", "nation", "country", "banner" ], name = "flag-id", sprite = ( 2, 21 ) }
    , { category = Flags, char = "🇮🇪", keywords = [ "flag ireland", "ie", "flag", "nation", "country", "banner" ], name = "flag-ie", sprite = ( 2, 22 ) }
    , { category = Flags, char = "🇮🇱", keywords = [ "flag israel", "il", "flag", "nation", "country", "banner" ], name = "flag-il", sprite = ( 2, 23 ) }
    , { category = Flags, char = "🇮🇲", keywords = [ "flag isle of man", "isle", "man", "flag", "nation", "country", "banner" ], name = "flag-im", sprite = ( 2, 24 ) }
    , { category = Flags, char = "🇮🇳", keywords = [ "flag india", "in", "flag", "nation", "country", "banner" ], name = "flag-in", sprite = ( 2, 25 ) }
    , { category = Flags, char = "🇮🇴", keywords = [ "flag british indian ocean territory", "british", "indian", "ocean", "territory", "flag", "nation", "country", "banner" ], name = "flag-io", sprite = ( 2, 26 ) }
    , { category = Flags, char = "🇮🇶", keywords = [ "flag iraq", "iq", "flag", "nation", "country", "banner" ], name = "flag-iq", sprite = ( 2, 27 ) }
    , { category = Flags, char = "🇮🇷", keywords = [ "flag iran", "iran,", "islamic", "republic", "flag", "nation", "country", "banner" ], name = "flag-ir", sprite = ( 2, 28 ) }
    , { category = Flags, char = "🇮🇸", keywords = [ "flag iceland", "is", "flag", "nation", "country", "banner" ], name = "flag-is", sprite = ( 2, 29 ) }
    , { category = Flags, char = "🇮🇹", keywords = [ "flag italy", "italy", "flag", "nation", "country", "banner" ], name = "it", sprite = ( 2, 30 ) }
    , { category = Flags, char = "🇯🇪", keywords = [ "flag jersey", "je", "flag", "nation", "country", "banner" ], name = "flag-je", sprite = ( 2, 31 ) }
    , { category = Flags, char = "🇯🇲", keywords = [ "flag jamaica", "jm", "flag", "nation", "country", "banner" ], name = "flag-jm", sprite = ( 2, 32 ) }
    , { category = Flags, char = "🇯🇴", keywords = [ "flag jordan", "jo", "flag", "nation", "country", "banner" ], name = "flag-jo", sprite = ( 2, 33 ) }
    , { category = Flags, char = "🇯🇵", keywords = [ "flag japan", "japanese", "nation", "flag", "country", "banner" ], name = "jp", sprite = ( 2, 34 ) }
    , { category = Flags, char = "🇰🇪", keywords = [ "flag kenya", "ke", "flag", "nation", "country", "banner" ], name = "flag-ke", sprite = ( 2, 35 ) }
    , { category = Flags, char = "🇰🇬", keywords = [ "flag kyrgyzstan", "kg", "flag", "nation", "country", "banner" ], name = "flag-kg", sprite = ( 2, 36 ) }
    , { category = Flags, char = "🇰🇭", keywords = [ "flag cambodia", "kh", "flag", "nation", "country", "banner" ], name = "flag-kh", sprite = ( 2, 37 ) }
    , { category = Flags, char = "🇰🇮", keywords = [ "flag kiribati", "ki", "flag", "nation", "country", "banner" ], name = "flag-ki", sprite = ( 2, 38 ) }
    , { category = Flags, char = "🇰🇲", keywords = [ "flag comoros", "km", "flag", "nation", "country", "banner" ], name = "flag-km", sprite = ( 2, 39 ) }
    , { category = Flags, char = "🇰🇳", keywords = [ "flag st kitts nevis", "saint", "kitts", "nevis", "flag", "nation", "country", "banner" ], name = "flag-kn", sprite = ( 2, 40 ) }
    , { category = Flags, char = "🇰🇵", keywords = [ "flag north korea", "north", "korea", "nation", "flag", "country", "banner" ], name = "flag-kp", sprite = ( 2, 41 ) }
    , { category = Flags, char = "🇰🇷", keywords = [ "flag south korea", "south", "korea", "nation", "flag", "country", "banner" ], name = "kr", sprite = ( 2, 42 ) }
    , { category = Flags, char = "🇰🇼", keywords = [ "flag kuwait", "kw", "flag", "nation", "country", "banner" ], name = "flag-kw", sprite = ( 2, 43 ) }
    , { category = Flags, char = "🇰🇾", keywords = [ "flag cayman islands", "cayman", "islands", "flag", "nation", "country", "banner" ], name = "flag-ky", sprite = ( 2, 44 ) }
    , { category = Flags, char = "🇰🇿", keywords = [ "flag kazakhstan", "kz", "flag", "nation", "country", "banner" ], name = "flag-kz", sprite = ( 2, 45 ) }
    , { category = Flags, char = "🇱🇦", keywords = [ "flag laos", "lao", "democratic", "republic", "flag", "nation", "country", "banner" ], name = "flag-la", sprite = ( 2, 46 ) }
    , { category = Flags, char = "🇱🇧", keywords = [ "flag lebanon", "lb", "flag", "nation", "country", "banner" ], name = "flag-lb", sprite = ( 2, 47 ) }
    , { category = Flags, char = "🇱🇨", keywords = [ "flag st lucia", "saint", "lucia", "flag", "nation", "country", "banner" ], name = "flag-lc", sprite = ( 2, 48 ) }
    , { category = Flags, char = "🇱🇮", keywords = [ "flag liechtenstein", "li", "flag", "nation", "country", "banner" ], name = "flag-li", sprite = ( 2, 49 ) }
    , { category = Flags, char = "🇱🇰", keywords = [ "flag sri lanka", "sri", "lanka", "flag", "nation", "country", "banner" ], name = "flag-lk", sprite = ( 2, 50 ) }
    , { category = Flags, char = "🇱🇷", keywords = [ "flag liberia", "lr", "flag", "nation", "country", "banner" ], name = "flag-lr", sprite = ( 2, 51 ) }
    , { category = Flags, char = "🇱🇸", keywords = [ "flag lesotho", "ls", "flag", "nation", "country", "banner" ], name = "flag-ls", sprite = ( 2, 52 ) }
    , { category = Flags, char = "🇱🇹", keywords = [ "flag lithuania", "lt", "flag", "nation", "country", "banner" ], name = "flag-lt", sprite = ( 2, 53 ) }
    , { category = Flags, char = "🇱🇺", keywords = [ "flag luxembourg", "lu", "flag", "nation", "country", "banner" ], name = "flag-lu", sprite = ( 2, 54 ) }
    , { category = Flags, char = "🇱🇻", keywords = [ "flag latvia", "lv", "flag", "nation", "country", "banner" ], name = "flag-lv", sprite = ( 2, 55 ) }
    , { category = Flags, char = "🇱🇾", keywords = [ "flag libya", "ly", "flag", "nation", "country", "banner" ], name = "flag-ly", sprite = ( 2, 56 ) }
    , { category = Flags, char = "🇲🇦", keywords = [ "flag morocco", "ma", "flag", "nation", "country", "banner" ], name = "flag-ma", sprite = ( 2, 57 ) }
    , { category = Flags, char = "🇲🇨", keywords = [ "flag monaco", "mc", "flag", "nation", "country", "banner" ], name = "flag-mc", sprite = ( 3, 0 ) }
    , { category = Flags, char = "🇲🇩", keywords = [ "flag moldova", "moldova,", "republic", "flag", "nation", "country", "banner" ], name = "flag-md", sprite = ( 3, 1 ) }
    , { category = Flags, char = "🇲🇪", keywords = [ "flag montenegro", "me", "flag", "nation", "country", "banner" ], name = "flag-me", sprite = ( 3, 2 ) }
    , { category = Flags, char = "🇲🇫", keywords = [ "flag st martin" ], name = "flag-mf", sprite = ( 3, 3 ) }
    , { category = Flags, char = "🇲🇬", keywords = [ "flag madagascar", "mg", "flag", "nation", "country", "banner" ], name = "flag-mg", sprite = ( 3, 4 ) }
    , { category = Flags, char = "🇲🇭", keywords = [ "flag marshall islands", "marshall", "islands", "flag", "nation", "country", "banner" ], name = "flag-mh", sprite = ( 3, 5 ) }
    , { category = Flags, char = "🇲🇰", keywords = [ "flag north macedonia", "macedonia,", "flag", "nation", "country", "banner" ], name = "flag-mk", sprite = ( 3, 6 ) }
    , { category = Flags, char = "🇲🇱", keywords = [ "flag mali", "ml", "flag", "nation", "country", "banner" ], name = "flag-ml", sprite = ( 3, 7 ) }
    , { category = Flags, char = "🇲🇲", keywords = [ "flag myanmar", "mm", "flag", "nation", "country", "banner" ], name = "flag-mm", sprite = ( 3, 8 ) }
    , { category = Flags, char = "🇲🇳", keywords = [ "flag mongolia", "mn", "flag", "nation", "country", "banner" ], name = "flag-mn", sprite = ( 3, 9 ) }
    , { category = Flags, char = "🇲🇴", keywords = [ "flag macao sar china", "macao", "flag", "nation", "country", "banner" ], name = "flag-mo", sprite = ( 3, 10 ) }
    , { category = Flags, char = "🇲🇵", keywords = [ "flag northern mariana islands", "northern", "mariana", "islands", "flag", "nation", "country", "banner" ], name = "flag-mp", sprite = ( 3, 11 ) }
    , { category = Flags, char = "🇲🇶", keywords = [ "flag martinique", "mq", "flag", "nation", "country", "banner" ], name = "flag-mq", sprite = ( 3, 12 ) }
    , { category = Flags, char = "🇲🇷", keywords = [ "flag mauritania", "mr", "flag", "nation", "country", "banner" ], name = "flag-mr", sprite = ( 3, 13 ) }
    , { category = Flags, char = "🇲🇸", keywords = [ "flag montserrat", "ms", "flag", "nation", "country", "banner" ], name = "flag-ms", sprite = ( 3, 14 ) }
    , { category = Flags, char = "🇲🇹", keywords = [ "flag malta", "mt", "flag", "nation", "country", "banner" ], name = "flag-mt", sprite = ( 3, 15 ) }
    , { category = Flags, char = "🇲🇺", keywords = [ "flag mauritius", "mu", "flag", "nation", "country", "banner" ], name = "flag-mu", sprite = ( 3, 16 ) }
    , { category = Flags, char = "🇲🇻", keywords = [ "flag maldives", "mv", "flag", "nation", "country", "banner" ], name = "flag-mv", sprite = ( 3, 17 ) }
    , { category = Flags, char = "🇲🇼", keywords = [ "flag malawi", "mw", "flag", "nation", "country", "banner" ], name = "flag-mw", sprite = ( 3, 18 ) }
    , { category = Flags, char = "🇲🇽", keywords = [ "flag mexico", "mx", "flag", "nation", "country", "banner" ], name = "flag-mx", sprite = ( 3, 19 ) }
    , { category = Flags, char = "🇲🇾", keywords = [ "flag malaysia", "my", "flag", "nation", "country", "banner" ], name = "flag-my", sprite = ( 3, 20 ) }
    , { category = Flags, char = "🇲🇿", keywords = [ "flag mozambique", "mz", "flag", "nation", "country", "banner" ], name = "flag-mz", sprite = ( 3, 21 ) }
    , { category = Flags, char = "🇳🇦", keywords = [ "flag namibia", "na", "flag", "nation", "country", "banner" ], name = "flag-na", sprite = ( 3, 22 ) }
    , { category = Flags, char = "🇳🇨", keywords = [ "flag new caledonia", "new", "caledonia", "flag", "nation", "country", "banner" ], name = "flag-nc", sprite = ( 3, 23 ) }
    , { category = Flags, char = "🇳🇪", keywords = [ "flag niger", "ne", "flag", "nation", "country", "banner" ], name = "flag-ne", sprite = ( 3, 24 ) }
    , { category = Flags, char = "🇳🇫", keywords = [ "flag norfolk island", "norfolk", "island", "flag", "nation", "country", "banner" ], name = "flag-nf", sprite = ( 3, 25 ) }
    , { category = Flags, char = "🇳🇬", keywords = [ "flag nigeria", "flag", "nation", "country", "banner" ], name = "flag-ng", sprite = ( 3, 26 ) }
    , { category = Flags, char = "🇳🇮", keywords = [ "flag nicaragua", "ni", "flag", "nation", "country", "banner" ], name = "flag-ni", sprite = ( 3, 27 ) }
    , { category = Flags, char = "🇳🇱", keywords = [ "flag netherlands", "nl", "flag", "nation", "country", "banner" ], name = "flag-nl", sprite = ( 3, 28 ) }
    , { category = Flags, char = "🇳🇴", keywords = [ "flag norway", "no", "flag", "nation", "country", "banner" ], name = "flag-no", sprite = ( 3, 29 ) }
    , { category = Flags, char = "🇳🇵", keywords = [ "flag nepal", "np", "flag", "nation", "country", "banner" ], name = "flag-np", sprite = ( 3, 30 ) }
    , { category = Flags, char = "🇳🇷", keywords = [ "flag nauru", "nr", "flag", "nation", "country", "banner" ], name = "flag-nr", sprite = ( 3, 31 ) }
    , { category = Flags, char = "🇳🇺", keywords = [ "flag niue", "nu", "flag", "nation", "country", "banner" ], name = "flag-nu", sprite = ( 3, 32 ) }
    , { category = Flags, char = "🇳🇿", keywords = [ "flag new zealand", "new", "zealand", "flag", "nation", "country", "banner" ], name = "flag-nz", sprite = ( 3, 33 ) }
    , { category = Flags, char = "🇴🇲", keywords = [ "flag oman", "om symbol", "flag", "nation", "country", "banner" ], name = "flag-om", sprite = ( 3, 34 ) }
    , { category = Flags, char = "🇵🇦", keywords = [ "flag panama", "pa", "flag", "nation", "country", "banner" ], name = "flag-pa", sprite = ( 3, 35 ) }
    , { category = Flags, char = "🇵🇪", keywords = [ "flag peru", "pe", "flag", "nation", "country", "banner" ], name = "flag-pe", sprite = ( 3, 36 ) }
    , { category = Flags, char = "🇵🇫", keywords = [ "flag french polynesia", "french", "polynesia", "flag", "nation", "country", "banner" ], name = "flag-pf", sprite = ( 3, 37 ) }
    , { category = Flags, char = "🇵🇬", keywords = [ "flag papua new guinea", "papua", "new", "guinea", "flag", "nation", "country", "banner" ], name = "flag-pg", sprite = ( 3, 38 ) }
    , { category = Flags, char = "🇵🇭", keywords = [ "flag philippines", "ph", "flag", "nation", "country", "banner" ], name = "flag-ph", sprite = ( 3, 39 ) }
    , { category = Flags, char = "🇵🇰", keywords = [ "flag pakistan", "pk", "flag", "nation", "country", "banner" ], name = "flag-pk", sprite = ( 3, 40 ) }
    , { category = Flags, char = "🇵🇱", keywords = [ "flag poland", "pl", "flag", "nation", "country", "banner" ], name = "flag-pl", sprite = ( 3, 41 ) }
    , { category = Flags, char = "🇵🇲", keywords = [ "flag st pierre miquelon", "saint", "pierre", "miquelon", "flag", "nation", "country", "banner" ], name = "flag-pm", sprite = ( 3, 42 ) }
    , { category = Flags, char = "🇵🇳", keywords = [ "flag pitcairn islands", "pitcairn", "flag", "nation", "country", "banner" ], name = "flag-pn", sprite = ( 3, 43 ) }
    , { category = Flags, char = "🇵🇷", keywords = [ "flag puerto rico", "puerto", "rico", "flag", "nation", "country", "banner" ], name = "flag-pr", sprite = ( 3, 44 ) }
    , { category = Flags, char = "🇵🇸", keywords = [ "flag palestinian territories", "palestine", "palestinian", "territories", "flag", "nation", "country", "banner" ], name = "flag-ps", sprite = ( 3, 45 ) }
    , { category = Flags, char = "🇵🇹", keywords = [ "flag portugal", "pt", "flag", "nation", "country", "banner" ], name = "flag-pt", sprite = ( 3, 46 ) }
    , { category = Flags, char = "🇵🇼", keywords = [ "flag palau", "pw", "flag", "nation", "country", "banner" ], name = "flag-pw", sprite = ( 3, 47 ) }
    , { category = Flags, char = "🇵🇾", keywords = [ "flag paraguay", "py", "flag", "nation", "country", "banner" ], name = "flag-py", sprite = ( 3, 48 ) }
    , { category = Flags, char = "🇶🇦", keywords = [ "flag qatar", "qa", "flag", "nation", "country", "banner" ], name = "flag-qa", sprite = ( 3, 49 ) }
    , { category = Flags, char = "🇷🇪", keywords = [ "flag reunion", "réunion", "flag", "nation", "country", "banner" ], name = "flag-re", sprite = ( 3, 50 ) }
    , { category = Flags, char = "🇷🇴", keywords = [ "flag romania", "ro", "flag", "nation", "country", "banner" ], name = "flag-ro", sprite = ( 3, 51 ) }
    , { category = Flags, char = "🇷🇸", keywords = [ "flag serbia", "rs", "flag", "nation", "country", "banner" ], name = "flag-rs", sprite = ( 3, 52 ) }
    , { category = Flags, char = "🇷🇺", keywords = [ "flag russia", "russian", "federation", "flag", "nation", "country", "banner" ], name = "ru", sprite = ( 3, 53 ) }
    , { category = Flags, char = "🇷🇼", keywords = [ "flag rwanda", "rw", "flag", "nation", "country", "banner" ], name = "flag-rw", sprite = ( 3, 54 ) }
    , { category = Flags, char = "🇸🇦", keywords = [ "flag saudi arabia", "flag", "nation", "country", "banner" ], name = "flag-sa", sprite = ( 3, 55 ) }
    , { category = Flags, char = "🇸🇧", keywords = [ "flag solomon islands", "solomon", "islands", "flag", "nation", "country", "banner" ], name = "flag-sb", sprite = ( 3, 56 ) }
    , { category = Flags, char = "🇸🇨", keywords = [ "flag seychelles", "sc", "flag", "nation", "country", "banner" ], name = "flag-sc", sprite = ( 3, 57 ) }
    , { category = Flags, char = "🇸🇩", keywords = [ "flag sudan", "sd", "flag", "nation", "country", "banner" ], name = "flag-sd", sprite = ( 4, 0 ) }
    , { category = Flags, char = "🇸🇪", keywords = [ "flag sweden", "se", "flag", "nation", "country", "banner" ], name = "flag-se", sprite = ( 4, 1 ) }
    , { category = Flags, char = "🇸🇬", keywords = [ "flag singapore", "sg", "flag", "nation", "country", "banner" ], name = "flag-sg", sprite = ( 4, 2 ) }
    , { category = Flags, char = "🇸🇭", keywords = [ "flag st helena", "saint", "helena", "ascension", "tristan", "cunha", "flag", "nation", "country", "banner" ], name = "flag-sh", sprite = ( 4, 3 ) }
    , { category = Flags, char = "🇸🇮", keywords = [ "flag slovenia", "si", "flag", "nation", "country", "banner" ], name = "flag-si", sprite = ( 4, 4 ) }
    , { category = Flags, char = "🇸🇯", keywords = [ "flag svalbard jan mayen" ], name = "flag-sj", sprite = ( 4, 5 ) }
    , { category = Flags, char = "🇸🇰", keywords = [ "flag slovakia", "sk", "flag", "nation", "country", "banner" ], name = "flag-sk", sprite = ( 4, 6 ) }
    , { category = Flags, char = "🇸🇱", keywords = [ "flag sierra leone", "sierra", "leone", "flag", "nation", "country", "banner" ], name = "flag-sl", sprite = ( 4, 7 ) }
    , { category = Flags, char = "🇸🇲", keywords = [ "flag san marino", "san", "marino", "flag", "nation", "country", "banner" ], name = "flag-sm", sprite = ( 4, 8 ) }
    , { category = Flags, char = "🇸🇳", keywords = [ "flag senegal", "sn", "flag", "nation", "country", "banner" ], name = "flag-sn", sprite = ( 4, 9 ) }
    , { category = Flags, char = "🇸🇴", keywords = [ "flag somalia", "so", "flag", "nation", "country", "banner" ], name = "flag-so", sprite = ( 4, 10 ) }
    , { category = Flags, char = "🇸🇷", keywords = [ "flag suriname", "sr", "flag", "nation", "country", "banner" ], name = "flag-sr", sprite = ( 4, 11 ) }
    , { category = Flags, char = "🇸🇸", keywords = [ "flag south sudan", "south", "sd", "flag", "nation", "country", "banner" ], name = "flag-ss", sprite = ( 4, 12 ) }
    , { category = Flags, char = "🇸🇹", keywords = [ "flag sao tome principe", "sao", "tome", "principe", "flag", "nation", "country", "banner" ], name = "flag-st", sprite = ( 4, 13 ) }
    , { category = Flags, char = "🇸🇻", keywords = [ "flag el salvador", "el", "salvador", "flag", "nation", "country", "banner" ], name = "flag-sv", sprite = ( 4, 14 ) }
    , { category = Flags, char = "🇸🇽", keywords = [ "flag sint maarten", "sint", "maarten", "dutch", "flag", "nation", "country", "banner" ], name = "flag-sx", sprite = ( 4, 15 ) }
    , { category = Flags, char = "🇸🇾", keywords = [ "flag syria", "syrian", "arab", "republic", "flag", "nation", "country", "banner" ], name = "flag-sy", sprite = ( 4, 16 ) }
    , { category = Flags, char = "🇸🇿", keywords = [ "flag eswatini", "sz", "flag", "nation", "country", "banner" ], name = "flag-sz", sprite = ( 4, 17 ) }
    , { category = Flags, char = "🇹🇦", keywords = [ "flag tristan da cunha" ], name = "flag-ta", sprite = ( 4, 18 ) }
    , { category = Flags, char = "🇹🇨", keywords = [ "flag turks caicos islands", "turks", "caicos", "islands", "flag", "nation", "country", "banner" ], name = "flag-tc", sprite = ( 4, 19 ) }
    , { category = Flags, char = "🇹🇩", keywords = [ "flag chad", "td", "flag", "nation", "country", "banner" ], name = "flag-td", sprite = ( 4, 20 ) }
    , { category = Flags, char = "🇹🇫", keywords = [ "flag french southern territories", "french", "southern", "territories", "flag", "nation", "country", "banner" ], name = "flag-tf", sprite = ( 4, 21 ) }
    , { category = Flags, char = "🇹🇬", keywords = [ "flag togo", "tg", "flag", "nation", "country", "banner" ], name = "flag-tg", sprite = ( 4, 22 ) }
    , { category = Flags, char = "🇹🇭", keywords = [ "flag thailand", "th", "flag", "nation", "country", "banner" ], name = "flag-th", sprite = ( 4, 23 ) }
    , { category = Flags, char = "🇹🇯", keywords = [ "flag tajikistan", "tj", "flag", "nation", "country", "banner" ], name = "flag-tj", sprite = ( 4, 24 ) }
    , { category = Flags, char = "🇹🇰", keywords = [ "flag tokelau", "tk", "flag", "nation", "country", "banner" ], name = "flag-tk", sprite = ( 4, 25 ) }
    , { category = Flags, char = "🇹🇱", keywords = [ "flag timor leste", "timor", "leste", "flag", "nation", "country", "banner" ], name = "flag-tl", sprite = ( 4, 26 ) }
    , { category = Flags, char = "🇹🇲", keywords = [ "flag turkmenistan", "flag", "nation", "country", "banner" ], name = "flag-tm", sprite = ( 4, 27 ) }
    , { category = Flags, char = "🇹🇳", keywords = [ "flag tunisia", "tn", "flag", "nation", "country", "banner" ], name = "flag-tn", sprite = ( 4, 28 ) }
    , { category = Flags, char = "🇹🇴", keywords = [ "flag tonga", "to", "flag", "nation", "country", "banner" ], name = "flag-to", sprite = ( 4, 29 ) }
    , { category = Flags, char = "🇹🇷", keywords = [ "flag turkey", "turkey", "flag", "nation", "country", "banner" ], name = "flag-tr", sprite = ( 4, 30 ) }
    , { category = Flags, char = "🇹🇹", keywords = [ "flag trinidad tobago", "trinidad", "tobago", "flag", "nation", "country", "banner" ], name = "flag-tt", sprite = ( 4, 31 ) }
    , { category = Flags, char = "🇹🇻", keywords = [ "flag tuvalu", "flag", "nation", "country", "banner" ], name = "flag-tv", sprite = ( 4, 32 ) }
    , { category = Flags, char = "🇹🇼", keywords = [ "flag taiwan", "tw", "flag", "nation", "country", "banner" ], name = "flag-tw", sprite = ( 4, 33 ) }
    , { category = Flags, char = "🇹🇿", keywords = [ "flag tanzania", "tanzania,", "united", "republic", "flag", "nation", "country", "banner" ], name = "flag-tz", sprite = ( 4, 34 ) }
    , { category = Flags, char = "🇺🇦", keywords = [ "flag ukraine", "ua", "flag", "nation", "country", "banner" ], name = "flag-ua", sprite = ( 4, 35 ) }
    , { category = Flags, char = "🇺🇬", keywords = [ "flag uganda", "ug", "flag", "nation", "country", "banner" ], name = "flag-ug", sprite = ( 4, 36 ) }
    , { category = Flags, char = "🇺🇲", keywords = [ "flag u s outlying islands" ], name = "flag-um", sprite = ( 4, 37 ) }
    , { category = Flags, char = "🇺🇳", keywords = [ "flag united nations", "un", "flag", "banner" ], name = "flag-un", sprite = ( 4, 38 ) }
    , { category = Flags, char = "🇺🇸", keywords = [ "flag united states", "united", "states", "america", "flag", "nation", "country", "banner" ], name = "us", sprite = ( 4, 39 ) }
    , { category = Flags, char = "🇺🇾", keywords = [ "flag uruguay", "uy", "flag", "nation", "country", "banner" ], name = "flag-uy", sprite = ( 4, 40 ) }
    , { category = Flags, char = "🇺🇿", keywords = [ "flag uzbekistan", "uz", "flag", "nation", "country", "banner" ], name = "flag-uz", sprite = ( 4, 41 ) }
    , { category = Flags, char = "🇻🇦", keywords = [ "flag vatican city", "vatican", "city", "flag", "nation", "country", "banner" ], name = "flag-va", sprite = ( 4, 42 ) }
    , { category = Flags, char = "🇻🇨", keywords = [ "flag st vincent grenadines", "saint", "vincent", "grenadines", "flag", "nation", "country", "banner" ], name = "flag-vc", sprite = ( 4, 43 ) }
    , { category = Flags, char = "🇻🇪", keywords = [ "flag venezuela", "ve", "bolivarian", "republic", "flag", "nation", "country", "banner" ], name = "flag-ve", sprite = ( 4, 44 ) }
    , { category = Flags, char = "🇻🇬", keywords = [ "flag british virgin islands", "british", "virgin", "islands", "bvi", "flag", "nation", "country", "banner" ], name = "flag-vg", sprite = ( 4, 45 ) }
    , { category = Flags, char = "🇻🇮", keywords = [ "flag u s virgin islands", "virgin", "islands", "us", "flag", "nation", "country", "banner" ], name = "flag-vi", sprite = ( 4, 46 ) }
    , { category = Flags, char = "🇻🇳", keywords = [ "flag vietnam", "viet", "nam", "flag", "nation", "country", "banner" ], name = "flag-vn", sprite = ( 4, 47 ) }
    , { category = Flags, char = "🇻🇺", keywords = [ "flag vanuatu", "vu", "flag", "nation", "country", "banner" ], name = "flag-vu", sprite = ( 4, 48 ) }
    , { category = Flags, char = "🇼🇫", keywords = [ "flag wallis futuna", "wallis", "futuna", "flag", "nation", "country", "banner" ], name = "flag-wf", sprite = ( 4, 49 ) }
    , { category = Flags, char = "🇼🇸", keywords = [ "flag samoa", "ws", "flag", "nation", "country", "banner" ], name = "flag-ws", sprite = ( 4, 50 ) }
    , { category = Flags, char = "🇽🇰", keywords = [ "flag kosovo", "xk", "flag", "nation", "country", "banner" ], name = "flag-xk", sprite = ( 4, 51 ) }
    , { category = Flags, char = "🇾🇪", keywords = [ "flag yemen", "ye", "flag", "nation", "country", "banner" ], name = "flag-ye", sprite = ( 4, 52 ) }
    , { category = Flags, char = "🇾🇹", keywords = [ "flag mayotte", "yt", "flag", "nation", "country", "banner" ], name = "flag-yt", sprite = ( 4, 53 ) }
    , { category = Flags, char = "🇿🇦", keywords = [ "flag south africa", "south", "africa", "flag", "nation", "country", "banner" ], name = "flag-za", sprite = ( 4, 54 ) }
    , { category = Flags, char = "🇿🇲", keywords = [ "flag zambia", "zm", "flag", "nation", "country", "banner" ], name = "flag-zm", sprite = ( 4, 55 ) }
    , { category = Flags, char = "🇿🇼", keywords = [ "flag zimbabwe", "zw", "flag", "nation", "country", "banner" ], name = "flag-zw", sprite = ( 4, 56 ) }
    , { category = Symbols, char = "🈁", keywords = [ "japanese here button", "blue square", "here", "katakana", "japanese", "destination" ], name = "koko", sprite = ( 4, 57 ) }
    , { category = Symbols, char = "🈂️", keywords = [ "japanese service charge button", "japanese", "blue square", "katakana" ], name = "sa", sprite = ( 5, 0 ) }
    , { category = Symbols, char = "🈚", keywords = [ "japanese free of charge button", "nothing", "chinese", "kanji", "japanese", "orange square" ], name = "u7121", sprite = ( 5, 1 ) }
    , { category = Symbols, char = "🈯", keywords = [ "japanese reserved button", "chinese", "point", "green square", "kanji" ], name = "u6307", sprite = ( 5, 2 ) }
    , { category = Symbols, char = "🈲", keywords = [ "japanese prohibited button", "kanji", "japanese", "chinese", "forbidden", "limit", "restricted", "red square" ], name = "u7981", sprite = ( 5, 3 ) }
    , { category = Symbols, char = "🈳", keywords = [ "japanese vacancy button", "kanji", "japanese", "chinese", "empty", "sky", "blue square" ], name = "u7a7a", sprite = ( 5, 4 ) }
    , { category = Symbols, char = "🈴", keywords = [ "japanese passing grade button", "japanese", "chinese", "join", "kanji", "red square" ], name = "u5408", sprite = ( 5, 5 ) }
    , { category = Symbols, char = "🈵", keywords = [ "japanese no vacancy button", "full", "chinese", "japanese", "red square", "kanji" ], name = "u6e80", sprite = ( 5, 6 ) }
    , { category = Symbols, char = "🈶", keywords = [ "japanese not free of charge button", "orange square", "chinese", "have", "kanji" ], name = "u6709", sprite = ( 5, 7 ) }
    , { category = Symbols, char = "🈷️", keywords = [ "japanese monthly amount button", "chinese", "month", "moon", "japanese", "orange square", "kanji" ], name = "u6708", sprite = ( 5, 8 ) }
    , { category = Symbols, char = "🈸", keywords = [ "japanese application button", "chinese", "japanese", "kanji", "orange square" ], name = "u7533", sprite = ( 5, 9 ) }
    , { category = Symbols, char = "🈹", keywords = [ "japanese discount button", "cut", "divide", "chinese", "kanji", "pink square" ], name = "u5272", sprite = ( 5, 10 ) }
    , { category = Symbols, char = "🈺", keywords = [ "japanese open for business button", "japanese", "opening hours", "orange square" ], name = "u55b6", sprite = ( 5, 11 ) }
    , { category = Symbols, char = "🉐", keywords = [ "japanese bargain button", "chinese", "kanji", "obtain", "get", "circle" ], name = "ideograph_advantage", sprite = ( 5, 12 ) }
    , { category = Symbols, char = "🉑", keywords = [ "japanese acceptable button", "ok", "good", "chinese", "kanji", "agree", "yes", "orange circle" ], name = "accept", sprite = ( 5, 13 ) }
    , { category = TravelAndPlaces, char = "🌀", keywords = [ "cyclone", "weather", "swirl", "blue", "cloud", "vortex", "spiral", "whirlpool", "spin", "tornado", "hurricane", "typhoon" ], name = "cyclone", sprite = ( 5, 14 ) }
    , { category = TravelAndPlaces, char = "🌁", keywords = [ "foggy", "photo", "mountain" ], name = "foggy", sprite = ( 5, 15 ) }
    , { category = TravelAndPlaces, char = "🌂", keywords = [ "closed umbrella", "weather", "rain", "drizzle" ], name = "closed_umbrella", sprite = ( 5, 16 ) }
    , { category = TravelAndPlaces, char = "🌃", keywords = [ "night with stars", "evening", "city", "downtown" ], name = "night_with_stars", sprite = ( 5, 17 ) }
    , { category = TravelAndPlaces, char = "🌄", keywords = [ "sunrise over mountains", "view", "vacation", "photo" ], name = "sunrise_over_mountains", sprite = ( 5, 18 ) }
    , { category = TravelAndPlaces, char = "🌅", keywords = [ "sunrise", "morning", "view", "vacation", "photo" ], name = "sunrise", sprite = ( 5, 19 ) }
    , { category = TravelAndPlaces, char = "🌆", keywords = [ "cityscape at dusk", "photo", "evening", "sky", "buildings" ], name = "city_sunset", sprite = ( 5, 20 ) }
    , { category = TravelAndPlaces, char = "🌇", keywords = [ "sunset", "photo", "good morning", "dawn" ], name = "city_sunrise", sprite = ( 5, 21 ) }
    , { category = TravelAndPlaces, char = "🌈", keywords = [ "rainbow", "nature", "happy", "unicorn face", "photo", "sky", "spring" ], name = "rainbow", sprite = ( 5, 22 ) }
    , { category = TravelAndPlaces, char = "🌉", keywords = [ "bridge at night", "photo", "sanfrancisco" ], name = "bridge_at_night", sprite = ( 5, 23 ) }
    , { category = TravelAndPlaces, char = "🌊", keywords = [ "water wave", "sea", "water", "wave", "nature", "tsunami", "disaster" ], name = "ocean", sprite = ( 5, 24 ) }
    , { category = TravelAndPlaces, char = "🌋", keywords = [ "volcano", "photo", "nature", "disaster" ], name = "volcano", sprite = ( 5, 25 ) }
    , { category = TravelAndPlaces, char = "🌌", keywords = [ "milky way", "photo", "space", "stars" ], name = "milky_way", sprite = ( 5, 26 ) }
    , { category = TravelAndPlaces, char = "🌍", keywords = [ "globe showing europe africa", "globe", "world", "international" ], name = "earth_africa", sprite = ( 5, 27 ) }
    , { category = TravelAndPlaces, char = "🌎", keywords = [ "globe showing americas", "globe", "world", "USA", "international" ], name = "earth_americas", sprite = ( 5, 28 ) }
    , { category = TravelAndPlaces, char = "🌏", keywords = [ "globe showing asia australia", "globe", "world", "east", "international" ], name = "earth_asia", sprite = ( 5, 29 ) }
    , { category = TravelAndPlaces, char = "🌐", keywords = [ "globe with meridians", "earth", "international", "world", "internet", "interweb", "i18n" ], name = "globe_with_meridians", sprite = ( 5, 30 ) }
    , { category = TravelAndPlaces, char = "🌑", keywords = [ "new moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "new_moon", sprite = ( 5, 31 ) }
    , { category = TravelAndPlaces, char = "🌒", keywords = [ "waxing crescent moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "waxing_crescent_moon", sprite = ( 5, 32 ) }
    , { category = TravelAndPlaces, char = "🌓", keywords = [ "first quarter moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "first_quarter_moon", sprite = ( 5, 33 ) }
    , { category = TravelAndPlaces, char = "🌔", keywords = [ "waxing gibbous moon", "nature", "night", "sky", "gray", "twilight", "planet", "space", "evening", "sleep" ], name = "moon", sprite = ( 5, 34 ) }
    , { category = TravelAndPlaces, char = "🌕", keywords = [ "full moon", "nature", "yellow", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "full_moon", sprite = ( 5, 35 ) }
    , { category = TravelAndPlaces, char = "🌖", keywords = [ "waning gibbous moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep", "waxing gibbous moon" ], name = "waning_gibbous_moon", sprite = ( 5, 36 ) }
    , { category = TravelAndPlaces, char = "🌗", keywords = [ "last quarter moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "last_quarter_moon", sprite = ( 5, 37 ) }
    , { category = TravelAndPlaces, char = "🌘", keywords = [ "waning crescent moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "waning_crescent_moon", sprite = ( 5, 38 ) }
    , { category = TravelAndPlaces, char = "🌙", keywords = [ "crescent moon", "night", "sleep", "sky", "evening", "magic" ], name = "crescent_moon", sprite = ( 5, 39 ) }
    , { category = TravelAndPlaces, char = "🌚", keywords = [ "new moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "new_moon_with_face", sprite = ( 5, 40 ) }
    , { category = TravelAndPlaces, char = "🌛", keywords = [ "first quarter moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "first_quarter_moon_with_face", sprite = ( 5, 41 ) }
    , { category = TravelAndPlaces, char = "🌜", keywords = [ "last quarter moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "last_quarter_moon_with_face", sprite = ( 5, 42 ) }
    , { category = TravelAndPlaces, char = "🌝", keywords = [ "full moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "full_moon_with_face", sprite = ( 5, 43 ) }
    , { category = TravelAndPlaces, char = "🌞", keywords = [ "sun with face", "nature", "morning", "sky" ], name = "sun_with_face", sprite = ( 5, 44 ) }
    , { category = TravelAndPlaces, char = "🌟", keywords = [ "glowing star", "night", "sparkle", "awesome", "good", "magic" ], name = "star2", sprite = ( 5, 45 ) }
    , { category = TravelAndPlaces, char = "🌠", keywords = [ "shooting star", "night", "photo" ], name = "stars", sprite = ( 5, 46 ) }
    , { category = TravelAndPlaces, char = "🌡️", keywords = [ "thermometer", "weather", "temperature", "hot", "cold" ], name = "thermometer", sprite = ( 5, 47 ) }
    , { category = TravelAndPlaces, char = "🌤️", keywords = [ "sun behind small cloud", "weather" ], name = "mostly_sunny", sprite = ( 5, 48 ) }
    , { category = TravelAndPlaces, char = "🌥️", keywords = [ "sun behind large cloud", "weather" ], name = "barely_sunny", sprite = ( 5, 49 ) }
    , { category = TravelAndPlaces, char = "🌦️", keywords = [ "sun behind rain cloud", "weather" ], name = "partly_sunny_rain", sprite = ( 5, 50 ) }
    , { category = TravelAndPlaces, char = "🌧️", keywords = [ "cloud with rain", "weather" ], name = "rain_cloud", sprite = ( 5, 51 ) }
    , { category = TravelAndPlaces, char = "🌨️", keywords = [ "cloud with snow", "weather" ], name = "snow_cloud", sprite = ( 5, 52 ) }
    , { category = TravelAndPlaces, char = "🌩️", keywords = [ "cloud with lightning", "weather", "thunder" ], name = "lightning", sprite = ( 5, 53 ) }
    , { category = TravelAndPlaces, char = "🌪️", keywords = [ "tornado", "weather", "cyclone", "twister" ], name = "tornado", sprite = ( 5, 54 ) }
    , { category = TravelAndPlaces, char = "🌫️", keywords = [ "fog", "weather" ], name = "fog", sprite = ( 5, 55 ) }
    , { category = TravelAndPlaces, char = "🌬️", keywords = [ "wind face", "gust", "air" ], name = "wind_blowing_face", sprite = ( 5, 56 ) }
    , { category = FoodAndDrink, char = "\u{1F32D}", keywords = [ "hot dog", "food", "frankfurter" ], name = "hotdog", sprite = ( 5, 57 ) }
    , { category = FoodAndDrink, char = "\u{1F32E}", keywords = [ "taco", "food", "mexican" ], name = "taco", sprite = ( 6, 0 ) }
    , { category = FoodAndDrink, char = "\u{1F32F}", keywords = [ "burrito", "food", "mexican" ], name = "burrito", sprite = ( 6, 1 ) }
    , { category = FoodAndDrink, char = "🌰", keywords = [ "chestnut", "food", "squirrel" ], name = "chestnut", sprite = ( 6, 2 ) }
    , { category = AnimalsAndNature, char = "🌱", keywords = [ "seedling", "plant", "nature", "grass", "lawn", "spring" ], name = "seedling", sprite = ( 6, 3 ) }
    , { category = AnimalsAndNature, char = "🌲", keywords = [ "evergreen tree", "plant", "nature" ], name = "evergreen_tree", sprite = ( 6, 4 ) }
    , { category = AnimalsAndNature, char = "🌳", keywords = [ "deciduous tree", "plant", "nature" ], name = "deciduous_tree", sprite = ( 6, 5 ) }
    , { category = AnimalsAndNature, char = "🌴", keywords = [ "palm tree", "plant", "vegetable", "nature", "summer", "beach", "mojito", "tropical" ], name = "palm_tree", sprite = ( 6, 6 ) }
    , { category = AnimalsAndNature, char = "🌵", keywords = [ "cactus", "vegetable", "plant", "nature" ], name = "cactus", sprite = ( 6, 7 ) }
    , { category = FoodAndDrink, char = "🌶️", keywords = [ "hot pepper", "food", "spicy", "chilli", "chili" ], name = "hot_pepper", sprite = ( 6, 8 ) }
    , { category = AnimalsAndNature, char = "🌷", keywords = [ "tulip", "flowers", "plant", "nature", "summer", "spring" ], name = "tulip", sprite = ( 6, 9 ) }
    , { category = AnimalsAndNature, char = "🌸", keywords = [ "cherry blossom", "nature", "plant", "spring", "flower" ], name = "cherry_blossom", sprite = ( 6, 10 ) }
    , { category = AnimalsAndNature, char = "🌹", keywords = [ "rose", "flowers", "valentines", "love", "spring" ], name = "rose", sprite = ( 6, 11 ) }
    , { category = AnimalsAndNature, char = "🌺", keywords = [ "hibiscus", "plant", "vegetable", "flowers", "beach" ], name = "hibiscus", sprite = ( 6, 12 ) }
    , { category = AnimalsAndNature, char = "🌻", keywords = [ "sunflower", "nature", "plant", "fall" ], name = "sunflower", sprite = ( 6, 13 ) }
    , { category = AnimalsAndNature, char = "🌼", keywords = [ "blossom", "nature", "flowers", "yellow" ], name = "blossom", sprite = ( 6, 14 ) }
    , { category = FoodAndDrink, char = "🌽", keywords = [ "ear of corn", "food", "vegetable", "plant" ], name = "corn", sprite = ( 6, 15 ) }
    , { category = AnimalsAndNature, char = "🌾", keywords = [ "sheaf of rice", "nature", "plant" ], name = "ear_of_rice", sprite = ( 6, 16 ) }
    , { category = AnimalsAndNature, char = "🌿", keywords = [ "herb", "vegetable", "plant", "medicine", "weed", "grass", "lawn" ], name = "herb", sprite = ( 6, 17 ) }
    , { category = AnimalsAndNature, char = "🍀", keywords = [ "four leaf clover", "vegetable", "plant", "nature", "lucky", "irish" ], name = "four_leaf_clover", sprite = ( 6, 18 ) }
    , { category = AnimalsAndNature, char = "🍁", keywords = [ "maple leaf", "nature", "plant", "vegetable", "ca", "fall" ], name = "maple_leaf", sprite = ( 6, 19 ) }
    , { category = AnimalsAndNature, char = "🍂", keywords = [ "fallen leaf", "nature", "plant", "vegetable", "leaves" ], name = "fallen_leaf", sprite = ( 6, 20 ) }
    , { category = AnimalsAndNature, char = "🍃", keywords = [ "leaf fluttering in wind", "nature", "plant", "tree", "vegetable", "grass", "lawn", "spring" ], name = "leaves", sprite = ( 6, 21 ) }
    , { category = FoodAndDrink, char = "🍄", keywords = [ "mushroom", "plant", "vegetable" ], name = "mushroom", sprite = ( 6, 22 ) }
    , { category = FoodAndDrink, char = "🍅", keywords = [ "tomato", "fruit", "vegetable", "nature", "food" ], name = "tomato", sprite = ( 6, 23 ) }
    , { category = FoodAndDrink, char = "🍆", keywords = [ "eggplant", "vegetable", "nature", "food", "aubergine" ], name = "eggplant", sprite = ( 6, 24 ) }
    , { category = FoodAndDrink, char = "🍇", keywords = [ "grapes", "fruit", "food", "wine" ], name = "grapes", sprite = ( 6, 25 ) }
    , { category = FoodAndDrink, char = "🍈", keywords = [ "melon", "fruit", "nature", "food" ], name = "melon", sprite = ( 6, 26 ) }
    , { category = FoodAndDrink, char = "🍉", keywords = [ "watermelon", "fruit", "food", "picnic", "summer" ], name = "watermelon", sprite = ( 6, 27 ) }
    , { category = FoodAndDrink, char = "🍊", keywords = [ "tangerine", "food", "fruit", "nature", "orange" ], name = "tangerine", sprite = ( 6, 28 ) }
    , { category = FoodAndDrink, char = "🍋", keywords = [ "lemon", "fruit", "nature" ], name = "lemon", sprite = ( 6, 29 ) }
    , { category = FoodAndDrink, char = "🍌", keywords = [ "banana", "fruit", "food", "monkey" ], name = "banana", sprite = ( 6, 30 ) }
    , { category = FoodAndDrink, char = "🍍", keywords = [ "pineapple", "fruit", "nature", "food" ], name = "pineapple", sprite = ( 6, 31 ) }
    , { category = FoodAndDrink, char = "🍎", keywords = [ "red apple", "fruit", "mac", "school" ], name = "apple", sprite = ( 6, 32 ) }
    , { category = FoodAndDrink, char = "🍏", keywords = [ "green apple", "fruit", "nature" ], name = "green_apple", sprite = ( 6, 33 ) }
    , { category = FoodAndDrink, char = "🍐", keywords = [ "pear", "fruit", "nature", "food" ], name = "pear", sprite = ( 6, 34 ) }
    , { category = FoodAndDrink, char = "🍑", keywords = [ "peach", "fruit", "nature", "food" ], name = "peach", sprite = ( 6, 35 ) }
    , { category = FoodAndDrink, char = "🍒", keywords = [ "cherries", "food", "fruit" ], name = "cherries", sprite = ( 6, 36 ) }
    , { category = FoodAndDrink, char = "🍓", keywords = [ "strawberry", "fruit", "food", "nature" ], name = "strawberry", sprite = ( 6, 37 ) }
    , { category = FoodAndDrink, char = "🍔", keywords = [ "hamburger", "meat", "fast food", "beef", "cheeseburger", "mcdonalds", "burger king" ], name = "hamburger", sprite = ( 6, 38 ) }
    , { category = FoodAndDrink, char = "🍕", keywords = [ "pizza", "food", "party" ], name = "pizza", sprite = ( 6, 39 ) }
    , { category = FoodAndDrink, char = "🍖", keywords = [ "meat on bone", "good", "food", "drumstick" ], name = "meat_on_bone", sprite = ( 6, 40 ) }
    , { category = FoodAndDrink, char = "🍗", keywords = [ "poultry leg", "food", "meat", "drumstick", "bird", "chicken", "turkey" ], name = "poultry_leg", sprite = ( 6, 41 ) }
    , { category = FoodAndDrink, char = "🍘", keywords = [ "rice cracker", "food", "japanese" ], name = "rice_cracker", sprite = ( 6, 42 ) }
    , { category = FoodAndDrink, char = "🍙", keywords = [ "rice ball", "food", "japanese" ], name = "rice_ball", sprite = ( 6, 43 ) }
    , { category = FoodAndDrink, char = "🍚", keywords = [ "cooked rice", "food", "china", "asian" ], name = "rice", sprite = ( 6, 44 ) }
    , { category = FoodAndDrink, char = "🍛", keywords = [ "curry rice", "food", "spicy", "hot", "indian" ], name = "curry", sprite = ( 6, 45 ) }
    , { category = FoodAndDrink, char = "🍜", keywords = [ "steaming bowl", "food", "japanese", "noodle", "chopsticks" ], name = "ramen", sprite = ( 6, 46 ) }
    , { category = FoodAndDrink, char = "🍝", keywords = [ "spaghetti", "food", "italian", "noodle" ], name = "spaghetti", sprite = ( 6, 47 ) }
    , { category = FoodAndDrink, char = "🍞", keywords = [ "bread", "food", "wheat", "breakfast", "toast" ], name = "bread", sprite = ( 6, 48 ) }
    , { category = FoodAndDrink, char = "🍟", keywords = [ "french fries", "chips", "snack", "fast food" ], name = "fries", sprite = ( 6, 49 ) }
    , { category = FoodAndDrink, char = "🍠", keywords = [ "roasted sweet potato", "food", "nature" ], name = "sweet_potato", sprite = ( 6, 50 ) }
    , { category = FoodAndDrink, char = "🍡", keywords = [ "dango", "food", "dessert", "sweet", "japanese", "barbecue", "meat" ], name = "dango", sprite = ( 6, 51 ) }
    , { category = FoodAndDrink, char = "🍢", keywords = [ "oden", "food", "japanese" ], name = "oden", sprite = ( 6, 52 ) }
    , { category = FoodAndDrink, char = "🍣", keywords = [ "sushi", "food", "fish", "japanese", "rice" ], name = "sushi", sprite = ( 6, 53 ) }
    , { category = FoodAndDrink, char = "🍤", keywords = [ "fried shrimp", "food", "animal", "appetizer", "summer" ], name = "fried_shrimp", sprite = ( 6, 54 ) }
    , { category = FoodAndDrink, char = "🍥", keywords = [ "fish cake with swirl", "food", "japan", "sea", "beach", "narutomaki", "pink", "swirl", "kamaboko", "surimi", "ramen" ], name = "fish_cake", sprite = ( 6, 55 ) }
    , { category = FoodAndDrink, char = "🍦", keywords = [ "soft ice cream", "food", "hot", "dessert", "summer" ], name = "icecream", sprite = ( 6, 56 ) }
    , { category = FoodAndDrink, char = "🍧", keywords = [ "shaved ice", "hot", "dessert", "summer" ], name = "shaved_ice", sprite = ( 6, 57 ) }
    , { category = FoodAndDrink, char = "🍨", keywords = [ "ice cream", "food", "hot", "dessert" ], name = "ice_cream", sprite = ( 7, 0 ) }
    , { category = FoodAndDrink, char = "🍩", keywords = [ "doughnut", "food", "dessert", "snack", "sweet", "donut" ], name = "doughnut", sprite = ( 7, 1 ) }
    , { category = FoodAndDrink, char = "🍪", keywords = [ "cookie", "food", "snack", "oreo", "chocolate", "sweet", "dessert" ], name = "cookie", sprite = ( 7, 2 ) }
    , { category = FoodAndDrink, char = "🍫", keywords = [ "chocolate bar", "food", "snack", "dessert", "sweet" ], name = "chocolate_bar", sprite = ( 7, 3 ) }
    , { category = FoodAndDrink, char = "🍬", keywords = [ "candy", "snack", "dessert", "sweet", "lolly" ], name = "candy", sprite = ( 7, 4 ) }
    , { category = FoodAndDrink, char = "🍭", keywords = [ "lollipop", "food", "snack", "candy", "sweet" ], name = "lollipop", sprite = ( 7, 5 ) }
    , { category = FoodAndDrink, char = "🍮", keywords = [ "custard", "dessert", "food" ], name = "custard", sprite = ( 7, 6 ) }
    , { category = FoodAndDrink, char = "🍯", keywords = [ "honey pot", "bees", "sweet", "kitchen" ], name = "honey_pot", sprite = ( 7, 7 ) }
    , { category = FoodAndDrink, char = "🍰", keywords = [ "shortcake", "food", "dessert" ], name = "cake", sprite = ( 7, 8 ) }
    , { category = FoodAndDrink, char = "🍱", keywords = [ "bento box", "food", "japanese", "box" ], name = "bento", sprite = ( 7, 9 ) }
    , { category = FoodAndDrink, char = "🍲", keywords = [ "pot of food", "food", "meat", "soup" ], name = "stew", sprite = ( 7, 10 ) }
    , { category = FoodAndDrink, char = "🍳", keywords = [ "cooking", "food", "breakfast", "kitchen", "egg" ], name = "fried_egg", sprite = ( 7, 11 ) }
    , { category = FoodAndDrink, char = "🍴", keywords = [ "fork and knife", "cutlery", "kitchen" ], name = "fork_and_knife", sprite = ( 7, 12 ) }
    , { category = FoodAndDrink, char = "🍵", keywords = [ "teacup without handle", "drink", "bowl", "breakfast", "green", "british" ], name = "tea", sprite = ( 7, 13 ) }
    , { category = FoodAndDrink, char = "🍶", keywords = [ "sake", "wine", "drink", "drunk", "beverage", "japanese", "alcohol", "booze" ], name = "sake", sprite = ( 7, 14 ) }
    , { category = FoodAndDrink, char = "🍷", keywords = [ "wine glass", "drink", "beverage", "drunk", "alcohol", "booze" ], name = "wine_glass", sprite = ( 7, 15 ) }
    , { category = FoodAndDrink, char = "🍸", keywords = [ "cocktail glass", "drink", "drunk", "alcohol", "beverage", "booze", "mojito" ], name = "cocktail", sprite = ( 7, 16 ) }
    , { category = FoodAndDrink, char = "🍹", keywords = [ "tropical drink", "beverage", "cocktail", "summer", "beach", "alcohol", "booze", "mojito" ], name = "tropical_drink", sprite = ( 7, 17 ) }
    , { category = FoodAndDrink, char = "🍺", keywords = [ "beer mug", "relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze" ], name = "beer", sprite = ( 7, 18 ) }
    , { category = FoodAndDrink, char = "🍻", keywords = [ "clinking beer mugs", "relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze" ], name = "beers", sprite = ( 7, 19 ) }
    , { category = FoodAndDrink, char = "🍼", keywords = [ "baby bottle", "food", "container", "milk" ], name = "baby_bottle", sprite = ( 7, 20 ) }
    , { category = FoodAndDrink, char = "🍽️", keywords = [ "fork and knife with plate", "food", "eat", "meal", "lunch", "dinner", "restaurant" ], name = "knife_fork_plate", sprite = ( 7, 21 ) }
    , { category = FoodAndDrink, char = "\u{1F37E}", keywords = [ "bottle with popping cork", "drink", "wine", "bottle", "celebration" ], name = "champagne", sprite = ( 7, 22 ) }
    , { category = FoodAndDrink, char = "\u{1F37F}", keywords = [ "popcorn", "food", "movie theater", "films", "snack" ], name = "popcorn", sprite = ( 7, 23 ) }
    , { category = Activities, char = "🎀", keywords = [ "ribbon", "decoration", "pink", "girl", "bowtie" ], name = "ribbon", sprite = ( 7, 24 ) }
    , { category = Activities, char = "🎁", keywords = [ "wrapped gift", "present", "birthday", "christmas", "xmas" ], name = "gift", sprite = ( 7, 25 ) }
    , { category = FoodAndDrink, char = "🎂", keywords = [ "birthday cake", "food", "dessert", "cake" ], name = "birthday", sprite = ( 7, 26 ) }
    , { category = Activities, char = "🎃", keywords = [ "jack o lantern", "halloween", "light", "pumpkin", "creepy", "fall" ], name = "jack_o_lantern", sprite = ( 7, 27 ) }
    , { category = Activities, char = "🎄", keywords = [ "christmas tree", "festival", "vacation", "december", "xmas", "celebration" ], name = "christmas_tree", sprite = ( 7, 28 ) }
    , { category = PeopleAndBody, char = "🎅", keywords = [ "santa claus", "festival", "man", "male", "xmas", "father christmas" ], name = "santa", sprite = ( 7, 29 ) }
    , { category = Activities, char = "🎆", keywords = [ "fireworks", "photo", "festival", "carnival", "congratulations" ], name = "fireworks", sprite = ( 7, 35 ) }
    , { category = Activities, char = "🎇", keywords = [ "sparkler", "stars", "night", "shine" ], name = "sparkler", sprite = ( 7, 36 ) }
    , { category = Activities, char = "🎈", keywords = [ "balloon", "party", "celebration", "birthday", "circus" ], name = "balloon", sprite = ( 7, 37 ) }
    , { category = Activities, char = "🎉", keywords = [ "party popper", "party", "congratulations", "birthday", "magic", "circus", "celebration" ], name = "tada", sprite = ( 7, 38 ) }
    , { category = Activities, char = "🎊", keywords = [ "confetti ball", "festival", "party", "birthday", "circus" ], name = "confetti_ball", sprite = ( 7, 39 ) }
    , { category = Activities, char = "🎋", keywords = [ "tanabata tree", "plant", "nature", "branch", "summer" ], name = "tanabata_tree", sprite = ( 7, 40 ) }
    , { category = Flags, char = "🎌", keywords = [ "crossed flags", "japanese", "nation", "country", "border" ], name = "crossed_flags", sprite = ( 7, 41 ) }
    , { category = Activities, char = "🎍", keywords = [ "pine decoration", "plant", "nature", "vegetable", "panda", "pine decoration" ], name = "bamboo", sprite = ( 7, 42 ) }
    , { category = Activities, char = "🎎", keywords = [ "japanese dolls", "japanese", "toy", "kimono" ], name = "dolls", sprite = ( 7, 43 ) }
    , { category = Activities, char = "🎏", keywords = [ "carp streamer", "fish", "japanese", "koinobori", "carp", "banner" ], name = "flags", sprite = ( 7, 44 ) }
    , { category = Activities, char = "🎐", keywords = [ "wind chime", "nature", "ding", "spring", "bell" ], name = "wind_chime", sprite = ( 7, 45 ) }
    , { category = Activities, char = "🎑", keywords = [ "moon viewing ceremony", "photo", "japan", "asia", "tsukimi" ], name = "rice_scene", sprite = ( 7, 46 ) }
    , { category = Objects, char = "🎒", keywords = [ "backpack", "student", "education", "bag", "backpack" ], name = "school_satchel", sprite = ( 7, 47 ) }
    , { category = Objects, char = "🎓", keywords = [ "graduation cap", "school", "college", "degree", "university", "graduation", "cap", "hat", "legal", "learn", "education" ], name = "mortar_board", sprite = ( 7, 48 ) }
    , { category = Activities, char = "🎖️", keywords = [ "military medal", "award", "winning", "army" ], name = "medal", sprite = ( 7, 49 ) }
    , { category = Activities, char = "🎗️", keywords = [ "reminder ribbon", "sports", "cause", "support", "awareness" ], name = "reminder_ribbon", sprite = ( 7, 50 ) }
    , { category = Objects, char = "🎙️", keywords = [ "studio microphone", "sing", "recording", "artist", "talkshow" ], name = "studio_microphone", sprite = ( 7, 51 ) }
    , { category = Objects, char = "🎚️", keywords = [ "level slider", "scale" ], name = "level_slider", sprite = ( 7, 52 ) }
    , { category = Objects, char = "🎛️", keywords = [ "control knobs", "dial" ], name = "control_knobs", sprite = ( 7, 53 ) }
    , { category = Objects, char = "🎞️", keywords = [ "film frames", "movie" ], name = "film_frames", sprite = ( 7, 54 ) }
    , { category = Activities, char = "🎟️", keywords = [ "admission tickets", "sports", "concert", "entrance" ], name = "admission_tickets", sprite = ( 7, 55 ) }
    , { category = TravelAndPlaces, char = "🎠", keywords = [ "carousel horse", "photo", "carnival" ], name = "carousel_horse", sprite = ( 7, 56 ) }
    , { category = TravelAndPlaces, char = "🎡", keywords = [ "ferris wheel", "photo", "carnival", "londoneye" ], name = "ferris_wheel", sprite = ( 7, 57 ) }
    , { category = TravelAndPlaces, char = "🎢", keywords = [ "roller coaster", "carnival", "playground", "photo", "fun" ], name = "roller_coaster", sprite = ( 8, 0 ) }
    , { category = Activities, char = "🎣", keywords = [ "fishing pole", "food", "hobby", "summer" ], name = "fishing_pole_and_fish", sprite = ( 8, 1 ) }
    , { category = Objects, char = "🎤", keywords = [ "microphone", "sound", "music", "PA", "sing", "talkshow" ], name = "microphone", sprite = ( 8, 2 ) }
    , { category = Objects, char = "🎥", keywords = [ "movie camera", "film", "record" ], name = "movie_camera", sprite = ( 8, 3 ) }
    , { category = Symbols, char = "🎦", keywords = [ "cinema", "blue square", "record", "film", "movie", "curtain", "stage", "theater" ], name = "cinema", sprite = ( 8, 4 ) }
    , { category = Objects, char = "🎧", keywords = [ "headphone", "music", "score", "gadgets" ], name = "headphones", sprite = ( 8, 5 ) }
    , { category = Activities, char = "🎨", keywords = [ "artist palette", "design", "paint", "draw", "colors" ], name = "art", sprite = ( 8, 6 ) }
    , { category = Objects, char = "🎩", keywords = [ "top hat", "magic", "gentleman", "classy", "circus" ], name = "tophat", sprite = ( 8, 7 ) }
    , { category = TravelAndPlaces, char = "🎪", keywords = [ "circus tent", "festival", "carnival", "party" ], name = "circus_tent", sprite = ( 8, 8 ) }
    , { category = Activities, char = "🎫", keywords = [ "ticket", "event", "concert", "pass" ], name = "ticket", sprite = ( 8, 9 ) }
    , { category = Objects, char = "🎬", keywords = [ "clapper board", "movie", "film", "record" ], name = "clapper", sprite = ( 8, 10 ) }
    , { category = Activities, char = "🎭", keywords = [ "performing arts", "acting", "theater", "drama" ], name = "performing_arts", sprite = ( 8, 11 ) }
    , { category = Activities, char = "🎮", keywords = [ "video game", "play", "console", "PS4", "controller" ], name = "video_game", sprite = ( 8, 12 ) }
    , { category = Activities, char = "🎯", keywords = [ "direct hit", "game", "play", "bar", "target", "bullseye" ], name = "dart", sprite = ( 8, 13 ) }
    , { category = Activities, char = "🎰", keywords = [ "slot machine", "bet", "gamble", "vegas", "fruit machine", "luck", "casino" ], name = "slot_machine", sprite = ( 8, 14 ) }
    , { category = Activities, char = "🎱", keywords = [ "pool 8 ball", "pool", "hobby", "game", "luck", "magic" ], name = "8ball", sprite = ( 8, 15 ) }
    , { category = Activities, char = "🎲", keywords = [ "game die", "dice", "random", "tabletop", "play", "luck" ], name = "game_die", sprite = ( 8, 16 ) }
    , { category = Activities, char = "🎳", keywords = [ "bowling", "sports", "fun", "play" ], name = "bowling", sprite = ( 8, 17 ) }
    , { category = Activities, char = "🎴", keywords = [ "flower playing cards", "game", "sunset", "red" ], name = "flower_playing_cards", sprite = ( 8, 18 ) }
    , { category = Objects, char = "🎵", keywords = [ "musical note", "score", "tone", "sound" ], name = "musical_note", sprite = ( 8, 19 ) }
    , { category = Objects, char = "🎶", keywords = [ "musical notes", "music", "score" ], name = "notes", sprite = ( 8, 20 ) }
    , { category = Objects, char = "🎷", keywords = [ "saxophone", "music", "instrument", "jazz", "blues" ], name = "saxophone", sprite = ( 8, 21 ) }
    , { category = Objects, char = "🎸", keywords = [ "guitar", "music", "instrument" ], name = "guitar", sprite = ( 8, 22 ) }
    , { category = Objects, char = "🎹", keywords = [ "musical keyboard", "piano", "instrument", "compose" ], name = "musical_keyboard", sprite = ( 8, 23 ) }
    , { category = Objects, char = "🎺", keywords = [ "trumpet", "music", "brass" ], name = "trumpet", sprite = ( 8, 24 ) }
    , { category = Objects, char = "🎻", keywords = [ "violin", "music", "instrument", "orchestra", "symphony" ], name = "violin", sprite = ( 8, 25 ) }
    , { category = Objects, char = "🎼", keywords = [ "musical score", "treble", "clef", "compose" ], name = "musical_score", sprite = ( 8, 26 ) }
    , { category = Activities, char = "🎽", keywords = [ "running shirt", "play", "pageant" ], name = "running_shirt_with_sash", sprite = ( 8, 27 ) }
    , { category = Activities, char = "🎾", keywords = [ "tennis", "sports", "balls", "green" ], name = "tennis", sprite = ( 8, 28 ) }
    , { category = Activities, char = "🎿", keywords = [ "skis", "sports", "winter", "cold", "snow" ], name = "ski", sprite = ( 8, 29 ) }
    , { category = Activities, char = "🏀", keywords = [ "basketball", "sports", "balls", "NBA" ], name = "basketball", sprite = ( 8, 30 ) }
    , { category = Flags, char = "🏁", keywords = [ "chequered flag", "contest", "finishline", "race", "gokart" ], name = "checkered_flag", sprite = ( 8, 31 ) }
    , { category = PeopleAndBody, char = "🏂", keywords = [ "snowboarder", "sports", "winter" ], name = "snowboarder", sprite = ( 8, 32 ) }
    , { category = PeopleAndBody, char = "🏃\u{200D}♀️", keywords = [ "woman running", "woman", "walking", "exercise", "race", "running", "female" ], name = "woman-running", sprite = ( 8, 38 ) }
    , { category = PeopleAndBody, char = "🏃\u{200D}♂️", keywords = [ "man running", "man", "walking", "exercise", "race", "running" ], name = "man-running", sprite = ( 8, 44 ) }
    , { category = PeopleAndBody, char = "🏃", keywords = [ "person running" ], name = "runner", sprite = ( 8, 50 ) }
    , { category = PeopleAndBody, char = "🏄\u{200D}♀️", keywords = [ "woman surfing", "sports", "ocean", "sea", "summer", "beach", "woman", "female" ], name = "woman-surfing", sprite = ( 8, 56 ) }
    , { category = PeopleAndBody, char = "🏄\u{200D}♂️", keywords = [ "man surfing", "sports", "ocean", "sea", "summer", "beach" ], name = "man-surfing", sprite = ( 9, 4 ) }
    , { category = PeopleAndBody, char = "🏄", keywords = [ "person surfing" ], name = "surfer", sprite = ( 9, 10 ) }
    , { category = Activities, char = "🏅", keywords = [ "sports medal", "award", "winning" ], name = "sports_medal", sprite = ( 9, 16 ) }
    , { category = Activities, char = "🏆", keywords = [ "trophy", "win", "award", "contest", "place", "ftw", "ceremony" ], name = "trophy", sprite = ( 9, 17 ) }
    , { category = PeopleAndBody, char = "🏇", keywords = [ "horse racing", "animal", "betting", "competition", "gambling", "luck" ], name = "horse_racing", sprite = ( 9, 18 ) }
    , { category = Activities, char = "🏈", keywords = [ "american football", "sports", "balls", "NFL" ], name = "football", sprite = ( 9, 24 ) }
    , { category = Activities, char = "🏉", keywords = [ "rugby football", "sports", "team" ], name = "rugby_football", sprite = ( 9, 25 ) }
    , { category = PeopleAndBody, char = "🏊\u{200D}♀️", keywords = [ "woman swimming", "sports", "exercise", "human", "athlete", "water", "summer", "woman", "female" ], name = "woman-swimming", sprite = ( 9, 26 ) }
    , { category = PeopleAndBody, char = "🏊\u{200D}♂️", keywords = [ "man swimming", "sports", "exercise", "human", "athlete", "water", "summer" ], name = "man-swimming", sprite = ( 9, 32 ) }
    , { category = PeopleAndBody, char = "🏊", keywords = [ "person swimming" ], name = "swimmer", sprite = ( 9, 38 ) }
    , { category = PeopleAndBody, char = "🏋️\u{200D}♀️", keywords = [ "woman lifting weights", "sports", "training", "exercise", "woman", "female" ], name = "woman-lifting-weights", sprite = ( 9, 44 ) }
    , { category = PeopleAndBody, char = "🏋️\u{200D}♂️", keywords = [ "man lifting weights" ], name = "man-lifting-weights", sprite = ( 9, 50 ) }
    , { category = PeopleAndBody, char = "🏋️", keywords = [ "person lifting weights", "sports", "training", "exercise" ], name = "weight_lifter", sprite = ( 9, 56 ) }
    , { category = PeopleAndBody, char = "🏌️\u{200D}♀️", keywords = [ "woman golfing", "sports", "business", "woman", "female" ], name = "woman-golfing", sprite = ( 10, 4 ) }
    , { category = PeopleAndBody, char = "🏌️\u{200D}♂️", keywords = [ "man golfing" ], name = "man-golfing", sprite = ( 10, 10 ) }
    , { category = PeopleAndBody, char = "🏌️", keywords = [ "person golfing", "sports", "business" ], name = "golfer", sprite = ( 10, 16 ) }
    , { category = TravelAndPlaces, char = "🏍️", keywords = [ "motorcycle", "race", "sports", "fast" ], name = "racing_motorcycle", sprite = ( 10, 22 ) }
    , { category = TravelAndPlaces, char = "🏎️", keywords = [ "racing car", "sports", "race", "fast", "formula", "f1" ], name = "racing_car", sprite = ( 10, 23 ) }
    , { category = Activities, char = "\u{1F3CF}", keywords = [ "cricket game", "sports" ], name = "cricket_bat_and_ball", sprite = ( 10, 24 ) }
    , { category = Activities, char = "\u{1F3D0}", keywords = [ "volleyball", "sports", "balls" ], name = "volleyball", sprite = ( 10, 25 ) }
    , { category = Activities, char = "\u{1F3D1}", keywords = [ "field hockey", "sports" ], name = "field_hockey_stick_and_ball", sprite = ( 10, 26 ) }
    , { category = Activities, char = "\u{1F3D2}", keywords = [ "ice hockey", "sports" ], name = "ice_hockey_stick_and_puck", sprite = ( 10, 27 ) }
    , { category = Activities, char = "\u{1F3D3}", keywords = [ "ping pong", "sports", "pingpong" ], name = "table_tennis_paddle_and_ball", sprite = ( 10, 28 ) }
    , { category = TravelAndPlaces, char = "🏔️", keywords = [ "snow capped mountain", "photo", "nature", "environment", "winter", "cold" ], name = "snow_capped_mountain", sprite = ( 10, 29 ) }
    , { category = TravelAndPlaces, char = "🏕️", keywords = [ "camping", "photo", "outdoors", "tent" ], name = "camping", sprite = ( 10, 30 ) }
    , { category = TravelAndPlaces, char = "🏖️", keywords = [ "beach with umbrella", "weather", "summer", "sunny", "sand", "mojito" ], name = "beach_with_umbrella", sprite = ( 10, 31 ) }
    , { category = TravelAndPlaces, char = "🏗️", keywords = [ "building construction", "wip", "working", "progress" ], name = "building_construction", sprite = ( 10, 32 ) }
    , { category = TravelAndPlaces, char = "🏘️", keywords = [ "houses", "buildings", "photo" ], name = "house_buildings", sprite = ( 10, 33 ) }
    , { category = TravelAndPlaces, char = "🏙️", keywords = [ "cityscape", "photo", "night life", "urban" ], name = "cityscape", sprite = ( 10, 34 ) }
    , { category = TravelAndPlaces, char = "🏚️", keywords = [ "derelict house", "abandon", "evict", "broken", "building" ], name = "derelict_house_building", sprite = ( 10, 35 ) }
    , { category = TravelAndPlaces, char = "🏛️", keywords = [ "classical building", "art", "culture", "history" ], name = "classical_building", sprite = ( 10, 36 ) }
    , { category = TravelAndPlaces, char = "🏜️", keywords = [ "desert", "photo", "warm", "saharah" ], name = "desert", sprite = ( 10, 37 ) }
    , { category = TravelAndPlaces, char = "🏝️", keywords = [ "desert island", "photo", "tropical", "mojito" ], name = "desert_island", sprite = ( 10, 38 ) }
    , { category = TravelAndPlaces, char = "🏞️", keywords = [ "national park", "photo", "environment", "nature" ], name = "national_park", sprite = ( 10, 39 ) }
    , { category = TravelAndPlaces, char = "🏟️", keywords = [ "stadium", "photo", "place", "sports", "concert", "venue" ], name = "stadium", sprite = ( 10, 40 ) }
    , { category = TravelAndPlaces, char = "🏠", keywords = [ "house", "building", "home" ], name = "house", sprite = ( 10, 41 ) }
    , { category = TravelAndPlaces, char = "🏡", keywords = [ "house with garden", "home", "plant", "nature" ], name = "house_with_garden", sprite = ( 10, 42 ) }
    , { category = TravelAndPlaces, char = "🏢", keywords = [ "office building", "building", "bureau", "work" ], name = "office", sprite = ( 10, 43 ) }
    , { category = TravelAndPlaces, char = "🏣", keywords = [ "japanese post office", "building", "envelope", "communication" ], name = "post_office", sprite = ( 10, 44 ) }
    , { category = TravelAndPlaces, char = "🏤", keywords = [ "post office", "building", "email" ], name = "european_post_office", sprite = ( 10, 45 ) }
    , { category = TravelAndPlaces, char = "🏥", keywords = [ "hospital", "building", "health", "surgery", "doctor" ], name = "hospital", sprite = ( 10, 46 ) }
    , { category = TravelAndPlaces, char = "🏦", keywords = [ "bank", "building", "money", "sales", "cash", "business", "enterprise" ], name = "bank", sprite = ( 10, 47 ) }
    , { category = Symbols, char = "🏧", keywords = [ "atm sign", "money", "sales", "cash", "blue square", "payment", "bank" ], name = "atm", sprite = ( 10, 48 ) }
    , { category = TravelAndPlaces, char = "🏨", keywords = [ "hotel", "building", "accomodation", "checkin" ], name = "hotel", sprite = ( 10, 49 ) }
    , { category = TravelAndPlaces, char = "🏩", keywords = [ "love hotel", "like", "affection", "dating" ], name = "love_hotel", sprite = ( 10, 50 ) }
    , { category = TravelAndPlaces, char = "🏪", keywords = [ "convenience store", "building", "shopping", "groceries" ], name = "convenience_store", sprite = ( 10, 51 ) }
    , { category = TravelAndPlaces, char = "🏫", keywords = [ "school", "building", "student", "education", "learn", "teach" ], name = "school", sprite = ( 10, 52 ) }
    , { category = TravelAndPlaces, char = "🏬", keywords = [ "department store", "building", "shopping", "mall" ], name = "department_store", sprite = ( 10, 53 ) }
    , { category = TravelAndPlaces, char = "🏭", keywords = [ "factory", "building", "industry", "pollution", "smoke" ], name = "factory", sprite = ( 10, 54 ) }
    , { category = Objects, char = "🏮", keywords = [ "red paper lantern", "light", "paper", "halloween", "spooky" ], name = "izakaya_lantern", sprite = ( 10, 55 ) }
    , { category = TravelAndPlaces, char = "🏯", keywords = [ "japanese castle", "photo", "building" ], name = "japanese_castle", sprite = ( 10, 56 ) }
    , { category = TravelAndPlaces, char = "🏰", keywords = [ "castle", "building", "royalty", "history" ], name = "european_castle", sprite = ( 10, 57 ) }
    , { category = Flags, char = "🏳️\u{200D}🌈", keywords = [ "rainbow flag", "flag", "rainbow", "pride", "gay", "lgbt", "glbt", "queer", "homosexual", "lesbian", "bisexual", "transgender" ], name = "rainbow-flag", sprite = ( 11, 0 ) }
    , { category = Flags, char = "🏳️\u{200D}⚧️", keywords = [ "transgender flag", "lgbtq" ], name = "transgender_flag", sprite = ( 11, 1 ) }
    , { category = Flags, char = "🏳️", keywords = [ "white flag", "losing", "loser", "lost", "surrender", "give up", "fail" ], name = "waving_white_flag", sprite = ( 11, 2 ) }
    , { category = Flags, char = "🏴\u{200D}☠️", keywords = [ "pirate flag", "skull", "crossbones", "flag", "banner" ], name = "pirate_flag", sprite = ( 11, 3 ) }
    , { category = Flags, char = "🏴\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}", keywords = [ "flag england", "flag", "english" ], name = "flag-england", sprite = ( 11, 4 ) }
    , { category = Flags, char = "🏴\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}", keywords = [ "flag scotland", "flag", "scottish" ], name = "flag-scotland", sprite = ( 11, 5 ) }
    , { category = Flags, char = "🏴\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}", keywords = [ "flag wales", "flag", "welsh" ], name = "flag-wales", sprite = ( 11, 6 ) }
    , { category = Flags, char = "🏴", keywords = [ "black flag", "pirate" ], name = "waving_black_flag", sprite = ( 11, 7 ) }
    , { category = AnimalsAndNature, char = "🏵️", keywords = [ "rosette", "flower", "decoration", "military" ], name = "rosette", sprite = ( 11, 8 ) }
    , { category = Objects, char = "🏷️", keywords = [ "label", "sale", "tag" ], name = "label", sprite = ( 11, 9 ) }
    , { category = Activities, char = "\u{1F3F8}", keywords = [ "badminton", "sports" ], name = "badminton_racquet_and_shuttlecock", sprite = ( 11, 10 ) }
    , { category = Objects, char = "\u{1F3F9}", keywords = [ "bow and arrow", "sports" ], name = "bow_and_arrow", sprite = ( 11, 11 ) }
    , { category = FoodAndDrink, char = "\u{1F3FA}", keywords = [ "amphora", "vase", "jar" ], name = "amphora", sprite = ( 11, 12 ) }
    , { category = SkinTones, char = "\u{1F3FB}", keywords = [], name = "skin-tone-2", sprite = ( 11, 13 ) }
    , { category = SkinTones, char = "\u{1F3FC}", keywords = [], name = "skin-tone-3", sprite = ( 11, 14 ) }
    , { category = SkinTones, char = "\u{1F3FD}", keywords = [], name = "skin-tone-4", sprite = ( 11, 15 ) }
    , { category = SkinTones, char = "\u{1F3FE}", keywords = [], name = "skin-tone-5", sprite = ( 11, 16 ) }
    , { category = SkinTones, char = "\u{1F3FF}", keywords = [], name = "skin-tone-6", sprite = ( 11, 17 ) }
    , { category = AnimalsAndNature, char = "🐀", keywords = [ "rat", "animal", "mouse", "rodent" ], name = "rat", sprite = ( 11, 18 ) }
    , { category = AnimalsAndNature, char = "🐁", keywords = [ "mouse", "animal", "nature", "rodent" ], name = "mouse2", sprite = ( 11, 19 ) }
    , { category = AnimalsAndNature, char = "🐂", keywords = [ "ox", "animal", "cow", "beef" ], name = "ox", sprite = ( 11, 20 ) }
    , { category = AnimalsAndNature, char = "🐃", keywords = [ "water buffalo", "animal", "nature", "ox", "cow" ], name = "water_buffalo", sprite = ( 11, 21 ) }
    , { category = AnimalsAndNature, char = "🐄", keywords = [ "cow", "beef", "ox", "animal", "nature", "moo", "milk" ], name = "cow2", sprite = ( 11, 22 ) }
    , { category = AnimalsAndNature, char = "🐅", keywords = [ "tiger", "animal", "nature", "roar" ], name = "tiger2", sprite = ( 11, 23 ) }
    , { category = AnimalsAndNature, char = "🐆", keywords = [ "leopard", "animal", "nature" ], name = "leopard", sprite = ( 11, 24 ) }
    , { category = AnimalsAndNature, char = "🐇", keywords = [ "rabbit", "animal", "nature", "pet", "magic", "spring" ], name = "rabbit2", sprite = ( 11, 25 ) }
    , { category = AnimalsAndNature, char = "🐈\u{200D}⬛", keywords = [ "black cat", "superstition", "luck" ], name = "black_cat", sprite = ( 11, 26 ) }
    , { category = AnimalsAndNature, char = "🐈", keywords = [ "cat", "animal", "meow", "pet", "cats" ], name = "cat2", sprite = ( 11, 27 ) }
    , { category = AnimalsAndNature, char = "🐉", keywords = [ "dragon", "animal", "myth", "nature", "chinese", "green" ], name = "dragon", sprite = ( 11, 28 ) }
    , { category = AnimalsAndNature, char = "🐊", keywords = [ "crocodile", "animal", "nature", "reptile", "lizard", "alligator" ], name = "crocodile", sprite = ( 11, 29 ) }
    , { category = AnimalsAndNature, char = "🐋", keywords = [ "whale", "animal", "nature", "sea", "ocean" ], name = "whale2", sprite = ( 11, 30 ) }
    , { category = AnimalsAndNature, char = "🐌", keywords = [ "snail", "slow", "animal", "shell" ], name = "snail", sprite = ( 11, 31 ) }
    , { category = AnimalsAndNature, char = "🐍", keywords = [ "snake", "animal", "evil", "nature", "hiss", "python" ], name = "snake", sprite = ( 11, 32 ) }
    , { category = AnimalsAndNature, char = "🐎", keywords = [ "horse", "animal", "gamble", "luck" ], name = "racehorse", sprite = ( 11, 33 ) }
    , { category = AnimalsAndNature, char = "🐏", keywords = [ "ram", "animal", "sheep", "nature" ], name = "ram", sprite = ( 11, 34 ) }
    , { category = AnimalsAndNature, char = "🐐", keywords = [ "goat", "animal", "nature" ], name = "goat", sprite = ( 11, 35 ) }
    , { category = AnimalsAndNature, char = "🐑", keywords = [ "ewe", "animal", "nature", "wool", "shipit" ], name = "sheep", sprite = ( 11, 36 ) }
    , { category = AnimalsAndNature, char = "🐒", keywords = [ "monkey", "animal", "nature", "banana", "circus" ], name = "monkey", sprite = ( 11, 37 ) }
    , { category = AnimalsAndNature, char = "🐓", keywords = [ "rooster", "animal", "nature", "chicken" ], name = "rooster", sprite = ( 11, 38 ) }
    , { category = AnimalsAndNature, char = "🐔", keywords = [ "chicken", "animal", "cluck", "nature", "bird" ], name = "chicken", sprite = ( 11, 39 ) }
    , { category = AnimalsAndNature, char = "🐕\u{200D}\u{1F9BA}", keywords = [ "service dog" ], name = "service_dog", sprite = ( 11, 40 ) }
    , { category = AnimalsAndNature, char = "🐕", keywords = [ "dog", "animal", "nature", "friend", "doge", "pet", "faithful" ], name = "dog2", sprite = ( 11, 41 ) }
    , { category = AnimalsAndNature, char = "🐖", keywords = [ "pig", "animal", "nature" ], name = "pig2", sprite = ( 11, 42 ) }
    , { category = AnimalsAndNature, char = "🐗", keywords = [ "boar", "animal", "nature" ], name = "boar", sprite = ( 11, 43 ) }
    , { category = AnimalsAndNature, char = "🐘", keywords = [ "elephant", "animal", "nature", "nose", "th", "circus" ], name = "elephant", sprite = ( 11, 44 ) }
    , { category = AnimalsAndNature, char = "🐙", keywords = [ "octopus", "animal", "creature", "ocean", "sea", "nature", "beach" ], name = "octopus", sprite = ( 11, 45 ) }
    , { category = AnimalsAndNature, char = "🐚", keywords = [ "spiral shell", "nature", "sea", "beach" ], name = "shell", sprite = ( 11, 46 ) }
    , { category = AnimalsAndNature, char = "🐛", keywords = [ "bug", "animal", "insect", "nature", "worm" ], name = "bug", sprite = ( 11, 47 ) }
    , { category = AnimalsAndNature, char = "🐜", keywords = [ "ant", "animal", "insect", "nature", "bug" ], name = "ant", sprite = ( 11, 48 ) }
    , { category = AnimalsAndNature, char = "🐝", keywords = [ "honeybee", "animal", "insect", "nature", "bug", "spring", "honey" ], name = "bee", sprite = ( 11, 49 ) }
    , { category = AnimalsAndNature, char = "🐞", keywords = [ "lady beetle", "animal", "insect", "nature", "ladybug" ], name = "beetle", sprite = ( 11, 50 ) }
    , { category = AnimalsAndNature, char = "🐟", keywords = [ "fish", "animal", "food", "nature" ], name = "fish", sprite = ( 11, 51 ) }
    , { category = AnimalsAndNature, char = "🐠", keywords = [ "tropical fish", "animal", "swim", "ocean", "beach", "nemo" ], name = "tropical_fish", sprite = ( 11, 52 ) }
    , { category = AnimalsAndNature, char = "🐡", keywords = [ "blowfish", "animal", "nature", "food", "sea", "ocean" ], name = "blowfish", sprite = ( 11, 53 ) }
    , { category = AnimalsAndNature, char = "🐢", keywords = [ "turtle", "animal", "slow", "nature", "tortoise" ], name = "turtle", sprite = ( 11, 54 ) }
    , { category = AnimalsAndNature, char = "🐣", keywords = [ "hatching chick", "animal", "chicken", "egg", "born", "baby", "bird" ], name = "hatching_chick", sprite = ( 11, 55 ) }
    , { category = AnimalsAndNature, char = "🐤", keywords = [ "baby chick", "animal", "chicken", "bird" ], name = "baby_chick", sprite = ( 11, 56 ) }
    , { category = AnimalsAndNature, char = "🐥", keywords = [ "front facing baby chick", "animal", "chicken", "baby", "bird" ], name = "hatched_chick", sprite = ( 11, 57 ) }
    , { category = AnimalsAndNature, char = "🐦", keywords = [ "bird", "animal", "nature", "fly", "tweet", "spring" ], name = "bird", sprite = ( 12, 0 ) }
    , { category = AnimalsAndNature, char = "🐧", keywords = [ "penguin", "animal", "nature" ], name = "penguin", sprite = ( 12, 1 ) }
    , { category = AnimalsAndNature, char = "🐨", keywords = [ "koala", "animal", "nature" ], name = "koala", sprite = ( 12, 2 ) }
    , { category = AnimalsAndNature, char = "🐩", keywords = [ "poodle", "dog", "animal", "101", "nature", "pet" ], name = "poodle", sprite = ( 12, 3 ) }
    , { category = AnimalsAndNature, char = "🐪", keywords = [ "camel", "animal", "hot", "desert", "hump" ], name = "dromedary_camel", sprite = ( 12, 4 ) }
    , { category = AnimalsAndNature, char = "🐫", keywords = [ "two hump camel", "animal", "nature", "hot", "desert", "hump" ], name = "camel", sprite = ( 12, 5 ) }
    , { category = AnimalsAndNature, char = "🐬", keywords = [ "dolphin", "animal", "nature", "fish", "sea", "ocean", "flipper", "fins", "beach" ], name = "dolphin", sprite = ( 12, 6 ) }
    , { category = AnimalsAndNature, char = "🐭", keywords = [ "mouse face", "animal", "nature", "cheese wedge", "rodent" ], name = "mouse", sprite = ( 12, 7 ) }
    , { category = AnimalsAndNature, char = "🐮", keywords = [ "cow face", "beef", "ox", "animal", "nature", "moo", "milk" ], name = "cow", sprite = ( 12, 8 ) }
    , { category = AnimalsAndNature, char = "🐯", keywords = [ "tiger face", "animal", "cat", "danger", "wild", "nature", "roar" ], name = "tiger", sprite = ( 12, 9 ) }
    , { category = AnimalsAndNature, char = "🐰", keywords = [ "rabbit face", "animal", "nature", "pet", "spring", "magic", "bunny" ], name = "rabbit", sprite = ( 12, 10 ) }
    , { category = AnimalsAndNature, char = "🐱", keywords = [ "cat face", "animal", "meow", "nature", "pet", "kitten" ], name = "cat", sprite = ( 12, 11 ) }
    , { category = AnimalsAndNature, char = "🐲", keywords = [ "dragon face", "animal", "myth", "nature", "chinese", "green" ], name = "dragon_face", sprite = ( 12, 12 ) }
    , { category = AnimalsAndNature, char = "🐳", keywords = [ "spouting whale", "animal", "nature", "sea", "ocean" ], name = "whale", sprite = ( 12, 13 ) }
    , { category = AnimalsAndNature, char = "🐴", keywords = [ "horse face", "animal", "brown", "nature" ], name = "horse", sprite = ( 12, 14 ) }
    , { category = AnimalsAndNature, char = "🐵", keywords = [ "monkey face", "animal", "nature", "circus" ], name = "monkey_face", sprite = ( 12, 15 ) }
    , { category = AnimalsAndNature, char = "🐶", keywords = [ "dog face", "animal", "friend", "nature", "woof", "puppy", "pet", "faithful" ], name = "dog", sprite = ( 12, 16 ) }
    , { category = AnimalsAndNature, char = "🐷", keywords = [ "pig face", "animal", "oink", "nature" ], name = "pig", sprite = ( 12, 17 ) }
    , { category = AnimalsAndNature, char = "🐸", keywords = [ "frog", "animal", "nature", "croak", "toad" ], name = "frog", sprite = ( 12, 18 ) }
    , { category = AnimalsAndNature, char = "🐹", keywords = [ "hamster", "animal", "nature" ], name = "hamster", sprite = ( 12, 19 ) }
    , { category = AnimalsAndNature, char = "🐺", keywords = [ "wolf", "animal", "nature", "wild" ], name = "wolf", sprite = ( 12, 20 ) }
    , { category = AnimalsAndNature, char = "🐻\u{200D}❄️", keywords = [ "polar bear", "animal", "arctic" ], name = "polar_bear", sprite = ( 12, 21 ) }
    , { category = AnimalsAndNature, char = "🐻", keywords = [ "bear", "animal", "nature", "wild" ], name = "bear", sprite = ( 12, 22 ) }
    , { category = AnimalsAndNature, char = "🐼", keywords = [ "panda", "animal", "nature", "panda" ], name = "panda_face", sprite = ( 12, 23 ) }
    , { category = AnimalsAndNature, char = "🐽", keywords = [ "pig nose", "animal", "oink" ], name = "pig_nose", sprite = ( 12, 24 ) }
    , { category = AnimalsAndNature, char = "🐾", keywords = [ "paw prints", "animal", "tracking", "footprints", "dog", "cat", "pet", "feet" ], name = "feet", sprite = ( 12, 25 ) }
    , { category = AnimalsAndNature, char = "🐿️", keywords = [ "chipmunk", "animal", "nature", "rodent", "squirrel" ], name = "chipmunk", sprite = ( 12, 26 ) }
    , { category = PeopleAndBody, char = "👀", keywords = [ "eyes", "look", "watch", "stalk", "peek", "see" ], name = "eyes", sprite = ( 12, 27 ) }
    , { category = SmileysAndEmotion, char = "👁️\u{200D}🗨️", keywords = [ "eye in speech bubble" ], name = "eye-in-speech-bubble", sprite = ( 12, 28 ) }
    , { category = PeopleAndBody, char = "👁️", keywords = [ "eye", "face", "look", "see", "watch", "stare" ], name = "eye", sprite = ( 12, 29 ) }
    , { category = PeopleAndBody, char = "👂", keywords = [ "ear", "face", "hear", "sound", "listen" ], name = "ear", sprite = ( 12, 30 ) }
    , { category = PeopleAndBody, char = "👃", keywords = [ "nose", "smell", "sniff" ], name = "nose", sprite = ( 12, 36 ) }
    , { category = PeopleAndBody, char = "👄", keywords = [ "mouth", "mouth", "kiss" ], name = "lips", sprite = ( 12, 42 ) }
    , { category = PeopleAndBody, char = "👅", keywords = [ "tongue", "mouth", "playful" ], name = "tongue", sprite = ( 12, 43 ) }
    , { category = PeopleAndBody, char = "👆", keywords = [ "backhand index pointing up", "fingers", "hand", "direction", "up" ], name = "point_up_2", sprite = ( 12, 44 ) }
    , { category = PeopleAndBody, char = "👇", keywords = [ "backhand index pointing down", "fingers", "hand", "direction", "down" ], name = "point_down", sprite = ( 12, 50 ) }
    , { category = PeopleAndBody, char = "👈", keywords = [ "backhand index pointing left", "direction", "fingers", "hand", "left" ], name = "point_left", sprite = ( 12, 56 ) }
    , { category = PeopleAndBody, char = "👉", keywords = [ "backhand index pointing right", "fingers", "hand", "direction", "right" ], name = "point_right", sprite = ( 13, 4 ) }
    , { category = PeopleAndBody, char = "👊", keywords = [ "oncoming fist", "angry", "violence", "fist", "hit", "attack", "hand" ], name = "facepunch", sprite = ( 13, 10 ) }
    , { category = PeopleAndBody, char = "👋", keywords = [ "waving hand", "hands", "gesture", "goodbye", "solong", "farewell", "hello", "hi", "palm" ], name = "wave", sprite = ( 13, 16 ) }
    , { category = PeopleAndBody, char = "👌", keywords = [ "ok hand", "fingers", "limbs", "perfect", "ok", "okay" ], name = "ok_hand", sprite = ( 13, 22 ) }
    , { category = PeopleAndBody, char = "👍", keywords = [ "thumbs up", "thumbsup", "yes", "awesome", "good", "agree", "accept", "cool", "hand", "like" ], name = "+1", sprite = ( 13, 28 ) }
    , { category = PeopleAndBody, char = "👎", keywords = [ "thumbs down", "thumbsdown", "no", "dislike", "hand" ], name = "-1", sprite = ( 13, 34 ) }
    , { category = PeopleAndBody, char = "👏", keywords = [ "clapping hands", "hands", "praise", "applause", "congrats", "yay" ], name = "clap", sprite = ( 13, 40 ) }
    , { category = PeopleAndBody, char = "👐", keywords = [ "open hands", "fingers", "butterfly", "hands", "open" ], name = "open_hands", sprite = ( 13, 46 ) }
    , { category = Objects, char = "👑", keywords = [ "crown", "king", "kod", "leader", "royalty", "lord" ], name = "crown", sprite = ( 13, 52 ) }
    , { category = Objects, char = "👒", keywords = [ "woman s hat", "fashion", "accessories", "female", "lady", "spring" ], name = "womans_hat", sprite = ( 13, 53 ) }
    , { category = Objects, char = "👓", keywords = [ "glasses", "fashion", "accessories", "eyesight", "nerdy", "dork", "geek" ], name = "eyeglasses", sprite = ( 13, 54 ) }
    , { category = Objects, char = "👔", keywords = [ "necktie", "shirt", "suitup", "formal", "fashion", "cloth", "business" ], name = "necktie", sprite = ( 13, 55 ) }
    , { category = Objects, char = "👕", keywords = [ "t shirt", "fashion", "cloth", "casual", "shirt", "tee" ], name = "shirt", sprite = ( 13, 56 ) }
    , { category = Objects, char = "👖", keywords = [ "jeans", "fashion", "shopping" ], name = "jeans", sprite = ( 13, 57 ) }
    , { category = Objects, char = "👗", keywords = [ "dress", "clothes", "fashion", "shopping" ], name = "dress", sprite = ( 14, 0 ) }
    , { category = Objects, char = "👘", keywords = [ "kimono", "dress", "fashion", "women", "female", "japanese" ], name = "kimono", sprite = ( 14, 1 ) }
    , { category = Objects, char = "👙", keywords = [ "bikini", "swimming", "female", "woman", "girl", "fashion", "beach", "summer" ], name = "bikini", sprite = ( 14, 2 ) }
    , { category = Objects, char = "👚", keywords = [ "woman s clothes", "fashion", "shopping bags", "female" ], name = "womans_clothes", sprite = ( 14, 3 ) }
    , { category = Objects, char = "👛", keywords = [ "purse", "fashion", "accessories", "money", "sales", "shopping" ], name = "purse", sprite = ( 14, 4 ) }
    , { category = Objects, char = "👜", keywords = [ "handbag", "fashion", "accessory", "accessories", "shopping" ], name = "handbag", sprite = ( 14, 5 ) }
    , { category = Objects, char = "👝", keywords = [ "clutch bag", "bag", "accessories", "shopping" ], name = "pouch", sprite = ( 14, 6 ) }
    , { category = Objects, char = "👞", keywords = [ "man s shoe", "fashion", "male" ], name = "mans_shoe", sprite = ( 14, 7 ) }
    , { category = Objects, char = "👟", keywords = [ "running shoe", "shoes", "sports", "sneakers" ], name = "athletic_shoe", sprite = ( 14, 8 ) }
    , { category = Objects, char = "👠", keywords = [ "high heeled shoe", "fashion", "shoes", "female", "pumps", "stiletto" ], name = "high_heel", sprite = ( 14, 9 ) }
    , { category = Objects, char = "👡", keywords = [ "woman s sandal", "shoes", "fashion", "flip flops" ], name = "sandal", sprite = ( 14, 10 ) }
    , { category = Objects, char = "👢", keywords = [ "woman s boot", "shoes", "fashion" ], name = "boot", sprite = ( 14, 11 ) }
    , { category = PeopleAndBody, char = "👣", keywords = [ "footprints", "feet", "tracking", "walking", "beach" ], name = "footprints", sprite = ( 14, 12 ) }
    , { category = PeopleAndBody, char = "👤", keywords = [ "bust in silhouette", "user", "person", "human" ], name = "bust_in_silhouette", sprite = ( 14, 13 ) }
    , { category = PeopleAndBody, char = "👥", keywords = [ "busts in silhouette", "user", "person", "human", "group", "team" ], name = "busts_in_silhouette", sprite = ( 14, 14 ) }
    , { category = PeopleAndBody, char = "👦", keywords = [ "boy", "man", "male", "guy", "teenager" ], name = "boy", sprite = ( 14, 15 ) }
    , { category = PeopleAndBody, char = "👧", keywords = [ "girl", "female", "woman", "teenager" ], name = "girl", sprite = ( 14, 21 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🌾", keywords = [ "man farmer", "rancher", "gardener", "man", "human" ], name = "male-farmer", sprite = ( 14, 27 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🍳", keywords = [ "man cook", "chef", "man", "human" ], name = "male-cook", sprite = ( 14, 33 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🍼", keywords = [ "man feeding baby", "birth", "food" ], name = "man_feeding_baby", sprite = ( 14, 39 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🎓", keywords = [ "man student", "graduate", "man", "human" ], name = "male-student", sprite = ( 14, 45 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🎤", keywords = [ "man singer", "rockstar", "entertainer", "man", "human" ], name = "male-singer", sprite = ( 14, 51 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🎨", keywords = [ "man artist", "painter", "man", "human" ], name = "male-artist", sprite = ( 14, 57 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🏫", keywords = [ "man teacher", "instructor", "professor", "man", "human" ], name = "male-teacher", sprite = ( 15, 5 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🏭", keywords = [ "man factory worker", "assembly", "industrial", "man", "human" ], name = "male-factory-worker", sprite = ( 15, 11 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👦\u{200D}👦", keywords = [ "family man boy boy", "home", "parent", "people", "human", "children" ], name = "man-boy-boy", sprite = ( 15, 17 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👦", keywords = [ "family man boy", "home", "parent", "people", "human", "child" ], name = "man-boy", sprite = ( 15, 18 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👧\u{200D}👦", keywords = [ "family man girl boy", "home", "parent", "people", "human", "children" ], name = "man-girl-boy", sprite = ( 15, 19 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👧\u{200D}👧", keywords = [ "family man girl girl", "home", "parent", "people", "human", "children" ], name = "man-girl-girl", sprite = ( 15, 20 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👧", keywords = [ "family man girl", "home", "parent", "people", "human", "child" ], name = "man-girl", sprite = ( 15, 21 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👦", keywords = [ "family man man boy", "home", "parents", "people", "human", "children" ], name = "man-man-boy", sprite = ( 15, 22 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👦\u{200D}👦", keywords = [ "family man man boy boy", "home", "parents", "people", "human", "children" ], name = "man-man-boy-boy", sprite = ( 15, 23 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👧", keywords = [ "family man man girl", "home", "parents", "people", "human", "children" ], name = "man-man-girl", sprite = ( 15, 24 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👧\u{200D}👦", keywords = [ "family man man girl boy", "home", "parents", "people", "human", "children" ], name = "man-man-girl-boy", sprite = ( 15, 25 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👧\u{200D}👧", keywords = [ "family man man girl girl", "home", "parents", "people", "human", "children" ], name = "man-man-girl-girl", sprite = ( 15, 26 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👦", keywords = [ "family man woman boy" ], name = "man-woman-boy", sprite = ( 15, 27 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👦\u{200D}👦", keywords = [ "family man woman boy boy", "home", "parents", "people", "human", "children" ], name = "man-woman-boy-boy", sprite = ( 15, 28 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👧", keywords = [ "family man woman girl", "home", "parents", "people", "human", "child" ], name = "man-woman-girl", sprite = ( 15, 29 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👧\u{200D}👦", keywords = [ "family man woman girl boy", "home", "parents", "people", "human", "children" ], name = "man-woman-girl-boy", sprite = ( 15, 30 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👧\u{200D}👧", keywords = [ "family man woman girl girl", "home", "parents", "people", "human", "children" ], name = "man-woman-girl-girl", sprite = ( 15, 31 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}💻", keywords = [ "man technologist", "coder", "developer", "engineer", "programmer", "software", "man", "human", "laptop", "computer" ], name = "male-technologist", sprite = ( 15, 32 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}💼", keywords = [ "man office worker", "business", "manager", "man", "human" ], name = "male-office-worker", sprite = ( 15, 38 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🔧", keywords = [ "man mechanic", "plumber", "man", "human", "wrench" ], name = "male-mechanic", sprite = ( 15, 44 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🔬", keywords = [ "man scientist", "biologist", "chemist", "engineer", "physicist", "man", "human" ], name = "male-scientist", sprite = ( 15, 50 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🚀", keywords = [ "man astronaut", "space", "rocket", "man", "human" ], name = "male-astronaut", sprite = ( 15, 56 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}🚒", keywords = [ "man firefighter", "fireman", "man", "human" ], name = "male-firefighter", sprite = ( 16, 4 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9AF}", keywords = [ "man with probing cane" ], name = "man_with_probing_cane", sprite = ( 16, 10 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B0}", keywords = [ "man red hair" ], name = "red_haired_man", sprite = ( 16, 16 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B1}", keywords = [ "man curly hair" ], name = "curly_haired_man", sprite = ( 16, 22 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B2}", keywords = [ "man bald" ], name = "bald_man", sprite = ( 16, 28 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B3}", keywords = [ "man white hair" ], name = "white_haired_man", sprite = ( 16, 34 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9BC}", keywords = [ "man in motorized wheelchair" ], name = "man_in_motorized_wheelchair", sprite = ( 16, 40 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9BD}", keywords = [ "man in manual wheelchair" ], name = "man_in_manual_wheelchair", sprite = ( 16, 46 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}⚕️", keywords = [ "man health worker", "doctor", "nurse", "therapist", "healthcare", "man", "human" ], name = "male-doctor", sprite = ( 16, 52 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}⚖️", keywords = [ "man judge", "justice", "court", "man", "human" ], name = "male-judge", sprite = ( 17, 0 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}✈️", keywords = [ "man pilot", "aviator", "plane", "man", "human" ], name = "male-pilot", sprite = ( 17, 6 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}❤️\u{200D}👨", keywords = [ "couple with heart man man", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage" ], name = "man-heart-man", sprite = ( 17, 12 ) }
    , { category = PeopleAndBody, char = "👨\u{200D}❤️\u{200D}💋\u{200D}👨", keywords = [ "kiss man man", "pair", "valentines", "love", "like", "dating", "marriage" ], name = "man-kiss-man", sprite = ( 17, 13 ) }
    , { category = PeopleAndBody, char = "👨", keywords = [ "man", "mustache", "father", "dad", "guy", "classy", "sir", "moustache" ], name = "man", sprite = ( 17, 14 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🌾", keywords = [ "woman farmer", "rancher", "gardener", "woman", "human" ], name = "female-farmer", sprite = ( 17, 20 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🍳", keywords = [ "woman cook", "chef", "woman", "human" ], name = "female-cook", sprite = ( 17, 26 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🍼", keywords = [ "woman feeding baby", "birth", "food" ], name = "woman_feeding_baby", sprite = ( 17, 32 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🎓", keywords = [ "woman student", "graduate", "woman", "human" ], name = "female-student", sprite = ( 17, 38 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🎤", keywords = [ "woman singer", "rockstar", "entertainer", "woman", "human" ], name = "female-singer", sprite = ( 17, 44 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🎨", keywords = [ "woman artist", "painter", "woman", "human" ], name = "female-artist", sprite = ( 17, 50 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🏫", keywords = [ "woman teacher", "instructor", "professor", "woman", "human" ], name = "female-teacher", sprite = ( 17, 56 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🏭", keywords = [ "woman factory worker", "assembly", "industrial", "woman", "human" ], name = "female-factory-worker", sprite = ( 18, 4 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👦\u{200D}👦", keywords = [ "family woman boy boy", "home", "parent", "people", "human", "children" ], name = "woman-boy-boy", sprite = ( 18, 10 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👦", keywords = [ "family woman boy", "home", "parent", "people", "human", "child" ], name = "woman-boy", sprite = ( 18, 11 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👧\u{200D}👦", keywords = [ "family woman girl boy", "home", "parent", "people", "human", "children" ], name = "woman-girl-boy", sprite = ( 18, 12 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👧\u{200D}👧", keywords = [ "family woman girl girl", "home", "parent", "people", "human", "children" ], name = "woman-girl-girl", sprite = ( 18, 13 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👧", keywords = [ "family woman girl", "home", "parent", "people", "human", "child" ], name = "woman-girl", sprite = ( 18, 14 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👦", keywords = [ "family woman woman boy", "home", "parents", "people", "human", "children" ], name = "woman-woman-boy", sprite = ( 18, 15 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👦\u{200D}👦", keywords = [ "family woman woman boy boy", "home", "parents", "people", "human", "children" ], name = "woman-woman-boy-boy", sprite = ( 18, 16 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👧", keywords = [ "family woman woman girl", "home", "parents", "people", "human", "children" ], name = "woman-woman-girl", sprite = ( 18, 17 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👧\u{200D}👦", keywords = [ "family woman woman girl boy", "home", "parents", "people", "human", "children" ], name = "woman-woman-girl-boy", sprite = ( 18, 18 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👧\u{200D}👧", keywords = [ "family woman woman girl girl", "home", "parents", "people", "human", "children" ], name = "woman-woman-girl-girl", sprite = ( 18, 19 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}💻", keywords = [ "woman technologist", "coder", "developer", "engineer", "programmer", "software", "woman", "human", "laptop", "computer" ], name = "female-technologist", sprite = ( 18, 20 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}💼", keywords = [ "woman office worker", "business", "manager", "woman", "human" ], name = "female-office-worker", sprite = ( 18, 26 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🔧", keywords = [ "woman mechanic", "plumber", "woman", "human", "wrench" ], name = "female-mechanic", sprite = ( 18, 32 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🔬", keywords = [ "woman scientist", "biologist", "chemist", "engineer", "physicist", "woman", "human" ], name = "female-scientist", sprite = ( 18, 38 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🚀", keywords = [ "woman astronaut", "space", "rocket", "woman", "human" ], name = "female-astronaut", sprite = ( 18, 44 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}🚒", keywords = [ "woman firefighter", "fireman", "woman", "human" ], name = "female-firefighter", sprite = ( 18, 50 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9AF}", keywords = [ "woman with probing cane" ], name = "woman_with_probing_cane", sprite = ( 18, 56 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B0}", keywords = [ "woman red hair" ], name = "red_haired_woman", sprite = ( 19, 4 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B1}", keywords = [ "woman curly hair" ], name = "curly_haired_woman", sprite = ( 19, 10 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B2}", keywords = [ "woman bald" ], name = "bald_woman", sprite = ( 19, 16 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B3}", keywords = [ "woman white hair" ], name = "white_haired_woman", sprite = ( 19, 22 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9BC}", keywords = [ "woman in motorized wheelchair" ], name = "woman_in_motorized_wheelchair", sprite = ( 19, 28 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9BD}", keywords = [ "woman in manual wheelchair" ], name = "woman_in_manual_wheelchair", sprite = ( 19, 34 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}⚕️", keywords = [ "woman health worker", "doctor", "nurse", "therapist", "healthcare", "woman", "human" ], name = "female-doctor", sprite = ( 19, 40 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}⚖️", keywords = [ "woman judge", "justice", "court", "woman", "human" ], name = "female-judge", sprite = ( 19, 46 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}✈️", keywords = [ "woman pilot", "aviator", "plane", "woman", "human" ], name = "female-pilot", sprite = ( 19, 52 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}👨", keywords = [ "couple with heart woman man" ], name = "woman-heart-man", sprite = ( 20, 0 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}👩", keywords = [ "couple with heart woman woman", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage" ], name = "woman-heart-woman", sprite = ( 20, 1 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}💋\u{200D}👨", keywords = [ "kiss woman man" ], name = "woman-kiss-man", sprite = ( 20, 2 ) }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}💋\u{200D}👩", keywords = [ "kiss woman woman", "pair", "valentines", "love", "like", "dating", "marriage" ], name = "woman-kiss-woman", sprite = ( 20, 3 ) }
    , { category = PeopleAndBody, char = "👩", keywords = [ "woman", "female", "girls", "lady" ], name = "woman", sprite = ( 20, 4 ) }
    , { category = PeopleAndBody, char = "👪", keywords = [ "family", "home", "parents", "child", "mom", "dad", "father", "mother", "people", "human" ], name = "family", sprite = ( 20, 10 ) }
    , { category = PeopleAndBody, char = "👫", keywords = [ "woman and man holding hands", "pair", "people", "human", "love", "date", "dating", "like", "affection", "valentines", "marriage" ], name = "couple", sprite = ( 20, 11 ) }
    , { category = PeopleAndBody, char = "👬", keywords = [ "men holding hands", "pair", "couple", "love", "like", "bromance", "friendship", "people", "human" ], name = "two_men_holding_hands", sprite = ( 20, 37 ) }
    , { category = PeopleAndBody, char = "👭", keywords = [ "women holding hands", "pair", "friendship", "couple", "love", "like", "female", "people", "human" ], name = "two_women_holding_hands", sprite = ( 21, 5 ) }
    , { category = PeopleAndBody, char = "👮\u{200D}♀️", keywords = [ "woman police officer", "woman", "police", "law", "legal", "enforcement", "arrest", "911", "female" ], name = "female-police-officer", sprite = ( 21, 31 ) }
    , { category = PeopleAndBody, char = "👮\u{200D}♂️", keywords = [ "man police officer", "man", "police", "law", "legal", "enforcement", "arrest", "911" ], name = "male-police-officer", sprite = ( 21, 37 ) }
    , { category = PeopleAndBody, char = "👮", keywords = [ "police officer" ], name = "cop", sprite = ( 21, 43 ) }
    , { category = PeopleAndBody, char = "👯\u{200D}♀️", keywords = [ "women with bunny ears", "female", "bunny", "women", "girls" ], name = "woman-with-bunny-ears-partying", sprite = ( 21, 49 ) }
    , { category = PeopleAndBody, char = "👯\u{200D}♂️", keywords = [ "men with bunny ears", "male", "bunny", "men", "boys" ], name = "man-with-bunny-ears-partying", sprite = ( 21, 50 ) }
    , { category = PeopleAndBody, char = "👯", keywords = [ "people with bunny ears" ], name = "dancers", sprite = ( 21, 51 ) }
    , { category = PeopleAndBody, char = "👰\u{200D}♀️", keywords = [ "woman with veil", "wedding", "marriage" ], name = "woman_with_veil", sprite = ( 21, 52 ) }
    , { category = PeopleAndBody, char = "👰\u{200D}♂️", keywords = [ "man with veil", "wedding", "marriage" ], name = "man_with_veil", sprite = ( 22, 0 ) }
    , { category = PeopleAndBody, char = "👰", keywords = [ "bride with veil", "couple", "marriage", "wedding", "woman", "bride" ], name = "bride_with_veil", sprite = ( 22, 6 ) }
    , { category = PeopleAndBody, char = "👱\u{200D}♀️", keywords = [ "woman blond hair", "woman", "female", "girl", "blonde", "person" ], name = "blond-haired-woman", sprite = ( 22, 12 ) }
    , { category = PeopleAndBody, char = "👱\u{200D}♂️", keywords = [ "man blond hair", "man", "male", "boy", "blonde", "guy", "person" ], name = "blond-haired-man", sprite = ( 22, 18 ) }
    , { category = PeopleAndBody, char = "👱", keywords = [ "person blond hair" ], name = "person_with_blond_hair", sprite = ( 22, 24 ) }
    , { category = PeopleAndBody, char = "👲", keywords = [ "man with skullcap", "male", "boy", "chinese" ], name = "man_with_gua_pi_mao", sprite = ( 22, 30 ) }
    , { category = PeopleAndBody, char = "👳\u{200D}♀️", keywords = [ "woman wearing turban", "female", "indian", "hinduism", "arabs", "woman" ], name = "woman-wearing-turban", sprite = ( 22, 36 ) }
    , { category = PeopleAndBody, char = "👳\u{200D}♂️", keywords = [ "man wearing turban", "male", "indian", "hinduism", "arabs" ], name = "man-wearing-turban", sprite = ( 22, 42 ) }
    , { category = PeopleAndBody, char = "👳", keywords = [ "person wearing turban" ], name = "man_with_turban", sprite = ( 22, 48 ) }
    , { category = PeopleAndBody, char = "👴", keywords = [ "old man", "human", "male", "men", "old", "elder", "senior" ], name = "older_man", sprite = ( 22, 54 ) }
    , { category = PeopleAndBody, char = "👵", keywords = [ "old woman", "human", "female", "women", "lady", "old", "elder", "senior" ], name = "older_woman", sprite = ( 23, 2 ) }
    , { category = PeopleAndBody, char = "👶", keywords = [ "baby", "child", "boy", "girl", "toddler" ], name = "baby", sprite = ( 23, 8 ) }
    , { category = PeopleAndBody, char = "👷\u{200D}♀️", keywords = [ "woman construction worker", "female", "human", "wip", "build", "construction", "worker", "labor", "woman" ], name = "female-construction-worker", sprite = ( 23, 14 ) }
    , { category = PeopleAndBody, char = "👷\u{200D}♂️", keywords = [ "man construction worker", "male", "human", "wip", "guy", "build", "construction", "worker", "labor" ], name = "male-construction-worker", sprite = ( 23, 20 ) }
    , { category = PeopleAndBody, char = "👷", keywords = [ "construction worker" ], name = "construction_worker", sprite = ( 23, 26 ) }
    , { category = PeopleAndBody, char = "👸", keywords = [ "princess", "girl", "woman", "female", "blond", "crown", "royal", "queen" ], name = "princess", sprite = ( 23, 32 ) }
    , { category = SmileysAndEmotion, char = "👹", keywords = [ "ogre", "monster", "red", "mask", "halloween", "scary", "creepy", "devil", "demon", "japanese", "ogre" ], name = "japanese_ogre", sprite = ( 23, 38 ) }
    , { category = SmileysAndEmotion, char = "👺", keywords = [ "goblin", "red", "evil", "mask", "monster", "scary", "creepy", "japanese", "goblin" ], name = "japanese_goblin", sprite = ( 23, 39 ) }
    , { category = SmileysAndEmotion, char = "👻", keywords = [ "ghost", "halloween", "spooky", "scary" ], name = "ghost", sprite = ( 23, 40 ) }
    , { category = PeopleAndBody, char = "👼", keywords = [ "baby angel", "heaven", "wings", "halo" ], name = "angel", sprite = ( 23, 41 ) }
    , { category = SmileysAndEmotion, char = "👽", keywords = [ "alien", "UFO", "paul", "weird", "outer space" ], name = "alien", sprite = ( 23, 47 ) }
    , { category = SmileysAndEmotion, char = "👾", keywords = [ "alien monster", "game", "arcade", "play" ], name = "space_invader", sprite = ( 23, 48 ) }
    , { category = SmileysAndEmotion, char = "👿", keywords = [ "angry face with horns", "devil", "angry", "horns" ], name = "imp", sprite = ( 23, 49 ) }
    , { category = SmileysAndEmotion, char = "💀", keywords = [ "skull", "dead", "skeleton", "creepy", "death" ], name = "skull", sprite = ( 23, 50 ) }
    , { category = PeopleAndBody, char = "💁\u{200D}♀️", keywords = [ "woman tipping hand", "female", "girl", "woman", "human", "information" ], name = "woman-tipping-hand", sprite = ( 23, 51 ) }
    , { category = PeopleAndBody, char = "💁\u{200D}♂️", keywords = [ "man tipping hand", "male", "boy", "man", "human", "information" ], name = "man-tipping-hand", sprite = ( 23, 57 ) }
    , { category = PeopleAndBody, char = "💁", keywords = [ "person tipping hand" ], name = "information_desk_person", sprite = ( 24, 5 ) }
    , { category = PeopleAndBody, char = "💂\u{200D}♀️", keywords = [ "woman guard", "uk", "gb", "british", "female", "royal", "woman" ], name = "female-guard", sprite = ( 24, 11 ) }
    , { category = PeopleAndBody, char = "💂\u{200D}♂️", keywords = [ "man guard", "uk", "gb", "british", "male", "guy", "royal" ], name = "male-guard", sprite = ( 24, 17 ) }
    , { category = PeopleAndBody, char = "💂", keywords = [ "guard" ], name = "guardsman", sprite = ( 24, 23 ) }
    , { category = PeopleAndBody, char = "💃", keywords = [ "woman dancing", "female", "girl", "woman", "fun" ], name = "dancer", sprite = ( 24, 29 ) }
    , { category = Objects, char = "💄", keywords = [ "lipstick", "female", "girl", "fashion", "woman" ], name = "lipstick", sprite = ( 24, 35 ) }
    , { category = PeopleAndBody, char = "💅", keywords = [ "nail polish", "beauty", "manicure", "finger", "fashion", "nail" ], name = "nail_care", sprite = ( 24, 36 ) }
    , { category = PeopleAndBody, char = "💆\u{200D}♀️", keywords = [ "woman getting massage", "female", "girl", "woman", "head" ], name = "woman-getting-massage", sprite = ( 24, 42 ) }
    , { category = PeopleAndBody, char = "💆\u{200D}♂️", keywords = [ "man getting massage", "male", "boy", "man", "head" ], name = "man-getting-massage", sprite = ( 24, 48 ) }
    , { category = PeopleAndBody, char = "💆", keywords = [ "person getting massage" ], name = "massage", sprite = ( 24, 54 ) }
    , { category = PeopleAndBody, char = "💇\u{200D}♀️", keywords = [ "woman getting haircut", "female", "girl", "woman" ], name = "woman-getting-haircut", sprite = ( 25, 2 ) }
    , { category = PeopleAndBody, char = "💇\u{200D}♂️", keywords = [ "man getting haircut", "male", "boy", "man" ], name = "man-getting-haircut", sprite = ( 25, 8 ) }
    , { category = PeopleAndBody, char = "💇", keywords = [ "person getting haircut" ], name = "haircut", sprite = ( 25, 14 ) }
    , { category = TravelAndPlaces, char = "💈", keywords = [ "barber pole", "hair", "salon", "style" ], name = "barber", sprite = ( 25, 20 ) }
    , { category = Objects, char = "💉", keywords = [ "syringe", "health", "hospital", "drugs", "blood", "medicine", "needle", "doctor", "nurse" ], name = "syringe", sprite = ( 25, 21 ) }
    , { category = Objects, char = "💊", keywords = [ "pill", "health", "medicine", "doctor", "pharmacy", "drug" ], name = "pill", sprite = ( 25, 22 ) }
    , { category = SmileysAndEmotion, char = "💋", keywords = [ "kiss mark", "face", "lips", "love", "like", "affection", "valentines" ], name = "kiss", sprite = ( 25, 23 ) }
    , { category = SmileysAndEmotion, char = "💌", keywords = [ "love letter", "email", "like", "affection", "envelope", "valentines" ], name = "love_letter", sprite = ( 25, 24 ) }
    , { category = Objects, char = "💍", keywords = [ "ring", "wedding", "propose", "marriage", "valentines", "diamond", "fashion", "jewelry", "gem", "engagement" ], name = "ring", sprite = ( 25, 25 ) }
    , { category = Objects, char = "💎", keywords = [ "gem stone", "blue", "ruby", "diamond", "jewelry" ], name = "gem", sprite = ( 25, 26 ) }
    , { category = PeopleAndBody, char = "💏", keywords = [ "kiss", "pair", "valentines", "love", "like", "dating", "marriage" ], name = "couplekiss", sprite = ( 25, 27 ) }
    , { category = AnimalsAndNature, char = "💐", keywords = [ "bouquet", "flowers", "nature", "spring" ], name = "bouquet", sprite = ( 25, 28 ) }
    , { category = PeopleAndBody, char = "💑", keywords = [ "couple with heart", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage" ], name = "couple_with_heart", sprite = ( 25, 29 ) }
    , { category = TravelAndPlaces, char = "💒", keywords = [ "wedding", "love", "like", "affection", "couple", "marriage", "bride", "groom" ], name = "wedding", sprite = ( 25, 30 ) }
    , { category = SmileysAndEmotion, char = "💓", keywords = [ "beating heart", "love", "like", "affection", "valentines", "pink", "heart" ], name = "heartbeat", sprite = ( 25, 31 ) }
    , { category = SmileysAndEmotion, char = "💔", keywords = [ "broken heart", "sad", "sorry", "break", "heart", "heartbreak" ], name = "broken_heart", sprite = ( 25, 32 ) }
    , { category = SmileysAndEmotion, char = "💕", keywords = [ "two hearts", "love", "like", "affection", "valentines", "heart" ], name = "two_hearts", sprite = ( 25, 33 ) }
    , { category = SmileysAndEmotion, char = "💖", keywords = [ "sparkling heart", "love", "like", "affection", "valentines" ], name = "sparkling_heart", sprite = ( 25, 34 ) }
    , { category = SmileysAndEmotion, char = "💗", keywords = [ "growing heart", "like", "love", "affection", "valentines", "pink" ], name = "heartpulse", sprite = ( 25, 35 ) }
    , { category = SmileysAndEmotion, char = "💘", keywords = [ "heart with arrow", "love", "like", "heart", "affection", "valentines" ], name = "cupid", sprite = ( 25, 36 ) }
    , { category = SmileysAndEmotion, char = "💙", keywords = [ "blue heart", "love", "like", "affection", "valentines" ], name = "blue_heart", sprite = ( 25, 37 ) }
    , { category = SmileysAndEmotion, char = "💚", keywords = [ "green heart", "love", "like", "affection", "valentines" ], name = "green_heart", sprite = ( 25, 38 ) }
    , { category = SmileysAndEmotion, char = "💛", keywords = [ "yellow heart", "love", "like", "affection", "valentines" ], name = "yellow_heart", sprite = ( 25, 39 ) }
    , { category = SmileysAndEmotion, char = "💜", keywords = [ "purple heart", "love", "like", "affection", "valentines" ], name = "purple_heart", sprite = ( 25, 40 ) }
    , { category = SmileysAndEmotion, char = "💝", keywords = [ "heart with ribbon", "love", "valentines" ], name = "gift_heart", sprite = ( 25, 41 ) }
    , { category = SmileysAndEmotion, char = "💞", keywords = [ "revolving hearts", "love", "like", "affection", "valentines" ], name = "revolving_hearts", sprite = ( 25, 42 ) }
    , { category = SmileysAndEmotion, char = "💟", keywords = [ "heart decoration", "purple square", "love", "like" ], name = "heart_decoration", sprite = ( 25, 43 ) }
    , { category = Symbols, char = "💠", keywords = [ "diamond with a dot", "jewel", "blue", "gem", "crystal", "fancy" ], name = "diamond_shape_with_a_dot_inside", sprite = ( 25, 44 ) }
    , { category = Objects, char = "💡", keywords = [ "light bulb", "light", "electricity", "idea" ], name = "bulb", sprite = ( 25, 45 ) }
    , { category = SmileysAndEmotion, char = "💢", keywords = [ "anger symbol", "angry", "mad" ], name = "anger", sprite = ( 25, 46 ) }
    , { category = SmileysAndEmotion, char = "💣", keywords = [ "bomb", "boom", "explode", "explosion", "terrorism" ], name = "bomb", sprite = ( 25, 47 ) }
    , { category = SmileysAndEmotion, char = "💤", keywords = [ "zzz", "sleepy", "tired", "dream" ], name = "zzz", sprite = ( 25, 48 ) }
    , { category = SmileysAndEmotion, char = "💥", keywords = [ "collision", "bomb", "explode", "explosion", "collision", "blown" ], name = "boom", sprite = ( 25, 49 ) }
    , { category = SmileysAndEmotion, char = "💦", keywords = [ "sweat droplets", "water", "drip", "oops" ], name = "sweat_drops", sprite = ( 25, 50 ) }
    , { category = TravelAndPlaces, char = "💧", keywords = [ "droplet", "water", "drip", "faucet", "spring" ], name = "droplet", sprite = ( 25, 51 ) }
    , { category = SmileysAndEmotion, char = "💨", keywords = [ "dashing away", "wind", "air", "fast", "shoo", "fart", "smoke", "puff" ], name = "dash", sprite = ( 25, 52 ) }
    , { category = SmileysAndEmotion, char = "💩", keywords = [ "pile of poo", "hankey", "shitface", "fail", "turd", "shit" ], name = "hankey", sprite = ( 25, 53 ) }
    , { category = PeopleAndBody, char = "💪", keywords = [ "flexed biceps", "arm", "flex", "hand", "summer", "strong", "biceps" ], name = "muscle", sprite = ( 25, 54 ) }
    , { category = SmileysAndEmotion, char = "💫", keywords = [ "dizzy", "star", "sparkle", "shoot", "magic" ], name = "dizzy", sprite = ( 26, 2 ) }
    , { category = SmileysAndEmotion, char = "💬", keywords = [ "speech balloon", "bubble", "words", "message", "talk", "chatting" ], name = "speech_balloon", sprite = ( 26, 3 ) }
    , { category = SmileysAndEmotion, char = "💭", keywords = [ "thought balloon", "bubble", "cloud", "speech", "thinking", "dream" ], name = "thought_balloon", sprite = ( 26, 4 ) }
    , { category = AnimalsAndNature, char = "💮", keywords = [ "white flower", "japanese", "spring" ], name = "white_flower", sprite = ( 26, 5 ) }
    , { category = SmileysAndEmotion, char = "💯", keywords = [ "hundred points", "score", "perfect", "numbers", "century", "exam", "quiz", "test", "pass", "hundred" ], name = "100", sprite = ( 26, 6 ) }
    , { category = Objects, char = "💰", keywords = [ "money bag", "dollar", "payment", "coins", "sale" ], name = "moneybag", sprite = ( 26, 7 ) }
    , { category = Symbols, char = "💱", keywords = [ "currency exchange", "money", "sales", "dollar", "travel" ], name = "currency_exchange", sprite = ( 26, 8 ) }
    , { category = Symbols, char = "💲", keywords = [ "heavy dollar sign", "money", "sales", "payment", "currency", "buck" ], name = "heavy_dollar_sign", sprite = ( 26, 9 ) }
    , { category = Objects, char = "💳", keywords = [ "credit card", "money", "sales", "dollar", "bill", "payment", "shopping" ], name = "credit_card", sprite = ( 26, 10 ) }
    , { category = Objects, char = "💴", keywords = [ "yen banknote", "money", "sales", "japanese", "dollar", "currency" ], name = "yen", sprite = ( 26, 11 ) }
    , { category = Objects, char = "💵", keywords = [ "dollar banknote", "money", "sales", "bill", "currency" ], name = "dollar", sprite = ( 26, 12 ) }
    , { category = Objects, char = "💶", keywords = [ "euro banknote", "money", "sales", "dollar", "currency" ], name = "euro", sprite = ( 26, 13 ) }
    , { category = Objects, char = "💷", keywords = [ "pound banknote", "british", "sterling", "money", "sales", "bills", "uk", "england", "currency" ], name = "pound", sprite = ( 26, 14 ) }
    , { category = Objects, char = "💸", keywords = [ "money with wings", "dollar", "bills", "payment", "sale" ], name = "money_with_wings", sprite = ( 26, 15 ) }
    , { category = Objects, char = "💹", keywords = [ "chart increasing with yen", "green square", "graph", "presentation", "stats" ], name = "chart", sprite = ( 26, 16 ) }
    , { category = TravelAndPlaces, char = "💺", keywords = [ "seat", "sit", "airplane", "transport", "bus", "flight", "fly" ], name = "seat", sprite = ( 26, 17 ) }
    , { category = Objects, char = "💻", keywords = [ "laptop", "technology", "laptop", "screen", "display", "monitor" ], name = "computer", sprite = ( 26, 18 ) }
    , { category = Objects, char = "💼", keywords = [ "briefcase", "business", "documents", "work", "law", "legal", "job", "career" ], name = "briefcase", sprite = ( 26, 19 ) }
    , { category = Objects, char = "💽", keywords = [ "computer disk", "technology", "record", "data", "disk", "90s" ], name = "minidisc", sprite = ( 26, 20 ) }
    , { category = Objects, char = "💾", keywords = [ "floppy disk", "oldschool", "technology", "save", "90s", "80s" ], name = "floppy_disk", sprite = ( 26, 21 ) }
    , { category = Objects, char = "💿", keywords = [ "optical disk", "technology", "dvd", "disk", "disc", "90s" ], name = "cd", sprite = ( 26, 22 ) }
    , { category = Objects, char = "📀", keywords = [ "dvd", "cd", "disk", "disc" ], name = "dvd", sprite = ( 26, 23 ) }
    , { category = Objects, char = "📁", keywords = [ "file folder", "documents", "business", "office" ], name = "file_folder", sprite = ( 26, 24 ) }
    , { category = Objects, char = "📂", keywords = [ "open file folder", "documents", "load" ], name = "open_file_folder", sprite = ( 26, 25 ) }
    , { category = Objects, char = "📃", keywords = [ "page with curl", "documents", "office", "paper" ], name = "page_with_curl", sprite = ( 26, 26 ) }
    , { category = Objects, char = "📄", keywords = [ "page facing up", "documents", "office", "paper", "information" ], name = "page_facing_up", sprite = ( 26, 27 ) }
    , { category = Objects, char = "📅", keywords = [ "calendar", "calendar", "schedule" ], name = "date", sprite = ( 26, 28 ) }
    , { category = Objects, char = "📆", keywords = [ "tear off calendar", "schedule", "date", "planning" ], name = "calendar", sprite = ( 26, 29 ) }
    , { category = Objects, char = "📇", keywords = [ "card index", "business", "stationery" ], name = "card_index", sprite = ( 26, 30 ) }
    , { category = Objects, char = "📈", keywords = [ "chart increasing", "graph", "presentation", "stats", "recovery", "business", "economics", "money", "sales", "good", "success" ], name = "chart_with_upwards_trend", sprite = ( 26, 31 ) }
    , { category = Objects, char = "📉", keywords = [ "chart decreasing", "graph", "presentation", "stats", "recession", "business", "economics", "money", "sales", "bad", "failure" ], name = "chart_with_downwards_trend", sprite = ( 26, 32 ) }
    , { category = Objects, char = "📊", keywords = [ "bar chart", "graph", "presentation", "stats" ], name = "bar_chart", sprite = ( 26, 33 ) }
    , { category = Objects, char = "📋", keywords = [ "clipboard", "stationery", "documents" ], name = "clipboard", sprite = ( 26, 34 ) }
    , { category = Objects, char = "📌", keywords = [ "pushpin", "stationery", "mark", "here" ], name = "pushpin", sprite = ( 26, 35 ) }
    , { category = Objects, char = "📍", keywords = [ "round pushpin", "stationery", "location", "map", "here" ], name = "round_pushpin", sprite = ( 26, 36 ) }
    , { category = Objects, char = "📎", keywords = [ "paperclip", "documents", "stationery" ], name = "paperclip", sprite = ( 26, 37 ) }
    , { category = Objects, char = "📏", keywords = [ "straight ruler", "stationery", "calculate", "length", "math", "school", "drawing", "architect", "sketch" ], name = "straight_ruler", sprite = ( 26, 38 ) }
    , { category = Objects, char = "📐", keywords = [ "triangular ruler", "stationery", "math", "architect", "sketch" ], name = "triangular_ruler", sprite = ( 26, 39 ) }
    , { category = Objects, char = "📑", keywords = [ "bookmark tabs", "favorite", "save", "order", "tidy" ], name = "bookmark_tabs", sprite = ( 26, 40 ) }
    , { category = Objects, char = "📒", keywords = [ "ledger", "notes", "paper" ], name = "ledger", sprite = ( 26, 41 ) }
    , { category = Objects, char = "📓", keywords = [ "notebook", "stationery", "record", "notes", "paper", "study" ], name = "notebook", sprite = ( 26, 42 ) }
    , { category = Objects, char = "📔", keywords = [ "notebook with decorative cover", "classroom", "notes", "record", "paper", "study" ], name = "notebook_with_decorative_cover", sprite = ( 26, 43 ) }
    , { category = Objects, char = "📕", keywords = [ "closed book", "read", "library", "knowledge", "textbook", "learn" ], name = "closed_book", sprite = ( 26, 44 ) }
    , { category = Objects, char = "📖", keywords = [ "open book", "book", "read", "library", "knowledge", "literature", "learn", "study" ], name = "book", sprite = ( 26, 45 ) }
    , { category = Objects, char = "📗", keywords = [ "green book", "read", "library", "knowledge", "study" ], name = "green_book", sprite = ( 26, 46 ) }
    , { category = Objects, char = "📘", keywords = [ "blue book", "read", "library", "knowledge", "learn", "study" ], name = "blue_book", sprite = ( 26, 47 ) }
    , { category = Objects, char = "📙", keywords = [ "orange book", "read", "library", "knowledge", "textbook", "study" ], name = "orange_book", sprite = ( 26, 48 ) }
    , { category = Objects, char = "📚", keywords = [ "books", "literature", "library", "study" ], name = "books", sprite = ( 26, 49 ) }
    , { category = Symbols, char = "📛", keywords = [ "name badge", "fire", "forbid" ], name = "name_badge", sprite = ( 26, 50 ) }
    , { category = Objects, char = "📜", keywords = [ "scroll", "documents", "ancient", "history", "paper" ], name = "scroll", sprite = ( 26, 51 ) }
    , { category = Objects, char = "📝", keywords = [ "memo", "write", "documents", "stationery", "pencil", "paper", "writing", "legal", "exam", "quiz", "test", "study", "compose" ], name = "memo", sprite = ( 26, 52 ) }
    , { category = Objects, char = "📞", keywords = [ "telephone receiver", "technology", "communication", "dial" ], name = "telephone_receiver", sprite = ( 26, 53 ) }
    , { category = Objects, char = "📟", keywords = [ "pager", "bbcall", "oldschool", "90s" ], name = "pager", sprite = ( 26, 54 ) }
    , { category = Objects, char = "📠", keywords = [ "fax machine", "communication", "technology" ], name = "fax", sprite = ( 26, 55 ) }
    , { category = Objects, char = "📡", keywords = [ "satellite antenna", "communication", "future", "radio", "space" ], name = "satellite_antenna", sprite = ( 26, 56 ) }
    , { category = Objects, char = "📢", keywords = [ "loudspeaker", "volume", "sound" ], name = "loudspeaker", sprite = ( 26, 57 ) }
    , { category = Objects, char = "📣", keywords = [ "megaphone", "sound", "speaker", "volume" ], name = "mega", sprite = ( 27, 0 ) }
    , { category = Objects, char = "📤", keywords = [ "outbox tray", "inbox", "email" ], name = "outbox_tray", sprite = ( 27, 1 ) }
    , { category = Objects, char = "📥", keywords = [ "inbox tray", "email", "documents" ], name = "inbox_tray", sprite = ( 27, 2 ) }
    , { category = Objects, char = "📦", keywords = [ "package", "mail", "gift", "cardboard", "box", "moving" ], name = "package", sprite = ( 27, 3 ) }
    , { category = Objects, char = "📧", keywords = [ "e mail", "communication", "inbox" ], name = "e-mail", sprite = ( 27, 4 ) }
    , { category = Objects, char = "📨", keywords = [ "incoming envelope", "email", "inbox" ], name = "incoming_envelope", sprite = ( 27, 5 ) }
    , { category = Objects, char = "📩", keywords = [ "envelope with arrow", "email", "communication" ], name = "envelope_with_arrow", sprite = ( 27, 6 ) }
    , { category = Objects, char = "📪", keywords = [ "closed mailbox with lowered flag", "email", "communication", "inbox" ], name = "mailbox_closed", sprite = ( 27, 7 ) }
    , { category = Objects, char = "📫", keywords = [ "closed mailbox with raised flag", "email", "inbox", "communication" ], name = "mailbox", sprite = ( 27, 8 ) }
    , { category = Objects, char = "📬", keywords = [ "open mailbox with raised flag", "email", "inbox", "communication" ], name = "mailbox_with_mail", sprite = ( 27, 9 ) }
    , { category = Objects, char = "📭", keywords = [ "open mailbox with lowered flag", "email", "inbox" ], name = "mailbox_with_no_mail", sprite = ( 27, 10 ) }
    , { category = Objects, char = "📮", keywords = [ "postbox", "email", "letter", "envelope" ], name = "postbox", sprite = ( 27, 11 ) }
    , { category = Objects, char = "📯", keywords = [ "postal horn", "instrument", "music" ], name = "postal_horn", sprite = ( 27, 12 ) }
    , { category = Objects, char = "📰", keywords = [ "newspaper", "press", "headline" ], name = "newspaper", sprite = ( 27, 13 ) }
    , { category = Objects, char = "📱", keywords = [ "mobile phone", "technology", "apple", "gadgets", "dial" ], name = "iphone", sprite = ( 27, 14 ) }
    , { category = Objects, char = "📲", keywords = [ "mobile phone with arrow", "iphone", "incoming" ], name = "calling", sprite = ( 27, 15 ) }
    , { category = Symbols, char = "📳", keywords = [ "vibration mode", "orange square", "phone" ], name = "vibration_mode", sprite = ( 27, 16 ) }
    , { category = Symbols, char = "📴", keywords = [ "mobile phone off", "mute", "orange square", "silence", "quiet" ], name = "mobile_phone_off", sprite = ( 27, 17 ) }
    , { category = Symbols, char = "📵", keywords = [ "no mobile phones", "iphone", "mute", "circle" ], name = "no_mobile_phones", sprite = ( 27, 18 ) }
    , { category = Symbols, char = "📶", keywords = [ "antenna bars", "blue square", "reception", "phone", "internet", "connection", "wifi", "bluetooth", "bars" ], name = "signal_strength", sprite = ( 27, 19 ) }
    , { category = Objects, char = "📷", keywords = [ "camera", "gadgets", "photography" ], name = "camera", sprite = ( 27, 20 ) }
    , { category = Objects, char = "📸", keywords = [ "camera with flash", "photography", "gadgets" ], name = "camera_with_flash", sprite = ( 27, 21 ) }
    , { category = Objects, char = "📹", keywords = [ "video camera", "film", "record" ], name = "video_camera", sprite = ( 27, 22 ) }
    , { category = Objects, char = "📺", keywords = [ "television", "technology", "program", "oldschool", "show", "television" ], name = "tv", sprite = ( 27, 23 ) }
    , { category = Objects, char = "📻", keywords = [ "radio", "communication", "music", "podcast", "program" ], name = "radio", sprite = ( 27, 24 ) }
    , { category = Objects, char = "📼", keywords = [ "videocassette", "record", "video", "oldschool", "90s", "80s" ], name = "vhs", sprite = ( 27, 25 ) }
    , { category = Objects, char = "📽️", keywords = [ "film projector", "video", "tape", "record", "movie" ], name = "film_projector", sprite = ( 27, 26 ) }
    , { category = Objects, char = "\u{1F4FF}", keywords = [ "prayer beads", "dhikr", "religious" ], name = "prayer_beads", sprite = ( 27, 27 ) }
    , { category = Symbols, char = "🔀", keywords = [ "shuffle tracks button", "blue square", "shuffle", "music", "random" ], name = "twisted_rightwards_arrows", sprite = ( 27, 28 ) }
    , { category = Symbols, char = "🔁", keywords = [ "repeat button", "loop", "record" ], name = "repeat", sprite = ( 27, 29 ) }
    , { category = Symbols, char = "🔂", keywords = [ "repeat single button", "blue square", "loop" ], name = "repeat_one", sprite = ( 27, 30 ) }
    , { category = Symbols, char = "🔃", keywords = [ "clockwise vertical arrows", "sync", "cycle", "round", "repeat" ], name = "arrows_clockwise", sprite = ( 27, 31 ) }
    , { category = Symbols, char = "🔄", keywords = [ "counterclockwise arrows button", "blue square", "sync", "cycle" ], name = "arrows_counterclockwise", sprite = ( 27, 32 ) }
    , { category = Symbols, char = "🔅", keywords = [ "dim button", "sun", "afternoon", "warm", "summer" ], name = "low_brightness", sprite = ( 27, 33 ) }
    , { category = Symbols, char = "🔆", keywords = [ "bright button", "sun", "light" ], name = "high_brightness", sprite = ( 27, 34 ) }
    , { category = Objects, char = "🔇", keywords = [ "muted speaker", "sound", "volume", "silence", "quiet" ], name = "mute", sprite = ( 27, 35 ) }
    , { category = Objects, char = "🔈", keywords = [ "speaker low volume", "sound", "volume", "silence", "broadcast" ], name = "speaker", sprite = ( 27, 36 ) }
    , { category = Objects, char = "🔉", keywords = [ "speaker medium volume", "volume", "speaker", "broadcast" ], name = "sound", sprite = ( 27, 37 ) }
    , { category = Objects, char = "🔊", keywords = [ "speaker high volume", "volume", "noise", "noisy", "speaker", "broadcast" ], name = "loud_sound", sprite = ( 27, 38 ) }
    , { category = Objects, char = "🔋", keywords = [ "battery", "power", "energy", "sustain" ], name = "battery", sprite = ( 27, 39 ) }
    , { category = Objects, char = "🔌", keywords = [ "electric plug", "charger", "power" ], name = "electric_plug", sprite = ( 27, 40 ) }
    , { category = Objects, char = "🔍", keywords = [ "magnifying glass tilted left", "search", "zoom", "find", "detective" ], name = "mag", sprite = ( 27, 41 ) }
    , { category = Objects, char = "🔎", keywords = [ "magnifying glass tilted right", "search", "zoom", "find", "detective" ], name = "mag_right", sprite = ( 27, 42 ) }
    , { category = Objects, char = "🔏", keywords = [ "locked with pen", "security", "secret" ], name = "lock_with_ink_pen", sprite = ( 27, 43 ) }
    , { category = Objects, char = "🔐", keywords = [ "locked with key", "security", "privacy" ], name = "closed_lock_with_key", sprite = ( 27, 44 ) }
    , { category = Objects, char = "🔑", keywords = [ "key", "lock", "door", "password" ], name = "key", sprite = ( 27, 45 ) }
    , { category = Objects, char = "🔒", keywords = [ "locked", "security", "password", "padlock" ], name = "lock", sprite = ( 27, 46 ) }
    , { category = Objects, char = "🔓", keywords = [ "unlocked", "privacy", "security" ], name = "unlock", sprite = ( 27, 47 ) }
    , { category = Objects, char = "🔔", keywords = [ "bell", "sound", "notification", "christmas", "xmas", "chime" ], name = "bell", sprite = ( 27, 48 ) }
    , { category = Objects, char = "🔕", keywords = [ "bell with slash", "sound", "volume", "mute", "quiet", "silent" ], name = "no_bell", sprite = ( 27, 49 ) }
    , { category = Objects, char = "🔖", keywords = [ "bookmark", "favorite", "label", "save" ], name = "bookmark", sprite = ( 27, 50 ) }
    , { category = Objects, char = "🔗", keywords = [ "link", "rings", "url" ], name = "link", sprite = ( 27, 51 ) }
    , { category = Symbols, char = "🔘", keywords = [ "radio button", "input", "old", "music", "circle" ], name = "radio_button", sprite = ( 27, 52 ) }
    , { category = Symbols, char = "🔙", keywords = [ "back arrow", "arrow", "words", "return" ], name = "back", sprite = ( 27, 53 ) }
    , { category = Symbols, char = "🔚", keywords = [ "end arrow", "words", "arrow" ], name = "end", sprite = ( 27, 54 ) }
    , { category = Symbols, char = "🔛", keywords = [ "on arrow", "arrow", "words" ], name = "on", sprite = ( 27, 55 ) }
    , { category = Symbols, char = "🔜", keywords = [ "soon arrow", "arrow", "words" ], name = "soon", sprite = ( 27, 56 ) }
    , { category = Symbols, char = "🔝", keywords = [ "top arrow", "words", "blue square" ], name = "top", sprite = ( 27, 57 ) }
    , { category = Symbols, char = "🔞", keywords = [ "no one under eighteen", "18", "drink", "pub", "night", "minor", "circle" ], name = "underage", sprite = ( 28, 0 ) }
    , { category = Symbols, char = "🔟", keywords = [ "keycap 10", "numbers", "10", "blue square" ], name = "keycap_ten", sprite = ( 28, 1 ) }
    , { category = Symbols, char = "🔠", keywords = [ "input latin uppercase", "alphabet", "words", "blue square" ], name = "capital_abcd", sprite = ( 28, 2 ) }
    , { category = Symbols, char = "🔡", keywords = [ "input latin lowercase", "blue square", "alphabet" ], name = "abcd", sprite = ( 28, 3 ) }
    , { category = Symbols, char = "🔢", keywords = [ "input numbers", "numbers", "blue square" ], name = "1234", sprite = ( 28, 4 ) }
    , { category = Symbols, char = "🔣", keywords = [ "input symbols", "blue square", "music", "note", "ampersand", "percent", "glyphs", "characters" ], name = "symbols", sprite = ( 28, 5 ) }
    , { category = Symbols, char = "🔤", keywords = [ "input latin letters", "blue square", "alphabet" ], name = "abc", sprite = ( 28, 6 ) }
    , { category = TravelAndPlaces, char = "🔥", keywords = [ "fire", "hot", "cook", "flame" ], name = "fire", sprite = ( 28, 7 ) }
    , { category = Objects, char = "🔦", keywords = [ "flashlight", "dark", "camping", "sight", "night" ], name = "flashlight", sprite = ( 28, 8 ) }
    , { category = Objects, char = "🔧", keywords = [ "wrench", "tools", "diy", "ikea", "fix", "maintainer" ], name = "wrench", sprite = ( 28, 9 ) }
    , { category = Objects, char = "🔨", keywords = [ "hammer", "tools", "build", "create" ], name = "hammer", sprite = ( 28, 10 ) }
    , { category = Objects, char = "🔩", keywords = [ "nut and bolt", "handy", "tools", "fix" ], name = "nut_and_bolt", sprite = ( 28, 11 ) }
    , { category = FoodAndDrink, char = "🔪", keywords = [ "kitchen knife", "knife", "blade", "cutlery", "kitchen", "weapon" ], name = "hocho", sprite = ( 28, 12 ) }
    , { category = Objects, char = "🔫", keywords = [ "pistol", "violence", "weapon", "pistol", "revolver" ], name = "gun", sprite = ( 28, 13 ) }
    , { category = Objects, char = "🔬", keywords = [ "microscope", "laboratory", "experiment", "zoomin", "science", "study" ], name = "microscope", sprite = ( 28, 14 ) }
    , { category = Objects, char = "🔭", keywords = [ "telescope", "stars", "space", "zoom", "science", "astronomy" ], name = "telescope", sprite = ( 28, 15 ) }
    , { category = Activities, char = "🔮", keywords = [ "crystal ball", "disco", "party", "magic", "circus", "fortune teller" ], name = "crystal_ball", sprite = ( 28, 16 ) }
    , { category = Symbols, char = "🔯", keywords = [ "dotted six pointed star", "purple square", "religion", "jewish", "hexagram" ], name = "six_pointed_star", sprite = ( 28, 17 ) }
    , { category = Symbols, char = "🔰", keywords = [ "japanese symbol for beginner", "badge", "shield" ], name = "beginner", sprite = ( 28, 18 ) }
    , { category = Symbols, char = "🔱", keywords = [ "trident emblem", "weapon", "spear" ], name = "trident", sprite = ( 28, 19 ) }
    , { category = Symbols, char = "🔲", keywords = [ "black square button", "shape", "input", "frame" ], name = "black_square_button", sprite = ( 28, 20 ) }
    , { category = Symbols, char = "🔳", keywords = [ "white square button", "shape", "input" ], name = "white_square_button", sprite = ( 28, 21 ) }
    , { category = Symbols, char = "🔴", keywords = [ "red circle", "shape", "error", "danger" ], name = "red_circle", sprite = ( 28, 22 ) }
    , { category = Symbols, char = "🔵", keywords = [ "blue circle", "shape", "icon", "button" ], name = "large_blue_circle", sprite = ( 28, 23 ) }
    , { category = Symbols, char = "🔶", keywords = [ "large orange diamond", "shape", "jewel", "gem" ], name = "large_orange_diamond", sprite = ( 28, 24 ) }
    , { category = Symbols, char = "🔷", keywords = [ "large blue diamond", "shape", "jewel", "gem" ], name = "large_blue_diamond", sprite = ( 28, 25 ) }
    , { category = Symbols, char = "🔸", keywords = [ "small orange diamond", "shape", "jewel", "gem" ], name = "small_orange_diamond", sprite = ( 28, 26 ) }
    , { category = Symbols, char = "🔹", keywords = [ "small blue diamond", "shape", "jewel", "gem" ], name = "small_blue_diamond", sprite = ( 28, 27 ) }
    , { category = Symbols, char = "🔺", keywords = [ "red triangle pointed up", "shape", "direction", "up", "top" ], name = "small_red_triangle", sprite = ( 28, 28 ) }
    , { category = Symbols, char = "🔻", keywords = [ "red triangle pointed down", "shape", "direction", "bottom" ], name = "small_red_triangle_down", sprite = ( 28, 29 ) }
    , { category = Symbols, char = "🔼", keywords = [ "upwards button", "blue square", "triangle", "direction", "point", "forward", "top" ], name = "arrow_up_small", sprite = ( 28, 30 ) }
    , { category = Symbols, char = "🔽", keywords = [ "downwards button", "blue square", "direction", "bottom" ], name = "arrow_down_small", sprite = ( 28, 31 ) }
    , { category = Symbols, char = "🕉️", keywords = [ "om", "hinduism", "buddhism", "sikhism", "jainism" ], name = "om_symbol", sprite = ( 28, 32 ) }
    , { category = AnimalsAndNature, char = "🕊️", keywords = [ "dove", "animal", "bird" ], name = "dove_of_peace", sprite = ( 28, 33 ) }
    , { category = TravelAndPlaces, char = "\u{1F54B}", keywords = [ "kaaba", "mecca", "mosque", "islam" ], name = "kaaba", sprite = ( 28, 34 ) }
    , { category = TravelAndPlaces, char = "\u{1F54C}", keywords = [ "mosque", "islam", "worship", "minaret" ], name = "mosque", sprite = ( 28, 35 ) }
    , { category = TravelAndPlaces, char = "\u{1F54D}", keywords = [ "synagogue", "judaism", "worship", "temple", "jewish" ], name = "synagogue", sprite = ( 28, 36 ) }
    , { category = Symbols, char = "\u{1F54E}", keywords = [ "menorah", "hanukkah", "candles", "jewish" ], name = "menorah_with_nine_branches", sprite = ( 28, 37 ) }
    , { category = TravelAndPlaces, char = "🕐", keywords = [ "one o clock", "time", "late", "early", "schedule" ], name = "clock1", sprite = ( 28, 38 ) }
    , { category = TravelAndPlaces, char = "🕑", keywords = [ "two o clock", "time", "late", "early", "schedule" ], name = "clock2", sprite = ( 28, 39 ) }
    , { category = TravelAndPlaces, char = "🕒", keywords = [ "three o clock", "time", "late", "early", "schedule" ], name = "clock3", sprite = ( 28, 40 ) }
    , { category = TravelAndPlaces, char = "🕓", keywords = [ "four o clock", "time", "late", "early", "schedule" ], name = "clock4", sprite = ( 28, 41 ) }
    , { category = TravelAndPlaces, char = "🕔", keywords = [ "five o clock", "time", "late", "early", "schedule" ], name = "clock5", sprite = ( 28, 42 ) }
    , { category = TravelAndPlaces, char = "🕕", keywords = [ "six o clock", "time", "late", "early", "schedule", "dawn", "dusk" ], name = "clock6", sprite = ( 28, 43 ) }
    , { category = TravelAndPlaces, char = "🕖", keywords = [ "seven o clock", "time", "late", "early", "schedule" ], name = "clock7", sprite = ( 28, 44 ) }
    , { category = TravelAndPlaces, char = "🕗", keywords = [ "eight o clock", "time", "late", "early", "schedule" ], name = "clock8", sprite = ( 28, 45 ) }
    , { category = TravelAndPlaces, char = "🕘", keywords = [ "nine o clock", "time", "late", "early", "schedule" ], name = "clock9", sprite = ( 28, 46 ) }
    , { category = TravelAndPlaces, char = "🕙", keywords = [ "ten o clock", "time", "late", "early", "schedule" ], name = "clock10", sprite = ( 28, 47 ) }
    , { category = TravelAndPlaces, char = "🕚", keywords = [ "eleven o clock", "time", "late", "early", "schedule" ], name = "clock11", sprite = ( 28, 48 ) }
    , { category = TravelAndPlaces, char = "🕛", keywords = [ "twelve o clock", "time", "noon", "midnight", "midday", "late", "early", "schedule" ], name = "clock12", sprite = ( 28, 49 ) }
    , { category = TravelAndPlaces, char = "🕜", keywords = [ "one thirty", "time", "late", "early", "schedule" ], name = "clock130", sprite = ( 28, 50 ) }
    , { category = TravelAndPlaces, char = "🕝", keywords = [ "two thirty", "time", "late", "early", "schedule" ], name = "clock230", sprite = ( 28, 51 ) }
    , { category = TravelAndPlaces, char = "🕞", keywords = [ "three thirty", "time", "late", "early", "schedule" ], name = "clock330", sprite = ( 28, 52 ) }
    , { category = TravelAndPlaces, char = "🕟", keywords = [ "four thirty", "time", "late", "early", "schedule" ], name = "clock430", sprite = ( 28, 53 ) }
    , { category = TravelAndPlaces, char = "🕠", keywords = [ "five thirty", "time", "late", "early", "schedule" ], name = "clock530", sprite = ( 28, 54 ) }
    , { category = TravelAndPlaces, char = "🕡", keywords = [ "six thirty", "time", "late", "early", "schedule" ], name = "clock630", sprite = ( 28, 55 ) }
    , { category = TravelAndPlaces, char = "🕢", keywords = [ "seven thirty", "time", "late", "early", "schedule" ], name = "clock730", sprite = ( 28, 56 ) }
    , { category = TravelAndPlaces, char = "🕣", keywords = [ "eight thirty", "time", "late", "early", "schedule" ], name = "clock830", sprite = ( 28, 57 ) }
    , { category = TravelAndPlaces, char = "🕤", keywords = [ "nine thirty", "time", "late", "early", "schedule" ], name = "clock930", sprite = ( 29, 0 ) }
    , { category = TravelAndPlaces, char = "🕥", keywords = [ "ten thirty", "time", "late", "early", "schedule" ], name = "clock1030", sprite = ( 29, 1 ) }
    , { category = TravelAndPlaces, char = "🕦", keywords = [ "eleven thirty", "time", "late", "early", "schedule" ], name = "clock1130", sprite = ( 29, 2 ) }
    , { category = TravelAndPlaces, char = "🕧", keywords = [ "twelve thirty", "time", "late", "early", "schedule" ], name = "clock1230", sprite = ( 29, 3 ) }
    , { category = Objects, char = "🕯️", keywords = [ "candle", "fire", "wax" ], name = "candle", sprite = ( 29, 4 ) }
    , { category = TravelAndPlaces, char = "🕰️", keywords = [ "mantelpiece clock", "time" ], name = "mantelpiece_clock", sprite = ( 29, 5 ) }
    , { category = SmileysAndEmotion, char = "🕳️", keywords = [ "hole", "embarrassing" ], name = "hole", sprite = ( 29, 6 ) }
    , { category = PeopleAndBody, char = "🕴️", keywords = [ "man in suit levitating", "suit", "business", "levitate", "hover", "jump" ], name = "man_in_business_suit_levitating", sprite = ( 29, 7 ) }
    , { category = PeopleAndBody, char = "🕵️\u{200D}♀️", keywords = [ "woman detective", "human", "spy", "detective", "female", "woman" ], name = "female-detective", sprite = ( 29, 13 ) }
    , { category = PeopleAndBody, char = "🕵️\u{200D}♂️", keywords = [ "man detective" ], name = "male-detective", sprite = ( 29, 19 ) }
    , { category = PeopleAndBody, char = "🕵️", keywords = [ "detective", "human", "spy", "detective" ], name = "sleuth_or_spy", sprite = ( 29, 25 ) }
    , { category = Objects, char = "🕶️", keywords = [ "sunglasses", "face", "cool", "accessories" ], name = "dark_sunglasses", sprite = ( 29, 31 ) }
    , { category = AnimalsAndNature, char = "🕷️", keywords = [ "spider", "animal", "arachnid" ], name = "spider", sprite = ( 29, 32 ) }
    , { category = AnimalsAndNature, char = "🕸️", keywords = [ "spider web", "animal", "insect", "arachnid", "silk" ], name = "spider_web", sprite = ( 29, 33 ) }
    , { category = Activities, char = "🕹️", keywords = [ "joystick", "game", "play" ], name = "joystick", sprite = ( 29, 34 ) }
    , { category = PeopleAndBody, char = "\u{1F57A}", keywords = [ "man dancing", "male", "boy", "fun", "dancer" ], name = "man_dancing", sprite = ( 29, 35 ) }
    , { category = Objects, char = "🖇️", keywords = [ "linked paperclips", "documents", "stationery" ], name = "linked_paperclips", sprite = ( 29, 41 ) }
    , { category = Objects, char = "🖊️", keywords = [ "pen", "stationery", "writing", "write" ], name = "lower_left_ballpoint_pen", sprite = ( 29, 42 ) }
    , { category = Objects, char = "🖋️", keywords = [ "fountain pen", "stationery", "writing", "write" ], name = "lower_left_fountain_pen", sprite = ( 29, 43 ) }
    , { category = Objects, char = "🖌️", keywords = [ "paintbrush", "drawing", "creativity", "art" ], name = "lower_left_paintbrush", sprite = ( 29, 44 ) }
    , { category = Objects, char = "🖍️", keywords = [ "crayon", "drawing", "creativity" ], name = "lower_left_crayon", sprite = ( 29, 45 ) }
    , { category = PeopleAndBody, char = "🖐️", keywords = [ "hand with fingers splayed", "hand", "fingers", "palm" ], name = "raised_hand_with_fingers_splayed", sprite = ( 29, 46 ) }
    , { category = PeopleAndBody, char = "🖕", keywords = [ "middle finger", "hand", "fingers", "rude", "middle", "flipping" ], name = "middle_finger", sprite = ( 29, 52 ) }
    , { category = PeopleAndBody, char = "🖖", keywords = [ "vulcan salute", "hand", "fingers", "spock", "star trek" ], name = "spock-hand", sprite = ( 30, 0 ) }
    , { category = SmileysAndEmotion, char = "\u{1F5A4}", keywords = [ "black heart", "evil" ], name = "black_heart", sprite = ( 30, 6 ) }
    , { category = Objects, char = "🖥️", keywords = [ "desktop computer", "technology", "computing", "screen" ], name = "desktop_computer", sprite = ( 30, 7 ) }
    , { category = Objects, char = "🖨️", keywords = [ "printer", "paper", "ink" ], name = "printer", sprite = ( 30, 8 ) }
    , { category = Objects, char = "🖱️", keywords = [ "computer mouse", "click" ], name = "three_button_mouse", sprite = ( 30, 9 ) }
    , { category = Objects, char = "🖲️", keywords = [ "trackball", "technology", "trackpad" ], name = "trackball", sprite = ( 30, 10 ) }
    , { category = Activities, char = "🖼️", keywords = [ "framed picture", "photography" ], name = "frame_with_picture", sprite = ( 30, 11 ) }
    , { category = Objects, char = "🗂️", keywords = [ "card index dividers", "organizing", "business", "stationery" ], name = "card_index_dividers", sprite = ( 30, 12 ) }
    , { category = Objects, char = "🗃️", keywords = [ "card file box", "business", "stationery" ], name = "card_file_box", sprite = ( 30, 13 ) }
    , { category = Objects, char = "🗄️", keywords = [ "file cabinet", "filing", "organizing" ], name = "file_cabinet", sprite = ( 30, 14 ) }
    , { category = Objects, char = "🗑️", keywords = [ "wastebasket", "bin", "trash", "rubbish", "garbage", "toss" ], name = "wastebasket", sprite = ( 30, 15 ) }
    , { category = Objects, char = "🗒️", keywords = [ "spiral notepad", "memo", "stationery" ], name = "spiral_note_pad", sprite = ( 30, 16 ) }
    , { category = Objects, char = "🗓️", keywords = [ "spiral calendar", "date", "schedule", "planning" ], name = "spiral_calendar_pad", sprite = ( 30, 17 ) }
    , { category = Objects, char = "🗜️", keywords = [ "clamp", "tool" ], name = "compression", sprite = ( 30, 18 ) }
    , { category = Objects, char = "🗝️", keywords = [ "old key", "lock", "door", "password" ], name = "old_key", sprite = ( 30, 19 ) }
    , { category = Objects, char = "🗞️", keywords = [ "rolled up newspaper", "press", "headline" ], name = "rolled_up_newspaper", sprite = ( 30, 20 ) }
    , { category = Objects, char = "🗡️", keywords = [ "dagger", "weapon" ], name = "dagger_knife", sprite = ( 30, 21 ) }
    , { category = PeopleAndBody, char = "🗣️", keywords = [ "speaking head", "user", "person", "human", "sing", "say", "talk" ], name = "speaking_head_in_silhouette", sprite = ( 30, 22 ) }
    , { category = SmileysAndEmotion, char = "🗨️", keywords = [ "left speech bubble", "words", "message", "talk", "chatting" ], name = "left_speech_bubble", sprite = ( 30, 23 ) }
    , { category = SmileysAndEmotion, char = "🗯️", keywords = [ "right anger bubble", "caption", "speech", "thinking", "mad" ], name = "right_anger_bubble", sprite = ( 30, 24 ) }
    , { category = Objects, char = "🗳️", keywords = [ "ballot box with ballot", "election", "vote" ], name = "ballot_box_with_ballot", sprite = ( 30, 25 ) }
    , { category = TravelAndPlaces, char = "🗺️", keywords = [ "world map", "location", "direction" ], name = "world_map", sprite = ( 30, 26 ) }
    , { category = TravelAndPlaces, char = "🗻", keywords = [ "mount fuji", "photo", "mountain", "nature", "japanese" ], name = "mount_fuji", sprite = ( 30, 27 ) }
    , { category = TravelAndPlaces, char = "🗼", keywords = [ "tokyo tower", "photo", "japanese" ], name = "tokyo_tower", sprite = ( 30, 28 ) }
    , { category = TravelAndPlaces, char = "🗽", keywords = [ "statue of liberty", "american", "newyork" ], name = "statue_of_liberty", sprite = ( 30, 29 ) }
    , { category = TravelAndPlaces, char = "🗾", keywords = [ "map of japan", "nation", "country", "japanese", "asia" ], name = "japan", sprite = ( 30, 30 ) }
    , { category = Objects, char = "🗿", keywords = [ "moai", "rock", "easter island", "moai" ], name = "moyai", sprite = ( 30, 31 ) }
    , { category = SmileysAndEmotion, char = "😀", keywords = [ "grinning face", "face", "smile", "happy", "joy", ":D", "grin" ], name = "grinning", sprite = ( 30, 32 ) }
    , { category = SmileysAndEmotion, char = "😁", keywords = [ "beaming face with smiling eyes", "face", "happy", "smile", "joy", "kawaii" ], name = "grin", sprite = ( 30, 33 ) }
    , { category = SmileysAndEmotion, char = "😂", keywords = [ "face with tears of joy", "face", "cry", "tears", "weep", "happy", "happytears", "haha" ], name = "joy", sprite = ( 30, 34 ) }
    , { category = SmileysAndEmotion, char = "😃", keywords = [ "grinning face with big eyes", "face", "happy", "joy", "haha", ":D", ":)", "smile", "funny" ], name = "smiley", sprite = ( 30, 35 ) }
    , { category = SmileysAndEmotion, char = "😄", keywords = [ "grinning face with smiling eyes", "face", "happy", "joy", "funny", "haha", "laugh", "like", ":D", ":)" ], name = "smile", sprite = ( 30, 36 ) }
    , { category = SmileysAndEmotion, char = "😅", keywords = [ "grinning face with sweat", "face", "hot", "happy", "laugh", "sweat", "smile", "relief" ], name = "sweat_smile", sprite = ( 30, 37 ) }
    , { category = SmileysAndEmotion, char = "😆", keywords = [ "grinning squinting face", "happy", "joy", "lol", "satisfied", "haha", "face", "glad", "XD", "laugh" ], name = "laughing", sprite = ( 30, 38 ) }
    , { category = SmileysAndEmotion, char = "😇", keywords = [ "smiling face with halo", "face", "angel", "heaven", "halo" ], name = "innocent", sprite = ( 30, 39 ) }
    , { category = SmileysAndEmotion, char = "😈", keywords = [ "smiling face with horns", "devil", "horns" ], name = "smiling_imp", sprite = ( 30, 40 ) }
    , { category = SmileysAndEmotion, char = "😉", keywords = [ "winking face", "face", "happy", "mischievous", "secret", ";)", "smile", "eye" ], name = "wink", sprite = ( 30, 41 ) }
    , { category = SmileysAndEmotion, char = "😊", keywords = [ "smiling face with smiling eyes", "face", "smile", "happy", "flushed", "crush", "embarrassed", "shy", "joy" ], name = "blush", sprite = ( 30, 42 ) }
    , { category = SmileysAndEmotion, char = "😋", keywords = [ "face savoring food", "happy", "joy", "tongue", "smile", "face", "silly", "yummy", "nom", "delicious", "savouring" ], name = "yum", sprite = ( 30, 43 ) }
    , { category = SmileysAndEmotion, char = "😌", keywords = [ "relieved face", "face", "relaxed", "phew", "massage", "happiness" ], name = "relieved", sprite = ( 30, 44 ) }
    , { category = SmileysAndEmotion, char = "😍", keywords = [ "smiling face with heart eyes", "face", "love", "like", "affection", "valentines", "infatuation", "crush", "heart" ], name = "heart_eyes", sprite = ( 30, 45 ) }
    , { category = SmileysAndEmotion, char = "😎", keywords = [ "smiling face with sunglasses", "face", "cool", "smile", "summer", "beach", "sunglass" ], name = "sunglasses", sprite = ( 30, 46 ) }
    , { category = SmileysAndEmotion, char = "😏", keywords = [ "smirking face", "face", "smile", "mean", "prank", "smug", "sarcasm" ], name = "smirk", sprite = ( 30, 47 ) }
    , { category = SmileysAndEmotion, char = "😐", keywords = [ "neutral face", "indifference", "meh", ":|", "neutral" ], name = "neutral_face", sprite = ( 30, 48 ) }
    , { category = SmileysAndEmotion, char = "😑", keywords = [ "expressionless face", "face", "indifferent", "   ", "meh", "deadpan" ], name = "expressionless", sprite = ( 30, 49 ) }
    , { category = SmileysAndEmotion, char = "😒", keywords = [ "unamused face", "indifference", "bored", "straight face", "serious", "sarcasm", "unimpressed", "skeptical", "dubious", "side eye" ], name = "unamused", sprite = ( 30, 50 ) }
    , { category = SmileysAndEmotion, char = "😓", keywords = [ "downcast face with sweat", "face", "hot", "sad", "tired", "exercise" ], name = "sweat", sprite = ( 30, 51 ) }
    , { category = SmileysAndEmotion, char = "😔", keywords = [ "pensive face", "face", "sad", "depressed", "upset" ], name = "pensive", sprite = ( 30, 52 ) }
    , { category = SmileysAndEmotion, char = "😕", keywords = [ "confused face", "face", "indifference", "huh", "weird", "hmmm", ":/" ], name = "confused", sprite = ( 30, 53 ) }
    , { category = SmileysAndEmotion, char = "😖", keywords = [ "confounded face", "face", "confused", "sick", "unwell", "oops", ":S" ], name = "confounded", sprite = ( 30, 54 ) }
    , { category = SmileysAndEmotion, char = "😗", keywords = [ "kissing face", "love", "like", "face", "3", "valentines", "infatuation", "kiss" ], name = "kissing", sprite = ( 30, 55 ) }
    , { category = SmileysAndEmotion, char = "😘", keywords = [ "face blowing a kiss", "face", "love", "like", "affection", "valentines", "infatuation", "kiss" ], name = "kissing_heart", sprite = ( 30, 56 ) }
    , { category = SmileysAndEmotion, char = "😙", keywords = [ "kissing face with smiling eyes", "face", "affection", "valentines", "infatuation", "kiss" ], name = "kissing_smiling_eyes", sprite = ( 30, 57 ) }
    , { category = SmileysAndEmotion, char = "😚", keywords = [ "kissing face with closed eyes", "face", "love", "like", "affection", "valentines", "infatuation", "kiss" ], name = "kissing_closed_eyes", sprite = ( 31, 0 ) }
    , { category = SmileysAndEmotion, char = "😛", keywords = [ "face with tongue", "face", "prank", "childish", "playful", "mischievous", "smile", "tongue" ], name = "stuck_out_tongue", sprite = ( 31, 1 ) }
    , { category = SmileysAndEmotion, char = "😜", keywords = [ "winking face with tongue", "face", "prank", "childish", "playful", "mischievous", "smile", "wink", "tongue" ], name = "stuck_out_tongue_winking_eye", sprite = ( 31, 2 ) }
    , { category = SmileysAndEmotion, char = "😝", keywords = [ "squinting face with tongue", "face", "prank", "playful", "mischievous", "smile", "tongue" ], name = "stuck_out_tongue_closed_eyes", sprite = ( 31, 3 ) }
    , { category = SmileysAndEmotion, char = "😞", keywords = [ "disappointed face", "face", "sad", "upset", "depressed", ":(" ], name = "disappointed", sprite = ( 31, 4 ) }
    , { category = SmileysAndEmotion, char = "😟", keywords = [ "worried face", "face", "concern", "nervous", ":(" ], name = "worried", sprite = ( 31, 5 ) }
    , { category = SmileysAndEmotion, char = "😠", keywords = [ "angry face", "mad", "face", "annoyed", "frustrated" ], name = "angry", sprite = ( 31, 6 ) }
    , { category = SmileysAndEmotion, char = "😡", keywords = [ "pouting face", "angry", "mad", "hate", "despise" ], name = "rage", sprite = ( 31, 7 ) }
    , { category = SmileysAndEmotion, char = "😢", keywords = [ "crying face", "face", "tears", "sad", "depressed", "upset", ":'(" ], name = "cry", sprite = ( 31, 8 ) }
    , { category = SmileysAndEmotion, char = "😣", keywords = [ "persevering face", "face", "sick", "no", "upset", "oops" ], name = "persevere", sprite = ( 31, 9 ) }
    , { category = SmileysAndEmotion, char = "😤", keywords = [ "face with steam from nose", "face", "gas", "phew", "proud", "pride" ], name = "triumph", sprite = ( 31, 10 ) }
    , { category = SmileysAndEmotion, char = "😥", keywords = [ "sad but relieved face", "face", "phew", "sweat", "nervous" ], name = "disappointed_relieved", sprite = ( 31, 11 ) }
    , { category = SmileysAndEmotion, char = "😦", keywords = [ "frowning face with open mouth", "face", "aw", "what" ], name = "frowning", sprite = ( 31, 12 ) }
    , { category = SmileysAndEmotion, char = "😧", keywords = [ "anguished face", "face", "stunned", "nervous" ], name = "anguished", sprite = ( 31, 13 ) }
    , { category = SmileysAndEmotion, char = "😨", keywords = [ "fearful face", "face", "scared", "terrified", "nervous", "oops", "huh" ], name = "fearful", sprite = ( 31, 14 ) }
    , { category = SmileysAndEmotion, char = "😩", keywords = [ "weary face", "face", "tired", "sleepy", "sad", "frustrated", "upset" ], name = "weary", sprite = ( 31, 15 ) }
    , { category = SmileysAndEmotion, char = "😪", keywords = [ "sleepy face", "face", "tired", "rest", "nap" ], name = "sleepy", sprite = ( 31, 16 ) }
    , { category = SmileysAndEmotion, char = "😫", keywords = [ "tired face", "sick", "whine", "upset", "frustrated" ], name = "tired_face", sprite = ( 31, 17 ) }
    , { category = SmileysAndEmotion, char = "😬", keywords = [ "grimacing face", "face", "grimace", "teeth" ], name = "grimacing", sprite = ( 31, 18 ) }
    , { category = SmileysAndEmotion, char = "😭", keywords = [ "loudly crying face", "face", "cry", "tears", "sad", "upset", "depressed" ], name = "sob", sprite = ( 31, 19 ) }
    , { category = SmileysAndEmotion, char = "😮", keywords = [ "face with open mouth", "face", "surprise", "impressed", "wow", "whoa", ":O" ], name = "open_mouth", sprite = ( 31, 20 ) }
    , { category = SmileysAndEmotion, char = "😯", keywords = [ "hushed face", "face", "woo", "shh" ], name = "hushed", sprite = ( 31, 21 ) }
    , { category = SmileysAndEmotion, char = "😰", keywords = [ "anxious face with sweat", "face", "nervous", "sweat" ], name = "cold_sweat", sprite = ( 31, 22 ) }
    , { category = SmileysAndEmotion, char = "😱", keywords = [ "face screaming in fear", "face", "munch", "scared", "omg" ], name = "scream", sprite = ( 31, 23 ) }
    , { category = SmileysAndEmotion, char = "😲", keywords = [ "astonished face", "face", "xox", "surprised", "poisoned" ], name = "astonished", sprite = ( 31, 24 ) }
    , { category = SmileysAndEmotion, char = "😳", keywords = [ "flushed face", "face", "blush", "shy", "flattered" ], name = "flushed", sprite = ( 31, 25 ) }
    , { category = SmileysAndEmotion, char = "😴", keywords = [ "sleeping face", "face", "tired", "sleepy", "night", "zzz" ], name = "sleeping", sprite = ( 31, 26 ) }
    , { category = SmileysAndEmotion, char = "😵", keywords = [ "dizzy face", "spent", "unconscious", "xox", "dizzy" ], name = "dizzy_face", sprite = ( 31, 27 ) }
    , { category = SmileysAndEmotion, char = "😶", keywords = [ "face without mouth", "face", "hellokitty" ], name = "no_mouth", sprite = ( 31, 28 ) }
    , { category = SmileysAndEmotion, char = "😷", keywords = [ "face with medical mask", "face", "sick", "ill", "disease" ], name = "mask", sprite = ( 31, 29 ) }
    , { category = SmileysAndEmotion, char = "😸", keywords = [ "grinning cat with smiling eyes", "animal", "cats", "smile" ], name = "smile_cat", sprite = ( 31, 30 ) }
    , { category = SmileysAndEmotion, char = "😹", keywords = [ "cat with tears of joy", "animal", "cats", "haha", "happy", "tears" ], name = "joy_cat", sprite = ( 31, 31 ) }
    , { category = SmileysAndEmotion, char = "😺", keywords = [ "grinning cat", "animal", "cats", "happy", "smile" ], name = "smiley_cat", sprite = ( 31, 32 ) }
    , { category = SmileysAndEmotion, char = "😻", keywords = [ "smiling cat with heart eyes", "animal", "love", "like", "affection", "cats", "valentines", "heart" ], name = "heart_eyes_cat", sprite = ( 31, 33 ) }
    , { category = SmileysAndEmotion, char = "😼", keywords = [ "cat with wry smile", "animal", "cats", "smirk" ], name = "smirk_cat", sprite = ( 31, 34 ) }
    , { category = SmileysAndEmotion, char = "😽", keywords = [ "kissing cat", "animal", "cats", "kiss" ], name = "kissing_cat", sprite = ( 31, 35 ) }
    , { category = SmileysAndEmotion, char = "😾", keywords = [ "pouting cat", "animal", "cats" ], name = "pouting_cat", sprite = ( 31, 36 ) }
    , { category = SmileysAndEmotion, char = "😿", keywords = [ "crying cat", "animal", "tears", "weep", "sad", "cats", "upset", "cry" ], name = "crying_cat_face", sprite = ( 31, 37 ) }
    , { category = SmileysAndEmotion, char = "🙀", keywords = [ "weary cat", "animal", "cats", "munch", "scared", "scream" ], name = "scream_cat", sprite = ( 31, 38 ) }
    , { category = SmileysAndEmotion, char = "🙁", keywords = [ "slightly frowning face", "face", "frowning", "disappointed", "sad", "upset" ], name = "slightly_frowning_face", sprite = ( 31, 39 ) }
    , { category = SmileysAndEmotion, char = "🙂", keywords = [ "slightly smiling face", "face", "smile" ], name = "slightly_smiling_face", sprite = ( 31, 40 ) }
    , { category = SmileysAndEmotion, char = "\u{1F643}", keywords = [ "upside down face", "face", "flipped", "silly", "smile" ], name = "upside_down_face", sprite = ( 31, 41 ) }
    , { category = SmileysAndEmotion, char = "\u{1F644}", keywords = [ "face with rolling eyes", "face", "eyeroll", "frustrated" ], name = "face_with_rolling_eyes", sprite = ( 31, 42 ) }
    , { category = PeopleAndBody, char = "🙅\u{200D}♀️", keywords = [ "woman gesturing no", "female", "girl", "woman", "nope" ], name = "woman-gesturing-no", sprite = ( 31, 43 ) }
    , { category = PeopleAndBody, char = "🙅\u{200D}♂️", keywords = [ "man gesturing no", "male", "boy", "man", "nope" ], name = "man-gesturing-no", sprite = ( 31, 49 ) }
    , { category = PeopleAndBody, char = "🙅", keywords = [ "person gesturing no" ], name = "no_good", sprite = ( 31, 55 ) }
    , { category = PeopleAndBody, char = "🙆\u{200D}♀️", keywords = [ "woman gesturing ok", "women", "girl", "female", "pink", "human", "woman" ], name = "woman-gesturing-ok", sprite = ( 32, 3 ) }
    , { category = PeopleAndBody, char = "🙆\u{200D}♂️", keywords = [ "man gesturing ok", "men", "boy", "male", "blue", "human", "man" ], name = "man-gesturing-ok", sprite = ( 32, 9 ) }
    , { category = PeopleAndBody, char = "🙆", keywords = [ "person gesturing ok" ], name = "ok_woman", sprite = ( 32, 15 ) }
    , { category = PeopleAndBody, char = "🙇\u{200D}♀️", keywords = [ "woman bowing", "woman", "female", "girl" ], name = "woman-bowing", sprite = ( 32, 21 ) }
    , { category = PeopleAndBody, char = "🙇\u{200D}♂️", keywords = [ "man bowing", "man", "male", "boy" ], name = "man-bowing", sprite = ( 32, 27 ) }
    , { category = PeopleAndBody, char = "🙇", keywords = [ "person bowing" ], name = "bow", sprite = ( 32, 33 ) }
    , { category = SmileysAndEmotion, char = "🙈", keywords = [ "see no evil monkey", "monkey", "animal", "nature", "haha" ], name = "see_no_evil", sprite = ( 32, 39 ) }
    , { category = SmileysAndEmotion, char = "🙉", keywords = [ "hear no evil monkey", "animal", "monkey", "nature" ], name = "hear_no_evil", sprite = ( 32, 40 ) }
    , { category = SmileysAndEmotion, char = "🙊", keywords = [ "speak no evil monkey", "monkey", "animal", "nature", "omg" ], name = "speak_no_evil", sprite = ( 32, 41 ) }
    , { category = PeopleAndBody, char = "🙋\u{200D}♀️", keywords = [ "woman raising hand", "female", "girl", "woman" ], name = "woman-raising-hand", sprite = ( 32, 42 ) }
    , { category = PeopleAndBody, char = "🙋\u{200D}♂️", keywords = [ "man raising hand", "male", "boy", "man" ], name = "man-raising-hand", sprite = ( 32, 48 ) }
    , { category = PeopleAndBody, char = "🙋", keywords = [ "person raising hand" ], name = "raising_hand", sprite = ( 32, 54 ) }
    , { category = PeopleAndBody, char = "🙌", keywords = [ "raising hands", "gesture", "hooray", "yea", "celebration", "hands" ], name = "raised_hands", sprite = ( 33, 2 ) }
    , { category = PeopleAndBody, char = "🙍\u{200D}♀️", keywords = [ "woman frowning", "female", "girl", "woman", "sad", "depressed", "discouraged", "unhappy" ], name = "woman-frowning", sprite = ( 33, 8 ) }
    , { category = PeopleAndBody, char = "🙍\u{200D}♂️", keywords = [ "man frowning", "male", "boy", "man", "sad", "depressed", "discouraged", "unhappy" ], name = "man-frowning", sprite = ( 33, 14 ) }
    , { category = PeopleAndBody, char = "🙍", keywords = [ "person frowning" ], name = "person_frowning", sprite = ( 33, 20 ) }
    , { category = PeopleAndBody, char = "🙎\u{200D}♀️", keywords = [ "woman pouting", "female", "girl", "woman" ], name = "woman-pouting", sprite = ( 33, 26 ) }
    , { category = PeopleAndBody, char = "🙎\u{200D}♂️", keywords = [ "man pouting", "male", "boy", "man" ], name = "man-pouting", sprite = ( 33, 32 ) }
    , { category = PeopleAndBody, char = "🙎", keywords = [ "person pouting" ], name = "person_with_pouting_face", sprite = ( 33, 38 ) }
    , { category = PeopleAndBody, char = "🙏", keywords = [ "folded hands", "please", "hope", "wish", "namaste", "highfive" ], name = "pray", sprite = ( 33, 44 ) }
    , { category = TravelAndPlaces, char = "🚀", keywords = [ "rocket", "launch", "ship", "staffmode", "NASA", "outer space", "outer space", "fly" ], name = "rocket", sprite = ( 33, 50 ) }
    , { category = TravelAndPlaces, char = "🚁", keywords = [ "helicopter", "transportation", "vehicle", "fly" ], name = "helicopter", sprite = ( 33, 51 ) }
    , { category = TravelAndPlaces, char = "🚂", keywords = [ "locomotive", "transportation", "vehicle", "train" ], name = "steam_locomotive", sprite = ( 33, 52 ) }
    , { category = TravelAndPlaces, char = "🚃", keywords = [ "railway car", "transportation", "vehicle" ], name = "railway_car", sprite = ( 33, 53 ) }
    , { category = TravelAndPlaces, char = "🚄", keywords = [ "high speed train", "transportation", "vehicle" ], name = "bullettrain_side", sprite = ( 33, 54 ) }
    , { category = TravelAndPlaces, char = "🚅", keywords = [ "bullet train", "transportation", "vehicle", "speed", "fast", "public", "travel" ], name = "bullettrain_front", sprite = ( 33, 55 ) }
    , { category = TravelAndPlaces, char = "🚆", keywords = [ "train", "transportation", "vehicle" ], name = "train2", sprite = ( 33, 56 ) }
    , { category = TravelAndPlaces, char = "🚇", keywords = [ "metro", "transportation", "blue square", "mrt", "underground", "tube" ], name = "metro", sprite = ( 33, 57 ) }
    , { category = TravelAndPlaces, char = "🚈", keywords = [ "light rail", "transportation", "vehicle" ], name = "light_rail", sprite = ( 34, 0 ) }
    , { category = TravelAndPlaces, char = "🚉", keywords = [ "station", "transportation", "vehicle", "public" ], name = "station", sprite = ( 34, 1 ) }
    , { category = TravelAndPlaces, char = "🚊", keywords = [ "tram", "transportation", "vehicle" ], name = "tram", sprite = ( 34, 2 ) }
    , { category = TravelAndPlaces, char = "🚋", keywords = [ "tram car", "transportation", "vehicle", "carriage", "public", "travel" ], name = "train", sprite = ( 34, 3 ) }
    , { category = TravelAndPlaces, char = "🚌", keywords = [ "bus", "car", "vehicle", "transportation" ], name = "bus", sprite = ( 34, 4 ) }
    , { category = TravelAndPlaces, char = "🚍", keywords = [ "oncoming bus", "vehicle", "transportation" ], name = "oncoming_bus", sprite = ( 34, 5 ) }
    , { category = TravelAndPlaces, char = "🚎", keywords = [ "trolleybus", "bart", "transportation", "vehicle" ], name = "trolleybus", sprite = ( 34, 6 ) }
    , { category = TravelAndPlaces, char = "🚏", keywords = [ "bus stop", "transportation", "wait" ], name = "busstop", sprite = ( 34, 7 ) }
    , { category = TravelAndPlaces, char = "🚐", keywords = [ "minibus", "vehicle", "car", "transportation" ], name = "minibus", sprite = ( 34, 8 ) }
    , { category = TravelAndPlaces, char = "🚑", keywords = [ "ambulance", "health", "911", "hospital" ], name = "ambulance", sprite = ( 34, 9 ) }
    , { category = TravelAndPlaces, char = "🚒", keywords = [ "fire engine", "transportation", "cars", "vehicle" ], name = "fire_engine", sprite = ( 34, 10 ) }
    , { category = TravelAndPlaces, char = "🚓", keywords = [ "police car", "vehicle", "cars", "transportation", "law", "legal", "enforcement" ], name = "police_car", sprite = ( 34, 11 ) }
    , { category = TravelAndPlaces, char = "🚔", keywords = [ "oncoming police car", "vehicle", "law", "legal", "enforcement", "911" ], name = "oncoming_police_car", sprite = ( 34, 12 ) }
    , { category = TravelAndPlaces, char = "🚕", keywords = [ "taxi", "uber", "vehicle", "cars", "transportation" ], name = "taxi", sprite = ( 34, 13 ) }
    , { category = TravelAndPlaces, char = "🚖", keywords = [ "oncoming taxi", "vehicle", "cars", "uber" ], name = "oncoming_taxi", sprite = ( 34, 14 ) }
    , { category = TravelAndPlaces, char = "🚗", keywords = [ "automobile", "red", "transportation", "vehicle" ], name = "car", sprite = ( 34, 15 ) }
    , { category = TravelAndPlaces, char = "🚘", keywords = [ "oncoming automobile", "car", "vehicle", "transportation" ], name = "oncoming_automobile", sprite = ( 34, 16 ) }
    , { category = TravelAndPlaces, char = "🚙", keywords = [ "sport utility vehicle", "transportation", "vehicle" ], name = "blue_car", sprite = ( 34, 17 ) }
    , { category = TravelAndPlaces, char = "🚚", keywords = [ "delivery truck", "cars", "transportation" ], name = "truck", sprite = ( 34, 18 ) }
    , { category = TravelAndPlaces, char = "🚛", keywords = [ "articulated lorry", "vehicle", "cars", "transportation", "express" ], name = "articulated_lorry", sprite = ( 34, 19 ) }
    , { category = TravelAndPlaces, char = "🚜", keywords = [ "tractor", "vehicle", "car", "farming", "agriculture" ], name = "tractor", sprite = ( 34, 20 ) }
    , { category = TravelAndPlaces, char = "🚝", keywords = [ "monorail", "transportation", "vehicle" ], name = "monorail", sprite = ( 34, 21 ) }
    , { category = TravelAndPlaces, char = "🚞", keywords = [ "mountain railway", "transportation", "vehicle" ], name = "mountain_railway", sprite = ( 34, 22 ) }
    , { category = TravelAndPlaces, char = "🚟", keywords = [ "suspension railway", "vehicle", "transportation" ], name = "suspension_railway", sprite = ( 34, 23 ) }
    , { category = TravelAndPlaces, char = "🚠", keywords = [ "mountain cableway", "transportation", "vehicle", "ski" ], name = "mountain_cableway", sprite = ( 34, 24 ) }
    , { category = TravelAndPlaces, char = "🚡", keywords = [ "aerial tramway", "transportation", "vehicle", "ski" ], name = "aerial_tramway", sprite = ( 34, 25 ) }
    , { category = TravelAndPlaces, char = "🚢", keywords = [ "ship", "transportation", "titanic", "deploy" ], name = "ship", sprite = ( 34, 26 ) }
    , { category = PeopleAndBody, char = "🚣\u{200D}♀️", keywords = [ "woman rowing boat", "sports", "hobby", "water", "ship", "woman", "female" ], name = "woman-rowing-boat", sprite = ( 34, 27 ) }
    , { category = PeopleAndBody, char = "🚣\u{200D}♂️", keywords = [ "man rowing boat", "sports", "hobby", "water", "ship" ], name = "man-rowing-boat", sprite = ( 34, 33 ) }
    , { category = PeopleAndBody, char = "🚣", keywords = [ "person rowing boat" ], name = "rowboat", sprite = ( 34, 39 ) }
    , { category = TravelAndPlaces, char = "🚤", keywords = [ "speedboat", "ship", "transportation", "vehicle", "summer" ], name = "speedboat", sprite = ( 34, 45 ) }
    , { category = TravelAndPlaces, char = "🚥", keywords = [ "horizontal traffic light", "transportation", "signal" ], name = "traffic_light", sprite = ( 34, 46 ) }
    , { category = TravelAndPlaces, char = "🚦", keywords = [ "vertical traffic light", "transportation", "driving" ], name = "vertical_traffic_light", sprite = ( 34, 47 ) }
    , { category = TravelAndPlaces, char = "🚧", keywords = [ "construction", "wip", "progress", "caution", "warning" ], name = "construction", sprite = ( 34, 48 ) }
    , { category = TravelAndPlaces, char = "🚨", keywords = [ "police car light", "police", "ambulance", "911", "emergency", "alert", "error", "pinged", "law", "legal" ], name = "rotating_light", sprite = ( 34, 49 ) }
    , { category = Flags, char = "🚩", keywords = [ "triangular flag", "mark", "milestone", "place" ], name = "triangular_flag_on_post", sprite = ( 34, 50 ) }
    , { category = Objects, char = "🚪", keywords = [ "door", "house", "entry", "exit" ], name = "door", sprite = ( 34, 51 ) }
    , { category = Symbols, char = "🚫", keywords = [ "prohibited", "forbid", "stop", "limit", "denied", "disallow", "circle" ], name = "no_entry_sign", sprite = ( 34, 52 ) }
    , { category = Objects, char = "🚬", keywords = [ "cigarette", "kills", "tobacco", "cigarette", "joint", "smoke" ], name = "smoking", sprite = ( 34, 53 ) }
    , { category = Symbols, char = "🚭", keywords = [ "no smoking", "cigarette", "blue square", "smell", "smoke" ], name = "no_smoking", sprite = ( 34, 54 ) }
    , { category = Symbols, char = "🚮", keywords = [ "litter in bin sign", "blue square", "sign", "human", "info" ], name = "put_litter_in_its_place", sprite = ( 34, 55 ) }
    , { category = Symbols, char = "🚯", keywords = [ "no littering", "trash", "bin", "garbage", "circle" ], name = "do_not_litter", sprite = ( 34, 56 ) }
    , { category = Symbols, char = "🚰", keywords = [ "potable water", "blue square", "liquid", "restroom", "cleaning", "faucet" ], name = "potable_water", sprite = ( 34, 57 ) }
    , { category = Symbols, char = "🚱", keywords = [ "non potable water", "drink", "faucet", "tap", "circle" ], name = "non-potable_water", sprite = ( 35, 0 ) }
    , { category = TravelAndPlaces, char = "🚲", keywords = [ "bicycle", "sports", "bicycle", "exercise", "hipster" ], name = "bike", sprite = ( 35, 1 ) }
    , { category = Symbols, char = "🚳", keywords = [ "no bicycles", "cyclist", "prohibited", "circle" ], name = "no_bicycles", sprite = ( 35, 2 ) }
    , { category = PeopleAndBody, char = "🚴\u{200D}♀️", keywords = [ "woman biking", "sports", "bike", "exercise", "hipster", "woman", "female" ], name = "woman-biking", sprite = ( 35, 3 ) }
    , { category = PeopleAndBody, char = "🚴\u{200D}♂️", keywords = [ "man biking", "sports", "bike", "exercise", "hipster" ], name = "man-biking", sprite = ( 35, 9 ) }
    , { category = PeopleAndBody, char = "🚴", keywords = [ "person biking" ], name = "bicyclist", sprite = ( 35, 15 ) }
    , { category = PeopleAndBody, char = "🚵\u{200D}♀️", keywords = [ "woman mountain biking", "transportation", "sports", "human", "race", "bike", "woman", "female" ], name = "woman-mountain-biking", sprite = ( 35, 21 ) }
    , { category = PeopleAndBody, char = "🚵\u{200D}♂️", keywords = [ "man mountain biking", "transportation", "sports", "human", "race", "bike" ], name = "man-mountain-biking", sprite = ( 35, 27 ) }
    , { category = PeopleAndBody, char = "🚵", keywords = [ "person mountain biking" ], name = "mountain_bicyclist", sprite = ( 35, 33 ) }
    , { category = PeopleAndBody, char = "🚶\u{200D}♀️", keywords = [ "woman walking", "human", "feet", "steps", "woman", "female" ], name = "woman-walking", sprite = ( 35, 39 ) }
    , { category = PeopleAndBody, char = "🚶\u{200D}♂️", keywords = [ "man walking", "human", "feet", "steps" ], name = "man-walking", sprite = ( 35, 45 ) }
    , { category = PeopleAndBody, char = "🚶", keywords = [ "person walking" ], name = "walking", sprite = ( 35, 51 ) }
    , { category = Symbols, char = "🚷", keywords = [ "no pedestrians", "rules", "crossing", "walking", "circle" ], name = "no_pedestrians", sprite = ( 35, 57 ) }
    , { category = Symbols, char = "🚸", keywords = [ "children crossing", "school", "warning", "danger", "sign", "driving", "yellow diamond" ], name = "children_crossing", sprite = ( 36, 0 ) }
    , { category = Symbols, char = "🚹", keywords = [ "men s room", "toilet", "restroom", "wc", "blue square", "gender", "male" ], name = "mens", sprite = ( 36, 1 ) }
    , { category = Symbols, char = "🚺", keywords = [ "women s room", "purple square", "woman", "female", "toilet", "loo", "restroom", "gender" ], name = "womens", sprite = ( 36, 2 ) }
    , { category = Symbols, char = "🚻", keywords = [ "restroom", "blue square", "toilet", "refresh", "wc", "gender" ], name = "restroom", sprite = ( 36, 3 ) }
    , { category = Symbols, char = "🚼", keywords = [ "baby symbol", "orange square", "child" ], name = "baby_symbol", sprite = ( 36, 4 ) }
    , { category = Objects, char = "🚽", keywords = [ "toilet", "restroom", "wc", "washroom", "bathroom", "potty" ], name = "toilet", sprite = ( 36, 5 ) }
    , { category = Symbols, char = "🚾", keywords = [ "water closet", "toilet", "restroom", "blue square" ], name = "wc", sprite = ( 36, 6 ) }
    , { category = Objects, char = "🚿", keywords = [ "shower", "clean", "water", "bathroom" ], name = "shower", sprite = ( 36, 7 ) }
    , { category = PeopleAndBody, char = "🛀", keywords = [ "person taking bath", "clean", "shower", "bathroom" ], name = "bath", sprite = ( 36, 8 ) }
    , { category = Objects, char = "🛁", keywords = [ "bathtub", "clean", "shower", "bathroom" ], name = "bathtub", sprite = ( 36, 14 ) }
    , { category = Symbols, char = "🛂", keywords = [ "passport control", "custom", "blue square" ], name = "passport_control", sprite = ( 36, 15 ) }
    , { category = Symbols, char = "🛃", keywords = [ "customs", "passport", "border", "blue square" ], name = "customs", sprite = ( 36, 16 ) }
    , { category = Symbols, char = "🛄", keywords = [ "baggage claim", "blue square", "airport", "transport" ], name = "baggage_claim", sprite = ( 36, 17 ) }
    , { category = Symbols, char = "🛅", keywords = [ "left luggage", "blue square", "travel" ], name = "left_luggage", sprite = ( 36, 18 ) }
    , { category = Objects, char = "🛋️", keywords = [ "couch and lamp", "read", "chill" ], name = "couch_and_lamp", sprite = ( 36, 19 ) }
    , { category = PeopleAndBody, char = "🛌", keywords = [ "person in bed", "bed", "rest" ], name = "sleeping_accommodation", sprite = ( 36, 20 ) }
    , { category = Objects, char = "🛍️", keywords = [ "shopping bags", "mall", "buy", "purchase" ], name = "shopping_bags", sprite = ( 36, 26 ) }
    , { category = TravelAndPlaces, char = "🛎️", keywords = [ "bellhop bell", "service" ], name = "bellhop_bell", sprite = ( 36, 27 ) }
    , { category = Objects, char = "🛏️", keywords = [ "bed", "sleep", "rest" ], name = "bed", sprite = ( 36, 28 ) }
    , { category = Symbols, char = "\u{1F6D0}", keywords = [ "place of worship", "religion", "church", "temple", "prayer" ], name = "place_of_worship", sprite = ( 36, 29 ) }
    , { category = TravelAndPlaces, char = "\u{1F6D1}", keywords = [ "stop sign", "stop" ], name = "octagonal_sign", sprite = ( 36, 30 ) }
    , { category = Objects, char = "\u{1F6D2}", keywords = [ "shopping cart", "trolley" ], name = "shopping_trolley", sprite = ( 36, 31 ) }
    , { category = TravelAndPlaces, char = "\u{1F6D5}", keywords = [ "hindu temple" ], name = "hindu_temple", sprite = ( 36, 32 ) }
    , { category = TravelAndPlaces, char = "\u{1F6D6}", keywords = [ "hut", "house", "structure" ], name = "hut", sprite = ( 36, 33 ) }
    , { category = Objects, char = "\u{1F6D7}", keywords = [ "elevator", "lift" ], name = "elevator", sprite = ( 36, 34 ) }
    , { category = Objects, char = "🛠️", keywords = [ "hammer and wrench", "tools", "build", "create" ], name = "hammer_and_wrench", sprite = ( 36, 35 ) }
    , { category = Objects, char = "🛡️", keywords = [ "shield", "protection", "security" ], name = "shield", sprite = ( 36, 36 ) }
    , { category = TravelAndPlaces, char = "🛢️", keywords = [ "oil drum", "barrell" ], name = "oil_drum", sprite = ( 36, 37 ) }
    , { category = TravelAndPlaces, char = "🛣️", keywords = [ "motorway", "road", "cupertino", "interstate", "highway" ], name = "motorway", sprite = ( 36, 38 ) }
    , { category = TravelAndPlaces, char = "🛤️", keywords = [ "railway track", "train", "transportation" ], name = "railway_track", sprite = ( 36, 39 ) }
    , { category = TravelAndPlaces, char = "🛥️", keywords = [ "motor boat", "ship" ], name = "motor_boat", sprite = ( 36, 40 ) }
    , { category = TravelAndPlaces, char = "🛩️", keywords = [ "small airplane", "flight", "transportation", "fly", "vehicle" ], name = "small_airplane", sprite = ( 36, 41 ) }
    , { category = TravelAndPlaces, char = "🛫", keywords = [ "airplane departure", "airport", "flight", "landing" ], name = "airplane_departure", sprite = ( 36, 42 ) }
    , { category = TravelAndPlaces, char = "🛬", keywords = [ "airplane arrival", "airport", "flight", "boarding" ], name = "airplane_arriving", sprite = ( 36, 43 ) }
    , { category = TravelAndPlaces, char = "🛰️", keywords = [ "satellite", "communication", "gps", "orbit", "spaceflight", "NASA", "ISS" ], name = "satellite", sprite = ( 36, 44 ) }
    , { category = TravelAndPlaces, char = "🛳️", keywords = [ "passenger ship", "yacht", "cruise", "ferry" ], name = "passenger_ship", sprite = ( 36, 45 ) }
    , { category = TravelAndPlaces, char = "\u{1F6F4}", keywords = [ "kick scooter", "vehicle", "kick", "razor" ], name = "scooter", sprite = ( 36, 46 ) }
    , { category = TravelAndPlaces, char = "\u{1F6F5}", keywords = [ "motor scooter", "vehicle", "vespa", "sasha" ], name = "motor_scooter", sprite = ( 36, 47 ) }
    , { category = TravelAndPlaces, char = "\u{1F6F6}", keywords = [ "canoe", "boat", "paddle", "water", "ship" ], name = "canoe", sprite = ( 36, 48 ) }
    , { category = Activities, char = "\u{1F6F7}", keywords = [ "sled", "sleigh", "luge", "toboggan" ], name = "sled", sprite = ( 36, 49 ) }
    , { category = TravelAndPlaces, char = "\u{1F6F8}", keywords = [ "flying saucer", "transportation", "vehicle", "ufo" ], name = "flying_saucer", sprite = ( 36, 50 ) }
    , { category = TravelAndPlaces, char = "\u{1F6F9}", keywords = [ "skateboard", "board" ], name = "skateboard", sprite = ( 36, 51 ) }
    , { category = TravelAndPlaces, char = "\u{1F6FA}", keywords = [ "auto rickshaw" ], name = "auto_rickshaw", sprite = ( 36, 52 ) }
    , { category = TravelAndPlaces, char = "\u{1F6FB}", keywords = [ "pickup truck", "car", "transportation" ], name = "pickup_truck", sprite = ( 36, 53 ) }
    , { category = TravelAndPlaces, char = "\u{1F6FC}", keywords = [ "roller skate", "footwear", "sports" ], name = "roller_skate", sprite = ( 36, 54 ) }
    , { category = Symbols, char = "\u{1F7E0}", keywords = [ "orange circle" ], name = "large_orange_circle", sprite = ( 36, 55 ) }
    , { category = Symbols, char = "\u{1F7E1}", keywords = [ "yellow circle" ], name = "large_yellow_circle", sprite = ( 36, 56 ) }
    , { category = Symbols, char = "\u{1F7E2}", keywords = [ "green circle" ], name = "large_green_circle", sprite = ( 36, 57 ) }
    , { category = Symbols, char = "\u{1F7E3}", keywords = [ "purple circle" ], name = "large_purple_circle", sprite = ( 37, 0 ) }
    , { category = Symbols, char = "\u{1F7E4}", keywords = [ "brown circle" ], name = "large_brown_circle", sprite = ( 37, 1 ) }
    , { category = Symbols, char = "\u{1F7E5}", keywords = [ "red square" ], name = "large_red_square", sprite = ( 37, 2 ) }
    , { category = Symbols, char = "\u{1F7E6}", keywords = [ "blue square" ], name = "large_blue_square", sprite = ( 37, 3 ) }
    , { category = Symbols, char = "\u{1F7E7}", keywords = [ "orange square" ], name = "large_orange_square", sprite = ( 37, 4 ) }
    , { category = Symbols, char = "\u{1F7E8}", keywords = [ "yellow square" ], name = "large_yellow_square", sprite = ( 37, 5 ) }
    , { category = Symbols, char = "\u{1F7E9}", keywords = [ "green square" ], name = "large_green_square", sprite = ( 37, 6 ) }
    , { category = Symbols, char = "\u{1F7EA}", keywords = [ "purple square" ], name = "large_purple_square", sprite = ( 37, 7 ) }
    , { category = Symbols, char = "\u{1F7EB}", keywords = [ "brown square" ], name = "large_brown_square", sprite = ( 37, 8 ) }
    , { category = PeopleAndBody, char = "\u{1F90C}", keywords = [ "pinched fingers", "size", "tiny", "small" ], name = "pinched_fingers", sprite = ( 37, 9 ) }
    , { category = SmileysAndEmotion, char = "\u{1F90D}", keywords = [ "white heart" ], name = "white_heart", sprite = ( 37, 15 ) }
    , { category = SmileysAndEmotion, char = "\u{1F90E}", keywords = [ "brown heart" ], name = "brown_heart", sprite = ( 37, 16 ) }
    , { category = PeopleAndBody, char = "\u{1F90F}", keywords = [ "pinching hand" ], name = "pinching_hand", sprite = ( 37, 17 ) }
    , { category = SmileysAndEmotion, char = "\u{1F910}", keywords = [ "zipper mouth face", "face", "sealed", "zipper", "secret" ], name = "zipper_mouth_face", sprite = ( 37, 23 ) }
    , { category = SmileysAndEmotion, char = "\u{1F911}", keywords = [ "money mouth face", "face", "rich", "dollar", "money" ], name = "money_mouth_face", sprite = ( 37, 24 ) }
    , { category = SmileysAndEmotion, char = "\u{1F912}", keywords = [ "face with thermometer", "sick", "temperature", "thermometer", "cold", "fever" ], name = "face_with_thermometer", sprite = ( 37, 25 ) }
    , { category = SmileysAndEmotion, char = "\u{1F913}", keywords = [ "nerd face", "face", "nerdy", "geek", "dork" ], name = "nerd_face", sprite = ( 37, 26 ) }
    , { category = SmileysAndEmotion, char = "\u{1F914}", keywords = [ "thinking face", "face", "hmmm", "think", "consider" ], name = "thinking_face", sprite = ( 37, 27 ) }
    , { category = SmileysAndEmotion, char = "\u{1F915}", keywords = [ "face with head bandage", "injured", "clumsy", "bandage", "hurt" ], name = "face_with_head_bandage", sprite = ( 37, 28 ) }
    , { category = SmileysAndEmotion, char = "\u{1F916}", keywords = [ "robot", "computer", "machine", "bot" ], name = "robot_face", sprite = ( 37, 29 ) }
    , { category = SmileysAndEmotion, char = "\u{1F917}", keywords = [ "hugging face", "face", "smile", "hug" ], name = "hugging_face", sprite = ( 37, 30 ) }
    , { category = PeopleAndBody, char = "\u{1F918}", keywords = [ "sign of the horns", "hand", "fingers", "evil eye", "sign of horns", "rock on" ], name = "the_horns", sprite = ( 37, 31 ) }
    , { category = PeopleAndBody, char = "\u{1F919}", keywords = [ "call me hand", "hands", "gesture" ], name = "call_me_hand", sprite = ( 37, 37 ) }
    , { category = PeopleAndBody, char = "\u{1F91A}", keywords = [ "raised back of hand", "fingers", "raised", "backhand" ], name = "raised_back_of_hand", sprite = ( 37, 43 ) }
    , { category = PeopleAndBody, char = "\u{1F91B}", keywords = [ "left facing fist", "hand", "fistbump" ], name = "left-facing_fist", sprite = ( 37, 49 ) }
    , { category = PeopleAndBody, char = "\u{1F91C}", keywords = [ "right facing fist", "hand", "fistbump" ], name = "right-facing_fist", sprite = ( 37, 55 ) }
    , { category = PeopleAndBody, char = "\u{1F91D}", keywords = [ "handshake", "agreement", "shake" ], name = "handshake", sprite = ( 38, 3 ) }
    , { category = PeopleAndBody, char = "\u{1F91E}", keywords = [ "crossed fingers", "good", "lucky" ], name = "crossed_fingers", sprite = ( 38, 4 ) }
    , { category = PeopleAndBody, char = "\u{1F91F}", keywords = [ "love you gesture", "hand", "fingers", "gesture" ], name = "i_love_you_hand_sign", sprite = ( 38, 10 ) }
    , { category = SmileysAndEmotion, char = "\u{1F920}", keywords = [ "cowboy hat face", "face", "cowgirl", "hat" ], name = "face_with_cowboy_hat", sprite = ( 38, 16 ) }
    , { category = SmileysAndEmotion, char = "\u{1F921}", keywords = [ "clown face", "face" ], name = "clown_face", sprite = ( 38, 17 ) }
    , { category = SmileysAndEmotion, char = "\u{1F922}", keywords = [ "nauseated face", "face", "vomit", "gross", "green", "sick", "throw up", "ill" ], name = "nauseated_face", sprite = ( 38, 18 ) }
    , { category = SmileysAndEmotion, char = "\u{1F923}", keywords = [ "rolling on the floor laughing", "face", "rolling", "floor", "laughing", "lol", "haha" ], name = "rolling_on_the_floor_laughing", sprite = ( 38, 19 ) }
    , { category = SmileysAndEmotion, char = "\u{1F924}", keywords = [ "drooling face", "face" ], name = "drooling_face", sprite = ( 38, 20 ) }
    , { category = SmileysAndEmotion, char = "\u{1F925}", keywords = [ "lying face", "face", "lie", "pinocchio" ], name = "lying_face", sprite = ( 38, 21 ) }
    , { category = PeopleAndBody, char = "\u{1F926}\u{200D}♀️", keywords = [ "woman facepalming", "woman", "female", "girl", "disbelief" ], name = "woman-facepalming", sprite = ( 38, 22 ) }
    , { category = PeopleAndBody, char = "\u{1F926}\u{200D}♂️", keywords = [ "man facepalming", "man", "male", "boy", "disbelief" ], name = "man-facepalming", sprite = ( 38, 28 ) }
    , { category = PeopleAndBody, char = "\u{1F926}", keywords = [ "person facepalming" ], name = "face_palm", sprite = ( 38, 34 ) }
    , { category = SmileysAndEmotion, char = "\u{1F927}", keywords = [ "sneezing face", "face", "gesundheit", "sneeze", "sick", "allergy" ], name = "sneezing_face", sprite = ( 38, 40 ) }
    , { category = SmileysAndEmotion, char = "\u{1F928}", keywords = [ "face with raised eyebrow", "face", "distrust", "scepticism", "disapproval", "disbelief", "surprise" ], name = "face_with_raised_eyebrow", sprite = ( 38, 41 ) }
    , { category = SmileysAndEmotion, char = "\u{1F929}", keywords = [ "star struck", "face", "smile", "starry", "eyes", "grinning" ], name = "star-struck", sprite = ( 38, 42 ) }
    , { category = SmileysAndEmotion, char = "\u{1F92A}", keywords = [ "zany face", "face", "goofy", "crazy" ], name = "zany_face", sprite = ( 38, 43 ) }
    , { category = SmileysAndEmotion, char = "\u{1F92B}", keywords = [ "shushing face", "face", "quiet", "shhh" ], name = "shushing_face", sprite = ( 38, 44 ) }
    , { category = SmileysAndEmotion, char = "\u{1F92C}", keywords = [ "face with symbols on mouth", "face", "swearing", "cursing", "cussing", "profanity", "expletive" ], name = "face_with_symbols_on_mouth", sprite = ( 38, 45 ) }
    , { category = SmileysAndEmotion, char = "\u{1F92D}", keywords = [ "face with hand over mouth", "face", "whoops", "shock", "surprise" ], name = "face_with_hand_over_mouth", sprite = ( 38, 46 ) }
    , { category = SmileysAndEmotion, char = "\u{1F92E}", keywords = [ "face vomiting", "face", "sick" ], name = "face_vomiting", sprite = ( 38, 47 ) }
    , { category = SmileysAndEmotion, char = "\u{1F92F}", keywords = [ "exploding head", "face", "shocked", "mind", "blown" ], name = "exploding_head", sprite = ( 38, 48 ) }
    , { category = PeopleAndBody, char = "\u{1F930}", keywords = [ "pregnant woman", "baby" ], name = "pregnant_woman", sprite = ( 38, 49 ) }
    , { category = PeopleAndBody, char = "\u{1F931}", keywords = [ "breast feeding", "nursing", "baby" ], name = "breast-feeding", sprite = ( 38, 55 ) }
    , { category = PeopleAndBody, char = "\u{1F932}", keywords = [ "palms up together", "hands", "gesture", "cupped", "prayer" ], name = "palms_up_together", sprite = ( 39, 3 ) }
    , { category = PeopleAndBody, char = "\u{1F933}", keywords = [ "selfie", "camera", "phone" ], name = "selfie", sprite = ( 39, 9 ) }
    , { category = PeopleAndBody, char = "\u{1F934}", keywords = [ "prince", "boy", "man", "male", "crown", "royal", "king" ], name = "prince", sprite = ( 39, 15 ) }
    , { category = PeopleAndBody, char = "\u{1F935}\u{200D}♀️", keywords = [ "woman in tuxedo", "formal", "fashion" ], name = "woman_in_tuxedo", sprite = ( 39, 21 ) }
    , { category = PeopleAndBody, char = "\u{1F935}\u{200D}♂️", keywords = [ "man in tuxedo", "formal", "fashion" ], name = "man_in_tuxedo", sprite = ( 39, 27 ) }
    , { category = PeopleAndBody, char = "\u{1F935}", keywords = [ "man in tuxedo", "couple", "marriage", "wedding", "groom" ], name = "man_in_tuxedo", sprite = ( 39, 33 ) }
    , { category = PeopleAndBody, char = "\u{1F936}", keywords = [ "mrs claus", "woman", "female", "xmas", "mother christmas" ], name = "mrs_claus", sprite = ( 39, 39 ) }
    , { category = PeopleAndBody, char = "\u{1F937}\u{200D}♀️", keywords = [ "woman shrugging", "woman", "female", "girl", "confused", "indifferent", "doubt" ], name = "woman-shrugging", sprite = ( 39, 45 ) }
    , { category = PeopleAndBody, char = "\u{1F937}\u{200D}♂️", keywords = [ "man shrugging", "man", "male", "boy", "confused", "indifferent", "doubt" ], name = "man-shrugging", sprite = ( 39, 51 ) }
    , { category = PeopleAndBody, char = "\u{1F937}", keywords = [ "person shrugging" ], name = "shrug", sprite = ( 39, 57 ) }
    , { category = PeopleAndBody, char = "\u{1F938}\u{200D}♀️", keywords = [ "woman cartwheeling", "gymnastics" ], name = "woman-cartwheeling", sprite = ( 40, 5 ) }
    , { category = PeopleAndBody, char = "\u{1F938}\u{200D}♂️", keywords = [ "man cartwheeling", "gymnastics" ], name = "man-cartwheeling", sprite = ( 40, 11 ) }
    , { category = PeopleAndBody, char = "\u{1F938}", keywords = [ "person cartwheeling" ], name = "person_doing_cartwheel", sprite = ( 40, 17 ) }
    , { category = PeopleAndBody, char = "\u{1F939}\u{200D}♀️", keywords = [ "woman juggling", "juggle", "balance", "skill", "multitask" ], name = "woman-juggling", sprite = ( 40, 23 ) }
    , { category = PeopleAndBody, char = "\u{1F939}\u{200D}♂️", keywords = [ "man juggling", "juggle", "balance", "skill", "multitask" ], name = "man-juggling", sprite = ( 40, 29 ) }
    , { category = PeopleAndBody, char = "\u{1F939}", keywords = [ "person juggling" ], name = "juggling", sprite = ( 40, 35 ) }
    , { category = PeopleAndBody, char = "\u{1F93A}", keywords = [ "person fencing", "sports", "fencing", "sword" ], name = "fencer", sprite = ( 40, 41 ) }
    , { category = PeopleAndBody, char = "\u{1F93C}\u{200D}♀️", keywords = [ "women wrestling", "sports", "wrestlers" ], name = "woman-wrestling", sprite = ( 40, 42 ) }
    , { category = PeopleAndBody, char = "\u{1F93C}\u{200D}♂️", keywords = [ "men wrestling", "sports", "wrestlers" ], name = "man-wrestling", sprite = ( 40, 43 ) }
    , { category = PeopleAndBody, char = "\u{1F93C}", keywords = [ "people wrestling" ], name = "wrestlers", sprite = ( 40, 44 ) }
    , { category = PeopleAndBody, char = "\u{1F93D}\u{200D}♀️", keywords = [ "woman playing water polo", "sports", "pool" ], name = "woman-playing-water-polo", sprite = ( 40, 45 ) }
    , { category = PeopleAndBody, char = "\u{1F93D}\u{200D}♂️", keywords = [ "man playing water polo", "sports", "pool" ], name = "man-playing-water-polo", sprite = ( 40, 51 ) }
    , { category = PeopleAndBody, char = "\u{1F93D}", keywords = [ "person playing water polo" ], name = "water_polo", sprite = ( 40, 57 ) }
    , { category = PeopleAndBody, char = "\u{1F93E}\u{200D}♀️", keywords = [ "woman playing handball", "sports" ], name = "woman-playing-handball", sprite = ( 41, 5 ) }
    , { category = PeopleAndBody, char = "\u{1F93E}\u{200D}♂️", keywords = [ "man playing handball", "sports" ], name = "man-playing-handball", sprite = ( 41, 11 ) }
    , { category = PeopleAndBody, char = "\u{1F93E}", keywords = [ "person playing handball" ], name = "handball", sprite = ( 41, 17 ) }
    , { category = Activities, char = "\u{1F93F}", keywords = [ "diving mask" ], name = "diving_mask", sprite = ( 41, 23 ) }
    , { category = AnimalsAndNature, char = "\u{1F940}", keywords = [ "wilted flower", "plant", "nature", "flower" ], name = "wilted_flower", sprite = ( 41, 24 ) }
    , { category = Objects, char = "\u{1F941}", keywords = [ "drum", "music", "instrument", "drumsticks", "snare" ], name = "drum_with_drumsticks", sprite = ( 41, 25 ) }
    , { category = FoodAndDrink, char = "\u{1F942}", keywords = [ "clinking glasses", "beverage", "drink", "party", "alcohol", "celebrate", "cheers", "wine", "champagne", "toast" ], name = "clinking_glasses", sprite = ( 41, 26 ) }
    , { category = FoodAndDrink, char = "\u{1F943}", keywords = [ "tumbler glass", "drink", "beverage", "drunk", "alcohol", "liquor", "booze", "bourbon", "scotch", "whisky", "glass", "shot" ], name = "tumbler_glass", sprite = ( 41, 27 ) }
    , { category = FoodAndDrink, char = "\u{1F944}", keywords = [ "spoon", "cutlery", "kitchen", "tableware" ], name = "spoon", sprite = ( 41, 28 ) }
    , { category = Activities, char = "\u{1F945}", keywords = [ "goal net", "sports" ], name = "goal_net", sprite = ( 41, 29 ) }
    , { category = Activities, char = "\u{1F947}", keywords = [ "1st place medal", "award", "winning", "first" ], name = "first_place_medal", sprite = ( 41, 30 ) }
    , { category = Activities, char = "\u{1F948}", keywords = [ "2nd place medal", "award", "second" ], name = "second_place_medal", sprite = ( 41, 31 ) }
    , { category = Activities, char = "\u{1F949}", keywords = [ "3rd place medal", "award", "third" ], name = "third_place_medal", sprite = ( 41, 32 ) }
    , { category = Activities, char = "\u{1F94A}", keywords = [ "boxing glove", "sports", "fighting" ], name = "boxing_glove", sprite = ( 41, 33 ) }
    , { category = Activities, char = "\u{1F94B}", keywords = [ "martial arts uniform", "judo", "karate", "taekwondo" ], name = "martial_arts_uniform", sprite = ( 41, 34 ) }
    , { category = Activities, char = "\u{1F94C}", keywords = [ "curling stone", "sports" ], name = "curling_stone", sprite = ( 41, 35 ) }
    , { category = Activities, char = "\u{1F94D}", keywords = [ "lacrosse", "sports", "ball", "stick" ], name = "lacrosse", sprite = ( 41, 36 ) }
    , { category = Activities, char = "\u{1F94E}", keywords = [ "softball", "sports", "balls" ], name = "softball", sprite = ( 41, 37 ) }
    , { category = Activities, char = "\u{1F94F}", keywords = [ "flying disc", "sports", "frisbee", "ultimate" ], name = "flying_disc", sprite = ( 41, 38 ) }
    , { category = FoodAndDrink, char = "\u{1F950}", keywords = [ "croissant", "food", "bread", "french" ], name = "croissant", sprite = ( 41, 39 ) }
    , { category = FoodAndDrink, char = "\u{1F951}", keywords = [ "avocado", "fruit", "food" ], name = "avocado", sprite = ( 41, 40 ) }
    , { category = FoodAndDrink, char = "\u{1F952}", keywords = [ "cucumber", "fruit", "food", "pickle" ], name = "cucumber", sprite = ( 41, 41 ) }
    , { category = FoodAndDrink, char = "\u{1F953}", keywords = [ "bacon", "food", "breakfast", "pork", "pig", "meat" ], name = "bacon", sprite = ( 41, 42 ) }
    , { category = FoodAndDrink, char = "\u{1F954}", keywords = [ "potato", "food", "tuber", "vegatable", "starch" ], name = "potato", sprite = ( 41, 43 ) }
    , { category = FoodAndDrink, char = "\u{1F955}", keywords = [ "carrot", "vegetable", "food", "orange" ], name = "carrot", sprite = ( 41, 44 ) }
    , { category = FoodAndDrink, char = "\u{1F956}", keywords = [ "baguette bread", "food", "bread", "french" ], name = "baguette_bread", sprite = ( 41, 45 ) }
    , { category = FoodAndDrink, char = "\u{1F957}", keywords = [ "green salad", "food", "healthy", "lettuce" ], name = "green_salad", sprite = ( 41, 46 ) }
    , { category = FoodAndDrink, char = "\u{1F958}", keywords = [ "shallow pan of food", "food", "cooking", "casserole", "paella" ], name = "shallow_pan_of_food", sprite = ( 41, 47 ) }
    , { category = FoodAndDrink, char = "\u{1F959}", keywords = [ "stuffed flatbread", "food", "flatbread", "stuffed", "gyro" ], name = "stuffed_flatbread", sprite = ( 41, 48 ) }
    , { category = FoodAndDrink, char = "\u{1F95A}", keywords = [ "egg", "food", "chicken", "breakfast" ], name = "egg", sprite = ( 41, 49 ) }
    , { category = FoodAndDrink, char = "\u{1F95B}", keywords = [ "glass of milk", "beverage", "drink", "cow" ], name = "glass_of_milk", sprite = ( 41, 50 ) }
    , { category = FoodAndDrink, char = "\u{1F95C}", keywords = [ "peanuts", "food", "nut" ], name = "peanuts", sprite = ( 41, 51 ) }
    , { category = FoodAndDrink, char = "\u{1F95D}", keywords = [ "kiwi fruit", "fruit", "food" ], name = "kiwifruit", sprite = ( 41, 52 ) }
    , { category = FoodAndDrink, char = "\u{1F95E}", keywords = [ "pancakes", "food", "breakfast", "flapjacks", "hotcakes" ], name = "pancakes", sprite = ( 41, 53 ) }
    , { category = FoodAndDrink, char = "\u{1F95F}", keywords = [ "dumpling", "food", "empanada", "pierogi", "potsticker" ], name = "dumpling", sprite = ( 41, 54 ) }
    , { category = FoodAndDrink, char = "\u{1F960}", keywords = [ "fortune cookie", "food", "prophecy" ], name = "fortune_cookie", sprite = ( 41, 55 ) }
    , { category = FoodAndDrink, char = "\u{1F961}", keywords = [ "takeout box", "food", "leftovers" ], name = "takeout_box", sprite = ( 41, 56 ) }
    , { category = FoodAndDrink, char = "\u{1F962}", keywords = [ "chopsticks", "food" ], name = "chopsticks", sprite = ( 41, 57 ) }
    , { category = FoodAndDrink, char = "\u{1F963}", keywords = [ "bowl with spoon", "food", "breakfast", "cereal", "oatmeal", "porridge" ], name = "bowl_with_spoon", sprite = ( 42, 0 ) }
    , { category = FoodAndDrink, char = "\u{1F964}", keywords = [ "cup with straw", "drink", "soda" ], name = "cup_with_straw", sprite = ( 42, 1 ) }
    , { category = FoodAndDrink, char = "\u{1F965}", keywords = [ "coconut", "fruit", "nature", "food", "palm" ], name = "coconut", sprite = ( 42, 2 ) }
    , { category = FoodAndDrink, char = "\u{1F966}", keywords = [ "broccoli", "fruit", "food", "vegetable" ], name = "broccoli", sprite = ( 42, 3 ) }
    , { category = FoodAndDrink, char = "\u{1F967}", keywords = [ "pie", "food", "dessert", "pastry" ], name = "pie", sprite = ( 42, 4 ) }
    , { category = FoodAndDrink, char = "\u{1F968}", keywords = [ "pretzel", "food", "bread", "twisted" ], name = "pretzel", sprite = ( 42, 5 ) }
    , { category = FoodAndDrink, char = "\u{1F969}", keywords = [ "cut of meat", "food", "cow", "meat", "cut", "chop", "lambchop", "porkchop" ], name = "cut_of_meat", sprite = ( 42, 6 ) }
    , { category = FoodAndDrink, char = "\u{1F96A}", keywords = [ "sandwich", "food", "lunch", "bread" ], name = "sandwich", sprite = ( 42, 7 ) }
    , { category = FoodAndDrink, char = "\u{1F96B}", keywords = [ "canned food", "food", "soup" ], name = "canned_food", sprite = ( 42, 8 ) }
    , { category = FoodAndDrink, char = "\u{1F96C}", keywords = [ "leafy green", "food", "vegetable", "plant", "bok choy", "cabbage", "kale", "lettuce" ], name = "leafy_green", sprite = ( 42, 9 ) }
    , { category = FoodAndDrink, char = "\u{1F96D}", keywords = [ "mango", "fruit", "food", "tropical" ], name = "mango", sprite = ( 42, 10 ) }
    , { category = FoodAndDrink, char = "\u{1F96E}", keywords = [ "moon cake", "food", "autumn" ], name = "moon_cake", sprite = ( 42, 11 ) }
    , { category = FoodAndDrink, char = "\u{1F96F}", keywords = [ "bagel", "food", "bread", "bakery", "schmear" ], name = "bagel", sprite = ( 42, 12 ) }
    , { category = SmileysAndEmotion, char = "\u{1F970}", keywords = [ "smiling face with hearts", "face", "love", "like", "affection", "valentines", "infatuation", "crush", "hearts", "adore" ], name = "smiling_face_with_3_hearts", sprite = ( 42, 13 ) }
    , { category = SmileysAndEmotion, char = "\u{1F971}", keywords = [ "yawning face" ], name = "yawning_face", sprite = ( 42, 14 ) }
    , { category = SmileysAndEmotion, char = "\u{1F972}", keywords = [ "smiling face with tear", "sad", "cry", "pretend" ], name = "smiling_face_with_tear", sprite = ( 42, 15 ) }
    , { category = SmileysAndEmotion, char = "\u{1F973}", keywords = [ "partying face", "face", "celebration", "woohoo" ], name = "partying_face", sprite = ( 42, 16 ) }
    , { category = SmileysAndEmotion, char = "\u{1F974}", keywords = [ "woozy face", "face", "dizzy", "intoxicated", "tipsy", "wavy" ], name = "woozy_face", sprite = ( 42, 17 ) }
    , { category = SmileysAndEmotion, char = "\u{1F975}", keywords = [ "hot face", "face", "feverish", "heat", "red", "sweating" ], name = "hot_face", sprite = ( 42, 18 ) }
    , { category = SmileysAndEmotion, char = "\u{1F976}", keywords = [ "cold face", "face", "blue", "freezing", "frozen", "frostbite", "icicles" ], name = "cold_face", sprite = ( 42, 19 ) }
    , { category = PeopleAndBody, char = "\u{1F977}", keywords = [ "ninja", "ninjutsu", "skills", "japanese" ], name = "ninja", sprite = ( 42, 20 ) }
    , { category = SmileysAndEmotion, char = "\u{1F978}", keywords = [ "disguised face", "pretent", "brows", "glasses", "moustache" ], name = "disguised_face", sprite = ( 42, 26 ) }
    , { category = SmileysAndEmotion, char = "\u{1F97A}", keywords = [ "pleading face", "face", "begging", "mercy" ], name = "pleading_face", sprite = ( 42, 27 ) }
    , { category = Objects, char = "\u{1F97B}", keywords = [ "sari" ], name = "sari", sprite = ( 42, 28 ) }
    , { category = Objects, char = "\u{1F97C}", keywords = [ "lab coat", "doctor", "experiment", "scientist", "chemist" ], name = "lab_coat", sprite = ( 42, 29 ) }
    , { category = Objects, char = "\u{1F97D}", keywords = [ "goggles", "eyes", "protection", "safety" ], name = "goggles", sprite = ( 42, 30 ) }
    , { category = Objects, char = "\u{1F97E}", keywords = [ "hiking boot", "backpacking", "camping", "hiking" ], name = "hiking_boot", sprite = ( 42, 31 ) }
    , { category = Objects, char = "\u{1F97F}", keywords = [ "flat shoe", "ballet", "slip on", "slipper" ], name = "womans_flat_shoe", sprite = ( 42, 32 ) }
    , { category = FoodAndDrink, char = "\u{1F980}", keywords = [ "crab", "animal", "crustacean" ], name = "crab", sprite = ( 42, 33 ) }
    , { category = AnimalsAndNature, char = "\u{1F981}", keywords = [ "lion", "animal", "nature" ], name = "lion_face", sprite = ( 42, 34 ) }
    , { category = AnimalsAndNature, char = "\u{1F982}", keywords = [ "scorpion", "animal", "arachnid" ], name = "scorpion", sprite = ( 42, 35 ) }
    , { category = AnimalsAndNature, char = "\u{1F983}", keywords = [ "turkey", "animal", "bird" ], name = "turkey", sprite = ( 42, 36 ) }
    , { category = AnimalsAndNature, char = "\u{1F984}", keywords = [ "unicorn", "animal", "nature", "mystical" ], name = "unicorn_face", sprite = ( 42, 37 ) }
    , { category = AnimalsAndNature, char = "\u{1F985}", keywords = [ "eagle", "animal", "nature", "bird" ], name = "eagle", sprite = ( 42, 38 ) }
    , { category = AnimalsAndNature, char = "\u{1F986}", keywords = [ "duck", "animal", "nature", "bird", "mallard" ], name = "duck", sprite = ( 42, 39 ) }
    , { category = AnimalsAndNature, char = "\u{1F987}", keywords = [ "bat", "animal", "nature", "blind", "vampire" ], name = "bat", sprite = ( 42, 40 ) }
    , { category = AnimalsAndNature, char = "\u{1F988}", keywords = [ "shark", "animal", "nature", "fish", "sea", "ocean", "jaws", "fins", "beach" ], name = "shark", sprite = ( 42, 41 ) }
    , { category = AnimalsAndNature, char = "\u{1F989}", keywords = [ "owl", "animal", "nature", "bird", "hoot" ], name = "owl", sprite = ( 42, 42 ) }
    , { category = AnimalsAndNature, char = "\u{1F98A}", keywords = [ "fox", "animal", "nature", "face" ], name = "fox_face", sprite = ( 42, 43 ) }
    , { category = AnimalsAndNature, char = "\u{1F98B}", keywords = [ "butterfly", "animal", "insect", "nature", "caterpillar" ], name = "butterfly", sprite = ( 42, 44 ) }
    , { category = AnimalsAndNature, char = "\u{1F98C}", keywords = [ "deer", "animal", "nature", "horns", "venison" ], name = "deer", sprite = ( 42, 45 ) }
    , { category = AnimalsAndNature, char = "\u{1F98D}", keywords = [ "gorilla", "animal", "nature", "circus" ], name = "gorilla", sprite = ( 42, 46 ) }
    , { category = AnimalsAndNature, char = "\u{1F98E}", keywords = [ "lizard", "animal", "nature", "reptile" ], name = "lizard", sprite = ( 42, 47 ) }
    , { category = AnimalsAndNature, char = "\u{1F98F}", keywords = [ "rhinoceros", "animal", "nature", "horn" ], name = "rhinoceros", sprite = ( 42, 48 ) }
    , { category = FoodAndDrink, char = "\u{1F990}", keywords = [ "shrimp", "animal", "ocean", "nature", "seafood" ], name = "shrimp", sprite = ( 42, 49 ) }
    , { category = FoodAndDrink, char = "\u{1F991}", keywords = [ "squid", "animal", "nature", "ocean", "sea" ], name = "squid", sprite = ( 42, 50 ) }
    , { category = AnimalsAndNature, char = "\u{1F992}", keywords = [ "giraffe", "animal", "nature", "spots", "safari" ], name = "giraffe_face", sprite = ( 42, 51 ) }
    , { category = AnimalsAndNature, char = "\u{1F993}", keywords = [ "zebra", "animal", "nature", "stripes", "safari" ], name = "zebra_face", sprite = ( 42, 52 ) }
    , { category = AnimalsAndNature, char = "\u{1F994}", keywords = [ "hedgehog", "animal", "nature", "spiny" ], name = "hedgehog", sprite = ( 42, 53 ) }
    , { category = AnimalsAndNature, char = "\u{1F995}", keywords = [ "sauropod", "animal", "nature", "dinosaur", "brachiosaurus", "brontosaurus", "diplodocus", "extinct" ], name = "sauropod", sprite = ( 42, 54 ) }
    , { category = AnimalsAndNature, char = "\u{1F996}", keywords = [ "t rex", "animal", "nature", "dinosaur", "tyrannosaurus", "extinct" ], name = "t-rex", sprite = ( 42, 55 ) }
    , { category = AnimalsAndNature, char = "\u{1F997}", keywords = [ "cricket", "animal", "cricket", "chirp" ], name = "cricket", sprite = ( 42, 56 ) }
    , { category = AnimalsAndNature, char = "\u{1F998}", keywords = [ "kangaroo", "animal", "nature", "australia", "joey", "hop", "marsupial" ], name = "kangaroo", sprite = ( 42, 57 ) }
    , { category = AnimalsAndNature, char = "\u{1F999}", keywords = [ "llama", "animal", "nature", "alpaca" ], name = "llama", sprite = ( 43, 0 ) }
    , { category = AnimalsAndNature, char = "\u{1F99A}", keywords = [ "peacock", "animal", "nature", "peahen", "bird" ], name = "peacock", sprite = ( 43, 1 ) }
    , { category = AnimalsAndNature, char = "\u{1F99B}", keywords = [ "hippopotamus", "animal", "nature" ], name = "hippopotamus", sprite = ( 43, 2 ) }
    , { category = AnimalsAndNature, char = "\u{1F99C}", keywords = [ "parrot", "animal", "nature", "bird", "pirate", "talk" ], name = "parrot", sprite = ( 43, 3 ) }
    , { category = AnimalsAndNature, char = "\u{1F99D}", keywords = [ "raccoon", "animal", "nature" ], name = "raccoon", sprite = ( 43, 4 ) }
    , { category = FoodAndDrink, char = "\u{1F99E}", keywords = [ "lobster", "animal", "nature", "bisque", "claws", "seafood" ], name = "lobster", sprite = ( 43, 5 ) }
    , { category = AnimalsAndNature, char = "\u{1F99F}", keywords = [ "mosquito", "animal", "nature", "insect", "malaria" ], name = "mosquito", sprite = ( 43, 6 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A0}", keywords = [ "microbe", "amoeba", "bacteria", "germs" ], name = "microbe", sprite = ( 43, 7 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A1}", keywords = [ "badger", "animal", "nature", "honey" ], name = "badger", sprite = ( 43, 8 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A2}", keywords = [ "swan", "animal", "nature", "bird" ], name = "swan", sprite = ( 43, 9 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A3}", keywords = [ "mammoth", "elephant", "tusks" ], name = "mammoth", sprite = ( 43, 10 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A4}", keywords = [ "dodo", "animal", "bird" ], name = "dodo", sprite = ( 43, 11 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A5}", keywords = [ "sloth" ], name = "sloth", sprite = ( 43, 12 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A6}", keywords = [ "otter" ], name = "otter", sprite = ( 43, 13 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A7}", keywords = [ "orangutan" ], name = "orangutan", sprite = ( 43, 14 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A8}", keywords = [ "skunk" ], name = "skunk", sprite = ( 43, 15 ) }
    , { category = AnimalsAndNature, char = "\u{1F9A9}", keywords = [ "flamingo" ], name = "flamingo", sprite = ( 43, 16 ) }
    , { category = FoodAndDrink, char = "\u{1F9AA}", keywords = [ "oyster" ], name = "oyster", sprite = ( 43, 17 ) }
    , { category = AnimalsAndNature, char = "\u{1F9AB}", keywords = [ "beaver", "animal", "rodent" ], name = "beaver", sprite = ( 43, 18 ) }
    , { category = AnimalsAndNature, char = "\u{1F9AC}", keywords = [ "bison", "ox" ], name = "bison", sprite = ( 43, 19 ) }
    , { category = AnimalsAndNature, char = "\u{1F9AD}", keywords = [ "seal", "animal", "creature", "sea" ], name = "seal", sprite = ( 43, 20 ) }
    , { category = AnimalsAndNature, char = "\u{1F9AE}", keywords = [ "guide dog" ], name = "guide_dog", sprite = ( 43, 21 ) }
    , { category = Objects, char = "\u{1F9AF}", keywords = [ "probing cane" ], name = "probing_cane", sprite = ( 43, 22 ) }
    , { category = PeopleAndBody, char = "\u{1F9B4}", keywords = [ "bone", "skeleton" ], name = "bone", sprite = ( 43, 23 ) }
    , { category = PeopleAndBody, char = "\u{1F9B5}", keywords = [ "leg", "kick", "limb" ], name = "leg", sprite = ( 43, 24 ) }
    , { category = PeopleAndBody, char = "\u{1F9B6}", keywords = [ "foot", "kick", "stomp" ], name = "foot", sprite = ( 43, 30 ) }
    , { category = PeopleAndBody, char = "\u{1F9B7}", keywords = [ "tooth", "teeth", "dentist" ], name = "tooth", sprite = ( 43, 36 ) }
    , { category = PeopleAndBody, char = "\u{1F9B8}\u{200D}♀️", keywords = [ "woman superhero", "woman", "female", "good", "heroine", "superpowers" ], name = "female_superhero", sprite = ( 43, 37 ) }
    , { category = PeopleAndBody, char = "\u{1F9B8}\u{200D}♂️", keywords = [ "man superhero", "man", "male", "good", "hero", "superpowers" ], name = "male_superhero", sprite = ( 43, 43 ) }
    , { category = PeopleAndBody, char = "\u{1F9B8}", keywords = [ "superhero" ], name = "superhero", sprite = ( 43, 49 ) }
    , { category = PeopleAndBody, char = "\u{1F9B9}\u{200D}♀️", keywords = [ "woman supervillain", "woman", "female", "evil", "bad", "criminal", "heroine", "superpowers" ], name = "female_supervillain", sprite = ( 43, 55 ) }
    , { category = PeopleAndBody, char = "\u{1F9B9}\u{200D}♂️", keywords = [ "man supervillain", "man", "male", "evil", "bad", "criminal", "hero", "superpowers" ], name = "male_supervillain", sprite = ( 44, 3 ) }
    , { category = PeopleAndBody, char = "\u{1F9B9}", keywords = [ "supervillain" ], name = "supervillain", sprite = ( 44, 9 ) }
    , { category = Objects, char = "\u{1F9BA}", keywords = [ "safety vest" ], name = "safety_vest", sprite = ( 44, 15 ) }
    , { category = PeopleAndBody, char = "\u{1F9BB}", keywords = [ "ear with hearing aid" ], name = "ear_with_hearing_aid", sprite = ( 44, 16 ) }
    , { category = TravelAndPlaces, char = "\u{1F9BC}", keywords = [ "motorized wheelchair" ], name = "motorized_wheelchair", sprite = ( 44, 22 ) }
    , { category = TravelAndPlaces, char = "\u{1F9BD}", keywords = [ "manual wheelchair" ], name = "manual_wheelchair", sprite = ( 44, 23 ) }
    , { category = PeopleAndBody, char = "\u{1F9BE}", keywords = [ "mechanical arm" ], name = "mechanical_arm", sprite = ( 44, 24 ) }
    , { category = PeopleAndBody, char = "\u{1F9BF}", keywords = [ "mechanical leg" ], name = "mechanical_leg", sprite = ( 44, 25 ) }
    , { category = FoodAndDrink, char = "\u{1F9C0}", keywords = [ "cheese wedge", "food", "chadder" ], name = "cheese_wedge", sprite = ( 44, 26 ) }
    , { category = FoodAndDrink, char = "\u{1F9C1}", keywords = [ "cupcake", "food", "dessert", "bakery", "sweet" ], name = "cupcake", sprite = ( 44, 27 ) }
    , { category = FoodAndDrink, char = "\u{1F9C2}", keywords = [ "salt", "condiment", "shaker" ], name = "salt", sprite = ( 44, 28 ) }
    , { category = FoodAndDrink, char = "\u{1F9C3}", keywords = [ "beverage box" ], name = "beverage_box", sprite = ( 44, 29 ) }
    , { category = FoodAndDrink, char = "\u{1F9C4}", keywords = [ "garlic" ], name = "garlic", sprite = ( 44, 30 ) }
    , { category = FoodAndDrink, char = "\u{1F9C5}", keywords = [ "onion" ], name = "onion", sprite = ( 44, 31 ) }
    , { category = FoodAndDrink, char = "\u{1F9C6}", keywords = [ "falafel" ], name = "falafel", sprite = ( 44, 32 ) }
    , { category = FoodAndDrink, char = "\u{1F9C7}", keywords = [ "waffle" ], name = "waffle", sprite = ( 44, 33 ) }
    , { category = FoodAndDrink, char = "\u{1F9C8}", keywords = [ "butter" ], name = "butter", sprite = ( 44, 34 ) }
    , { category = FoodAndDrink, char = "\u{1F9C9}", keywords = [ "mate" ], name = "mate_drink", sprite = ( 44, 35 ) }
    , { category = FoodAndDrink, char = "\u{1F9CA}", keywords = [ "ice" ], name = "ice_cube", sprite = ( 44, 36 ) }
    , { category = FoodAndDrink, char = "\u{1F9CB}", keywords = [ "bubble tea", "taiwan", "boba", "milk tea", "straw" ], name = "bubble_tea", sprite = ( 44, 37 ) }
    , { category = PeopleAndBody, char = "\u{1F9CD}\u{200D}♀️", keywords = [ "woman standing" ], name = "woman_standing", sprite = ( 44, 38 ) }
    , { category = PeopleAndBody, char = "\u{1F9CD}\u{200D}♂️", keywords = [ "man standing" ], name = "man_standing", sprite = ( 44, 44 ) }
    , { category = PeopleAndBody, char = "\u{1F9CD}", keywords = [ "person standing" ], name = "standing_person", sprite = ( 44, 50 ) }
    , { category = PeopleAndBody, char = "\u{1F9CE}\u{200D}♀️", keywords = [ "woman kneeling" ], name = "woman_kneeling", sprite = ( 44, 56 ) }
    , { category = PeopleAndBody, char = "\u{1F9CE}\u{200D}♂️", keywords = [ "man kneeling" ], name = "man_kneeling", sprite = ( 45, 4 ) }
    , { category = PeopleAndBody, char = "\u{1F9CE}", keywords = [ "person kneeling" ], name = "kneeling_person", sprite = ( 45, 10 ) }
    , { category = PeopleAndBody, char = "\u{1F9CF}\u{200D}♀️", keywords = [ "deaf woman" ], name = "deaf_woman", sprite = ( 45, 16 ) }
    , { category = PeopleAndBody, char = "\u{1F9CF}\u{200D}♂️", keywords = [ "deaf man" ], name = "deaf_man", sprite = ( 45, 22 ) }
    , { category = PeopleAndBody, char = "\u{1F9CF}", keywords = [ "deaf person" ], name = "deaf_person", sprite = ( 45, 28 ) }
    , { category = SmileysAndEmotion, char = "\u{1F9D0}", keywords = [ "face with monocle", "face", "stuffy", "wealthy" ], name = "face_with_monocle", sprite = ( 45, 34 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🌾", keywords = [ "farmer" ], name = "farmer", sprite = ( 45, 35 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🍳", keywords = [ "cook" ], name = "cook", sprite = ( 45, 41 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🍼", keywords = [ "person feeding baby", "birth", "food" ], name = "person_feeding_baby", sprite = ( 45, 47 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎄", keywords = [ "mx claus", "christmas" ], name = "mx_claus", sprite = ( 45, 53 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎓", keywords = [ "student" ], name = "student", sprite = ( 46, 1 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎤", keywords = [ "singer" ], name = "singer", sprite = ( 46, 7 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎨", keywords = [ "artist" ], name = "artist", sprite = ( 46, 13 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🏫", keywords = [ "teacher" ], name = "teacher", sprite = ( 46, 19 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🏭", keywords = [ "factory worker" ], name = "factory_worker", sprite = ( 46, 25 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}💻", keywords = [ "technologist" ], name = "technologist", sprite = ( 46, 31 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}💼", keywords = [ "office worker" ], name = "office_worker", sprite = ( 46, 37 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🔧", keywords = [ "mechanic" ], name = "mechanic", sprite = ( 46, 43 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🔬", keywords = [ "scientist" ], name = "scientist", sprite = ( 46, 49 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🚀", keywords = [ "astronaut" ], name = "astronaut", sprite = ( 46, 55 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🚒", keywords = [ "firefighter" ], name = "firefighter", sprite = ( 47, 3 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F91D}\u{200D}\u{1F9D1}", keywords = [ "people holding hands" ], name = "people_holding_hands", sprite = ( 47, 9 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9AF}", keywords = [ "person with probing cane" ], name = "person_with_probing_cane", sprite = ( 47, 35 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B0}", keywords = [ "person red hair" ], name = "red_haired_person", sprite = ( 47, 41 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B1}", keywords = [ "person curly hair" ], name = "curly_haired_person", sprite = ( 47, 47 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B2}", keywords = [ "person bald" ], name = "bald_person", sprite = ( 47, 53 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B3}", keywords = [ "person white hair" ], name = "white_haired_person", sprite = ( 48, 1 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9BC}", keywords = [ "person in motorized wheelchair" ], name = "person_in_motorized_wheelchair", sprite = ( 48, 7 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9BD}", keywords = [ "person in manual wheelchair" ], name = "person_in_manual_wheelchair", sprite = ( 48, 13 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}⚕️", keywords = [ "health worker" ], name = "health_worker", sprite = ( 48, 19 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}⚖️", keywords = [ "judge" ], name = "judge", sprite = ( 48, 25 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}✈️", keywords = [ "pilot" ], name = "pilot", sprite = ( 48, 31 ) }
    , { category = PeopleAndBody, char = "\u{1F9D1}", keywords = [ "person", "gender neutral", "person" ], name = "adult", sprite = ( 48, 37 ) }
    , { category = PeopleAndBody, char = "\u{1F9D2}", keywords = [ "child", "gender neutral", "young" ], name = "child", sprite = ( 48, 43 ) }
    , { category = PeopleAndBody, char = "\u{1F9D3}", keywords = [ "older person", "human", "elder", "senior", "gender neutral" ], name = "older_adult", sprite = ( 48, 49 ) }
    , { category = PeopleAndBody, char = "\u{1F9D4}", keywords = [ "man beard", "person", "bewhiskered" ], name = "bearded_person", sprite = ( 48, 55 ) }
    , { category = PeopleAndBody, char = "\u{1F9D5}", keywords = [ "woman with headscarf", "female", "hijab", "mantilla", "tichel" ], name = "person_with_headscarf", sprite = ( 49, 3 ) }
    , { category = PeopleAndBody, char = "\u{1F9D6}\u{200D}♀️", keywords = [ "woman in steamy room", "female", "woman", "spa", "steamroom", "sauna" ], name = "woman_in_steamy_room", sprite = ( 49, 9 ) }
    , { category = PeopleAndBody, char = "\u{1F9D6}\u{200D}♂️", keywords = [ "man in steamy room", "male", "man", "spa", "steamroom", "sauna" ], name = "man_in_steamy_room", sprite = ( 49, 15 ) }
    , { category = PeopleAndBody, char = "\u{1F9D6}", keywords = [ "person in steamy room" ], name = "person_in_steamy_room", sprite = ( 49, 21 ) }
    , { category = PeopleAndBody, char = "\u{1F9D7}\u{200D}♀️", keywords = [ "woman climbing", "sports", "hobby", "woman", "female", "rock" ], name = "woman_climbing", sprite = ( 49, 27 ) }
    , { category = PeopleAndBody, char = "\u{1F9D7}\u{200D}♂️", keywords = [ "man climbing", "sports", "hobby", "man", "male", "rock" ], name = "man_climbing", sprite = ( 49, 33 ) }
    , { category = PeopleAndBody, char = "\u{1F9D7}", keywords = [ "person climbing" ], name = "person_climbing", sprite = ( 49, 39 ) }
    , { category = PeopleAndBody, char = "\u{1F9D8}\u{200D}♀️", keywords = [ "woman in lotus position", "woman", "female", "meditation", "yoga", "serenity", "zen", "mindfulness" ], name = "woman_in_lotus_position", sprite = ( 49, 45 ) }
    , { category = PeopleAndBody, char = "\u{1F9D8}\u{200D}♂️", keywords = [ "man in lotus position", "man", "male", "meditation", "yoga", "serenity", "zen", "mindfulness" ], name = "man_in_lotus_position", sprite = ( 49, 51 ) }
    , { category = PeopleAndBody, char = "\u{1F9D8}", keywords = [ "person in lotus position" ], name = "person_in_lotus_position", sprite = ( 49, 57 ) }
    , { category = PeopleAndBody, char = "\u{1F9D9}\u{200D}♀️", keywords = [ "woman mage", "woman", "female", "mage", "witch" ], name = "female_mage", sprite = ( 50, 5 ) }
    , { category = PeopleAndBody, char = "\u{1F9D9}\u{200D}♂️", keywords = [ "man mage", "man", "male", "mage", "sorcerer" ], name = "male_mage", sprite = ( 50, 11 ) }
    , { category = PeopleAndBody, char = "\u{1F9D9}", keywords = [ "mage" ], name = "mage", sprite = ( 50, 17 ) }
    , { category = PeopleAndBody, char = "\u{1F9DA}\u{200D}♀️", keywords = [ "woman fairy", "woman", "female" ], name = "female_fairy", sprite = ( 50, 23 ) }
    , { category = PeopleAndBody, char = "\u{1F9DA}\u{200D}♂️", keywords = [ "man fairy", "man", "male" ], name = "male_fairy", sprite = ( 50, 29 ) }
    , { category = PeopleAndBody, char = "\u{1F9DA}", keywords = [ "fairy" ], name = "fairy", sprite = ( 50, 35 ) }
    , { category = PeopleAndBody, char = "\u{1F9DB}\u{200D}♀️", keywords = [ "woman vampire", "woman", "female" ], name = "female_vampire", sprite = ( 50, 41 ) }
    , { category = PeopleAndBody, char = "\u{1F9DB}\u{200D}♂️", keywords = [ "man vampire", "man", "male", "dracula" ], name = "male_vampire", sprite = ( 50, 47 ) }
    , { category = PeopleAndBody, char = "\u{1F9DB}", keywords = [ "vampire" ], name = "vampire", sprite = ( 50, 53 ) }
    , { category = PeopleAndBody, char = "\u{1F9DC}\u{200D}♀️", keywords = [ "mermaid", "woman", "female", "merwoman", "ariel" ], name = "mermaid", sprite = ( 51, 1 ) }
    , { category = PeopleAndBody, char = "\u{1F9DC}\u{200D}♂️", keywords = [ "merman", "man", "male", "triton" ], name = "merman", sprite = ( 51, 7 ) }
    , { category = PeopleAndBody, char = "\u{1F9DC}", keywords = [ "merperson" ], name = "merperson", sprite = ( 51, 13 ) }
    , { category = PeopleAndBody, char = "\u{1F9DD}\u{200D}♀️", keywords = [ "woman elf", "woman", "female" ], name = "female_elf", sprite = ( 51, 19 ) }
    , { category = PeopleAndBody, char = "\u{1F9DD}\u{200D}♂️", keywords = [ "man elf", "man", "male" ], name = "male_elf", sprite = ( 51, 25 ) }
    , { category = PeopleAndBody, char = "\u{1F9DD}", keywords = [ "elf" ], name = "elf", sprite = ( 51, 31 ) }
    , { category = PeopleAndBody, char = "\u{1F9DE}\u{200D}♀️", keywords = [ "woman genie", "woman", "female" ], name = "female_genie", sprite = ( 51, 37 ) }
    , { category = PeopleAndBody, char = "\u{1F9DE}\u{200D}♂️", keywords = [ "man genie", "man", "male" ], name = "male_genie", sprite = ( 51, 38 ) }
    , { category = PeopleAndBody, char = "\u{1F9DE}", keywords = [ "genie" ], name = "genie", sprite = ( 51, 39 ) }
    , { category = PeopleAndBody, char = "\u{1F9DF}\u{200D}♀️", keywords = [ "woman zombie", "woman", "female", "undead", "walking dead" ], name = "female_zombie", sprite = ( 51, 40 ) }
    , { category = PeopleAndBody, char = "\u{1F9DF}\u{200D}♂️", keywords = [ "man zombie", "man", "male", "dracula", "undead", "walking dead" ], name = "male_zombie", sprite = ( 51, 41 ) }
    , { category = PeopleAndBody, char = "\u{1F9DF}", keywords = [ "zombie" ], name = "zombie", sprite = ( 51, 42 ) }
    , { category = PeopleAndBody, char = "\u{1F9E0}", keywords = [ "brain", "smart", "intelligent" ], name = "brain", sprite = ( 51, 43 ) }
    , { category = SmileysAndEmotion, char = "\u{1F9E1}", keywords = [ "orange heart", "love", "like", "affection", "valentines" ], name = "orange_heart", sprite = ( 51, 44 ) }
    , { category = Objects, char = "\u{1F9E2}", keywords = [ "billed cap", "cap", "baseball" ], name = "billed_cap", sprite = ( 51, 45 ) }
    , { category = Objects, char = "\u{1F9E3}", keywords = [ "scarf", "neck", "winter", "clothes" ], name = "scarf", sprite = ( 51, 46 ) }
    , { category = Objects, char = "\u{1F9E4}", keywords = [ "gloves", "hands", "winter", "clothes" ], name = "gloves", sprite = ( 51, 47 ) }
    , { category = Objects, char = "\u{1F9E5}", keywords = [ "coat", "jacket" ], name = "coat", sprite = ( 51, 48 ) }
    , { category = Objects, char = "\u{1F9E6}", keywords = [ "socks", "stockings", "clothes" ], name = "socks", sprite = ( 51, 49 ) }
    , { category = Activities, char = "\u{1F9E7}", keywords = [ "red envelope", "gift" ], name = "red_envelope", sprite = ( 51, 50 ) }
    , { category = Activities, char = "\u{1F9E8}", keywords = [ "firecracker", "dynamite", "boom", "explode", "explosion", "explosive" ], name = "firecracker", sprite = ( 51, 51 ) }
    , { category = Activities, char = "\u{1F9E9}", keywords = [ "puzzle piece", "interlocking", "puzzle", "piece" ], name = "jigsaw", sprite = ( 51, 52 ) }
    , { category = Objects, char = "\u{1F9EA}", keywords = [ "test tube", "chemistry", "experiment", "lab", "science" ], name = "test_tube", sprite = ( 51, 53 ) }
    , { category = Objects, char = "\u{1F9EB}", keywords = [ "petri dish", "bacteria", "biology", "culture", "lab" ], name = "petri_dish", sprite = ( 51, 54 ) }
    , { category = Objects, char = "\u{1F9EC}", keywords = [ "dna", "biologist", "genetics", "life" ], name = "dna", sprite = ( 51, 55 ) }
    , { category = TravelAndPlaces, char = "\u{1F9ED}", keywords = [ "compass", "magnetic", "navigation", "orienteering" ], name = "compass", sprite = ( 51, 56 ) }
    , { category = Objects, char = "\u{1F9EE}", keywords = [ "abacus", "calculation" ], name = "abacus", sprite = ( 51, 57 ) }
    , { category = Objects, char = "\u{1F9EF}", keywords = [ "fire extinguisher", "quench" ], name = "fire_extinguisher", sprite = ( 52, 0 ) }
    , { category = Objects, char = "\u{1F9F0}", keywords = [ "toolbox", "tools", "diy", "fix", "maintainer", "mechanic" ], name = "toolbox", sprite = ( 52, 1 ) }
    , { category = TravelAndPlaces, char = "\u{1F9F1}", keywords = [ "brick", "bricks" ], name = "bricks", sprite = ( 52, 2 ) }
    , { category = Objects, char = "\u{1F9F2}", keywords = [ "magnet", "attraction", "magnetic" ], name = "magnet", sprite = ( 52, 3 ) }
    , { category = TravelAndPlaces, char = "\u{1F9F3}", keywords = [ "luggage", "packing", "travel" ], name = "luggage", sprite = ( 52, 4 ) }
    , { category = Objects, char = "\u{1F9F4}", keywords = [ "lotion bottle", "moisturizer", "sunscreen" ], name = "lotion_bottle", sprite = ( 52, 5 ) }
    , { category = Activities, char = "\u{1F9F5}", keywords = [ "thread", "needle", "sewing", "spool", "string" ], name = "thread", sprite = ( 52, 6 ) }
    , { category = Activities, char = "\u{1F9F6}", keywords = [ "yarn", "ball", "crochet", "knit" ], name = "yarn", sprite = ( 52, 7 ) }
    , { category = Objects, char = "\u{1F9F7}", keywords = [ "safety pin", "diaper" ], name = "safety_pin", sprite = ( 52, 8 ) }
    , { category = Activities, char = "\u{1F9F8}", keywords = [ "teddy bear", "plush", "stuffed" ], name = "teddy_bear", sprite = ( 52, 9 ) }
    , { category = Objects, char = "\u{1F9F9}", keywords = [ "broom", "cleaning", "sweeping", "witch" ], name = "broom", sprite = ( 52, 10 ) }
    , { category = Objects, char = "\u{1F9FA}", keywords = [ "basket", "laundry" ], name = "basket", sprite = ( 52, 11 ) }
    , { category = Objects, char = "\u{1F9FB}", keywords = [ "roll of paper", "roll" ], name = "roll_of_paper", sprite = ( 52, 12 ) }
    , { category = Objects, char = "\u{1F9FC}", keywords = [ "soap", "bar", "bathing", "cleaning", "lather" ], name = "soap", sprite = ( 52, 13 ) }
    , { category = Objects, char = "\u{1F9FD}", keywords = [ "sponge", "absorbing", "cleaning", "porous" ], name = "sponge", sprite = ( 52, 14 ) }
    , { category = Objects, char = "\u{1F9FE}", keywords = [ "receipt", "accounting", "expenses" ], name = "receipt", sprite = ( 52, 15 ) }
    , { category = Activities, char = "\u{1F9FF}", keywords = [ "nazar amulet", "bead", "charm" ], name = "nazar_amulet", sprite = ( 52, 16 ) }
    , { category = Objects, char = "\u{1FA70}", keywords = [ "ballet shoes" ], name = "ballet_shoes", sprite = ( 52, 17 ) }
    , { category = Objects, char = "\u{1FA71}", keywords = [ "one piece swimsuit" ], name = "one-piece_swimsuit", sprite = ( 52, 18 ) }
    , { category = Objects, char = "\u{1FA72}", keywords = [ "briefs" ], name = "briefs", sprite = ( 52, 19 ) }
    , { category = Objects, char = "\u{1FA73}", keywords = [ "shorts" ], name = "shorts", sprite = ( 52, 20 ) }
    , { category = Objects, char = "\u{1FA74}", keywords = [ "thong sandal", "footwear", "summer" ], name = "thong_sandal", sprite = ( 52, 21 ) }
    , { category = Objects, char = "\u{1FA78}", keywords = [ "drop of blood" ], name = "drop_of_blood", sprite = ( 52, 22 ) }
    , { category = Objects, char = "\u{1FA79}", keywords = [ "adhesive bandage" ], name = "adhesive_bandage", sprite = ( 52, 23 ) }
    , { category = Objects, char = "\u{1FA7A}", keywords = [ "stethoscope" ], name = "stethoscope", sprite = ( 52, 24 ) }
    , { category = Activities, char = "\u{1FA80}", keywords = [ "yo yo" ], name = "yo-yo", sprite = ( 52, 25 ) }
    , { category = Activities, char = "\u{1FA81}", keywords = [ "kite" ], name = "kite", sprite = ( 52, 26 ) }
    , { category = TravelAndPlaces, char = "\u{1FA82}", keywords = [ "parachute" ], name = "parachute", sprite = ( 52, 27 ) }
    , { category = Objects, char = "\u{1FA83}", keywords = [ "boomerang", "weapon" ], name = "boomerang", sprite = ( 52, 28 ) }
    , { category = Activities, char = "\u{1FA84}", keywords = [ "magic wand", "supernature", "power" ], name = "magic_wand", sprite = ( 52, 29 ) }
    , { category = Activities, char = "\u{1FA85}", keywords = [ "pinata", "mexico", "candy", "celebration" ], name = "pinata", sprite = ( 52, 30 ) }
    , { category = Activities, char = "\u{1FA86}", keywords = [ "nesting dolls", "matryoshka", "toy" ], name = "nesting_dolls", sprite = ( 52, 31 ) }
    , { category = TravelAndPlaces, char = "\u{1FA90}", keywords = [ "ringed planet" ], name = "ringed_planet", sprite = ( 52, 32 ) }
    , { category = Objects, char = "\u{1FA91}", keywords = [ "chair" ], name = "chair", sprite = ( 52, 33 ) }
    , { category = Objects, char = "\u{1FA92}", keywords = [ "razor" ], name = "razor", sprite = ( 52, 34 ) }
    , { category = Objects, char = "\u{1FA93}", keywords = [ "axe" ], name = "axe", sprite = ( 52, 35 ) }
    , { category = Objects, char = "\u{1FA94}", keywords = [ "diya lamp" ], name = "diya_lamp", sprite = ( 52, 36 ) }
    , { category = Objects, char = "\u{1FA95}", keywords = [ "banjo" ], name = "banjo", sprite = ( 52, 37 ) }
    , { category = Objects, char = "\u{1FA96}", keywords = [ "military helmet", "army", "protection" ], name = "military_helmet", sprite = ( 52, 38 ) }
    , { category = Objects, char = "\u{1FA97}", keywords = [ "accordion", "music" ], name = "accordion", sprite = ( 52, 39 ) }
    , { category = Objects, char = "\u{1FA98}", keywords = [ "long drum", "music" ], name = "long_drum", sprite = ( 52, 40 ) }
    , { category = Objects, char = "\u{1FA99}", keywords = [ "coin", "money", "currency" ], name = "coin", sprite = ( 52, 41 ) }
    , { category = Objects, char = "\u{1FA9A}", keywords = [ "carpentry saw", "cut", "chop" ], name = "carpentry_saw", sprite = ( 52, 42 ) }
    , { category = Objects, char = "\u{1FA9B}", keywords = [ "screwdriver", "tools" ], name = "screwdriver", sprite = ( 52, 43 ) }
    , { category = Objects, char = "\u{1FA9C}", keywords = [ "ladder", "tools" ], name = "ladder", sprite = ( 52, 44 ) }
    , { category = Objects, char = "\u{1FA9D}", keywords = [ "hook", "tools" ], name = "hook", sprite = ( 52, 45 ) }
    , { category = Objects, char = "\u{1FA9E}", keywords = [ "mirror", "reflection" ], name = "mirror", sprite = ( 52, 46 ) }
    , { category = Objects, char = "\u{1FA9F}", keywords = [ "window", "scenery" ], name = "window", sprite = ( 52, 47 ) }
    , { category = Objects, char = "\u{1FAA0}", keywords = [ "plunger", "toilet" ], name = "plunger", sprite = ( 52, 48 ) }
    , { category = Activities, char = "\u{1FAA1}", keywords = [ "sewing needle", "stitches" ], name = "sewing_needle", sprite = ( 52, 49 ) }
    , { category = Activities, char = "\u{1FAA2}", keywords = [ "knot", "rope", "scout" ], name = "knot", sprite = ( 52, 50 ) }
    , { category = Objects, char = "\u{1FAA3}", keywords = [ "bucket", "water", "container" ], name = "bucket", sprite = ( 52, 51 ) }
    , { category = Objects, char = "\u{1FAA4}", keywords = [ "mouse trap", "cheese" ], name = "mouse_trap", sprite = ( 52, 52 ) }
    , { category = Objects, char = "\u{1FAA5}", keywords = [ "toothbrush", "hygiene", "dental" ], name = "toothbrush", sprite = ( 52, 53 ) }
    , { category = Objects, char = "\u{1FAA6}", keywords = [ "headstone", "death", "rip", "grave" ], name = "headstone", sprite = ( 52, 54 ) }
    , { category = Objects, char = "\u{1FAA7}", keywords = [ "placard", "announcement" ], name = "placard", sprite = ( 52, 55 ) }
    , { category = TravelAndPlaces, char = "\u{1FAA8}", keywords = [ "rock", "stone" ], name = "rock", sprite = ( 52, 56 ) }
    , { category = AnimalsAndNature, char = "\u{1FAB0}", keywords = [ "fly", "insect" ], name = "fly", sprite = ( 52, 57 ) }
    , { category = AnimalsAndNature, char = "\u{1FAB1}", keywords = [ "worm", "animal" ], name = "worm", sprite = ( 53, 0 ) }
    , { category = AnimalsAndNature, char = "\u{1FAB2}", keywords = [ "beetle", "insect" ], name = "beetle", sprite = ( 53, 1 ) }
    , { category = AnimalsAndNature, char = "\u{1FAB3}", keywords = [ "cockroach", "insect", "pests" ], name = "cockroach", sprite = ( 53, 2 ) }
    , { category = AnimalsAndNature, char = "\u{1FAB4}", keywords = [ "potted plant", "greenery", "house" ], name = "potted_plant", sprite = ( 53, 3 ) }
    , { category = TravelAndPlaces, char = "\u{1FAB5}", keywords = [ "wood", "nature", "timber", "trunk" ], name = "wood", sprite = ( 53, 4 ) }
    , { category = AnimalsAndNature, char = "\u{1FAB6}", keywords = [ "feather", "bird", "fly" ], name = "feather", sprite = ( 53, 5 ) }
    , { category = PeopleAndBody, char = "\u{1FAC0}", keywords = [ "anatomical heart", "health", "heartbeat" ], name = "anatomical_heart", sprite = ( 53, 6 ) }
    , { category = PeopleAndBody, char = "\u{1FAC1}", keywords = [ "lungs", "breathe" ], name = "lungs", sprite = ( 53, 7 ) }
    , { category = PeopleAndBody, char = "\u{1FAC2}", keywords = [ "people hugging", "care" ], name = "people_hugging", sprite = ( 53, 8 ) }
    , { category = FoodAndDrink, char = "\u{1FAD0}", keywords = [ "blueberries", "fruit" ], name = "blueberries", sprite = ( 53, 9 ) }
    , { category = FoodAndDrink, char = "\u{1FAD1}", keywords = [ "bell pepper", "fruit", "plant" ], name = "bell_pepper", sprite = ( 53, 10 ) }
    , { category = FoodAndDrink, char = "\u{1FAD2}", keywords = [ "olive", "fruit" ], name = "olive", sprite = ( 53, 11 ) }
    , { category = FoodAndDrink, char = "\u{1FAD3}", keywords = [ "flatbread", "flour", "food" ], name = "flatbread", sprite = ( 53, 12 ) }
    , { category = FoodAndDrink, char = "\u{1FAD4}", keywords = [ "tamale", "food", "masa" ], name = "tamale", sprite = ( 53, 13 ) }
    , { category = FoodAndDrink, char = "\u{1FAD5}", keywords = [ "fondue", "cheese", "pot", "food" ], name = "fondue", sprite = ( 53, 14 ) }
    , { category = FoodAndDrink, char = "\u{1FAD6}", keywords = [ "teapot", "drink", "hot" ], name = "teapot", sprite = ( 53, 15 ) }
    , { category = Symbols, char = "‼️", keywords = [ "double exclamation mark", "exclamation", "surprise" ], name = "bangbang", sprite = ( 53, 16 ) }
    , { category = Symbols, char = "⁉️", keywords = [ "exclamation question mark", "wat", "punctuation", "surprise" ], name = "interrobang", sprite = ( 53, 17 ) }
    , { category = Symbols, char = "™️", keywords = [ "trade mark", "trademark", "brand", "law", "legal" ], name = "tm", sprite = ( 53, 18 ) }
    , { category = Symbols, char = "ℹ️", keywords = [ "information", "blue square", "alphabet", "letter" ], name = "information_source", sprite = ( 53, 19 ) }
    , { category = Symbols, char = "↔️", keywords = [ "left right arrow", "shape", "direction", "horizontal", "sideways" ], name = "left_right_arrow", sprite = ( 53, 20 ) }
    , { category = Symbols, char = "↕️", keywords = [ "up down arrow", "blue square", "direction", "way", "vertical" ], name = "arrow_up_down", sprite = ( 53, 21 ) }
    , { category = Symbols, char = "↖️", keywords = [ "up left arrow", "blue square", "point", "direction", "diagonal", "northwest" ], name = "arrow_upper_left", sprite = ( 53, 22 ) }
    , { category = Symbols, char = "↗️", keywords = [ "up right arrow", "blue square", "point", "direction", "diagonal", "northeast" ], name = "arrow_upper_right", sprite = ( 53, 23 ) }
    , { category = Symbols, char = "↘️", keywords = [ "down right arrow", "blue square", "direction", "diagonal", "southeast" ], name = "arrow_lower_right", sprite = ( 53, 24 ) }
    , { category = Symbols, char = "↙️", keywords = [ "down left arrow", "blue square", "direction", "diagonal", "southwest" ], name = "arrow_lower_left", sprite = ( 53, 25 ) }
    , { category = Symbols, char = "↩️", keywords = [ "right arrow curving left", "back", "return", "blue square", "undo", "enter" ], name = "leftwards_arrow_with_hook", sprite = ( 53, 26 ) }
    , { category = Symbols, char = "↪️", keywords = [ "left arrow curving right", "blue square", "return", "rotate", "direction" ], name = "arrow_right_hook", sprite = ( 53, 27 ) }
    , { category = TravelAndPlaces, char = "⌚", keywords = [ "watch", "time", "accessories" ], name = "watch", sprite = ( 53, 28 ) }
    , { category = TravelAndPlaces, char = "⌛", keywords = [ "hourglass done", "time", "clock", "oldschool", "limit", "exam", "quiz", "test" ], name = "hourglass", sprite = ( 53, 29 ) }
    , { category = Objects, char = "⌨️", keywords = [ "keyboard", "technology", "computer", "type", "input", "text" ], name = "keyboard", sprite = ( 53, 30 ) }
    , { category = Symbols, char = "⏏️", keywords = [ "eject button", "blue square" ], name = "eject", sprite = ( 53, 31 ) }
    , { category = Symbols, char = "⏩", keywords = [ "fast forward button", "blue square", "play", "speed", "continue" ], name = "fast_forward", sprite = ( 53, 32 ) }
    , { category = Symbols, char = "⏪", keywords = [ "fast reverse button", "play", "blue square" ], name = "rewind", sprite = ( 53, 33 ) }
    , { category = Symbols, char = "⏫", keywords = [ "fast up button", "blue square", "direction", "top" ], name = "arrow_double_up", sprite = ( 53, 34 ) }
    , { category = Symbols, char = "⏬", keywords = [ "fast down button", "blue square", "direction", "bottom" ], name = "arrow_double_down", sprite = ( 53, 35 ) }
    , { category = Symbols, char = "⏭️", keywords = [ "next track button", "forward", "next", "blue square" ], name = "black_right_pointing_double_triangle_with_vertical_bar", sprite = ( 53, 36 ) }
    , { category = Symbols, char = "⏮️", keywords = [ "last track button", "backward" ], name = "black_left_pointing_double_triangle_with_vertical_bar", sprite = ( 53, 37 ) }
    , { category = Symbols, char = "⏯️", keywords = [ "play or pause button", "blue square", "play", "pause" ], name = "black_right_pointing_triangle_with_double_vertical_bar", sprite = ( 53, 38 ) }
    , { category = TravelAndPlaces, char = "⏰", keywords = [ "alarm clock", "time", "wake" ], name = "alarm_clock", sprite = ( 53, 39 ) }
    , { category = TravelAndPlaces, char = "⏱️", keywords = [ "stopwatch", "time", "deadline" ], name = "stopwatch", sprite = ( 53, 40 ) }
    , { category = TravelAndPlaces, char = "⏲️", keywords = [ "timer clock", "alarm" ], name = "timer_clock", sprite = ( 53, 41 ) }
    , { category = TravelAndPlaces, char = "⏳", keywords = [ "hourglass not done", "oldschool", "time", "countdown" ], name = "hourglass_flowing_sand", sprite = ( 53, 42 ) }
    , { category = Symbols, char = "⏸️", keywords = [ "pause button", "pause", "blue square" ], name = "double_vertical_bar", sprite = ( 53, 43 ) }
    , { category = Symbols, char = "⏹️", keywords = [ "stop button", "blue square" ], name = "black_square_for_stop", sprite = ( 53, 44 ) }
    , { category = Symbols, char = "⏺️", keywords = [ "record button", "blue square" ], name = "black_circle_for_record", sprite = ( 53, 45 ) }
    , { category = Symbols, char = "Ⓜ️", keywords = [ "circled m", "alphabet", "blue circle", "letter" ], name = "m", sprite = ( 53, 46 ) }
    , { category = Symbols, char = "▪️", keywords = [ "black small square", "shape", "icon" ], name = "black_small_square", sprite = ( 53, 47 ) }
    , { category = Symbols, char = "▫️", keywords = [ "white small square", "shape", "icon" ], name = "white_small_square", sprite = ( 53, 48 ) }
    , { category = Symbols, char = "▶️", keywords = [ "play button", "blue square", "right", "direction", "play" ], name = "arrow_forward", sprite = ( 53, 49 ) }
    , { category = Symbols, char = "◀️", keywords = [ "reverse button", "blue square", "left", "direction" ], name = "arrow_backward", sprite = ( 53, 50 ) }
    , { category = Symbols, char = "◻️", keywords = [ "white medium square", "shape", "stone", "icon" ], name = "white_medium_square", sprite = ( 53, 51 ) }
    , { category = Symbols, char = "◼️", keywords = [ "black medium square", "shape", "button", "icon" ], name = "black_medium_square", sprite = ( 53, 52 ) }
    , { category = Symbols, char = "◽", keywords = [ "white medium small square", "shape", "stone", "icon", "button" ], name = "white_medium_small_square", sprite = ( 53, 53 ) }
    , { category = Symbols, char = "◾", keywords = [ "black medium small square", "icon", "shape", "button" ], name = "black_medium_small_square", sprite = ( 53, 54 ) }
    , { category = TravelAndPlaces, char = "☀️", keywords = [ "sun", "weather", "nature", "brightness", "summer", "beach", "spring" ], name = "sunny", sprite = ( 53, 55 ) }
    , { category = TravelAndPlaces, char = "☁️", keywords = [ "cloud", "weather", "sky" ], name = "cloud", sprite = ( 53, 56 ) }
    , { category = TravelAndPlaces, char = "☂️", keywords = [ "umbrella", "weather", "spring" ], name = "umbrella", sprite = ( 53, 57 ) }
    , { category = TravelAndPlaces, char = "☃️", keywords = [ "snowman", "winter", "season", "cold", "weather", "christmas", "xmas", "frozen" ], name = "snowman", sprite = ( 54, 0 ) }
    , { category = TravelAndPlaces, char = "☄️", keywords = [ "comet", "space" ], name = "comet", sprite = ( 54, 1 ) }
    , { category = Objects, char = "☎️", keywords = [ "telephone", "technology", "communication", "dial", "telephone" ], name = "phone", sprite = ( 54, 2 ) }
    , { category = Symbols, char = "☑️", keywords = [ "check box with check", "ok", "agree", "confirm", "black square", "vote", "election", "yes", "tick" ], name = "ballot_box_with_check", sprite = ( 54, 3 ) }
    , { category = TravelAndPlaces, char = "☔", keywords = [ "umbrella with rain drops", "rainy", "weather", "spring" ], name = "umbrella_with_rain_drops", sprite = ( 54, 4 ) }
    , { category = FoodAndDrink, char = "☕", keywords = [ "hot beverage", "beverage", "caffeine", "latte", "espresso" ], name = "coffee", sprite = ( 54, 5 ) }
    , { category = AnimalsAndNature, char = "☘️", keywords = [ "shamrock", "vegetable", "plant", "nature", "irish", "clover" ], name = "shamrock", sprite = ( 54, 6 ) }
    , { category = PeopleAndBody, char = "☝️", keywords = [ "index pointing up", "hand", "fingers", "direction", "up" ], name = "point_up", sprite = ( 54, 7 ) }
    , { category = SmileysAndEmotion, char = "☠️", keywords = [ "skull and crossbones", "poison", "danger", "deadly", "scary", "death", "pirate", "evil" ], name = "skull_and_crossbones", sprite = ( 54, 13 ) }
    , { category = Symbols, char = "☢️", keywords = [ "radioactive", "nuclear", "danger" ], name = "radioactive_sign", sprite = ( 54, 14 ) }
    , { category = Symbols, char = "☣️", keywords = [ "biohazard", "danger" ], name = "biohazard_sign", sprite = ( 54, 15 ) }
    , { category = Symbols, char = "☦️", keywords = [ "orthodox cross", "suppedaneum", "religion" ], name = "orthodox_cross", sprite = ( 54, 16 ) }
    , { category = Symbols, char = "☪️", keywords = [ "star and crescent", "islam" ], name = "star_and_crescent", sprite = ( 54, 17 ) }
    , { category = Symbols, char = "☮️", keywords = [ "peace symbol", "hippie" ], name = "peace_symbol", sprite = ( 54, 18 ) }
    , { category = Symbols, char = "☯️", keywords = [ "yin yang", "balance" ], name = "yin_yang", sprite = ( 54, 19 ) }
    , { category = Symbols, char = "☸️", keywords = [ "wheel of dharma", "hinduism", "buddhism", "sikhism", "jainism" ], name = "wheel_of_dharma", sprite = ( 54, 20 ) }
    , { category = SmileysAndEmotion, char = "☹️", keywords = [ "frowning face", "face", "sad", "upset", "frown" ], name = "white_frowning_face", sprite = ( 54, 21 ) }
    , { category = SmileysAndEmotion, char = "☺️", keywords = [ "smiling face", "face", "blush", "massage", "happiness" ], name = "relaxed", sprite = ( 54, 22 ) }
    , { category = Symbols, char = "♀️", keywords = [ "female sign" ], name = "female_sign", sprite = ( 54, 23 ) }
    , { category = Symbols, char = "♂️", keywords = [ "male sign" ], name = "male_sign", sprite = ( 54, 24 ) }
    , { category = Symbols, char = "♈", keywords = [ "aries", "sign", "purple square", "zodiac", "astrology" ], name = "aries", sprite = ( 54, 25 ) }
    , { category = Symbols, char = "♉", keywords = [ "taurus", "purple square", "sign", "zodiac", "astrology" ], name = "taurus", sprite = ( 54, 26 ) }
    , { category = Symbols, char = "♊", keywords = [ "gemini", "sign", "zodiac", "purple square", "astrology" ], name = "gemini", sprite = ( 54, 27 ) }
    , { category = Symbols, char = "♋", keywords = [ "cancer", "sign", "zodiac", "purple square", "astrology" ], name = "cancer", sprite = ( 54, 28 ) }
    , { category = Symbols, char = "♌", keywords = [ "leo", "sign", "purple square", "zodiac", "astrology" ], name = "leo", sprite = ( 54, 29 ) }
    , { category = Symbols, char = "♍", keywords = [ "virgo", "sign", "zodiac", "purple square", "astrology" ], name = "virgo", sprite = ( 54, 30 ) }
    , { category = Symbols, char = "♎", keywords = [ "libra", "sign", "purple square", "zodiac", "astrology" ], name = "libra", sprite = ( 54, 31 ) }
    , { category = Symbols, char = "♏", keywords = [ "scorpio", "sign", "zodiac", "purple square", "astrology", "scorpio" ], name = "scorpius", sprite = ( 54, 32 ) }
    , { category = Symbols, char = "♐", keywords = [ "sagittarius", "sign", "zodiac", "purple square", "astrology" ], name = "sagittarius", sprite = ( 54, 33 ) }
    , { category = Symbols, char = "♑", keywords = [ "capricorn", "sign", "zodiac", "purple square", "astrology" ], name = "capricorn", sprite = ( 54, 34 ) }
    , { category = Symbols, char = "♒", keywords = [ "aquarius", "sign", "purple square", "zodiac", "astrology" ], name = "aquarius", sprite = ( 54, 35 ) }
    , { category = Symbols, char = "♓", keywords = [ "pisces", "purple square", "sign", "zodiac", "astrology" ], name = "pisces", sprite = ( 54, 36 ) }
    , { category = Activities, char = "♟️", keywords = [ "chess pawn", "expendable" ], name = "chess_pawn", sprite = ( 54, 37 ) }
    , { category = Activities, char = "♠️", keywords = [ "spade suit", "poker", "cards", "suits", "magic" ], name = "spades", sprite = ( 54, 38 ) }
    , { category = Activities, char = "♣️", keywords = [ "club suit", "poker", "cards", "magic", "suits" ], name = "clubs", sprite = ( 54, 39 ) }
    , { category = Activities, char = "♥️", keywords = [ "heart suit", "poker", "cards", "magic", "suits" ], name = "hearts", sprite = ( 54, 40 ) }
    , { category = Activities, char = "♦️", keywords = [ "diamond suit", "poker", "cards", "magic", "suits" ], name = "diamonds", sprite = ( 54, 41 ) }
    , { category = TravelAndPlaces, char = "♨️", keywords = [ "hot springs", "bath", "warm", "relax" ], name = "hotsprings", sprite = ( 54, 42 ) }
    , { category = Symbols, char = "♻️", keywords = [ "recycling symbol", "arrow", "environment", "garbage", "trash" ], name = "recycle", sprite = ( 54, 43 ) }
    , { category = Symbols, char = "♾️", keywords = [ "infinity", "forever" ], name = "infinity", sprite = ( 54, 44 ) }
    , { category = Symbols, char = "♿", keywords = [ "wheelchair symbol", "blue square", "disabled", "a11y", "accessibility" ], name = "wheelchair", sprite = ( 54, 45 ) }
    , { category = Objects, char = "⚒️", keywords = [ "hammer and pick", "tools", "build", "create" ], name = "hammer_and_pick", sprite = ( 54, 46 ) }
    , { category = TravelAndPlaces, char = "⚓", keywords = [ "anchor", "ship", "ferry", "sea", "boat" ], name = "anchor", sprite = ( 54, 47 ) }
    , { category = Objects, char = "⚔️", keywords = [ "crossed swords", "weapon" ], name = "crossed_swords", sprite = ( 54, 48 ) }
    , { category = Symbols, char = "⚕️", keywords = [ "medical symbol" ], name = "medical_symbol", sprite = ( 54, 49 ) }
    , { category = Objects, char = "⚖️", keywords = [ "balance scale", "law", "fairness", "weight" ], name = "scales", sprite = ( 54, 50 ) }
    , { category = Objects, char = "⚗️", keywords = [ "alembic", "distilling", "science", "experiment", "chemistry" ], name = "alembic", sprite = ( 54, 51 ) }
    , { category = Objects, char = "⚙️", keywords = [ "gear", "cog" ], name = "gear", sprite = ( 54, 52 ) }
    , { category = Symbols, char = "⚛️", keywords = [ "atom symbol", "science", "physics", "chemistry" ], name = "atom_symbol", sprite = ( 54, 53 ) }
    , { category = Symbols, char = "⚜️", keywords = [ "fleur de lis", "decorative", "scout" ], name = "fleur_de_lis", sprite = ( 54, 54 ) }
    , { category = Symbols, char = "⚠️", keywords = [ "warning", "exclamation", "wip", "alert", "error", "problem", "issue" ], name = "warning", sprite = ( 54, 55 ) }
    , { category = TravelAndPlaces, char = "⚡", keywords = [ "high voltage", "thunder", "weather", "lightning bolt", "fast" ], name = "zap", sprite = ( 54, 56 ) }
    , { category = Symbols, char = "⚧️", keywords = [ "transgender symbol", "lgbtq" ], name = "transgender_symbol", sprite = ( 54, 57 ) }
    , { category = Symbols, char = "⚪", keywords = [ "white circle", "shape", "round" ], name = "white_circle", sprite = ( 55, 0 ) }
    , { category = Symbols, char = "⚫", keywords = [ "black circle", "shape", "button", "round" ], name = "black_circle", sprite = ( 55, 1 ) }
    , { category = Objects, char = "⚰️", keywords = [ "coffin", "vampire", "dead", "die", "death", "rip", "graveyard", "cemetery", "casket", "funeral", "box" ], name = "coffin", sprite = ( 55, 2 ) }
    , { category = Objects, char = "⚱️", keywords = [ "funeral urn", "dead", "die", "death", "rip", "ashes" ], name = "funeral_urn", sprite = ( 55, 3 ) }
    , { category = Activities, char = "⚽", keywords = [ "soccer ball", "sports", "football" ], name = "soccer", sprite = ( 55, 4 ) }
    , { category = Activities, char = "⚾", keywords = [ "baseball", "sports", "balls" ], name = "baseball", sprite = ( 55, 5 ) }
    , { category = TravelAndPlaces, char = "⛄", keywords = [ "snowman without snow", "winter", "season", "cold", "weather", "christmas", "xmas", "frozen", "without snow" ], name = "snowman_without_snow", sprite = ( 55, 6 ) }
    , { category = TravelAndPlaces, char = "⛅", keywords = [ "sun behind cloud", "weather", "nature", "cloudy", "morning", "fall", "spring" ], name = "partly_sunny", sprite = ( 55, 7 ) }
    , { category = TravelAndPlaces, char = "⛈️", keywords = [ "cloud with lightning and rain", "weather", "lightning" ], name = "thunder_cloud_and_rain", sprite = ( 55, 8 ) }
    , { category = Symbols, char = "⛎", keywords = [ "ophiuchus", "sign", "purple square", "constellation", "astrology" ], name = "ophiuchus", sprite = ( 55, 9 ) }
    , { category = Objects, char = "⛏️", keywords = [ "pick", "tools", "dig" ], name = "pick", sprite = ( 55, 10 ) }
    , { category = Objects, char = "⛑️", keywords = [ "rescue worker s helmet", "construction", "build" ], name = "helmet_with_white_cross", sprite = ( 55, 11 ) }
    , { category = Objects, char = "⛓️", keywords = [ "chains", "lock", "arrest" ], name = "chains", sprite = ( 55, 12 ) }
    , { category = Symbols, char = "⛔", keywords = [ "no entry", "limit", "security", "privacy", "bad", "denied", "stop", "circle" ], name = "no_entry", sprite = ( 55, 13 ) }
    , { category = TravelAndPlaces, char = "⛩️", keywords = [ "shinto shrine", "temple", "japan", "kyoto" ], name = "shinto_shrine", sprite = ( 55, 14 ) }
    , { category = TravelAndPlaces, char = "⛪", keywords = [ "church", "building", "religion", "christ" ], name = "church", sprite = ( 55, 15 ) }
    , { category = TravelAndPlaces, char = "⛰️", keywords = [ "mountain", "photo", "nature", "environment" ], name = "mountain", sprite = ( 55, 16 ) }
    , { category = TravelAndPlaces, char = "⛱️", keywords = [ "umbrella on ground", "weather", "summer" ], name = "umbrella_on_ground", sprite = ( 55, 17 ) }
    , { category = TravelAndPlaces, char = "⛲", keywords = [ "fountain", "photo", "summer", "water", "fresh" ], name = "fountain", sprite = ( 55, 18 ) }
    , { category = Activities, char = "⛳", keywords = [ "flag in hole", "sports", "business", "flag", "hole", "summer" ], name = "golf", sprite = ( 55, 19 ) }
    , { category = TravelAndPlaces, char = "⛴️", keywords = [ "ferry", "boat", "ship", "yacht" ], name = "ferry", sprite = ( 55, 20 ) }
    , { category = TravelAndPlaces, char = "⛵", keywords = [ "sailboat", "ship", "summer", "transportation", "water", "sailing" ], name = "boat", sprite = ( 55, 21 ) }
    , { category = PeopleAndBody, char = "⛷️", keywords = [ "skier", "sports", "winter", "snow" ], name = "skier", sprite = ( 55, 22 ) }
    , { category = Activities, char = "⛸️", keywords = [ "ice skate", "sports" ], name = "ice_skate", sprite = ( 55, 23 ) }
    , { category = PeopleAndBody, char = "⛹️\u{200D}♀️", keywords = [ "woman bouncing ball", "sports", "human", "woman", "female" ], name = "woman-bouncing-ball", sprite = ( 55, 24 ) }
    , { category = PeopleAndBody, char = "⛹️\u{200D}♂️", keywords = [ "man bouncing ball" ], name = "man-bouncing-ball", sprite = ( 55, 30 ) }
    , { category = PeopleAndBody, char = "⛹️", keywords = [ "person bouncing ball", "sports", "human" ], name = "person_with_ball", sprite = ( 55, 36 ) }
    , { category = TravelAndPlaces, char = "⛺", keywords = [ "tent", "photo", "camping", "outdoors" ], name = "tent", sprite = ( 55, 42 ) }
    , { category = TravelAndPlaces, char = "⛽", keywords = [ "fuel pump", "gas station", "petroleum" ], name = "fuelpump", sprite = ( 55, 43 ) }
    , { category = Objects, char = "✂️", keywords = [ "scissors", "stationery", "cut" ], name = "scissors", sprite = ( 55, 44 ) }
    , { category = Symbols, char = "✅", keywords = [ "check mark button", "green square", "ok", "agree", "vote", "election", "answer", "tick" ], name = "white_check_mark", sprite = ( 55, 45 ) }
    , { category = TravelAndPlaces, char = "✈️", keywords = [ "airplane", "vehicle", "transportation", "flight", "fly" ], name = "airplane", sprite = ( 55, 46 ) }
    , { category = Objects, char = "✉️", keywords = [ "envelope", "letter", "postal", "inbox", "communication" ], name = "email", sprite = ( 55, 47 ) }
    , { category = PeopleAndBody, char = "✊", keywords = [ "raised fist", "fingers", "hand", "grasp" ], name = "fist", sprite = ( 55, 48 ) }
    , { category = PeopleAndBody, char = "✋", keywords = [ "raised hand", "fingers", "stop", "highfive", "palm", "ban" ], name = "hand", sprite = ( 55, 54 ) }
    , { category = PeopleAndBody, char = "✌️", keywords = [ "victory hand", "fingers", "ohyeah", "hand", "peace", "victory", "two" ], name = "v", sprite = ( 56, 2 ) }
    , { category = PeopleAndBody, char = "✍️", keywords = [ "writing hand", "lower left ballpoint pen", "stationery", "write", "compose" ], name = "writing_hand", sprite = ( 56, 8 ) }
    , { category = Objects, char = "✏️", keywords = [ "pencil", "stationery", "write", "paper", "writing", "school", "study" ], name = "pencil2", sprite = ( 56, 14 ) }
    , { category = Objects, char = "✒️", keywords = [ "black nib", "pen", "stationery", "writing", "write" ], name = "black_nib", sprite = ( 56, 15 ) }
    , { category = Symbols, char = "✔️", keywords = [ "check mark", "ok", "nike", "answer", "yes", "tick" ], name = "heavy_check_mark", sprite = ( 56, 16 ) }
    , { category = Symbols, char = "✖️", keywords = [ "multiplication sign", "math", "calculation" ], name = "heavy_multiplication_x", sprite = ( 56, 17 ) }
    , { category = Symbols, char = "✝️", keywords = [ "latin cross", "christianity" ], name = "latin_cross", sprite = ( 56, 18 ) }
    , { category = Symbols, char = "✡️", keywords = [ "star of david", "judaism" ], name = "star_of_david", sprite = ( 56, 19 ) }
    , { category = Activities, char = "✨", keywords = [ "sparkles", "stars", "shine", "shiny", "cool", "awesome", "good", "magic" ], name = "sparkles", sprite = ( 56, 20 ) }
    , { category = Symbols, char = "✳️", keywords = [ "eight spoked asterisk", "star", "sparkle", "green square" ], name = "eight_spoked_asterisk", sprite = ( 56, 21 ) }
    , { category = Symbols, char = "✴️", keywords = [ "eight pointed star", "orange square", "shape", "polygon" ], name = "eight_pointed_black_star", sprite = ( 56, 22 ) }
    , { category = TravelAndPlaces, char = "❄️", keywords = [ "snowflake", "winter", "season", "cold", "weather", "christmas", "xmas" ], name = "snowflake", sprite = ( 56, 23 ) }
    , { category = Symbols, char = "❇️", keywords = [ "sparkle", "stars", "green square", "awesome", "good", "fireworks" ], name = "sparkle", sprite = ( 56, 24 ) }
    , { category = Symbols, char = "❌", keywords = [ "cross mark", "no", "delete", "remove", "cancel", "red" ], name = "x", sprite = ( 56, 25 ) }
    , { category = Symbols, char = "❎", keywords = [ "cross mark button", "x", "green square", "no", "deny" ], name = "negative_squared_cross_mark", sprite = ( 56, 26 ) }
    , { category = Symbols, char = "❓", keywords = [ "question mark", "doubt", "confused" ], name = "question", sprite = ( 56, 27 ) }
    , { category = Symbols, char = "❔", keywords = [ "white question mark", "doubts", "gray", "huh", "confused" ], name = "grey_question", sprite = ( 56, 28 ) }
    , { category = Symbols, char = "❕", keywords = [ "white exclamation mark", "surprise", "punctuation", "gray", "wow", "warning" ], name = "grey_exclamation", sprite = ( 56, 29 ) }
    , { category = Symbols, char = "❗", keywords = [ "exclamation mark", "heavy exclamation mark", "danger", "surprise", "punctuation", "wow", "warning" ], name = "exclamation", sprite = ( 56, 30 ) }
    , { category = SmileysAndEmotion, char = "❣️", keywords = [ "heart exclamation", "decoration", "love" ], name = "heavy_heart_exclamation_mark_ornament", sprite = ( 56, 31 ) }
    , { category = SmileysAndEmotion, char = "❤️", keywords = [ "red heart", "love", "like", "valentines" ], name = "heart", sprite = ( 56, 32 ) }
    , { category = Symbols, char = "➕", keywords = [ "plus sign", "math", "calculation", "addition", "more", "increase" ], name = "heavy_plus_sign", sprite = ( 56, 33 ) }
    , { category = Symbols, char = "➖", keywords = [ "minus sign", "math", "calculation", "subtract", "less" ], name = "heavy_minus_sign", sprite = ( 56, 34 ) }
    , { category = Symbols, char = "➗", keywords = [ "division sign", "divide", "math", "calculation" ], name = "heavy_division_sign", sprite = ( 56, 35 ) }
    , { category = Symbols, char = "➡️", keywords = [ "right arrow", "blue square", "next" ], name = "arrow_right", sprite = ( 56, 36 ) }
    , { category = Symbols, char = "➰", keywords = [ "curly loop", "scribble", "draw", "shape", "squiggle" ], name = "curly_loop", sprite = ( 56, 37 ) }
    , { category = Symbols, char = "➿", keywords = [ "double curly loop", "tape", "cassette" ], name = "loop", sprite = ( 56, 38 ) }
    , { category = Symbols, char = "⤴️", keywords = [ "right arrow curving up", "blue square", "direction", "top" ], name = "arrow_heading_up", sprite = ( 56, 39 ) }
    , { category = Symbols, char = "⤵️", keywords = [ "right arrow curving down", "blue square", "direction", "bottom" ], name = "arrow_heading_down", sprite = ( 56, 40 ) }
    , { category = Symbols, char = "⬅️", keywords = [ "left arrow", "blue square", "previous", "back" ], name = "arrow_left", sprite = ( 56, 41 ) }
    , { category = Symbols, char = "⬆️", keywords = [ "up arrow", "blue square", "continue", "top", "direction" ], name = "arrow_up", sprite = ( 56, 42 ) }
    , { category = Symbols, char = "⬇️", keywords = [ "down arrow", "blue square", "direction", "bottom" ], name = "arrow_down", sprite = ( 56, 43 ) }
    , { category = Symbols, char = "⬛", keywords = [ "black large square", "shape", "icon", "button" ], name = "black_large_square", sprite = ( 56, 44 ) }
    , { category = Symbols, char = "⬜", keywords = [ "white large square", "shape", "icon", "stone", "button" ], name = "white_large_square", sprite = ( 56, 45 ) }
    , { category = TravelAndPlaces, char = "⭐", keywords = [ "star", "night", "yellow" ], name = "star", sprite = ( 56, 46 ) }
    , { category = Symbols, char = "⭕", keywords = [ "hollow red circle", "circle", "round" ], name = "o", sprite = ( 56, 47 ) }
    , { category = Symbols, char = "〰️", keywords = [ "wavy dash", "draw", "line", "moustache", "mustache", "squiggle", "scribble" ], name = "wavy_dash", sprite = ( 56, 48 ) }
    , { category = Symbols, char = "〽️", keywords = [ "part alternation mark", "graph", "presentation", "stats", "business", "economics", "bad" ], name = "part_alternation_mark", sprite = ( 56, 49 ) }
    , { category = Symbols, char = "㊗️", keywords = [ "japanese congratulations button", "chinese", "kanji", "japanese", "red circle" ], name = "congratulations", sprite = ( 56, 50 ) }
    , { category = Symbols, char = "㊙️", keywords = [ "japanese secret button", "privacy", "chinese", "sshh", "kanji", "red circle" ], name = "secret", sprite = ( 56, 51 ) }
    ]
