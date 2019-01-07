// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver){ return driver.toLowerCase()})
}

function nameToAttributes(drivers) {
  const splitDrivers = []
  drivers.map(function (driver) {
    var split = driver.split(" ")
    let driverObject = {}
    driverObject["firstName"] = split[0]
    driverObject["lastName"] = split[1]
    splitDrivers.push(driverObject)
  })
  return splitDrivers
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
