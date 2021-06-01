import fetchPublicJSON from "./fetchPublicJSON";

/**
 * Takes a path to a public directory and a list of JSON file names, then 
 * returns a Promise containing an object in which each key is a file name, 
 * and each value is that file's parsed JSON data.
 *
 * @param {string} path
 * @param {string[]} fileNames
 * @return {Promise<{}>}
 */
function fetchJSONIntoObject(path, fileNames) {
  return Promise.all(
    fileNames.map(name => fetchPublicJSON(`${path}/${name}.json`))
  ).then(values => {
    const data = {};
    values.forEach((value, i) => {
      data[fileNames[i]] = value;
    });
    return data;
  });
}

export function fetchAppetizers() {
  return fetchJSONIntoObject("data/appetizers", [
    "appetizers"
  ])
}

export function fetchSoupsAndSides() {
  return fetchJSONIntoObject("data/soups-and-sides", [
    "soupsAndSides",
    "salads"
  ]);
}

export function fetchSpecials() {
  return fetchJSONIntoObject("data/specials", [
    "chefsSpecialties",
    "friedRice",
    "loMein",
    "mooShi",
    "eggFooYoung"
  ]);
}

export function fetchEntrees() {
  return fetchJSONIntoObject("data/entrees", [
    "beef",
    "pork",
    "vegetable",
    "seafood",
    "chicken",
    "lunchList",
    "lunchOptions",
    "lunchSchedule",
  ]);
}

export function fetchSushi() {
  return fetchJSONIntoObject("data/sushi", [
    "appetizers",
    "nigiri",
    "sashimi",
    "maki"
  ]);
}

export default function fetchMenu() {
  return Promise.all([
    fetchAppetizers(),
    fetchSoupsAndSides(),
    fetchSpecials(),
    fetchEntrees(),
    fetchSushi()
  ]).then(values => {
    return {
      appetizers: values[0].appetizers,
      soupsAndSides: values[1],
      specials: values[2],
      entrees: values[3],
      sushi: values[4]
    };
  });
}
