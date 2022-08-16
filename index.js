function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks(){
  fetch("https://anapioficeandfire.com/api/books")
  .then(function(resp) {
    return resp.json
  })
  .then(function(json){
    console.log(json)
  })
}
function renderBooks(json){
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name} </h2>`
    main.appendChild(h2)
  })
}
