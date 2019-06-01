const db = require('./dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('project')
}

function findById(id) {
    return db('project').where({ id }).first()
}

function add(project) {
    return db('project').insert(project)
}

function update(id, name) {
    return db('project').where({ id }).insert(name)
}

function remove(id) {
    return db('project').where({ id }).delete()
}