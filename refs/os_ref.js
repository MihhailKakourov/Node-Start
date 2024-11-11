const os = require("os");

// Печатает информацию о системе
console.log(os.platform());
// Печатает информацию о архитектуре
console.log(os.arch());
// Печатает информацию о процессоре
console.log(os.cpus());
// Печатает информацию о памяти
console.log(os.totalmem());
// Печатает информацию о свободной памяти
console.log(os.freemem());
// Печатает информацию о домене пользователя
console.log(os.homedir());
// Печатает информацию о времени работы системы
console.log(os.uptime());
