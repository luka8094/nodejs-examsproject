import database from "../connection/dbConnection.mjs"
import bcrypt from "bcrypt"

const dropMode = false

;(async () =>{ 
    
    const seeds = [
        {
            name: "admin",
            email: "admin@email.com",
            password: await bcrypt.hash("superpassword", 12)
        },
        {
            name: "user2",
            email: "user2@email.com",
            password: await bcrypt.hash("password2", 12)
        }
    ]

    console.log(seeds)

    if(dropMode){
        database.exec("DROP TABLE IF EXISTS user;")
        database.exec("DROP TABLE IF EXISTS products;")
    }

    //create users table
    database.exec(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(70),
            email VARCHAR(255),
            password VARCHAR(255)
        );
    `)

    database.exec(`
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(200),
            price INTEGER
        );
    `)
    
    //seed the users table
    if(!dropMode){
        database.run(`
        INSERT INTO users (name, email, password) VALUES
        (
            '${seeds[0]['name']}',
            '${seeds[0]['email']}',
            '${seeds[0]['password']}'
        )
        `)
        database.run(`
        INSERT INTO users (name, email, password) VALUES
        (
            '${seeds[1]['name']}',
            '${seeds[1]['email']}',
            '${seeds[1]['password']}'
        )
        `)
    }

    database.close()
})()