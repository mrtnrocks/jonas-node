const fs = require('fs');

// Blocking Synchronous Way
//const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
//console.log(textIn);
//const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', textOut);
//console.log('File written');

// Non-Blocking Async Way
fs.readFile('./txt/start.txt', 'utf-8',  (err, data1) => {
    if (err) return console.log('ERROR');

    fs.readFile(`./txt/${data1}.txt`, 'utf-8',  (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8',  (err, data3) => {
            console.log(data3);

            // write all data in one file
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf-8', (err) => {
                
                console.log('The file has been saved!');
              });
          });
      });
  });
  console.log('Will read file!');