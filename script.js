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

  prepend(value) {
    let newNode = new NodeBox(value, this.head.nextNode);
    // creates a new node with the reference to the head's next node
    // then sets the head's nextNode to this new node
    // this makes sure the new node has a reference to the previous next node of head
    this.head.nextNode = newNode;
  }

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
    return currentNode.value;
  }

  at(index) {
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      // We just traverse through the list "x" amount of times depending on index/
      // while changing the currentNode variable
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode.value;
  }

  pop() {
    let currentNode = this.head;
    let secondToLastNode;
    while (currentNode.nextNode) {
      secondToLastNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    secondToLastNode.nextNode = null;
  }

  contains(value, find = null) {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      if (currentNode.value !== value) {
        continue;
      } else if (currentNode.value === value) {
        // If find is called, it will return the currentNode instead of testing if linked list contains the value
        // If find is not called, it will just test if list contains value and return true or false
        if (find === null) {
          return true;
        } else {
          return currentNode;
        }
      }
    }
    return false;
  }

  find(value) {
    //Utilizes the contains function that's already made, only difference is setting "find = true"
    return this.contains(value, true);
  }

  toString() {
    let results = "( head ) --> ";
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      results += `( ${currentNode.value} ) --> `;
    }
    return (results += "null");
  }
}

class NodeBox {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let headNode = new NodeBox("head");
let linkedList = new LinkedList(headNode);
linkedList.append("1");
linkedList.append("2");
linkedList.append("3");
linkedList.append("4");
linkedList.append("5");
linkedList.append("6");
linkedList.append("7");
linkedList.append("8");

// Test cases you can try as well.
// console.log(linkedList.head.nextNode.nextNode.nextNode);
// console.log(`Size: ${linkedList.size()}`);
// console.log(`Tail: ${linkedList.showTail()}`);
// console.log(linkedList.showHead());
// console.log(linkedList.head.nextNode);
// linkedList.prepend("1.25");
// linkedList.prepend("1.5");
// console.log(linkedList.head.value);
// console.log(linkedList.head.nextNode.value);
// console.log(linkedList.head.nextNode.nextNode.value);
// console.log(linkedList.head.nextNode.nextNode.nextNode.value);
// console.log(linkedList.head.nextNode.nextNode.nextNode.nextNode.value);
// console.log(linkedList.at(7));
// console.log(linkedList.contains("0"));
// console.log(linkedList.find("1"));
// linkedList.pop();
// console.log(linkedList.toString());
