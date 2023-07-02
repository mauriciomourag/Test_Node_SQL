const bcrypt = require('bcrypt')

const Users = require('../models/User')

class AuthController {
    static async login(req, res) {
        try{
            const {username,password} = req.body
            const user = await Users.findOne({where:{username}})
            if(!user){
                return res.status(401).json({message:'Usuário inválido'})
            }
            const compareResult = await bcrypt.compare(password, user.password)
            if(!compareResult)
            {
              return res.status(401).json({message:'Senha Inválida'})
            }
            res.status(200).json({message: 'Logado'})
        }
        catch(error){
          console.error(error)
          res.status(500).json({message:'Server Error'})
        }
    }    
  }
  
  module.exports = AuthController