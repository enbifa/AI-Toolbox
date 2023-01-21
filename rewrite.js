const fs = require('fs');

// Legge il file tools.txt
fs.readFile('tools.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Divide il contenuto del file in un array di righe
  const lines = data.split('\n');

  // Crea un array vuoto per contenere le righe formattate
  const formattedLines = [];

  // Itera attraverso ogni riga
  lines.forEach((line, index) => {
    // Formatta la riga con il formato specificato
    var obj = parseLine(line);
    console.log(line);
    var formattedLine = `### [${obj.name}](${obj.url})`;
    //togli da obj.url il ?via=futurepedia
    obj.url.split("?")[0];

    formattedLine = formattedLine + "\n-\n" + `- **Link**: ${obj.url.split("?")[0]}\n- **Pricing**: -\n\n`;


    
    // Aggiunge la riga formattata all'array
    formattedLines.push(formattedLine);
  });

  // Crea il contenuto del nuovo file tools.md
  const mdContent = formattedLines.join('');

  // Scrive il contenuto del nuovo file tools.md
  fs.writeFile('tools.md', mdContent, (writeErr) => {
    if (writeErr) throw writeErr;
    console.log('Il file tools.md è stato scritto con successo!');
  });
});


//scrivi una funzione che prende in input una riga cosi
//1.  [Profile Picture AI](https://www.profilepicture.ai/?via=futurepedia)
// e restituisce un oggetto json cosi
// {
//   "id": 1,
//   "name": "Profile Picture AI",
//   "url": "https://www.profilepicture.ai/?via=futurepedia"
// }
function parseLine(line) {
    // ...
    var obj = {
        id: line. split(".")[0] ,
        name: line.split("]")[0].split("[")[1],
        url: line.split(")")[0].split("(")[1]
    }
    return obj;

}

