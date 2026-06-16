const mongoose = require('mongoose');
const User = mongoose.model('users');

const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'All fields required' });
  }

  const user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  try {
    await user.save();

    const token = user.generateJWT();

    return res
      .status(200)
      .json({ token });
  } catch (err) {
    return res
      .status(400)
      .json(err);
  }
};

module.exports = {
  register
};
