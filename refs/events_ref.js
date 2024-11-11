const EventEmmitter = require("events");

class Logger extends EventEmmitter {
    log(msg) {
        console.log(msg)
        this.emit("message", `${msg} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on("message", (msg) => {
    console.log(msg)
})

logger.log("Hello")
logger.log("Hello")
logger.log("Hello")