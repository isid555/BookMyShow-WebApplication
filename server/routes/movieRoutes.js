const router = require("express").Router();
const Movie = require("../models/movieModel");


// Add a Movie

router.post('/add-movie' , async (req , res)=>{
    try {
        const newMovie = new Movie(req.body)
        await newMovie.save()
        res.send({
            success: true,
            message: 'New movie has been added!'
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})

// Get all the movies

router.get('/get-all-movies' , async(req , res)=>{
    try {
        const allMovies = await Movie.find()
        res.send({
            success: true,
            message: 'All movies have been fetched!',
            data: allMovies
        });

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
})


// Fetch single movie by id
router.get('/movie/:id', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.send({
            success: true,
            message: "Movie fetched successfully!",
            data: movie
        })

    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});


//Update a movie
router.put('/update-movie', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.body._id,
            req.body,
            { new: true } // This option returns the updated document
        );
        if (!movie) {
            return res.status(404).send({
                success: false,
                message: 'Movie not found'
            });
        }
        res.send({
            success: true,
            message: 'The movie has been updated!',
            data: movie
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        });
    }
});




//delete
router.put('/delete-movie', async (req, res) => {
    try{
        await Movie.findByIdAndDelete(req.body._id);
        // console.log(req.body.movieId);
        res.send({
            success: true,
            message: 'The movie has been deleted!',
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
})


module.exports = router;