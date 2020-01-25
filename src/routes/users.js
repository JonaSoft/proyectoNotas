/*jshint esversion: 8 */

const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('User ingresando a la app');
});
router.get('/users/signup', (req, res) => {
    res.send('Formulario de autenticacion');
});
module.exports = router;