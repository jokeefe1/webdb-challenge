
exports.seed = async function(knex) {
      await knex('project').insert([
        {id: 1, name: 'project 1', desc: 'This is a description of project 1', complete: false},
        {id: 2, name: 'project 2', desc: 'This is a description of project 2', complete: false},
        {id: 3, name: 'project 3', desc: 'This is a description of project 3', complete: false}
      ])

      await knex('action').insert([
        {id: 1, desc: 'description of action 1', notes: 'note 1', complete: false, project_id: 1},
        {id: 2, desc: 'description of action 2', notes: 'note 2', complete: false, project_id: 2},
        {id: 3, desc: 'description of action 3', notes: 'note 3', complete: false, project_id: 3},
        {id: 4, desc: 'description of action 4', notes: 'note 4', complete: false, project_id: 3},
      ])
    }