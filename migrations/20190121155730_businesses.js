exports.up = function (knex, Promise) {
    return knex.schema.createTable('businesses', (business) => {
        business.increments('id')
        business.string('name')
        business.string('address')
        business.string('category')
        business.string('phoneNumber')
        business.string('hours')
        business.string('days')
        business.string('website')
        business.string('social')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('businesses')
};