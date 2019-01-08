// Code your solution in this file.
drivers = [
{ firstName: 'Bobby', lastName: 'Smith' },
{ firstName: 'Sammy', lastName: 'Watkins' },
{ firstName: 'Sally', lastName: 'Jenkins' },
{ firstName: 'Annette', lastName: 'Sawyer' },
{ firstName: 'Sarah', lastName: 'Hucklebee' },
{ firstName: 'bobby', lastName: 'ridge' }
]

function lowerCaseDrivers(drivers){
  return drivers.map(driver => {
    return driver.toLowerCase()
  });
}


function nameToAttributes(drivers) {
  return drivers.map(driver => {
    let name = driver.split(" ");
    return Object.assign({}, {firstName: name[0]}, {lastName: name[1]});
  })
}

function attributesToPhrase(drivers){
  return drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  })
}
