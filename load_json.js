const fetch = require("node-fetch");

async function fetch_json(url) {
  return fetch(url).then((url) => url.json());
}

function removeDashes(str) {
  return str.replaceAll(/[\-_]/gi, " ");
}

const results = [];

Promise.all([
  fetch_json(
    "https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json"
  ),
  fetch_json(
    "https://raw.githubusercontent.com/muan/emojilib/main/dist/emoji-en-US.json"
  ),
]).then(([emojis, keywords_table]) => {
  for (const emoji of emojis) {
    const unicode = String.fromCodePoint(
      ...emoji.unified.split("-").map((u) => parseInt(u, 16))
    );
    const keywords = [
      ...new Set([
        ...(keywords_table[unicode] || []).map(removeDashes),
        ...emoji["short_names"].map(removeDashes),
        ...(emoji["text"] ? [emoji["text"]] : []),
        //...(emoji["texts"] ? emoji["texts"] : []),
      ]),
    ];

    const result = {
      name: emoji["short_name"],
      char: unicode,
      category: emoji["category"],
      keywords,
      x: emoji["sheet_x"],
      y: emoji["sheet_y"],
    };

    results.push(result);
  }

  const elm = [
    "module Json exposing (list)",
    "",
    "",
    "list =",
    '    """',
    JSON.stringify(results, null, 2),
    '"""',
  ].join("\n");
  console.log(elm);
});
