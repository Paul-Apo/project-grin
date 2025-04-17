express = require("express")

const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();
router.use(express.json())
router.get("/", async (req, res) => {
    const displayText = await prisma.markdowntext.findMany()
    res.json(displayText)
})

router.post("/", async (req, res) => {

    const newText = await prisma.markdowntext.create({data: req.body})
    res.json(newText)

})


module.exports = router