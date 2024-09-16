const { open } = require('node:fs/promises');

(async () => {
  const file = await open('./UseModule.js');

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();