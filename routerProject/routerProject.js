const express = require('express')
const db = require('../data/project-model')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const allProjects = await db.find()
        console.log(allProjects)
        res.json({ message: `Successfully found all projects`, allProjects})
    } catch (error) {
        res.status(500).json({ error: `There was an error retrieving projects from server`, error})
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const projectById = await db.findById(id)
        res.json({ message: `Successfully retrieved project with id ${id}`, projectById})
    } catch (error) {
        res.status(500).json({ error: `There was a problem retieving project with id ${id}`, error})
    }
})

router.post('/', async (req, res) => {
    const { body } = req

    try {
        const addProject = await db.add(body)
        res.status(201).json({ message: `Successfully added project`, addProject})
    } catch (error) {
        res.status(500).json({ error: `There was a problem adding project`, error})
    }
})

router.post('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        const updateProject = await db.update(id, body)
        res.status(204).json({ message: `Successfully updated project with id ${id}`, updateProject})
    } catch (error) {
        res.status(500).json({ error: `There was an error updating project with id ${id}`, error})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deleteProject = await db.remove(id)
        res.status(410).json({ message: `Successfully deleted project`, deleteProject})
    } catch (error) {
        res.status(500).json({ error: `There was a problem deleting project with id ${id}`, error})
    }
})

module.exports = router