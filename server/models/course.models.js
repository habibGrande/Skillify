const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Course title is required"],
    minlength: [1, "A Course title must be at least 1 character"],
    maxlength: [40, "A Course title must be no more than 40 characters"]
  },
  desc: {
    type: String,
    minlength: [1, "A Course Description must be at least 1 character"],
    maxlength: [500, "A Course Description must be no more than 500 characters"]
  },
  image: {
    type: String,
    required: [true, "An image URL is required"]
  },
  price: {
    type: Number,
    required: [true, "Course price is required"],
    min: [0, "Course price cannot be negative"]
  },
  notes: {
    type: String,
    required: [true, "Course notes are required"],
    minlength: [1, "Course notes must be at least 1 character"]
  }
}, { timestamps: true });

module.exports.Course = mongoose.model('Course', CourseSchema);
