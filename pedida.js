const sqlite3 = require('sqlite3').verbose();

let database = new sqlite3.Database("pedida.db", (err) => {
    if (err) {
        return console.log(err.message)
    }
});

database.close((err) => {
    if (err) {
      return console.error(err.message);
    }
});

