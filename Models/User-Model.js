import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [10, "Username cannot exceed 10 characters"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  age: {
    type: Number,
    min: [18, "Age must be at least 18"],
    max: [25, "Age cannot exceed 25"]
  }
});

export default model('user', userSchema);
