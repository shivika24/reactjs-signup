const db = require("../models");
const User1 = db.tutorials;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstname||!req.body.lastname||!req.body.age||!req.body.place||!req.body.email||!req.body.password) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a User
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      place: req.body.place,
      email: req.body.email,
      password: req.body.password
    };
  
    // Save User in the database
    User1.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };