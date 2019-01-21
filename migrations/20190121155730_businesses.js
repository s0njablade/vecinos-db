exports.up = function (knex, Promise) {
    return knex.schema.createTable('businesses', (entityInTable) => {
        entityInTable.increments('id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('businesses')
};