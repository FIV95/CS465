const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

/* GET home page */
const index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    activeHome: true
  });
};

/* GET travel page */
const travel = async (req, res) => {
  try {
    const trips = await Trip.find({}).lean().exec();

    res.render('travel', {
      title: 'Travlr Getaways - Travel',
      activeTravel: true,
      trips
    });
  } catch (err) {
    res.status(500).render('error', {
      message: 'Unable to retrieve trips',
      error: err
    });
  }
};

module.exports = {
  index,
  travel
};
