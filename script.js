class LinkedList {
  constructor(head) {
    this.head = head; // sets the head reference
    this.length = 0;
  }

  append(value) {
    let newNode = new NodeBox(value);
    let currentNode = this.head;
    while (currentNode.nextNode) {
      //checks to see if nextNode exists.
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    this.length++;
  }

  // prepend(value) {
  //   let newNode = new NodeBox(value);
  // }

  size() {
    return this.length;
  }

  showHead() {
    return this.head;
  }

  showTail() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  // at(index) {}
  // pop() {}
  // contains(value) {}
  // find(value) {}
  // toString() {}
}

class NodeBox {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let headNode = new NodeBox("head");
let linkedList = new LinkedList(headNode);
linkedList.append("2");
linkedList.append("3");
linkedList.append("4");
linkedList.append("5");
linkedList.append("6");
linkedList.append("7");
linkedList.append("8");
linkedList.append("9");
// console.log(linkedList.head.nextNode.nextNode.nextNode);
console.log(`Size: ${linkedList.size()}`);
console.log(linkedList.showTail());
