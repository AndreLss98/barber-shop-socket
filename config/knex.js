const { database, user, password } = require('./../.env');

const config = {
	client: 'mysql',
	connection: {
		database,
		user,
		password
	}
}

const knex = require('knex')(config);
module.exports = knex;
