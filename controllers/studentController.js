import Student from "../models/studentModel.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      message: "Student created",
      student,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
