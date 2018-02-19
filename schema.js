// 定義schema
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

// 所以這個type 可以定義多個
// 這必須與mongoose、resolvers 參數的定義要一樣
const typeDefs =
`
  type Person {
    age: Int
    name: String
    gender: String
  }

  type Author {
    id: String
    age: Int
    name: String
    books: [String]
  }

  type Query {
    getAuthors: [Author],
    author(id: String!): Author,
    person: [Person],
  }

  type Mutation {
    addAuthor(name: String!, age: Int!, books: [String]!): Author
    deleteAuthor(id: String!): Author
    updateAuthor(id: String!, name: String!): Author
  }
`

const schema = makeExecutableSchema({typeDefs, resolvers});

// 用來建立假的data用
// addMockFunctionsToSchema({schema});

export default schema;