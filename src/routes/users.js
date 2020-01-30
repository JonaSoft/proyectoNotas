/*jshint esversion: 8 */

const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    //res.send('User ingresando a la app');
    res.render('users/signin');
});
router.get('/users/signup', (req, res) => {
    //res.send('Formulario de autenticacion');
    res.render('users/signup');
});
router.post('/users/signup', (req, res) => {
    //console.log(req.body);
    //res.send(req.body)
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    if (name.length <= 0) {
        errors.push({ text: 'You need insert your name' });
    }
    if (password != confirm_password) {
        errors.push({ text: 'Password do not match' });
    }
    if (password.length < 5) {
        errors.push({ text: 'Password not must be at least or equal 4 characters' });
    }
    if (errors.length > 0) {
        res.render('users/signup', { errors, name, email, password, confirm_password });
        req.flash('error_msg', 'Datos de cuenta incorrectos');
        console.log(errors);
    } else {
        res.send(req.body);
    }




})
module.exports = router;