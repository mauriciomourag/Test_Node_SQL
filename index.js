const express = require('express')
const conn = require('./database/conn')

const app = express()
const usersRoutes = require('./routes/usersRoutes')
const authenticationRoutes = require('./routes/authRoutes')
const coursesRoutes = require('./routes/coursesRoutes')

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())

app.use('/users',usersRoutes)

app.use('/login', authenticationRoutes)

app.use('/cursos', coursesRoutes)

conn.sync({ force: false }) 
  .then(() => {
    console.log('sync OK')
    app.listen(3333,()=>{
      console.log('Server starting')
     })
  })
  .catch((error) => {
    console.error('Error sync:', error)
  })


