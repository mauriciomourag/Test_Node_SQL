const CoursesInfo = require('../models/Courses')

const getcourse = async (req,res)=>{
    try {
        const coursesInfo = await CoursesInfo.findAll()
        res.json(coursesInfo);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}

const addcourse = async (req,res)=>{
  try {
    const { description, maxParticipants, remainingVacancies } = req.body
    const course = await CoursesInfo.create({
      description,
      maxParticipants,
      remainingVacancies
    });
    res.json(course)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }  
}


module.exports={getcourse, addcourse}