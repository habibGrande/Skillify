const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: { type: String,
        required: [true, "A User first name is required"],
        minlength: [1, "A patient name must be at least 1 characters"],
        maxlength: [40,"A patient name must be at least 1-40 characters only" ]
    },
    lastName: { type: String,
        required: [true, "A User name is required"],
        minlength: [1, "A User name must be at least 1 characters"],
        maxlength: [40,"A User name must be at least 1-40 characters only" ]
    },
    fav: { type: String,
        minlength: [1, "A User favorite must be at least 1 characters"],
        maxlength: [40,"A User favorite must be at least 1-40 characters only" ]
    },
    course: { type: String,
        minlength: [1, "A User course must be at least 1 characters"],
        maxlength: [40,"A User course must be at least 1-40 characters only" ]
    },
    email: {
        type: String,
        required: [true, 'An email address is required'],
        unique: true, 
        trim: true, 
        lowercase: true, 
        validate: {
          validator: function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
          },
          message: 'Invalid email address format',
        },
      },
    password: {
        type: String,
        required: [true, 'A password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [50, 'Password cannot exceed 50 characters'],
      },
      birthDate: {
        type: Date,
        required: [true, 'A birth date is required'],
        validate: {
          validator: function (value) {
            return value <= new Date();
          },
          message: 'Birth date must not be in the future',
        },
      }},
        { timestamps: true });


UserSchema.pre('save', async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });


module.exports.User = mongoose.model('User', UserSchema);