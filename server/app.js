import express from "express"
const app = express()
const PORT = process.env.PORT || 3000

import path from "path"
app.use(express.static(path.resolve("../client/public")))

app.listen(PORT, () => console.log("Server running on:", PORT))