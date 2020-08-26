
const Workout = require("../models/workout");


module.exports = function(app) {
  // middleware that is specific to this router
  app.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
  });
  
  app.post("/api/workouts",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

  app.get("/api/workouts/range",function(req,res){  
    Workout.find()
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
});


  app.post("/api/workouts/range",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

  app.put("/api/workouts/:id",({body,params},res)=>{   
    Workout.findByIdAndUpdate(  
     params.id,
     {$push:{exercises:body} },
     {new: true,runValidators:true }
    )
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});
}
