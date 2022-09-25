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

router.get('/new', (req, res) => {
  res.render('places/new')
});
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})





module.exports = router;

