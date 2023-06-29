const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/shirt',(req,res)=>{
    res.status(200).send({
        tshirt: 'RR',
        size: 'M'
    })

})

app.post('/shirt/:id',(req,res)=>{
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({ message: "Need a logo!"})
    }
    res.send({
        tshirt: `with your ${logo} and ${id}`,
    })
})

app.listen(PORT,()=> console.log(`It's alive on http://localhost:${PORT}`))