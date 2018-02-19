```
1.clone project
2.install mongoose db
3.npm i
4.npm run start
```
## for test
## open browser:  http://localhost:3000/graphiql
## enter code like this

```javascript
// query all
{
  getAuthors
  {
    name
    age
    books
  }
}
```
```javascript
// query by id
{
  author(id: "36968dd0-1530-11e8-aeca-1bcb6d8e5277")
  {
    name
    age
    books
  }
}
```





```javascript
// add
mutation
{
  addAuthor(name: "benny", age: 30, books:["a1", "a2"])
  {
    name
    age
    books
  }
}
```

```javascript
// update
mutation
{
  updateAuthor(id: "4bf8fdb0-1531-11e8-a6da-3b7e68cd3888", name: "updateBenny")
  {
    name
    age
    books
  }
}
```

```javascript
// delete
mutation
{
  deleteAuthor(id: "4bf8fdb0-1531-11e8-a6da-3b7e68cd3888")
  {
    name
    age
    books
  }
}
```
