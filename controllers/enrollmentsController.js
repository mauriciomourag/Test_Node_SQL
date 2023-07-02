const Enrollments = require('../models/Enrollment');
const CoursesInfo = require('../models/Courses');

const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollments.findAll();
    res.json(enrollments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro do Servidor');
  }
};

const addEnrollment = async (req, res) => {
  try {
    const { userID, coursesInfoId } = req.body;

    const enrollment = await Enrollments.create({
      userID,
      coursesInfoId
    })

    const courseInfo = await CoursesInfo.findByPk(coursesInfoId);

    if (!courseInfo) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }
    if (courseInfo.remainingVacancies === 0) {
      return res.status(400).json({ message: 'Não há vagas disponíveis' });
    }

    courseInfo.remainingVacancies -= 1;
    await courseInfo.save();

    res.json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro do servidor');
  }
}

const deleteEnrollment = async (req, res) => {
  const enrollmentId = req.params.id;
  try {
    const enrollment = await Enrollments.findByPk(enrollmentId);
    if (enrollment) {
      const courseInfo = await CoursesInfo.findByPk(enrollment.coursesInfoId);
      if (courseInfo) {
        courseInfo.remainingVacancies += 1;
        await courseInfo.save();
      }
      await enrollment.destroy();
      res.json({ message: 'Matrícula excluída com sucesso' });
    } else {
      res.status(404).json({ message: 'Matrícula não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro do servidor');
  }
}

module.exports = { getEnrollments, addEnrollment, deleteEnrollment };
