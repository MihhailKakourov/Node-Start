const http = require("http")

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200,{
            "Content-Type": "text/html"
        })

        res.end(`
            <h1>Form</h1>
            <form method="POST" action="/">
                <input type="text" name="name">
                <button type="submit">Send</button>
            </form>
            `)
    } else if (req.method === "POST") {
        const body = []
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        req.on("data", data => {
            body.push(Buffer.from(data))
        })

        req.on("end", () => {
            const message = body.toString().split("=")[1]

            res.end(`
                <h1>Form</h1>
                <p>Name: ${message}</p>
            `)
        })
    }
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})