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
      fileContent += `   <img src="media/${item.screenshot}" width="400" height="300">\n`;
      fileContent += `</a>\n`;
      fileContent += `${item.description}\n`;

      fileContent += `- **Link**: ${item.url}\n`;
      fileContent += `- **Pricing**: ${item.pricing}\n\n`;
    });
    fs.writeFileSync(`${category.split(' ')[1]}.md`, fileContent);
  });