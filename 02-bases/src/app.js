const { getAge, getUuid } = require('./plugins');
// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
//const {getUserById} = require('./js-foundation/03-callbacks');
//const {getUserById} = require('./js-foundation/04-arrow');
const { buildMakePerson } = require('./js-foundation/05-factory');

// pasar las dependencias
const makePerson = buildMakePerson({getUuid, getAge});

const obj = { name: 'John', birthdate: '1995-01-01'};

// llamar la funcion
const john = makePerson(obj);

console.log(john);

// console.log(emailTemplate);

// getUserById(1, (error, user) => {
//     if(error ){
//         throw new Error(error);
//     }
//     console.log(user);
// });