const express = require('express')
const db = require('../data/action-model')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        console.log('Test')
        const allActions = await db.find()
        console.log(allActions)
        res.json({ message: `Successfully found all actions`, allActions })
    } catch (error) {
        res.status(500).json({ error: `There was an error retrieving actions from server`, error })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const actionById = await db.findById(id)
        res.json({ message: `Successfully retrieved action with id ${id}`, actionById })
    } catch (error) {
        res.status(500).json({ error: `There was a problem retieving action with id ${id}`, error })
    }
})

router.post('/', async (req, res) => {
    const { body } = req

    try {
        const addAction = await db.add(body)
        res.status(201).json({ message: `Successfully added action`, addAction })
    } catch (error) {
        res.status(500).json({ error: `There was a problem adding action`, error })
    }
})

router.post('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        const updateAction = await db.update(id, body)
        res.status(204).json({ message: `Successfully updated action with id ${id}`, updateAction })
    } catch (error) {
        res.status(500).json({ error: `There was an error updating action with id ${id}`, error })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deleteAction = await db.remove(id)
        res.status(410).json({ message: `Successfully deleted action`, deleteAction })
    } catch (error) {
        res.status(500).json({ error: `There was a problem deleting action with id ${id}`, error })
    }
})

module.exports = router