const { Course } = require('../models/course.models');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createCourse = (request, response) => {
    const { title ,desc, date } = request.body;
    
    Course.create({
        title,
        lastName,
        desc,
        date
    })
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err.errors));
}

module.exports.getCourse = (req, res) => {
    Course.findOne({_id: req.params.id})
    .then(course => res.json(course))
    .catch(err => res.json(err));
}


module.exports.updateCourse = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedCourse => response.json(updatedCourse))
        .catch(err => response.status(400).json(err.errors));
}

module.exports.deleteCourse = (request, response) => {
    Course.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}