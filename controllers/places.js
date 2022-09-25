const router = require('express').Router();


// GET /places
router.get('/', (req, res) => {
  let places= [
   {
    name: "H-Thai-ML",
    city: "Orlando",
    state: "FL",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/pad-thai.jpg",
   },
   {
    name: "Coding Cat Cafe",
    city: "Hoboken",
    state: "NJ",
    cuisines: "Coffee, Bakery",
    pic: "/images/Coffee.jpg",
   }];
  res.render('places/index', {places});
});

module.exports = router;

