const Users = require('../models/User')

const getUsers = async(req,res)=>{
    try {
        const users = await Users.findAll()
        res.json(users)
      } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
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
    res.status(500).send('Server Error')
  }
}


module.exports={getUsers,addUser}