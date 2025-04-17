express = require("express")
const {PrismaClient} = require("@prisma/client")
const router = express.Router()
const prisma = new PrismaClient();
router.use(express.json())

router.get("/", async (req, res) => {
    const displayTask = await prisma.tasks.findMany()
    res.json(displayTask)
})

router.post("/", async (req, res)=> {
    const newTask = await prisma.tasks.create({data: req.body})
    res.json(newTask)
})


module.exports = router