const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const cars = [
    {
        make: 'Subaru',
        model: 'STI',
        year: 2004
    },
    {
        make: 'Ford',
        model: 'Pinto',
        year: 2018
    },
    {
        make: 'Porsche',
        model: 'Carerra',
        year: 1973
    }
]

const app = express();

app.use(bodyParser.json())

app.get('/api/cars', (req, res, next) => {
    res.json(cars)
})

app.post('/api/cars', (req, res, next) => {
    cars.push(req.body)
    res.status(200).json(req.body)
})


app.listen(port, () => {
    console.log(`Buller: ${port}`)
})