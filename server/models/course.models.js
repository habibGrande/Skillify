const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    title: { type: String,
        required: [true, "A Course title is required"],
        minlength: [1, "A Course title must be at least 1 characters"],
        maxlength: [40,"A Course title must be at least 1-40 characters only" ]
    },
   
    desc: { type: String,
        minlength: [1, "A Course Description must be at least 1 characters"],
        maxlength: [40,"A Course Description must be at least 1-40 characters only" ]
    },
    date: {
        type: Date,
        required: [true, 'Course date is required'],
        validate: {
          validator: function (value) {
            return value <= new Date();
          },
          message: 'Course date must not be in the future',
        },
      }},
        { timestamps: true });




module.exports.Course = mongoose.model('Course', CourseSchema);