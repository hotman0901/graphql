// 這裡面的key都必須完全跟schema定義的依樣，不論大小寫
// const authors = [
//   {
//     name: 'JK Benny1',
//     age: 45,
//     Books: ['1book1', '1book2', '1book3']
//   },
//   {
//     name: 'JK Benny2',
//     age: 35,
//     Books: ['2book1', '2book2', '2book3']
//   },
//   {
//     name: 'JK Benny3',
//     age: 15,
//     Books: ['3book1', '3book2', '3book3']
//   }
// ]


import mongoose from 'mongoose';
import authorModel from './models/author';

const resolvers = {
  // 宣告Query內的方法
  Query: {
    // 這裡的名稱是要對應schema.js寫的Query內命名的
    getAuthors: () => {
      // return authors
      return authorModel.find();
    },
    author: (root, {id}) => {
      // return authors.find(auth => auth.age === age)
      return authorModel.findOne({id});
    }
  },
  // 宣告Mutation內的方法
  Mutation: {
    // 對應在schema的方法
    addAuthor: (root, { name, age, books }) =>{
      console.log(age, name, books,);
      const author = new authorModel({
         age, name, books
      })

      return author.save();
    },
    deleteAuthor: (root, {id}) => {
      return authorModel.findOneAndRemove({id})
    },
    updateAuthor: (root, {id, name}) => {
      return authorModel.findOneAndUpdate(
        {id},
        {name},
        { new: true, runValidators: true }
      ).exec();
    }

  }
}

export default resolvers;