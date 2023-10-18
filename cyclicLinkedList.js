class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the linked list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Detect a cycle in the linked list using Floyd's Tortoise and Hare algorithm
    hasCycle() {
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;        // Move one step
        fast = fast.next.next;   // Move two steps
  
        if (slow === fast) {
          return true; // Cycle detected
        }
      }
  
      return false; // No cycle found
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  

  linkedList.head.next.next.next = linkedList.head;
  
  const hasCycle = linkedList.hasCycle();
  console.log(hasCycle); 
  