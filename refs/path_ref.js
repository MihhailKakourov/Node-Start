const path = require("path");

console.log(__filename);  // Печатает полный путь к текущему файлу
console.log(path.basename(__filename));  // Имя файла (с расширением)
console.log(path.dirname(__filename));  // Путь к директории без имени файла
console.log(path.extname(__filename));  // Расширение файла (например, .js)

console.log(path.parse(__filename));  // Разбивает путь на компоненты (root, dir, base, ext, name)

console.log(path.join(__dirname, "test", "second.html"));  // Объединяет пути, создавая корректный путь
console.log(path.resolve(__dirname, "test", "second.html"));  // Создаёт абсолютный путь, начиная с текущей директории