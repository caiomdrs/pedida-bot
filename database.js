const sqlite3 = require('sqlite3').verbose();

database = new sqlite3.Database("pedidas")

database.serialize(() => {
    database.run("CREATE TABLE pedidas('ID' INT(0) NOT NULL, 'pedida_nome' VARCHAR(100) DEFALULT '','pedida_texto' TEXT(999) DEFAULT '','pedida_texto' TEXT(999) DEFAULT '',PRIMARY KEY (`ID`));")
});


// CREATE TABLE `pedidas` (
// 	`ID` INT(0) NOT NULL AUTO_INCREMENT,
// 	`pedida_nome` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '',
// 	`pedida_texto` TEXT(999) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '',
// 	PRIMARY KEY (`ID`)
// );