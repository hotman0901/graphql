// 定義schema
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

// 所以這個type 可以定義多個
const typeDefs =
`
  type Person {
    age: Int
    name: String
    gender: String
  }

  type Author {
    age: Int
    name: String
    Books: [String]
  }

  type Query {
    author: [Author],
    person: [Person]
  }
`

const schema = makeExecutableSchema({typeDefs, resolvers});

// 用來建立假的data用
// addMockFunctionsToSchema({schema});

export default schema;