const UserController = require('../controller/user.controller');

module.exports = function(app){
    app.get('/api/users', UserController.findAllUsers);
    app.post('/api/user',UserController.createNewUser );
    app.post("/api/users/login", UserController.LoginUser);
    app.get("/api/users/logout", UserController.LogoutUser);
    app.get("/api/users/loggeduser", UserController.getUserByEmail);
    app.get('/api/user/id', UserController.findOneSingleUser);
    app.delete('/api/delete/:id', UserController.deleteAnExistingUser);
    app.patch('/api/user/:id', UserController.updateExistingUser);
}