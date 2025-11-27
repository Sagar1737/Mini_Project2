import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  gpa: { type: Number, min: 0, max: 4 },
  age: { type: Number, min: 16 }
});

export default mongoose.model("Student", studentSchema);
