const UserController = require('../controller/user.controller');
module.exports = function(app){
    app.post('/api/user',UserController.createUser );
    app.get('/api/user/id', UserController.getUser);
    app.delete('/api/delete/:id', UserController.deleteUser);
    app.patch('/api/user/:id', UserController.updateUser);
}