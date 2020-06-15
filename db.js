//db.js
const mongoClient = require('mongodb').MongoClient;
module.exports = () => {
    return mongoClient.connect('mongodb://localhost:27017/netflix', { useUnifiedTopology: true })
                      .then(conn => global.conn = conn.db('netflix'));
}