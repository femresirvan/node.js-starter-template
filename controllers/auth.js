const User = require('../models/user');
const { issueJWT } = require('../lib/utils');

const login = async (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return next({ status: 401, msg: 'could not found user' });
      }

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) {
          next(err);
        }
        if (isMatch) {
          const tokenObject = issueJWT(user);
          res
            .status(200)
            .json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
        }
        next({ status: 401, msg: 'you entered the wrong password' });
      });
    })
    .catch((err) => {
      next({ msg: err });
    });
};

const register = async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    if (!result) next({ status: 404, msg: 'Username or password are incorrect.' });
    const tokenObject = issueJWT(user);
    res
      .status(200)
      .json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires, user });
  } catch (err) {
    next({ msg: err });
  }
};

const resetPassword = (req, res, next) => {};

const updateProfile = (req, res, next) => {};

const getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'You are successfully get your user informations!',
    user: req.user,
  });
};

module.exports = {
  login,
  register,
  resetPassword,
  updateProfile,
  getUser,
};
