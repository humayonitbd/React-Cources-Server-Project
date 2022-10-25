
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const data = require('./data/data.json')


app.get('/', (req, res)=>{
    res.send('server is running...')
})


app.get('/data', (req, res)=>{
    res.send(data)
})

app.get('/data/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    // console.log(req.params.id)
    const dataId = data.find(dt =>dt.id === id);
    res.send(dataId)
})



app.listen(port,()=>{
    console.log('your port is', port)
})