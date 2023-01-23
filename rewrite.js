const fs = require('fs');


//crea una funzione chiamata file a cui passi un nome file
function parseFile(fileName) {

// Legge il file tools.txt
fs.readFile("./filedalavorare/" + fileName, 'utf8', (err, data) => {
  if (err) throw err;

  // Divide il contenuto del file in un array di righe
  const lines = data.split('\n');
  const TITLE = lines[0];
  //elimina dalla lista la prima e la seconda riga
  lines.splice(0, 2);
  // Crea un array vuoto per contenere le righe formattate
  const formattedLines = [];
  // Itera attraverso ogni riga
  lines.forEach((line, index) => {
    // Formatta la riga con il formato specificato
    var obj = parseLine(line);
    console.log(line);
    var formattedLine = `### [${obj.name}](./Categories/${obj.url})`;
    //togli da obj.url il ?via=futurepedia
    obj.url;

    formattedLine = formattedLine + "\n-\n" + `- **Link**: ${obj.url}\n- **Pricing**: -\n\n`;


    
    // Aggiunge la riga formattata all'array
    formattedLines.push(formattedLine);
  });

  // Crea il contenuto del nuovo file tools.md
  var mdContent = TITLE + "\n\n";
  mdContent = mdContent + "This page lists a collection of" + TITLE.substring(1) + " tools.\n\n"
  mdContent = mdContent + "## Tools\n\n"
   
  mdContent = mdContent + formattedLines.join('');

  // Scrive il contenuto del nuovo file tools.md
  //crea una variabile che abbiamo il nome del file che voglio creare formato dal TITLE tutto in minuscolo senza spazi con estensione md
  //e deve saltare il primo carattere

  var fileName = TITLE.substring(1).toLowerCase().split(" ").join("") + ".md";


  
  fs.writeFile(fileName, mdContent, (writeErr) => {
    if (writeErr) throw writeErr;
    console.log('Il file tools.md è stato scritto con successo!');
    //cancella il file passato come parametro
    

  });
});
}

//leggi un cartella e per ogni file chiami la funzione file
fs.readdir("./filedalavorare", (err, files) => {
  files.forEach(file => {
    console.log(file);
    if(fs.statSync("./filedalavorare/"+file).isFile()){
      console.log(file);
      parseFile(file);
      }
  });
});
//scrivi una funzione che prende in input una riga cosi
//1.  [Profile Picture AI](./Categories/https://www.profilepicture.ai)
// e restituisce un oggetto json cosi
// {
//   "id": 1,
//   "name": "Profile Picture AI",
//   "url": "https://www.profilepicture.ai"
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

