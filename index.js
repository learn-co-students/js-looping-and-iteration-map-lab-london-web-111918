// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerCased = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return lowerCased;
};


function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    let name = driver.split(" ");
    return Object.assign({}, {firstName: name[0]}, {lastName: name[1]});
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
