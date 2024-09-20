"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const collection = new NumbersCollection_1.NumbersCollection([44, 3, 2, 6, -5, 9]);
collection.sort();
console.log(collection.data);
const charColleciton = new CharactersCollection_1.CharactersCollection('bjlqwadpocxq');
charColleciton.sort();
console.log(charColleciton.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(7);
linkedList.add(4);
linkedList.add(2);
linkedList.add(6);
linkedList.sort();
console.log(linkedList.values);
console.log(linkedList.length);