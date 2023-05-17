const sqlite3 = require('sqlite3').verbose();

let database = new sqlite3.Database("pedida.db", (err) => {
    if (err) {
        return console.log(err.message)
    }
});

function get_pedida(){
    database.serialize(() => {
        database.each(`SELECT * FROM pedidas ORDER BY RANDOM() LIMIT 1`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row)
            return row.pedida_texto
        });
    });
}

let teste =  get_pedida()
console.log(teste)

database.close((err) => {
    if (err) {
      return console.error(err.message);
    }
});
