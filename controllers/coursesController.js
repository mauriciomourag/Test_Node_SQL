const CoursesInfo = require('../models/Courses')

const getcourse = async (req,res)=>{
    try {
        const coursesInfo = await CoursesInfo.findAll()
        res.json(coursesInfo);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro');
      }
}

const getCourseById = async (req, res) => {
  const courseId = req.params.id 
  try {
    const course = await CoursesInfo.findByPk(courseId)
    if (course) {
      res.json(course)
    } else {
      res.status(404).json({ message: 'Curso não encontrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro')
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
    res.status(500).send('Erro do Servidor')
  }  
}

const deleteCourse = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await CoursesInfo.findByPk(courseId);
    if (course) {
      await CoursesInfo.destroy({ where: { id: courseId } });
      res.json({ message: 'Curso excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Curso não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro do Servidor');
  }
}

module.exports = { getcourse, addcourse, getCourseById, deleteCourse };

