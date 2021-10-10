const endpoint = 'https://jsonplaceholder.typicode.com/posts'

fetch(endpoint)
    .then((res) => res.json())
    .then((data) => console.log(data));