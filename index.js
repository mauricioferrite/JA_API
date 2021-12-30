const express = require('express');
const res = require('express/lib/response');

const app = express();
const port = 3001;

// Parse JSON using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
    {
        id: '1',
        title: 'Inception',
        director: 'Christopher Lambert',
        release_date: '2010-07-02'
    },
    {
        id: '2',
        title: 'The Irish',
        director: 'Martin Scorcese',
        release_date: '2019-09-27'
    },
];

// Get the movie list in the form of JSON
app.get('/movie', (req, res) => {
    res.json(movies);
});

// Adding item to JSON
app.post('/movie', (req, res) => {
    const movie = req.body;

    console.log(movie);
    movies.push(movie);
    res.send('Movie Added!!');
})

// Search for a movie
app.get('/movie/:id', (req, res) => {
    const id = req.params.id;

    for (let movie of movies) {
        if(movie.id === id){
            res.json(movie)
            return
        }
    }

    res.status(404).send('Movie not found!');
});

// Set the server to listen at port 
app.listen(port, () => console.log(`Server listening at port ${port}`));