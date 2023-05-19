const { Schema, model } = require('mongoose');
const thoughtSchema = require("./Thought");

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
      thoughts: [thoughtSchema],
      friendss: [userSchema],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

const User = model('user', userSchema);

module.exports = User;
