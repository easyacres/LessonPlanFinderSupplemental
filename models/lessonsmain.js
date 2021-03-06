// File Name Must Match Document Property of Index.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonsmainSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const LessonMain = mongoose.model("LessonsMain", lessonsmainSchema);

module.exports = LessonMain;
