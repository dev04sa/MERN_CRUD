const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const UserModel=require('./models/user')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/Crud').then( ()=> console.log("Success") );


app.get('/',(req,res)=> {
    UserModel.find()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post('/create',(req,res)=> {
    const {name , email ,age}=req.body;
    UserModel.create({name,email,age})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.put('/update/:id',(req,res)=> {
    const id =req.params.id;
    // const {name , email ,age}=req.body;
    UserModel.findByIdAndUpdate({_id : id},{
        name : req.body.name,
        email : req.body.email,
        age : req.body.age,
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id',(req,res)=> {
    const id =req.params.id;

    UserModel.findByIdAndDelete({_id : id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})


app.listen(3001,()=> {
    console.log("Running")
})

