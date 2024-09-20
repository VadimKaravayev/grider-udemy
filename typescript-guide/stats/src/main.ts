import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();

const matches = reader.data;

console.log(matches);
