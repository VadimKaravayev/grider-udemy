#!/usr/bin/env node
const chokidar = require("chokidar");
const debounce = require("lodash.debounce");
const program = require("caporal");
const fs = require("fs");
const { spawn } = require("child_process");
const chalk = require("chalk");

program
  .version("0.0.1")
  .argument("[filename]", "Name of a file to execute")
  .action(async ({ filename }) => {
    const name = filename || "index.js";

    try {
      await fs.promises.access(name);
    } catch (err) {
      throw new Error(`Could not find ${name}`);
    }

    let proc;
    const start = debounce(() => {
      proc?.kill();
      console.log(chalk.blue(">>>>> Starting process"));
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 100);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", start)
      .on("unlink", start);
  });

program.parse(process.argv);

/* 

1. At the top of the file indicate #!/usr/bin/env node
2. Make file executable with chmod +x index.js
3. In package.json 
 "bin": {
    "watchit": "index.js"
  }
4. npm link

*/
