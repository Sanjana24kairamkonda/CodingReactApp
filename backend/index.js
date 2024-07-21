const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt=require('bcryptjs')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow CORS

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/loginData';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple User model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', UserSchema);

// API Route
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  console.log(username,password)
  const newUser = new User({ username, password });
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: 'Failed to save user' }));
});
app.post('/login', async (req, res) => {
  const {username,password}=req.body
  User.findOne({username:username})
  .then(user=>{
    if(user){
      if(user.password===password){
      res.json("success")
    }else{
      res.json("Password is incorrect")
    }
  }else{
    res.json("No such record existing")
  }
  })
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
