const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}


function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}


function findSteps(id) {
    return db('steps')
        .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
        .where('scheme_id', '=', id)
        .orderBy('steps.step_number');
}


function add(scheme) {
    
}


function update(changes, id) {
    
}


function remove(id) {
    
}