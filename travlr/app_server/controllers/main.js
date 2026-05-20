const fs = require('fs');
const path = require('path');

const trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

/* GET home page */
const index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    activeHome: true
  });
};

/* GET travel page */
const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways - Travel',
    activeTravel: true,
    trips
  });
};

module.exports = {
  index,
  travel
};
