const sqlite3 = require('sqlite3').verbose();

let database = new sqlite3.Database("pedida.db", (err) => {
    if (err) {
        return console.log(err.message)
    }
});

let pedida = [
    "tua mãe tem todos os kit do diário catarinense",
    "tua mãe manicure da Laine Valgas",
    "tua mãe vendia pulseira pro De raiz",
    "tua mãe fazia cerol com garrafa de corega",
    "tua mae trocou espelho por ouro",
    "tua mãe assinou o tratado de tordesilhas como testemunha",
    "tua mãe foi garçonete na santa ceia",
    "tua mãe fundou forquilinhas",
    "tua mãe faz beatbox na batalha de rima do centro",
    "tua mãe furta palito de dente de hortelã no Bokas",
    "tua mãe bate cartinha no recreio do cema",
    "tua mãe salga bife na virilha",
    "tua mãe foi barrada na New Time",
    "tua mãe lista negra do Cantuaria",
    "tua mãe fã clube do Querito",
    "Tua mãe foi barrada no trintão",
    "tua mãe miss galheta",
    "tua mãe tira a geladeira da tomada quando sai de casa",
    "tua mãe chapeira do bokas",
    "tua mãe joga beach tennis em governador celso ramos",
    "Tua mãe mandou cartinha pro lata velha do Luciano Hulk",
    "tua mãe sósia do querito",
    "tua mãe solta pipa de juliet",
    "tua mãe joga bolinha de gude no asfalto",
    "tua mãe escama peixe no dente",
    "tua mãe vai no mercado público pra ver Samba aí",
    "tua mãe fez aula de canto com o Ed Soul",
]

for (let i = 0; i <= pedida.length; i++) {  
    database.run("INSERT INTO pedidas VALUES(?,?,?)", [null, null, pedida[i]], function (err) {
        if (err) {
            return console.log(err);
        }

        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
}

database.close((err) => {
    if (err) {
      return console.error(err.message);
    }
});
