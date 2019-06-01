const express = require('express')
const helmet = require('helmet')
const routerProject = require('./routerProject/routerProject')
const routerAction = require('./routerAction/routerAction')
const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/project', routerProject)
server.use('/api/action', routerAction)

server.get('/', (req, res) => {
    res.json({ message: `Welcome to the project api`})
})

module.exports = server