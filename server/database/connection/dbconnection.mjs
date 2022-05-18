import {open} from "sqlite"
import sqlite3 from "sqlite3"

export const database = await open({
            filename: './database/schema/htrade.db',
            driver: sqlite3.Database
        })
