import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.getByIndex(leftIndex) > this.getByIndex(rightIndex);
  }

  private getByIndex(index: number): string {
    return this.data[index].toLocaleLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join('');
  }
}
