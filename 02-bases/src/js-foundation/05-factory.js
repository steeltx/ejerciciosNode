// const { getUuid } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUuid } = require('../plugins');

// funcion para crear objeto persona sin contar con dependencias 

const buildMakePerson = ({getUuid, getAge}) => {
    return ( { name, birthdate } ) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

// const obj = { name: 'John', birthdate: '1995-01-01'};

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
    buildMakePerson
}