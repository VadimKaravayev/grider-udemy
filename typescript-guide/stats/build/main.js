"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
const matches = reader.data;
console.log(matches);
//# sourceMappingURL=main.js.map