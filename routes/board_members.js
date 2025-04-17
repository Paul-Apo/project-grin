express = require("express")
const {PrismaClient} = require("@prisma/client")

const router = express.Router()
const prisma = new PrismaClient()
router.use(express.json())

router.get("/", async  (req, res) => {
    const board_mems = await prisma.boardMem.findMany();
    res.json(board_mems)
})

router.post ("/", async (req, res) => {
    const newMem = await prisma.boardMem.create({data: req.body})
    res.send(newMem)
})



module.exports = router
