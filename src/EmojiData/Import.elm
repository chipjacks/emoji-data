module EmojiData.Import exposing (list)

import EmojiData exposing (EmojiData)
import EmojiData.Category exposing (Category(..))


list : List EmojiData
list =
    [ { category = Symbols, char = "#️⃣", keywords = [ "hash", "keycap ", "symbol", "blue square", "twitter" ], name = "hash", x = 0, y = 0 }
    , { category = Symbols, char = "*️⃣", keywords = [ "keycap star", "keycap ", "star", "keycap" ], name = "keycap_star", x = 0, y = 1 }
    , { category = Symbols, char = "0️⃣", keywords = [ "zero", "keycap 0", "0", "numbers", "blue square", "null" ], name = "zero", x = 0, y = 2 }
    , { category = Symbols, char = "1️⃣", keywords = [ "one", "keycap 1", "blue square", "numbers", "1" ], name = "one", x = 0, y = 3 }
    , { category = Symbols, char = "2️⃣", keywords = [ "two", "keycap 2", "numbers", "2", "prime", "blue square" ], name = "two", x = 0, y = 4 }
    , { category = Symbols, char = "3️⃣", keywords = [ "three", "keycap 3", "3", "numbers", "prime", "blue square" ], name = "three", x = 0, y = 5 }
    , { category = Symbols, char = "4️⃣", keywords = [ "four", "keycap 4", "4", "numbers", "blue square" ], name = "four", x = 0, y = 6 }
    , { category = Symbols, char = "5️⃣", keywords = [ "five", "keycap 5", "5", "numbers", "blue square", "prime" ], name = "five", x = 0, y = 7 }
    , { category = Symbols, char = "6️⃣", keywords = [ "six", "keycap 6", "6", "numbers", "blue square" ], name = "six", x = 0, y = 8 }
    , { category = Symbols, char = "7️⃣", keywords = [ "seven", "keycap 7", "7", "numbers", "blue square", "prime" ], name = "seven", x = 0, y = 9 }
    , { category = Symbols, char = "8️⃣", keywords = [ "eight", "keycap 8", "8", "blue square", "numbers" ], name = "eight", x = 0, y = 10 }
    , { category = Symbols, char = "9️⃣", keywords = [ "nine", "keycap 9", "blue square", "numbers", "9" ], name = "nine", x = 0, y = 11 }
    , { category = Symbols, char = "©️", keywords = [ "copyright", "copyright", "ip", "license", "circle", "law", "legal" ], name = "copyright", x = 0, y = 12 }
    , { category = Symbols, char = "®️", keywords = [ "registered", "registered", "alphabet", "circle" ], name = "registered", x = 0, y = 13 }
    , { category = Activities, char = "🀄", keywords = [ "mahjong", "mahjong red dragon", "game", "play", "chinese", "kanji" ], name = "mahjong", x = 0, y = 14 }
    , { category = Activities, char = "🃏", keywords = [ "black joker", "joker", "poker", "cards", "game", "play", "magic" ], name = "black_joker", x = 0, y = 15 }
    , { category = Symbols, char = "🅰️", keywords = [ "a", "a button", "red square", "alphabet", "letter" ], name = "a", x = 0, y = 16 }
    , { category = Symbols, char = "🅱️", keywords = [ "b", "b button", "red square", "alphabet", "letter" ], name = "b", x = 0, y = 17 }
    , { category = Symbols, char = "🅾️", keywords = [ "o2", "o button", "alphabet", "red square", "letter" ], name = "o2", x = 0, y = 18 }
    , { category = Symbols, char = "🅿️", keywords = [ "parking", "p button", "cars", "blue square", "alphabet", "letter" ], name = "parking", x = 0, y = 19 }
    , { category = Symbols, char = "🆎", keywords = [ "ab", "ab button", "red square", "alphabet" ], name = "ab", x = 0, y = 20 }
    , { category = Symbols, char = "🆑", keywords = [ "cl", "cl button", "alphabet", "words", "red square" ], name = "cl", x = 0, y = 21 }
    , { category = Symbols, char = "🆒", keywords = [ "cool", "cool button", "words", "blue square" ], name = "cool", x = 0, y = 22 }
    , { category = Symbols, char = "🆓", keywords = [ "free", "free button", "blue square", "words" ], name = "free", x = 0, y = 23 }
    , { category = Symbols, char = "🆔", keywords = [ "id", "id button", "purple square", "words" ], name = "id", x = 0, y = 24 }
    , { category = Symbols, char = "🆕", keywords = [ "new", "new button", "blue square", "words", "start" ], name = "new", x = 0, y = 25 }
    , { category = Symbols, char = "🆖", keywords = [ "ng", "ng button", "blue square", "words", "shape", "icon" ], name = "ng", x = 0, y = 26 }
    , { category = Symbols, char = "🆗", keywords = [ "ok", "ok button", "good", "agree", "yes", "blue square" ], name = "ok", x = 0, y = 27 }
    , { category = Symbols, char = "🆘", keywords = [ "sos", "sos button", "help", "red square", "words", "emergency", "911" ], name = "sos", x = 0, y = 28 }
    , { category = Symbols, char = "🆙", keywords = [ "up", "up button", "blue square", "above", "high" ], name = "up", x = 0, y = 29 }
    , { category = Symbols, char = "🆚", keywords = [ "vs", "vs button", "words", "orange square" ], name = "vs", x = 0, y = 30 }
    , { category = Flags, char = "🇦🇨", keywords = [ "flag ac", "flag ascension island" ], name = "flag-ac", x = 0, y = 31 }
    , { category = Flags, char = "🇦🇩", keywords = [ "flag ad", "flag andorra", "ad", "flag", "nation", "country", "banner" ], name = "flag-ad", x = 0, y = 32 }
    , { category = Flags, char = "🇦🇪", keywords = [ "flag ae", "flag united arab emirates", "united", "arab", "emirates", "flag", "nation", "country", "banner" ], name = "flag-ae", x = 0, y = 33 }
    , { category = Flags, char = "🇦🇫", keywords = [ "flag af", "flag afghanistan", "af", "flag", "nation", "country", "banner" ], name = "flag-af", x = 0, y = 34 }
    , { category = Flags, char = "🇦🇬", keywords = [ "flag ag", "flag antigua barbuda", "antigua", "barbuda", "flag", "nation", "country", "banner" ], name = "flag-ag", x = 0, y = 35 }
    , { category = Flags, char = "🇦🇮", keywords = [ "flag ai", "flag anguilla", "ai", "flag", "nation", "country", "banner" ], name = "flag-ai", x = 0, y = 36 }
    , { category = Flags, char = "🇦🇱", keywords = [ "flag al", "flag albania", "al", "flag", "nation", "country", "banner" ], name = "flag-al", x = 0, y = 37 }
    , { category = Flags, char = "🇦🇲", keywords = [ "flag am", "flag armenia", "am", "flag", "nation", "country", "banner" ], name = "flag-am", x = 0, y = 38 }
    , { category = Flags, char = "🇦🇴", keywords = [ "flag ao", "flag angola", "ao", "flag", "nation", "country", "banner" ], name = "flag-ao", x = 0, y = 39 }
    , { category = Flags, char = "🇦🇶", keywords = [ "flag aq", "flag antarctica", "aq", "flag", "nation", "country", "banner" ], name = "flag-aq", x = 0, y = 40 }
    , { category = Flags, char = "🇦🇷", keywords = [ "flag ar", "flag argentina", "ar", "flag", "nation", "country", "banner" ], name = "flag-ar", x = 0, y = 41 }
    , { category = Flags, char = "🇦🇸", keywords = [ "flag as", "flag american samoa", "american", "ws", "flag", "nation", "country", "banner" ], name = "flag-as", x = 0, y = 42 }
    , { category = Flags, char = "🇦🇹", keywords = [ "flag at", "flag austria", "at", "flag", "nation", "country", "banner" ], name = "flag-at", x = 0, y = 43 }
    , { category = Flags, char = "🇦🇺", keywords = [ "flag au", "flag australia", "au", "flag", "nation", "country", "banner" ], name = "flag-au", x = 0, y = 44 }
    , { category = Flags, char = "🇦🇼", keywords = [ "flag aw", "flag aruba", "aw", "flag", "nation", "country", "banner" ], name = "flag-aw", x = 0, y = 45 }
    , { category = Flags, char = "🇦🇽", keywords = [ "flag ax", "flag aland islands", "Åland", "islands", "flag", "nation", "country", "banner" ], name = "flag-ax", x = 0, y = 46 }
    , { category = Flags, char = "🇦🇿", keywords = [ "flag az", "flag azerbaijan", "az", "flag", "nation", "country", "banner" ], name = "flag-az", x = 0, y = 47 }
    , { category = Flags, char = "🇧🇦", keywords = [ "flag ba", "flag bosnia herzegovina", "bosnia", "herzegovina", "flag", "nation", "country", "banner" ], name = "flag-ba", x = 0, y = 48 }
    , { category = Flags, char = "🇧🇧", keywords = [ "flag bb", "flag barbados", "bb", "flag", "nation", "country", "banner" ], name = "flag-bb", x = 0, y = 49 }
    , { category = Flags, char = "🇧🇩", keywords = [ "flag bd", "flag bangladesh", "bd", "flag", "nation", "country", "banner" ], name = "flag-bd", x = 0, y = 50 }
    , { category = Flags, char = "🇧🇪", keywords = [ "flag be", "flag belgium", "be", "flag", "nation", "country", "banner" ], name = "flag-be", x = 0, y = 51 }
    , { category = Flags, char = "🇧🇫", keywords = [ "flag bf", "flag burkina faso", "burkina", "faso", "flag", "nation", "country", "banner" ], name = "flag-bf", x = 0, y = 52 }
    , { category = Flags, char = "🇧🇬", keywords = [ "flag bg", "flag bulgaria", "bg", "flag", "nation", "country", "banner" ], name = "flag-bg", x = 0, y = 53 }
    , { category = Flags, char = "🇧🇭", keywords = [ "flag bh", "flag bahrain", "bh", "flag", "nation", "country", "banner" ], name = "flag-bh", x = 0, y = 54 }
    , { category = Flags, char = "🇧🇮", keywords = [ "flag bi", "flag burundi", "bi", "flag", "nation", "country", "banner" ], name = "flag-bi", x = 0, y = 55 }
    , { category = Flags, char = "🇧🇯", keywords = [ "flag bj", "flag benin", "bj", "flag", "nation", "country", "banner" ], name = "flag-bj", x = 0, y = 56 }
    , { category = Flags, char = "🇧🇱", keywords = [ "flag bl", "flag st barthelemy", "saint", "barthélemy", "flag", "nation", "country", "banner" ], name = "flag-bl", x = 0, y = 57 }
    , { category = Flags, char = "🇧🇲", keywords = [ "flag bm", "flag bermuda", "bm", "flag", "nation", "country", "banner" ], name = "flag-bm", x = 1, y = 0 }
    , { category = Flags, char = "🇧🇳", keywords = [ "flag bn", "flag brunei", "bn", "darussalam", "flag", "nation", "country", "banner" ], name = "flag-bn", x = 1, y = 1 }
    , { category = Flags, char = "🇧🇴", keywords = [ "flag bo", "flag bolivia", "bo", "flag", "nation", "country", "banner" ], name = "flag-bo", x = 1, y = 2 }
    , { category = Flags, char = "🇧🇶", keywords = [ "flag bq", "flag caribbean netherlands", "bonaire", "flag", "nation", "country", "banner" ], name = "flag-bq", x = 1, y = 3 }
    , { category = Flags, char = "🇧🇷", keywords = [ "flag br", "flag brazil", "br", "flag", "nation", "country", "banner" ], name = "flag-br", x = 1, y = 4 }
    , { category = Flags, char = "🇧🇸", keywords = [ "flag bs", "flag bahamas", "bs", "flag", "nation", "country", "banner" ], name = "flag-bs", x = 1, y = 5 }
    , { category = Flags, char = "🇧🇹", keywords = [ "flag bt", "flag bhutan", "bt", "flag", "nation", "country", "banner" ], name = "flag-bt", x = 1, y = 6 }
    , { category = Flags, char = "🇧🇻", keywords = [ "flag bv", "flag bouvet island" ], name = "flag-bv", x = 1, y = 7 }
    , { category = Flags, char = "🇧🇼", keywords = [ "flag bw", "flag botswana", "bw", "flag", "nation", "country", "banner" ], name = "flag-bw", x = 1, y = 8 }
    , { category = Flags, char = "🇧🇾", keywords = [ "flag by", "flag belarus", "by", "flag", "nation", "country", "banner" ], name = "flag-by", x = 1, y = 9 }
    , { category = Flags, char = "🇧🇿", keywords = [ "flag bz", "flag belize", "bz", "flag", "nation", "country", "banner" ], name = "flag-bz", x = 1, y = 10 }
    , { category = Flags, char = "🇨🇦", keywords = [ "flag ca", "flag canada", "ca", "flag", "nation", "country", "banner" ], name = "flag-ca", x = 1, y = 11 }
    , { category = Flags, char = "🇨🇨", keywords = [ "flag cc", "flag cocos islands", "cocos", "keeling", "islands", "flag", "nation", "country", "banner" ], name = "flag-cc", x = 1, y = 12 }
    , { category = Flags, char = "🇨🇩", keywords = [ "flag cd", "flag congo kinshasa", "congo", "democratic", "republic", "flag", "nation", "country", "banner" ], name = "flag-cd", x = 1, y = 13 }
    , { category = Flags, char = "🇨🇫", keywords = [ "flag cf", "flag central african republic", "central", "african", "republic", "flag", "nation", "country", "banner" ], name = "flag-cf", x = 1, y = 14 }
    , { category = Flags, char = "🇨🇬", keywords = [ "flag cg", "flag congo brazzaville", "congo", "flag", "nation", "country", "banner" ], name = "flag-cg", x = 1, y = 15 }
    , { category = Flags, char = "🇨🇭", keywords = [ "flag ch", "flag switzerland", "ch", "flag", "nation", "country", "banner" ], name = "flag-ch", x = 1, y = 16 }
    , { category = Flags, char = "🇨🇮", keywords = [ "flag ci", "flag cote d ivoire", "ivory", "coast", "flag", "nation", "country", "banner" ], name = "flag-ci", x = 1, y = 17 }
    , { category = Flags, char = "🇨🇰", keywords = [ "flag ck", "flag cook islands", "cook", "islands", "flag", "nation", "country", "banner" ], name = "flag-ck", x = 1, y = 18 }
    , { category = Flags, char = "🇨🇱", keywords = [ "flag cl", "flag chile", "flag", "nation", "country", "banner" ], name = "flag-cl", x = 1, y = 19 }
    , { category = Flags, char = "🇨🇲", keywords = [ "flag cm", "flag cameroon", "cm", "flag", "nation", "country", "banner" ], name = "flag-cm", x = 1, y = 20 }
    , { category = Flags, char = "🇨🇳", keywords = [ "cn", "flag china", "china", "chinese", "prc", "flag", "country", "nation", "banner" ], name = "cn", x = 1, y = 21 }
    , { category = Flags, char = "🇨🇴", keywords = [ "flag co", "flag colombia", "co", "flag", "nation", "country", "banner" ], name = "flag-co", x = 1, y = 22 }
    , { category = Flags, char = "🇨🇵", keywords = [ "flag cp", "flag clipperton island" ], name = "flag-cp", x = 1, y = 23 }
    , { category = Flags, char = "🇨🇷", keywords = [ "flag cr", "flag costa rica", "costa", "rica", "flag", "nation", "country", "banner" ], name = "flag-cr", x = 1, y = 24 }
    , { category = Flags, char = "🇨🇺", keywords = [ "flag cu", "flag cuba", "cu", "flag", "nation", "country", "banner" ], name = "flag-cu", x = 1, y = 25 }
    , { category = Flags, char = "🇨🇻", keywords = [ "flag cv", "flag cape verde", "cabo", "verde", "flag", "nation", "country", "banner" ], name = "flag-cv", x = 1, y = 26 }
    , { category = Flags, char = "🇨🇼", keywords = [ "flag cw", "flag curacao", "curaçao", "flag", "nation", "country", "banner" ], name = "flag-cw", x = 1, y = 27 }
    , { category = Flags, char = "🇨🇽", keywords = [ "flag cx", "flag christmas island", "christmas", "island", "flag", "nation", "country", "banner" ], name = "flag-cx", x = 1, y = 28 }
    , { category = Flags, char = "🇨🇾", keywords = [ "flag cy", "flag cyprus", "cy", "flag", "nation", "country", "banner" ], name = "flag-cy", x = 1, y = 29 }
    , { category = Flags, char = "🇨🇿", keywords = [ "flag cz", "flag czechia", "cz", "flag", "nation", "country", "banner" ], name = "flag-cz", x = 1, y = 30 }
    , { category = Flags, char = "🇩🇪", keywords = [ "de", "flag germany", "german", "nation", "flag", "country", "banner" ], name = "de", x = 1, y = 31 }
    , { category = Flags, char = "🇩🇬", keywords = [ "flag dg", "flag diego garcia" ], name = "flag-dg", x = 1, y = 32 }
    , { category = Flags, char = "🇩🇯", keywords = [ "flag dj", "flag djibouti", "dj", "flag", "nation", "country", "banner" ], name = "flag-dj", x = 1, y = 33 }
    , { category = Flags, char = "🇩🇰", keywords = [ "flag dk", "flag denmark", "dk", "flag", "nation", "country", "banner" ], name = "flag-dk", x = 1, y = 34 }
    , { category = Flags, char = "🇩🇲", keywords = [ "flag dm", "flag dominica", "dm", "flag", "nation", "country", "banner" ], name = "flag-dm", x = 1, y = 35 }
    , { category = Flags, char = "🇩🇴", keywords = [ "flag do", "flag dominican republic", "dominican", "republic", "flag", "nation", "country", "banner" ], name = "flag-do", x = 1, y = 36 }
    , { category = Flags, char = "🇩🇿", keywords = [ "flag dz", "flag algeria", "dz", "flag", "nation", "country", "banner" ], name = "flag-dz", x = 1, y = 37 }
    , { category = Flags, char = "🇪🇦", keywords = [ "flag ea", "flag ceuta melilla" ], name = "flag-ea", x = 1, y = 38 }
    , { category = Flags, char = "🇪🇨", keywords = [ "flag ec", "flag ecuador", "ec", "flag", "nation", "country", "banner" ], name = "flag-ec", x = 1, y = 39 }
    , { category = Flags, char = "🇪🇪", keywords = [ "flag ee", "flag estonia", "ee", "flag", "nation", "country", "banner" ], name = "flag-ee", x = 1, y = 40 }
    , { category = Flags, char = "🇪🇬", keywords = [ "flag eg", "flag egypt", "eg", "flag", "nation", "country", "banner" ], name = "flag-eg", x = 1, y = 41 }
    , { category = Flags, char = "🇪🇭", keywords = [ "flag eh", "flag western sahara", "western", "sahara", "flag", "nation", "country", "banner" ], name = "flag-eh", x = 1, y = 42 }
    , { category = Flags, char = "🇪🇷", keywords = [ "flag er", "flag eritrea", "er", "flag", "nation", "country", "banner" ], name = "flag-er", x = 1, y = 43 }
    , { category = Flags, char = "🇪🇸", keywords = [ "es", "flag spain", "spain", "flag", "nation", "country", "banner" ], name = "es", x = 1, y = 44 }
    , { category = Flags, char = "🇪🇹", keywords = [ "flag et", "flag ethiopia", "et", "flag", "nation", "country", "banner" ], name = "flag-et", x = 1, y = 45 }
    , { category = Flags, char = "🇪🇺", keywords = [ "flag eu", "flag european union", "european", "union", "flag", "banner" ], name = "flag-eu", x = 1, y = 46 }
    , { category = Flags, char = "🇫🇮", keywords = [ "flag fi", "flag finland", "fi", "flag", "nation", "country", "banner" ], name = "flag-fi", x = 1, y = 47 }
    , { category = Flags, char = "🇫🇯", keywords = [ "flag fj", "flag fiji", "fj", "flag", "nation", "country", "banner" ], name = "flag-fj", x = 1, y = 48 }
    , { category = Flags, char = "🇫🇰", keywords = [ "flag fk", "flag falkland islands", "falkland", "islands", "malvinas", "flag", "nation", "country", "banner" ], name = "flag-fk", x = 1, y = 49 }
    , { category = Flags, char = "🇫🇲", keywords = [ "flag fm", "flag micronesia", "micronesia,", "federated", "states", "flag", "nation", "country", "banner" ], name = "flag-fm", x = 1, y = 50 }
    , { category = Flags, char = "🇫🇴", keywords = [ "flag fo", "flag faroe islands", "faroe", "islands", "flag", "nation", "country", "banner" ], name = "flag-fo", x = 1, y = 51 }
    , { category = Flags, char = "🇫🇷", keywords = [ "fr", "flag france", "banner", "flag", "nation", "france", "french", "country" ], name = "fr", x = 1, y = 52 }
    , { category = Flags, char = "🇬🇦", keywords = [ "flag ga", "flag gabon", "ga", "flag", "nation", "country", "banner" ], name = "flag-ga", x = 1, y = 53 }
    , { category = Flags, char = "🇬🇧", keywords = [ "gb", "flag united kingdom", "united", "kingdom", "great", "britain", "northern", "ireland", "flag", "nation", "country", "banner", "british", "UK", "english", "england", "union jack" ], name = "gb", x = 1, y = 54 }
    , { category = Flags, char = "🇬🇩", keywords = [ "flag gd", "flag grenada", "gd", "flag", "nation", "country", "banner" ], name = "flag-gd", x = 1, y = 55 }
    , { category = Flags, char = "🇬🇪", keywords = [ "flag ge", "flag georgia", "ge", "flag", "nation", "country", "banner" ], name = "flag-ge", x = 1, y = 56 }
    , { category = Flags, char = "🇬🇫", keywords = [ "flag gf", "flag french guiana", "french", "guiana", "flag", "nation", "country", "banner" ], name = "flag-gf", x = 1, y = 57 }
    , { category = Flags, char = "🇬🇬", keywords = [ "flag gg", "flag guernsey", "gg", "flag", "nation", "country", "banner" ], name = "flag-gg", x = 2, y = 0 }
    , { category = Flags, char = "🇬🇭", keywords = [ "flag gh", "flag ghana", "gh", "flag", "nation", "country", "banner" ], name = "flag-gh", x = 2, y = 1 }
    , { category = Flags, char = "🇬🇮", keywords = [ "flag gi", "flag gibraltar", "gi", "flag", "nation", "country", "banner" ], name = "flag-gi", x = 2, y = 2 }
    , { category = Flags, char = "🇬🇱", keywords = [ "flag gl", "flag greenland", "gl", "flag", "nation", "country", "banner" ], name = "flag-gl", x = 2, y = 3 }
    , { category = Flags, char = "🇬🇲", keywords = [ "flag gm", "flag gambia", "gm", "flag", "nation", "country", "banner" ], name = "flag-gm", x = 2, y = 4 }
    , { category = Flags, char = "🇬🇳", keywords = [ "flag gn", "flag guinea", "gn", "flag", "nation", "country", "banner" ], name = "flag-gn", x = 2, y = 5 }
    , { category = Flags, char = "🇬🇵", keywords = [ "flag gp", "flag guadeloupe", "gp", "flag", "nation", "country", "banner" ], name = "flag-gp", x = 2, y = 6 }
    , { category = Flags, char = "🇬🇶", keywords = [ "flag gq", "flag equatorial guinea", "equatorial", "gn", "flag", "nation", "country", "banner" ], name = "flag-gq", x = 2, y = 7 }
    , { category = Flags, char = "🇬🇷", keywords = [ "flag gr", "flag greece", "gr", "flag", "nation", "country", "banner" ], name = "flag-gr", x = 2, y = 8 }
    , { category = Flags, char = "🇬🇸", keywords = [ "flag gs", "flag south georgia south sandwich islands", "south", "georgia", "sandwich", "islands", "flag", "nation", "country", "banner" ], name = "flag-gs", x = 2, y = 9 }
    , { category = Flags, char = "🇬🇹", keywords = [ "flag gt", "flag guatemala", "gt", "flag", "nation", "country", "banner" ], name = "flag-gt", x = 2, y = 10 }
    , { category = Flags, char = "🇬🇺", keywords = [ "flag gu", "flag guam", "gu", "flag", "nation", "country", "banner" ], name = "flag-gu", x = 2, y = 11 }
    , { category = Flags, char = "🇬🇼", keywords = [ "flag gw", "flag guinea bissau", "gw", "bissau", "flag", "nation", "country", "banner" ], name = "flag-gw", x = 2, y = 12 }
    , { category = Flags, char = "🇬🇾", keywords = [ "flag gy", "flag guyana", "gy", "flag", "nation", "country", "banner" ], name = "flag-gy", x = 2, y = 13 }
    , { category = Flags, char = "🇭🇰", keywords = [ "flag hk", "flag hong kong sar china", "hong", "kong", "flag", "nation", "country", "banner" ], name = "flag-hk", x = 2, y = 14 }
    , { category = Flags, char = "🇭🇲", keywords = [ "flag hm", "flag heard mcdonald islands" ], name = "flag-hm", x = 2, y = 15 }
    , { category = Flags, char = "🇭🇳", keywords = [ "flag hn", "flag honduras", "hn", "flag", "nation", "country", "banner" ], name = "flag-hn", x = 2, y = 16 }
    , { category = Flags, char = "🇭🇷", keywords = [ "flag hr", "flag croatia", "hr", "flag", "nation", "country", "banner" ], name = "flag-hr", x = 2, y = 17 }
    , { category = Flags, char = "🇭🇹", keywords = [ "flag ht", "flag haiti", "ht", "flag", "nation", "country", "banner" ], name = "flag-ht", x = 2, y = 18 }
    , { category = Flags, char = "🇭🇺", keywords = [ "flag hu", "flag hungary", "hu", "flag", "nation", "country", "banner" ], name = "flag-hu", x = 2, y = 19 }
    , { category = Flags, char = "🇮🇨", keywords = [ "flag ic", "flag canary islands", "canary", "islands", "flag", "nation", "country", "banner" ], name = "flag-ic", x = 2, y = 20 }
    , { category = Flags, char = "🇮🇩", keywords = [ "flag id", "flag indonesia", "flag", "nation", "country", "banner" ], name = "flag-id", x = 2, y = 21 }
    , { category = Flags, char = "🇮🇪", keywords = [ "flag ie", "flag ireland", "ie", "flag", "nation", "country", "banner" ], name = "flag-ie", x = 2, y = 22 }
    , { category = Flags, char = "🇮🇱", keywords = [ "flag il", "flag israel", "il", "flag", "nation", "country", "banner" ], name = "flag-il", x = 2, y = 23 }
    , { category = Flags, char = "🇮🇲", keywords = [ "flag im", "flag isle of man", "isle", "man", "flag", "nation", "country", "banner" ], name = "flag-im", x = 2, y = 24 }
    , { category = Flags, char = "🇮🇳", keywords = [ "flag in", "flag india", "in", "flag", "nation", "country", "banner" ], name = "flag-in", x = 2, y = 25 }
    , { category = Flags, char = "🇮🇴", keywords = [ "flag io", "flag british indian ocean territory", "british", "indian", "ocean", "territory", "flag", "nation", "country", "banner" ], name = "flag-io", x = 2, y = 26 }
    , { category = Flags, char = "🇮🇶", keywords = [ "flag iq", "flag iraq", "iq", "flag", "nation", "country", "banner" ], name = "flag-iq", x = 2, y = 27 }
    , { category = Flags, char = "🇮🇷", keywords = [ "flag ir", "flag iran", "iran,", "islamic", "republic", "flag", "nation", "country", "banner" ], name = "flag-ir", x = 2, y = 28 }
    , { category = Flags, char = "🇮🇸", keywords = [ "flag is", "flag iceland", "is", "flag", "nation", "country", "banner" ], name = "flag-is", x = 2, y = 29 }
    , { category = Flags, char = "🇮🇹", keywords = [ "it", "flag italy", "italy", "flag", "nation", "country", "banner" ], name = "it", x = 2, y = 30 }
    , { category = Flags, char = "🇯🇪", keywords = [ "flag je", "flag jersey", "je", "flag", "nation", "country", "banner" ], name = "flag-je", x = 2, y = 31 }
    , { category = Flags, char = "🇯🇲", keywords = [ "flag jm", "flag jamaica", "jm", "flag", "nation", "country", "banner" ], name = "flag-jm", x = 2, y = 32 }
    , { category = Flags, char = "🇯🇴", keywords = [ "flag jo", "flag jordan", "jo", "flag", "nation", "country", "banner" ], name = "flag-jo", x = 2, y = 33 }
    , { category = Flags, char = "🇯🇵", keywords = [ "jp", "flag japan", "japanese", "nation", "flag", "country", "banner" ], name = "jp", x = 2, y = 34 }
    , { category = Flags, char = "🇰🇪", keywords = [ "flag ke", "flag kenya", "ke", "flag", "nation", "country", "banner" ], name = "flag-ke", x = 2, y = 35 }
    , { category = Flags, char = "🇰🇬", keywords = [ "flag kg", "flag kyrgyzstan", "kg", "flag", "nation", "country", "banner" ], name = "flag-kg", x = 2, y = 36 }
    , { category = Flags, char = "🇰🇭", keywords = [ "flag kh", "flag cambodia", "kh", "flag", "nation", "country", "banner" ], name = "flag-kh", x = 2, y = 37 }
    , { category = Flags, char = "🇰🇮", keywords = [ "flag ki", "flag kiribati", "ki", "flag", "nation", "country", "banner" ], name = "flag-ki", x = 2, y = 38 }
    , { category = Flags, char = "🇰🇲", keywords = [ "flag km", "flag comoros", "km", "flag", "nation", "country", "banner" ], name = "flag-km", x = 2, y = 39 }
    , { category = Flags, char = "🇰🇳", keywords = [ "flag kn", "flag st kitts nevis", "saint", "kitts", "nevis", "flag", "nation", "country", "banner" ], name = "flag-kn", x = 2, y = 40 }
    , { category = Flags, char = "🇰🇵", keywords = [ "flag kp", "flag north korea", "north", "korea", "nation", "flag", "country", "banner" ], name = "flag-kp", x = 2, y = 41 }
    , { category = Flags, char = "🇰🇷", keywords = [ "kr", "flag south korea", "south", "korea", "nation", "flag", "country", "banner" ], name = "kr", x = 2, y = 42 }
    , { category = Flags, char = "🇰🇼", keywords = [ "flag kw", "flag kuwait", "kw", "flag", "nation", "country", "banner" ], name = "flag-kw", x = 2, y = 43 }
    , { category = Flags, char = "🇰🇾", keywords = [ "flag ky", "flag cayman islands", "cayman", "islands", "flag", "nation", "country", "banner" ], name = "flag-ky", x = 2, y = 44 }
    , { category = Flags, char = "🇰🇿", keywords = [ "flag kz", "flag kazakhstan", "kz", "flag", "nation", "country", "banner" ], name = "flag-kz", x = 2, y = 45 }
    , { category = Flags, char = "🇱🇦", keywords = [ "flag la", "flag laos", "lao", "democratic", "republic", "flag", "nation", "country", "banner" ], name = "flag-la", x = 2, y = 46 }
    , { category = Flags, char = "🇱🇧", keywords = [ "flag lb", "flag lebanon", "lb", "flag", "nation", "country", "banner" ], name = "flag-lb", x = 2, y = 47 }
    , { category = Flags, char = "🇱🇨", keywords = [ "flag lc", "flag st lucia", "saint", "lucia", "flag", "nation", "country", "banner" ], name = "flag-lc", x = 2, y = 48 }
    , { category = Flags, char = "🇱🇮", keywords = [ "flag li", "flag liechtenstein", "li", "flag", "nation", "country", "banner" ], name = "flag-li", x = 2, y = 49 }
    , { category = Flags, char = "🇱🇰", keywords = [ "flag lk", "flag sri lanka", "sri", "lanka", "flag", "nation", "country", "banner" ], name = "flag-lk", x = 2, y = 50 }
    , { category = Flags, char = "🇱🇷", keywords = [ "flag lr", "flag liberia", "lr", "flag", "nation", "country", "banner" ], name = "flag-lr", x = 2, y = 51 }
    , { category = Flags, char = "🇱🇸", keywords = [ "flag ls", "flag lesotho", "ls", "flag", "nation", "country", "banner" ], name = "flag-ls", x = 2, y = 52 }
    , { category = Flags, char = "🇱🇹", keywords = [ "flag lt", "flag lithuania", "lt", "flag", "nation", "country", "banner" ], name = "flag-lt", x = 2, y = 53 }
    , { category = Flags, char = "🇱🇺", keywords = [ "flag lu", "flag luxembourg", "lu", "flag", "nation", "country", "banner" ], name = "flag-lu", x = 2, y = 54 }
    , { category = Flags, char = "🇱🇻", keywords = [ "flag lv", "flag latvia", "lv", "flag", "nation", "country", "banner" ], name = "flag-lv", x = 2, y = 55 }
    , { category = Flags, char = "🇱🇾", keywords = [ "flag ly", "flag libya", "ly", "flag", "nation", "country", "banner" ], name = "flag-ly", x = 2, y = 56 }
    , { category = Flags, char = "🇲🇦", keywords = [ "flag ma", "flag morocco", "ma", "flag", "nation", "country", "banner" ], name = "flag-ma", x = 2, y = 57 }
    , { category = Flags, char = "🇲🇨", keywords = [ "flag mc", "flag monaco", "mc", "flag", "nation", "country", "banner" ], name = "flag-mc", x = 3, y = 0 }
    , { category = Flags, char = "🇲🇩", keywords = [ "flag md", "flag moldova", "moldova,", "republic", "flag", "nation", "country", "banner" ], name = "flag-md", x = 3, y = 1 }
    , { category = Flags, char = "🇲🇪", keywords = [ "flag me", "flag montenegro", "me", "flag", "nation", "country", "banner" ], name = "flag-me", x = 3, y = 2 }
    , { category = Flags, char = "🇲🇫", keywords = [ "flag mf", "flag st martin" ], name = "flag-mf", x = 3, y = 3 }
    , { category = Flags, char = "🇲🇬", keywords = [ "flag mg", "flag madagascar", "mg", "flag", "nation", "country", "banner" ], name = "flag-mg", x = 3, y = 4 }
    , { category = Flags, char = "🇲🇭", keywords = [ "flag mh", "flag marshall islands", "marshall", "islands", "flag", "nation", "country", "banner" ], name = "flag-mh", x = 3, y = 5 }
    , { category = Flags, char = "🇲🇰", keywords = [ "flag mk", "flag north macedonia", "macedonia,", "flag", "nation", "country", "banner" ], name = "flag-mk", x = 3, y = 6 }
    , { category = Flags, char = "🇲🇱", keywords = [ "flag ml", "flag mali", "ml", "flag", "nation", "country", "banner" ], name = "flag-ml", x = 3, y = 7 }
    , { category = Flags, char = "🇲🇲", keywords = [ "flag mm", "flag myanmar", "mm", "flag", "nation", "country", "banner" ], name = "flag-mm", x = 3, y = 8 }
    , { category = Flags, char = "🇲🇳", keywords = [ "flag mn", "flag mongolia", "mn", "flag", "nation", "country", "banner" ], name = "flag-mn", x = 3, y = 9 }
    , { category = Flags, char = "🇲🇴", keywords = [ "flag mo", "flag macao sar china", "macao", "flag", "nation", "country", "banner" ], name = "flag-mo", x = 3, y = 10 }
    , { category = Flags, char = "🇲🇵", keywords = [ "flag mp", "flag northern mariana islands", "northern", "mariana", "islands", "flag", "nation", "country", "banner" ], name = "flag-mp", x = 3, y = 11 }
    , { category = Flags, char = "🇲🇶", keywords = [ "flag mq", "flag martinique", "mq", "flag", "nation", "country", "banner" ], name = "flag-mq", x = 3, y = 12 }
    , { category = Flags, char = "🇲🇷", keywords = [ "flag mr", "flag mauritania", "mr", "flag", "nation", "country", "banner" ], name = "flag-mr", x = 3, y = 13 }
    , { category = Flags, char = "🇲🇸", keywords = [ "flag ms", "flag montserrat", "ms", "flag", "nation", "country", "banner" ], name = "flag-ms", x = 3, y = 14 }
    , { category = Flags, char = "🇲🇹", keywords = [ "flag mt", "flag malta", "mt", "flag", "nation", "country", "banner" ], name = "flag-mt", x = 3, y = 15 }
    , { category = Flags, char = "🇲🇺", keywords = [ "flag mu", "flag mauritius", "mu", "flag", "nation", "country", "banner" ], name = "flag-mu", x = 3, y = 16 }
    , { category = Flags, char = "🇲🇻", keywords = [ "flag mv", "flag maldives", "mv", "flag", "nation", "country", "banner" ], name = "flag-mv", x = 3, y = 17 }
    , { category = Flags, char = "🇲🇼", keywords = [ "flag mw", "flag malawi", "mw", "flag", "nation", "country", "banner" ], name = "flag-mw", x = 3, y = 18 }
    , { category = Flags, char = "🇲🇽", keywords = [ "flag mx", "flag mexico", "mx", "flag", "nation", "country", "banner" ], name = "flag-mx", x = 3, y = 19 }
    , { category = Flags, char = "🇲🇾", keywords = [ "flag my", "flag malaysia", "my", "flag", "nation", "country", "banner" ], name = "flag-my", x = 3, y = 20 }
    , { category = Flags, char = "🇲🇿", keywords = [ "flag mz", "flag mozambique", "mz", "flag", "nation", "country", "banner" ], name = "flag-mz", x = 3, y = 21 }
    , { category = Flags, char = "🇳🇦", keywords = [ "flag na", "flag namibia", "na", "flag", "nation", "country", "banner" ], name = "flag-na", x = 3, y = 22 }
    , { category = Flags, char = "🇳🇨", keywords = [ "flag nc", "flag new caledonia", "new", "caledonia", "flag", "nation", "country", "banner" ], name = "flag-nc", x = 3, y = 23 }
    , { category = Flags, char = "🇳🇪", keywords = [ "flag ne", "flag niger", "ne", "flag", "nation", "country", "banner" ], name = "flag-ne", x = 3, y = 24 }
    , { category = Flags, char = "🇳🇫", keywords = [ "flag nf", "flag norfolk island", "norfolk", "island", "flag", "nation", "country", "banner" ], name = "flag-nf", x = 3, y = 25 }
    , { category = Flags, char = "🇳🇬", keywords = [ "flag ng", "flag nigeria", "flag", "nation", "country", "banner" ], name = "flag-ng", x = 3, y = 26 }
    , { category = Flags, char = "🇳🇮", keywords = [ "flag ni", "flag nicaragua", "ni", "flag", "nation", "country", "banner" ], name = "flag-ni", x = 3, y = 27 }
    , { category = Flags, char = "🇳🇱", keywords = [ "flag nl", "flag netherlands", "nl", "flag", "nation", "country", "banner" ], name = "flag-nl", x = 3, y = 28 }
    , { category = Flags, char = "🇳🇴", keywords = [ "flag no", "flag norway", "no", "flag", "nation", "country", "banner" ], name = "flag-no", x = 3, y = 29 }
    , { category = Flags, char = "🇳🇵", keywords = [ "flag np", "flag nepal", "np", "flag", "nation", "country", "banner" ], name = "flag-np", x = 3, y = 30 }
    , { category = Flags, char = "🇳🇷", keywords = [ "flag nr", "flag nauru", "nr", "flag", "nation", "country", "banner" ], name = "flag-nr", x = 3, y = 31 }
    , { category = Flags, char = "🇳🇺", keywords = [ "flag nu", "flag niue", "nu", "flag", "nation", "country", "banner" ], name = "flag-nu", x = 3, y = 32 }
    , { category = Flags, char = "🇳🇿", keywords = [ "flag nz", "flag new zealand", "new", "zealand", "flag", "nation", "country", "banner" ], name = "flag-nz", x = 3, y = 33 }
    , { category = Flags, char = "🇴🇲", keywords = [ "flag om", "flag oman", "om symbol", "flag", "nation", "country", "banner" ], name = "flag-om", x = 3, y = 34 }
    , { category = Flags, char = "🇵🇦", keywords = [ "flag pa", "flag panama", "pa", "flag", "nation", "country", "banner" ], name = "flag-pa", x = 3, y = 35 }
    , { category = Flags, char = "🇵🇪", keywords = [ "flag pe", "flag peru", "pe", "flag", "nation", "country", "banner" ], name = "flag-pe", x = 3, y = 36 }
    , { category = Flags, char = "🇵🇫", keywords = [ "flag pf", "flag french polynesia", "french", "polynesia", "flag", "nation", "country", "banner" ], name = "flag-pf", x = 3, y = 37 }
    , { category = Flags, char = "🇵🇬", keywords = [ "flag pg", "flag papua new guinea", "papua", "new", "guinea", "flag", "nation", "country", "banner" ], name = "flag-pg", x = 3, y = 38 }
    , { category = Flags, char = "🇵🇭", keywords = [ "flag ph", "flag philippines", "ph", "flag", "nation", "country", "banner" ], name = "flag-ph", x = 3, y = 39 }
    , { category = Flags, char = "🇵🇰", keywords = [ "flag pk", "flag pakistan", "pk", "flag", "nation", "country", "banner" ], name = "flag-pk", x = 3, y = 40 }
    , { category = Flags, char = "🇵🇱", keywords = [ "flag pl", "flag poland", "pl", "flag", "nation", "country", "banner" ], name = "flag-pl", x = 3, y = 41 }
    , { category = Flags, char = "🇵🇲", keywords = [ "flag pm", "flag st pierre miquelon", "saint", "pierre", "miquelon", "flag", "nation", "country", "banner" ], name = "flag-pm", x = 3, y = 42 }
    , { category = Flags, char = "🇵🇳", keywords = [ "flag pn", "flag pitcairn islands", "pitcairn", "flag", "nation", "country", "banner" ], name = "flag-pn", x = 3, y = 43 }
    , { category = Flags, char = "🇵🇷", keywords = [ "flag pr", "flag puerto rico", "puerto", "rico", "flag", "nation", "country", "banner" ], name = "flag-pr", x = 3, y = 44 }
    , { category = Flags, char = "🇵🇸", keywords = [ "flag ps", "flag palestinian territories", "palestine", "palestinian", "territories", "flag", "nation", "country", "banner" ], name = "flag-ps", x = 3, y = 45 }
    , { category = Flags, char = "🇵🇹", keywords = [ "flag pt", "flag portugal", "pt", "flag", "nation", "country", "banner" ], name = "flag-pt", x = 3, y = 46 }
    , { category = Flags, char = "🇵🇼", keywords = [ "flag pw", "flag palau", "pw", "flag", "nation", "country", "banner" ], name = "flag-pw", x = 3, y = 47 }
    , { category = Flags, char = "🇵🇾", keywords = [ "flag py", "flag paraguay", "py", "flag", "nation", "country", "banner" ], name = "flag-py", x = 3, y = 48 }
    , { category = Flags, char = "🇶🇦", keywords = [ "flag qa", "flag qatar", "qa", "flag", "nation", "country", "banner" ], name = "flag-qa", x = 3, y = 49 }
    , { category = Flags, char = "🇷🇪", keywords = [ "flag re", "flag reunion", "réunion", "flag", "nation", "country", "banner" ], name = "flag-re", x = 3, y = 50 }
    , { category = Flags, char = "🇷🇴", keywords = [ "flag ro", "flag romania", "ro", "flag", "nation", "country", "banner" ], name = "flag-ro", x = 3, y = 51 }
    , { category = Flags, char = "🇷🇸", keywords = [ "flag rs", "flag serbia", "rs", "flag", "nation", "country", "banner" ], name = "flag-rs", x = 3, y = 52 }
    , { category = Flags, char = "🇷🇺", keywords = [ "ru", "flag russia", "russian", "federation", "flag", "nation", "country", "banner" ], name = "ru", x = 3, y = 53 }
    , { category = Flags, char = "🇷🇼", keywords = [ "flag rw", "flag rwanda", "rw", "flag", "nation", "country", "banner" ], name = "flag-rw", x = 3, y = 54 }
    , { category = Flags, char = "🇸🇦", keywords = [ "flag sa", "flag saudi arabia", "flag", "nation", "country", "banner" ], name = "flag-sa", x = 3, y = 55 }
    , { category = Flags, char = "🇸🇧", keywords = [ "flag sb", "flag solomon islands", "solomon", "islands", "flag", "nation", "country", "banner" ], name = "flag-sb", x = 3, y = 56 }
    , { category = Flags, char = "🇸🇨", keywords = [ "flag sc", "flag seychelles", "sc", "flag", "nation", "country", "banner" ], name = "flag-sc", x = 3, y = 57 }
    , { category = Flags, char = "🇸🇩", keywords = [ "flag sd", "flag sudan", "sd", "flag", "nation", "country", "banner" ], name = "flag-sd", x = 4, y = 0 }
    , { category = Flags, char = "🇸🇪", keywords = [ "flag se", "flag sweden", "se", "flag", "nation", "country", "banner" ], name = "flag-se", x = 4, y = 1 }
    , { category = Flags, char = "🇸🇬", keywords = [ "flag sg", "flag singapore", "sg", "flag", "nation", "country", "banner" ], name = "flag-sg", x = 4, y = 2 }
    , { category = Flags, char = "🇸🇭", keywords = [ "flag sh", "flag st helena", "saint", "helena", "ascension", "tristan", "cunha", "flag", "nation", "country", "banner" ], name = "flag-sh", x = 4, y = 3 }
    , { category = Flags, char = "🇸🇮", keywords = [ "flag si", "flag slovenia", "si", "flag", "nation", "country", "banner" ], name = "flag-si", x = 4, y = 4 }
    , { category = Flags, char = "🇸🇯", keywords = [ "flag sj", "flag svalbard jan mayen" ], name = "flag-sj", x = 4, y = 5 }
    , { category = Flags, char = "🇸🇰", keywords = [ "flag sk", "flag slovakia", "sk", "flag", "nation", "country", "banner" ], name = "flag-sk", x = 4, y = 6 }
    , { category = Flags, char = "🇸🇱", keywords = [ "flag sl", "flag sierra leone", "sierra", "leone", "flag", "nation", "country", "banner" ], name = "flag-sl", x = 4, y = 7 }
    , { category = Flags, char = "🇸🇲", keywords = [ "flag sm", "flag san marino", "san", "marino", "flag", "nation", "country", "banner" ], name = "flag-sm", x = 4, y = 8 }
    , { category = Flags, char = "🇸🇳", keywords = [ "flag sn", "flag senegal", "sn", "flag", "nation", "country", "banner" ], name = "flag-sn", x = 4, y = 9 }
    , { category = Flags, char = "🇸🇴", keywords = [ "flag so", "flag somalia", "so", "flag", "nation", "country", "banner" ], name = "flag-so", x = 4, y = 10 }
    , { category = Flags, char = "🇸🇷", keywords = [ "flag sr", "flag suriname", "sr", "flag", "nation", "country", "banner" ], name = "flag-sr", x = 4, y = 11 }
    , { category = Flags, char = "🇸🇸", keywords = [ "flag ss", "flag south sudan", "south", "sd", "flag", "nation", "country", "banner" ], name = "flag-ss", x = 4, y = 12 }
    , { category = Flags, char = "🇸🇹", keywords = [ "flag st", "flag sao tome principe", "sao", "tome", "principe", "flag", "nation", "country", "banner" ], name = "flag-st", x = 4, y = 13 }
    , { category = Flags, char = "🇸🇻", keywords = [ "flag sv", "flag el salvador", "el", "salvador", "flag", "nation", "country", "banner" ], name = "flag-sv", x = 4, y = 14 }
    , { category = Flags, char = "🇸🇽", keywords = [ "flag sx", "flag sint maarten", "sint", "maarten", "dutch", "flag", "nation", "country", "banner" ], name = "flag-sx", x = 4, y = 15 }
    , { category = Flags, char = "🇸🇾", keywords = [ "flag sy", "flag syria", "syrian", "arab", "republic", "flag", "nation", "country", "banner" ], name = "flag-sy", x = 4, y = 16 }
    , { category = Flags, char = "🇸🇿", keywords = [ "flag sz", "flag eswatini", "sz", "flag", "nation", "country", "banner" ], name = "flag-sz", x = 4, y = 17 }
    , { category = Flags, char = "🇹🇦", keywords = [ "flag ta", "flag tristan da cunha" ], name = "flag-ta", x = 4, y = 18 }
    , { category = Flags, char = "🇹🇨", keywords = [ "flag tc", "flag turks caicos islands", "turks", "caicos", "islands", "flag", "nation", "country", "banner" ], name = "flag-tc", x = 4, y = 19 }
    , { category = Flags, char = "🇹🇩", keywords = [ "flag td", "flag chad", "td", "flag", "nation", "country", "banner" ], name = "flag-td", x = 4, y = 20 }
    , { category = Flags, char = "🇹🇫", keywords = [ "flag tf", "flag french southern territories", "french", "southern", "territories", "flag", "nation", "country", "banner" ], name = "flag-tf", x = 4, y = 21 }
    , { category = Flags, char = "🇹🇬", keywords = [ "flag tg", "flag togo", "tg", "flag", "nation", "country", "banner" ], name = "flag-tg", x = 4, y = 22 }
    , { category = Flags, char = "🇹🇭", keywords = [ "flag th", "flag thailand", "th", "flag", "nation", "country", "banner" ], name = "flag-th", x = 4, y = 23 }
    , { category = Flags, char = "🇹🇯", keywords = [ "flag tj", "flag tajikistan", "tj", "flag", "nation", "country", "banner" ], name = "flag-tj", x = 4, y = 24 }
    , { category = Flags, char = "🇹🇰", keywords = [ "flag tk", "flag tokelau", "tk", "flag", "nation", "country", "banner" ], name = "flag-tk", x = 4, y = 25 }
    , { category = Flags, char = "🇹🇱", keywords = [ "flag tl", "flag timor leste", "timor", "leste", "flag", "nation", "country", "banner" ], name = "flag-tl", x = 4, y = 26 }
    , { category = Flags, char = "🇹🇲", keywords = [ "flag tm", "flag turkmenistan", "flag", "nation", "country", "banner" ], name = "flag-tm", x = 4, y = 27 }
    , { category = Flags, char = "🇹🇳", keywords = [ "flag tn", "flag tunisia", "tn", "flag", "nation", "country", "banner" ], name = "flag-tn", x = 4, y = 28 }
    , { category = Flags, char = "🇹🇴", keywords = [ "flag to", "flag tonga", "to", "flag", "nation", "country", "banner" ], name = "flag-to", x = 4, y = 29 }
    , { category = Flags, char = "🇹🇷", keywords = [ "flag tr", "flag turkey", "turkey", "flag", "nation", "country", "banner" ], name = "flag-tr", x = 4, y = 30 }
    , { category = Flags, char = "🇹🇹", keywords = [ "flag tt", "flag trinidad tobago", "trinidad", "tobago", "flag", "nation", "country", "banner" ], name = "flag-tt", x = 4, y = 31 }
    , { category = Flags, char = "🇹🇻", keywords = [ "flag tv", "flag tuvalu", "flag", "nation", "country", "banner" ], name = "flag-tv", x = 4, y = 32 }
    , { category = Flags, char = "🇹🇼", keywords = [ "flag tw", "flag taiwan", "tw", "flag", "nation", "country", "banner" ], name = "flag-tw", x = 4, y = 33 }
    , { category = Flags, char = "🇹🇿", keywords = [ "flag tz", "flag tanzania", "tanzania,", "united", "republic", "flag", "nation", "country", "banner" ], name = "flag-tz", x = 4, y = 34 }
    , { category = Flags, char = "🇺🇦", keywords = [ "flag ua", "flag ukraine", "ua", "flag", "nation", "country", "banner" ], name = "flag-ua", x = 4, y = 35 }
    , { category = Flags, char = "🇺🇬", keywords = [ "flag ug", "flag uganda", "ug", "flag", "nation", "country", "banner" ], name = "flag-ug", x = 4, y = 36 }
    , { category = Flags, char = "🇺🇲", keywords = [ "flag um", "flag u s outlying islands" ], name = "flag-um", x = 4, y = 37 }
    , { category = Flags, char = "🇺🇳", keywords = [ "flag un", "flag united nations", "un", "flag", "banner" ], name = "flag-un", x = 4, y = 38 }
    , { category = Flags, char = "🇺🇸", keywords = [ "us", "flag united states", "united", "states", "america", "flag", "nation", "country", "banner" ], name = "us", x = 4, y = 39 }
    , { category = Flags, char = "🇺🇾", keywords = [ "flag uy", "flag uruguay", "uy", "flag", "nation", "country", "banner" ], name = "flag-uy", x = 4, y = 40 }
    , { category = Flags, char = "🇺🇿", keywords = [ "flag uz", "flag uzbekistan", "uz", "flag", "nation", "country", "banner" ], name = "flag-uz", x = 4, y = 41 }
    , { category = Flags, char = "🇻🇦", keywords = [ "flag va", "flag vatican city", "vatican", "city", "flag", "nation", "country", "banner" ], name = "flag-va", x = 4, y = 42 }
    , { category = Flags, char = "🇻🇨", keywords = [ "flag vc", "flag st vincent grenadines", "saint", "vincent", "grenadines", "flag", "nation", "country", "banner" ], name = "flag-vc", x = 4, y = 43 }
    , { category = Flags, char = "🇻🇪", keywords = [ "flag ve", "flag venezuela", "ve", "bolivarian", "republic", "flag", "nation", "country", "banner" ], name = "flag-ve", x = 4, y = 44 }
    , { category = Flags, char = "🇻🇬", keywords = [ "flag vg", "flag british virgin islands", "british", "virgin", "islands", "bvi", "flag", "nation", "country", "banner" ], name = "flag-vg", x = 4, y = 45 }
    , { category = Flags, char = "🇻🇮", keywords = [ "flag vi", "flag u s virgin islands", "virgin", "islands", "us", "flag", "nation", "country", "banner" ], name = "flag-vi", x = 4, y = 46 }
    , { category = Flags, char = "🇻🇳", keywords = [ "flag vn", "flag vietnam", "viet", "nam", "flag", "nation", "country", "banner" ], name = "flag-vn", x = 4, y = 47 }
    , { category = Flags, char = "🇻🇺", keywords = [ "flag vu", "flag vanuatu", "vu", "flag", "nation", "country", "banner" ], name = "flag-vu", x = 4, y = 48 }
    , { category = Flags, char = "🇼🇫", keywords = [ "flag wf", "flag wallis futuna", "wallis", "futuna", "flag", "nation", "country", "banner" ], name = "flag-wf", x = 4, y = 49 }
    , { category = Flags, char = "🇼🇸", keywords = [ "flag ws", "flag samoa", "ws", "flag", "nation", "country", "banner" ], name = "flag-ws", x = 4, y = 50 }
    , { category = Flags, char = "🇽🇰", keywords = [ "flag xk", "flag kosovo", "xk", "flag", "nation", "country", "banner" ], name = "flag-xk", x = 4, y = 51 }
    , { category = Flags, char = "🇾🇪", keywords = [ "flag ye", "flag yemen", "ye", "flag", "nation", "country", "banner" ], name = "flag-ye", x = 4, y = 52 }
    , { category = Flags, char = "🇾🇹", keywords = [ "flag yt", "flag mayotte", "yt", "flag", "nation", "country", "banner" ], name = "flag-yt", x = 4, y = 53 }
    , { category = Flags, char = "🇿🇦", keywords = [ "flag za", "flag south africa", "south", "africa", "flag", "nation", "country", "banner" ], name = "flag-za", x = 4, y = 54 }
    , { category = Flags, char = "🇿🇲", keywords = [ "flag zm", "flag zambia", "zm", "flag", "nation", "country", "banner" ], name = "flag-zm", x = 4, y = 55 }
    , { category = Flags, char = "🇿🇼", keywords = [ "flag zw", "flag zimbabwe", "zw", "flag", "nation", "country", "banner" ], name = "flag-zw", x = 4, y = 56 }
    , { category = Symbols, char = "🈁", keywords = [ "koko", "japanese here button", "blue square", "here", "katakana", "japanese", "destination" ], name = "koko", x = 4, y = 57 }
    , { category = Symbols, char = "🈂️", keywords = [ "sa", "japanese service charge button", "japanese", "blue square", "katakana" ], name = "sa", x = 5, y = 0 }
    , { category = Symbols, char = "🈚", keywords = [ "u7121", "japanese free of charge button", "nothing", "chinese", "kanji", "japanese", "orange square" ], name = "u7121", x = 5, y = 1 }
    , { category = Symbols, char = "🈯", keywords = [ "u6307", "japanese reserved button", "chinese", "point", "green square", "kanji" ], name = "u6307", x = 5, y = 2 }
    , { category = Symbols, char = "🈲", keywords = [ "u7981", "japanese prohibited button", "kanji", "japanese", "chinese", "forbidden", "limit", "restricted", "red square" ], name = "u7981", x = 5, y = 3 }
    , { category = Symbols, char = "🈳", keywords = [ "u7a7a", "japanese vacancy button", "kanji", "japanese", "chinese", "empty", "sky", "blue square" ], name = "u7a7a", x = 5, y = 4 }
    , { category = Symbols, char = "🈴", keywords = [ "u5408", "japanese passing grade button", "japanese", "chinese", "join", "kanji", "red square" ], name = "u5408", x = 5, y = 5 }
    , { category = Symbols, char = "🈵", keywords = [ "u6e80", "japanese no vacancy button", "full", "chinese", "japanese", "red square", "kanji" ], name = "u6e80", x = 5, y = 6 }
    , { category = Symbols, char = "🈶", keywords = [ "u6709", "japanese not free of charge button", "orange square", "chinese", "have", "kanji" ], name = "u6709", x = 5, y = 7 }
    , { category = Symbols, char = "🈷️", keywords = [ "u6708", "japanese monthly amount button", "chinese", "month", "moon", "japanese", "orange square", "kanji" ], name = "u6708", x = 5, y = 8 }
    , { category = Symbols, char = "🈸", keywords = [ "u7533", "japanese application button", "chinese", "japanese", "kanji", "orange square" ], name = "u7533", x = 5, y = 9 }
    , { category = Symbols, char = "🈹", keywords = [ "u5272", "japanese discount button", "cut", "divide", "chinese", "kanji", "pink square" ], name = "u5272", x = 5, y = 10 }
    , { category = Symbols, char = "🈺", keywords = [ "u55b6", "japanese open for business button", "japanese", "opening hours", "orange square" ], name = "u55b6", x = 5, y = 11 }
    , { category = Symbols, char = "🉐", keywords = [ "ideograph advantage", "japanese bargain button", "chinese", "kanji", "obtain", "get", "circle" ], name = "ideograph_advantage", x = 5, y = 12 }
    , { category = Symbols, char = "🉑", keywords = [ "accept", "japanese acceptable button", "ok", "good", "chinese", "kanji", "agree", "yes", "orange circle" ], name = "accept", x = 5, y = 13 }
    , { category = TravelAndPlaces, char = "🌀", keywords = [ "cyclone", "cyclone", "weather", "swirl", "blue", "cloud", "vortex", "spiral", "whirlpool", "spin", "tornado", "hurricane", "typhoon" ], name = "cyclone", x = 5, y = 14 }
    , { category = TravelAndPlaces, char = "🌁", keywords = [ "foggy", "foggy", "photo", "mountain" ], name = "foggy", x = 5, y = 15 }
    , { category = TravelAndPlaces, char = "🌂", keywords = [ "closed umbrella", "closed umbrella", "weather", "rain", "drizzle" ], name = "closed_umbrella", x = 5, y = 16 }
    , { category = TravelAndPlaces, char = "🌃", keywords = [ "night with stars", "night with stars", "evening", "city", "downtown" ], name = "night_with_stars", x = 5, y = 17 }
    , { category = TravelAndPlaces, char = "🌄", keywords = [ "sunrise over mountains", "sunrise over mountains", "view", "vacation", "photo" ], name = "sunrise_over_mountains", x = 5, y = 18 }
    , { category = TravelAndPlaces, char = "🌅", keywords = [ "sunrise", "sunrise", "morning", "view", "vacation", "photo" ], name = "sunrise", x = 5, y = 19 }
    , { category = TravelAndPlaces, char = "🌆", keywords = [ "city sunset", "cityscape at dusk", "photo", "evening", "sky", "buildings" ], name = "city_sunset", x = 5, y = 20 }
    , { category = TravelAndPlaces, char = "🌇", keywords = [ "city sunrise", "sunset", "photo", "good morning", "dawn" ], name = "city_sunrise", x = 5, y = 21 }
    , { category = TravelAndPlaces, char = "🌈", keywords = [ "rainbow", "rainbow", "nature", "happy", "unicorn face", "photo", "sky", "spring" ], name = "rainbow", x = 5, y = 22 }
    , { category = TravelAndPlaces, char = "🌉", keywords = [ "bridge at night", "bridge at night", "photo", "sanfrancisco" ], name = "bridge_at_night", x = 5, y = 23 }
    , { category = TravelAndPlaces, char = "🌊", keywords = [ "ocean", "water wave", "sea", "water", "wave", "nature", "tsunami", "disaster" ], name = "ocean", x = 5, y = 24 }
    , { category = TravelAndPlaces, char = "🌋", keywords = [ "volcano", "volcano", "photo", "nature", "disaster" ], name = "volcano", x = 5, y = 25 }
    , { category = TravelAndPlaces, char = "🌌", keywords = [ "milky way", "milky way", "photo", "space", "stars" ], name = "milky_way", x = 5, y = 26 }
    , { category = TravelAndPlaces, char = "🌍", keywords = [ "earth africa", "globe showing europe africa", "globe", "world", "international" ], name = "earth_africa", x = 5, y = 27 }
    , { category = TravelAndPlaces, char = "🌎", keywords = [ "earth americas", "globe showing americas", "globe", "world", "USA", "international" ], name = "earth_americas", x = 5, y = 28 }
    , { category = TravelAndPlaces, char = "🌏", keywords = [ "earth asia", "globe showing asia australia", "globe", "world", "east", "international" ], name = "earth_asia", x = 5, y = 29 }
    , { category = TravelAndPlaces, char = "🌐", keywords = [ "globe with meridians", "globe with meridians", "earth", "international", "world", "internet", "interweb", "i18n" ], name = "globe_with_meridians", x = 5, y = 30 }
    , { category = TravelAndPlaces, char = "🌑", keywords = [ "new moon", "new moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "new_moon", x = 5, y = 31 }
    , { category = TravelAndPlaces, char = "🌒", keywords = [ "waxing crescent moon", "waxing crescent moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "waxing_crescent_moon", x = 5, y = 32 }
    , { category = TravelAndPlaces, char = "🌓", keywords = [ "first quarter moon", "first quarter moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "first_quarter_moon", x = 5, y = 33 }
    , { category = TravelAndPlaces, char = "🌔", keywords = [ "moon", "waxing gibbous moon", "nature", "night", "sky", "gray", "twilight", "planet", "space", "evening", "sleep" ], name = "moon", x = 5, y = 34 }
    , { category = TravelAndPlaces, char = "🌕", keywords = [ "full moon", "full moon", "nature", "yellow", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "full_moon", x = 5, y = 35 }
    , { category = TravelAndPlaces, char = "🌖", keywords = [ "waning gibbous moon", "waning gibbous moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep", "waxing gibbous moon" ], name = "waning_gibbous_moon", x = 5, y = 36 }
    , { category = TravelAndPlaces, char = "🌗", keywords = [ "last quarter moon", "last quarter moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "last_quarter_moon", x = 5, y = 37 }
    , { category = TravelAndPlaces, char = "🌘", keywords = [ "waning crescent moon", "waning crescent moon", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "waning_crescent_moon", x = 5, y = 38 }
    , { category = TravelAndPlaces, char = "🌙", keywords = [ "crescent moon", "crescent moon", "night", "sleep", "sky", "evening", "magic" ], name = "crescent_moon", x = 5, y = 39 }
    , { category = TravelAndPlaces, char = "🌚", keywords = [ "new moon with face", "new moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "new_moon_with_face", x = 5, y = 40 }
    , { category = TravelAndPlaces, char = "🌛", keywords = [ "first quarter moon with face", "first quarter moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "first_quarter_moon_with_face", x = 5, y = 41 }
    , { category = TravelAndPlaces, char = "🌜", keywords = [ "last quarter moon with face", "last quarter moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "last_quarter_moon_with_face", x = 5, y = 42 }
    , { category = TravelAndPlaces, char = "🌝", keywords = [ "full moon with face", "full moon face", "nature", "twilight", "planet", "space", "night", "evening", "sleep" ], name = "full_moon_with_face", x = 5, y = 43 }
    , { category = TravelAndPlaces, char = "🌞", keywords = [ "sun with face", "sun with face", "nature", "morning", "sky" ], name = "sun_with_face", x = 5, y = 44 }
    , { category = TravelAndPlaces, char = "🌟", keywords = [ "star2", "glowing star", "night", "sparkle", "awesome", "good", "magic" ], name = "star2", x = 5, y = 45 }
    , { category = TravelAndPlaces, char = "🌠", keywords = [ "stars", "shooting star", "night", "photo" ], name = "stars", x = 5, y = 46 }
    , { category = TravelAndPlaces, char = "🌡️", keywords = [ "thermometer", "thermometer", "weather", "temperature", "hot", "cold" ], name = "thermometer", x = 5, y = 47 }
    , { category = TravelAndPlaces, char = "🌤️", keywords = [ "mostly sunny", "sun behind small cloud", "weather" ], name = "mostly_sunny", x = 5, y = 48 }
    , { category = TravelAndPlaces, char = "🌥️", keywords = [ "barely sunny", "sun behind large cloud", "weather" ], name = "barely_sunny", x = 5, y = 49 }
    , { category = TravelAndPlaces, char = "🌦️", keywords = [ "partly sunny rain", "sun behind rain cloud", "weather" ], name = "partly_sunny_rain", x = 5, y = 50 }
    , { category = TravelAndPlaces, char = "🌧️", keywords = [ "rain cloud", "cloud with rain", "weather" ], name = "rain_cloud", x = 5, y = 51 }
    , { category = TravelAndPlaces, char = "🌨️", keywords = [ "snow cloud", "cloud with snow", "weather" ], name = "snow_cloud", x = 5, y = 52 }
    , { category = TravelAndPlaces, char = "🌩️", keywords = [ "lightning", "cloud with lightning", "weather", "thunder" ], name = "lightning", x = 5, y = 53 }
    , { category = TravelAndPlaces, char = "🌪️", keywords = [ "tornado", "tornado", "weather", "cyclone", "twister" ], name = "tornado", x = 5, y = 54 }
    , { category = TravelAndPlaces, char = "🌫️", keywords = [ "fog", "fog", "weather" ], name = "fog", x = 5, y = 55 }
    , { category = TravelAndPlaces, char = "🌬️", keywords = [ "wind blowing face", "wind face", "gust", "air" ], name = "wind_blowing_face", x = 5, y = 56 }
    , { category = FoodAndDrink, char = "\u{1F32D}", keywords = [ "hotdog", "hot dog", "food", "frankfurter" ], name = "hotdog", x = 5, y = 57 }
    , { category = FoodAndDrink, char = "\u{1F32E}", keywords = [ "taco", "taco", "food", "mexican" ], name = "taco", x = 6, y = 0 }
    , { category = FoodAndDrink, char = "\u{1F32F}", keywords = [ "burrito", "burrito", "food", "mexican" ], name = "burrito", x = 6, y = 1 }
    , { category = FoodAndDrink, char = "🌰", keywords = [ "chestnut", "chestnut", "food", "squirrel" ], name = "chestnut", x = 6, y = 2 }
    , { category = AnimalsAndNature, char = "🌱", keywords = [ "seedling", "seedling", "plant", "nature", "grass", "lawn", "spring" ], name = "seedling", x = 6, y = 3 }
    , { category = AnimalsAndNature, char = "🌲", keywords = [ "evergreen tree", "evergreen tree", "plant", "nature" ], name = "evergreen_tree", x = 6, y = 4 }
    , { category = AnimalsAndNature, char = "🌳", keywords = [ "deciduous tree", "deciduous tree", "plant", "nature" ], name = "deciduous_tree", x = 6, y = 5 }
    , { category = AnimalsAndNature, char = "🌴", keywords = [ "palm tree", "palm tree", "plant", "vegetable", "nature", "summer", "beach", "mojito", "tropical" ], name = "palm_tree", x = 6, y = 6 }
    , { category = AnimalsAndNature, char = "🌵", keywords = [ "cactus", "cactus", "vegetable", "plant", "nature" ], name = "cactus", x = 6, y = 7 }
    , { category = FoodAndDrink, char = "🌶️", keywords = [ "hot pepper", "hot pepper", "food", "spicy", "chilli", "chili" ], name = "hot_pepper", x = 6, y = 8 }
    , { category = AnimalsAndNature, char = "🌷", keywords = [ "tulip", "tulip", "flowers", "plant", "nature", "summer", "spring" ], name = "tulip", x = 6, y = 9 }
    , { category = AnimalsAndNature, char = "🌸", keywords = [ "cherry blossom", "cherry blossom", "nature", "plant", "spring", "flower" ], name = "cherry_blossom", x = 6, y = 10 }
    , { category = AnimalsAndNature, char = "🌹", keywords = [ "rose", "rose", "flowers", "valentines", "love", "spring" ], name = "rose", x = 6, y = 11 }
    , { category = AnimalsAndNature, char = "🌺", keywords = [ "hibiscus", "hibiscus", "plant", "vegetable", "flowers", "beach" ], name = "hibiscus", x = 6, y = 12 }
    , { category = AnimalsAndNature, char = "🌻", keywords = [ "sunflower", "sunflower", "nature", "plant", "fall" ], name = "sunflower", x = 6, y = 13 }
    , { category = AnimalsAndNature, char = "🌼", keywords = [ "blossom", "blossom", "nature", "flowers", "yellow" ], name = "blossom", x = 6, y = 14 }
    , { category = FoodAndDrink, char = "🌽", keywords = [ "corn", "ear of corn", "food", "vegetable", "plant" ], name = "corn", x = 6, y = 15 }
    , { category = AnimalsAndNature, char = "🌾", keywords = [ "ear of rice", "sheaf of rice", "nature", "plant" ], name = "ear_of_rice", x = 6, y = 16 }
    , { category = AnimalsAndNature, char = "🌿", keywords = [ "herb", "herb", "vegetable", "plant", "medicine", "weed", "grass", "lawn" ], name = "herb", x = 6, y = 17 }
    , { category = AnimalsAndNature, char = "🍀", keywords = [ "four leaf clover", "four leaf clover", "vegetable", "plant", "nature", "lucky", "irish" ], name = "four_leaf_clover", x = 6, y = 18 }
    , { category = AnimalsAndNature, char = "🍁", keywords = [ "maple leaf", "maple leaf", "nature", "plant", "vegetable", "ca", "fall" ], name = "maple_leaf", x = 6, y = 19 }
    , { category = AnimalsAndNature, char = "🍂", keywords = [ "fallen leaf", "fallen leaf", "nature", "plant", "vegetable", "leaves" ], name = "fallen_leaf", x = 6, y = 20 }
    , { category = AnimalsAndNature, char = "🍃", keywords = [ "leaves", "leaf fluttering in wind", "nature", "plant", "tree", "vegetable", "grass", "lawn", "spring" ], name = "leaves", x = 6, y = 21 }
    , { category = FoodAndDrink, char = "🍄", keywords = [ "mushroom", "mushroom", "plant", "vegetable" ], name = "mushroom", x = 6, y = 22 }
    , { category = FoodAndDrink, char = "🍅", keywords = [ "tomato", "tomato", "fruit", "vegetable", "nature", "food" ], name = "tomato", x = 6, y = 23 }
    , { category = FoodAndDrink, char = "🍆", keywords = [ "eggplant", "eggplant", "vegetable", "nature", "food", "aubergine" ], name = "eggplant", x = 6, y = 24 }
    , { category = FoodAndDrink, char = "🍇", keywords = [ "grapes", "grapes", "fruit", "food", "wine" ], name = "grapes", x = 6, y = 25 }
    , { category = FoodAndDrink, char = "🍈", keywords = [ "melon", "melon", "fruit", "nature", "food" ], name = "melon", x = 6, y = 26 }
    , { category = FoodAndDrink, char = "🍉", keywords = [ "watermelon", "watermelon", "fruit", "food", "picnic", "summer" ], name = "watermelon", x = 6, y = 27 }
    , { category = FoodAndDrink, char = "🍊", keywords = [ "tangerine", "tangerine", "food", "fruit", "nature", "orange" ], name = "tangerine", x = 6, y = 28 }
    , { category = FoodAndDrink, char = "🍋", keywords = [ "lemon", "lemon", "fruit", "nature" ], name = "lemon", x = 6, y = 29 }
    , { category = FoodAndDrink, char = "🍌", keywords = [ "banana", "banana", "fruit", "food", "monkey" ], name = "banana", x = 6, y = 30 }
    , { category = FoodAndDrink, char = "🍍", keywords = [ "pineapple", "pineapple", "fruit", "nature", "food" ], name = "pineapple", x = 6, y = 31 }
    , { category = FoodAndDrink, char = "🍎", keywords = [ "apple", "red apple", "fruit", "mac", "school" ], name = "apple", x = 6, y = 32 }
    , { category = FoodAndDrink, char = "🍏", keywords = [ "green apple", "green apple", "fruit", "nature" ], name = "green_apple", x = 6, y = 33 }
    , { category = FoodAndDrink, char = "🍐", keywords = [ "pear", "pear", "fruit", "nature", "food" ], name = "pear", x = 6, y = 34 }
    , { category = FoodAndDrink, char = "🍑", keywords = [ "peach", "peach", "fruit", "nature", "food" ], name = "peach", x = 6, y = 35 }
    , { category = FoodAndDrink, char = "🍒", keywords = [ "cherries", "cherries", "food", "fruit" ], name = "cherries", x = 6, y = 36 }
    , { category = FoodAndDrink, char = "🍓", keywords = [ "strawberry", "strawberry", "fruit", "food", "nature" ], name = "strawberry", x = 6, y = 37 }
    , { category = FoodAndDrink, char = "🍔", keywords = [ "hamburger", "hamburger", "meat", "fast food", "beef", "cheeseburger", "mcdonalds", "burger king" ], name = "hamburger", x = 6, y = 38 }
    , { category = FoodAndDrink, char = "🍕", keywords = [ "pizza", "pizza", "food", "party" ], name = "pizza", x = 6, y = 39 }
    , { category = FoodAndDrink, char = "🍖", keywords = [ "meat on bone", "meat on bone", "good", "food", "drumstick" ], name = "meat_on_bone", x = 6, y = 40 }
    , { category = FoodAndDrink, char = "🍗", keywords = [ "poultry leg", "poultry leg", "food", "meat", "drumstick", "bird", "chicken", "turkey" ], name = "poultry_leg", x = 6, y = 41 }
    , { category = FoodAndDrink, char = "🍘", keywords = [ "rice cracker", "rice cracker", "food", "japanese" ], name = "rice_cracker", x = 6, y = 42 }
    , { category = FoodAndDrink, char = "🍙", keywords = [ "rice ball", "rice ball", "food", "japanese" ], name = "rice_ball", x = 6, y = 43 }
    , { category = FoodAndDrink, char = "🍚", keywords = [ "rice", "cooked rice", "food", "china", "asian" ], name = "rice", x = 6, y = 44 }
    , { category = FoodAndDrink, char = "🍛", keywords = [ "curry", "curry rice", "food", "spicy", "hot", "indian" ], name = "curry", x = 6, y = 45 }
    , { category = FoodAndDrink, char = "🍜", keywords = [ "ramen", "steaming bowl", "food", "japanese", "noodle", "chopsticks" ], name = "ramen", x = 6, y = 46 }
    , { category = FoodAndDrink, char = "🍝", keywords = [ "spaghetti", "spaghetti", "food", "italian", "noodle" ], name = "spaghetti", x = 6, y = 47 }
    , { category = FoodAndDrink, char = "🍞", keywords = [ "bread", "bread", "food", "wheat", "breakfast", "toast" ], name = "bread", x = 6, y = 48 }
    , { category = FoodAndDrink, char = "🍟", keywords = [ "fries", "french fries", "chips", "snack", "fast food" ], name = "fries", x = 6, y = 49 }
    , { category = FoodAndDrink, char = "🍠", keywords = [ "sweet potato", "roasted sweet potato", "food", "nature" ], name = "sweet_potato", x = 6, y = 50 }
    , { category = FoodAndDrink, char = "🍡", keywords = [ "dango", "dango", "food", "dessert", "sweet", "japanese", "barbecue", "meat" ], name = "dango", x = 6, y = 51 }
    , { category = FoodAndDrink, char = "🍢", keywords = [ "oden", "oden", "food", "japanese" ], name = "oden", x = 6, y = 52 }
    , { category = FoodAndDrink, char = "🍣", keywords = [ "sushi", "sushi", "food", "fish", "japanese", "rice" ], name = "sushi", x = 6, y = 53 }
    , { category = FoodAndDrink, char = "🍤", keywords = [ "fried shrimp", "fried shrimp", "food", "animal", "appetizer", "summer" ], name = "fried_shrimp", x = 6, y = 54 }
    , { category = FoodAndDrink, char = "🍥", keywords = [ "fish cake", "fish cake with swirl", "food", "japan", "sea", "beach", "narutomaki", "pink", "swirl", "kamaboko", "surimi", "ramen" ], name = "fish_cake", x = 6, y = 55 }
    , { category = FoodAndDrink, char = "🍦", keywords = [ "icecream", "soft ice cream", "food", "hot", "dessert", "summer" ], name = "icecream", x = 6, y = 56 }
    , { category = FoodAndDrink, char = "🍧", keywords = [ "shaved ice", "shaved ice", "hot", "dessert", "summer" ], name = "shaved_ice", x = 6, y = 57 }
    , { category = FoodAndDrink, char = "🍨", keywords = [ "ice cream", "ice cream", "food", "hot", "dessert" ], name = "ice_cream", x = 7, y = 0 }
    , { category = FoodAndDrink, char = "🍩", keywords = [ "doughnut", "doughnut", "food", "dessert", "snack", "sweet", "donut" ], name = "doughnut", x = 7, y = 1 }
    , { category = FoodAndDrink, char = "🍪", keywords = [ "cookie", "cookie", "food", "snack", "oreo", "chocolate", "sweet", "dessert" ], name = "cookie", x = 7, y = 2 }
    , { category = FoodAndDrink, char = "🍫", keywords = [ "chocolate bar", "chocolate bar", "food", "snack", "dessert", "sweet" ], name = "chocolate_bar", x = 7, y = 3 }
    , { category = FoodAndDrink, char = "🍬", keywords = [ "candy", "candy", "snack", "dessert", "sweet", "lolly" ], name = "candy", x = 7, y = 4 }
    , { category = FoodAndDrink, char = "🍭", keywords = [ "lollipop", "lollipop", "food", "snack", "candy", "sweet" ], name = "lollipop", x = 7, y = 5 }
    , { category = FoodAndDrink, char = "🍮", keywords = [ "custard", "custard", "dessert", "food" ], name = "custard", x = 7, y = 6 }
    , { category = FoodAndDrink, char = "🍯", keywords = [ "honey pot", "honey pot", "bees", "sweet", "kitchen" ], name = "honey_pot", x = 7, y = 7 }
    , { category = FoodAndDrink, char = "🍰", keywords = [ "cake", "shortcake", "food", "dessert" ], name = "cake", x = 7, y = 8 }
    , { category = FoodAndDrink, char = "🍱", keywords = [ "bento", "bento box", "food", "japanese", "box" ], name = "bento", x = 7, y = 9 }
    , { category = FoodAndDrink, char = "🍲", keywords = [ "stew", "pot of food", "food", "meat", "soup" ], name = "stew", x = 7, y = 10 }
    , { category = FoodAndDrink, char = "🍳", keywords = [ "fried egg", "cooking", "food", "breakfast", "kitchen", "egg" ], name = "fried_egg", x = 7, y = 11 }
    , { category = FoodAndDrink, char = "🍴", keywords = [ "fork and knife", "fork and knife", "cutlery", "kitchen" ], name = "fork_and_knife", x = 7, y = 12 }
    , { category = FoodAndDrink, char = "🍵", keywords = [ "tea", "teacup without handle", "drink", "bowl", "breakfast", "green", "british" ], name = "tea", x = 7, y = 13 }
    , { category = FoodAndDrink, char = "🍶", keywords = [ "sake", "sake", "wine", "drink", "drunk", "beverage", "japanese", "alcohol", "booze" ], name = "sake", x = 7, y = 14 }
    , { category = FoodAndDrink, char = "🍷", keywords = [ "wine glass", "wine glass", "drink", "beverage", "drunk", "alcohol", "booze" ], name = "wine_glass", x = 7, y = 15 }
    , { category = FoodAndDrink, char = "🍸", keywords = [ "cocktail", "cocktail glass", "drink", "drunk", "alcohol", "beverage", "booze", "mojito" ], name = "cocktail", x = 7, y = 16 }
    , { category = FoodAndDrink, char = "🍹", keywords = [ "tropical drink", "tropical drink", "beverage", "cocktail", "summer", "beach", "alcohol", "booze", "mojito" ], name = "tropical_drink", x = 7, y = 17 }
    , { category = FoodAndDrink, char = "🍺", keywords = [ "beer", "beer mug", "relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze" ], name = "beer", x = 7, y = 18 }
    , { category = FoodAndDrink, char = "🍻", keywords = [ "beers", "clinking beer mugs", "relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze" ], name = "beers", x = 7, y = 19 }
    , { category = FoodAndDrink, char = "🍼", keywords = [ "baby bottle", "baby bottle", "food", "container", "milk" ], name = "baby_bottle", x = 7, y = 20 }
    , { category = FoodAndDrink, char = "🍽️", keywords = [ "knife fork plate", "fork and knife with plate", "food", "eat", "meal", "lunch", "dinner", "restaurant" ], name = "knife_fork_plate", x = 7, y = 21 }
    , { category = FoodAndDrink, char = "\u{1F37E}", keywords = [ "champagne", "bottle with popping cork", "drink", "wine", "bottle", "celebration" ], name = "champagne", x = 7, y = 22 }
    , { category = FoodAndDrink, char = "\u{1F37F}", keywords = [ "popcorn", "popcorn", "food", "movie theater", "films", "snack" ], name = "popcorn", x = 7, y = 23 }
    , { category = Activities, char = "🎀", keywords = [ "ribbon", "ribbon", "decoration", "pink", "girl", "bowtie" ], name = "ribbon", x = 7, y = 24 }
    , { category = Activities, char = "🎁", keywords = [ "gift", "wrapped gift", "present", "birthday", "christmas", "xmas" ], name = "gift", x = 7, y = 25 }
    , { category = FoodAndDrink, char = "🎂", keywords = [ "birthday", "birthday cake", "food", "dessert", "cake" ], name = "birthday", x = 7, y = 26 }
    , { category = Activities, char = "🎃", keywords = [ "jack o lantern", "jack o lantern", "halloween", "light", "pumpkin", "creepy", "fall" ], name = "jack_o_lantern", x = 7, y = 27 }
    , { category = Activities, char = "🎄", keywords = [ "christmas tree", "christmas tree", "festival", "vacation", "december", "xmas", "celebration" ], name = "christmas_tree", x = 7, y = 28 }
    , { category = PeopleAndBody, char = "🎅", keywords = [ "santa", "santa claus", "festival", "man", "male", "xmas", "father christmas" ], name = "santa", x = 7, y = 29 }
    , { category = Activities, char = "🎆", keywords = [ "fireworks", "fireworks", "photo", "festival", "carnival", "congratulations" ], name = "fireworks", x = 7, y = 35 }
    , { category = Activities, char = "🎇", keywords = [ "sparkler", "sparkler", "stars", "night", "shine" ], name = "sparkler", x = 7, y = 36 }
    , { category = Activities, char = "🎈", keywords = [ "balloon", "balloon", "party", "celebration", "birthday", "circus" ], name = "balloon", x = 7, y = 37 }
    , { category = Activities, char = "🎉", keywords = [ "tada", "party popper", "party", "congratulations", "birthday", "magic", "circus", "celebration" ], name = "tada", x = 7, y = 38 }
    , { category = Activities, char = "🎊", keywords = [ "confetti ball", "confetti ball", "festival", "party", "birthday", "circus" ], name = "confetti_ball", x = 7, y = 39 }
    , { category = Activities, char = "🎋", keywords = [ "tanabata tree", "tanabata tree", "plant", "nature", "branch", "summer" ], name = "tanabata_tree", x = 7, y = 40 }
    , { category = Flags, char = "🎌", keywords = [ "crossed flags", "crossed flags", "japanese", "nation", "country", "border" ], name = "crossed_flags", x = 7, y = 41 }
    , { category = Activities, char = "🎍", keywords = [ "bamboo", "pine decoration", "plant", "nature", "vegetable", "panda", "pine decoration" ], name = "bamboo", x = 7, y = 42 }
    , { category = Activities, char = "🎎", keywords = [ "dolls", "japanese dolls", "japanese", "toy", "kimono" ], name = "dolls", x = 7, y = 43 }
    , { category = Activities, char = "🎏", keywords = [ "flags", "carp streamer", "fish", "japanese", "koinobori", "carp", "banner" ], name = "flags", x = 7, y = 44 }
    , { category = Activities, char = "🎐", keywords = [ "wind chime", "wind chime", "nature", "ding", "spring", "bell" ], name = "wind_chime", x = 7, y = 45 }
    , { category = Activities, char = "🎑", keywords = [ "rice scene", "moon viewing ceremony", "photo", "japan", "asia", "tsukimi" ], name = "rice_scene", x = 7, y = 46 }
    , { category = Objects, char = "🎒", keywords = [ "school satchel", "backpack", "student", "education", "bag", "backpack" ], name = "school_satchel", x = 7, y = 47 }
    , { category = Objects, char = "🎓", keywords = [ "mortar board", "graduation cap", "school", "college", "degree", "university", "graduation", "cap", "hat", "legal", "learn", "education" ], name = "mortar_board", x = 7, y = 48 }
    , { category = Activities, char = "🎖️", keywords = [ "medal", "military medal", "award", "winning", "army" ], name = "medal", x = 7, y = 49 }
    , { category = Activities, char = "🎗️", keywords = [ "reminder ribbon", "reminder ribbon", "sports", "cause", "support", "awareness" ], name = "reminder_ribbon", x = 7, y = 50 }
    , { category = Objects, char = "🎙️", keywords = [ "studio microphone", "studio microphone", "sing", "recording", "artist", "talkshow" ], name = "studio_microphone", x = 7, y = 51 }
    , { category = Objects, char = "🎚️", keywords = [ "level slider", "level slider", "scale" ], name = "level_slider", x = 7, y = 52 }
    , { category = Objects, char = "🎛️", keywords = [ "control knobs", "control knobs", "dial" ], name = "control_knobs", x = 7, y = 53 }
    , { category = Objects, char = "🎞️", keywords = [ "film frames", "film frames", "movie" ], name = "film_frames", x = 7, y = 54 }
    , { category = Activities, char = "🎟️", keywords = [ "admission tickets", "admission tickets", "sports", "concert", "entrance" ], name = "admission_tickets", x = 7, y = 55 }
    , { category = TravelAndPlaces, char = "🎠", keywords = [ "carousel horse", "carousel horse", "photo", "carnival" ], name = "carousel_horse", x = 7, y = 56 }
    , { category = TravelAndPlaces, char = "🎡", keywords = [ "ferris wheel", "ferris wheel", "photo", "carnival", "londoneye" ], name = "ferris_wheel", x = 7, y = 57 }
    , { category = TravelAndPlaces, char = "🎢", keywords = [ "roller coaster", "roller coaster", "carnival", "playground", "photo", "fun" ], name = "roller_coaster", x = 8, y = 0 }
    , { category = Activities, char = "🎣", keywords = [ "fishing pole and fish", "fishing pole", "food", "hobby", "summer" ], name = "fishing_pole_and_fish", x = 8, y = 1 }
    , { category = Objects, char = "🎤", keywords = [ "microphone", "microphone", "sound", "music", "PA", "sing", "talkshow" ], name = "microphone", x = 8, y = 2 }
    , { category = Objects, char = "🎥", keywords = [ "movie camera", "movie camera", "film", "record" ], name = "movie_camera", x = 8, y = 3 }
    , { category = Symbols, char = "🎦", keywords = [ "cinema", "cinema", "blue square", "record", "film", "movie", "curtain", "stage", "theater" ], name = "cinema", x = 8, y = 4 }
    , { category = Objects, char = "🎧", keywords = [ "headphones", "headphone", "music", "score", "gadgets" ], name = "headphones", x = 8, y = 5 }
    , { category = Activities, char = "🎨", keywords = [ "art", "artist palette", "design", "paint", "draw", "colors" ], name = "art", x = 8, y = 6 }
    , { category = Objects, char = "🎩", keywords = [ "tophat", "top hat", "magic", "gentleman", "classy", "circus" ], name = "tophat", x = 8, y = 7 }
    , { category = TravelAndPlaces, char = "🎪", keywords = [ "circus tent", "circus tent", "festival", "carnival", "party" ], name = "circus_tent", x = 8, y = 8 }
    , { category = Activities, char = "🎫", keywords = [ "ticket", "ticket", "event", "concert", "pass" ], name = "ticket", x = 8, y = 9 }
    , { category = Objects, char = "🎬", keywords = [ "clapper", "clapper board", "movie", "film", "record" ], name = "clapper", x = 8, y = 10 }
    , { category = Activities, char = "🎭", keywords = [ "performing arts", "performing arts", "acting", "theater", "drama" ], name = "performing_arts", x = 8, y = 11 }
    , { category = Activities, char = "🎮", keywords = [ "video game", "video game", "play", "console", "PS4", "controller" ], name = "video_game", x = 8, y = 12 }
    , { category = Activities, char = "🎯", keywords = [ "dart", "direct hit", "game", "play", "bar", "target", "bullseye" ], name = "dart", x = 8, y = 13 }
    , { category = Activities, char = "🎰", keywords = [ "slot machine", "slot machine", "bet", "gamble", "vegas", "fruit machine", "luck", "casino" ], name = "slot_machine", x = 8, y = 14 }
    , { category = Activities, char = "🎱", keywords = [ "8ball", "pool 8 ball", "pool", "hobby", "game", "luck", "magic" ], name = "8ball", x = 8, y = 15 }
    , { category = Activities, char = "🎲", keywords = [ "game die", "game die", "dice", "random", "tabletop", "play", "luck" ], name = "game_die", x = 8, y = 16 }
    , { category = Activities, char = "🎳", keywords = [ "bowling", "bowling", "sports", "fun", "play" ], name = "bowling", x = 8, y = 17 }
    , { category = Activities, char = "🎴", keywords = [ "flower playing cards", "flower playing cards", "game", "sunset", "red" ], name = "flower_playing_cards", x = 8, y = 18 }
    , { category = Objects, char = "🎵", keywords = [ "musical note", "musical note", "score", "tone", "sound" ], name = "musical_note", x = 8, y = 19 }
    , { category = Objects, char = "🎶", keywords = [ "notes", "musical notes", "music", "score" ], name = "notes", x = 8, y = 20 }
    , { category = Objects, char = "🎷", keywords = [ "saxophone", "saxophone", "music", "instrument", "jazz", "blues" ], name = "saxophone", x = 8, y = 21 }
    , { category = Objects, char = "🎸", keywords = [ "guitar", "guitar", "music", "instrument" ], name = "guitar", x = 8, y = 22 }
    , { category = Objects, char = "🎹", keywords = [ "musical keyboard", "musical keyboard", "piano", "instrument", "compose" ], name = "musical_keyboard", x = 8, y = 23 }
    , { category = Objects, char = "🎺", keywords = [ "trumpet", "trumpet", "music", "brass" ], name = "trumpet", x = 8, y = 24 }
    , { category = Objects, char = "🎻", keywords = [ "violin", "violin", "music", "instrument", "orchestra", "symphony" ], name = "violin", x = 8, y = 25 }
    , { category = Objects, char = "🎼", keywords = [ "musical score", "musical score", "treble", "clef", "compose" ], name = "musical_score", x = 8, y = 26 }
    , { category = Activities, char = "🎽", keywords = [ "running shirt with sash", "running shirt", "play", "pageant" ], name = "running_shirt_with_sash", x = 8, y = 27 }
    , { category = Activities, char = "🎾", keywords = [ "tennis", "tennis", "sports", "balls", "green" ], name = "tennis", x = 8, y = 28 }
    , { category = Activities, char = "🎿", keywords = [ "ski", "skis", "sports", "winter", "cold", "snow" ], name = "ski", x = 8, y = 29 }
    , { category = Activities, char = "🏀", keywords = [ "basketball", "basketball", "sports", "balls", "NBA" ], name = "basketball", x = 8, y = 30 }
    , { category = Flags, char = "🏁", keywords = [ "checkered flag", "chequered flag", "contest", "finishline", "race", "gokart" ], name = "checkered_flag", x = 8, y = 31 }
    , { category = PeopleAndBody, char = "🏂", keywords = [ "snowboarder", "snowboarder", "sports", "winter" ], name = "snowboarder", x = 8, y = 32 }
    , { category = PeopleAndBody, char = "🏃\u{200D}♀️", keywords = [ "woman running", "woman running", "woman", "walking", "exercise", "race", "running", "female" ], name = "woman-running", x = 8, y = 38 }
    , { category = PeopleAndBody, char = "🏃\u{200D}♂️", keywords = [ "man running", "man running", "man", "walking", "exercise", "race", "running" ], name = "man-running", x = 8, y = 44 }
    , { category = PeopleAndBody, char = "🏃", keywords = [ "runner", "person running" ], name = "runner", x = 8, y = 50 }
    , { category = PeopleAndBody, char = "🏄\u{200D}♀️", keywords = [ "woman surfing", "woman surfing", "sports", "ocean", "sea", "summer", "beach", "woman", "female" ], name = "woman-surfing", x = 8, y = 56 }
    , { category = PeopleAndBody, char = "🏄\u{200D}♂️", keywords = [ "man surfing", "man surfing", "sports", "ocean", "sea", "summer", "beach" ], name = "man-surfing", x = 9, y = 4 }
    , { category = PeopleAndBody, char = "🏄", keywords = [ "surfer", "person surfing" ], name = "surfer", x = 9, y = 10 }
    , { category = Activities, char = "🏅", keywords = [ "sports medal", "sports medal", "award", "winning" ], name = "sports_medal", x = 9, y = 16 }
    , { category = Activities, char = "🏆", keywords = [ "trophy", "trophy", "win", "award", "contest", "place", "ftw", "ceremony" ], name = "trophy", x = 9, y = 17 }
    , { category = PeopleAndBody, char = "🏇", keywords = [ "horse racing", "horse racing", "animal", "betting", "competition", "gambling", "luck" ], name = "horse_racing", x = 9, y = 18 }
    , { category = Activities, char = "🏈", keywords = [ "football", "american football", "sports", "balls", "NFL" ], name = "football", x = 9, y = 24 }
    , { category = Activities, char = "🏉", keywords = [ "rugby football", "rugby football", "sports", "team" ], name = "rugby_football", x = 9, y = 25 }
    , { category = PeopleAndBody, char = "🏊\u{200D}♀️", keywords = [ "woman swimming", "woman swimming", "sports", "exercise", "human", "athlete", "water", "summer", "woman", "female" ], name = "woman-swimming", x = 9, y = 26 }
    , { category = PeopleAndBody, char = "🏊\u{200D}♂️", keywords = [ "man swimming", "man swimming", "sports", "exercise", "human", "athlete", "water", "summer" ], name = "man-swimming", x = 9, y = 32 }
    , { category = PeopleAndBody, char = "🏊", keywords = [ "swimmer", "person swimming" ], name = "swimmer", x = 9, y = 38 }
    , { category = PeopleAndBody, char = "🏋️\u{200D}♀️", keywords = [ "woman lifting weights", "woman lifting weights", "sports", "training", "exercise", "woman", "female" ], name = "woman-lifting-weights", x = 9, y = 44 }
    , { category = PeopleAndBody, char = "🏋️\u{200D}♂️", keywords = [ "man lifting weights", "man lifting weights" ], name = "man-lifting-weights", x = 9, y = 50 }
    , { category = PeopleAndBody, char = "🏋️", keywords = [ "weight lifter", "person lifting weights", "sports", "training", "exercise" ], name = "weight_lifter", x = 9, y = 56 }
    , { category = PeopleAndBody, char = "🏌️\u{200D}♀️", keywords = [ "woman golfing", "woman golfing", "sports", "business", "woman", "female" ], name = "woman-golfing", x = 10, y = 4 }
    , { category = PeopleAndBody, char = "🏌️\u{200D}♂️", keywords = [ "man golfing", "man golfing" ], name = "man-golfing", x = 10, y = 10 }
    , { category = PeopleAndBody, char = "🏌️", keywords = [ "golfer", "person golfing", "sports", "business" ], name = "golfer", x = 10, y = 16 }
    , { category = TravelAndPlaces, char = "🏍️", keywords = [ "racing motorcycle", "motorcycle", "race", "sports", "fast" ], name = "racing_motorcycle", x = 10, y = 22 }
    , { category = TravelAndPlaces, char = "🏎️", keywords = [ "racing car", "racing car", "sports", "race", "fast", "formula", "f1" ], name = "racing_car", x = 10, y = 23 }
    , { category = Activities, char = "\u{1F3CF}", keywords = [ "cricket bat and ball", "cricket game", "sports" ], name = "cricket_bat_and_ball", x = 10, y = 24 }
    , { category = Activities, char = "\u{1F3D0}", keywords = [ "volleyball", "volleyball", "sports", "balls" ], name = "volleyball", x = 10, y = 25 }
    , { category = Activities, char = "\u{1F3D1}", keywords = [ "field hockey stick and ball", "field hockey", "sports" ], name = "field_hockey_stick_and_ball", x = 10, y = 26 }
    , { category = Activities, char = "\u{1F3D2}", keywords = [ "ice hockey stick and puck", "ice hockey", "sports" ], name = "ice_hockey_stick_and_puck", x = 10, y = 27 }
    , { category = Activities, char = "\u{1F3D3}", keywords = [ "table tennis paddle and ball", "ping pong", "sports", "pingpong" ], name = "table_tennis_paddle_and_ball", x = 10, y = 28 }
    , { category = TravelAndPlaces, char = "🏔️", keywords = [ "snow capped mountain", "snow capped mountain", "photo", "nature", "environment", "winter", "cold" ], name = "snow_capped_mountain", x = 10, y = 29 }
    , { category = TravelAndPlaces, char = "🏕️", keywords = [ "camping", "camping", "photo", "outdoors", "tent" ], name = "camping", x = 10, y = 30 }
    , { category = TravelAndPlaces, char = "🏖️", keywords = [ "beach with umbrella", "beach with umbrella", "weather", "summer", "sunny", "sand", "mojito" ], name = "beach_with_umbrella", x = 10, y = 31 }
    , { category = TravelAndPlaces, char = "🏗️", keywords = [ "building construction", "building construction", "wip", "working", "progress" ], name = "building_construction", x = 10, y = 32 }
    , { category = TravelAndPlaces, char = "🏘️", keywords = [ "house buildings", "houses", "buildings", "photo" ], name = "house_buildings", x = 10, y = 33 }
    , { category = TravelAndPlaces, char = "🏙️", keywords = [ "cityscape", "cityscape", "photo", "night life", "urban" ], name = "cityscape", x = 10, y = 34 }
    , { category = TravelAndPlaces, char = "🏚️", keywords = [ "derelict house building", "derelict house", "abandon", "evict", "broken", "building" ], name = "derelict_house_building", x = 10, y = 35 }
    , { category = TravelAndPlaces, char = "🏛️", keywords = [ "classical building", "classical building", "art", "culture", "history" ], name = "classical_building", x = 10, y = 36 }
    , { category = TravelAndPlaces, char = "🏜️", keywords = [ "desert", "desert", "photo", "warm", "saharah" ], name = "desert", x = 10, y = 37 }
    , { category = TravelAndPlaces, char = "🏝️", keywords = [ "desert island", "desert island", "photo", "tropical", "mojito" ], name = "desert_island", x = 10, y = 38 }
    , { category = TravelAndPlaces, char = "🏞️", keywords = [ "national park", "national park", "photo", "environment", "nature" ], name = "national_park", x = 10, y = 39 }
    , { category = TravelAndPlaces, char = "🏟️", keywords = [ "stadium", "stadium", "photo", "place", "sports", "concert", "venue" ], name = "stadium", x = 10, y = 40 }
    , { category = TravelAndPlaces, char = "🏠", keywords = [ "house", "house", "building", "home" ], name = "house", x = 10, y = 41 }
    , { category = TravelAndPlaces, char = "🏡", keywords = [ "house with garden", "house with garden", "home", "plant", "nature" ], name = "house_with_garden", x = 10, y = 42 }
    , { category = TravelAndPlaces, char = "🏢", keywords = [ "office", "office building", "building", "bureau", "work" ], name = "office", x = 10, y = 43 }
    , { category = TravelAndPlaces, char = "🏣", keywords = [ "post office", "japanese post office", "building", "envelope", "communication" ], name = "post_office", x = 10, y = 44 }
    , { category = TravelAndPlaces, char = "🏤", keywords = [ "european post office", "post office", "building", "email" ], name = "european_post_office", x = 10, y = 45 }
    , { category = TravelAndPlaces, char = "🏥", keywords = [ "hospital", "hospital", "building", "health", "surgery", "doctor" ], name = "hospital", x = 10, y = 46 }
    , { category = TravelAndPlaces, char = "🏦", keywords = [ "bank", "bank", "building", "money", "sales", "cash", "business", "enterprise" ], name = "bank", x = 10, y = 47 }
    , { category = Symbols, char = "🏧", keywords = [ "atm", "atm sign", "money", "sales", "cash", "blue square", "payment", "bank" ], name = "atm", x = 10, y = 48 }
    , { category = TravelAndPlaces, char = "🏨", keywords = [ "hotel", "hotel", "building", "accomodation", "checkin" ], name = "hotel", x = 10, y = 49 }
    , { category = TravelAndPlaces, char = "🏩", keywords = [ "love hotel", "love hotel", "like", "affection", "dating" ], name = "love_hotel", x = 10, y = 50 }
    , { category = TravelAndPlaces, char = "🏪", keywords = [ "convenience store", "convenience store", "building", "shopping", "groceries" ], name = "convenience_store", x = 10, y = 51 }
    , { category = TravelAndPlaces, char = "🏫", keywords = [ "school", "school", "building", "student", "education", "learn", "teach" ], name = "school", x = 10, y = 52 }
    , { category = TravelAndPlaces, char = "🏬", keywords = [ "department store", "department store", "building", "shopping", "mall" ], name = "department_store", x = 10, y = 53 }
    , { category = TravelAndPlaces, char = "🏭", keywords = [ "factory", "factory", "building", "industry", "pollution", "smoke" ], name = "factory", x = 10, y = 54 }
    , { category = Objects, char = "🏮", keywords = [ "izakaya lantern", "red paper lantern", "light", "paper", "halloween", "spooky" ], name = "izakaya_lantern", x = 10, y = 55 }
    , { category = TravelAndPlaces, char = "🏯", keywords = [ "japanese castle", "japanese castle", "photo", "building" ], name = "japanese_castle", x = 10, y = 56 }
    , { category = TravelAndPlaces, char = "🏰", keywords = [ "european castle", "castle", "building", "royalty", "history" ], name = "european_castle", x = 10, y = 57 }
    , { category = Flags, char = "🏳️\u{200D}🌈", keywords = [ "rainbow flag", "rainbow flag", "flag", "rainbow", "pride", "gay", "lgbt", "glbt", "queer", "homosexual", "lesbian", "bisexual", "transgender" ], name = "rainbow-flag", x = 11, y = 0 }
    , { category = Flags, char = "🏳️\u{200D}⚧️", keywords = [ "transgender flag", "transgender flag", "lgbtq" ], name = "transgender_flag", x = 11, y = 1 }
    , { category = Flags, char = "🏳️", keywords = [ "waving white flag", "white flag", "losing", "loser", "lost", "surrender", "give up", "fail" ], name = "waving_white_flag", x = 11, y = 2 }
    , { category = Flags, char = "🏴\u{200D}☠️", keywords = [ "pirate flag", "pirate flag", "skull", "crossbones", "flag", "banner" ], name = "pirate_flag", x = 11, y = 3 }
    , { category = Flags, char = "🏴\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}", keywords = [ "flag england", "flag england", "flag", "english" ], name = "flag-england", x = 11, y = 4 }
    , { category = Flags, char = "🏴\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}", keywords = [ "flag scotland", "flag scotland", "flag", "scottish" ], name = "flag-scotland", x = 11, y = 5 }
    , { category = Flags, char = "🏴\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}", keywords = [ "flag wales", "flag wales", "flag", "welsh" ], name = "flag-wales", x = 11, y = 6 }
    , { category = Flags, char = "🏴", keywords = [ "waving black flag", "black flag", "pirate" ], name = "waving_black_flag", x = 11, y = 7 }
    , { category = AnimalsAndNature, char = "🏵️", keywords = [ "rosette", "rosette", "flower", "decoration", "military" ], name = "rosette", x = 11, y = 8 }
    , { category = Objects, char = "🏷️", keywords = [ "label", "label", "sale", "tag" ], name = "label", x = 11, y = 9 }
    , { category = Activities, char = "\u{1F3F8}", keywords = [ "badminton racquet and shuttlecock", "badminton", "sports" ], name = "badminton_racquet_and_shuttlecock", x = 11, y = 10 }
    , { category = Objects, char = "\u{1F3F9}", keywords = [ "bow and arrow", "bow and arrow", "sports" ], name = "bow_and_arrow", x = 11, y = 11 }
    , { category = FoodAndDrink, char = "\u{1F3FA}", keywords = [ "amphora", "amphora", "vase", "jar" ], name = "amphora", x = 11, y = 12 }
    , { category = SkinTones, char = "\u{1F3FB}", keywords = [ "skin tone 2" ], name = "skin-tone-2", x = 11, y = 13 }
    , { category = SkinTones, char = "\u{1F3FC}", keywords = [ "skin tone 3" ], name = "skin-tone-3", x = 11, y = 14 }
    , { category = SkinTones, char = "\u{1F3FD}", keywords = [ "skin tone 4" ], name = "skin-tone-4", x = 11, y = 15 }
    , { category = SkinTones, char = "\u{1F3FE}", keywords = [ "skin tone 5" ], name = "skin-tone-5", x = 11, y = 16 }
    , { category = SkinTones, char = "\u{1F3FF}", keywords = [ "skin tone 6" ], name = "skin-tone-6", x = 11, y = 17 }
    , { category = AnimalsAndNature, char = "🐀", keywords = [ "rat", "rat", "animal", "mouse", "rodent" ], name = "rat", x = 11, y = 18 }
    , { category = AnimalsAndNature, char = "🐁", keywords = [ "mouse2", "mouse", "animal", "nature", "rodent" ], name = "mouse2", x = 11, y = 19 }
    , { category = AnimalsAndNature, char = "🐂", keywords = [ "ox", "ox", "animal", "cow", "beef" ], name = "ox", x = 11, y = 20 }
    , { category = AnimalsAndNature, char = "🐃", keywords = [ "water buffalo", "water buffalo", "animal", "nature", "ox", "cow" ], name = "water_buffalo", x = 11, y = 21 }
    , { category = AnimalsAndNature, char = "🐄", keywords = [ "cow2", "cow", "beef", "ox", "animal", "nature", "moo", "milk" ], name = "cow2", x = 11, y = 22 }
    , { category = AnimalsAndNature, char = "🐅", keywords = [ "tiger2", "tiger", "animal", "nature", "roar" ], name = "tiger2", x = 11, y = 23 }
    , { category = AnimalsAndNature, char = "🐆", keywords = [ "leopard", "leopard", "animal", "nature" ], name = "leopard", x = 11, y = 24 }
    , { category = AnimalsAndNature, char = "🐇", keywords = [ "rabbit2", "rabbit", "animal", "nature", "pet", "magic", "spring" ], name = "rabbit2", x = 11, y = 25 }
    , { category = AnimalsAndNature, char = "🐈\u{200D}⬛", keywords = [ "black cat", "black cat", "superstition", "luck" ], name = "black_cat", x = 11, y = 26 }
    , { category = AnimalsAndNature, char = "🐈", keywords = [ "cat2", "cat", "animal", "meow", "pet", "cats" ], name = "cat2", x = 11, y = 27 }
    , { category = AnimalsAndNature, char = "🐉", keywords = [ "dragon", "dragon", "animal", "myth", "nature", "chinese", "green" ], name = "dragon", x = 11, y = 28 }
    , { category = AnimalsAndNature, char = "🐊", keywords = [ "crocodile", "crocodile", "animal", "nature", "reptile", "lizard", "alligator" ], name = "crocodile", x = 11, y = 29 }
    , { category = AnimalsAndNature, char = "🐋", keywords = [ "whale2", "whale", "animal", "nature", "sea", "ocean" ], name = "whale2", x = 11, y = 30 }
    , { category = AnimalsAndNature, char = "🐌", keywords = [ "snail", "snail", "slow", "animal", "shell" ], name = "snail", x = 11, y = 31 }
    , { category = AnimalsAndNature, char = "🐍", keywords = [ "snake", "snake", "animal", "evil", "nature", "hiss", "python" ], name = "snake", x = 11, y = 32 }
    , { category = AnimalsAndNature, char = "🐎", keywords = [ "racehorse", "horse", "animal", "gamble", "luck" ], name = "racehorse", x = 11, y = 33 }
    , { category = AnimalsAndNature, char = "🐏", keywords = [ "ram", "ram", "animal", "sheep", "nature" ], name = "ram", x = 11, y = 34 }
    , { category = AnimalsAndNature, char = "🐐", keywords = [ "goat", "goat", "animal", "nature" ], name = "goat", x = 11, y = 35 }
    , { category = AnimalsAndNature, char = "🐑", keywords = [ "sheep", "ewe", "animal", "nature", "wool", "shipit" ], name = "sheep", x = 11, y = 36 }
    , { category = AnimalsAndNature, char = "🐒", keywords = [ "monkey", "monkey", "animal", "nature", "banana", "circus" ], name = "monkey", x = 11, y = 37 }
    , { category = AnimalsAndNature, char = "🐓", keywords = [ "rooster", "rooster", "animal", "nature", "chicken" ], name = "rooster", x = 11, y = 38 }
    , { category = AnimalsAndNature, char = "🐔", keywords = [ "chicken", "chicken", "animal", "cluck", "nature", "bird" ], name = "chicken", x = 11, y = 39 }
    , { category = AnimalsAndNature, char = "🐕\u{200D}\u{1F9BA}", keywords = [ "service dog", "service dog" ], name = "service_dog", x = 11, y = 40 }
    , { category = AnimalsAndNature, char = "🐕", keywords = [ "dog2", "dog", "animal", "nature", "friend", "doge", "pet", "faithful" ], name = "dog2", x = 11, y = 41 }
    , { category = AnimalsAndNature, char = "🐖", keywords = [ "pig2", "pig", "animal", "nature" ], name = "pig2", x = 11, y = 42 }
    , { category = AnimalsAndNature, char = "🐗", keywords = [ "boar", "boar", "animal", "nature" ], name = "boar", x = 11, y = 43 }
    , { category = AnimalsAndNature, char = "🐘", keywords = [ "elephant", "elephant", "animal", "nature", "nose", "th", "circus" ], name = "elephant", x = 11, y = 44 }
    , { category = AnimalsAndNature, char = "🐙", keywords = [ "octopus", "octopus", "animal", "creature", "ocean", "sea", "nature", "beach" ], name = "octopus", x = 11, y = 45 }
    , { category = AnimalsAndNature, char = "🐚", keywords = [ "shell", "spiral shell", "nature", "sea", "beach" ], name = "shell", x = 11, y = 46 }
    , { category = AnimalsAndNature, char = "🐛", keywords = [ "bug", "bug", "animal", "insect", "nature", "worm" ], name = "bug", x = 11, y = 47 }
    , { category = AnimalsAndNature, char = "🐜", keywords = [ "ant", "ant", "animal", "insect", "nature", "bug" ], name = "ant", x = 11, y = 48 }
    , { category = AnimalsAndNature, char = "🐝", keywords = [ "bee", "honeybee", "animal", "insect", "nature", "bug", "spring", "honey" ], name = "bee", x = 11, y = 49 }
    , { category = AnimalsAndNature, char = "🐞", keywords = [ "beetle", "lady beetle", "animal", "insect", "nature", "ladybug" ], name = "beetle", x = 11, y = 50 }
    , { category = AnimalsAndNature, char = "🐟", keywords = [ "fish", "fish", "animal", "food", "nature" ], name = "fish", x = 11, y = 51 }
    , { category = AnimalsAndNature, char = "🐠", keywords = [ "tropical fish", "tropical fish", "animal", "swim", "ocean", "beach", "nemo" ], name = "tropical_fish", x = 11, y = 52 }
    , { category = AnimalsAndNature, char = "🐡", keywords = [ "blowfish", "blowfish", "animal", "nature", "food", "sea", "ocean" ], name = "blowfish", x = 11, y = 53 }
    , { category = AnimalsAndNature, char = "🐢", keywords = [ "turtle", "turtle", "animal", "slow", "nature", "tortoise" ], name = "turtle", x = 11, y = 54 }
    , { category = AnimalsAndNature, char = "🐣", keywords = [ "hatching chick", "hatching chick", "animal", "chicken", "egg", "born", "baby", "bird" ], name = "hatching_chick", x = 11, y = 55 }
    , { category = AnimalsAndNature, char = "🐤", keywords = [ "baby chick", "baby chick", "animal", "chicken", "bird" ], name = "baby_chick", x = 11, y = 56 }
    , { category = AnimalsAndNature, char = "🐥", keywords = [ "hatched chick", "front facing baby chick", "animal", "chicken", "baby", "bird" ], name = "hatched_chick", x = 11, y = 57 }
    , { category = AnimalsAndNature, char = "🐦", keywords = [ "bird", "bird", "animal", "nature", "fly", "tweet", "spring" ], name = "bird", x = 12, y = 0 }
    , { category = AnimalsAndNature, char = "🐧", keywords = [ "penguin", "penguin", "animal", "nature" ], name = "penguin", x = 12, y = 1 }
    , { category = AnimalsAndNature, char = "🐨", keywords = [ "koala", "koala", "animal", "nature" ], name = "koala", x = 12, y = 2 }
    , { category = AnimalsAndNature, char = "🐩", keywords = [ "poodle", "poodle", "dog", "animal", "101", "nature", "pet" ], name = "poodle", x = 12, y = 3 }
    , { category = AnimalsAndNature, char = "🐪", keywords = [ "dromedary camel", "camel", "animal", "hot", "desert", "hump" ], name = "dromedary_camel", x = 12, y = 4 }
    , { category = AnimalsAndNature, char = "🐫", keywords = [ "camel", "two hump camel", "animal", "nature", "hot", "desert", "hump" ], name = "camel", x = 12, y = 5 }
    , { category = AnimalsAndNature, char = "🐬", keywords = [ "dolphin", "dolphin", "animal", "nature", "fish", "sea", "ocean", "flipper", "fins", "beach" ], name = "dolphin", x = 12, y = 6 }
    , { category = AnimalsAndNature, char = "🐭", keywords = [ "mouse", "mouse face", "animal", "nature", "cheese wedge", "rodent" ], name = "mouse", x = 12, y = 7 }
    , { category = AnimalsAndNature, char = "🐮", keywords = [ "cow", "cow face", "beef", "ox", "animal", "nature", "moo", "milk" ], name = "cow", x = 12, y = 8 }
    , { category = AnimalsAndNature, char = "🐯", keywords = [ "tiger", "tiger face", "animal", "cat", "danger", "wild", "nature", "roar" ], name = "tiger", x = 12, y = 9 }
    , { category = AnimalsAndNature, char = "🐰", keywords = [ "rabbit", "rabbit face", "animal", "nature", "pet", "spring", "magic", "bunny" ], name = "rabbit", x = 12, y = 10 }
    , { category = AnimalsAndNature, char = "🐱", keywords = [ "cat", "cat face", "animal", "meow", "nature", "pet", "kitten" ], name = "cat", x = 12, y = 11 }
    , { category = AnimalsAndNature, char = "🐲", keywords = [ "dragon face", "dragon face", "animal", "myth", "nature", "chinese", "green" ], name = "dragon_face", x = 12, y = 12 }
    , { category = AnimalsAndNature, char = "🐳", keywords = [ "whale", "spouting whale", "animal", "nature", "sea", "ocean" ], name = "whale", x = 12, y = 13 }
    , { category = AnimalsAndNature, char = "🐴", keywords = [ "horse", "horse face", "animal", "brown", "nature" ], name = "horse", x = 12, y = 14 }
    , { category = AnimalsAndNature, char = "🐵", keywords = [ "monkey face", "monkey face", "animal", "nature", "circus" ], name = "monkey_face", x = 12, y = 15 }
    , { category = AnimalsAndNature, char = "🐶", keywords = [ "dog", "dog face", "animal", "friend", "nature", "woof", "puppy", "pet", "faithful" ], name = "dog", x = 12, y = 16 }
    , { category = AnimalsAndNature, char = "🐷", keywords = [ "pig", "pig face", "animal", "oink", "nature" ], name = "pig", x = 12, y = 17 }
    , { category = AnimalsAndNature, char = "🐸", keywords = [ "frog", "frog", "animal", "nature", "croak", "toad" ], name = "frog", x = 12, y = 18 }
    , { category = AnimalsAndNature, char = "🐹", keywords = [ "hamster", "hamster", "animal", "nature" ], name = "hamster", x = 12, y = 19 }
    , { category = AnimalsAndNature, char = "🐺", keywords = [ "wolf", "wolf", "animal", "nature", "wild" ], name = "wolf", x = 12, y = 20 }
    , { category = AnimalsAndNature, char = "🐻\u{200D}❄️", keywords = [ "polar bear", "polar bear", "animal", "arctic" ], name = "polar_bear", x = 12, y = 21 }
    , { category = AnimalsAndNature, char = "🐻", keywords = [ "bear", "bear", "animal", "nature", "wild" ], name = "bear", x = 12, y = 22 }
    , { category = AnimalsAndNature, char = "🐼", keywords = [ "panda face", "panda", "animal", "nature", "panda" ], name = "panda_face", x = 12, y = 23 }
    , { category = AnimalsAndNature, char = "🐽", keywords = [ "pig nose", "pig nose", "animal", "oink" ], name = "pig_nose", x = 12, y = 24 }
    , { category = AnimalsAndNature, char = "🐾", keywords = [ "feet", "paw prints", "animal", "tracking", "footprints", "dog", "cat", "pet", "feet" ], name = "feet", x = 12, y = 25 }
    , { category = AnimalsAndNature, char = "🐿️", keywords = [ "chipmunk", "chipmunk", "animal", "nature", "rodent", "squirrel" ], name = "chipmunk", x = 12, y = 26 }
    , { category = PeopleAndBody, char = "👀", keywords = [ "eyes", "eyes", "look", "watch", "stalk", "peek", "see" ], name = "eyes", x = 12, y = 27 }
    , { category = SmileysAndEmotion, char = "👁️\u{200D}🗨️", keywords = [ "eye in speech bubble", "eye in speech bubble" ], name = "eye-in-speech-bubble", x = 12, y = 28 }
    , { category = PeopleAndBody, char = "👁️", keywords = [ "eye", "eye", "face", "look", "see", "watch", "stare" ], name = "eye", x = 12, y = 29 }
    , { category = PeopleAndBody, char = "👂", keywords = [ "ear", "ear", "face", "hear", "sound", "listen" ], name = "ear", x = 12, y = 30 }
    , { category = PeopleAndBody, char = "👃", keywords = [ "nose", "nose", "smell", "sniff" ], name = "nose", x = 12, y = 36 }
    , { category = PeopleAndBody, char = "👄", keywords = [ "lips", "mouth", "mouth", "kiss" ], name = "lips", x = 12, y = 42 }
    , { category = PeopleAndBody, char = "👅", keywords = [ "tongue", "tongue", "mouth", "playful" ], name = "tongue", x = 12, y = 43 }
    , { category = PeopleAndBody, char = "👆", keywords = [ "point up 2", "backhand index pointing up", "fingers", "hand", "direction", "up" ], name = "point_up_2", x = 12, y = 44 }
    , { category = PeopleAndBody, char = "👇", keywords = [ "point down", "backhand index pointing down", "fingers", "hand", "direction", "down" ], name = "point_down", x = 12, y = 50 }
    , { category = PeopleAndBody, char = "👈", keywords = [ "point left", "backhand index pointing left", "direction", "fingers", "hand", "left" ], name = "point_left", x = 12, y = 56 }
    , { category = PeopleAndBody, char = "👉", keywords = [ "point right", "backhand index pointing right", "fingers", "hand", "direction", "right" ], name = "point_right", x = 13, y = 4 }
    , { category = PeopleAndBody, char = "👊", keywords = [ "facepunch", "oncoming fist", "angry", "violence", "fist", "hit", "attack", "hand" ], name = "facepunch", x = 13, y = 10 }
    , { category = PeopleAndBody, char = "👋", keywords = [ "wave", "waving hand", "hands", "gesture", "goodbye", "solong", "farewell", "hello", "hi", "palm" ], name = "wave", x = 13, y = 16 }
    , { category = PeopleAndBody, char = "👌", keywords = [ "ok hand", "ok hand", "fingers", "limbs", "perfect", "ok", "okay" ], name = "ok_hand", x = 13, y = 22 }
    , { category = PeopleAndBody, char = "👍", keywords = [ "+1", "thumbs up", "thumbsup", "yes", "awesome", "good", "agree", "accept", "cool", "hand", "like" ], name = "+1", x = 13, y = 28 }
    , { category = PeopleAndBody, char = "👎", keywords = [ " 1", "thumbs down", "thumbsdown", "no", "dislike", "hand" ], name = "-1", x = 13, y = 34 }
    , { category = PeopleAndBody, char = "👏", keywords = [ "clap", "clapping hands", "hands", "praise", "applause", "congrats", "yay" ], name = "clap", x = 13, y = 40 }
    , { category = PeopleAndBody, char = "👐", keywords = [ "open hands", "open hands", "fingers", "butterfly", "hands", "open" ], name = "open_hands", x = 13, y = 46 }
    , { category = Objects, char = "👑", keywords = [ "crown", "crown", "king", "kod", "leader", "royalty", "lord" ], name = "crown", x = 13, y = 52 }
    , { category = Objects, char = "👒", keywords = [ "womans hat", "woman s hat", "fashion", "accessories", "female", "lady", "spring" ], name = "womans_hat", x = 13, y = 53 }
    , { category = Objects, char = "👓", keywords = [ "eyeglasses", "glasses", "fashion", "accessories", "eyesight", "nerdy", "dork", "geek" ], name = "eyeglasses", x = 13, y = 54 }
    , { category = Objects, char = "👔", keywords = [ "necktie", "necktie", "shirt", "suitup", "formal", "fashion", "cloth", "business" ], name = "necktie", x = 13, y = 55 }
    , { category = Objects, char = "👕", keywords = [ "shirt", "t shirt", "fashion", "cloth", "casual", "shirt", "tee" ], name = "shirt", x = 13, y = 56 }
    , { category = Objects, char = "👖", keywords = [ "jeans", "jeans", "fashion", "shopping" ], name = "jeans", x = 13, y = 57 }
    , { category = Objects, char = "👗", keywords = [ "dress", "dress", "clothes", "fashion", "shopping" ], name = "dress", x = 14, y = 0 }
    , { category = Objects, char = "👘", keywords = [ "kimono", "kimono", "dress", "fashion", "women", "female", "japanese" ], name = "kimono", x = 14, y = 1 }
    , { category = Objects, char = "👙", keywords = [ "bikini", "bikini", "swimming", "female", "woman", "girl", "fashion", "beach", "summer" ], name = "bikini", x = 14, y = 2 }
    , { category = Objects, char = "👚", keywords = [ "womans clothes", "woman s clothes", "fashion", "shopping bags", "female" ], name = "womans_clothes", x = 14, y = 3 }
    , { category = Objects, char = "👛", keywords = [ "purse", "purse", "fashion", "accessories", "money", "sales", "shopping" ], name = "purse", x = 14, y = 4 }
    , { category = Objects, char = "👜", keywords = [ "handbag", "handbag", "fashion", "accessory", "accessories", "shopping" ], name = "handbag", x = 14, y = 5 }
    , { category = Objects, char = "👝", keywords = [ "pouch", "clutch bag", "bag", "accessories", "shopping" ], name = "pouch", x = 14, y = 6 }
    , { category = Objects, char = "👞", keywords = [ "mans shoe", "man s shoe", "fashion", "male" ], name = "mans_shoe", x = 14, y = 7 }
    , { category = Objects, char = "👟", keywords = [ "athletic shoe", "running shoe", "shoes", "sports", "sneakers" ], name = "athletic_shoe", x = 14, y = 8 }
    , { category = Objects, char = "👠", keywords = [ "high heel", "high heeled shoe", "fashion", "shoes", "female", "pumps", "stiletto" ], name = "high_heel", x = 14, y = 9 }
    , { category = Objects, char = "👡", keywords = [ "sandal", "woman s sandal", "shoes", "fashion", "flip flops" ], name = "sandal", x = 14, y = 10 }
    , { category = Objects, char = "👢", keywords = [ "boot", "woman s boot", "shoes", "fashion" ], name = "boot", x = 14, y = 11 }
    , { category = PeopleAndBody, char = "👣", keywords = [ "footprints", "footprints", "feet", "tracking", "walking", "beach" ], name = "footprints", x = 14, y = 12 }
    , { category = PeopleAndBody, char = "👤", keywords = [ "bust in silhouette", "bust in silhouette", "user", "person", "human" ], name = "bust_in_silhouette", x = 14, y = 13 }
    , { category = PeopleAndBody, char = "👥", keywords = [ "busts in silhouette", "busts in silhouette", "user", "person", "human", "group", "team" ], name = "busts_in_silhouette", x = 14, y = 14 }
    , { category = PeopleAndBody, char = "👦", keywords = [ "boy", "boy", "man", "male", "guy", "teenager" ], name = "boy", x = 14, y = 15 }
    , { category = PeopleAndBody, char = "👧", keywords = [ "girl", "girl", "female", "woman", "teenager" ], name = "girl", x = 14, y = 21 }
    , { category = PeopleAndBody, char = "👨\u{200D}🌾", keywords = [ "male farmer", "man farmer", "rancher", "gardener", "man", "human" ], name = "male-farmer", x = 14, y = 27 }
    , { category = PeopleAndBody, char = "👨\u{200D}🍳", keywords = [ "male cook", "man cook", "chef", "man", "human" ], name = "male-cook", x = 14, y = 33 }
    , { category = PeopleAndBody, char = "👨\u{200D}🍼", keywords = [ "man feeding baby", "man feeding baby", "birth", "food" ], name = "man_feeding_baby", x = 14, y = 39 }
    , { category = PeopleAndBody, char = "👨\u{200D}🎓", keywords = [ "male student", "man student", "graduate", "man", "human" ], name = "male-student", x = 14, y = 45 }
    , { category = PeopleAndBody, char = "👨\u{200D}🎤", keywords = [ "male singer", "man singer", "rockstar", "entertainer", "man", "human" ], name = "male-singer", x = 14, y = 51 }
    , { category = PeopleAndBody, char = "👨\u{200D}🎨", keywords = [ "male artist", "man artist", "painter", "man", "human" ], name = "male-artist", x = 14, y = 57 }
    , { category = PeopleAndBody, char = "👨\u{200D}🏫", keywords = [ "male teacher", "man teacher", "instructor", "professor", "man", "human" ], name = "male-teacher", x = 15, y = 5 }
    , { category = PeopleAndBody, char = "👨\u{200D}🏭", keywords = [ "male factory worker", "man factory worker", "assembly", "industrial", "man", "human" ], name = "male-factory-worker", x = 15, y = 11 }
    , { category = PeopleAndBody, char = "👨\u{200D}👦\u{200D}👦", keywords = [ "man boy boy", "family man boy boy", "home", "parent", "people", "human", "children" ], name = "man-boy-boy", x = 15, y = 17 }
    , { category = PeopleAndBody, char = "👨\u{200D}👦", keywords = [ "man boy", "family man boy", "home", "parent", "people", "human", "child" ], name = "man-boy", x = 15, y = 18 }
    , { category = PeopleAndBody, char = "👨\u{200D}👧\u{200D}👦", keywords = [ "man girl boy", "family man girl boy", "home", "parent", "people", "human", "children" ], name = "man-girl-boy", x = 15, y = 19 }
    , { category = PeopleAndBody, char = "👨\u{200D}👧\u{200D}👧", keywords = [ "man girl girl", "family man girl girl", "home", "parent", "people", "human", "children" ], name = "man-girl-girl", x = 15, y = 20 }
    , { category = PeopleAndBody, char = "👨\u{200D}👧", keywords = [ "man girl", "family man girl", "home", "parent", "people", "human", "child" ], name = "man-girl", x = 15, y = 21 }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👦", keywords = [ "man man boy", "family man man boy", "home", "parents", "people", "human", "children" ], name = "man-man-boy", x = 15, y = 22 }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👦\u{200D}👦", keywords = [ "man man boy boy", "family man man boy boy", "home", "parents", "people", "human", "children" ], name = "man-man-boy-boy", x = 15, y = 23 }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👧", keywords = [ "man man girl", "family man man girl", "home", "parents", "people", "human", "children" ], name = "man-man-girl", x = 15, y = 24 }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👧\u{200D}👦", keywords = [ "man man girl boy", "family man man girl boy", "home", "parents", "people", "human", "children" ], name = "man-man-girl-boy", x = 15, y = 25 }
    , { category = PeopleAndBody, char = "👨\u{200D}👨\u{200D}👧\u{200D}👧", keywords = [ "man man girl girl", "family man man girl girl", "home", "parents", "people", "human", "children" ], name = "man-man-girl-girl", x = 15, y = 26 }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👦", keywords = [ "man woman boy", "family man woman boy" ], name = "man-woman-boy", x = 15, y = 27 }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👦\u{200D}👦", keywords = [ "man woman boy boy", "family man woman boy boy", "home", "parents", "people", "human", "children" ], name = "man-woman-boy-boy", x = 15, y = 28 }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👧", keywords = [ "man woman girl", "family man woman girl", "home", "parents", "people", "human", "child" ], name = "man-woman-girl", x = 15, y = 29 }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👧\u{200D}👦", keywords = [ "man woman girl boy", "family man woman girl boy", "home", "parents", "people", "human", "children" ], name = "man-woman-girl-boy", x = 15, y = 30 }
    , { category = PeopleAndBody, char = "👨\u{200D}👩\u{200D}👧\u{200D}👧", keywords = [ "man woman girl girl", "family man woman girl girl", "home", "parents", "people", "human", "children" ], name = "man-woman-girl-girl", x = 15, y = 31 }
    , { category = PeopleAndBody, char = "👨\u{200D}💻", keywords = [ "male technologist", "man technologist", "coder", "developer", "engineer", "programmer", "software", "man", "human", "laptop", "computer" ], name = "male-technologist", x = 15, y = 32 }
    , { category = PeopleAndBody, char = "👨\u{200D}💼", keywords = [ "male office worker", "man office worker", "business", "manager", "man", "human" ], name = "male-office-worker", x = 15, y = 38 }
    , { category = PeopleAndBody, char = "👨\u{200D}🔧", keywords = [ "male mechanic", "man mechanic", "plumber", "man", "human", "wrench" ], name = "male-mechanic", x = 15, y = 44 }
    , { category = PeopleAndBody, char = "👨\u{200D}🔬", keywords = [ "male scientist", "man scientist", "biologist", "chemist", "engineer", "physicist", "man", "human" ], name = "male-scientist", x = 15, y = 50 }
    , { category = PeopleAndBody, char = "👨\u{200D}🚀", keywords = [ "male astronaut", "man astronaut", "space", "rocket", "man", "human" ], name = "male-astronaut", x = 15, y = 56 }
    , { category = PeopleAndBody, char = "👨\u{200D}🚒", keywords = [ "male firefighter", "man firefighter", "fireman", "man", "human" ], name = "male-firefighter", x = 16, y = 4 }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9AF}", keywords = [ "man with probing cane", "man with probing cane" ], name = "man_with_probing_cane", x = 16, y = 10 }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B0}", keywords = [ "red haired man", "man red hair" ], name = "red_haired_man", x = 16, y = 16 }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B1}", keywords = [ "curly haired man", "man curly hair" ], name = "curly_haired_man", x = 16, y = 22 }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B2}", keywords = [ "bald man", "man bald" ], name = "bald_man", x = 16, y = 28 }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9B3}", keywords = [ "white haired man", "man white hair" ], name = "white_haired_man", x = 16, y = 34 }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9BC}", keywords = [ "man in motorized wheelchair", "man in motorized wheelchair" ], name = "man_in_motorized_wheelchair", x = 16, y = 40 }
    , { category = PeopleAndBody, char = "👨\u{200D}\u{1F9BD}", keywords = [ "man in manual wheelchair", "man in manual wheelchair" ], name = "man_in_manual_wheelchair", x = 16, y = 46 }
    , { category = PeopleAndBody, char = "👨\u{200D}⚕️", keywords = [ "male doctor", "man health worker", "doctor", "nurse", "therapist", "healthcare", "man", "human" ], name = "male-doctor", x = 16, y = 52 }
    , { category = PeopleAndBody, char = "👨\u{200D}⚖️", keywords = [ "male judge", "man judge", "justice", "court", "man", "human" ], name = "male-judge", x = 17, y = 0 }
    , { category = PeopleAndBody, char = "👨\u{200D}✈️", keywords = [ "male pilot", "man pilot", "aviator", "plane", "man", "human" ], name = "male-pilot", x = 17, y = 6 }
    , { category = PeopleAndBody, char = "👨\u{200D}❤️\u{200D}👨", keywords = [ "man heart man", "couple with heart man man", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage" ], name = "man-heart-man", x = 17, y = 12 }
    , { category = PeopleAndBody, char = "👨\u{200D}❤️\u{200D}💋\u{200D}👨", keywords = [ "man kiss man", "kiss man man", "pair", "valentines", "love", "like", "dating", "marriage" ], name = "man-kiss-man", x = 17, y = 13 }
    , { category = PeopleAndBody, char = "👨", keywords = [ "man", "man", "mustache", "father", "dad", "guy", "classy", "sir", "moustache" ], name = "man", x = 17, y = 14 }
    , { category = PeopleAndBody, char = "👩\u{200D}🌾", keywords = [ "female farmer", "woman farmer", "rancher", "gardener", "woman", "human" ], name = "female-farmer", x = 17, y = 20 }
    , { category = PeopleAndBody, char = "👩\u{200D}🍳", keywords = [ "female cook", "woman cook", "chef", "woman", "human" ], name = "female-cook", x = 17, y = 26 }
    , { category = PeopleAndBody, char = "👩\u{200D}🍼", keywords = [ "woman feeding baby", "woman feeding baby", "birth", "food" ], name = "woman_feeding_baby", x = 17, y = 32 }
    , { category = PeopleAndBody, char = "👩\u{200D}🎓", keywords = [ "female student", "woman student", "graduate", "woman", "human" ], name = "female-student", x = 17, y = 38 }
    , { category = PeopleAndBody, char = "👩\u{200D}🎤", keywords = [ "female singer", "woman singer", "rockstar", "entertainer", "woman", "human" ], name = "female-singer", x = 17, y = 44 }
    , { category = PeopleAndBody, char = "👩\u{200D}🎨", keywords = [ "female artist", "woman artist", "painter", "woman", "human" ], name = "female-artist", x = 17, y = 50 }
    , { category = PeopleAndBody, char = "👩\u{200D}🏫", keywords = [ "female teacher", "woman teacher", "instructor", "professor", "woman", "human" ], name = "female-teacher", x = 17, y = 56 }
    , { category = PeopleAndBody, char = "👩\u{200D}🏭", keywords = [ "female factory worker", "woman factory worker", "assembly", "industrial", "woman", "human" ], name = "female-factory-worker", x = 18, y = 4 }
    , { category = PeopleAndBody, char = "👩\u{200D}👦\u{200D}👦", keywords = [ "woman boy boy", "family woman boy boy", "home", "parent", "people", "human", "children" ], name = "woman-boy-boy", x = 18, y = 10 }
    , { category = PeopleAndBody, char = "👩\u{200D}👦", keywords = [ "woman boy", "family woman boy", "home", "parent", "people", "human", "child" ], name = "woman-boy", x = 18, y = 11 }
    , { category = PeopleAndBody, char = "👩\u{200D}👧\u{200D}👦", keywords = [ "woman girl boy", "family woman girl boy", "home", "parent", "people", "human", "children" ], name = "woman-girl-boy", x = 18, y = 12 }
    , { category = PeopleAndBody, char = "👩\u{200D}👧\u{200D}👧", keywords = [ "woman girl girl", "family woman girl girl", "home", "parent", "people", "human", "children" ], name = "woman-girl-girl", x = 18, y = 13 }
    , { category = PeopleAndBody, char = "👩\u{200D}👧", keywords = [ "woman girl", "family woman girl", "home", "parent", "people", "human", "child" ], name = "woman-girl", x = 18, y = 14 }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👦", keywords = [ "woman woman boy", "family woman woman boy", "home", "parents", "people", "human", "children" ], name = "woman-woman-boy", x = 18, y = 15 }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👦\u{200D}👦", keywords = [ "woman woman boy boy", "family woman woman boy boy", "home", "parents", "people", "human", "children" ], name = "woman-woman-boy-boy", x = 18, y = 16 }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👧", keywords = [ "woman woman girl", "family woman woman girl", "home", "parents", "people", "human", "children" ], name = "woman-woman-girl", x = 18, y = 17 }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👧\u{200D}👦", keywords = [ "woman woman girl boy", "family woman woman girl boy", "home", "parents", "people", "human", "children" ], name = "woman-woman-girl-boy", x = 18, y = 18 }
    , { category = PeopleAndBody, char = "👩\u{200D}👩\u{200D}👧\u{200D}👧", keywords = [ "woman woman girl girl", "family woman woman girl girl", "home", "parents", "people", "human", "children" ], name = "woman-woman-girl-girl", x = 18, y = 19 }
    , { category = PeopleAndBody, char = "👩\u{200D}💻", keywords = [ "female technologist", "woman technologist", "coder", "developer", "engineer", "programmer", "software", "woman", "human", "laptop", "computer" ], name = "female-technologist", x = 18, y = 20 }
    , { category = PeopleAndBody, char = "👩\u{200D}💼", keywords = [ "female office worker", "woman office worker", "business", "manager", "woman", "human" ], name = "female-office-worker", x = 18, y = 26 }
    , { category = PeopleAndBody, char = "👩\u{200D}🔧", keywords = [ "female mechanic", "woman mechanic", "plumber", "woman", "human", "wrench" ], name = "female-mechanic", x = 18, y = 32 }
    , { category = PeopleAndBody, char = "👩\u{200D}🔬", keywords = [ "female scientist", "woman scientist", "biologist", "chemist", "engineer", "physicist", "woman", "human" ], name = "female-scientist", x = 18, y = 38 }
    , { category = PeopleAndBody, char = "👩\u{200D}🚀", keywords = [ "female astronaut", "woman astronaut", "space", "rocket", "woman", "human" ], name = "female-astronaut", x = 18, y = 44 }
    , { category = PeopleAndBody, char = "👩\u{200D}🚒", keywords = [ "female firefighter", "woman firefighter", "fireman", "woman", "human" ], name = "female-firefighter", x = 18, y = 50 }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9AF}", keywords = [ "woman with probing cane", "woman with probing cane" ], name = "woman_with_probing_cane", x = 18, y = 56 }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B0}", keywords = [ "red haired woman", "woman red hair" ], name = "red_haired_woman", x = 19, y = 4 }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B1}", keywords = [ "curly haired woman", "woman curly hair" ], name = "curly_haired_woman", x = 19, y = 10 }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B2}", keywords = [ "bald woman", "woman bald" ], name = "bald_woman", x = 19, y = 16 }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9B3}", keywords = [ "white haired woman", "woman white hair" ], name = "white_haired_woman", x = 19, y = 22 }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9BC}", keywords = [ "woman in motorized wheelchair", "woman in motorized wheelchair" ], name = "woman_in_motorized_wheelchair", x = 19, y = 28 }
    , { category = PeopleAndBody, char = "👩\u{200D}\u{1F9BD}", keywords = [ "woman in manual wheelchair", "woman in manual wheelchair" ], name = "woman_in_manual_wheelchair", x = 19, y = 34 }
    , { category = PeopleAndBody, char = "👩\u{200D}⚕️", keywords = [ "female doctor", "woman health worker", "doctor", "nurse", "therapist", "healthcare", "woman", "human" ], name = "female-doctor", x = 19, y = 40 }
    , { category = PeopleAndBody, char = "👩\u{200D}⚖️", keywords = [ "female judge", "woman judge", "justice", "court", "woman", "human" ], name = "female-judge", x = 19, y = 46 }
    , { category = PeopleAndBody, char = "👩\u{200D}✈️", keywords = [ "female pilot", "woman pilot", "aviator", "plane", "woman", "human" ], name = "female-pilot", x = 19, y = 52 }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}👨", keywords = [ "woman heart man", "couple with heart woman man" ], name = "woman-heart-man", x = 20, y = 0 }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}👩", keywords = [ "woman heart woman", "couple with heart woman woman", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage" ], name = "woman-heart-woman", x = 20, y = 1 }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}💋\u{200D}👨", keywords = [ "woman kiss man", "kiss woman man" ], name = "woman-kiss-man", x = 20, y = 2 }
    , { category = PeopleAndBody, char = "👩\u{200D}❤️\u{200D}💋\u{200D}👩", keywords = [ "woman kiss woman", "kiss woman woman", "pair", "valentines", "love", "like", "dating", "marriage" ], name = "woman-kiss-woman", x = 20, y = 3 }
    , { category = PeopleAndBody, char = "👩", keywords = [ "woman", "woman", "female", "girls", "lady" ], name = "woman", x = 20, y = 4 }
    , { category = PeopleAndBody, char = "👪", keywords = [ "family", "family", "home", "parents", "child", "mom", "dad", "father", "mother", "people", "human" ], name = "family", x = 20, y = 10 }
    , { category = PeopleAndBody, char = "👫", keywords = [ "couple", "woman and man holding hands", "pair", "people", "human", "love", "date", "dating", "like", "affection", "valentines", "marriage" ], name = "couple", x = 20, y = 11 }
    , { category = PeopleAndBody, char = "👬", keywords = [ "two men holding hands", "men holding hands", "pair", "couple", "love", "like", "bromance", "friendship", "people", "human" ], name = "two_men_holding_hands", x = 20, y = 37 }
    , { category = PeopleAndBody, char = "👭", keywords = [ "two women holding hands", "women holding hands", "pair", "friendship", "couple", "love", "like", "female", "people", "human" ], name = "two_women_holding_hands", x = 21, y = 5 }
    , { category = PeopleAndBody, char = "👮\u{200D}♀️", keywords = [ "female police officer", "woman police officer", "woman", "police", "law", "legal", "enforcement", "arrest", "911", "female" ], name = "female-police-officer", x = 21, y = 31 }
    , { category = PeopleAndBody, char = "👮\u{200D}♂️", keywords = [ "male police officer", "man police officer", "man", "police", "law", "legal", "enforcement", "arrest", "911" ], name = "male-police-officer", x = 21, y = 37 }
    , { category = PeopleAndBody, char = "👮", keywords = [ "cop", "police officer" ], name = "cop", x = 21, y = 43 }
    , { category = PeopleAndBody, char = "👯\u{200D}♀️", keywords = [ "woman with bunny ears partying", "women with bunny ears", "female", "bunny", "women", "girls" ], name = "woman-with-bunny-ears-partying", x = 21, y = 49 }
    , { category = PeopleAndBody, char = "👯\u{200D}♂️", keywords = [ "man with bunny ears partying", "men with bunny ears", "male", "bunny", "men", "boys" ], name = "man-with-bunny-ears-partying", x = 21, y = 50 }
    , { category = PeopleAndBody, char = "👯", keywords = [ "dancers", "people with bunny ears" ], name = "dancers", x = 21, y = 51 }
    , { category = PeopleAndBody, char = "👰\u{200D}♀️", keywords = [ "woman with veil", "woman with veil", "wedding", "marriage" ], name = "woman_with_veil", x = 21, y = 52 }
    , { category = PeopleAndBody, char = "👰\u{200D}♂️", keywords = [ "man with veil", "man with veil", "wedding", "marriage" ], name = "man_with_veil", x = 22, y = 0 }
    , { category = PeopleAndBody, char = "👰", keywords = [ "bride with veil", "bride with veil", "couple", "marriage", "wedding", "woman", "bride" ], name = "bride_with_veil", x = 22, y = 6 }
    , { category = PeopleAndBody, char = "👱\u{200D}♀️", keywords = [ "blond haired woman", "woman blond hair", "woman", "female", "girl", "blonde", "person" ], name = "blond-haired-woman", x = 22, y = 12 }
    , { category = PeopleAndBody, char = "👱\u{200D}♂️", keywords = [ "blond haired man", "man blond hair", "man", "male", "boy", "blonde", "guy", "person" ], name = "blond-haired-man", x = 22, y = 18 }
    , { category = PeopleAndBody, char = "👱", keywords = [ "person with blond hair", "person blond hair" ], name = "person_with_blond_hair", x = 22, y = 24 }
    , { category = PeopleAndBody, char = "👲", keywords = [ "man with gua pi mao", "man with skullcap", "male", "boy", "chinese" ], name = "man_with_gua_pi_mao", x = 22, y = 30 }
    , { category = PeopleAndBody, char = "👳\u{200D}♀️", keywords = [ "woman wearing turban", "woman wearing turban", "female", "indian", "hinduism", "arabs", "woman" ], name = "woman-wearing-turban", x = 22, y = 36 }
    , { category = PeopleAndBody, char = "👳\u{200D}♂️", keywords = [ "man wearing turban", "man wearing turban", "male", "indian", "hinduism", "arabs" ], name = "man-wearing-turban", x = 22, y = 42 }
    , { category = PeopleAndBody, char = "👳", keywords = [ "man with turban", "person wearing turban" ], name = "man_with_turban", x = 22, y = 48 }
    , { category = PeopleAndBody, char = "👴", keywords = [ "older man", "old man", "human", "male", "men", "old", "elder", "senior" ], name = "older_man", x = 22, y = 54 }
    , { category = PeopleAndBody, char = "👵", keywords = [ "older woman", "old woman", "human", "female", "women", "lady", "old", "elder", "senior" ], name = "older_woman", x = 23, y = 2 }
    , { category = PeopleAndBody, char = "👶", keywords = [ "baby", "baby", "child", "boy", "girl", "toddler" ], name = "baby", x = 23, y = 8 }
    , { category = PeopleAndBody, char = "👷\u{200D}♀️", keywords = [ "female construction worker", "woman construction worker", "female", "human", "wip", "build", "construction", "worker", "labor", "woman" ], name = "female-construction-worker", x = 23, y = 14 }
    , { category = PeopleAndBody, char = "👷\u{200D}♂️", keywords = [ "male construction worker", "man construction worker", "male", "human", "wip", "guy", "build", "construction", "worker", "labor" ], name = "male-construction-worker", x = 23, y = 20 }
    , { category = PeopleAndBody, char = "👷", keywords = [ "construction worker", "construction worker" ], name = "construction_worker", x = 23, y = 26 }
    , { category = PeopleAndBody, char = "👸", keywords = [ "princess", "princess", "girl", "woman", "female", "blond", "crown", "royal", "queen" ], name = "princess", x = 23, y = 32 }
    , { category = SmileysAndEmotion, char = "👹", keywords = [ "japanese ogre", "ogre", "monster", "red", "mask", "halloween", "scary", "creepy", "devil", "demon", "japanese", "ogre" ], name = "japanese_ogre", x = 23, y = 38 }
    , { category = SmileysAndEmotion, char = "👺", keywords = [ "japanese goblin", "goblin", "red", "evil", "mask", "monster", "scary", "creepy", "japanese", "goblin" ], name = "japanese_goblin", x = 23, y = 39 }
    , { category = SmileysAndEmotion, char = "👻", keywords = [ "ghost", "ghost", "halloween", "spooky", "scary" ], name = "ghost", x = 23, y = 40 }
    , { category = PeopleAndBody, char = "👼", keywords = [ "angel", "baby angel", "heaven", "wings", "halo" ], name = "angel", x = 23, y = 41 }
    , { category = SmileysAndEmotion, char = "👽", keywords = [ "alien", "alien", "UFO", "paul", "weird", "outer space" ], name = "alien", x = 23, y = 47 }
    , { category = SmileysAndEmotion, char = "👾", keywords = [ "space invader", "alien monster", "game", "arcade", "play" ], name = "space_invader", x = 23, y = 48 }
    , { category = SmileysAndEmotion, char = "👿", keywords = [ "imp", "angry face with horns", "devil", "angry", "horns" ], name = "imp", x = 23, y = 49 }
    , { category = SmileysAndEmotion, char = "💀", keywords = [ "skull", "skull", "dead", "skeleton", "creepy", "death" ], name = "skull", x = 23, y = 50 }
    , { category = PeopleAndBody, char = "💁\u{200D}♀️", keywords = [ "woman tipping hand", "woman tipping hand", "female", "girl", "woman", "human", "information" ], name = "woman-tipping-hand", x = 23, y = 51 }
    , { category = PeopleAndBody, char = "💁\u{200D}♂️", keywords = [ "man tipping hand", "man tipping hand", "male", "boy", "man", "human", "information" ], name = "man-tipping-hand", x = 23, y = 57 }
    , { category = PeopleAndBody, char = "💁", keywords = [ "information desk person", "person tipping hand" ], name = "information_desk_person", x = 24, y = 5 }
    , { category = PeopleAndBody, char = "💂\u{200D}♀️", keywords = [ "female guard", "woman guard", "uk", "gb", "british", "female", "royal", "woman" ], name = "female-guard", x = 24, y = 11 }
    , { category = PeopleAndBody, char = "💂\u{200D}♂️", keywords = [ "male guard", "man guard", "uk", "gb", "british", "male", "guy", "royal" ], name = "male-guard", x = 24, y = 17 }
    , { category = PeopleAndBody, char = "💂", keywords = [ "guardsman", "guard" ], name = "guardsman", x = 24, y = 23 }
    , { category = PeopleAndBody, char = "💃", keywords = [ "dancer", "woman dancing", "female", "girl", "woman", "fun" ], name = "dancer", x = 24, y = 29 }
    , { category = Objects, char = "💄", keywords = [ "lipstick", "lipstick", "female", "girl", "fashion", "woman" ], name = "lipstick", x = 24, y = 35 }
    , { category = PeopleAndBody, char = "💅", keywords = [ "nail care", "nail polish", "beauty", "manicure", "finger", "fashion", "nail" ], name = "nail_care", x = 24, y = 36 }
    , { category = PeopleAndBody, char = "💆\u{200D}♀️", keywords = [ "woman getting massage", "woman getting massage", "female", "girl", "woman", "head" ], name = "woman-getting-massage", x = 24, y = 42 }
    , { category = PeopleAndBody, char = "💆\u{200D}♂️", keywords = [ "man getting massage", "man getting massage", "male", "boy", "man", "head" ], name = "man-getting-massage", x = 24, y = 48 }
    , { category = PeopleAndBody, char = "💆", keywords = [ "massage", "person getting massage" ], name = "massage", x = 24, y = 54 }
    , { category = PeopleAndBody, char = "💇\u{200D}♀️", keywords = [ "woman getting haircut", "woman getting haircut", "female", "girl", "woman" ], name = "woman-getting-haircut", x = 25, y = 2 }
    , { category = PeopleAndBody, char = "💇\u{200D}♂️", keywords = [ "man getting haircut", "man getting haircut", "male", "boy", "man" ], name = "man-getting-haircut", x = 25, y = 8 }
    , { category = PeopleAndBody, char = "💇", keywords = [ "haircut", "person getting haircut" ], name = "haircut", x = 25, y = 14 }
    , { category = TravelAndPlaces, char = "💈", keywords = [ "barber", "barber pole", "hair", "salon", "style" ], name = "barber", x = 25, y = 20 }
    , { category = Objects, char = "💉", keywords = [ "syringe", "syringe", "health", "hospital", "drugs", "blood", "medicine", "needle", "doctor", "nurse" ], name = "syringe", x = 25, y = 21 }
    , { category = Objects, char = "💊", keywords = [ "pill", "pill", "health", "medicine", "doctor", "pharmacy", "drug" ], name = "pill", x = 25, y = 22 }
    , { category = SmileysAndEmotion, char = "💋", keywords = [ "kiss", "kiss mark", "face", "lips", "love", "like", "affection", "valentines" ], name = "kiss", x = 25, y = 23 }
    , { category = SmileysAndEmotion, char = "💌", keywords = [ "love letter", "love letter", "email", "like", "affection", "envelope", "valentines" ], name = "love_letter", x = 25, y = 24 }
    , { category = Objects, char = "💍", keywords = [ "ring", "ring", "wedding", "propose", "marriage", "valentines", "diamond", "fashion", "jewelry", "gem", "engagement" ], name = "ring", x = 25, y = 25 }
    , { category = Objects, char = "💎", keywords = [ "gem", "gem stone", "blue", "ruby", "diamond", "jewelry" ], name = "gem", x = 25, y = 26 }
    , { category = PeopleAndBody, char = "💏", keywords = [ "couplekiss", "kiss", "pair", "valentines", "love", "like", "dating", "marriage" ], name = "couplekiss", x = 25, y = 27 }
    , { category = AnimalsAndNature, char = "💐", keywords = [ "bouquet", "bouquet", "flowers", "nature", "spring" ], name = "bouquet", x = 25, y = 28 }
    , { category = PeopleAndBody, char = "💑", keywords = [ "couple with heart", "couple with heart", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage" ], name = "couple_with_heart", x = 25, y = 29 }
    , { category = TravelAndPlaces, char = "💒", keywords = [ "wedding", "wedding", "love", "like", "affection", "couple", "marriage", "bride", "groom" ], name = "wedding", x = 25, y = 30 }
    , { category = SmileysAndEmotion, char = "💓", keywords = [ "heartbeat", "beating heart", "love", "like", "affection", "valentines", "pink", "heart" ], name = "heartbeat", x = 25, y = 31 }
    , { category = SmileysAndEmotion, char = "💔", keywords = [ "broken heart", "broken heart", "sad", "sorry", "break", "heart", "heartbreak" ], name = "broken_heart", x = 25, y = 32 }
    , { category = SmileysAndEmotion, char = "💕", keywords = [ "two hearts", "two hearts", "love", "like", "affection", "valentines", "heart" ], name = "two_hearts", x = 25, y = 33 }
    , { category = SmileysAndEmotion, char = "💖", keywords = [ "sparkling heart", "sparkling heart", "love", "like", "affection", "valentines" ], name = "sparkling_heart", x = 25, y = 34 }
    , { category = SmileysAndEmotion, char = "💗", keywords = [ "heartpulse", "growing heart", "like", "love", "affection", "valentines", "pink" ], name = "heartpulse", x = 25, y = 35 }
    , { category = SmileysAndEmotion, char = "💘", keywords = [ "cupid", "heart with arrow", "love", "like", "heart", "affection", "valentines" ], name = "cupid", x = 25, y = 36 }
    , { category = SmileysAndEmotion, char = "💙", keywords = [ "blue heart", "blue heart", "love", "like", "affection", "valentines" ], name = "blue_heart", x = 25, y = 37 }
    , { category = SmileysAndEmotion, char = "💚", keywords = [ "green heart", "green heart", "love", "like", "affection", "valentines" ], name = "green_heart", x = 25, y = 38 }
    , { category = SmileysAndEmotion, char = "💛", keywords = [ "yellow heart", "yellow heart", "love", "like", "affection", "valentines" ], name = "yellow_heart", x = 25, y = 39 }
    , { category = SmileysAndEmotion, char = "💜", keywords = [ "purple heart", "purple heart", "love", "like", "affection", "valentines" ], name = "purple_heart", x = 25, y = 40 }
    , { category = SmileysAndEmotion, char = "💝", keywords = [ "gift heart", "heart with ribbon", "love", "valentines" ], name = "gift_heart", x = 25, y = 41 }
    , { category = SmileysAndEmotion, char = "💞", keywords = [ "revolving hearts", "revolving hearts", "love", "like", "affection", "valentines" ], name = "revolving_hearts", x = 25, y = 42 }
    , { category = SmileysAndEmotion, char = "💟", keywords = [ "heart decoration", "heart decoration", "purple square", "love", "like" ], name = "heart_decoration", x = 25, y = 43 }
    , { category = Symbols, char = "💠", keywords = [ "diamond shape with a dot inside", "diamond with a dot", "jewel", "blue", "gem", "crystal", "fancy" ], name = "diamond_shape_with_a_dot_inside", x = 25, y = 44 }
    , { category = Objects, char = "💡", keywords = [ "bulb", "light bulb", "light", "electricity", "idea" ], name = "bulb", x = 25, y = 45 }
    , { category = SmileysAndEmotion, char = "💢", keywords = [ "anger", "anger symbol", "angry", "mad" ], name = "anger", x = 25, y = 46 }
    , { category = SmileysAndEmotion, char = "💣", keywords = [ "bomb", "bomb", "boom", "explode", "explosion", "terrorism" ], name = "bomb", x = 25, y = 47 }
    , { category = SmileysAndEmotion, char = "💤", keywords = [ "zzz", "zzz", "sleepy", "tired", "dream" ], name = "zzz", x = 25, y = 48 }
    , { category = SmileysAndEmotion, char = "💥", keywords = [ "boom", "collision", "bomb", "explode", "explosion", "collision", "blown" ], name = "boom", x = 25, y = 49 }
    , { category = SmileysAndEmotion, char = "💦", keywords = [ "sweat drops", "sweat droplets", "water", "drip", "oops" ], name = "sweat_drops", x = 25, y = 50 }
    , { category = TravelAndPlaces, char = "💧", keywords = [ "droplet", "droplet", "water", "drip", "faucet", "spring" ], name = "droplet", x = 25, y = 51 }
    , { category = SmileysAndEmotion, char = "💨", keywords = [ "dash", "dashing away", "wind", "air", "fast", "shoo", "fart", "smoke", "puff" ], name = "dash", x = 25, y = 52 }
    , { category = SmileysAndEmotion, char = "💩", keywords = [ "hankey", "pile of poo", "hankey", "shitface", "fail", "turd", "shit" ], name = "hankey", x = 25, y = 53 }
    , { category = PeopleAndBody, char = "💪", keywords = [ "muscle", "flexed biceps", "arm", "flex", "hand", "summer", "strong", "biceps" ], name = "muscle", x = 25, y = 54 }
    , { category = SmileysAndEmotion, char = "💫", keywords = [ "dizzy", "dizzy", "star", "sparkle", "shoot", "magic" ], name = "dizzy", x = 26, y = 2 }
    , { category = SmileysAndEmotion, char = "💬", keywords = [ "speech balloon", "speech balloon", "bubble", "words", "message", "talk", "chatting" ], name = "speech_balloon", x = 26, y = 3 }
    , { category = SmileysAndEmotion, char = "💭", keywords = [ "thought balloon", "thought balloon", "bubble", "cloud", "speech", "thinking", "dream" ], name = "thought_balloon", x = 26, y = 4 }
    , { category = AnimalsAndNature, char = "💮", keywords = [ "white flower", "white flower", "japanese", "spring" ], name = "white_flower", x = 26, y = 5 }
    , { category = SmileysAndEmotion, char = "💯", keywords = [ "100", "hundred points", "score", "perfect", "numbers", "century", "exam", "quiz", "test", "pass", "hundred" ], name = "100", x = 26, y = 6 }
    , { category = Objects, char = "💰", keywords = [ "moneybag", "money bag", "dollar", "payment", "coins", "sale" ], name = "moneybag", x = 26, y = 7 }
    , { category = Symbols, char = "💱", keywords = [ "currency exchange", "currency exchange", "money", "sales", "dollar", "travel" ], name = "currency_exchange", x = 26, y = 8 }
    , { category = Symbols, char = "💲", keywords = [ "heavy dollar sign", "heavy dollar sign", "money", "sales", "payment", "currency", "buck" ], name = "heavy_dollar_sign", x = 26, y = 9 }
    , { category = Objects, char = "💳", keywords = [ "credit card", "credit card", "money", "sales", "dollar", "bill", "payment", "shopping" ], name = "credit_card", x = 26, y = 10 }
    , { category = Objects, char = "💴", keywords = [ "yen", "yen banknote", "money", "sales", "japanese", "dollar", "currency" ], name = "yen", x = 26, y = 11 }
    , { category = Objects, char = "💵", keywords = [ "dollar", "dollar banknote", "money", "sales", "bill", "currency" ], name = "dollar", x = 26, y = 12 }
    , { category = Objects, char = "💶", keywords = [ "euro", "euro banknote", "money", "sales", "dollar", "currency" ], name = "euro", x = 26, y = 13 }
    , { category = Objects, char = "💷", keywords = [ "pound", "pound banknote", "british", "sterling", "money", "sales", "bills", "uk", "england", "currency" ], name = "pound", x = 26, y = 14 }
    , { category = Objects, char = "💸", keywords = [ "money with wings", "money with wings", "dollar", "bills", "payment", "sale" ], name = "money_with_wings", x = 26, y = 15 }
    , { category = Objects, char = "💹", keywords = [ "chart", "chart increasing with yen", "green square", "graph", "presentation", "stats" ], name = "chart", x = 26, y = 16 }
    , { category = TravelAndPlaces, char = "💺", keywords = [ "seat", "seat", "sit", "airplane", "transport", "bus", "flight", "fly" ], name = "seat", x = 26, y = 17 }
    , { category = Objects, char = "💻", keywords = [ "computer", "laptop", "technology", "laptop", "screen", "display", "monitor" ], name = "computer", x = 26, y = 18 }
    , { category = Objects, char = "💼", keywords = [ "briefcase", "briefcase", "business", "documents", "work", "law", "legal", "job", "career" ], name = "briefcase", x = 26, y = 19 }
    , { category = Objects, char = "💽", keywords = [ "minidisc", "computer disk", "technology", "record", "data", "disk", "90s" ], name = "minidisc", x = 26, y = 20 }
    , { category = Objects, char = "💾", keywords = [ "floppy disk", "floppy disk", "oldschool", "technology", "save", "90s", "80s" ], name = "floppy_disk", x = 26, y = 21 }
    , { category = Objects, char = "💿", keywords = [ "cd", "optical disk", "technology", "dvd", "disk", "disc", "90s" ], name = "cd", x = 26, y = 22 }
    , { category = Objects, char = "📀", keywords = [ "dvd", "dvd", "cd", "disk", "disc" ], name = "dvd", x = 26, y = 23 }
    , { category = Objects, char = "📁", keywords = [ "file folder", "file folder", "documents", "business", "office" ], name = "file_folder", x = 26, y = 24 }
    , { category = Objects, char = "📂", keywords = [ "open file folder", "open file folder", "documents", "load" ], name = "open_file_folder", x = 26, y = 25 }
    , { category = Objects, char = "📃", keywords = [ "page with curl", "page with curl", "documents", "office", "paper" ], name = "page_with_curl", x = 26, y = 26 }
    , { category = Objects, char = "📄", keywords = [ "page facing up", "page facing up", "documents", "office", "paper", "information" ], name = "page_facing_up", x = 26, y = 27 }
    , { category = Objects, char = "📅", keywords = [ "date", "calendar", "calendar", "schedule" ], name = "date", x = 26, y = 28 }
    , { category = Objects, char = "📆", keywords = [ "calendar", "tear off calendar", "schedule", "date", "planning" ], name = "calendar", x = 26, y = 29 }
    , { category = Objects, char = "📇", keywords = [ "card index", "card index", "business", "stationery" ], name = "card_index", x = 26, y = 30 }
    , { category = Objects, char = "📈", keywords = [ "chart with upwards trend", "chart increasing", "graph", "presentation", "stats", "recovery", "business", "economics", "money", "sales", "good", "success" ], name = "chart_with_upwards_trend", x = 26, y = 31 }
    , { category = Objects, char = "📉", keywords = [ "chart with downwards trend", "chart decreasing", "graph", "presentation", "stats", "recession", "business", "economics", "money", "sales", "bad", "failure" ], name = "chart_with_downwards_trend", x = 26, y = 32 }
    , { category = Objects, char = "📊", keywords = [ "bar chart", "bar chart", "graph", "presentation", "stats" ], name = "bar_chart", x = 26, y = 33 }
    , { category = Objects, char = "📋", keywords = [ "clipboard", "clipboard", "stationery", "documents" ], name = "clipboard", x = 26, y = 34 }
    , { category = Objects, char = "📌", keywords = [ "pushpin", "pushpin", "stationery", "mark", "here" ], name = "pushpin", x = 26, y = 35 }
    , { category = Objects, char = "📍", keywords = [ "round pushpin", "round pushpin", "stationery", "location", "map", "here" ], name = "round_pushpin", x = 26, y = 36 }
    , { category = Objects, char = "📎", keywords = [ "paperclip", "paperclip", "documents", "stationery" ], name = "paperclip", x = 26, y = 37 }
    , { category = Objects, char = "📏", keywords = [ "straight ruler", "straight ruler", "stationery", "calculate", "length", "math", "school", "drawing", "architect", "sketch" ], name = "straight_ruler", x = 26, y = 38 }
    , { category = Objects, char = "📐", keywords = [ "triangular ruler", "triangular ruler", "stationery", "math", "architect", "sketch" ], name = "triangular_ruler", x = 26, y = 39 }
    , { category = Objects, char = "📑", keywords = [ "bookmark tabs", "bookmark tabs", "favorite", "save", "order", "tidy" ], name = "bookmark_tabs", x = 26, y = 40 }
    , { category = Objects, char = "📒", keywords = [ "ledger", "ledger", "notes", "paper" ], name = "ledger", x = 26, y = 41 }
    , { category = Objects, char = "📓", keywords = [ "notebook", "notebook", "stationery", "record", "notes", "paper", "study" ], name = "notebook", x = 26, y = 42 }
    , { category = Objects, char = "📔", keywords = [ "notebook with decorative cover", "notebook with decorative cover", "classroom", "notes", "record", "paper", "study" ], name = "notebook_with_decorative_cover", x = 26, y = 43 }
    , { category = Objects, char = "📕", keywords = [ "closed book", "closed book", "read", "library", "knowledge", "textbook", "learn" ], name = "closed_book", x = 26, y = 44 }
    , { category = Objects, char = "📖", keywords = [ "book", "open book", "book", "read", "library", "knowledge", "literature", "learn", "study" ], name = "book", x = 26, y = 45 }
    , { category = Objects, char = "📗", keywords = [ "green book", "green book", "read", "library", "knowledge", "study" ], name = "green_book", x = 26, y = 46 }
    , { category = Objects, char = "📘", keywords = [ "blue book", "blue book", "read", "library", "knowledge", "learn", "study" ], name = "blue_book", x = 26, y = 47 }
    , { category = Objects, char = "📙", keywords = [ "orange book", "orange book", "read", "library", "knowledge", "textbook", "study" ], name = "orange_book", x = 26, y = 48 }
    , { category = Objects, char = "📚", keywords = [ "books", "books", "literature", "library", "study" ], name = "books", x = 26, y = 49 }
    , { category = Symbols, char = "📛", keywords = [ "name badge", "name badge", "fire", "forbid" ], name = "name_badge", x = 26, y = 50 }
    , { category = Objects, char = "📜", keywords = [ "scroll", "scroll", "documents", "ancient", "history", "paper" ], name = "scroll", x = 26, y = 51 }
    , { category = Objects, char = "📝", keywords = [ "memo", "memo", "write", "documents", "stationery", "pencil", "paper", "writing", "legal", "exam", "quiz", "test", "study", "compose" ], name = "memo", x = 26, y = 52 }
    , { category = Objects, char = "📞", keywords = [ "telephone receiver", "telephone receiver", "technology", "communication", "dial" ], name = "telephone_receiver", x = 26, y = 53 }
    , { category = Objects, char = "📟", keywords = [ "pager", "pager", "bbcall", "oldschool", "90s" ], name = "pager", x = 26, y = 54 }
    , { category = Objects, char = "📠", keywords = [ "fax", "fax machine", "communication", "technology" ], name = "fax", x = 26, y = 55 }
    , { category = Objects, char = "📡", keywords = [ "satellite antenna", "satellite antenna", "communication", "future", "radio", "space" ], name = "satellite_antenna", x = 26, y = 56 }
    , { category = Objects, char = "📢", keywords = [ "loudspeaker", "loudspeaker", "volume", "sound" ], name = "loudspeaker", x = 26, y = 57 }
    , { category = Objects, char = "📣", keywords = [ "mega", "megaphone", "sound", "speaker", "volume" ], name = "mega", x = 27, y = 0 }
    , { category = Objects, char = "📤", keywords = [ "outbox tray", "outbox tray", "inbox", "email" ], name = "outbox_tray", x = 27, y = 1 }
    , { category = Objects, char = "📥", keywords = [ "inbox tray", "inbox tray", "email", "documents" ], name = "inbox_tray", x = 27, y = 2 }
    , { category = Objects, char = "📦", keywords = [ "package", "package", "mail", "gift", "cardboard", "box", "moving" ], name = "package", x = 27, y = 3 }
    , { category = Objects, char = "📧", keywords = [ "e mail", "e mail", "communication", "inbox" ], name = "e-mail", x = 27, y = 4 }
    , { category = Objects, char = "📨", keywords = [ "incoming envelope", "incoming envelope", "email", "inbox" ], name = "incoming_envelope", x = 27, y = 5 }
    , { category = Objects, char = "📩", keywords = [ "envelope with arrow", "envelope with arrow", "email", "communication" ], name = "envelope_with_arrow", x = 27, y = 6 }
    , { category = Objects, char = "📪", keywords = [ "mailbox closed", "closed mailbox with lowered flag", "email", "communication", "inbox" ], name = "mailbox_closed", x = 27, y = 7 }
    , { category = Objects, char = "📫", keywords = [ "mailbox", "closed mailbox with raised flag", "email", "inbox", "communication" ], name = "mailbox", x = 27, y = 8 }
    , { category = Objects, char = "📬", keywords = [ "mailbox with mail", "open mailbox with raised flag", "email", "inbox", "communication" ], name = "mailbox_with_mail", x = 27, y = 9 }
    , { category = Objects, char = "📭", keywords = [ "mailbox with no mail", "open mailbox with lowered flag", "email", "inbox" ], name = "mailbox_with_no_mail", x = 27, y = 10 }
    , { category = Objects, char = "📮", keywords = [ "postbox", "postbox", "email", "letter", "envelope" ], name = "postbox", x = 27, y = 11 }
    , { category = Objects, char = "📯", keywords = [ "postal horn", "postal horn", "instrument", "music" ], name = "postal_horn", x = 27, y = 12 }
    , { category = Objects, char = "📰", keywords = [ "newspaper", "newspaper", "press", "headline" ], name = "newspaper", x = 27, y = 13 }
    , { category = Objects, char = "📱", keywords = [ "iphone", "mobile phone", "technology", "apple", "gadgets", "dial" ], name = "iphone", x = 27, y = 14 }
    , { category = Objects, char = "📲", keywords = [ "calling", "mobile phone with arrow", "iphone", "incoming" ], name = "calling", x = 27, y = 15 }
    , { category = Symbols, char = "📳", keywords = [ "vibration mode", "vibration mode", "orange square", "phone" ], name = "vibration_mode", x = 27, y = 16 }
    , { category = Symbols, char = "📴", keywords = [ "mobile phone off", "mobile phone off", "mute", "orange square", "silence", "quiet" ], name = "mobile_phone_off", x = 27, y = 17 }
    , { category = Symbols, char = "📵", keywords = [ "no mobile phones", "no mobile phones", "iphone", "mute", "circle" ], name = "no_mobile_phones", x = 27, y = 18 }
    , { category = Symbols, char = "📶", keywords = [ "signal strength", "antenna bars", "blue square", "reception", "phone", "internet", "connection", "wifi", "bluetooth", "bars" ], name = "signal_strength", x = 27, y = 19 }
    , { category = Objects, char = "📷", keywords = [ "camera", "camera", "gadgets", "photography" ], name = "camera", x = 27, y = 20 }
    , { category = Objects, char = "📸", keywords = [ "camera with flash", "camera with flash", "photography", "gadgets" ], name = "camera_with_flash", x = 27, y = 21 }
    , { category = Objects, char = "📹", keywords = [ "video camera", "video camera", "film", "record" ], name = "video_camera", x = 27, y = 22 }
    , { category = Objects, char = "📺", keywords = [ "tv", "television", "technology", "program", "oldschool", "show", "television" ], name = "tv", x = 27, y = 23 }
    , { category = Objects, char = "📻", keywords = [ "radio", "radio", "communication", "music", "podcast", "program" ], name = "radio", x = 27, y = 24 }
    , { category = Objects, char = "📼", keywords = [ "vhs", "videocassette", "record", "video", "oldschool", "90s", "80s" ], name = "vhs", x = 27, y = 25 }
    , { category = Objects, char = "📽️", keywords = [ "film projector", "film projector", "video", "tape", "record", "movie" ], name = "film_projector", x = 27, y = 26 }
    , { category = Objects, char = "\u{1F4FF}", keywords = [ "prayer beads", "prayer beads", "dhikr", "religious" ], name = "prayer_beads", x = 27, y = 27 }
    , { category = Symbols, char = "🔀", keywords = [ "twisted rightwards arrows", "shuffle tracks button", "blue square", "shuffle", "music", "random" ], name = "twisted_rightwards_arrows", x = 27, y = 28 }
    , { category = Symbols, char = "🔁", keywords = [ "repeat", "repeat button", "loop", "record" ], name = "repeat", x = 27, y = 29 }
    , { category = Symbols, char = "🔂", keywords = [ "repeat one", "repeat single button", "blue square", "loop" ], name = "repeat_one", x = 27, y = 30 }
    , { category = Symbols, char = "🔃", keywords = [ "arrows clockwise", "clockwise vertical arrows", "sync", "cycle", "round", "repeat" ], name = "arrows_clockwise", x = 27, y = 31 }
    , { category = Symbols, char = "🔄", keywords = [ "arrows counterclockwise", "counterclockwise arrows button", "blue square", "sync", "cycle" ], name = "arrows_counterclockwise", x = 27, y = 32 }
    , { category = Symbols, char = "🔅", keywords = [ "low brightness", "dim button", "sun", "afternoon", "warm", "summer" ], name = "low_brightness", x = 27, y = 33 }
    , { category = Symbols, char = "🔆", keywords = [ "high brightness", "bright button", "sun", "light" ], name = "high_brightness", x = 27, y = 34 }
    , { category = Objects, char = "🔇", keywords = [ "mute", "muted speaker", "sound", "volume", "silence", "quiet" ], name = "mute", x = 27, y = 35 }
    , { category = Objects, char = "🔈", keywords = [ "speaker", "speaker low volume", "sound", "volume", "silence", "broadcast" ], name = "speaker", x = 27, y = 36 }
    , { category = Objects, char = "🔉", keywords = [ "sound", "speaker medium volume", "volume", "speaker", "broadcast" ], name = "sound", x = 27, y = 37 }
    , { category = Objects, char = "🔊", keywords = [ "loud sound", "speaker high volume", "volume", "noise", "noisy", "speaker", "broadcast" ], name = "loud_sound", x = 27, y = 38 }
    , { category = Objects, char = "🔋", keywords = [ "battery", "battery", "power", "energy", "sustain" ], name = "battery", x = 27, y = 39 }
    , { category = Objects, char = "🔌", keywords = [ "electric plug", "electric plug", "charger", "power" ], name = "electric_plug", x = 27, y = 40 }
    , { category = Objects, char = "🔍", keywords = [ "mag", "magnifying glass tilted left", "search", "zoom", "find", "detective" ], name = "mag", x = 27, y = 41 }
    , { category = Objects, char = "🔎", keywords = [ "mag right", "magnifying glass tilted right", "search", "zoom", "find", "detective" ], name = "mag_right", x = 27, y = 42 }
    , { category = Objects, char = "🔏", keywords = [ "lock with ink pen", "locked with pen", "security", "secret" ], name = "lock_with_ink_pen", x = 27, y = 43 }
    , { category = Objects, char = "🔐", keywords = [ "closed lock with key", "locked with key", "security", "privacy" ], name = "closed_lock_with_key", x = 27, y = 44 }
    , { category = Objects, char = "🔑", keywords = [ "key", "key", "lock", "door", "password" ], name = "key", x = 27, y = 45 }
    , { category = Objects, char = "🔒", keywords = [ "lock", "locked", "security", "password", "padlock" ], name = "lock", x = 27, y = 46 }
    , { category = Objects, char = "🔓", keywords = [ "unlock", "unlocked", "privacy", "security" ], name = "unlock", x = 27, y = 47 }
    , { category = Objects, char = "🔔", keywords = [ "bell", "bell", "sound", "notification", "christmas", "xmas", "chime" ], name = "bell", x = 27, y = 48 }
    , { category = Objects, char = "🔕", keywords = [ "no bell", "bell with slash", "sound", "volume", "mute", "quiet", "silent" ], name = "no_bell", x = 27, y = 49 }
    , { category = Objects, char = "🔖", keywords = [ "bookmark", "bookmark", "favorite", "label", "save" ], name = "bookmark", x = 27, y = 50 }
    , { category = Objects, char = "🔗", keywords = [ "link", "link", "rings", "url" ], name = "link", x = 27, y = 51 }
    , { category = Symbols, char = "🔘", keywords = [ "radio button", "radio button", "input", "old", "music", "circle" ], name = "radio_button", x = 27, y = 52 }
    , { category = Symbols, char = "🔙", keywords = [ "back", "back arrow", "arrow", "words", "return" ], name = "back", x = 27, y = 53 }
    , { category = Symbols, char = "🔚", keywords = [ "end", "end arrow", "words", "arrow" ], name = "end", x = 27, y = 54 }
    , { category = Symbols, char = "🔛", keywords = [ "on", "on arrow", "arrow", "words" ], name = "on", x = 27, y = 55 }
    , { category = Symbols, char = "🔜", keywords = [ "soon", "soon arrow", "arrow", "words" ], name = "soon", x = 27, y = 56 }
    , { category = Symbols, char = "🔝", keywords = [ "top", "top arrow", "words", "blue square" ], name = "top", x = 27, y = 57 }
    , { category = Symbols, char = "🔞", keywords = [ "underage", "no one under eighteen", "18", "drink", "pub", "night", "minor", "circle" ], name = "underage", x = 28, y = 0 }
    , { category = Symbols, char = "🔟", keywords = [ "keycap ten", "keycap 10", "numbers", "10", "blue square" ], name = "keycap_ten", x = 28, y = 1 }
    , { category = Symbols, char = "🔠", keywords = [ "capital abcd", "input latin uppercase", "alphabet", "words", "blue square" ], name = "capital_abcd", x = 28, y = 2 }
    , { category = Symbols, char = "🔡", keywords = [ "abcd", "input latin lowercase", "blue square", "alphabet" ], name = "abcd", x = 28, y = 3 }
    , { category = Symbols, char = "🔢", keywords = [ "1234", "input numbers", "numbers", "blue square" ], name = "1234", x = 28, y = 4 }
    , { category = Symbols, char = "🔣", keywords = [ "symbols", "input symbols", "blue square", "music", "note", "ampersand", "percent", "glyphs", "characters" ], name = "symbols", x = 28, y = 5 }
    , { category = Symbols, char = "🔤", keywords = [ "abc", "input latin letters", "blue square", "alphabet" ], name = "abc", x = 28, y = 6 }
    , { category = TravelAndPlaces, char = "🔥", keywords = [ "fire", "fire", "hot", "cook", "flame" ], name = "fire", x = 28, y = 7 }
    , { category = Objects, char = "🔦", keywords = [ "flashlight", "flashlight", "dark", "camping", "sight", "night" ], name = "flashlight", x = 28, y = 8 }
    , { category = Objects, char = "🔧", keywords = [ "wrench", "wrench", "tools", "diy", "ikea", "fix", "maintainer" ], name = "wrench", x = 28, y = 9 }
    , { category = Objects, char = "🔨", keywords = [ "hammer", "hammer", "tools", "build", "create" ], name = "hammer", x = 28, y = 10 }
    , { category = Objects, char = "🔩", keywords = [ "nut and bolt", "nut and bolt", "handy", "tools", "fix" ], name = "nut_and_bolt", x = 28, y = 11 }
    , { category = FoodAndDrink, char = "🔪", keywords = [ "hocho", "kitchen knife", "knife", "blade", "cutlery", "kitchen", "weapon" ], name = "hocho", x = 28, y = 12 }
    , { category = Objects, char = "🔫", keywords = [ "gun", "pistol", "violence", "weapon", "pistol", "revolver" ], name = "gun", x = 28, y = 13 }
    , { category = Objects, char = "🔬", keywords = [ "microscope", "microscope", "laboratory", "experiment", "zoomin", "science", "study" ], name = "microscope", x = 28, y = 14 }
    , { category = Objects, char = "🔭", keywords = [ "telescope", "telescope", "stars", "space", "zoom", "science", "astronomy" ], name = "telescope", x = 28, y = 15 }
    , { category = Activities, char = "🔮", keywords = [ "crystal ball", "crystal ball", "disco", "party", "magic", "circus", "fortune teller" ], name = "crystal_ball", x = 28, y = 16 }
    , { category = Symbols, char = "🔯", keywords = [ "six pointed star", "dotted six pointed star", "purple square", "religion", "jewish", "hexagram" ], name = "six_pointed_star", x = 28, y = 17 }
    , { category = Symbols, char = "🔰", keywords = [ "beginner", "japanese symbol for beginner", "badge", "shield" ], name = "beginner", x = 28, y = 18 }
    , { category = Symbols, char = "🔱", keywords = [ "trident", "trident emblem", "weapon", "spear" ], name = "trident", x = 28, y = 19 }
    , { category = Symbols, char = "🔲", keywords = [ "black square button", "black square button", "shape", "input", "frame" ], name = "black_square_button", x = 28, y = 20 }
    , { category = Symbols, char = "🔳", keywords = [ "white square button", "white square button", "shape", "input" ], name = "white_square_button", x = 28, y = 21 }
    , { category = Symbols, char = "🔴", keywords = [ "red circle", "red circle", "shape", "error", "danger" ], name = "red_circle", x = 28, y = 22 }
    , { category = Symbols, char = "🔵", keywords = [ "large blue circle", "blue circle", "shape", "icon", "button" ], name = "large_blue_circle", x = 28, y = 23 }
    , { category = Symbols, char = "🔶", keywords = [ "large orange diamond", "large orange diamond", "shape", "jewel", "gem" ], name = "large_orange_diamond", x = 28, y = 24 }
    , { category = Symbols, char = "🔷", keywords = [ "large blue diamond", "large blue diamond", "shape", "jewel", "gem" ], name = "large_blue_diamond", x = 28, y = 25 }
    , { category = Symbols, char = "🔸", keywords = [ "small orange diamond", "small orange diamond", "shape", "jewel", "gem" ], name = "small_orange_diamond", x = 28, y = 26 }
    , { category = Symbols, char = "🔹", keywords = [ "small blue diamond", "small blue diamond", "shape", "jewel", "gem" ], name = "small_blue_diamond", x = 28, y = 27 }
    , { category = Symbols, char = "🔺", keywords = [ "small red triangle", "red triangle pointed up", "shape", "direction", "up", "top" ], name = "small_red_triangle", x = 28, y = 28 }
    , { category = Symbols, char = "🔻", keywords = [ "small red triangle down", "red triangle pointed down", "shape", "direction", "bottom" ], name = "small_red_triangle_down", x = 28, y = 29 }
    , { category = Symbols, char = "🔼", keywords = [ "arrow up small", "upwards button", "blue square", "triangle", "direction", "point", "forward", "top" ], name = "arrow_up_small", x = 28, y = 30 }
    , { category = Symbols, char = "🔽", keywords = [ "arrow down small", "downwards button", "blue square", "direction", "bottom" ], name = "arrow_down_small", x = 28, y = 31 }
    , { category = Symbols, char = "🕉️", keywords = [ "om symbol", "om", "hinduism", "buddhism", "sikhism", "jainism" ], name = "om_symbol", x = 28, y = 32 }
    , { category = AnimalsAndNature, char = "🕊️", keywords = [ "dove of peace", "dove", "animal", "bird" ], name = "dove_of_peace", x = 28, y = 33 }
    , { category = TravelAndPlaces, char = "\u{1F54B}", keywords = [ "kaaba", "kaaba", "mecca", "mosque", "islam" ], name = "kaaba", x = 28, y = 34 }
    , { category = TravelAndPlaces, char = "\u{1F54C}", keywords = [ "mosque", "mosque", "islam", "worship", "minaret" ], name = "mosque", x = 28, y = 35 }
    , { category = TravelAndPlaces, char = "\u{1F54D}", keywords = [ "synagogue", "synagogue", "judaism", "worship", "temple", "jewish" ], name = "synagogue", x = 28, y = 36 }
    , { category = Symbols, char = "\u{1F54E}", keywords = [ "menorah with nine branches", "menorah", "hanukkah", "candles", "jewish" ], name = "menorah_with_nine_branches", x = 28, y = 37 }
    , { category = TravelAndPlaces, char = "🕐", keywords = [ "clock1", "one o clock", "time", "late", "early", "schedule" ], name = "clock1", x = 28, y = 38 }
    , { category = TravelAndPlaces, char = "🕑", keywords = [ "clock2", "two o clock", "time", "late", "early", "schedule" ], name = "clock2", x = 28, y = 39 }
    , { category = TravelAndPlaces, char = "🕒", keywords = [ "clock3", "three o clock", "time", "late", "early", "schedule" ], name = "clock3", x = 28, y = 40 }
    , { category = TravelAndPlaces, char = "🕓", keywords = [ "clock4", "four o clock", "time", "late", "early", "schedule" ], name = "clock4", x = 28, y = 41 }
    , { category = TravelAndPlaces, char = "🕔", keywords = [ "clock5", "five o clock", "time", "late", "early", "schedule" ], name = "clock5", x = 28, y = 42 }
    , { category = TravelAndPlaces, char = "🕕", keywords = [ "clock6", "six o clock", "time", "late", "early", "schedule", "dawn", "dusk" ], name = "clock6", x = 28, y = 43 }
    , { category = TravelAndPlaces, char = "🕖", keywords = [ "clock7", "seven o clock", "time", "late", "early", "schedule" ], name = "clock7", x = 28, y = 44 }
    , { category = TravelAndPlaces, char = "🕗", keywords = [ "clock8", "eight o clock", "time", "late", "early", "schedule" ], name = "clock8", x = 28, y = 45 }
    , { category = TravelAndPlaces, char = "🕘", keywords = [ "clock9", "nine o clock", "time", "late", "early", "schedule" ], name = "clock9", x = 28, y = 46 }
    , { category = TravelAndPlaces, char = "🕙", keywords = [ "clock10", "ten o clock", "time", "late", "early", "schedule" ], name = "clock10", x = 28, y = 47 }
    , { category = TravelAndPlaces, char = "🕚", keywords = [ "clock11", "eleven o clock", "time", "late", "early", "schedule" ], name = "clock11", x = 28, y = 48 }
    , { category = TravelAndPlaces, char = "🕛", keywords = [ "clock12", "twelve o clock", "time", "noon", "midnight", "midday", "late", "early", "schedule" ], name = "clock12", x = 28, y = 49 }
    , { category = TravelAndPlaces, char = "🕜", keywords = [ "clock130", "one thirty", "time", "late", "early", "schedule" ], name = "clock130", x = 28, y = 50 }
    , { category = TravelAndPlaces, char = "🕝", keywords = [ "clock230", "two thirty", "time", "late", "early", "schedule" ], name = "clock230", x = 28, y = 51 }
    , { category = TravelAndPlaces, char = "🕞", keywords = [ "clock330", "three thirty", "time", "late", "early", "schedule" ], name = "clock330", x = 28, y = 52 }
    , { category = TravelAndPlaces, char = "🕟", keywords = [ "clock430", "four thirty", "time", "late", "early", "schedule" ], name = "clock430", x = 28, y = 53 }
    , { category = TravelAndPlaces, char = "🕠", keywords = [ "clock530", "five thirty", "time", "late", "early", "schedule" ], name = "clock530", x = 28, y = 54 }
    , { category = TravelAndPlaces, char = "🕡", keywords = [ "clock630", "six thirty", "time", "late", "early", "schedule" ], name = "clock630", x = 28, y = 55 }
    , { category = TravelAndPlaces, char = "🕢", keywords = [ "clock730", "seven thirty", "time", "late", "early", "schedule" ], name = "clock730", x = 28, y = 56 }
    , { category = TravelAndPlaces, char = "🕣", keywords = [ "clock830", "eight thirty", "time", "late", "early", "schedule" ], name = "clock830", x = 28, y = 57 }
    , { category = TravelAndPlaces, char = "🕤", keywords = [ "clock930", "nine thirty", "time", "late", "early", "schedule" ], name = "clock930", x = 29, y = 0 }
    , { category = TravelAndPlaces, char = "🕥", keywords = [ "clock1030", "ten thirty", "time", "late", "early", "schedule" ], name = "clock1030", x = 29, y = 1 }
    , { category = TravelAndPlaces, char = "🕦", keywords = [ "clock1130", "eleven thirty", "time", "late", "early", "schedule" ], name = "clock1130", x = 29, y = 2 }
    , { category = TravelAndPlaces, char = "🕧", keywords = [ "clock1230", "twelve thirty", "time", "late", "early", "schedule" ], name = "clock1230", x = 29, y = 3 }
    , { category = Objects, char = "🕯️", keywords = [ "candle", "candle", "fire", "wax" ], name = "candle", x = 29, y = 4 }
    , { category = TravelAndPlaces, char = "🕰️", keywords = [ "mantelpiece clock", "mantelpiece clock", "time" ], name = "mantelpiece_clock", x = 29, y = 5 }
    , { category = SmileysAndEmotion, char = "🕳️", keywords = [ "hole", "hole", "embarrassing" ], name = "hole", x = 29, y = 6 }
    , { category = PeopleAndBody, char = "🕴️", keywords = [ "man in business suit levitating", "man in suit levitating", "suit", "business", "levitate", "hover", "jump" ], name = "man_in_business_suit_levitating", x = 29, y = 7 }
    , { category = PeopleAndBody, char = "🕵️\u{200D}♀️", keywords = [ "female detective", "woman detective", "human", "spy", "detective", "female", "woman" ], name = "female-detective", x = 29, y = 13 }
    , { category = PeopleAndBody, char = "🕵️\u{200D}♂️", keywords = [ "male detective", "man detective" ], name = "male-detective", x = 29, y = 19 }
    , { category = PeopleAndBody, char = "🕵️", keywords = [ "sleuth or spy", "detective", "human", "spy", "detective" ], name = "sleuth_or_spy", x = 29, y = 25 }
    , { category = Objects, char = "🕶️", keywords = [ "dark sunglasses", "sunglasses", "face", "cool", "accessories" ], name = "dark_sunglasses", x = 29, y = 31 }
    , { category = AnimalsAndNature, char = "🕷️", keywords = [ "spider", "spider", "animal", "arachnid" ], name = "spider", x = 29, y = 32 }
    , { category = AnimalsAndNature, char = "🕸️", keywords = [ "spider web", "spider web", "animal", "insect", "arachnid", "silk" ], name = "spider_web", x = 29, y = 33 }
    , { category = Activities, char = "🕹️", keywords = [ "joystick", "joystick", "game", "play" ], name = "joystick", x = 29, y = 34 }
    , { category = PeopleAndBody, char = "\u{1F57A}", keywords = [ "man dancing", "man dancing", "male", "boy", "fun", "dancer" ], name = "man_dancing", x = 29, y = 35 }
    , { category = Objects, char = "🖇️", keywords = [ "linked paperclips", "linked paperclips", "documents", "stationery" ], name = "linked_paperclips", x = 29, y = 41 }
    , { category = Objects, char = "🖊️", keywords = [ "lower left ballpoint pen", "pen", "stationery", "writing", "write" ], name = "lower_left_ballpoint_pen", x = 29, y = 42 }
    , { category = Objects, char = "🖋️", keywords = [ "lower left fountain pen", "fountain pen", "stationery", "writing", "write" ], name = "lower_left_fountain_pen", x = 29, y = 43 }
    , { category = Objects, char = "🖌️", keywords = [ "lower left paintbrush", "paintbrush", "drawing", "creativity", "art" ], name = "lower_left_paintbrush", x = 29, y = 44 }
    , { category = Objects, char = "🖍️", keywords = [ "lower left crayon", "crayon", "drawing", "creativity" ], name = "lower_left_crayon", x = 29, y = 45 }
    , { category = PeopleAndBody, char = "🖐️", keywords = [ "raised hand with fingers splayed", "hand with fingers splayed", "hand", "fingers", "palm" ], name = "raised_hand_with_fingers_splayed", x = 29, y = 46 }
    , { category = PeopleAndBody, char = "🖕", keywords = [ "middle finger", "middle finger", "hand", "fingers", "rude", "middle", "flipping" ], name = "middle_finger", x = 29, y = 52 }
    , { category = PeopleAndBody, char = "🖖", keywords = [ "spock hand", "vulcan salute", "hand", "fingers", "spock", "star trek" ], name = "spock-hand", x = 30, y = 0 }
    , { category = SmileysAndEmotion, char = "\u{1F5A4}", keywords = [ "black heart", "black heart", "evil" ], name = "black_heart", x = 30, y = 6 }
    , { category = Objects, char = "🖥️", keywords = [ "desktop computer", "desktop computer", "technology", "computing", "screen" ], name = "desktop_computer", x = 30, y = 7 }
    , { category = Objects, char = "🖨️", keywords = [ "printer", "printer", "paper", "ink" ], name = "printer", x = 30, y = 8 }
    , { category = Objects, char = "🖱️", keywords = [ "three button mouse", "computer mouse", "click" ], name = "three_button_mouse", x = 30, y = 9 }
    , { category = Objects, char = "🖲️", keywords = [ "trackball", "trackball", "technology", "trackpad" ], name = "trackball", x = 30, y = 10 }
    , { category = Activities, char = "🖼️", keywords = [ "frame with picture", "framed picture", "photography" ], name = "frame_with_picture", x = 30, y = 11 }
    , { category = Objects, char = "🗂️", keywords = [ "card index dividers", "card index dividers", "organizing", "business", "stationery" ], name = "card_index_dividers", x = 30, y = 12 }
    , { category = Objects, char = "🗃️", keywords = [ "card file box", "card file box", "business", "stationery" ], name = "card_file_box", x = 30, y = 13 }
    , { category = Objects, char = "🗄️", keywords = [ "file cabinet", "file cabinet", "filing", "organizing" ], name = "file_cabinet", x = 30, y = 14 }
    , { category = Objects, char = "🗑️", keywords = [ "wastebasket", "wastebasket", "bin", "trash", "rubbish", "garbage", "toss" ], name = "wastebasket", x = 30, y = 15 }
    , { category = Objects, char = "🗒️", keywords = [ "spiral note pad", "spiral notepad", "memo", "stationery" ], name = "spiral_note_pad", x = 30, y = 16 }
    , { category = Objects, char = "🗓️", keywords = [ "spiral calendar pad", "spiral calendar", "date", "schedule", "planning" ], name = "spiral_calendar_pad", x = 30, y = 17 }
    , { category = Objects, char = "🗜️", keywords = [ "compression", "clamp", "tool" ], name = "compression", x = 30, y = 18 }
    , { category = Objects, char = "🗝️", keywords = [ "old key", "old key", "lock", "door", "password" ], name = "old_key", x = 30, y = 19 }
    , { category = Objects, char = "🗞️", keywords = [ "rolled up newspaper", "rolled up newspaper", "press", "headline" ], name = "rolled_up_newspaper", x = 30, y = 20 }
    , { category = Objects, char = "🗡️", keywords = [ "dagger knife", "dagger", "weapon" ], name = "dagger_knife", x = 30, y = 21 }
    , { category = PeopleAndBody, char = "🗣️", keywords = [ "speaking head in silhouette", "speaking head", "user", "person", "human", "sing", "say", "talk" ], name = "speaking_head_in_silhouette", x = 30, y = 22 }
    , { category = SmileysAndEmotion, char = "🗨️", keywords = [ "left speech bubble", "left speech bubble", "words", "message", "talk", "chatting" ], name = "left_speech_bubble", x = 30, y = 23 }
    , { category = SmileysAndEmotion, char = "🗯️", keywords = [ "right anger bubble", "right anger bubble", "caption", "speech", "thinking", "mad" ], name = "right_anger_bubble", x = 30, y = 24 }
    , { category = Objects, char = "🗳️", keywords = [ "ballot box with ballot", "ballot box with ballot", "election", "vote" ], name = "ballot_box_with_ballot", x = 30, y = 25 }
    , { category = TravelAndPlaces, char = "🗺️", keywords = [ "world map", "world map", "location", "direction" ], name = "world_map", x = 30, y = 26 }
    , { category = TravelAndPlaces, char = "🗻", keywords = [ "mount fuji", "mount fuji", "photo", "mountain", "nature", "japanese" ], name = "mount_fuji", x = 30, y = 27 }
    , { category = TravelAndPlaces, char = "🗼", keywords = [ "tokyo tower", "tokyo tower", "photo", "japanese" ], name = "tokyo_tower", x = 30, y = 28 }
    , { category = TravelAndPlaces, char = "🗽", keywords = [ "statue of liberty", "statue of liberty", "american", "newyork" ], name = "statue_of_liberty", x = 30, y = 29 }
    , { category = TravelAndPlaces, char = "🗾", keywords = [ "japan", "map of japan", "nation", "country", "japanese", "asia" ], name = "japan", x = 30, y = 30 }
    , { category = Objects, char = "🗿", keywords = [ "moyai", "moai", "rock", "easter island", "moai" ], name = "moyai", x = 30, y = 31 }
    , { category = SmileysAndEmotion, char = "😀", keywords = [ "grinning", "grinning face", "face", "smile", "happy", "joy", ":D", "grin" ], name = "grinning", x = 30, y = 32 }
    , { category = SmileysAndEmotion, char = "😁", keywords = [ "grin", "beaming face with smiling eyes", "face", "happy", "smile", "joy", "kawaii" ], name = "grin", x = 30, y = 33 }
    , { category = SmileysAndEmotion, char = "😂", keywords = [ "joy", "face with tears of joy", "face", "cry", "tears", "weep", "happy", "happytears", "haha" ], name = "joy", x = 30, y = 34 }
    , { category = SmileysAndEmotion, char = "😃", keywords = [ "smiley", "grinning face with big eyes", "face", "happy", "joy", "haha", ":D", ":)", "smile", "funny" ], name = "smiley", x = 30, y = 35 }
    , { category = SmileysAndEmotion, char = "😄", keywords = [ "smile", "grinning face with smiling eyes", "face", "happy", "joy", "funny", "haha", "laugh", "like", ":D", ":)" ], name = "smile", x = 30, y = 36 }
    , { category = SmileysAndEmotion, char = "😅", keywords = [ "sweat smile", "grinning face with sweat", "face", "hot", "happy", "laugh", "sweat", "smile", "relief" ], name = "sweat_smile", x = 30, y = 37 }
    , { category = SmileysAndEmotion, char = "😆", keywords = [ "laughing", "grinning squinting face", "happy", "joy", "lol", "satisfied", "haha", "face", "glad", "XD", "laugh" ], name = "laughing", x = 30, y = 38 }
    , { category = SmileysAndEmotion, char = "😇", keywords = [ "innocent", "smiling face with halo", "face", "angel", "heaven", "halo" ], name = "innocent", x = 30, y = 39 }
    , { category = SmileysAndEmotion, char = "😈", keywords = [ "smiling imp", "smiling face with horns", "devil", "horns" ], name = "smiling_imp", x = 30, y = 40 }
    , { category = SmileysAndEmotion, char = "😉", keywords = [ "wink", "winking face", "face", "happy", "mischievous", "secret", ";)", "smile", "eye" ], name = "wink", x = 30, y = 41 }
    , { category = SmileysAndEmotion, char = "😊", keywords = [ "blush", "smiling face with smiling eyes", "face", "smile", "happy", "flushed", "crush", "embarrassed", "shy", "joy" ], name = "blush", x = 30, y = 42 }
    , { category = SmileysAndEmotion, char = "😋", keywords = [ "yum", "face savoring food", "happy", "joy", "tongue", "smile", "face", "silly", "yummy", "nom", "delicious", "savouring" ], name = "yum", x = 30, y = 43 }
    , { category = SmileysAndEmotion, char = "😌", keywords = [ "relieved", "relieved face", "face", "relaxed", "phew", "massage", "happiness" ], name = "relieved", x = 30, y = 44 }
    , { category = SmileysAndEmotion, char = "😍", keywords = [ "heart eyes", "smiling face with heart eyes", "face", "love", "like", "affection", "valentines", "infatuation", "crush", "heart" ], name = "heart_eyes", x = 30, y = 45 }
    , { category = SmileysAndEmotion, char = "😎", keywords = [ "sunglasses", "smiling face with sunglasses", "face", "cool", "smile", "summer", "beach", "sunglass" ], name = "sunglasses", x = 30, y = 46 }
    , { category = SmileysAndEmotion, char = "😏", keywords = [ "smirk", "smirking face", "face", "smile", "mean", "prank", "smug", "sarcasm" ], name = "smirk", x = 30, y = 47 }
    , { category = SmileysAndEmotion, char = "😐", keywords = [ "neutral face", "neutral face", "indifference", "meh", ":|", "neutral" ], name = "neutral_face", x = 30, y = 48 }
    , { category = SmileysAndEmotion, char = "😑", keywords = [ "expressionless", "expressionless face", "face", "indifferent", "   ", "meh", "deadpan" ], name = "expressionless", x = 30, y = 49 }
    , { category = SmileysAndEmotion, char = "😒", keywords = [ "unamused", "unamused face", "indifference", "bored", "straight face", "serious", "sarcasm", "unimpressed", "skeptical", "dubious", "side eye" ], name = "unamused", x = 30, y = 50 }
    , { category = SmileysAndEmotion, char = "😓", keywords = [ "sweat", "downcast face with sweat", "face", "hot", "sad", "tired", "exercise" ], name = "sweat", x = 30, y = 51 }
    , { category = SmileysAndEmotion, char = "😔", keywords = [ "pensive", "pensive face", "face", "sad", "depressed", "upset" ], name = "pensive", x = 30, y = 52 }
    , { category = SmileysAndEmotion, char = "😕", keywords = [ "confused", "confused face", "face", "indifference", "huh", "weird", "hmmm", ":/" ], name = "confused", x = 30, y = 53 }
    , { category = SmileysAndEmotion, char = "😖", keywords = [ "confounded", "confounded face", "face", "confused", "sick", "unwell", "oops", ":S" ], name = "confounded", x = 30, y = 54 }
    , { category = SmileysAndEmotion, char = "😗", keywords = [ "kissing", "kissing face", "love", "like", "face", "3", "valentines", "infatuation", "kiss" ], name = "kissing", x = 30, y = 55 }
    , { category = SmileysAndEmotion, char = "😘", keywords = [ "kissing heart", "face blowing a kiss", "face", "love", "like", "affection", "valentines", "infatuation", "kiss" ], name = "kissing_heart", x = 30, y = 56 }
    , { category = SmileysAndEmotion, char = "😙", keywords = [ "kissing smiling eyes", "kissing face with smiling eyes", "face", "affection", "valentines", "infatuation", "kiss" ], name = "kissing_smiling_eyes", x = 30, y = 57 }
    , { category = SmileysAndEmotion, char = "😚", keywords = [ "kissing closed eyes", "kissing face with closed eyes", "face", "love", "like", "affection", "valentines", "infatuation", "kiss" ], name = "kissing_closed_eyes", x = 31, y = 0 }
    , { category = SmileysAndEmotion, char = "😛", keywords = [ "stuck out tongue", "face with tongue", "face", "prank", "childish", "playful", "mischievous", "smile", "tongue" ], name = "stuck_out_tongue", x = 31, y = 1 }
    , { category = SmileysAndEmotion, char = "😜", keywords = [ "stuck out tongue winking eye", "winking face with tongue", "face", "prank", "childish", "playful", "mischievous", "smile", "wink", "tongue" ], name = "stuck_out_tongue_winking_eye", x = 31, y = 2 }
    , { category = SmileysAndEmotion, char = "😝", keywords = [ "stuck out tongue closed eyes", "squinting face with tongue", "face", "prank", "playful", "mischievous", "smile", "tongue" ], name = "stuck_out_tongue_closed_eyes", x = 31, y = 3 }
    , { category = SmileysAndEmotion, char = "😞", keywords = [ "disappointed", "disappointed face", "face", "sad", "upset", "depressed", ":(" ], name = "disappointed", x = 31, y = 4 }
    , { category = SmileysAndEmotion, char = "😟", keywords = [ "worried", "worried face", "face", "concern", "nervous", ":(" ], name = "worried", x = 31, y = 5 }
    , { category = SmileysAndEmotion, char = "😠", keywords = [ "angry", "angry face", "mad", "face", "annoyed", "frustrated" ], name = "angry", x = 31, y = 6 }
    , { category = SmileysAndEmotion, char = "😡", keywords = [ "rage", "pouting face", "angry", "mad", "hate", "despise" ], name = "rage", x = 31, y = 7 }
    , { category = SmileysAndEmotion, char = "😢", keywords = [ "cry", "crying face", "face", "tears", "sad", "depressed", "upset", ":'(" ], name = "cry", x = 31, y = 8 }
    , { category = SmileysAndEmotion, char = "😣", keywords = [ "persevere", "persevering face", "face", "sick", "no", "upset", "oops" ], name = "persevere", x = 31, y = 9 }
    , { category = SmileysAndEmotion, char = "😤", keywords = [ "triumph", "face with steam from nose", "face", "gas", "phew", "proud", "pride" ], name = "triumph", x = 31, y = 10 }
    , { category = SmileysAndEmotion, char = "😥", keywords = [ "disappointed relieved", "sad but relieved face", "face", "phew", "sweat", "nervous" ], name = "disappointed_relieved", x = 31, y = 11 }
    , { category = SmileysAndEmotion, char = "😦", keywords = [ "frowning", "frowning face with open mouth", "face", "aw", "what" ], name = "frowning", x = 31, y = 12 }
    , { category = SmileysAndEmotion, char = "😧", keywords = [ "anguished", "anguished face", "face", "stunned", "nervous" ], name = "anguished", x = 31, y = 13 }
    , { category = SmileysAndEmotion, char = "😨", keywords = [ "fearful", "fearful face", "face", "scared", "terrified", "nervous", "oops", "huh" ], name = "fearful", x = 31, y = 14 }
    , { category = SmileysAndEmotion, char = "😩", keywords = [ "weary", "weary face", "face", "tired", "sleepy", "sad", "frustrated", "upset" ], name = "weary", x = 31, y = 15 }
    , { category = SmileysAndEmotion, char = "😪", keywords = [ "sleepy", "sleepy face", "face", "tired", "rest", "nap" ], name = "sleepy", x = 31, y = 16 }
    , { category = SmileysAndEmotion, char = "😫", keywords = [ "tired face", "tired face", "sick", "whine", "upset", "frustrated" ], name = "tired_face", x = 31, y = 17 }
    , { category = SmileysAndEmotion, char = "😬", keywords = [ "grimacing", "grimacing face", "face", "grimace", "teeth" ], name = "grimacing", x = 31, y = 18 }
    , { category = SmileysAndEmotion, char = "😭", keywords = [ "sob", "loudly crying face", "face", "cry", "tears", "sad", "upset", "depressed" ], name = "sob", x = 31, y = 19 }
    , { category = SmileysAndEmotion, char = "😮", keywords = [ "open mouth", "face with open mouth", "face", "surprise", "impressed", "wow", "whoa", ":O" ], name = "open_mouth", x = 31, y = 20 }
    , { category = SmileysAndEmotion, char = "😯", keywords = [ "hushed", "hushed face", "face", "woo", "shh" ], name = "hushed", x = 31, y = 21 }
    , { category = SmileysAndEmotion, char = "😰", keywords = [ "cold sweat", "anxious face with sweat", "face", "nervous", "sweat" ], name = "cold_sweat", x = 31, y = 22 }
    , { category = SmileysAndEmotion, char = "😱", keywords = [ "scream", "face screaming in fear", "face", "munch", "scared", "omg" ], name = "scream", x = 31, y = 23 }
    , { category = SmileysAndEmotion, char = "😲", keywords = [ "astonished", "astonished face", "face", "xox", "surprised", "poisoned" ], name = "astonished", x = 31, y = 24 }
    , { category = SmileysAndEmotion, char = "😳", keywords = [ "flushed", "flushed face", "face", "blush", "shy", "flattered" ], name = "flushed", x = 31, y = 25 }
    , { category = SmileysAndEmotion, char = "😴", keywords = [ "sleeping", "sleeping face", "face", "tired", "sleepy", "night", "zzz" ], name = "sleeping", x = 31, y = 26 }
    , { category = SmileysAndEmotion, char = "😵", keywords = [ "dizzy face", "dizzy face", "spent", "unconscious", "xox", "dizzy" ], name = "dizzy_face", x = 31, y = 27 }
    , { category = SmileysAndEmotion, char = "😶", keywords = [ "no mouth", "face without mouth", "face", "hellokitty" ], name = "no_mouth", x = 31, y = 28 }
    , { category = SmileysAndEmotion, char = "😷", keywords = [ "mask", "face with medical mask", "face", "sick", "ill", "disease" ], name = "mask", x = 31, y = 29 }
    , { category = SmileysAndEmotion, char = "😸", keywords = [ "smile cat", "grinning cat with smiling eyes", "animal", "cats", "smile" ], name = "smile_cat", x = 31, y = 30 }
    , { category = SmileysAndEmotion, char = "😹", keywords = [ "joy cat", "cat with tears of joy", "animal", "cats", "haha", "happy", "tears" ], name = "joy_cat", x = 31, y = 31 }
    , { category = SmileysAndEmotion, char = "😺", keywords = [ "smiley cat", "grinning cat", "animal", "cats", "happy", "smile" ], name = "smiley_cat", x = 31, y = 32 }
    , { category = SmileysAndEmotion, char = "😻", keywords = [ "heart eyes cat", "smiling cat with heart eyes", "animal", "love", "like", "affection", "cats", "valentines", "heart" ], name = "heart_eyes_cat", x = 31, y = 33 }
    , { category = SmileysAndEmotion, char = "😼", keywords = [ "smirk cat", "cat with wry smile", "animal", "cats", "smirk" ], name = "smirk_cat", x = 31, y = 34 }
    , { category = SmileysAndEmotion, char = "😽", keywords = [ "kissing cat", "kissing cat", "animal", "cats", "kiss" ], name = "kissing_cat", x = 31, y = 35 }
    , { category = SmileysAndEmotion, char = "😾", keywords = [ "pouting cat", "pouting cat", "animal", "cats" ], name = "pouting_cat", x = 31, y = 36 }
    , { category = SmileysAndEmotion, char = "😿", keywords = [ "crying cat face", "crying cat", "animal", "tears", "weep", "sad", "cats", "upset", "cry" ], name = "crying_cat_face", x = 31, y = 37 }
    , { category = SmileysAndEmotion, char = "🙀", keywords = [ "scream cat", "weary cat", "animal", "cats", "munch", "scared", "scream" ], name = "scream_cat", x = 31, y = 38 }
    , { category = SmileysAndEmotion, char = "🙁", keywords = [ "slightly frowning face", "slightly frowning face", "face", "frowning", "disappointed", "sad", "upset" ], name = "slightly_frowning_face", x = 31, y = 39 }
    , { category = SmileysAndEmotion, char = "🙂", keywords = [ "slightly smiling face", "slightly smiling face", "face", "smile" ], name = "slightly_smiling_face", x = 31, y = 40 }
    , { category = SmileysAndEmotion, char = "\u{1F643}", keywords = [ "upside down face", "upside down face", "face", "flipped", "silly", "smile" ], name = "upside_down_face", x = 31, y = 41 }
    , { category = SmileysAndEmotion, char = "\u{1F644}", keywords = [ "face with rolling eyes", "face with rolling eyes", "face", "eyeroll", "frustrated" ], name = "face_with_rolling_eyes", x = 31, y = 42 }
    , { category = PeopleAndBody, char = "🙅\u{200D}♀️", keywords = [ "woman gesturing no", "woman gesturing no", "female", "girl", "woman", "nope" ], name = "woman-gesturing-no", x = 31, y = 43 }
    , { category = PeopleAndBody, char = "🙅\u{200D}♂️", keywords = [ "man gesturing no", "man gesturing no", "male", "boy", "man", "nope" ], name = "man-gesturing-no", x = 31, y = 49 }
    , { category = PeopleAndBody, char = "🙅", keywords = [ "no good", "person gesturing no" ], name = "no_good", x = 31, y = 55 }
    , { category = PeopleAndBody, char = "🙆\u{200D}♀️", keywords = [ "woman gesturing ok", "woman gesturing ok", "women", "girl", "female", "pink", "human", "woman" ], name = "woman-gesturing-ok", x = 32, y = 3 }
    , { category = PeopleAndBody, char = "🙆\u{200D}♂️", keywords = [ "man gesturing ok", "man gesturing ok", "men", "boy", "male", "blue", "human", "man" ], name = "man-gesturing-ok", x = 32, y = 9 }
    , { category = PeopleAndBody, char = "🙆", keywords = [ "ok woman", "person gesturing ok" ], name = "ok_woman", x = 32, y = 15 }
    , { category = PeopleAndBody, char = "🙇\u{200D}♀️", keywords = [ "woman bowing", "woman bowing", "woman", "female", "girl" ], name = "woman-bowing", x = 32, y = 21 }
    , { category = PeopleAndBody, char = "🙇\u{200D}♂️", keywords = [ "man bowing", "man bowing", "man", "male", "boy" ], name = "man-bowing", x = 32, y = 27 }
    , { category = PeopleAndBody, char = "🙇", keywords = [ "bow", "person bowing" ], name = "bow", x = 32, y = 33 }
    , { category = SmileysAndEmotion, char = "🙈", keywords = [ "see no evil", "see no evil monkey", "monkey", "animal", "nature", "haha" ], name = "see_no_evil", x = 32, y = 39 }
    , { category = SmileysAndEmotion, char = "🙉", keywords = [ "hear no evil", "hear no evil monkey", "animal", "monkey", "nature" ], name = "hear_no_evil", x = 32, y = 40 }
    , { category = SmileysAndEmotion, char = "🙊", keywords = [ "speak no evil", "speak no evil monkey", "monkey", "animal", "nature", "omg" ], name = "speak_no_evil", x = 32, y = 41 }
    , { category = PeopleAndBody, char = "🙋\u{200D}♀️", keywords = [ "woman raising hand", "woman raising hand", "female", "girl", "woman" ], name = "woman-raising-hand", x = 32, y = 42 }
    , { category = PeopleAndBody, char = "🙋\u{200D}♂️", keywords = [ "man raising hand", "man raising hand", "male", "boy", "man" ], name = "man-raising-hand", x = 32, y = 48 }
    , { category = PeopleAndBody, char = "🙋", keywords = [ "raising hand", "person raising hand" ], name = "raising_hand", x = 32, y = 54 }
    , { category = PeopleAndBody, char = "🙌", keywords = [ "raised hands", "raising hands", "gesture", "hooray", "yea", "celebration", "hands" ], name = "raised_hands", x = 33, y = 2 }
    , { category = PeopleAndBody, char = "🙍\u{200D}♀️", keywords = [ "woman frowning", "woman frowning", "female", "girl", "woman", "sad", "depressed", "discouraged", "unhappy" ], name = "woman-frowning", x = 33, y = 8 }
    , { category = PeopleAndBody, char = "🙍\u{200D}♂️", keywords = [ "man frowning", "man frowning", "male", "boy", "man", "sad", "depressed", "discouraged", "unhappy" ], name = "man-frowning", x = 33, y = 14 }
    , { category = PeopleAndBody, char = "🙍", keywords = [ "person frowning", "person frowning" ], name = "person_frowning", x = 33, y = 20 }
    , { category = PeopleAndBody, char = "🙎\u{200D}♀️", keywords = [ "woman pouting", "woman pouting", "female", "girl", "woman" ], name = "woman-pouting", x = 33, y = 26 }
    , { category = PeopleAndBody, char = "🙎\u{200D}♂️", keywords = [ "man pouting", "man pouting", "male", "boy", "man" ], name = "man-pouting", x = 33, y = 32 }
    , { category = PeopleAndBody, char = "🙎", keywords = [ "person with pouting face", "person pouting" ], name = "person_with_pouting_face", x = 33, y = 38 }
    , { category = PeopleAndBody, char = "🙏", keywords = [ "pray", "folded hands", "please", "hope", "wish", "namaste", "highfive" ], name = "pray", x = 33, y = 44 }
    , { category = TravelAndPlaces, char = "🚀", keywords = [ "rocket", "rocket", "launch", "ship", "staffmode", "NASA", "outer space", "outer space", "fly" ], name = "rocket", x = 33, y = 50 }
    , { category = TravelAndPlaces, char = "🚁", keywords = [ "helicopter", "helicopter", "transportation", "vehicle", "fly" ], name = "helicopter", x = 33, y = 51 }
    , { category = TravelAndPlaces, char = "🚂", keywords = [ "steam locomotive", "locomotive", "transportation", "vehicle", "train" ], name = "steam_locomotive", x = 33, y = 52 }
    , { category = TravelAndPlaces, char = "🚃", keywords = [ "railway car", "railway car", "transportation", "vehicle" ], name = "railway_car", x = 33, y = 53 }
    , { category = TravelAndPlaces, char = "🚄", keywords = [ "bullettrain side", "high speed train", "transportation", "vehicle" ], name = "bullettrain_side", x = 33, y = 54 }
    , { category = TravelAndPlaces, char = "🚅", keywords = [ "bullettrain front", "bullet train", "transportation", "vehicle", "speed", "fast", "public", "travel" ], name = "bullettrain_front", x = 33, y = 55 }
    , { category = TravelAndPlaces, char = "🚆", keywords = [ "train2", "train", "transportation", "vehicle" ], name = "train2", x = 33, y = 56 }
    , { category = TravelAndPlaces, char = "🚇", keywords = [ "metro", "metro", "transportation", "blue square", "mrt", "underground", "tube" ], name = "metro", x = 33, y = 57 }
    , { category = TravelAndPlaces, char = "🚈", keywords = [ "light rail", "light rail", "transportation", "vehicle" ], name = "light_rail", x = 34, y = 0 }
    , { category = TravelAndPlaces, char = "🚉", keywords = [ "station", "station", "transportation", "vehicle", "public" ], name = "station", x = 34, y = 1 }
    , { category = TravelAndPlaces, char = "🚊", keywords = [ "tram", "tram", "transportation", "vehicle" ], name = "tram", x = 34, y = 2 }
    , { category = TravelAndPlaces, char = "🚋", keywords = [ "train", "tram car", "transportation", "vehicle", "carriage", "public", "travel" ], name = "train", x = 34, y = 3 }
    , { category = TravelAndPlaces, char = "🚌", keywords = [ "bus", "bus", "car", "vehicle", "transportation" ], name = "bus", x = 34, y = 4 }
    , { category = TravelAndPlaces, char = "🚍", keywords = [ "oncoming bus", "oncoming bus", "vehicle", "transportation" ], name = "oncoming_bus", x = 34, y = 5 }
    , { category = TravelAndPlaces, char = "🚎", keywords = [ "trolleybus", "trolleybus", "bart", "transportation", "vehicle" ], name = "trolleybus", x = 34, y = 6 }
    , { category = TravelAndPlaces, char = "🚏", keywords = [ "busstop", "bus stop", "transportation", "wait" ], name = "busstop", x = 34, y = 7 }
    , { category = TravelAndPlaces, char = "🚐", keywords = [ "minibus", "minibus", "vehicle", "car", "transportation" ], name = "minibus", x = 34, y = 8 }
    , { category = TravelAndPlaces, char = "🚑", keywords = [ "ambulance", "ambulance", "health", "911", "hospital" ], name = "ambulance", x = 34, y = 9 }
    , { category = TravelAndPlaces, char = "🚒", keywords = [ "fire engine", "fire engine", "transportation", "cars", "vehicle" ], name = "fire_engine", x = 34, y = 10 }
    , { category = TravelAndPlaces, char = "🚓", keywords = [ "police car", "police car", "vehicle", "cars", "transportation", "law", "legal", "enforcement" ], name = "police_car", x = 34, y = 11 }
    , { category = TravelAndPlaces, char = "🚔", keywords = [ "oncoming police car", "oncoming police car", "vehicle", "law", "legal", "enforcement", "911" ], name = "oncoming_police_car", x = 34, y = 12 }
    , { category = TravelAndPlaces, char = "🚕", keywords = [ "taxi", "taxi", "uber", "vehicle", "cars", "transportation" ], name = "taxi", x = 34, y = 13 }
    , { category = TravelAndPlaces, char = "🚖", keywords = [ "oncoming taxi", "oncoming taxi", "vehicle", "cars", "uber" ], name = "oncoming_taxi", x = 34, y = 14 }
    , { category = TravelAndPlaces, char = "🚗", keywords = [ "car", "automobile", "red", "transportation", "vehicle" ], name = "car", x = 34, y = 15 }
    , { category = TravelAndPlaces, char = "🚘", keywords = [ "oncoming automobile", "oncoming automobile", "car", "vehicle", "transportation" ], name = "oncoming_automobile", x = 34, y = 16 }
    , { category = TravelAndPlaces, char = "🚙", keywords = [ "blue car", "sport utility vehicle", "transportation", "vehicle" ], name = "blue_car", x = 34, y = 17 }
    , { category = TravelAndPlaces, char = "🚚", keywords = [ "truck", "delivery truck", "cars", "transportation" ], name = "truck", x = 34, y = 18 }
    , { category = TravelAndPlaces, char = "🚛", keywords = [ "articulated lorry", "articulated lorry", "vehicle", "cars", "transportation", "express" ], name = "articulated_lorry", x = 34, y = 19 }
    , { category = TravelAndPlaces, char = "🚜", keywords = [ "tractor", "tractor", "vehicle", "car", "farming", "agriculture" ], name = "tractor", x = 34, y = 20 }
    , { category = TravelAndPlaces, char = "🚝", keywords = [ "monorail", "monorail", "transportation", "vehicle" ], name = "monorail", x = 34, y = 21 }
    , { category = TravelAndPlaces, char = "🚞", keywords = [ "mountain railway", "mountain railway", "transportation", "vehicle" ], name = "mountain_railway", x = 34, y = 22 }
    , { category = TravelAndPlaces, char = "🚟", keywords = [ "suspension railway", "suspension railway", "vehicle", "transportation" ], name = "suspension_railway", x = 34, y = 23 }
    , { category = TravelAndPlaces, char = "🚠", keywords = [ "mountain cableway", "mountain cableway", "transportation", "vehicle", "ski" ], name = "mountain_cableway", x = 34, y = 24 }
    , { category = TravelAndPlaces, char = "🚡", keywords = [ "aerial tramway", "aerial tramway", "transportation", "vehicle", "ski" ], name = "aerial_tramway", x = 34, y = 25 }
    , { category = TravelAndPlaces, char = "🚢", keywords = [ "ship", "ship", "transportation", "titanic", "deploy" ], name = "ship", x = 34, y = 26 }
    , { category = PeopleAndBody, char = "🚣\u{200D}♀️", keywords = [ "woman rowing boat", "woman rowing boat", "sports", "hobby", "water", "ship", "woman", "female" ], name = "woman-rowing-boat", x = 34, y = 27 }
    , { category = PeopleAndBody, char = "🚣\u{200D}♂️", keywords = [ "man rowing boat", "man rowing boat", "sports", "hobby", "water", "ship" ], name = "man-rowing-boat", x = 34, y = 33 }
    , { category = PeopleAndBody, char = "🚣", keywords = [ "rowboat", "person rowing boat" ], name = "rowboat", x = 34, y = 39 }
    , { category = TravelAndPlaces, char = "🚤", keywords = [ "speedboat", "speedboat", "ship", "transportation", "vehicle", "summer" ], name = "speedboat", x = 34, y = 45 }
    , { category = TravelAndPlaces, char = "🚥", keywords = [ "traffic light", "horizontal traffic light", "transportation", "signal" ], name = "traffic_light", x = 34, y = 46 }
    , { category = TravelAndPlaces, char = "🚦", keywords = [ "vertical traffic light", "vertical traffic light", "transportation", "driving" ], name = "vertical_traffic_light", x = 34, y = 47 }
    , { category = TravelAndPlaces, char = "🚧", keywords = [ "construction", "construction", "wip", "progress", "caution", "warning" ], name = "construction", x = 34, y = 48 }
    , { category = TravelAndPlaces, char = "🚨", keywords = [ "rotating light", "police car light", "police", "ambulance", "911", "emergency", "alert", "error", "pinged", "law", "legal" ], name = "rotating_light", x = 34, y = 49 }
    , { category = Flags, char = "🚩", keywords = [ "triangular flag on post", "triangular flag", "mark", "milestone", "place" ], name = "triangular_flag_on_post", x = 34, y = 50 }
    , { category = Objects, char = "🚪", keywords = [ "door", "door", "house", "entry", "exit" ], name = "door", x = 34, y = 51 }
    , { category = Symbols, char = "🚫", keywords = [ "no entry sign", "prohibited", "forbid", "stop", "limit", "denied", "disallow", "circle" ], name = "no_entry_sign", x = 34, y = 52 }
    , { category = Objects, char = "🚬", keywords = [ "smoking", "cigarette", "kills", "tobacco", "cigarette", "joint", "smoke" ], name = "smoking", x = 34, y = 53 }
    , { category = Symbols, char = "🚭", keywords = [ "no smoking", "no smoking", "cigarette", "blue square", "smell", "smoke" ], name = "no_smoking", x = 34, y = 54 }
    , { category = Symbols, char = "🚮", keywords = [ "put litter in its place", "litter in bin sign", "blue square", "sign", "human", "info" ], name = "put_litter_in_its_place", x = 34, y = 55 }
    , { category = Symbols, char = "🚯", keywords = [ "do not litter", "no littering", "trash", "bin", "garbage", "circle" ], name = "do_not_litter", x = 34, y = 56 }
    , { category = Symbols, char = "🚰", keywords = [ "potable water", "potable water", "blue square", "liquid", "restroom", "cleaning", "faucet" ], name = "potable_water", x = 34, y = 57 }
    , { category = Symbols, char = "🚱", keywords = [ "non potable water", "non potable water", "drink", "faucet", "tap", "circle" ], name = "non-potable_water", x = 35, y = 0 }
    , { category = TravelAndPlaces, char = "🚲", keywords = [ "bike", "bicycle", "sports", "bicycle", "exercise", "hipster" ], name = "bike", x = 35, y = 1 }
    , { category = Symbols, char = "🚳", keywords = [ "no bicycles", "no bicycles", "cyclist", "prohibited", "circle" ], name = "no_bicycles", x = 35, y = 2 }
    , { category = PeopleAndBody, char = "🚴\u{200D}♀️", keywords = [ "woman biking", "woman biking", "sports", "bike", "exercise", "hipster", "woman", "female" ], name = "woman-biking", x = 35, y = 3 }
    , { category = PeopleAndBody, char = "🚴\u{200D}♂️", keywords = [ "man biking", "man biking", "sports", "bike", "exercise", "hipster" ], name = "man-biking", x = 35, y = 9 }
    , { category = PeopleAndBody, char = "🚴", keywords = [ "bicyclist", "person biking" ], name = "bicyclist", x = 35, y = 15 }
    , { category = PeopleAndBody, char = "🚵\u{200D}♀️", keywords = [ "woman mountain biking", "woman mountain biking", "transportation", "sports", "human", "race", "bike", "woman", "female" ], name = "woman-mountain-biking", x = 35, y = 21 }
    , { category = PeopleAndBody, char = "🚵\u{200D}♂️", keywords = [ "man mountain biking", "man mountain biking", "transportation", "sports", "human", "race", "bike" ], name = "man-mountain-biking", x = 35, y = 27 }
    , { category = PeopleAndBody, char = "🚵", keywords = [ "mountain bicyclist", "person mountain biking" ], name = "mountain_bicyclist", x = 35, y = 33 }
    , { category = PeopleAndBody, char = "🚶\u{200D}♀️", keywords = [ "woman walking", "woman walking", "human", "feet", "steps", "woman", "female" ], name = "woman-walking", x = 35, y = 39 }
    , { category = PeopleAndBody, char = "🚶\u{200D}♂️", keywords = [ "man walking", "man walking", "human", "feet", "steps" ], name = "man-walking", x = 35, y = 45 }
    , { category = PeopleAndBody, char = "🚶", keywords = [ "walking", "person walking" ], name = "walking", x = 35, y = 51 }
    , { category = Symbols, char = "🚷", keywords = [ "no pedestrians", "no pedestrians", "rules", "crossing", "walking", "circle" ], name = "no_pedestrians", x = 35, y = 57 }
    , { category = Symbols, char = "🚸", keywords = [ "children crossing", "children crossing", "school", "warning", "danger", "sign", "driving", "yellow diamond" ], name = "children_crossing", x = 36, y = 0 }
    , { category = Symbols, char = "🚹", keywords = [ "mens", "men s room", "toilet", "restroom", "wc", "blue square", "gender", "male" ], name = "mens", x = 36, y = 1 }
    , { category = Symbols, char = "🚺", keywords = [ "womens", "women s room", "purple square", "woman", "female", "toilet", "loo", "restroom", "gender" ], name = "womens", x = 36, y = 2 }
    , { category = Symbols, char = "🚻", keywords = [ "restroom", "restroom", "blue square", "toilet", "refresh", "wc", "gender" ], name = "restroom", x = 36, y = 3 }
    , { category = Symbols, char = "🚼", keywords = [ "baby symbol", "baby symbol", "orange square", "child" ], name = "baby_symbol", x = 36, y = 4 }
    , { category = Objects, char = "🚽", keywords = [ "toilet", "toilet", "restroom", "wc", "washroom", "bathroom", "potty" ], name = "toilet", x = 36, y = 5 }
    , { category = Symbols, char = "🚾", keywords = [ "wc", "water closet", "toilet", "restroom", "blue square" ], name = "wc", x = 36, y = 6 }
    , { category = Objects, char = "🚿", keywords = [ "shower", "shower", "clean", "water", "bathroom" ], name = "shower", x = 36, y = 7 }
    , { category = PeopleAndBody, char = "🛀", keywords = [ "bath", "person taking bath", "clean", "shower", "bathroom" ], name = "bath", x = 36, y = 8 }
    , { category = Objects, char = "🛁", keywords = [ "bathtub", "bathtub", "clean", "shower", "bathroom" ], name = "bathtub", x = 36, y = 14 }
    , { category = Symbols, char = "🛂", keywords = [ "passport control", "passport control", "custom", "blue square" ], name = "passport_control", x = 36, y = 15 }
    , { category = Symbols, char = "🛃", keywords = [ "customs", "customs", "passport", "border", "blue square" ], name = "customs", x = 36, y = 16 }
    , { category = Symbols, char = "🛄", keywords = [ "baggage claim", "baggage claim", "blue square", "airport", "transport" ], name = "baggage_claim", x = 36, y = 17 }
    , { category = Symbols, char = "🛅", keywords = [ "left luggage", "left luggage", "blue square", "travel" ], name = "left_luggage", x = 36, y = 18 }
    , { category = Objects, char = "🛋️", keywords = [ "couch and lamp", "couch and lamp", "read", "chill" ], name = "couch_and_lamp", x = 36, y = 19 }
    , { category = PeopleAndBody, char = "🛌", keywords = [ "sleeping accommodation", "person in bed", "bed", "rest" ], name = "sleeping_accommodation", x = 36, y = 20 }
    , { category = Objects, char = "🛍️", keywords = [ "shopping bags", "shopping bags", "mall", "buy", "purchase" ], name = "shopping_bags", x = 36, y = 26 }
    , { category = TravelAndPlaces, char = "🛎️", keywords = [ "bellhop bell", "bellhop bell", "service" ], name = "bellhop_bell", x = 36, y = 27 }
    , { category = Objects, char = "🛏️", keywords = [ "bed", "bed", "sleep", "rest" ], name = "bed", x = 36, y = 28 }
    , { category = Symbols, char = "\u{1F6D0}", keywords = [ "place of worship", "place of worship", "religion", "church", "temple", "prayer" ], name = "place_of_worship", x = 36, y = 29 }
    , { category = TravelAndPlaces, char = "\u{1F6D1}", keywords = [ "octagonal sign", "stop sign", "stop" ], name = "octagonal_sign", x = 36, y = 30 }
    , { category = Objects, char = "\u{1F6D2}", keywords = [ "shopping trolley", "shopping cart", "trolley" ], name = "shopping_trolley", x = 36, y = 31 }
    , { category = TravelAndPlaces, char = "\u{1F6D5}", keywords = [ "hindu temple", "hindu temple" ], name = "hindu_temple", x = 36, y = 32 }
    , { category = TravelAndPlaces, char = "\u{1F6D6}", keywords = [ "hut", "hut", "house", "structure" ], name = "hut", x = 36, y = 33 }
    , { category = Objects, char = "\u{1F6D7}", keywords = [ "elevator", "elevator", "lift" ], name = "elevator", x = 36, y = 34 }
    , { category = Objects, char = "🛠️", keywords = [ "hammer and wrench", "hammer and wrench", "tools", "build", "create" ], name = "hammer_and_wrench", x = 36, y = 35 }
    , { category = Objects, char = "🛡️", keywords = [ "shield", "shield", "protection", "security" ], name = "shield", x = 36, y = 36 }
    , { category = TravelAndPlaces, char = "🛢️", keywords = [ "oil drum", "oil drum", "barrell" ], name = "oil_drum", x = 36, y = 37 }
    , { category = TravelAndPlaces, char = "🛣️", keywords = [ "motorway", "motorway", "road", "cupertino", "interstate", "highway" ], name = "motorway", x = 36, y = 38 }
    , { category = TravelAndPlaces, char = "🛤️", keywords = [ "railway track", "railway track", "train", "transportation" ], name = "railway_track", x = 36, y = 39 }
    , { category = TravelAndPlaces, char = "🛥️", keywords = [ "motor boat", "motor boat", "ship" ], name = "motor_boat", x = 36, y = 40 }
    , { category = TravelAndPlaces, char = "🛩️", keywords = [ "small airplane", "small airplane", "flight", "transportation", "fly", "vehicle" ], name = "small_airplane", x = 36, y = 41 }
    , { category = TravelAndPlaces, char = "🛫", keywords = [ "airplane departure", "airplane departure", "airport", "flight", "landing" ], name = "airplane_departure", x = 36, y = 42 }
    , { category = TravelAndPlaces, char = "🛬", keywords = [ "airplane arriving", "airplane arrival", "airport", "flight", "boarding" ], name = "airplane_arriving", x = 36, y = 43 }
    , { category = TravelAndPlaces, char = "🛰️", keywords = [ "satellite", "satellite", "communication", "gps", "orbit", "spaceflight", "NASA", "ISS" ], name = "satellite", x = 36, y = 44 }
    , { category = TravelAndPlaces, char = "🛳️", keywords = [ "passenger ship", "passenger ship", "yacht", "cruise", "ferry" ], name = "passenger_ship", x = 36, y = 45 }
    , { category = TravelAndPlaces, char = "\u{1F6F4}", keywords = [ "scooter", "kick scooter", "vehicle", "kick", "razor" ], name = "scooter", x = 36, y = 46 }
    , { category = TravelAndPlaces, char = "\u{1F6F5}", keywords = [ "motor scooter", "motor scooter", "vehicle", "vespa", "sasha" ], name = "motor_scooter", x = 36, y = 47 }
    , { category = TravelAndPlaces, char = "\u{1F6F6}", keywords = [ "canoe", "canoe", "boat", "paddle", "water", "ship" ], name = "canoe", x = 36, y = 48 }
    , { category = Activities, char = "\u{1F6F7}", keywords = [ "sled", "sled", "sleigh", "luge", "toboggan" ], name = "sled", x = 36, y = 49 }
    , { category = TravelAndPlaces, char = "\u{1F6F8}", keywords = [ "flying saucer", "flying saucer", "transportation", "vehicle", "ufo" ], name = "flying_saucer", x = 36, y = 50 }
    , { category = TravelAndPlaces, char = "\u{1F6F9}", keywords = [ "skateboard", "skateboard", "board" ], name = "skateboard", x = 36, y = 51 }
    , { category = TravelAndPlaces, char = "\u{1F6FA}", keywords = [ "auto rickshaw", "auto rickshaw" ], name = "auto_rickshaw", x = 36, y = 52 }
    , { category = TravelAndPlaces, char = "\u{1F6FB}", keywords = [ "pickup truck", "pickup truck", "car", "transportation" ], name = "pickup_truck", x = 36, y = 53 }
    , { category = TravelAndPlaces, char = "\u{1F6FC}", keywords = [ "roller skate", "roller skate", "footwear", "sports" ], name = "roller_skate", x = 36, y = 54 }
    , { category = Symbols, char = "\u{1F7E0}", keywords = [ "large orange circle", "orange circle" ], name = "large_orange_circle", x = 36, y = 55 }
    , { category = Symbols, char = "\u{1F7E1}", keywords = [ "large yellow circle", "yellow circle" ], name = "large_yellow_circle", x = 36, y = 56 }
    , { category = Symbols, char = "\u{1F7E2}", keywords = [ "large green circle", "green circle" ], name = "large_green_circle", x = 36, y = 57 }
    , { category = Symbols, char = "\u{1F7E3}", keywords = [ "large purple circle", "purple circle" ], name = "large_purple_circle", x = 37, y = 0 }
    , { category = Symbols, char = "\u{1F7E4}", keywords = [ "large brown circle", "brown circle" ], name = "large_brown_circle", x = 37, y = 1 }
    , { category = Symbols, char = "\u{1F7E5}", keywords = [ "large red square", "red square" ], name = "large_red_square", x = 37, y = 2 }
    , { category = Symbols, char = "\u{1F7E6}", keywords = [ "large blue square", "blue square" ], name = "large_blue_square", x = 37, y = 3 }
    , { category = Symbols, char = "\u{1F7E7}", keywords = [ "large orange square", "orange square" ], name = "large_orange_square", x = 37, y = 4 }
    , { category = Symbols, char = "\u{1F7E8}", keywords = [ "large yellow square", "yellow square" ], name = "large_yellow_square", x = 37, y = 5 }
    , { category = Symbols, char = "\u{1F7E9}", keywords = [ "large green square", "green square" ], name = "large_green_square", x = 37, y = 6 }
    , { category = Symbols, char = "\u{1F7EA}", keywords = [ "large purple square", "purple square" ], name = "large_purple_square", x = 37, y = 7 }
    , { category = Symbols, char = "\u{1F7EB}", keywords = [ "large brown square", "brown square" ], name = "large_brown_square", x = 37, y = 8 }
    , { category = PeopleAndBody, char = "\u{1F90C}", keywords = [ "pinched fingers", "pinched fingers", "size", "tiny", "small" ], name = "pinched_fingers", x = 37, y = 9 }
    , { category = SmileysAndEmotion, char = "\u{1F90D}", keywords = [ "white heart", "white heart" ], name = "white_heart", x = 37, y = 15 }
    , { category = SmileysAndEmotion, char = "\u{1F90E}", keywords = [ "brown heart", "brown heart" ], name = "brown_heart", x = 37, y = 16 }
    , { category = PeopleAndBody, char = "\u{1F90F}", keywords = [ "pinching hand", "pinching hand" ], name = "pinching_hand", x = 37, y = 17 }
    , { category = SmileysAndEmotion, char = "\u{1F910}", keywords = [ "zipper mouth face", "zipper mouth face", "face", "sealed", "zipper", "secret" ], name = "zipper_mouth_face", x = 37, y = 23 }
    , { category = SmileysAndEmotion, char = "\u{1F911}", keywords = [ "money mouth face", "money mouth face", "face", "rich", "dollar", "money" ], name = "money_mouth_face", x = 37, y = 24 }
    , { category = SmileysAndEmotion, char = "\u{1F912}", keywords = [ "face with thermometer", "face with thermometer", "sick", "temperature", "thermometer", "cold", "fever" ], name = "face_with_thermometer", x = 37, y = 25 }
    , { category = SmileysAndEmotion, char = "\u{1F913}", keywords = [ "nerd face", "nerd face", "face", "nerdy", "geek", "dork" ], name = "nerd_face", x = 37, y = 26 }
    , { category = SmileysAndEmotion, char = "\u{1F914}", keywords = [ "thinking face", "thinking face", "face", "hmmm", "think", "consider" ], name = "thinking_face", x = 37, y = 27 }
    , { category = SmileysAndEmotion, char = "\u{1F915}", keywords = [ "face with head bandage", "face with head bandage", "injured", "clumsy", "bandage", "hurt" ], name = "face_with_head_bandage", x = 37, y = 28 }
    , { category = SmileysAndEmotion, char = "\u{1F916}", keywords = [ "robot face", "robot", "computer", "machine", "bot" ], name = "robot_face", x = 37, y = 29 }
    , { category = SmileysAndEmotion, char = "\u{1F917}", keywords = [ "hugging face", "hugging face", "face", "smile", "hug" ], name = "hugging_face", x = 37, y = 30 }
    , { category = PeopleAndBody, char = "\u{1F918}", keywords = [ "the horns", "sign of the horns", "hand", "fingers", "evil eye", "sign of horns", "rock on" ], name = "the_horns", x = 37, y = 31 }
    , { category = PeopleAndBody, char = "\u{1F919}", keywords = [ "call me hand", "call me hand", "hands", "gesture" ], name = "call_me_hand", x = 37, y = 37 }
    , { category = PeopleAndBody, char = "\u{1F91A}", keywords = [ "raised back of hand", "raised back of hand", "fingers", "raised", "backhand" ], name = "raised_back_of_hand", x = 37, y = 43 }
    , { category = PeopleAndBody, char = "\u{1F91B}", keywords = [ "left facing fist", "left facing fist", "hand", "fistbump" ], name = "left-facing_fist", x = 37, y = 49 }
    , { category = PeopleAndBody, char = "\u{1F91C}", keywords = [ "right facing fist", "right facing fist", "hand", "fistbump" ], name = "right-facing_fist", x = 37, y = 55 }
    , { category = PeopleAndBody, char = "\u{1F91D}", keywords = [ "handshake", "handshake", "agreement", "shake" ], name = "handshake", x = 38, y = 3 }
    , { category = PeopleAndBody, char = "\u{1F91E}", keywords = [ "crossed fingers", "crossed fingers", "good", "lucky" ], name = "crossed_fingers", x = 38, y = 4 }
    , { category = PeopleAndBody, char = "\u{1F91F}", keywords = [ "i love you hand sign", "love you gesture", "hand", "fingers", "gesture" ], name = "i_love_you_hand_sign", x = 38, y = 10 }
    , { category = SmileysAndEmotion, char = "\u{1F920}", keywords = [ "face with cowboy hat", "cowboy hat face", "face", "cowgirl", "hat" ], name = "face_with_cowboy_hat", x = 38, y = 16 }
    , { category = SmileysAndEmotion, char = "\u{1F921}", keywords = [ "clown face", "clown face", "face" ], name = "clown_face", x = 38, y = 17 }
    , { category = SmileysAndEmotion, char = "\u{1F922}", keywords = [ "nauseated face", "nauseated face", "face", "vomit", "gross", "green", "sick", "throw up", "ill" ], name = "nauseated_face", x = 38, y = 18 }
    , { category = SmileysAndEmotion, char = "\u{1F923}", keywords = [ "rolling on the floor laughing", "rolling on the floor laughing", "face", "rolling", "floor", "laughing", "lol", "haha" ], name = "rolling_on_the_floor_laughing", x = 38, y = 19 }
    , { category = SmileysAndEmotion, char = "\u{1F924}", keywords = [ "drooling face", "drooling face", "face" ], name = "drooling_face", x = 38, y = 20 }
    , { category = SmileysAndEmotion, char = "\u{1F925}", keywords = [ "lying face", "lying face", "face", "lie", "pinocchio" ], name = "lying_face", x = 38, y = 21 }
    , { category = PeopleAndBody, char = "\u{1F926}\u{200D}♀️", keywords = [ "woman facepalming", "woman facepalming", "woman", "female", "girl", "disbelief" ], name = "woman-facepalming", x = 38, y = 22 }
    , { category = PeopleAndBody, char = "\u{1F926}\u{200D}♂️", keywords = [ "man facepalming", "man facepalming", "man", "male", "boy", "disbelief" ], name = "man-facepalming", x = 38, y = 28 }
    , { category = PeopleAndBody, char = "\u{1F926}", keywords = [ "face palm", "person facepalming" ], name = "face_palm", x = 38, y = 34 }
    , { category = SmileysAndEmotion, char = "\u{1F927}", keywords = [ "sneezing face", "sneezing face", "face", "gesundheit", "sneeze", "sick", "allergy" ], name = "sneezing_face", x = 38, y = 40 }
    , { category = SmileysAndEmotion, char = "\u{1F928}", keywords = [ "face with raised eyebrow", "face with raised eyebrow", "face", "distrust", "scepticism", "disapproval", "disbelief", "surprise" ], name = "face_with_raised_eyebrow", x = 38, y = 41 }
    , { category = SmileysAndEmotion, char = "\u{1F929}", keywords = [ "star struck", "star struck", "face", "smile", "starry", "eyes", "grinning" ], name = "star-struck", x = 38, y = 42 }
    , { category = SmileysAndEmotion, char = "\u{1F92A}", keywords = [ "zany face", "zany face", "face", "goofy", "crazy" ], name = "zany_face", x = 38, y = 43 }
    , { category = SmileysAndEmotion, char = "\u{1F92B}", keywords = [ "shushing face", "shushing face", "face", "quiet", "shhh" ], name = "shushing_face", x = 38, y = 44 }
    , { category = SmileysAndEmotion, char = "\u{1F92C}", keywords = [ "face with symbols on mouth", "face with symbols on mouth", "face", "swearing", "cursing", "cussing", "profanity", "expletive" ], name = "face_with_symbols_on_mouth", x = 38, y = 45 }
    , { category = SmileysAndEmotion, char = "\u{1F92D}", keywords = [ "face with hand over mouth", "face with hand over mouth", "face", "whoops", "shock", "surprise" ], name = "face_with_hand_over_mouth", x = 38, y = 46 }
    , { category = SmileysAndEmotion, char = "\u{1F92E}", keywords = [ "face vomiting", "face vomiting", "face", "sick" ], name = "face_vomiting", x = 38, y = 47 }
    , { category = SmileysAndEmotion, char = "\u{1F92F}", keywords = [ "exploding head", "exploding head", "face", "shocked", "mind", "blown" ], name = "exploding_head", x = 38, y = 48 }
    , { category = PeopleAndBody, char = "\u{1F930}", keywords = [ "pregnant woman", "pregnant woman", "baby" ], name = "pregnant_woman", x = 38, y = 49 }
    , { category = PeopleAndBody, char = "\u{1F931}", keywords = [ "breast feeding", "breast feeding", "nursing", "baby" ], name = "breast-feeding", x = 38, y = 55 }
    , { category = PeopleAndBody, char = "\u{1F932}", keywords = [ "palms up together", "palms up together", "hands", "gesture", "cupped", "prayer" ], name = "palms_up_together", x = 39, y = 3 }
    , { category = PeopleAndBody, char = "\u{1F933}", keywords = [ "selfie", "selfie", "camera", "phone" ], name = "selfie", x = 39, y = 9 }
    , { category = PeopleAndBody, char = "\u{1F934}", keywords = [ "prince", "prince", "boy", "man", "male", "crown", "royal", "king" ], name = "prince", x = 39, y = 15 }
    , { category = PeopleAndBody, char = "\u{1F935}\u{200D}♀️", keywords = [ "woman in tuxedo", "woman in tuxedo", "formal", "fashion" ], name = "woman_in_tuxedo", x = 39, y = 21 }
    , { category = PeopleAndBody, char = "\u{1F935}\u{200D}♂️", keywords = [ "man in tuxedo", "man in tuxedo", "formal", "fashion" ], name = "man_in_tuxedo", x = 39, y = 27 }
    , { category = PeopleAndBody, char = "\u{1F935}", keywords = [ "man in tuxedo", "man in tuxedo", "couple", "marriage", "wedding", "groom" ], name = "man_in_tuxedo", x = 39, y = 33 }
    , { category = PeopleAndBody, char = "\u{1F936}", keywords = [ "mrs claus", "mrs claus", "woman", "female", "xmas", "mother christmas" ], name = "mrs_claus", x = 39, y = 39 }
    , { category = PeopleAndBody, char = "\u{1F937}\u{200D}♀️", keywords = [ "woman shrugging", "woman shrugging", "woman", "female", "girl", "confused", "indifferent", "doubt" ], name = "woman-shrugging", x = 39, y = 45 }
    , { category = PeopleAndBody, char = "\u{1F937}\u{200D}♂️", keywords = [ "man shrugging", "man shrugging", "man", "male", "boy", "confused", "indifferent", "doubt" ], name = "man-shrugging", x = 39, y = 51 }
    , { category = PeopleAndBody, char = "\u{1F937}", keywords = [ "shrug", "person shrugging" ], name = "shrug", x = 39, y = 57 }
    , { category = PeopleAndBody, char = "\u{1F938}\u{200D}♀️", keywords = [ "woman cartwheeling", "woman cartwheeling", "gymnastics" ], name = "woman-cartwheeling", x = 40, y = 5 }
    , { category = PeopleAndBody, char = "\u{1F938}\u{200D}♂️", keywords = [ "man cartwheeling", "man cartwheeling", "gymnastics" ], name = "man-cartwheeling", x = 40, y = 11 }
    , { category = PeopleAndBody, char = "\u{1F938}", keywords = [ "person doing cartwheel", "person cartwheeling" ], name = "person_doing_cartwheel", x = 40, y = 17 }
    , { category = PeopleAndBody, char = "\u{1F939}\u{200D}♀️", keywords = [ "woman juggling", "woman juggling", "juggle", "balance", "skill", "multitask" ], name = "woman-juggling", x = 40, y = 23 }
    , { category = PeopleAndBody, char = "\u{1F939}\u{200D}♂️", keywords = [ "man juggling", "man juggling", "juggle", "balance", "skill", "multitask" ], name = "man-juggling", x = 40, y = 29 }
    , { category = PeopleAndBody, char = "\u{1F939}", keywords = [ "juggling", "person juggling" ], name = "juggling", x = 40, y = 35 }
    , { category = PeopleAndBody, char = "\u{1F93A}", keywords = [ "fencer", "person fencing", "sports", "fencing", "sword" ], name = "fencer", x = 40, y = 41 }
    , { category = PeopleAndBody, char = "\u{1F93C}\u{200D}♀️", keywords = [ "woman wrestling", "women wrestling", "sports", "wrestlers" ], name = "woman-wrestling", x = 40, y = 42 }
    , { category = PeopleAndBody, char = "\u{1F93C}\u{200D}♂️", keywords = [ "man wrestling", "men wrestling", "sports", "wrestlers" ], name = "man-wrestling", x = 40, y = 43 }
    , { category = PeopleAndBody, char = "\u{1F93C}", keywords = [ "wrestlers", "people wrestling" ], name = "wrestlers", x = 40, y = 44 }
    , { category = PeopleAndBody, char = "\u{1F93D}\u{200D}♀️", keywords = [ "woman playing water polo", "woman playing water polo", "sports", "pool" ], name = "woman-playing-water-polo", x = 40, y = 45 }
    , { category = PeopleAndBody, char = "\u{1F93D}\u{200D}♂️", keywords = [ "man playing water polo", "man playing water polo", "sports", "pool" ], name = "man-playing-water-polo", x = 40, y = 51 }
    , { category = PeopleAndBody, char = "\u{1F93D}", keywords = [ "water polo", "person playing water polo" ], name = "water_polo", x = 40, y = 57 }
    , { category = PeopleAndBody, char = "\u{1F93E}\u{200D}♀️", keywords = [ "woman playing handball", "woman playing handball", "sports" ], name = "woman-playing-handball", x = 41, y = 5 }
    , { category = PeopleAndBody, char = "\u{1F93E}\u{200D}♂️", keywords = [ "man playing handball", "man playing handball", "sports" ], name = "man-playing-handball", x = 41, y = 11 }
    , { category = PeopleAndBody, char = "\u{1F93E}", keywords = [ "handball", "person playing handball" ], name = "handball", x = 41, y = 17 }
    , { category = Activities, char = "\u{1F93F}", keywords = [ "diving mask", "diving mask" ], name = "diving_mask", x = 41, y = 23 }
    , { category = AnimalsAndNature, char = "\u{1F940}", keywords = [ "wilted flower", "wilted flower", "plant", "nature", "flower" ], name = "wilted_flower", x = 41, y = 24 }
    , { category = Objects, char = "\u{1F941}", keywords = [ "drum with drumsticks", "drum", "music", "instrument", "drumsticks", "snare" ], name = "drum_with_drumsticks", x = 41, y = 25 }
    , { category = FoodAndDrink, char = "\u{1F942}", keywords = [ "clinking glasses", "clinking glasses", "beverage", "drink", "party", "alcohol", "celebrate", "cheers", "wine", "champagne", "toast" ], name = "clinking_glasses", x = 41, y = 26 }
    , { category = FoodAndDrink, char = "\u{1F943}", keywords = [ "tumbler glass", "tumbler glass", "drink", "beverage", "drunk", "alcohol", "liquor", "booze", "bourbon", "scotch", "whisky", "glass", "shot" ], name = "tumbler_glass", x = 41, y = 27 }
    , { category = FoodAndDrink, char = "\u{1F944}", keywords = [ "spoon", "spoon", "cutlery", "kitchen", "tableware" ], name = "spoon", x = 41, y = 28 }
    , { category = Activities, char = "\u{1F945}", keywords = [ "goal net", "goal net", "sports" ], name = "goal_net", x = 41, y = 29 }
    , { category = Activities, char = "\u{1F947}", keywords = [ "first place medal", "1st place medal", "award", "winning", "first" ], name = "first_place_medal", x = 41, y = 30 }
    , { category = Activities, char = "\u{1F948}", keywords = [ "second place medal", "2nd place medal", "award", "second" ], name = "second_place_medal", x = 41, y = 31 }
    , { category = Activities, char = "\u{1F949}", keywords = [ "third place medal", "3rd place medal", "award", "third" ], name = "third_place_medal", x = 41, y = 32 }
    , { category = Activities, char = "\u{1F94A}", keywords = [ "boxing glove", "boxing glove", "sports", "fighting" ], name = "boxing_glove", x = 41, y = 33 }
    , { category = Activities, char = "\u{1F94B}", keywords = [ "martial arts uniform", "martial arts uniform", "judo", "karate", "taekwondo" ], name = "martial_arts_uniform", x = 41, y = 34 }
    , { category = Activities, char = "\u{1F94C}", keywords = [ "curling stone", "curling stone", "sports" ], name = "curling_stone", x = 41, y = 35 }
    , { category = Activities, char = "\u{1F94D}", keywords = [ "lacrosse", "lacrosse", "sports", "ball", "stick" ], name = "lacrosse", x = 41, y = 36 }
    , { category = Activities, char = "\u{1F94E}", keywords = [ "softball", "softball", "sports", "balls" ], name = "softball", x = 41, y = 37 }
    , { category = Activities, char = "\u{1F94F}", keywords = [ "flying disc", "flying disc", "sports", "frisbee", "ultimate" ], name = "flying_disc", x = 41, y = 38 }
    , { category = FoodAndDrink, char = "\u{1F950}", keywords = [ "croissant", "croissant", "food", "bread", "french" ], name = "croissant", x = 41, y = 39 }
    , { category = FoodAndDrink, char = "\u{1F951}", keywords = [ "avocado", "avocado", "fruit", "food" ], name = "avocado", x = 41, y = 40 }
    , { category = FoodAndDrink, char = "\u{1F952}", keywords = [ "cucumber", "cucumber", "fruit", "food", "pickle" ], name = "cucumber", x = 41, y = 41 }
    , { category = FoodAndDrink, char = "\u{1F953}", keywords = [ "bacon", "bacon", "food", "breakfast", "pork", "pig", "meat" ], name = "bacon", x = 41, y = 42 }
    , { category = FoodAndDrink, char = "\u{1F954}", keywords = [ "potato", "potato", "food", "tuber", "vegatable", "starch" ], name = "potato", x = 41, y = 43 }
    , { category = FoodAndDrink, char = "\u{1F955}", keywords = [ "carrot", "carrot", "vegetable", "food", "orange" ], name = "carrot", x = 41, y = 44 }
    , { category = FoodAndDrink, char = "\u{1F956}", keywords = [ "baguette bread", "baguette bread", "food", "bread", "french" ], name = "baguette_bread", x = 41, y = 45 }
    , { category = FoodAndDrink, char = "\u{1F957}", keywords = [ "green salad", "green salad", "food", "healthy", "lettuce" ], name = "green_salad", x = 41, y = 46 }
    , { category = FoodAndDrink, char = "\u{1F958}", keywords = [ "shallow pan of food", "shallow pan of food", "food", "cooking", "casserole", "paella" ], name = "shallow_pan_of_food", x = 41, y = 47 }
    , { category = FoodAndDrink, char = "\u{1F959}", keywords = [ "stuffed flatbread", "stuffed flatbread", "food", "flatbread", "stuffed", "gyro" ], name = "stuffed_flatbread", x = 41, y = 48 }
    , { category = FoodAndDrink, char = "\u{1F95A}", keywords = [ "egg", "egg", "food", "chicken", "breakfast" ], name = "egg", x = 41, y = 49 }
    , { category = FoodAndDrink, char = "\u{1F95B}", keywords = [ "glass of milk", "glass of milk", "beverage", "drink", "cow" ], name = "glass_of_milk", x = 41, y = 50 }
    , { category = FoodAndDrink, char = "\u{1F95C}", keywords = [ "peanuts", "peanuts", "food", "nut" ], name = "peanuts", x = 41, y = 51 }
    , { category = FoodAndDrink, char = "\u{1F95D}", keywords = [ "kiwifruit", "kiwi fruit", "fruit", "food" ], name = "kiwifruit", x = 41, y = 52 }
    , { category = FoodAndDrink, char = "\u{1F95E}", keywords = [ "pancakes", "pancakes", "food", "breakfast", "flapjacks", "hotcakes" ], name = "pancakes", x = 41, y = 53 }
    , { category = FoodAndDrink, char = "\u{1F95F}", keywords = [ "dumpling", "dumpling", "food", "empanada", "pierogi", "potsticker" ], name = "dumpling", x = 41, y = 54 }
    , { category = FoodAndDrink, char = "\u{1F960}", keywords = [ "fortune cookie", "fortune cookie", "food", "prophecy" ], name = "fortune_cookie", x = 41, y = 55 }
    , { category = FoodAndDrink, char = "\u{1F961}", keywords = [ "takeout box", "takeout box", "food", "leftovers" ], name = "takeout_box", x = 41, y = 56 }
    , { category = FoodAndDrink, char = "\u{1F962}", keywords = [ "chopsticks", "chopsticks", "food" ], name = "chopsticks", x = 41, y = 57 }
    , { category = FoodAndDrink, char = "\u{1F963}", keywords = [ "bowl with spoon", "bowl with spoon", "food", "breakfast", "cereal", "oatmeal", "porridge" ], name = "bowl_with_spoon", x = 42, y = 0 }
    , { category = FoodAndDrink, char = "\u{1F964}", keywords = [ "cup with straw", "cup with straw", "drink", "soda" ], name = "cup_with_straw", x = 42, y = 1 }
    , { category = FoodAndDrink, char = "\u{1F965}", keywords = [ "coconut", "coconut", "fruit", "nature", "food", "palm" ], name = "coconut", x = 42, y = 2 }
    , { category = FoodAndDrink, char = "\u{1F966}", keywords = [ "broccoli", "broccoli", "fruit", "food", "vegetable" ], name = "broccoli", x = 42, y = 3 }
    , { category = FoodAndDrink, char = "\u{1F967}", keywords = [ "pie", "pie", "food", "dessert", "pastry" ], name = "pie", x = 42, y = 4 }
    , { category = FoodAndDrink, char = "\u{1F968}", keywords = [ "pretzel", "pretzel", "food", "bread", "twisted" ], name = "pretzel", x = 42, y = 5 }
    , { category = FoodAndDrink, char = "\u{1F969}", keywords = [ "cut of meat", "cut of meat", "food", "cow", "meat", "cut", "chop", "lambchop", "porkchop" ], name = "cut_of_meat", x = 42, y = 6 }
    , { category = FoodAndDrink, char = "\u{1F96A}", keywords = [ "sandwich", "sandwich", "food", "lunch", "bread" ], name = "sandwich", x = 42, y = 7 }
    , { category = FoodAndDrink, char = "\u{1F96B}", keywords = [ "canned food", "canned food", "food", "soup" ], name = "canned_food", x = 42, y = 8 }
    , { category = FoodAndDrink, char = "\u{1F96C}", keywords = [ "leafy green", "leafy green", "food", "vegetable", "plant", "bok choy", "cabbage", "kale", "lettuce" ], name = "leafy_green", x = 42, y = 9 }
    , { category = FoodAndDrink, char = "\u{1F96D}", keywords = [ "mango", "mango", "fruit", "food", "tropical" ], name = "mango", x = 42, y = 10 }
    , { category = FoodAndDrink, char = "\u{1F96E}", keywords = [ "moon cake", "moon cake", "food", "autumn" ], name = "moon_cake", x = 42, y = 11 }
    , { category = FoodAndDrink, char = "\u{1F96F}", keywords = [ "bagel", "bagel", "food", "bread", "bakery", "schmear" ], name = "bagel", x = 42, y = 12 }
    , { category = SmileysAndEmotion, char = "\u{1F970}", keywords = [ "smiling face with 3 hearts", "smiling face with hearts", "face", "love", "like", "affection", "valentines", "infatuation", "crush", "hearts", "adore" ], name = "smiling_face_with_3_hearts", x = 42, y = 13 }
    , { category = SmileysAndEmotion, char = "\u{1F971}", keywords = [ "yawning face", "yawning face" ], name = "yawning_face", x = 42, y = 14 }
    , { category = SmileysAndEmotion, char = "\u{1F972}", keywords = [ "smiling face with tear", "smiling face with tear", "sad", "cry", "pretend" ], name = "smiling_face_with_tear", x = 42, y = 15 }
    , { category = SmileysAndEmotion, char = "\u{1F973}", keywords = [ "partying face", "partying face", "face", "celebration", "woohoo" ], name = "partying_face", x = 42, y = 16 }
    , { category = SmileysAndEmotion, char = "\u{1F974}", keywords = [ "woozy face", "woozy face", "face", "dizzy", "intoxicated", "tipsy", "wavy" ], name = "woozy_face", x = 42, y = 17 }
    , { category = SmileysAndEmotion, char = "\u{1F975}", keywords = [ "hot face", "hot face", "face", "feverish", "heat", "red", "sweating" ], name = "hot_face", x = 42, y = 18 }
    , { category = SmileysAndEmotion, char = "\u{1F976}", keywords = [ "cold face", "cold face", "face", "blue", "freezing", "frozen", "frostbite", "icicles" ], name = "cold_face", x = 42, y = 19 }
    , { category = PeopleAndBody, char = "\u{1F977}", keywords = [ "ninja", "ninja", "ninjutsu", "skills", "japanese" ], name = "ninja", x = 42, y = 20 }
    , { category = SmileysAndEmotion, char = "\u{1F978}", keywords = [ "disguised face", "disguised face", "pretent", "brows", "glasses", "moustache" ], name = "disguised_face", x = 42, y = 26 }
    , { category = SmileysAndEmotion, char = "\u{1F97A}", keywords = [ "pleading face", "pleading face", "face", "begging", "mercy" ], name = "pleading_face", x = 42, y = 27 }
    , { category = Objects, char = "\u{1F97B}", keywords = [ "sari", "sari" ], name = "sari", x = 42, y = 28 }
    , { category = Objects, char = "\u{1F97C}", keywords = [ "lab coat", "lab coat", "doctor", "experiment", "scientist", "chemist" ], name = "lab_coat", x = 42, y = 29 }
    , { category = Objects, char = "\u{1F97D}", keywords = [ "goggles", "goggles", "eyes", "protection", "safety" ], name = "goggles", x = 42, y = 30 }
    , { category = Objects, char = "\u{1F97E}", keywords = [ "hiking boot", "hiking boot", "backpacking", "camping", "hiking" ], name = "hiking_boot", x = 42, y = 31 }
    , { category = Objects, char = "\u{1F97F}", keywords = [ "womans flat shoe", "flat shoe", "ballet", "slip on", "slipper" ], name = "womans_flat_shoe", x = 42, y = 32 }
    , { category = FoodAndDrink, char = "\u{1F980}", keywords = [ "crab", "crab", "animal", "crustacean" ], name = "crab", x = 42, y = 33 }
    , { category = AnimalsAndNature, char = "\u{1F981}", keywords = [ "lion face", "lion", "animal", "nature" ], name = "lion_face", x = 42, y = 34 }
    , { category = AnimalsAndNature, char = "\u{1F982}", keywords = [ "scorpion", "scorpion", "animal", "arachnid" ], name = "scorpion", x = 42, y = 35 }
    , { category = AnimalsAndNature, char = "\u{1F983}", keywords = [ "turkey", "turkey", "animal", "bird" ], name = "turkey", x = 42, y = 36 }
    , { category = AnimalsAndNature, char = "\u{1F984}", keywords = [ "unicorn face", "unicorn", "animal", "nature", "mystical" ], name = "unicorn_face", x = 42, y = 37 }
    , { category = AnimalsAndNature, char = "\u{1F985}", keywords = [ "eagle", "eagle", "animal", "nature", "bird" ], name = "eagle", x = 42, y = 38 }
    , { category = AnimalsAndNature, char = "\u{1F986}", keywords = [ "duck", "duck", "animal", "nature", "bird", "mallard" ], name = "duck", x = 42, y = 39 }
    , { category = AnimalsAndNature, char = "\u{1F987}", keywords = [ "bat", "bat", "animal", "nature", "blind", "vampire" ], name = "bat", x = 42, y = 40 }
    , { category = AnimalsAndNature, char = "\u{1F988}", keywords = [ "shark", "shark", "animal", "nature", "fish", "sea", "ocean", "jaws", "fins", "beach" ], name = "shark", x = 42, y = 41 }
    , { category = AnimalsAndNature, char = "\u{1F989}", keywords = [ "owl", "owl", "animal", "nature", "bird", "hoot" ], name = "owl", x = 42, y = 42 }
    , { category = AnimalsAndNature, char = "\u{1F98A}", keywords = [ "fox face", "fox", "animal", "nature", "face" ], name = "fox_face", x = 42, y = 43 }
    , { category = AnimalsAndNature, char = "\u{1F98B}", keywords = [ "butterfly", "butterfly", "animal", "insect", "nature", "caterpillar" ], name = "butterfly", x = 42, y = 44 }
    , { category = AnimalsAndNature, char = "\u{1F98C}", keywords = [ "deer", "deer", "animal", "nature", "horns", "venison" ], name = "deer", x = 42, y = 45 }
    , { category = AnimalsAndNature, char = "\u{1F98D}", keywords = [ "gorilla", "gorilla", "animal", "nature", "circus" ], name = "gorilla", x = 42, y = 46 }
    , { category = AnimalsAndNature, char = "\u{1F98E}", keywords = [ "lizard", "lizard", "animal", "nature", "reptile" ], name = "lizard", x = 42, y = 47 }
    , { category = AnimalsAndNature, char = "\u{1F98F}", keywords = [ "rhinoceros", "rhinoceros", "animal", "nature", "horn" ], name = "rhinoceros", x = 42, y = 48 }
    , { category = FoodAndDrink, char = "\u{1F990}", keywords = [ "shrimp", "shrimp", "animal", "ocean", "nature", "seafood" ], name = "shrimp", x = 42, y = 49 }
    , { category = FoodAndDrink, char = "\u{1F991}", keywords = [ "squid", "squid", "animal", "nature", "ocean", "sea" ], name = "squid", x = 42, y = 50 }
    , { category = AnimalsAndNature, char = "\u{1F992}", keywords = [ "giraffe face", "giraffe", "animal", "nature", "spots", "safari" ], name = "giraffe_face", x = 42, y = 51 }
    , { category = AnimalsAndNature, char = "\u{1F993}", keywords = [ "zebra face", "zebra", "animal", "nature", "stripes", "safari" ], name = "zebra_face", x = 42, y = 52 }
    , { category = AnimalsAndNature, char = "\u{1F994}", keywords = [ "hedgehog", "hedgehog", "animal", "nature", "spiny" ], name = "hedgehog", x = 42, y = 53 }
    , { category = AnimalsAndNature, char = "\u{1F995}", keywords = [ "sauropod", "sauropod", "animal", "nature", "dinosaur", "brachiosaurus", "brontosaurus", "diplodocus", "extinct" ], name = "sauropod", x = 42, y = 54 }
    , { category = AnimalsAndNature, char = "\u{1F996}", keywords = [ "t rex", "t rex", "animal", "nature", "dinosaur", "tyrannosaurus", "extinct" ], name = "t-rex", x = 42, y = 55 }
    , { category = AnimalsAndNature, char = "\u{1F997}", keywords = [ "cricket", "cricket", "animal", "cricket", "chirp" ], name = "cricket", x = 42, y = 56 }
    , { category = AnimalsAndNature, char = "\u{1F998}", keywords = [ "kangaroo", "kangaroo", "animal", "nature", "australia", "joey", "hop", "marsupial" ], name = "kangaroo", x = 42, y = 57 }
    , { category = AnimalsAndNature, char = "\u{1F999}", keywords = [ "llama", "llama", "animal", "nature", "alpaca" ], name = "llama", x = 43, y = 0 }
    , { category = AnimalsAndNature, char = "\u{1F99A}", keywords = [ "peacock", "peacock", "animal", "nature", "peahen", "bird" ], name = "peacock", x = 43, y = 1 }
    , { category = AnimalsAndNature, char = "\u{1F99B}", keywords = [ "hippopotamus", "hippopotamus", "animal", "nature" ], name = "hippopotamus", x = 43, y = 2 }
    , { category = AnimalsAndNature, char = "\u{1F99C}", keywords = [ "parrot", "parrot", "animal", "nature", "bird", "pirate", "talk" ], name = "parrot", x = 43, y = 3 }
    , { category = AnimalsAndNature, char = "\u{1F99D}", keywords = [ "raccoon", "raccoon", "animal", "nature" ], name = "raccoon", x = 43, y = 4 }
    , { category = FoodAndDrink, char = "\u{1F99E}", keywords = [ "lobster", "lobster", "animal", "nature", "bisque", "claws", "seafood" ], name = "lobster", x = 43, y = 5 }
    , { category = AnimalsAndNature, char = "\u{1F99F}", keywords = [ "mosquito", "mosquito", "animal", "nature", "insect", "malaria" ], name = "mosquito", x = 43, y = 6 }
    , { category = AnimalsAndNature, char = "\u{1F9A0}", keywords = [ "microbe", "microbe", "amoeba", "bacteria", "germs" ], name = "microbe", x = 43, y = 7 }
    , { category = AnimalsAndNature, char = "\u{1F9A1}", keywords = [ "badger", "badger", "animal", "nature", "honey" ], name = "badger", x = 43, y = 8 }
    , { category = AnimalsAndNature, char = "\u{1F9A2}", keywords = [ "swan", "swan", "animal", "nature", "bird" ], name = "swan", x = 43, y = 9 }
    , { category = AnimalsAndNature, char = "\u{1F9A3}", keywords = [ "mammoth", "mammoth", "elephant", "tusks" ], name = "mammoth", x = 43, y = 10 }
    , { category = AnimalsAndNature, char = "\u{1F9A4}", keywords = [ "dodo", "dodo", "animal", "bird" ], name = "dodo", x = 43, y = 11 }
    , { category = AnimalsAndNature, char = "\u{1F9A5}", keywords = [ "sloth", "sloth" ], name = "sloth", x = 43, y = 12 }
    , { category = AnimalsAndNature, char = "\u{1F9A6}", keywords = [ "otter", "otter" ], name = "otter", x = 43, y = 13 }
    , { category = AnimalsAndNature, char = "\u{1F9A7}", keywords = [ "orangutan", "orangutan" ], name = "orangutan", x = 43, y = 14 }
    , { category = AnimalsAndNature, char = "\u{1F9A8}", keywords = [ "skunk", "skunk" ], name = "skunk", x = 43, y = 15 }
    , { category = AnimalsAndNature, char = "\u{1F9A9}", keywords = [ "flamingo", "flamingo" ], name = "flamingo", x = 43, y = 16 }
    , { category = FoodAndDrink, char = "\u{1F9AA}", keywords = [ "oyster", "oyster" ], name = "oyster", x = 43, y = 17 }
    , { category = AnimalsAndNature, char = "\u{1F9AB}", keywords = [ "beaver", "beaver", "animal", "rodent" ], name = "beaver", x = 43, y = 18 }
    , { category = AnimalsAndNature, char = "\u{1F9AC}", keywords = [ "bison", "bison", "ox" ], name = "bison", x = 43, y = 19 }
    , { category = AnimalsAndNature, char = "\u{1F9AD}", keywords = [ "seal", "seal", "animal", "creature", "sea" ], name = "seal", x = 43, y = 20 }
    , { category = AnimalsAndNature, char = "\u{1F9AE}", keywords = [ "guide dog", "guide dog" ], name = "guide_dog", x = 43, y = 21 }
    , { category = Objects, char = "\u{1F9AF}", keywords = [ "probing cane", "probing cane" ], name = "probing_cane", x = 43, y = 22 }
    , { category = PeopleAndBody, char = "\u{1F9B4}", keywords = [ "bone", "bone", "skeleton" ], name = "bone", x = 43, y = 23 }
    , { category = PeopleAndBody, char = "\u{1F9B5}", keywords = [ "leg", "leg", "kick", "limb" ], name = "leg", x = 43, y = 24 }
    , { category = PeopleAndBody, char = "\u{1F9B6}", keywords = [ "foot", "foot", "kick", "stomp" ], name = "foot", x = 43, y = 30 }
    , { category = PeopleAndBody, char = "\u{1F9B7}", keywords = [ "tooth", "tooth", "teeth", "dentist" ], name = "tooth", x = 43, y = 36 }
    , { category = PeopleAndBody, char = "\u{1F9B8}\u{200D}♀️", keywords = [ "female superhero", "woman superhero", "woman", "female", "good", "heroine", "superpowers" ], name = "female_superhero", x = 43, y = 37 }
    , { category = PeopleAndBody, char = "\u{1F9B8}\u{200D}♂️", keywords = [ "male superhero", "man superhero", "man", "male", "good", "hero", "superpowers" ], name = "male_superhero", x = 43, y = 43 }
    , { category = PeopleAndBody, char = "\u{1F9B8}", keywords = [ "superhero", "superhero" ], name = "superhero", x = 43, y = 49 }
    , { category = PeopleAndBody, char = "\u{1F9B9}\u{200D}♀️", keywords = [ "female supervillain", "woman supervillain", "woman", "female", "evil", "bad", "criminal", "heroine", "superpowers" ], name = "female_supervillain", x = 43, y = 55 }
    , { category = PeopleAndBody, char = "\u{1F9B9}\u{200D}♂️", keywords = [ "male supervillain", "man supervillain", "man", "male", "evil", "bad", "criminal", "hero", "superpowers" ], name = "male_supervillain", x = 44, y = 3 }
    , { category = PeopleAndBody, char = "\u{1F9B9}", keywords = [ "supervillain", "supervillain" ], name = "supervillain", x = 44, y = 9 }
    , { category = Objects, char = "\u{1F9BA}", keywords = [ "safety vest", "safety vest" ], name = "safety_vest", x = 44, y = 15 }
    , { category = PeopleAndBody, char = "\u{1F9BB}", keywords = [ "ear with hearing aid", "ear with hearing aid" ], name = "ear_with_hearing_aid", x = 44, y = 16 }
    , { category = TravelAndPlaces, char = "\u{1F9BC}", keywords = [ "motorized wheelchair", "motorized wheelchair" ], name = "motorized_wheelchair", x = 44, y = 22 }
    , { category = TravelAndPlaces, char = "\u{1F9BD}", keywords = [ "manual wheelchair", "manual wheelchair" ], name = "manual_wheelchair", x = 44, y = 23 }
    , { category = PeopleAndBody, char = "\u{1F9BE}", keywords = [ "mechanical arm", "mechanical arm" ], name = "mechanical_arm", x = 44, y = 24 }
    , { category = PeopleAndBody, char = "\u{1F9BF}", keywords = [ "mechanical leg", "mechanical leg" ], name = "mechanical_leg", x = 44, y = 25 }
    , { category = FoodAndDrink, char = "\u{1F9C0}", keywords = [ "cheese wedge", "cheese wedge", "food", "chadder" ], name = "cheese_wedge", x = 44, y = 26 }
    , { category = FoodAndDrink, char = "\u{1F9C1}", keywords = [ "cupcake", "cupcake", "food", "dessert", "bakery", "sweet" ], name = "cupcake", x = 44, y = 27 }
    , { category = FoodAndDrink, char = "\u{1F9C2}", keywords = [ "salt", "salt", "condiment", "shaker" ], name = "salt", x = 44, y = 28 }
    , { category = FoodAndDrink, char = "\u{1F9C3}", keywords = [ "beverage box", "beverage box" ], name = "beverage_box", x = 44, y = 29 }
    , { category = FoodAndDrink, char = "\u{1F9C4}", keywords = [ "garlic", "garlic" ], name = "garlic", x = 44, y = 30 }
    , { category = FoodAndDrink, char = "\u{1F9C5}", keywords = [ "onion", "onion" ], name = "onion", x = 44, y = 31 }
    , { category = FoodAndDrink, char = "\u{1F9C6}", keywords = [ "falafel", "falafel" ], name = "falafel", x = 44, y = 32 }
    , { category = FoodAndDrink, char = "\u{1F9C7}", keywords = [ "waffle", "waffle" ], name = "waffle", x = 44, y = 33 }
    , { category = FoodAndDrink, char = "\u{1F9C8}", keywords = [ "butter", "butter" ], name = "butter", x = 44, y = 34 }
    , { category = FoodAndDrink, char = "\u{1F9C9}", keywords = [ "mate drink", "mate" ], name = "mate_drink", x = 44, y = 35 }
    , { category = FoodAndDrink, char = "\u{1F9CA}", keywords = [ "ice cube", "ice" ], name = "ice_cube", x = 44, y = 36 }
    , { category = FoodAndDrink, char = "\u{1F9CB}", keywords = [ "bubble tea", "bubble tea", "taiwan", "boba", "milk tea", "straw" ], name = "bubble_tea", x = 44, y = 37 }
    , { category = PeopleAndBody, char = "\u{1F9CD}\u{200D}♀️", keywords = [ "woman standing", "woman standing" ], name = "woman_standing", x = 44, y = 38 }
    , { category = PeopleAndBody, char = "\u{1F9CD}\u{200D}♂️", keywords = [ "man standing", "man standing" ], name = "man_standing", x = 44, y = 44 }
    , { category = PeopleAndBody, char = "\u{1F9CD}", keywords = [ "standing person", "person standing" ], name = "standing_person", x = 44, y = 50 }
    , { category = PeopleAndBody, char = "\u{1F9CE}\u{200D}♀️", keywords = [ "woman kneeling", "woman kneeling" ], name = "woman_kneeling", x = 44, y = 56 }
    , { category = PeopleAndBody, char = "\u{1F9CE}\u{200D}♂️", keywords = [ "man kneeling", "man kneeling" ], name = "man_kneeling", x = 45, y = 4 }
    , { category = PeopleAndBody, char = "\u{1F9CE}", keywords = [ "kneeling person", "person kneeling" ], name = "kneeling_person", x = 45, y = 10 }
    , { category = PeopleAndBody, char = "\u{1F9CF}\u{200D}♀️", keywords = [ "deaf woman", "deaf woman" ], name = "deaf_woman", x = 45, y = 16 }
    , { category = PeopleAndBody, char = "\u{1F9CF}\u{200D}♂️", keywords = [ "deaf man", "deaf man" ], name = "deaf_man", x = 45, y = 22 }
    , { category = PeopleAndBody, char = "\u{1F9CF}", keywords = [ "deaf person", "deaf person" ], name = "deaf_person", x = 45, y = 28 }
    , { category = SmileysAndEmotion, char = "\u{1F9D0}", keywords = [ "face with monocle", "face with monocle", "face", "stuffy", "wealthy" ], name = "face_with_monocle", x = 45, y = 34 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🌾", keywords = [ "farmer", "farmer" ], name = "farmer", x = 45, y = 35 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🍳", keywords = [ "cook", "cook" ], name = "cook", x = 45, y = 41 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🍼", keywords = [ "person feeding baby", "person feeding baby", "birth", "food" ], name = "person_feeding_baby", x = 45, y = 47 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎄", keywords = [ "mx claus", "mx claus", "christmas" ], name = "mx_claus", x = 45, y = 53 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎓", keywords = [ "student", "student" ], name = "student", x = 46, y = 1 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎤", keywords = [ "singer", "singer" ], name = "singer", x = 46, y = 7 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🎨", keywords = [ "artist", "artist" ], name = "artist", x = 46, y = 13 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🏫", keywords = [ "teacher", "teacher" ], name = "teacher", x = 46, y = 19 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🏭", keywords = [ "factory worker", "factory worker" ], name = "factory_worker", x = 46, y = 25 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}💻", keywords = [ "technologist", "technologist" ], name = "technologist", x = 46, y = 31 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}💼", keywords = [ "office worker", "office worker" ], name = "office_worker", x = 46, y = 37 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🔧", keywords = [ "mechanic", "mechanic" ], name = "mechanic", x = 46, y = 43 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🔬", keywords = [ "scientist", "scientist" ], name = "scientist", x = 46, y = 49 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🚀", keywords = [ "astronaut", "astronaut" ], name = "astronaut", x = 46, y = 55 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}🚒", keywords = [ "firefighter", "firefighter" ], name = "firefighter", x = 47, y = 3 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F91D}\u{200D}\u{1F9D1}", keywords = [ "people holding hands", "people holding hands" ], name = "people_holding_hands", x = 47, y = 9 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9AF}", keywords = [ "person with probing cane", "person with probing cane" ], name = "person_with_probing_cane", x = 47, y = 35 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B0}", keywords = [ "red haired person", "person red hair" ], name = "red_haired_person", x = 47, y = 41 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B1}", keywords = [ "curly haired person", "person curly hair" ], name = "curly_haired_person", x = 47, y = 47 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B2}", keywords = [ "bald person", "person bald" ], name = "bald_person", x = 47, y = 53 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9B3}", keywords = [ "white haired person", "person white hair" ], name = "white_haired_person", x = 48, y = 1 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9BC}", keywords = [ "person in motorized wheelchair", "person in motorized wheelchair" ], name = "person_in_motorized_wheelchair", x = 48, y = 7 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}\u{1F9BD}", keywords = [ "person in manual wheelchair", "person in manual wheelchair" ], name = "person_in_manual_wheelchair", x = 48, y = 13 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}⚕️", keywords = [ "health worker", "health worker" ], name = "health_worker", x = 48, y = 19 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}⚖️", keywords = [ "judge", "judge" ], name = "judge", x = 48, y = 25 }
    , { category = PeopleAndBody, char = "\u{1F9D1}\u{200D}✈️", keywords = [ "pilot", "pilot" ], name = "pilot", x = 48, y = 31 }
    , { category = PeopleAndBody, char = "\u{1F9D1}", keywords = [ "adult", "person", "gender neutral", "person" ], name = "adult", x = 48, y = 37 }
    , { category = PeopleAndBody, char = "\u{1F9D2}", keywords = [ "child", "child", "gender neutral", "young" ], name = "child", x = 48, y = 43 }
    , { category = PeopleAndBody, char = "\u{1F9D3}", keywords = [ "older adult", "older person", "human", "elder", "senior", "gender neutral" ], name = "older_adult", x = 48, y = 49 }
    , { category = PeopleAndBody, char = "\u{1F9D4}", keywords = [ "bearded person", "man beard", "person", "bewhiskered" ], name = "bearded_person", x = 48, y = 55 }
    , { category = PeopleAndBody, char = "\u{1F9D5}", keywords = [ "person with headscarf", "woman with headscarf", "female", "hijab", "mantilla", "tichel" ], name = "person_with_headscarf", x = 49, y = 3 }
    , { category = PeopleAndBody, char = "\u{1F9D6}\u{200D}♀️", keywords = [ "woman in steamy room", "woman in steamy room", "female", "woman", "spa", "steamroom", "sauna" ], name = "woman_in_steamy_room", x = 49, y = 9 }
    , { category = PeopleAndBody, char = "\u{1F9D6}\u{200D}♂️", keywords = [ "man in steamy room", "man in steamy room", "male", "man", "spa", "steamroom", "sauna" ], name = "man_in_steamy_room", x = 49, y = 15 }
    , { category = PeopleAndBody, char = "\u{1F9D6}", keywords = [ "person in steamy room", "person in steamy room" ], name = "person_in_steamy_room", x = 49, y = 21 }
    , { category = PeopleAndBody, char = "\u{1F9D7}\u{200D}♀️", keywords = [ "woman climbing", "woman climbing", "sports", "hobby", "woman", "female", "rock" ], name = "woman_climbing", x = 49, y = 27 }
    , { category = PeopleAndBody, char = "\u{1F9D7}\u{200D}♂️", keywords = [ "man climbing", "man climbing", "sports", "hobby", "man", "male", "rock" ], name = "man_climbing", x = 49, y = 33 }
    , { category = PeopleAndBody, char = "\u{1F9D7}", keywords = [ "person climbing", "person climbing" ], name = "person_climbing", x = 49, y = 39 }
    , { category = PeopleAndBody, char = "\u{1F9D8}\u{200D}♀️", keywords = [ "woman in lotus position", "woman in lotus position", "woman", "female", "meditation", "yoga", "serenity", "zen", "mindfulness" ], name = "woman_in_lotus_position", x = 49, y = 45 }
    , { category = PeopleAndBody, char = "\u{1F9D8}\u{200D}♂️", keywords = [ "man in lotus position", "man in lotus position", "man", "male", "meditation", "yoga", "serenity", "zen", "mindfulness" ], name = "man_in_lotus_position", x = 49, y = 51 }
    , { category = PeopleAndBody, char = "\u{1F9D8}", keywords = [ "person in lotus position", "person in lotus position" ], name = "person_in_lotus_position", x = 49, y = 57 }
    , { category = PeopleAndBody, char = "\u{1F9D9}\u{200D}♀️", keywords = [ "female mage", "woman mage", "woman", "female", "mage", "witch" ], name = "female_mage", x = 50, y = 5 }
    , { category = PeopleAndBody, char = "\u{1F9D9}\u{200D}♂️", keywords = [ "male mage", "man mage", "man", "male", "mage", "sorcerer" ], name = "male_mage", x = 50, y = 11 }
    , { category = PeopleAndBody, char = "\u{1F9D9}", keywords = [ "mage", "mage" ], name = "mage", x = 50, y = 17 }
    , { category = PeopleAndBody, char = "\u{1F9DA}\u{200D}♀️", keywords = [ "female fairy", "woman fairy", "woman", "female" ], name = "female_fairy", x = 50, y = 23 }
    , { category = PeopleAndBody, char = "\u{1F9DA}\u{200D}♂️", keywords = [ "male fairy", "man fairy", "man", "male" ], name = "male_fairy", x = 50, y = 29 }
    , { category = PeopleAndBody, char = "\u{1F9DA}", keywords = [ "fairy", "fairy" ], name = "fairy", x = 50, y = 35 }
    , { category = PeopleAndBody, char = "\u{1F9DB}\u{200D}♀️", keywords = [ "female vampire", "woman vampire", "woman", "female" ], name = "female_vampire", x = 50, y = 41 }
    , { category = PeopleAndBody, char = "\u{1F9DB}\u{200D}♂️", keywords = [ "male vampire", "man vampire", "man", "male", "dracula" ], name = "male_vampire", x = 50, y = 47 }
    , { category = PeopleAndBody, char = "\u{1F9DB}", keywords = [ "vampire", "vampire" ], name = "vampire", x = 50, y = 53 }
    , { category = PeopleAndBody, char = "\u{1F9DC}\u{200D}♀️", keywords = [ "mermaid", "mermaid", "woman", "female", "merwoman", "ariel" ], name = "mermaid", x = 51, y = 1 }
    , { category = PeopleAndBody, char = "\u{1F9DC}\u{200D}♂️", keywords = [ "merman", "merman", "man", "male", "triton" ], name = "merman", x = 51, y = 7 }
    , { category = PeopleAndBody, char = "\u{1F9DC}", keywords = [ "merperson", "merperson" ], name = "merperson", x = 51, y = 13 }
    , { category = PeopleAndBody, char = "\u{1F9DD}\u{200D}♀️", keywords = [ "female elf", "woman elf", "woman", "female" ], name = "female_elf", x = 51, y = 19 }
    , { category = PeopleAndBody, char = "\u{1F9DD}\u{200D}♂️", keywords = [ "male elf", "man elf", "man", "male" ], name = "male_elf", x = 51, y = 25 }
    , { category = PeopleAndBody, char = "\u{1F9DD}", keywords = [ "elf", "elf" ], name = "elf", x = 51, y = 31 }
    , { category = PeopleAndBody, char = "\u{1F9DE}\u{200D}♀️", keywords = [ "female genie", "woman genie", "woman", "female" ], name = "female_genie", x = 51, y = 37 }
    , { category = PeopleAndBody, char = "\u{1F9DE}\u{200D}♂️", keywords = [ "male genie", "man genie", "man", "male" ], name = "male_genie", x = 51, y = 38 }
    , { category = PeopleAndBody, char = "\u{1F9DE}", keywords = [ "genie", "genie" ], name = "genie", x = 51, y = 39 }
    , { category = PeopleAndBody, char = "\u{1F9DF}\u{200D}♀️", keywords = [ "female zombie", "woman zombie", "woman", "female", "undead", "walking dead" ], name = "female_zombie", x = 51, y = 40 }
    , { category = PeopleAndBody, char = "\u{1F9DF}\u{200D}♂️", keywords = [ "male zombie", "man zombie", "man", "male", "dracula", "undead", "walking dead" ], name = "male_zombie", x = 51, y = 41 }
    , { category = PeopleAndBody, char = "\u{1F9DF}", keywords = [ "zombie", "zombie" ], name = "zombie", x = 51, y = 42 }
    , { category = PeopleAndBody, char = "\u{1F9E0}", keywords = [ "brain", "brain", "smart", "intelligent" ], name = "brain", x = 51, y = 43 }
    , { category = SmileysAndEmotion, char = "\u{1F9E1}", keywords = [ "orange heart", "orange heart", "love", "like", "affection", "valentines" ], name = "orange_heart", x = 51, y = 44 }
    , { category = Objects, char = "\u{1F9E2}", keywords = [ "billed cap", "billed cap", "cap", "baseball" ], name = "billed_cap", x = 51, y = 45 }
    , { category = Objects, char = "\u{1F9E3}", keywords = [ "scarf", "scarf", "neck", "winter", "clothes" ], name = "scarf", x = 51, y = 46 }
    , { category = Objects, char = "\u{1F9E4}", keywords = [ "gloves", "gloves", "hands", "winter", "clothes" ], name = "gloves", x = 51, y = 47 }
    , { category = Objects, char = "\u{1F9E5}", keywords = [ "coat", "coat", "jacket" ], name = "coat", x = 51, y = 48 }
    , { category = Objects, char = "\u{1F9E6}", keywords = [ "socks", "socks", "stockings", "clothes" ], name = "socks", x = 51, y = 49 }
    , { category = Activities, char = "\u{1F9E7}", keywords = [ "red envelope", "red envelope", "gift" ], name = "red_envelope", x = 51, y = 50 }
    , { category = Activities, char = "\u{1F9E8}", keywords = [ "firecracker", "firecracker", "dynamite", "boom", "explode", "explosion", "explosive" ], name = "firecracker", x = 51, y = 51 }
    , { category = Activities, char = "\u{1F9E9}", keywords = [ "jigsaw", "puzzle piece", "interlocking", "puzzle", "piece" ], name = "jigsaw", x = 51, y = 52 }
    , { category = Objects, char = "\u{1F9EA}", keywords = [ "test tube", "test tube", "chemistry", "experiment", "lab", "science" ], name = "test_tube", x = 51, y = 53 }
    , { category = Objects, char = "\u{1F9EB}", keywords = [ "petri dish", "petri dish", "bacteria", "biology", "culture", "lab" ], name = "petri_dish", x = 51, y = 54 }
    , { category = Objects, char = "\u{1F9EC}", keywords = [ "dna", "dna", "biologist", "genetics", "life" ], name = "dna", x = 51, y = 55 }
    , { category = TravelAndPlaces, char = "\u{1F9ED}", keywords = [ "compass", "compass", "magnetic", "navigation", "orienteering" ], name = "compass", x = 51, y = 56 }
    , { category = Objects, char = "\u{1F9EE}", keywords = [ "abacus", "abacus", "calculation" ], name = "abacus", x = 51, y = 57 }
    , { category = Objects, char = "\u{1F9EF}", keywords = [ "fire extinguisher", "fire extinguisher", "quench" ], name = "fire_extinguisher", x = 52, y = 0 }
    , { category = Objects, char = "\u{1F9F0}", keywords = [ "toolbox", "toolbox", "tools", "diy", "fix", "maintainer", "mechanic" ], name = "toolbox", x = 52, y = 1 }
    , { category = TravelAndPlaces, char = "\u{1F9F1}", keywords = [ "bricks", "brick", "bricks" ], name = "bricks", x = 52, y = 2 }
    , { category = Objects, char = "\u{1F9F2}", keywords = [ "magnet", "magnet", "attraction", "magnetic" ], name = "magnet", x = 52, y = 3 }
    , { category = TravelAndPlaces, char = "\u{1F9F3}", keywords = [ "luggage", "luggage", "packing", "travel" ], name = "luggage", x = 52, y = 4 }
    , { category = Objects, char = "\u{1F9F4}", keywords = [ "lotion bottle", "lotion bottle", "moisturizer", "sunscreen" ], name = "lotion_bottle", x = 52, y = 5 }
    , { category = Activities, char = "\u{1F9F5}", keywords = [ "thread", "thread", "needle", "sewing", "spool", "string" ], name = "thread", x = 52, y = 6 }
    , { category = Activities, char = "\u{1F9F6}", keywords = [ "yarn", "yarn", "ball", "crochet", "knit" ], name = "yarn", x = 52, y = 7 }
    , { category = Objects, char = "\u{1F9F7}", keywords = [ "safety pin", "safety pin", "diaper" ], name = "safety_pin", x = 52, y = 8 }
    , { category = Activities, char = "\u{1F9F8}", keywords = [ "teddy bear", "teddy bear", "plush", "stuffed" ], name = "teddy_bear", x = 52, y = 9 }
    , { category = Objects, char = "\u{1F9F9}", keywords = [ "broom", "broom", "cleaning", "sweeping", "witch" ], name = "broom", x = 52, y = 10 }
    , { category = Objects, char = "\u{1F9FA}", keywords = [ "basket", "basket", "laundry" ], name = "basket", x = 52, y = 11 }
    , { category = Objects, char = "\u{1F9FB}", keywords = [ "roll of paper", "roll of paper", "roll" ], name = "roll_of_paper", x = 52, y = 12 }
    , { category = Objects, char = "\u{1F9FC}", keywords = [ "soap", "soap", "bar", "bathing", "cleaning", "lather" ], name = "soap", x = 52, y = 13 }
    , { category = Objects, char = "\u{1F9FD}", keywords = [ "sponge", "sponge", "absorbing", "cleaning", "porous" ], name = "sponge", x = 52, y = 14 }
    , { category = Objects, char = "\u{1F9FE}", keywords = [ "receipt", "receipt", "accounting", "expenses" ], name = "receipt", x = 52, y = 15 }
    , { category = Activities, char = "\u{1F9FF}", keywords = [ "nazar amulet", "nazar amulet", "bead", "charm" ], name = "nazar_amulet", x = 52, y = 16 }
    , { category = Objects, char = "\u{1FA70}", keywords = [ "ballet shoes", "ballet shoes" ], name = "ballet_shoes", x = 52, y = 17 }
    , { category = Objects, char = "\u{1FA71}", keywords = [ "one piece swimsuit", "one piece swimsuit" ], name = "one-piece_swimsuit", x = 52, y = 18 }
    , { category = Objects, char = "\u{1FA72}", keywords = [ "briefs", "briefs" ], name = "briefs", x = 52, y = 19 }
    , { category = Objects, char = "\u{1FA73}", keywords = [ "shorts", "shorts" ], name = "shorts", x = 52, y = 20 }
    , { category = Objects, char = "\u{1FA74}", keywords = [ "thong sandal", "thong sandal", "footwear", "summer" ], name = "thong_sandal", x = 52, y = 21 }
    , { category = Objects, char = "\u{1FA78}", keywords = [ "drop of blood", "drop of blood" ], name = "drop_of_blood", x = 52, y = 22 }
    , { category = Objects, char = "\u{1FA79}", keywords = [ "adhesive bandage", "adhesive bandage" ], name = "adhesive_bandage", x = 52, y = 23 }
    , { category = Objects, char = "\u{1FA7A}", keywords = [ "stethoscope", "stethoscope" ], name = "stethoscope", x = 52, y = 24 }
    , { category = Activities, char = "\u{1FA80}", keywords = [ "yo yo", "yo yo" ], name = "yo-yo", x = 52, y = 25 }
    , { category = Activities, char = "\u{1FA81}", keywords = [ "kite", "kite" ], name = "kite", x = 52, y = 26 }
    , { category = TravelAndPlaces, char = "\u{1FA82}", keywords = [ "parachute", "parachute" ], name = "parachute", x = 52, y = 27 }
    , { category = Objects, char = "\u{1FA83}", keywords = [ "boomerang", "boomerang", "weapon" ], name = "boomerang", x = 52, y = 28 }
    , { category = Activities, char = "\u{1FA84}", keywords = [ "magic wand", "magic wand", "supernature", "power" ], name = "magic_wand", x = 52, y = 29 }
    , { category = Activities, char = "\u{1FA85}", keywords = [ "pinata", "pinata", "mexico", "candy", "celebration" ], name = "pinata", x = 52, y = 30 }
    , { category = Activities, char = "\u{1FA86}", keywords = [ "nesting dolls", "nesting dolls", "matryoshka", "toy" ], name = "nesting_dolls", x = 52, y = 31 }
    , { category = TravelAndPlaces, char = "\u{1FA90}", keywords = [ "ringed planet", "ringed planet" ], name = "ringed_planet", x = 52, y = 32 }
    , { category = Objects, char = "\u{1FA91}", keywords = [ "chair", "chair" ], name = "chair", x = 52, y = 33 }
    , { category = Objects, char = "\u{1FA92}", keywords = [ "razor", "razor" ], name = "razor", x = 52, y = 34 }
    , { category = Objects, char = "\u{1FA93}", keywords = [ "axe", "axe" ], name = "axe", x = 52, y = 35 }
    , { category = Objects, char = "\u{1FA94}", keywords = [ "diya lamp", "diya lamp" ], name = "diya_lamp", x = 52, y = 36 }
    , { category = Objects, char = "\u{1FA95}", keywords = [ "banjo", "banjo" ], name = "banjo", x = 52, y = 37 }
    , { category = Objects, char = "\u{1FA96}", keywords = [ "military helmet", "military helmet", "army", "protection" ], name = "military_helmet", x = 52, y = 38 }
    , { category = Objects, char = "\u{1FA97}", keywords = [ "accordion", "accordion", "music" ], name = "accordion", x = 52, y = 39 }
    , { category = Objects, char = "\u{1FA98}", keywords = [ "long drum", "long drum", "music" ], name = "long_drum", x = 52, y = 40 }
    , { category = Objects, char = "\u{1FA99}", keywords = [ "coin", "coin", "money", "currency" ], name = "coin", x = 52, y = 41 }
    , { category = Objects, char = "\u{1FA9A}", keywords = [ "carpentry saw", "carpentry saw", "cut", "chop" ], name = "carpentry_saw", x = 52, y = 42 }
    , { category = Objects, char = "\u{1FA9B}", keywords = [ "screwdriver", "screwdriver", "tools" ], name = "screwdriver", x = 52, y = 43 }
    , { category = Objects, char = "\u{1FA9C}", keywords = [ "ladder", "ladder", "tools" ], name = "ladder", x = 52, y = 44 }
    , { category = Objects, char = "\u{1FA9D}", keywords = [ "hook", "hook", "tools" ], name = "hook", x = 52, y = 45 }
    , { category = Objects, char = "\u{1FA9E}", keywords = [ "mirror", "mirror", "reflection" ], name = "mirror", x = 52, y = 46 }
    , { category = Objects, char = "\u{1FA9F}", keywords = [ "window", "window", "scenery" ], name = "window", x = 52, y = 47 }
    , { category = Objects, char = "\u{1FAA0}", keywords = [ "plunger", "plunger", "toilet" ], name = "plunger", x = 52, y = 48 }
    , { category = Activities, char = "\u{1FAA1}", keywords = [ "sewing needle", "sewing needle", "stitches" ], name = "sewing_needle", x = 52, y = 49 }
    , { category = Activities, char = "\u{1FAA2}", keywords = [ "knot", "knot", "rope", "scout" ], name = "knot", x = 52, y = 50 }
    , { category = Objects, char = "\u{1FAA3}", keywords = [ "bucket", "bucket", "water", "container" ], name = "bucket", x = 52, y = 51 }
    , { category = Objects, char = "\u{1FAA4}", keywords = [ "mouse trap", "mouse trap", "cheese" ], name = "mouse_trap", x = 52, y = 52 }
    , { category = Objects, char = "\u{1FAA5}", keywords = [ "toothbrush", "toothbrush", "hygiene", "dental" ], name = "toothbrush", x = 52, y = 53 }
    , { category = Objects, char = "\u{1FAA6}", keywords = [ "headstone", "headstone", "death", "rip", "grave" ], name = "headstone", x = 52, y = 54 }
    , { category = Objects, char = "\u{1FAA7}", keywords = [ "placard", "placard", "announcement" ], name = "placard", x = 52, y = 55 }
    , { category = TravelAndPlaces, char = "\u{1FAA8}", keywords = [ "rock", "rock", "stone" ], name = "rock", x = 52, y = 56 }
    , { category = AnimalsAndNature, char = "\u{1FAB0}", keywords = [ "fly", "fly", "insect" ], name = "fly", x = 52, y = 57 }
    , { category = AnimalsAndNature, char = "\u{1FAB1}", keywords = [ "worm", "worm", "animal" ], name = "worm", x = 53, y = 0 }
    , { category = AnimalsAndNature, char = "\u{1FAB2}", keywords = [ "beetle", "beetle", "insect" ], name = "beetle", x = 53, y = 1 }
    , { category = AnimalsAndNature, char = "\u{1FAB3}", keywords = [ "cockroach", "cockroach", "insect", "pests" ], name = "cockroach", x = 53, y = 2 }
    , { category = AnimalsAndNature, char = "\u{1FAB4}", keywords = [ "potted plant", "potted plant", "greenery", "house" ], name = "potted_plant", x = 53, y = 3 }
    , { category = TravelAndPlaces, char = "\u{1FAB5}", keywords = [ "wood", "wood", "nature", "timber", "trunk" ], name = "wood", x = 53, y = 4 }
    , { category = AnimalsAndNature, char = "\u{1FAB6}", keywords = [ "feather", "feather", "bird", "fly" ], name = "feather", x = 53, y = 5 }
    , { category = PeopleAndBody, char = "\u{1FAC0}", keywords = [ "anatomical heart", "anatomical heart", "health", "heartbeat" ], name = "anatomical_heart", x = 53, y = 6 }
    , { category = PeopleAndBody, char = "\u{1FAC1}", keywords = [ "lungs", "lungs", "breathe" ], name = "lungs", x = 53, y = 7 }
    , { category = PeopleAndBody, char = "\u{1FAC2}", keywords = [ "people hugging", "people hugging", "care" ], name = "people_hugging", x = 53, y = 8 }
    , { category = FoodAndDrink, char = "\u{1FAD0}", keywords = [ "blueberries", "blueberries", "fruit" ], name = "blueberries", x = 53, y = 9 }
    , { category = FoodAndDrink, char = "\u{1FAD1}", keywords = [ "bell pepper", "bell pepper", "fruit", "plant" ], name = "bell_pepper", x = 53, y = 10 }
    , { category = FoodAndDrink, char = "\u{1FAD2}", keywords = [ "olive", "olive", "fruit" ], name = "olive", x = 53, y = 11 }
    , { category = FoodAndDrink, char = "\u{1FAD3}", keywords = [ "flatbread", "flatbread", "flour", "food" ], name = "flatbread", x = 53, y = 12 }
    , { category = FoodAndDrink, char = "\u{1FAD4}", keywords = [ "tamale", "tamale", "food", "masa" ], name = "tamale", x = 53, y = 13 }
    , { category = FoodAndDrink, char = "\u{1FAD5}", keywords = [ "fondue", "fondue", "cheese", "pot", "food" ], name = "fondue", x = 53, y = 14 }
    , { category = FoodAndDrink, char = "\u{1FAD6}", keywords = [ "teapot", "teapot", "drink", "hot" ], name = "teapot", x = 53, y = 15 }
    , { category = Symbols, char = "‼️", keywords = [ "bangbang", "double exclamation mark", "exclamation", "surprise" ], name = "bangbang", x = 53, y = 16 }
    , { category = Symbols, char = "⁉️", keywords = [ "interrobang", "exclamation question mark", "wat", "punctuation", "surprise" ], name = "interrobang", x = 53, y = 17 }
    , { category = Symbols, char = "™️", keywords = [ "tm", "trade mark", "trademark", "brand", "law", "legal" ], name = "tm", x = 53, y = 18 }
    , { category = Symbols, char = "ℹ️", keywords = [ "information source", "information", "blue square", "alphabet", "letter" ], name = "information_source", x = 53, y = 19 }
    , { category = Symbols, char = "↔️", keywords = [ "left right arrow", "left right arrow", "shape", "direction", "horizontal", "sideways" ], name = "left_right_arrow", x = 53, y = 20 }
    , { category = Symbols, char = "↕️", keywords = [ "arrow up down", "up down arrow", "blue square", "direction", "way", "vertical" ], name = "arrow_up_down", x = 53, y = 21 }
    , { category = Symbols, char = "↖️", keywords = [ "arrow upper left", "up left arrow", "blue square", "point", "direction", "diagonal", "northwest" ], name = "arrow_upper_left", x = 53, y = 22 }
    , { category = Symbols, char = "↗️", keywords = [ "arrow upper right", "up right arrow", "blue square", "point", "direction", "diagonal", "northeast" ], name = "arrow_upper_right", x = 53, y = 23 }
    , { category = Symbols, char = "↘️", keywords = [ "arrow lower right", "down right arrow", "blue square", "direction", "diagonal", "southeast" ], name = "arrow_lower_right", x = 53, y = 24 }
    , { category = Symbols, char = "↙️", keywords = [ "arrow lower left", "down left arrow", "blue square", "direction", "diagonal", "southwest" ], name = "arrow_lower_left", x = 53, y = 25 }
    , { category = Symbols, char = "↩️", keywords = [ "leftwards arrow with hook", "right arrow curving left", "back", "return", "blue square", "undo", "enter" ], name = "leftwards_arrow_with_hook", x = 53, y = 26 }
    , { category = Symbols, char = "↪️", keywords = [ "arrow right hook", "left arrow curving right", "blue square", "return", "rotate", "direction" ], name = "arrow_right_hook", x = 53, y = 27 }
    , { category = TravelAndPlaces, char = "⌚", keywords = [ "watch", "watch", "time", "accessories" ], name = "watch", x = 53, y = 28 }
    , { category = TravelAndPlaces, char = "⌛", keywords = [ "hourglass", "hourglass done", "time", "clock", "oldschool", "limit", "exam", "quiz", "test" ], name = "hourglass", x = 53, y = 29 }
    , { category = Objects, char = "⌨️", keywords = [ "keyboard", "keyboard", "technology", "computer", "type", "input", "text" ], name = "keyboard", x = 53, y = 30 }
    , { category = Symbols, char = "⏏️", keywords = [ "eject", "eject button", "blue square" ], name = "eject", x = 53, y = 31 }
    , { category = Symbols, char = "⏩", keywords = [ "fast forward", "fast forward button", "blue square", "play", "speed", "continue" ], name = "fast_forward", x = 53, y = 32 }
    , { category = Symbols, char = "⏪", keywords = [ "rewind", "fast reverse button", "play", "blue square" ], name = "rewind", x = 53, y = 33 }
    , { category = Symbols, char = "⏫", keywords = [ "arrow double up", "fast up button", "blue square", "direction", "top" ], name = "arrow_double_up", x = 53, y = 34 }
    , { category = Symbols, char = "⏬", keywords = [ "arrow double down", "fast down button", "blue square", "direction", "bottom" ], name = "arrow_double_down", x = 53, y = 35 }
    , { category = Symbols, char = "⏭️", keywords = [ "black right pointing double triangle with vertical bar", "next track button", "forward", "next", "blue square" ], name = "black_right_pointing_double_triangle_with_vertical_bar", x = 53, y = 36 }
    , { category = Symbols, char = "⏮️", keywords = [ "black left pointing double triangle with vertical bar", "last track button", "backward" ], name = "black_left_pointing_double_triangle_with_vertical_bar", x = 53, y = 37 }
    , { category = Symbols, char = "⏯️", keywords = [ "black right pointing triangle with double vertical bar", "play or pause button", "blue square", "play", "pause" ], name = "black_right_pointing_triangle_with_double_vertical_bar", x = 53, y = 38 }
    , { category = TravelAndPlaces, char = "⏰", keywords = [ "alarm clock", "alarm clock", "time", "wake" ], name = "alarm_clock", x = 53, y = 39 }
    , { category = TravelAndPlaces, char = "⏱️", keywords = [ "stopwatch", "stopwatch", "time", "deadline" ], name = "stopwatch", x = 53, y = 40 }
    , { category = TravelAndPlaces, char = "⏲️", keywords = [ "timer clock", "timer clock", "alarm" ], name = "timer_clock", x = 53, y = 41 }
    , { category = TravelAndPlaces, char = "⏳", keywords = [ "hourglass flowing sand", "hourglass not done", "oldschool", "time", "countdown" ], name = "hourglass_flowing_sand", x = 53, y = 42 }
    , { category = Symbols, char = "⏸️", keywords = [ "double vertical bar", "pause button", "pause", "blue square" ], name = "double_vertical_bar", x = 53, y = 43 }
    , { category = Symbols, char = "⏹️", keywords = [ "black square for stop", "stop button", "blue square" ], name = "black_square_for_stop", x = 53, y = 44 }
    , { category = Symbols, char = "⏺️", keywords = [ "black circle for record", "record button", "blue square" ], name = "black_circle_for_record", x = 53, y = 45 }
    , { category = Symbols, char = "Ⓜ️", keywords = [ "m", "circled m", "alphabet", "blue circle", "letter" ], name = "m", x = 53, y = 46 }
    , { category = Symbols, char = "▪️", keywords = [ "black small square", "black small square", "shape", "icon" ], name = "black_small_square", x = 53, y = 47 }
    , { category = Symbols, char = "▫️", keywords = [ "white small square", "white small square", "shape", "icon" ], name = "white_small_square", x = 53, y = 48 }
    , { category = Symbols, char = "▶️", keywords = [ "arrow forward", "play button", "blue square", "right", "direction", "play" ], name = "arrow_forward", x = 53, y = 49 }
    , { category = Symbols, char = "◀️", keywords = [ "arrow backward", "reverse button", "blue square", "left", "direction" ], name = "arrow_backward", x = 53, y = 50 }
    , { category = Symbols, char = "◻️", keywords = [ "white medium square", "white medium square", "shape", "stone", "icon" ], name = "white_medium_square", x = 53, y = 51 }
    , { category = Symbols, char = "◼️", keywords = [ "black medium square", "black medium square", "shape", "button", "icon" ], name = "black_medium_square", x = 53, y = 52 }
    , { category = Symbols, char = "◽", keywords = [ "white medium small square", "white medium small square", "shape", "stone", "icon", "button" ], name = "white_medium_small_square", x = 53, y = 53 }
    , { category = Symbols, char = "◾", keywords = [ "black medium small square", "black medium small square", "icon", "shape", "button" ], name = "black_medium_small_square", x = 53, y = 54 }
    , { category = TravelAndPlaces, char = "☀️", keywords = [ "sunny", "sun", "weather", "nature", "brightness", "summer", "beach", "spring" ], name = "sunny", x = 53, y = 55 }
    , { category = TravelAndPlaces, char = "☁️", keywords = [ "cloud", "cloud", "weather", "sky" ], name = "cloud", x = 53, y = 56 }
    , { category = TravelAndPlaces, char = "☂️", keywords = [ "umbrella", "umbrella", "weather", "spring" ], name = "umbrella", x = 53, y = 57 }
    , { category = TravelAndPlaces, char = "☃️", keywords = [ "snowman", "snowman", "winter", "season", "cold", "weather", "christmas", "xmas", "frozen" ], name = "snowman", x = 54, y = 0 }
    , { category = TravelAndPlaces, char = "☄️", keywords = [ "comet", "comet", "space" ], name = "comet", x = 54, y = 1 }
    , { category = Objects, char = "☎️", keywords = [ "phone", "telephone", "technology", "communication", "dial", "telephone" ], name = "phone", x = 54, y = 2 }
    , { category = Symbols, char = "☑️", keywords = [ "ballot box with check", "check box with check", "ok", "agree", "confirm", "black square", "vote", "election", "yes", "tick" ], name = "ballot_box_with_check", x = 54, y = 3 }
    , { category = TravelAndPlaces, char = "☔", keywords = [ "umbrella with rain drops", "umbrella with rain drops", "rainy", "weather", "spring" ], name = "umbrella_with_rain_drops", x = 54, y = 4 }
    , { category = FoodAndDrink, char = "☕", keywords = [ "coffee", "hot beverage", "beverage", "caffeine", "latte", "espresso" ], name = "coffee", x = 54, y = 5 }
    , { category = AnimalsAndNature, char = "☘️", keywords = [ "shamrock", "shamrock", "vegetable", "plant", "nature", "irish", "clover" ], name = "shamrock", x = 54, y = 6 }
    , { category = PeopleAndBody, char = "☝️", keywords = [ "point up", "index pointing up", "hand", "fingers", "direction", "up" ], name = "point_up", x = 54, y = 7 }
    , { category = SmileysAndEmotion, char = "☠️", keywords = [ "skull and crossbones", "skull and crossbones", "poison", "danger", "deadly", "scary", "death", "pirate", "evil" ], name = "skull_and_crossbones", x = 54, y = 13 }
    , { category = Symbols, char = "☢️", keywords = [ "radioactive sign", "radioactive", "nuclear", "danger" ], name = "radioactive_sign", x = 54, y = 14 }
    , { category = Symbols, char = "☣️", keywords = [ "biohazard sign", "biohazard", "danger" ], name = "biohazard_sign", x = 54, y = 15 }
    , { category = Symbols, char = "☦️", keywords = [ "orthodox cross", "orthodox cross", "suppedaneum", "religion" ], name = "orthodox_cross", x = 54, y = 16 }
    , { category = Symbols, char = "☪️", keywords = [ "star and crescent", "star and crescent", "islam" ], name = "star_and_crescent", x = 54, y = 17 }
    , { category = Symbols, char = "☮️", keywords = [ "peace symbol", "peace symbol", "hippie" ], name = "peace_symbol", x = 54, y = 18 }
    , { category = Symbols, char = "☯️", keywords = [ "yin yang", "yin yang", "balance" ], name = "yin_yang", x = 54, y = 19 }
    , { category = Symbols, char = "☸️", keywords = [ "wheel of dharma", "wheel of dharma", "hinduism", "buddhism", "sikhism", "jainism" ], name = "wheel_of_dharma", x = 54, y = 20 }
    , { category = SmileysAndEmotion, char = "☹️", keywords = [ "white frowning face", "frowning face", "face", "sad", "upset", "frown" ], name = "white_frowning_face", x = 54, y = 21 }
    , { category = SmileysAndEmotion, char = "☺️", keywords = [ "relaxed", "smiling face", "face", "blush", "massage", "happiness" ], name = "relaxed", x = 54, y = 22 }
    , { category = Symbols, char = "♀️", keywords = [ "female sign", "female sign" ], name = "female_sign", x = 54, y = 23 }
    , { category = Symbols, char = "♂️", keywords = [ "male sign", "male sign" ], name = "male_sign", x = 54, y = 24 }
    , { category = Symbols, char = "♈", keywords = [ "aries", "aries", "sign", "purple square", "zodiac", "astrology" ], name = "aries", x = 54, y = 25 }
    , { category = Symbols, char = "♉", keywords = [ "taurus", "taurus", "purple square", "sign", "zodiac", "astrology" ], name = "taurus", x = 54, y = 26 }
    , { category = Symbols, char = "♊", keywords = [ "gemini", "gemini", "sign", "zodiac", "purple square", "astrology" ], name = "gemini", x = 54, y = 27 }
    , { category = Symbols, char = "♋", keywords = [ "cancer", "cancer", "sign", "zodiac", "purple square", "astrology" ], name = "cancer", x = 54, y = 28 }
    , { category = Symbols, char = "♌", keywords = [ "leo", "leo", "sign", "purple square", "zodiac", "astrology" ], name = "leo", x = 54, y = 29 }
    , { category = Symbols, char = "♍", keywords = [ "virgo", "virgo", "sign", "zodiac", "purple square", "astrology" ], name = "virgo", x = 54, y = 30 }
    , { category = Symbols, char = "♎", keywords = [ "libra", "libra", "sign", "purple square", "zodiac", "astrology" ], name = "libra", x = 54, y = 31 }
    , { category = Symbols, char = "♏", keywords = [ "scorpius", "scorpio", "sign", "zodiac", "purple square", "astrology", "scorpio" ], name = "scorpius", x = 54, y = 32 }
    , { category = Symbols, char = "♐", keywords = [ "sagittarius", "sagittarius", "sign", "zodiac", "purple square", "astrology" ], name = "sagittarius", x = 54, y = 33 }
    , { category = Symbols, char = "♑", keywords = [ "capricorn", "capricorn", "sign", "zodiac", "purple square", "astrology" ], name = "capricorn", x = 54, y = 34 }
    , { category = Symbols, char = "♒", keywords = [ "aquarius", "aquarius", "sign", "purple square", "zodiac", "astrology" ], name = "aquarius", x = 54, y = 35 }
    , { category = Symbols, char = "♓", keywords = [ "pisces", "pisces", "purple square", "sign", "zodiac", "astrology" ], name = "pisces", x = 54, y = 36 }
    , { category = Activities, char = "♟️", keywords = [ "chess pawn", "chess pawn", "expendable" ], name = "chess_pawn", x = 54, y = 37 }
    , { category = Activities, char = "♠️", keywords = [ "spades", "spade suit", "poker", "cards", "suits", "magic" ], name = "spades", x = 54, y = 38 }
    , { category = Activities, char = "♣️", keywords = [ "clubs", "club suit", "poker", "cards", "magic", "suits" ], name = "clubs", x = 54, y = 39 }
    , { category = Activities, char = "♥️", keywords = [ "hearts", "heart suit", "poker", "cards", "magic", "suits" ], name = "hearts", x = 54, y = 40 }
    , { category = Activities, char = "♦️", keywords = [ "diamonds", "diamond suit", "poker", "cards", "magic", "suits" ], name = "diamonds", x = 54, y = 41 }
    , { category = TravelAndPlaces, char = "♨️", keywords = [ "hotsprings", "hot springs", "bath", "warm", "relax" ], name = "hotsprings", x = 54, y = 42 }
    , { category = Symbols, char = "♻️", keywords = [ "recycle", "recycling symbol", "arrow", "environment", "garbage", "trash" ], name = "recycle", x = 54, y = 43 }
    , { category = Symbols, char = "♾️", keywords = [ "infinity", "infinity", "forever" ], name = "infinity", x = 54, y = 44 }
    , { category = Symbols, char = "♿", keywords = [ "wheelchair", "wheelchair symbol", "blue square", "disabled", "a11y", "accessibility" ], name = "wheelchair", x = 54, y = 45 }
    , { category = Objects, char = "⚒️", keywords = [ "hammer and pick", "hammer and pick", "tools", "build", "create" ], name = "hammer_and_pick", x = 54, y = 46 }
    , { category = TravelAndPlaces, char = "⚓", keywords = [ "anchor", "anchor", "ship", "ferry", "sea", "boat" ], name = "anchor", x = 54, y = 47 }
    , { category = Objects, char = "⚔️", keywords = [ "crossed swords", "crossed swords", "weapon" ], name = "crossed_swords", x = 54, y = 48 }
    , { category = Symbols, char = "⚕️", keywords = [ "medical symbol", "medical symbol" ], name = "medical_symbol", x = 54, y = 49 }
    , { category = Objects, char = "⚖️", keywords = [ "scales", "balance scale", "law", "fairness", "weight" ], name = "scales", x = 54, y = 50 }
    , { category = Objects, char = "⚗️", keywords = [ "alembic", "alembic", "distilling", "science", "experiment", "chemistry" ], name = "alembic", x = 54, y = 51 }
    , { category = Objects, char = "⚙️", keywords = [ "gear", "gear", "cog" ], name = "gear", x = 54, y = 52 }
    , { category = Symbols, char = "⚛️", keywords = [ "atom symbol", "atom symbol", "science", "physics", "chemistry" ], name = "atom_symbol", x = 54, y = 53 }
    , { category = Symbols, char = "⚜️", keywords = [ "fleur de lis", "fleur de lis", "decorative", "scout" ], name = "fleur_de_lis", x = 54, y = 54 }
    , { category = Symbols, char = "⚠️", keywords = [ "warning", "warning", "exclamation", "wip", "alert", "error", "problem", "issue" ], name = "warning", x = 54, y = 55 }
    , { category = TravelAndPlaces, char = "⚡", keywords = [ "zap", "high voltage", "thunder", "weather", "lightning bolt", "fast" ], name = "zap", x = 54, y = 56 }
    , { category = Symbols, char = "⚧️", keywords = [ "transgender symbol", "transgender symbol", "lgbtq" ], name = "transgender_symbol", x = 54, y = 57 }
    , { category = Symbols, char = "⚪", keywords = [ "white circle", "white circle", "shape", "round" ], name = "white_circle", x = 55, y = 0 }
    , { category = Symbols, char = "⚫", keywords = [ "black circle", "black circle", "shape", "button", "round" ], name = "black_circle", x = 55, y = 1 }
    , { category = Objects, char = "⚰️", keywords = [ "coffin", "coffin", "vampire", "dead", "die", "death", "rip", "graveyard", "cemetery", "casket", "funeral", "box" ], name = "coffin", x = 55, y = 2 }
    , { category = Objects, char = "⚱️", keywords = [ "funeral urn", "funeral urn", "dead", "die", "death", "rip", "ashes" ], name = "funeral_urn", x = 55, y = 3 }
    , { category = Activities, char = "⚽", keywords = [ "soccer", "soccer ball", "sports", "football" ], name = "soccer", x = 55, y = 4 }
    , { category = Activities, char = "⚾", keywords = [ "baseball", "baseball", "sports", "balls" ], name = "baseball", x = 55, y = 5 }
    , { category = TravelAndPlaces, char = "⛄", keywords = [ "snowman without snow", "snowman without snow", "winter", "season", "cold", "weather", "christmas", "xmas", "frozen", "without snow" ], name = "snowman_without_snow", x = 55, y = 6 }
    , { category = TravelAndPlaces, char = "⛅", keywords = [ "partly sunny", "sun behind cloud", "weather", "nature", "cloudy", "morning", "fall", "spring" ], name = "partly_sunny", x = 55, y = 7 }
    , { category = TravelAndPlaces, char = "⛈️", keywords = [ "thunder cloud and rain", "cloud with lightning and rain", "weather", "lightning" ], name = "thunder_cloud_and_rain", x = 55, y = 8 }
    , { category = Symbols, char = "⛎", keywords = [ "ophiuchus", "ophiuchus", "sign", "purple square", "constellation", "astrology" ], name = "ophiuchus", x = 55, y = 9 }
    , { category = Objects, char = "⛏️", keywords = [ "pick", "pick", "tools", "dig" ], name = "pick", x = 55, y = 10 }
    , { category = Objects, char = "⛑️", keywords = [ "helmet with white cross", "rescue worker s helmet", "construction", "build" ], name = "helmet_with_white_cross", x = 55, y = 11 }
    , { category = Objects, char = "⛓️", keywords = [ "chains", "chains", "lock", "arrest" ], name = "chains", x = 55, y = 12 }
    , { category = Symbols, char = "⛔", keywords = [ "no entry", "no entry", "limit", "security", "privacy", "bad", "denied", "stop", "circle" ], name = "no_entry", x = 55, y = 13 }
    , { category = TravelAndPlaces, char = "⛩️", keywords = [ "shinto shrine", "shinto shrine", "temple", "japan", "kyoto" ], name = "shinto_shrine", x = 55, y = 14 }
    , { category = TravelAndPlaces, char = "⛪", keywords = [ "church", "church", "building", "religion", "christ" ], name = "church", x = 55, y = 15 }
    , { category = TravelAndPlaces, char = "⛰️", keywords = [ "mountain", "mountain", "photo", "nature", "environment" ], name = "mountain", x = 55, y = 16 }
    , { category = TravelAndPlaces, char = "⛱️", keywords = [ "umbrella on ground", "umbrella on ground", "weather", "summer" ], name = "umbrella_on_ground", x = 55, y = 17 }
    , { category = TravelAndPlaces, char = "⛲", keywords = [ "fountain", "fountain", "photo", "summer", "water", "fresh" ], name = "fountain", x = 55, y = 18 }
    , { category = Activities, char = "⛳", keywords = [ "golf", "flag in hole", "sports", "business", "flag", "hole", "summer" ], name = "golf", x = 55, y = 19 }
    , { category = TravelAndPlaces, char = "⛴️", keywords = [ "ferry", "ferry", "boat", "ship", "yacht" ], name = "ferry", x = 55, y = 20 }
    , { category = TravelAndPlaces, char = "⛵", keywords = [ "boat", "sailboat", "ship", "summer", "transportation", "water", "sailing" ], name = "boat", x = 55, y = 21 }
    , { category = PeopleAndBody, char = "⛷️", keywords = [ "skier", "skier", "sports", "winter", "snow" ], name = "skier", x = 55, y = 22 }
    , { category = Activities, char = "⛸️", keywords = [ "ice skate", "ice skate", "sports" ], name = "ice_skate", x = 55, y = 23 }
    , { category = PeopleAndBody, char = "⛹️\u{200D}♀️", keywords = [ "woman bouncing ball", "woman bouncing ball", "sports", "human", "woman", "female" ], name = "woman-bouncing-ball", x = 55, y = 24 }
    , { category = PeopleAndBody, char = "⛹️\u{200D}♂️", keywords = [ "man bouncing ball", "man bouncing ball" ], name = "man-bouncing-ball", x = 55, y = 30 }
    , { category = PeopleAndBody, char = "⛹️", keywords = [ "person with ball", "person bouncing ball", "sports", "human" ], name = "person_with_ball", x = 55, y = 36 }
    , { category = TravelAndPlaces, char = "⛺", keywords = [ "tent", "tent", "photo", "camping", "outdoors" ], name = "tent", x = 55, y = 42 }
    , { category = TravelAndPlaces, char = "⛽", keywords = [ "fuelpump", "fuel pump", "gas station", "petroleum" ], name = "fuelpump", x = 55, y = 43 }
    , { category = Objects, char = "✂️", keywords = [ "scissors", "scissors", "stationery", "cut" ], name = "scissors", x = 55, y = 44 }
    , { category = Symbols, char = "✅", keywords = [ "white check mark", "check mark button", "green square", "ok", "agree", "vote", "election", "answer", "tick" ], name = "white_check_mark", x = 55, y = 45 }
    , { category = TravelAndPlaces, char = "✈️", keywords = [ "airplane", "airplane", "vehicle", "transportation", "flight", "fly" ], name = "airplane", x = 55, y = 46 }
    , { category = Objects, char = "✉️", keywords = [ "email", "envelope", "letter", "postal", "inbox", "communication" ], name = "email", x = 55, y = 47 }
    , { category = PeopleAndBody, char = "✊", keywords = [ "fist", "raised fist", "fingers", "hand", "grasp" ], name = "fist", x = 55, y = 48 }
    , { category = PeopleAndBody, char = "✋", keywords = [ "hand", "raised hand", "fingers", "stop", "highfive", "palm", "ban" ], name = "hand", x = 55, y = 54 }
    , { category = PeopleAndBody, char = "✌️", keywords = [ "v", "victory hand", "fingers", "ohyeah", "hand", "peace", "victory", "two" ], name = "v", x = 56, y = 2 }
    , { category = PeopleAndBody, char = "✍️", keywords = [ "writing hand", "writing hand", "lower left ballpoint pen", "stationery", "write", "compose" ], name = "writing_hand", x = 56, y = 8 }
    , { category = Objects, char = "✏️", keywords = [ "pencil2", "pencil", "stationery", "write", "paper", "writing", "school", "study" ], name = "pencil2", x = 56, y = 14 }
    , { category = Objects, char = "✒️", keywords = [ "black nib", "black nib", "pen", "stationery", "writing", "write" ], name = "black_nib", x = 56, y = 15 }
    , { category = Symbols, char = "✔️", keywords = [ "heavy check mark", "check mark", "ok", "nike", "answer", "yes", "tick" ], name = "heavy_check_mark", x = 56, y = 16 }
    , { category = Symbols, char = "✖️", keywords = [ "heavy multiplication x", "multiplication sign", "math", "calculation" ], name = "heavy_multiplication_x", x = 56, y = 17 }
    , { category = Symbols, char = "✝️", keywords = [ "latin cross", "latin cross", "christianity" ], name = "latin_cross", x = 56, y = 18 }
    , { category = Symbols, char = "✡️", keywords = [ "star of david", "star of david", "judaism" ], name = "star_of_david", x = 56, y = 19 }
    , { category = Activities, char = "✨", keywords = [ "sparkles", "sparkles", "stars", "shine", "shiny", "cool", "awesome", "good", "magic" ], name = "sparkles", x = 56, y = 20 }
    , { category = Symbols, char = "✳️", keywords = [ "eight spoked asterisk", "eight spoked asterisk", "star", "sparkle", "green square" ], name = "eight_spoked_asterisk", x = 56, y = 21 }
    , { category = Symbols, char = "✴️", keywords = [ "eight pointed black star", "eight pointed star", "orange square", "shape", "polygon" ], name = "eight_pointed_black_star", x = 56, y = 22 }
    , { category = TravelAndPlaces, char = "❄️", keywords = [ "snowflake", "snowflake", "winter", "season", "cold", "weather", "christmas", "xmas" ], name = "snowflake", x = 56, y = 23 }
    , { category = Symbols, char = "❇️", keywords = [ "sparkle", "sparkle", "stars", "green square", "awesome", "good", "fireworks" ], name = "sparkle", x = 56, y = 24 }
    , { category = Symbols, char = "❌", keywords = [ "x", "cross mark", "no", "delete", "remove", "cancel", "red" ], name = "x", x = 56, y = 25 }
    , { category = Symbols, char = "❎", keywords = [ "negative squared cross mark", "cross mark button", "x", "green square", "no", "deny" ], name = "negative_squared_cross_mark", x = 56, y = 26 }
    , { category = Symbols, char = "❓", keywords = [ "question", "question mark", "doubt", "confused" ], name = "question", x = 56, y = 27 }
    , { category = Symbols, char = "❔", keywords = [ "grey question", "white question mark", "doubts", "gray", "huh", "confused" ], name = "grey_question", x = 56, y = 28 }
    , { category = Symbols, char = "❕", keywords = [ "grey exclamation", "white exclamation mark", "surprise", "punctuation", "gray", "wow", "warning" ], name = "grey_exclamation", x = 56, y = 29 }
    , { category = Symbols, char = "❗", keywords = [ "exclamation", "exclamation mark", "heavy exclamation mark", "danger", "surprise", "punctuation", "wow", "warning" ], name = "exclamation", x = 56, y = 30 }
    , { category = SmileysAndEmotion, char = "❣️", keywords = [ "heavy heart exclamation mark ornament", "heart exclamation", "decoration", "love" ], name = "heavy_heart_exclamation_mark_ornament", x = 56, y = 31 }
    , { category = SmileysAndEmotion, char = "❤️", keywords = [ "heart", "red heart", "love", "like", "valentines" ], name = "heart", x = 56, y = 32 }
    , { category = Symbols, char = "➕", keywords = [ "heavy plus sign", "plus sign", "math", "calculation", "addition", "more", "increase" ], name = "heavy_plus_sign", x = 56, y = 33 }
    , { category = Symbols, char = "➖", keywords = [ "heavy minus sign", "minus sign", "math", "calculation", "subtract", "less" ], name = "heavy_minus_sign", x = 56, y = 34 }
    , { category = Symbols, char = "➗", keywords = [ "heavy division sign", "division sign", "divide", "math", "calculation" ], name = "heavy_division_sign", x = 56, y = 35 }
    , { category = Symbols, char = "➡️", keywords = [ "arrow right", "right arrow", "blue square", "next" ], name = "arrow_right", x = 56, y = 36 }
    , { category = Symbols, char = "➰", keywords = [ "curly loop", "curly loop", "scribble", "draw", "shape", "squiggle" ], name = "curly_loop", x = 56, y = 37 }
    , { category = Symbols, char = "➿", keywords = [ "loop", "double curly loop", "tape", "cassette" ], name = "loop", x = 56, y = 38 }
    , { category = Symbols, char = "⤴️", keywords = [ "arrow heading up", "right arrow curving up", "blue square", "direction", "top" ], name = "arrow_heading_up", x = 56, y = 39 }
    , { category = Symbols, char = "⤵️", keywords = [ "arrow heading down", "right arrow curving down", "blue square", "direction", "bottom" ], name = "arrow_heading_down", x = 56, y = 40 }
    , { category = Symbols, char = "⬅️", keywords = [ "arrow left", "left arrow", "blue square", "previous", "back" ], name = "arrow_left", x = 56, y = 41 }
    , { category = Symbols, char = "⬆️", keywords = [ "arrow up", "up arrow", "blue square", "continue", "top", "direction" ], name = "arrow_up", x = 56, y = 42 }
    , { category = Symbols, char = "⬇️", keywords = [ "arrow down", "down arrow", "blue square", "direction", "bottom" ], name = "arrow_down", x = 56, y = 43 }
    , { category = Symbols, char = "⬛", keywords = [ "black large square", "black large square", "shape", "icon", "button" ], name = "black_large_square", x = 56, y = 44 }
    , { category = Symbols, char = "⬜", keywords = [ "white large square", "white large square", "shape", "icon", "stone", "button" ], name = "white_large_square", x = 56, y = 45 }
    , { category = TravelAndPlaces, char = "⭐", keywords = [ "star", "star", "night", "yellow" ], name = "star", x = 56, y = 46 }
    , { category = Symbols, char = "⭕", keywords = [ "o", "hollow red circle", "circle", "round" ], name = "o", x = 56, y = 47 }
    , { category = Symbols, char = "〰️", keywords = [ "wavy dash", "wavy dash", "draw", "line", "moustache", "mustache", "squiggle", "scribble" ], name = "wavy_dash", x = 56, y = 48 }
    , { category = Symbols, char = "〽️", keywords = [ "part alternation mark", "part alternation mark", "graph", "presentation", "stats", "business", "economics", "bad" ], name = "part_alternation_mark", x = 56, y = 49 }
    , { category = Symbols, char = "㊗️", keywords = [ "congratulations", "japanese congratulations button", "chinese", "kanji", "japanese", "red circle" ], name = "congratulations", x = 56, y = 50 }
    , { category = Symbols, char = "㊙️", keywords = [ "secret", "japanese secret button", "privacy", "chinese", "sshh", "kanji", "red circle" ], name = "secret", x = 56, y = 51 }
    ]
