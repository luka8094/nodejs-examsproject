import {database} from "../connection/dbConnection.mjs"
import bcrypt from "bcrypt"

const dropMode = false

;(async () =>{ 

    const userSeeds = [
        {   
            firstname: "Bob",
            lastname: "Bobson",
            username: "admin",
            password: await bcrypt.hash("superpassword", 12),
            email: "admin@email.com"
        },
        {   
            firstname: "John",
            lastname: "Johnson",
            username: "user2",
            password: await bcrypt.hash("password2", 12),
            email: "user2@email.com"
        }
    ]

    //TODO: placeholder variable for currency seeds - to be filled out with appropriate data
    //Currency entity data body:
    /* template note:        

            name VARCHAR(70),
            abbreviation VARCHAR(4),
            profit DECIMAL(10,2),
            loss DECIMAL(10,2),
            current DECIMAL(10,2),
            trade DECIMAL(10,2),
            volality VARCHAR(4),
            date DATE,
            market_value DECIMAL(10,2)

            {name:"", abbreviation:"", profit: 0.00, loss: 0.00, current: 0.00, trade: 0.00, volatility: "-",}
    */
    const currencySeeds = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    console.log(userSeeds)

    if(dropMode){
        database.exec("DROP TABLE IF EXISTS user;")
        database.exec("DROP TABLE IF EXISTS products;")
    }

    //create users table
    database.exec(`
        CREATE TABLE IF NOT EXISTS users(
            userId INTEGER PRIMARY KEY AUTOINCREMENT,
            firstname VARCHAR(70),
            lastname VARCHAR(70),
            username VARCHAR(70),
            password VARCHAR(255),
            email VARCHAR(255)
        );

    `)
    
    //create memberships table
    database.exec(`
        CREATE TABLE IF NOT EXISTS membership(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type VARCHAR(70),
            userId INTEGER,
            FOREIGN KEY (userId) REFERENCES users(userId)
        );

    `)
    
    //Notes and reference from : https://stackoverflow.com/questions/34329852/how-to-insert-date-values-into-table
    //CREATE TABLE t(dob DATE);
    //Date values - INSERT INTO t(dob) VALUES(TO_DATE('17/12/2015', 'DD/MM/YYYY'));

    database.exec(`
         CREATE TABLE IF NOT EXISTS currencies(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(70),
            abbreviation VARCHAR(4),
            profit DECIMAL(10,2),
            loss DECIMAL(10,2),
            current DECIMAL(10,2),
            trade DECIMAL(10,2),
            volatility VARCHAR(4),
            date DATE,
            market_value DECIMAL(10,2)
        );
    `)
    
    //seed the users table
    if(!dropMode){
        database.run(`
        INSERT INTO users (firstname, lastname, username, password, email) VALUES
        (
            '${userSeeds[0]['firstname']}',
            '${userSeeds[0]['lastname']}',
            '${userSeeds[0]['username']}',
            '${userSeeds[0]['password']}',
            '${userSeeds[0]['email']}'
        )
        `)
        database.run(`
        INSERT INTO users (firstname, lastname, username, password, email) VALUES
        (
            '${userSeeds[1]['firstname']}',
            '${userSeeds[1]['lastname']}',
            '${userSeeds[1]['username']}',
            '${userSeeds[1]['password']}',
            '${userSeeds[1]['email']}'
        )
        `)
    }

    database.close()
})()