// Dependencies

const express = require('express')
const methodOverride = require('method-override')
// const mongoose = require('mongoose')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
// const MONGO_URI = process.env.MONGO_URI
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
//     () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
// )

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)


