import  express  from "express";

const app = express();
const PORT = 8089;

app.use(express.json())

app.post("/integrator", (req, res) =>{
    console.log(req.body);
    res.sendStatus(204)
})



app.listen(PORT, console.log(" The port is " + PORT))
