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

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else {
    res.render('places/show', {place: places[id], id})
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})





module.exports = router;

