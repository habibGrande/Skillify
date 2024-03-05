// const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({
//     firstName: { type: String,
//         required: [true, "A User first name is required"],
//         minlength: [3, "A patient name must be at least 3 characters"],
//         maxlength: [8,"A patient name must be at least 8 characters only" ]
//     },
//     lastName: { type: String,
//         required: [true, "A User  last name is required"],
//         minlength: [1, "A User name must be at least 1 characters"],
//         maxlength: [40,"A User name must be at least 1-40 characters only" ]
//     },
//     fav: { type: String,
//         minlength: [1, "A User favorite must be at least 1 characters"],
//         maxlength: [40,"A User favorite must be at least 1-40 characters only" ]
//     },
//     course: { type: String,
//         minlength: [1, "A User course must be at least 1 characters"],
//         maxlength: [40,"A User course must be at least 1-40 characters only" ]
//     },  
//     email: {
//         type: String,
//         required: [true, 'An email address is required'],
//         unique: true, 
//         trim: true, 
//         lowercase: true, 
//         validate: {
//           validator: function (value) {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return emailRegex.test(value);
//           },
//           message: 'Invalid email address format',
//         },
//       },
//     password: {
//         type: String,
//         required: [true, 'A password is required'],
//         minlength: [8, 'Password must be at least 8 characters long'],
//         maxlength: [50, 'Password cannot exceed 50 characters'],
//       },
//       // birthDate: {
//       //   type: Date,
//       //   required: [true, 'A birth date is required'],
//       //   validate: {
//       //     validator: function (value) {
//       //       return value <= new Date();
//       //     },
//       //     message: 'Birth date must not be in the future',
//       //   },
//       // }
//     },
//         { timestamps: true });


// UserSchema.pre('save', async function (next) {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(this.password, salt);
//       this.password = hashedPassword;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   });


// module.exports.User = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters in length"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters in length"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [2, "Email must be at least 2 characters in length"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email!"
        },
        unique: true          
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters in length"]
    },
    role: {
        type: String,
        default: "user",
    },

}, { timestamps: true }
);

//Virtual field
//Store information from our request, but it will not be saved to the collection
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

//middleware 
UserSchema.pre("validate", function(next) {
    console.log('inside pre-validate');

    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Password must match confirm password!");
    }
    //run the next step in the proccess
    next();
    
});


UserSchema.pre("save", function(next){
    console.log("inside pre-save");

    //encrypt the password Before it is saved to the Database
    bcrypt.hash(this.password, 10)
    .then((hashedPassword) => {
        //update the password in this instance to use the hashed returned version
        this.password = hashedPassword;
        next();
    })
    .catch((err) => {
        console.log("error while hashing the password");
    })
})


const User = mongoose.model('user', UserSchema);

module.exports = User; 
