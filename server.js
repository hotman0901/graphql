import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from "body-parser";
import schema from './schema';
const server = express();

// server.get('/', (req, res) => {
//   res.json({
//     aa: 123
//   })
// });
// 建立grapql endpoint
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

// schema載入
server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.listen(3000, ()=>{
  console.log('server star，port: 3000');
});