const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write("<h1>Hello World</h1>")
    res.write("<h2>Hello World</h2>")
    res.write("<h3>Hello World</h3>")
    res.end(`
        <div style="background-color: red; width: 200px; height: 200px">
        <h1>test</h1>
        </div>
    `)
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})