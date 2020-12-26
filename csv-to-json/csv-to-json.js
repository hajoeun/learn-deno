const filenames = Deno.args;

for (const filename of filenames) {
  const csvText = await Deno.readTextFile(filename);
  const outputName = filename.replace(".csv", ".json");
  const jsonText = converter(csvText);

  await Deno.writeTextFile(outputName, jsonText);
}

function converter(csvText) {
  const [columns, ...rows] = csvText.trim(/\s/g).split("\n");
  const keys = columns.split(",");
  const valuesArray = rows.map((row) => row.split(","));
  const jsonText = valuesArray.map((values) => (
    values.reduce((acc, v, i) => {
      acc[keys[i]] = v;
      return acc;
    }, {})
  ));

  return JSON.stringify(jsonText, null, "  ");
}
