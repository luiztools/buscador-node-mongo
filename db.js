//db.js
const mongoClient = require('mongodb').MongoClient;
module.exports = () => {
    return mongoClient.connect('mongodb://localhost:27017/netflix')
                      .then(conn => global.conn = conn.db('netflix'));
}
