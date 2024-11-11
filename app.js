const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write(`
        <html>
            <head>
                <title>My Custom Web Server</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center; }
                    h1 { color: #4CAF50; }
                    h2 { color: #FF6347; }
                    h3 { color: #1E90FF; }
                    .box { background-color: #FFEB3B; width: 300px; height: 150px; margin: 20px auto; padding: 20px; border-radius: 10px; }
                    .image { width: 300px; height: auto; border-radius: 10px; }
                    .container { margin-top: 50px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Hello, Welcome to My Web Server!</h1>
                    <h2>This is a header styled with CSS</h2>
                    <h3>This is another header with a different color</h3>
                    <div class="box">
                        <h3>Styled Box</h3>
                        <p>This box is styled with background color and padding.</p>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="Image" class="image"/>
                </div>
            </body>
        </html>
    `);
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})