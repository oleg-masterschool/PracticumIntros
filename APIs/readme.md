## Working with APIs

HTTP protocol for communicating between networked entities  

Request
Response

All browser communication is done via HTTP, including html, images, and custom data transfer via JS.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

fetch example

JSON

```json
[
  {
    "no-comments": "are allowed, so I have to comment like this",
    "quoted-keys": "don't forget the double quotes around keys",
    "but-not-all-values": "need to be quoted. For example,",
    "numbers": 3.1415926535,
    "objects": {
      "key-1": "val-1",
      "key-2": "val-2"
    },
    "null": null,
    "booleans": true,
    "no-trailing-commas": "are allowed either."
  },
  {
    "other-stuff": "blah blah"
  }
]
```

```js
JSON.stringify()
JSON.parse()
res.json()
```

### HTTP Request

Headers
Body
Parameters in the URL

Other verbs - PATCH, PUT, DELETE

### Server Response

Status codes
100 
200 OK / 201 Created
300 Redirect
400 Unauthorized / 403 Forbidden / 404 Not found
500 Error

Response body

res.json()
res.text()
res.blob()

Postman is your friend
