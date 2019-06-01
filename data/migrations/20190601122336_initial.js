
exports.up = async function(knex) {
  await knex.schema.createTable('project', tbl => {
      tbl.increments()
      tbl.string('name')
      tbl.string('desc')
      tbl.bool('complete')
  })

  await knex.schema.createTable('action', tbl => {
      tbl.increments()
      tbl.string('desc')
      tbl.string('notes')
      tbl.bool('complete')
      tbl
        .integer('project_id')
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.dropTableIfExists('action')
  await knex.dropTableIfExists('project')
};


