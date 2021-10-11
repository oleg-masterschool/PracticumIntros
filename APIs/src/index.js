const endpoint = 'https://jsonplaceholder.typicode.com/posts'

fetch(endpoint)
    .then((res) => res.json())
    .then((data) => console.log(data));

fetch(endpoint, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: 'John Doe',
        age: 22
    })
})
    .then((res) => res.json())
    .then((data) => console.log(data));