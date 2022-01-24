const express = require('express');
const mongoose=require('mongoose');
const stuffRoute=require('./routes/stuff')
//const Thing = require('./models/Thing');
const userRouter = require('./routes/user')

const app=express();


mongoose.connect('mongodb+srv://angelo_root:fideleroot24@cluster0.gvset.mongodb.net/cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
/*Ici on ajoute des en tete à notre reponse specifiant les origin pouvant avoir acces à la reponse et les types de 
requete qui peuvent etre emis*/
app.use(express.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff',stuffRoute);
app.use('/api/auth',userRouter);


module.exports=app;