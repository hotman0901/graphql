import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from "body-parser";
import schema from './schema';
import mongoose from 'mongoose';
const server = express();

// 連線
mongoose.connect('mongodb://localhost/graphqlTutorial');

// test for connect
const connection = mongoose.connection;
connection.once('open', () =>{
  console.log('mongoose connect');
})



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