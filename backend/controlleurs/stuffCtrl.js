const Thing = require('../models/Thing');

exports.createThing=(req,res,next)=>{
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
    .then(()=>res.status(201).json({message : 'Object enrégistré !!'}))
    .catch(error=>res.status(400).json({error}));
};

exports.modifyThing=(req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })//Pour vouvoir modifier un seul Object dont l'id correspond et réenrégistrer les valeur dans le bon id
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteThing=(req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOnething=(req, res, next) => { // :id sert à dire à express que l'id est d'inamique
  Thing.findOne({ _id: req.params.id }) //sert à trouver  un seul element dont l'id est spécifier dans l'url 
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};

exports.getAllthing=(req, res, next) => {
  Thing.find()  // sert à avoir acces au elements de notre base de données 
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};