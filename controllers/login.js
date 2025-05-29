express = require("express");
const hash = require('../routes/hash.js')
const router = express.Router();
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


router.post("/", async (req, res) => {
   const loginfo = await prisma.user.findMany();
   const {username: user_name_from_user, password: password_from_user} = req.body;
   let db_user_info = {}

   
   loginfo.forEach(({username, password}) => {
        db_user_info[`${username}`] =  password;
   })
   
   
   if (user_name_from_user in db_user_info ){
        if (hash.compare_password(password_from_user, db_user_info[`${user_name_from_user}`])){
            return res.send(`Welcome ${user_name_from_user}`)
        }else {
            return res.send("Invalid Credentials")
        }
   }else{
        return res.send("Invalid Credentials")
   }
});


module.exports = router;