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

const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);

    user 
    ? callback(null, user)
    :  callback('Usuario no encontrado')
}

module.exports = {
    getUserById
}
