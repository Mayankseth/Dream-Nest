const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
// const cors = require('cors');

const app = express();

var cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/RealState', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// mongoose.connect('mongodb://localhost:27017/RealState', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./models/userModels');
const Property = require('./models/listHouseModels');
const { Verify } = require('crypto');
const secretKey = 'nkjdfwsnwckdmkw';


function verifyToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.status(401).json({ message: 'Invalid token' });
    }
    console.log('Decoded token payload:', decoded);
    req.userId = decoded.userId;
    next();
  });
  
}


function verifyTokenAndClear(req, res, next) {
  const token = req.cookies.JWTtoken;

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
        res.status(500).send(err);
      });
  });
});

// User login and set JWT token as a cookie
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed: User not found' });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          // Handle error during password comparison
          return res.status(500).json({ message: 'Error during password comparison' });
        }

        if (!result) {
          // Password does not match
          return res.status(401).json({ message: 'Authentication failed: Incorrect password' });
        }

        const token = jwt.sign({ userId: user._id }, secretKey);


        res
          .cookie("JWTtoken", token, {
            httpOnly: true,
          })

        res.json({ user, token });
      });
    })
    .catch((err) => {
      console.error('Error during login:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});


app.get("/logout", verifyTokenAndClear, (req, res) => {
  return res
    .clearCookie("JWTtoken")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
});


app.get('/test-cookie', (req, res) => {
  res.json({ cookieSent: req.cookies.JWTtoken });
});

app.get('/listproperties', (req, res) => {
  Property.find({})
    .then((properties) => {
      res.json(properties);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/listproperties/:id', (req, res) => {
  const propertyId = req.params.id;

  Property.findById(propertyId)
    .then((property) => {
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }
      res.json(property);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});


app.post('/listproperty',verifyToken ,(req, res) => {
  const { name, description, price, category,ownername, ownernumber, address } = req.body;
  const images = req.body.images.map(image => ({ public_id: image.public_id, url: image.url }));

  const newProperty = new Property({
    name,
    description,
    price,
    category,
    ownername,
    ownernumber,
    address,
    images
  });
  newProperty.save()
    .then((newProperty) => {
      res.json(newProperty);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
    
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
