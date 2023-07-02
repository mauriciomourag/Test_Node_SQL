const express = require('express')
const conn = require('./database/conn')
const app = express()
const usersRoutes = require('./routes/usersRoutes')
const authRoutes = require('./routes/authRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const enrollementsRoutes = require('./routes/enrollmentRoutes')

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())

//Rotas
app.use('/user',usersRoutes)
app.use('/login', authRoutes)
app.use('/cursos', coursesRoutes)
app.use('/enrollments', enrollementsRoutes)

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


