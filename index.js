//this function takes an array of drivers,
//and returns an array of the drivers names in lowercase.
function lowerCaseDrivers(drivers) {
  return drivers.map( x => x.toLowerCase());
}

function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map( driver => `${driver.name} is from ${driver.hometown}`);
}
