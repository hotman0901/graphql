// 這裡面的key都必須完全跟schema定義的依樣，不論大小寫
const authors = [
  {
    name: 'JK Benny1',
    age: 45,
    Books: ['1book1', '1book2', '1book3']
  },
  {
    name: 'JK Benny2',
    age: 35,
    Books: ['2book1', '2book2', '2book3']
  }
]


const resolvers = {
  Query: {
    // 這裡的名稱是要對應schema.js寫的Query內命名的
    author: () => {
      return authors
    }
  }
}

export default resolvers;