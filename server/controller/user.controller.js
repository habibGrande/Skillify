const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

module.exports.findAllUsers = (req, res) => {
    User.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
        .then((allUsers) => {
            return res.json({ Users: allUsers });
        })
        .catch((err) => {
            return res.json(err);
        });
};

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            return res.json({ User: oneSingleUser });
        })
        .catch((err) => {
            return res.json(err);
        });
};

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            return res.json({
                message: "Successfully Registered!",
                newUser: newlyCreatedUser
            });
        })
        .catch(err => res.status(400).json(err));
};

module.exports.LoginUser = (req, res) => {
    User.findOne({ email: req.body.email })
        .then((userRecord) => {
            if (userRecord === null) {
                return res.status(400).json({ message: "Invalid login attempt!" });
            } else {
                bcrypt.compare(req.body.password, userRecord.password)
                    .then((isPasswordValid) => {
                        if (isPasswordValid) {
                            console.log('password is valid!');
                            console.log(userRecord);
                            console.log(process.env.JWT_SECRET);
                            const token = jwt.sign({
                                user_id: userRecord._id,
                                email: userRecord.email,
                                name: userRecord.firstName
                            }, process.env.JWT_SECRET || 'defaultSecret'); // Provide a default value for the secret key
                            
                            res.cookie("usertoken", token, {
                                httpOnly: true,
                                expires: new Date(Date.now() + 900000)
                            }).json({
                                message: "Successfully logged in!",
                                userLoggedIn: userRecord.firstName
                            });
                        } else {
                            return res.status(400).json({ message: "Invalid login attempt!" });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        return res.status(400).json({ message: "Invalid login attempt!" });
                    });
            }
        })
        .catch((err) => {
            console.log("error with find one!");
            return res.status(400).json({ message: "Invalid login attempt!", err });
        });
};


module.exports.LogoutUser = (req, res) => {
    console.log("logging out!");
    res.clearCookie("usertoken");
    return res.json({
        message: "You have successfully logged out!"
    });
};

module.exports.getUserByEmail = (req, res) => {
    User.findOne({ email: req.query.email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            } else {
                return res.json({ user });
            }
        })
        .catch((err) => {
            console.log("Error while getting user by email", err);
            return res.status(500).json({ message: "Internal server error" });
        });
};

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            return res.json({ User: updatedUser });
        })
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            return res.json({ result: result });
        })
        .catch((err) => {
            return res.json(err);
        });
};
