const Users = require('../models/User')

const getUsers = async(req,res)=>{
    try {
        const users = await Users.findAll()
        res.json(users)
      } catch (error) {
        console.error(error)
        res.status(500).send('Erro')
      }
}

const getUserById = async (req, res) => {
  const userId = req.params.id 
  try {
    const user = await Users.findByPk(userId)
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro')
  }
}

const addUser = async(req,res)=>{
  try {
    const { username, password, name, email, age, phoneNumber, country } = req.body
    const user = await Users.create({
      username,
      password,
      name,
      email,
      age,
      phoneNumber,
      country
    });
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro')
  }
}

module.exports={getUsers,addUser, getUserById}