// Code your solution in this file.
function lowerCaseDrivers(collection) {
  const newArr = collection.map(function (name) {
    return name.toLowerCase();
  }).slice();
  return newArr;
}

function nameToAttributes(collection) {
  const newArr = [];
  collection.map(function (name) {
    let firstLast = name.split(" ");
    newArr.push({firstName: firstLast[0], lastName: firstLast[1]});
  });
  return newArr;
}

function attributesToPhrase(collection) {
  const newArr = [];
  collection.map(function (person) {
    newArr.push(`${person.name} is from ${person.hometown}`);
  });
  return newArr;
}
