const fetch = require("node-fetch");

async function fetch_json(url) {
  return fetch(url).then((url) => url.json());
}

const results = [];

Promise.all([
  fetch_json(
    "https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json"
  ),
  fetch_json(
    "https://raw.githubusercontent.com/iamcal/emoji-data/master/categories.json"
  ),
  fetch_json(
    "https://raw.githubusercontent.com/muan/emojilib/main/dist/emoji-en-US.json"
  ),
]).then(([emojis, categories, keywords_table]) => {
  for (const emoji of emojis) {
    const unicode = String.fromCodePoint(
      ...emoji.unified.split("-").map((u) => parseInt(u, 16))
    );
    const category = Object.entries(categories).find(([k, v]) =>
      v.includes(emoji["short_name"])
    )[0];

    const keywords = [
      ...new Set(
        [...(keywords_table[unicode] || []), ...emoji["short_names"]].map((w) =>
          w.replaceAll(/[\-_]/gi, " ")
        )
      ),
    ];

    const result = {
      name: emoji["short_name"],
      char: unicode,
      category,
      keywords,
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
});
