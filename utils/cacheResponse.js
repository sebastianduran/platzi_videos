const { config } = require('../config');

function cacheResponse(res, seconds){
    if(process.env.NODE_ENV.trim() === 'production'){
        console.log("holi");
        res.set("Cache-Control",`public, max-age=${seconds}`);
    }
}

module.exports = cacheResponse;