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
    activeTravel: true
  });
};

module.exports = {
  index,
  travel
};
