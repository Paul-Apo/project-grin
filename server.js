const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send(200)
}) 

app.listen(3000, () => console.log(`running from port 3000`))