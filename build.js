const fs = require('fs')
let dir = './dist/js/';
function getSimpleName(path) {
    let name = path.split('.');
    return name[0] + "." + name[2];
}
fs.readdirSync(dir).forEach(filePath => {
    let newFile = './chrome-plug-in/' + getSimpleName(filePath);
    if(fs.existsSync(newFile)) {
        fs.unlinkSync(newFile);
    }
    fs.copyFileSync(dir + filePath, newFile);
})