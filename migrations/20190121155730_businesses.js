exports.up = function (knex, Promise) {
    return knex.schema.createTable('table_name', (entityInTable) => {
        entityInTable.increments('id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('table_name')
};