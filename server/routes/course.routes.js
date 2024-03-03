const CourserController = require('../controller/course.controller');
module.exports = function(app){
    app.post('/api/user',CourserController.createCourse );
    app.get('/api/user/id', CourserController.getCourse);
    app.delete('/api/delete/:id', CourserController.deleteCourse);
    app.patch('/api/user/:id', CourserController.updateCourse);
}