const bcrypt = require('bcrypt')
const User = require('../app/models/user')

module.exports = {
    setUserPassword: async (user, passwordConfirmation) => {
        let cadastredUser = await User.findOne({login: user.login})
        if(cadastredUser == null){
            if(user.password == passwordConfirmation && user.password){
                let crypt_pass = bcrypt.hashSync(user.password, 7)
                user.password = crypt_pass
            }else{
                return {
                    success: false,
                    error: "invalidPasswordConfirmation"
                }
            }
        }else{
            return {
                success: false,
                error: "loginExists"
            }
        }
        return {
            success: true,
            error: null
        }
    }
}