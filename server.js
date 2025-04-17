const express = require("express")
const {PrismaClient} = require("@prisma/client")
const app = express()
const prisma= new PrismaClient()
const userRouter = require("./routes/boards")
const newBoardMem = require("./routes/board_members")
const newTask = require("./routes/tasks")
const newMarkDown = require("./routes/markDownText")
app.use("/boardMem", newBoardMem)
app.use("/tasks", newTask)
app.use("/markdowntext", newMarkDown)
app.use(express.json())
app.use("/tulu", userRouter)
app.get("/", async (req, res) => {
    const displayUser = await prisma.user.findMany();
    res.json(displayUser)
})

app.post("/", async (req, res) => {
        const newUser = await prisma.user.create({data : req.body})
        res.json(newUser)
})

app.listen(3000, () => console.log(`running from port 3000`))

module.exports = app