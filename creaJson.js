const fs = require('fs');
const path = require('path');

const folderPath = '.';
const outputFile = './righe.md';

let output = [];

fs.readdir(folderPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(file => {
        if (file.endsWith('.md') && file !== 'readme.md') {
            const filePath = path.join(folderPath, file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.log(err);
                }
                const lines = data.split('\n');
                if (lines[0].startsWith('# ')) {
                    const linkText = lines[0].slice(2);
                    output.push(`- [${linkText}](./Categories/${file})`);
                }
                if(files.indexOf(file) === files.length - 1) {
                    output = output.sort()
                    fs.writeFile(outputFile, output.join('\n'), (err) => {
                        if (err) throw err;
                        console.log('File created successfully.');
                    });
                }
            });
        }
    });
});