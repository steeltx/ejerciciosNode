// console.log(process.env);

const { SHELL,VTE_VERSION } = process.env;

console.table({SHELL, VTE_VERSION});

const characters = ['Flash','Superman','Batman'];

// ignorar los 2 primeros valores
const [,,batman] = characters;

console.log(batman)