const bcrpt = require('bcrypt')

const hash_salt = 10


function hash_password (password) {
    const salt = bcrpt.genSaltSync(hash_salt)
    const hashed_password = bcrpt.hashSync(password, salt)
    return hashed_password
}


function compare_password(plain, password){
    return bcrpt.compareSync(plain, password)
}
module.exports = {hash_password, compare_password};