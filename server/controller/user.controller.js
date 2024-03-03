const { User } = require('../models/user.models');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createUser = (request, response) => {
    const { firstName ,lastName, email, password,confPass ,birthDate } = request.body;
    if(confPass != password){
        return response.status(400).json({ error: "Confirm password must matchs the password" });
    }
    User.create({
        firstName,
        lastName,
        email,
        password,
        birthDate
    })
    .then(user => response.json(user))
    .catch(err => response.status(400).json(err.errors));
}

module.exports.getUser = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(user => res.json(user))
    .catch(err => res.json(err));
}


module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(400).json(err.errors));
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}