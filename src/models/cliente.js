const tableName = 'cliente';
const pg = require('./../../config/knex');

module.exports = {
    async findAll() {
        return await pg(tableName);
    },
    async findaById(idcliente) {
        return await pg(tableName).where({ idcliente }).first();
    },
    async updateSocketId(idcliente, idsocket) {
        return await pg(tableName).where({ idcliente }).update({ idsocket });
    },
    async getSocketId({idcliente}) {
        return (await pg(tableName).select('idsocket').where({ idcliente }).first()).idsocket;
    }
}