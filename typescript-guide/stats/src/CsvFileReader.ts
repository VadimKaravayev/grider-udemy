import fs from 'fs';
import { parseToDate } from './utils';

export abstract class CsvFileReader<T> {
  data: Array<T> = [];

  constructor(public filename: string) {}

  read(): void {
    const filecsv = fs.readFileSync(this.filename, { encoding: 'utf-8' });
    this.data = filecsv
      .split(/\n/)
      .map((str) => str.split(','))
      .map(this.mapRow);
  }

  abstract mapRow(row: Array<string>): T;
}
