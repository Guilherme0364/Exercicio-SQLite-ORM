// Ponto de acesso global

const express = require('express')
const pessoas = require('./PessoasRoute.js')

module.exports = app => {
    app.use(
        express.json(), 
        pessoas
    )
}