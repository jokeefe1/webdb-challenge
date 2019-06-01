const db = require('./dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('action')
}

function findById(id) {
    return db('action').where({ id }).first()
}

function add(action) {
    return db('action').insert(action)
}

function update(id, name) {
    return db('action').where({ id }).insert(name)
}

function remove(id) {
    return db('action').where({ id }).delete()
}