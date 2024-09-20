import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const collection = new NumbersCollection([44, 3, 2, 6, -5, 9]);

collection.sort();

console.log(collection.data);

const charColleciton = new CharactersCollection('bjlqwadpocxq');
charColleciton.sort();
console.log(charColleciton.data);

const linkedList = new LinkedList();
linkedList.add(7);
linkedList.add(4);
linkedList.add(2);
linkedList.add(6);

linkedList.sort();

console.log(linkedList.values);
console.log(linkedList.length);
