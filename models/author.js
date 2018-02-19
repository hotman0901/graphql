import mongoose from 'mongoose';
const schema = mongoose.Schema;


import uuid from 'node-uuid'

// 建立model 的tabel內容
const authorSchema = new schema({
  id: {
    type: String,
    default: uuid.v1
  },
  age: {
    type: Number
  },
  name: {
    type: String
  },
  books: {
    type: [String],
    required: 'Plz enter a book name'
  }
})

const model = mongoose.model('author', authorSchema);

export default model;