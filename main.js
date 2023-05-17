const { Client } = require('whatsapp-web.js');
const sqlite3 = require('sqlite3').verbose();

const client = new Client();

var qrcode = require('qrcode-terminal');

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qrcode.generate(qr, small= true));
});

client.on('ready', () => {
    console.log('Client is ready!');
});

let database = new sqlite3.Database("pedida.db", (err) => {
    if (err) {
        return console.log(err.message)
    }

    console.log("Connected with the DB.")
});

client.on('message', msg => {
    sender_number = msg.author ? msg.author : msg.from
    sender_number = sender_number.split("@")[0]
    console.log(`Message received: ${msg.timestamp}\nSender: ${sender_number}\nText: ${msg.body}`)

    if (msg.body == '!pedida') {
        let pedida

        database.each(`SELECT * FROM pedidas ORDER BY RANDOM() LIMIT 1`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row)
            pedida = String(row.pedida_texto)
            console.log(pedida)
            msg.reply(pedida);
        });

    }
});

client.initialize();
