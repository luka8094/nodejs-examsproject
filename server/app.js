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

import http from "http"
import { Server } from "socket.io"
const newServer = http.createServer(app)
const inputOutput = new Server(newServer)
//wrapping around inputOutput server - to include sessions (express)
const ioWrapper = wrapperMiddleware => (socket, next) => wrapperMiddleware(socket.request, {}, next)
inputOutput.use(ioWrapper(sessionMiddleware))

inputOutput.on("connection", (socket) => {
    console.log("%s %s","debug","testing")
})

import priviligesController from "./routers/privilegesController.mjs"
app.use(priviligesController)

app.listen(PORT, () => console.log("Server running on:", PORT))