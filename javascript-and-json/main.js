var booksArr = [
  {
    isbn: '123',
    title: 'Huckleberry Finn',
    author: 'Mark Twain'
  },
  {
    isbn: '456',
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    isbn: '789',
    title: 'The Shining',
    author: 'Stephen King'
  }
];
console.log('booksArr:', booksArr);
console.log('typeof booksArr:', typeof booksArr);

var booksStr = JSON.stringify(booksArr);
console.log('booksStr:', booksStr);
console.log('typeof booksStr:', typeof booksStr);

var studentJSON = '{"id":123456,"name":"Ron Weasley"}';
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

var studentObj = JSON.parse(studentJSON);
console.log('studentObj:', studentObj);
console.log('typeof studentObj:', typeof studentObj);
