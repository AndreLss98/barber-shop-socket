const tableName = 'profissional';
const pg = require('./../../config/knex');

module.exports = {
    async findAll() {
        return await pg(tableName);
    },
    async findById(idprofissional) {
        return await pg(tableName).where({ idprofissional }).first();
    },
    async updateSocketId(idprofissional, idsocket) {
        return await pg(tableName).where({ idprofissional }).update({ idsocket });
    },
    async getSocketId(idprofissional, idsocket) {
        return (await pg(tableName).select('idsocket').where({ idprofissional }).first()).idsocket;
    }
}