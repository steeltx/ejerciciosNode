const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const buildPerson = ( { name, birthdate } ) => {
    
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate)
    }
}

const obj = { name: 'John', birthdate: '1995-01-01'};

const john = buildPerson(obj);

console.log(john);