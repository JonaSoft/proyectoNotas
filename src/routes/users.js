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
module.exports = router;