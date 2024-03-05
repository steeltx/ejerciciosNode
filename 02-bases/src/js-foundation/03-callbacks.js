
const users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Jane'
    }
]

function getUserById(id, callback){
    const user = users.find(function(user){
        return user.id === id
    });
    if(!user){
        return callback('Usuario no encontrado');
    }
    return callback(null, user);
}

// exportar para usar fuera del archivo
module.exports = {
    getUserById
}
