const { Schema, model } = require('mongoose');
const reaction = require("./Reaction");

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reaction],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

const User = model('user', userSchema);

module.exports = User;
