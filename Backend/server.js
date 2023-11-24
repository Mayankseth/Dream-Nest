const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');


const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/RealState', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());



const User = require('./models/userModels');
const Property = require('./models/listHouseModels');
const secretKey = 'nkjdfwsnwckdmkw';

function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
}


function verifyTokenAndClear(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return next();
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return next();
    }
    res.set('Authorization', '');
    next();
  });
}


// register user and generate JWT token
// User registration with password hashing
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send(err);
    }

    const newUser = new User({
      name,
      email,
      password: hash
    });

    newUser.save()
      .then((newUser) => {
        const token = jwt.sign({ userId: newUser._id }, secretKey);
        res.json({ user: newUser, token });
      })
      .catch((err) => {
        res.status(500).json({ message: 'User already exists' });
      });
  });
});


// User login and set JWT token as a cookie
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        const token = jwt.sign({ userId: user._id }, secretKey);
        // Set the JWT token as a cookie
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

        res.json({ user });
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});



// User logout (clear the token)
app.get('/logout', verifyTokenAndClear, (req, res) => {
  // Clear the token cookie
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});



// Display all Property
app.get('/listproperties', (req, res) => {
  Property.find({})
    .then((properties) => {
      res.json(properties);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// Create Property
app.post('/listproperty', verifyToken, (req, res) => {
  const { name, description, price, images, category, ownername, address } = req.body;

  const newProperty = new Property({
    name,
    description,
    price,
    images,
    category,
    ownername,
    address
  });
  newProperty.save()
    .then((newProperty) => {
      res.json(newProperty);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});





const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
