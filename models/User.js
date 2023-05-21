const { Schema, model } = require('mongoose');
const thought = require("./Thought");

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unqiue: true,
      },
      thoughts: [thought],
      friends: [userSchema],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

const User = model('user', userSchema);

module.exports = User;
