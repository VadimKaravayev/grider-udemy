const jwt = require("jwt-simple");
const config = require("../config");
const User = require("../models/user");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  // see if the email exists
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(422).send({ error: `Email: ${email} is in use` });
    }
    const user = new User({ email, password });
    const saved = await user.save();
    res.json({ token: tokenForUser(user) });
  } catch (err) {
    return next(err);
  }

  // if the user exists, return an error

  // if the user does not exist, create a record

  // Respond to the request indicating the user was created
};
