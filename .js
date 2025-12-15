const add = document.getElementsByClassName('nished')[2];
add.textContent="mizanr";

const apiUrl = "https://jsonplaceholder.typicode.com/users/1"
fetch( apiUrl)
.then(Response=>Response.json())
.then(data=> {
console.log(data)
})