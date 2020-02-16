/*jshint esversion: 8 */

const express = require('express');
const router = express.Router();


const eventos = require('../models/modeloEvento');
const User = require('../config/passport')

router.get('/', (req, res) => {
   
    res.render('index');
});
router.get('/about', (req, res) => {
   
    res.render('about');
});

router.get('/calendar',(req,res)=>{
    res.render('calendar/calendar');
    
    console.log('calendario entro');

})
//router.get('/calendar/all',(req,res)=>{
//    res.render('calendar/calendar');
//    console.log('todos los eventos del calendario');
    //console.log('desde calendar ver user',User);
    //console.log('passport',passport);
//})
router.get(`/calendar/events/:usermail`, function(req, res) {
    let emailusuario="carlosantonioucananbarrera@gmail.com"
    //var emailusuario = document.getElementById('usermail').value
    console.log('paso email',req.params.usermail)
    eventos.find({email:req.params.usermail}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(doc)
        console.log(doc)
    })
})
router.post('/calendar/new', function(req,res){
    //console.log(User)
    eventos.findOne({}).sort({id:-1}).exec(function(err, doc){
        //idNuevo = doc.id+1;   
        console.log('calendario un nuevo evento');     
         const eventoNuevo = new eventos({
           //id: idNuevo,
           title:req.body.title,
           allDay:req.body.allDay,
           start:  req.body.start,
           end: req.body.end,
           email:req.body.usermail 
        });
        console.log('evento nuevo ',eventoNuevo);
        eventoNuevo.save()
        
    })     


    //res.render('calendar/calendar');
    //res.send('calendario');
    //console.log('calendario un nuevo evento');
})
module.exports = router;
