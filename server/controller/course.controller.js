const { Course } = require('../models/course.models');


module.exports.addCourse = (request, response) => {
    const { title, desc, image, price, notes } = request.body;
    
    Course.create({
        title,
        desc,
        image,
        price,
        notes
    })
    .then(course => response.status(201).json({
        message: 'Course added successfully',
        course: course
    }))
    .catch(err => response.status(400).json({
        message: 'Error adding course',
        errors: err.errors
    }));
}

module.exports.getAllCourses = (req, res) => {
    Course.find({})
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json(err));
}


module.exports.getCourse = (request, response) => {
    Course.findOne({_id: request.params.id})
        .then(course => response.json(course))
        .catch(err => response.json(err))
}