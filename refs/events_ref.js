const EventEmitter = require("events");

// class Logger extends EventEmitter {
//     log(msg) {
//         console.log(msg)
//         this.emit("message", `${msg} ${Date.now()}`)
//     }
// }

// const logger = new Logger()

// logger.on("message", (msg) => {
//     console.log(msg)
// })

// logger.log("Hello")
// logger.log("Hello")
// logger.log("Hello")


class Notifier extends EventEmitter {
    notify(message) {
        console.log("Notification sent:", message);
        this.emit("notification", `${message} at ${new Date().toLocaleTimeString()}`);
    }
}

const notifier = new Notifier();

notifier.on("notification", (msg) => {
    console.log("Received notification:", msg);
});

notifier.notify("You have a new message");
notifier.notify("Your order has been shipped");
notifier.notify("Meeting starts in 15 minutes");