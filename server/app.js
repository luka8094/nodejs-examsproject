import express from "express"

const app = express()
const PORT = porcess.env.PORT || 8080

app.listen(PORT, () => console.log("Server running on:", PORT))