const getAgePlugin = require('get-age');

/* 
    Se usa el patron adaptador para adaptar una funcionalidad
    de terceros, en caso de que cambie, solo se hace el ajuste aqui
*/
const getAge = (birthdate) => {
    if(!birthdate) return new Error('birthdate is required');
    return getAgePlugin(birthdate);
}

module.exports = {
    getAge
}