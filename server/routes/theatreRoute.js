const router = require("express").Router();
const Theatre = require("../models/theatreModel");




router.post("/add-theatre", async (req, res) => {
    try{

        const theatreExists = await Theatre.findOne({email:req.body.email});
        if(theatreExists){
            res.status(200).send({
                success:false,
                message:"The theatre already exists!"
            })
        }


        const newTheatre = await Theatre.create(req.body);

         newTheatre.save();

        res.send({
            success:true,
            message:"New Theatre has been created successfully"
        })
    }
    catch (error){
        res.send({
            success:false,
            message:error.message
        })
    }

});


// Get all theatres for Admin route
router.get('/get-all-theatres', async (req, res) => {
    try{
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success: true,
            message: "All theatres fetched!",
            data: allTheatres
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
});


// Get the theatres of a specific owner
router.post('/get-all-theatres-by-owner',  async (req, res) => {
    try{
        const allTheatres = await Theatre.find({_id: req.body.owner}).populate('owner');
        if(allTheatres){
            res.send({
                success: true,
                message: "All theatres fetched successfully!",
                data: allTheatres
            })
        }
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});



// Update theatre
router.put('/update-theatre',  async (req, res) => {
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        // console.log(req.body.theatreId)
        res.send({
            success: true,
            message: "Theatre has been updated!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

// Delete theatre
router.delete('/delete-theatre', async (req, res) => {
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success: true,
            message: "The theatre has been deleted!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});




module.exports = router;