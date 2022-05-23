/* general express server initialization variables */
import "dotenv/config";
import express from "express";
import path from "path";
import session from "express-session";
import priviligesRouter from "./routers/privilegesRouter.mjs";
import currenciesRouter from "./routers/currenciesRouter.mjs";

const app = express();
const sessionMiddleware = session({
    secret: process.env.SECRET_ACCESS_TOKEN,
    resave: false,
    saveUninitialized: true
});

app.use(express.urlencoded({extended: true}));
app.use(sessionMiddleware);
app.use(express.static(path.resolve("../client/hushtrade/public")));
app.use(priviligesRouter);
app.use(currenciesRouter);

/* sockets.io related variables */
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server);
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

io.on("connection", (socket) => {
    //console.log(socket);
    socket.on("messageSent", ({data}) => {
        console.log(data);
        const newData = data;
        socket.request.session.check = "returning";
        const checkValue = socket.request.session.check;
        io.emit("showMessage", {newData, checkValue});
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server running on:", PORT));