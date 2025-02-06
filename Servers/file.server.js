const { v4: uuidv4 } = require("uuid")
const fs = require("fs")
const path = require("path")

class FileServer {
    save(file) {
        try {
            const fileName = uuidv4() + ".jpg";
            const currentDir = __dirname;
            const staticDir = path.join(currentDir, "..", "static");
            const filePath = path.join(staticDir, fileName);

            if (!fs.existsSync(staticDir)) {
                fs.mkdirSync(staticDir, { recursive: true });
            }

            file.mv(filePath);

            return fileName;
        } catch (error) {
            console.log(`fileSystem Error ${error}`);
        }
    }
}

module.exports = new FileServer();