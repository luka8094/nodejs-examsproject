import "dotenv/config"
import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

import path from "path"
app.use(express.static(path.resolve("../client/public")))

import session from "express-session"
const sessionMiddleware = session({
    secret: process.env.SECRET_ACCESS_TOKEN,
    resave: false,
    saveUninitialized: true
})
app.use(sessionMiddleware)

app.listen(PORT, () => console.log("Server running on:", PORT))