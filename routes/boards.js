express = require("express")
const {PrismaClient} = require("@prisma/client")
router = express.Router()

const prisma = new PrismaClient();
router.get("/", async (req, res)=> {
    const getBoard = await prisma.board.findMany();
    res.json(getBoard)
}
)

router.post("/", async (req, res) => {
    const newBoard = await prisma.board.create({data: req.body})
    res.json(newBoard)
})



module.exports = router;