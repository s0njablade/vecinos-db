const db = require('./database-connection')

module.exports = {
    getAllBusinesses(){
        return db('businesses')
    },
    getBusinessById(id){
        return db('businesses').where('id', id).first()
    },
    createBusiness(newBusiness){
        return db('businesses').insert(newBusiness).returning('*')
    },
    updateBusiness(id, updatedBusiness){
        return db('businesses').where('id', id).update(updatedBusiness).returning('*')
    },
    deleteBusiness(id){
        return db('businesses').where('id', id).delete()
    }

}