class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(value) {
    let newNode = new NodeBox(value);
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  // prepend(value) {
  //   let newNode = new NodeBox(value);
  // }

  // size() {}
  // head() {}
  // tail() {}
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
console.log(headNode);
console.log(headNode.nextNode);
