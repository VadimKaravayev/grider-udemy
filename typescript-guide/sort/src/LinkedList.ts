import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    const recur = (item: Node | null): number =>
      item ? 1 + recur(item.next) : 0;

    return recur(this.head);
  }

  at(index: number): Node {
    if (index >= this.length || index < 0) {
      throw new Error('index out of bounds');
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  get values(): number[] {
    let vals = [] as number[];

    if (this.head) {
      let node = this.head as Node | null;
      while (node) {
        vals.push(node.data);
        node = node.next;
      }
    }

    return vals;
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
console.log(list.at(0));
