//crea una funzione che legga il file tools.json e restituisca un array di oggetti
//leggi il file tools.json
const data = require('./tools.json');
const fs = require('fs');


const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  
  Object.keys(groupedData).forEach(category => {
    let fileContent = `# ${category}\n\nThis page lists a collection of ${category} tools.\n\n## Tools\n\n`;
    groupedData[category].forEach(item => {
      fileContent += `### [${item.title}](${item.url})\n`;
      fileContent += `<a href="${item.url}">\n`;
      fileContent += `   <img src="${item.screenshot}" width="400" height="300">\n`;
      fileContent += `</a>\n`;
      fileContent += `${item.description}\n`;

      fileContent += `- **Link**: ${item.url}\n`;
      fileContent += `- **Pricing**: ${item.pricing}\n\n`;
    });
    fs.writeFileSync(`${category.split(' ')[1]}.md`, fileContent);
    console.log(fs.existsSync("./" + item.title)  )
    if (!fs.existsSync(item.title)){
      console.log("Directory " + item.title + " does not exist. Creating now...");
      fs.mkdirSync(item.title);
      //crea una directory json all'interno della directory del contenitore
      if (!fs.existsSync(item.title + "/json"))
      fs.mkdirSync(item.title + "/json");

      if (!fs.existsSync(item.title + "/media"))
      fs.mkdirSync(item.title + "/media");
      //filtra il contenuto di tools.json e crea un file json per ogni categoria
      const filteredData = data.filter(item => item.category === category);
      //scrivi il file json nella cartella json della categoria
      fs.writeFile(item.title + "/json/" + file.replace('.md', '.json'), JSON.stringify(filteredData), (err) => {
        if (err) throw err;
       // console.log('The file has been saved!');
      });
      //copia il file md nella directory del contenitore
      fs.copyFile(`${category.split(' ')[1]}.md`, item.title + "/" + `${category.split(' ')[1]}.md`, (err) => {
          if (err) throw err;
          console.log(file + ' was copied to destination.txt');
      });
  }
  });