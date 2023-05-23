const http = require('http')
//Imports Node's built-in web server module

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content:"GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
//Binds http server to the port 3001

console.log(`Server running on port ${PORT}`)