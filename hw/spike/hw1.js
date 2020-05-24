// 1. 矩阵乘法
const assert = require('assert').strict

function Product(M1, M2) {
  if (M1[0].length !== M2.length) {
    throw new Error("Invalid parameters!")
  }

  let result = [];

  for (let i = 0; i < M1.length; i++) {
    let rowArr = [];
    
    for (let col = 0; col < M2[0].length; col++) {
      let sum = 0;

      for (let j = 0; j < M2.length; j++) {
          sum += (M1[i][j] * M2[j][col]);
      }
      rowArr.push(sum);
    }
    result.push(rowArr);
  }

  return result;
}

function Test_Product() {
  let M1 = [
    [1, 0, 2],
    [-1, 3, 1]
  ];

  let M2 = [
    [3, 1],
    [2, 1],
    [1, 0]
  ];

  assert.strictEqual(
    Product(M1, M2).toString(),
    [
      [5, 1],
      [4, 2]
    ].toString()
  );

  let M3 = [
    [1, 2, 3],
    [4, 5, 6]
  ];

  let M4 = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];

  assert.strictEqual(
    Product(M3, M4).toString(),
    [
      [58, 64],
      [139, 154]
    ].toString()
  );

  let M5 = [
    [2, 1],
    [4, 3]
  ];

  let M6 = [
    [1, 2],
    [1, 0]
  ];

  assert.strictEqual(
    Product(M5, M6).toString(),
    [
      [3, 4],
      [7, 8]
    ].toString()
  );
}

Test_Product();

// 3. 链表
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  get(index) {
    if (index === 0) {
      return this.data;
    }
    return this.next.get(index - 1);
  }

  insert(element, index) {
    if (index == 0) {
      let newNode = new Node(element);
      newNode.next = this;
      return newNode;
    }
    return this.next = this.next.insert(element, index - 1);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  // O(1)
  length() {
    return this._length;
  }

  // O(1)
  append(element) {
    if (this.head === null) {
      this.head = new Node(element);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(element); 
      this.tail = this.tail.next;
    }
    this._length++;
  }

  // O(1)
  append_head(element) {
    let newNode = new Node(element);
    newNode.next = this.head;
    this.head = newNode;
    this._length++;
  }

  // O(n)
  insert(element, index) {
    if (index > this._length) {
      throw Error("out of bounds");
    } else if (index == 0) {
      this.append_head(element);
    } else if (index == this._length) {
      this.append(element);
    } else {
      // index in [1, _length - 1]
      this.head.insert(element, index);
      this._length++;
    }
  }

  // O(n)
  get(index) {
    if (index >= this._length) {
      throw Error("no element")
    }
    if (index == 0) {
      return this.head.data;
    }
    if (index == this._length - 1) {
      return this.tail.data;
    }
    
    return this.head.get(index)
  }

  printList() {
    console.log("list length is: " + this.length());
    
    let curr = this.head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

function Test_LinkedList() {
  let list = new LinkedList()
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  // list.append_head(42);
  list.printList()

  console.log("======================");

  list.insert(100, 1);
  list.insert(101, 0);
  list.insert(200, 7);
  list.insert(8, 8);
  list.insert(42, 5);
  list.printList()

}

Test_LinkedList()