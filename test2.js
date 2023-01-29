let data = `
### [Midjourney](https://www.midjourney.com/home)
You have to describe it?
- **Link**: https://www.midjourney.com/home
- **Pricing**: -
`;

let pattern = /(\w+)\s*:\s*(.*)/g;
let lines = data.split('\n');


let fields = lines.map(line => {
  let match = line.match(pattern);
  if (match) {
    return match;
  }
}).filter(match => match);

console.log(fields);

