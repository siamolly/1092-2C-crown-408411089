const db = require('../utils/database');
const crown2Controller_89 = require('../controllers/crown2Controller_89');

const Clothing_89 = class Clothing_89 {
    constructor(id, name, cat_id, price, remote_url, local_url) {
       this.id = id;
       this.name = name;
       this.cat_id = cat_id;
       this.price = price;
       this.remote_url = remote_url;
       this.local_url = local_url;
    }

 
    // READ
    static fetchAll(ansId) {
        return db.execute('SELECT * from clothing_89 WHERE cat_id= ?',[ansId]);
    }

}

module.exports = Clothing_89;