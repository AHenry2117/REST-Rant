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

router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], index: req.params.id });
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})



module.exports = router;

