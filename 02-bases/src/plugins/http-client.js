const axios = require('axios');

// con fetch
// const httpClientPlugin = {
//     get: async (url) => {
//         const resp = await fetch(url);
//         return await resp.json();
//     },
// };

// con axios
const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
};

module.exports = {
    httpClientPlugin
};