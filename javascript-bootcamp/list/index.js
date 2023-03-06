#!/usr/bin/env node

import fs from "node:fs";
import chalk from "chalk";
import path from "node:path";

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

//cwd = current working directory
fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }
  const statPromises = filenames
    .map((filename) => path.join(targetDir, filename))
    .map(lstat);
  const allStats = await Promise.all(statPromises);

  allStats.forEach((stats) => {
    const index = allStats.indexOf(stats);
    console.log(
      stats.isFile() ? filenames[index] : chalk.bold(filenames[index])
    );
  });
});

//make this file executable
//chmod +x

//make this file be available globally on your machine
//npm link
