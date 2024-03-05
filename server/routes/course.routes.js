const CourserController = require('../controller/course.controller');
module.exports = function(app){
    app.post('/api/add', CourserController.addCourse);
    app.get('/api/courses', CourserController.getAllCourses);
    app.get('/api/courses/:id', CourserController.getCourse);
}