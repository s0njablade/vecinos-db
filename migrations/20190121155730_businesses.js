exports.up = function (knex, Promise) {
    return knex.schema.createTable('businesses', (business) => {
        business.increments('id')
        business.string('name')
        business.string('address')
        business.string('category')
        business.integer('phoneNumber')
        business.integer('hours')
        business.string('website')
        business.string('social')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('businesses')
};