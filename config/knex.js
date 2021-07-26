const { database, user, password } = process.env;

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
