const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const graphqlExpress = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');


const { Order } = require('./db/db');
const typeDefs = require('./schema/schema');
const resolvers = require('./schema/resolvers');


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';


(async () => {

	const app = express();

	app.use(cors());
	app.use(compression());
	app.use(morgan('common'));

	const schema = makeExecutableSchema({ typeDefs, resolvers });


	app.use('/', bodyParser.json(), graphqlExpress({ schema, graphiql:true }));

	// Init server
	app.listen(PORT, () => {
		console.log('> Server running on 3000/orders')
	});
})();
