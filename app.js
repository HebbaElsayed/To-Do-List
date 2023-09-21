const express=require("express");
const app = express();
const mongoose = require("mongoose");  
const bodyParser=require("body-parser")
const router=require("./routes/alltasks.js")
const cors = require("cors")
app.use(express.static('public'))
port=8000
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(cors())


mongoose.connect("mongodb://0.0.0.0:27017/todoDB")
  .then(() => {
    app.listen(port, () => {
      console.log(`server running at ${port}...`);
    });
  }).catch((err) => {
    console.log(err)
  })
   

app.use("/",router)

app.get("/", (req, res) => {
    res.redirect("/index");
  })


app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});




