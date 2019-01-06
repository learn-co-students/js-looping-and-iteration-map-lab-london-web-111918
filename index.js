// Code your solution in this file.
const lowerCaseDrivers = (drivers) => {
    return drivers.map(name => {
        return name.toLowerCase();
    });
}

const nameToAttributes = (drivers) => {
    return drivers.map(name => {
        return {firstName: name.split(' ')[0], lastName: name.split(' ')[1]}
    });
}



const attributesToPhrase = (drivers) => {
    return drivers.map((driver) => {
        return `${driver.name} is from ${driver.hometown}`;
    });
}

