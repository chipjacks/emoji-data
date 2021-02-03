const fetch = require("node-fetch");

async function fetch_json(url) {
  return fetch(url).then((url) => url.json());
}

const emojis = fetch_json(
  "https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json"
);
const categories = fetch_json(
  "https://raw.githubusercontent.com/iamcal/emoji-data/master/categories.json"
);
const keywords = fetch_json(
  "https://raw.githubusercontent.com/muan/emojilib/main/dist/emoji-en-US.json"
);

const results = [];

Promise.all([emojis, categories, keywords]).then(
  ([emojis, categories, keywords]) => {
    for (const emoji of emojis) {
      const unicode = String.fromCodePoint(
        ...emoji.unified.split("-").map((u) => parseInt(u, 16))
      );
      const words = keywords[unicode];
      if (words === undefined) {
        console.error("keywords error: ${unicode}");
        continue;
      }
      const category = Object.entries(categories).find(([k, v]) =>
        v.includes(emoji["short_name"])
      )[0];
      emoji["category"] = category;
      const all_keywords = [
        unicode,
        ...words,
        ...emoji["short_names"],
      ].map((w) => w.replaceAll(/[\-_]/gi, " "));
      emoji["keywords"] = [...new Set(all_keywords)];

      const result = {
        unified: emoji["unified"],
        name: emoji["short_name"],
        keywords: emoji["keywords"],
        category: emoji["category"],
        x: emoji["sheet_x"],
        y: emoji["sheet_y"],
      };

      results.push(result);
    }

    const elm = [
      "module Json exposing (list)",
      "list =",
      '    """',
      JSON.stringify(results, null, 0),
      '"""',
    ].join("\n");
    console.log(elm);
  }
);
