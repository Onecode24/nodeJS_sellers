const express=require('express');
const router=express.Router();
const stuffCtrl=require('../controlleurs/stuffCtrl')

// Ici quand  une requete post sera lancer se api/stuff/ et un resultats sera retourner
router.post('/',stuffCtrl.createThing);

// On fait une requte put à l'url pour modifier object suivant son id
router.put('/:id', stuffCtrl.modifyThing);

// On fait une requete delete pour supprimer un object suivant son id
router.delete('/:id', stuffCtrl.deleteThing);

// Ici quand  une requete get sera lancer se api/stuff/ et un resultats sera retourner 
router.get('/:id', stuffCtrl.getOnething);
router.get('/', stuffCtrl.getAllthing);


module.exports=router;