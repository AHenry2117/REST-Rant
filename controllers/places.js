const router = require('express').Router();


// GET /places
router.get('/', (req, res) => {
  let places= [
   {
    name: "H-Thai-ML",
    city: "Orlando",
    state: "FL",
    cuisines: "Thai, Pan-Asian",
    pic: "http://placekitten.com/250/250",
   },
   {
    name: "Coding Cat Cafe",
    city: "Hoboken",
    state: "NJ",
    cuisines: "Coffee, Bakery",
    pic: "http://placekitten.com/250/250",
   }];
  res.render('places/index', {places});
});

module.exports = router;

