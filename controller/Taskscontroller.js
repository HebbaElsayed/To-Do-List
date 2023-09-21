const Task = require("../models/taskschema")


const gettasks = (req, res) => {
    Task.find()
  .then((result) => {
    res.render("index",{arrTask:result});
  })
  .catch((err) => {
    console.log(err);
  });

  }


  const posttasks = async (req, res) => {
    try{
    const {task} = req.body  
      await Task.create({
        task
      });
        res.redirect("/");
    }catch(err){
      console.log(err);
    }
  }


  const deletetasks = (req,res)=>{
    Task.findByIdAndDelete(req.params.id)
   

    .then((ress)=> {
    })
    .catch((err) => {
      console.log(err);
    })
  }

const deleteall = (req,res)=>{
  Task.deleteMany()

  .then((ress)=> {
     res.redirect("/");
   })
   .catch((err) => {
     console.log(err);
   })
}


module.exports={gettasks,posttasks,deletetasks,deleteall}