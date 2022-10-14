class Queue {
  constructor() {
    this.items = [];
    this.head = -1;
    this.tail = -1;
  }
  enqueue(x) {
    if (this.head == -1) {
      this.head++;
    }
    this.tail++;
    this.items[this.tail] = x;
  }
  dequeue() {
    let item = this.items[this.head];
    this.head++;
    return item;
  }
  isEmpty() {
    if (this.head > this.tail) return true;
    return false;
  }
  display() {
    let str = "";
    if (this.head == -1 && this.tail == -1) {
      str = "No items.";
    } else {
      for (let i = this.head; i <= this.tail; i++) {
        str += this.items[i];
      }
    }
    console.log(`Items in the queue: ${str}`);
  }
  front() {
    console.log(`Item at front of queue: ${this.items[this.head]}`);
  }
  clear() {
    this.items = [];
    this.head = -1;
    this.tail = -1;
    console.log("Queue Cleared");
  }
}

class Stack {
  constructor() {
    this.elements = [];
    this.top = -1;
  }

  //Inserting a number at the top of stack.
  push(num) {
    this.top++;
    this.elements[this.top] = num;
  }

  //Return and remove the element at top.
  //return undefinned if stack is empty.
  pop() {
    if (this.top == -1) return undefined;
    let num = this.elements[this.top];
    this.top--;
    return num;
  }

  //prints the element at top
  peek() {
    if (this.top == -1) {
      console.log("Stack Empty");
    } else
      console.log(
        `The element at the top of stack: ${this.elements[this.top]}`
      );
  }

  //Check if the stack is empty.
  isEmpty() {
    if (this.top == -1) {
      console.log(`The stack is empty`);
      return true;
    } else {
      console.log(`The stack is not empty.`);
      return false;
    }
  }

  //Print the size of Stack.
  size() {
    console.log(`Size of the stack: ${this.top + 1}`);
  }

  //Display the elements of stack.
  display() {
    let str = "";
    for (let i = 0; i <= this.top; i++) {
      str += this.elements[i] + " ";
    }
    console.log(`Elements in the stack: ${str}`);
  }

  //Clear the whole stack.
  clear() {
    this.elements = [];
    this.top = -1;
    console.log(`Stack Cleared`);
  }
}

class Graph {
  constructor() {
    this.numOfVertices = 0;
    this.adjList = new Map();
  }
  addVertex(v) {
    this.adjList.set(v, []);
    this.numOfVertices++;
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
  printGraph() {
    let keys = this.adjList.keys();
    for (let key of keys) {
      let values = this.adjList.get(key);
      let dest = "";
      for (let value of values) {
        dest += value + ", ";
      }
      console.log(`${key} ==> ${dest}`);
    }
  }
  bfs(start) {
    let visited = new Map();
    for (let vertex of this.adjList.keys()) {
      visited.set(vertex, false);
    }
    let q = new Queue();
    visited.set(start, true);
    q.enqueue(start);
    while (!q.isEmpty()) {
      let vertex = q.dequeue();
      console.log(vertex);
      let dests = this.adjList.get(vertex);
      for (let i in dests) {
        let dest = dests[i];
        if (!visited.get(dest)) {
          visited.set(dest, true);
          q.enqueue(dest);
        }
      }
    }
  }

  dfs(start) {
    let visited = new Map();
    for (let vertex of this.adjList.keys()) {
      visited.set(vertex, false);
    }
    visited.set(start, true);
    this.dfsUtil(start, visited);
  }
  dfsUtil(start, visited) {
    console.log(start);
    let dests = this.adjList.get(start);
    for (let i in dests) {
      let dest = dests[i];
      if (!visited.get(dest)) {
        visited.set(dest, true);
        this.dfsUtil(dest, visited);
      }
    }
  }
}

class weightedGraph {
  constructor() {
    this.numOfVertices = 0;
    this.adjList = new Map();
  }
  addVertex(v) {
    this.numOfVertices++;
    this.adjList.set(v, []);
  }
  addEdge(to, from, weight) {
    this.adjList.get(to).push({ node: from, weight: weight });
    this.adjList.get(from).push({ node: to, weight: weight });
  }
  printGraph() {
    let keys = this.adjList.keys();
    for (let key of keys) {
      let destsList = "";
      let dests = this.adjList.get(key);
      for (let dest of dests) {
        destsList += `${dest["node"]}(${dest["weight"]})` + ", ";
      }
      console.log(`${key} ==> ${destsList}`);
    }
  }
}

let g = new Graph();
g.addVertex("Patna");
g.addVertex("Delhi");
g.addVertex("Gurgaon");
g.addVertex("Vellore");
g.addVertex("Coimbatore");
g.addVertex("Mumbai");
g.addEdge("Patna", "Delhi");
g.addEdge("Patna", "Mumbai");
g.addEdge("Patna", "Vellore");
g.addEdge("Delhi", "Gurgaon");
g.addEdge("Delhi", "Mumbai");
g.addEdge("Vellore", "Coimbatore");
g.printGraph();
console.log("-----BFS:-----");
g.bfs("Vellore");
console.log("-----DFS:-----");
g.dfs("Vellore");

let wg = new weightedGraph();
console.log("\n\nNew Weighted Graph");
wg.addVertex("Patna");
wg.addVertex("Delhi");
wg.addVertex("Gurgaon");
wg.addVertex("Vellore");
wg.addVertex("Coimbatore");
wg.addVertex("Mumbai");
wg.addEdge("Patna", "Delhi", 1);
wg.addEdge("Patna", "Mumbai", 1);
wg.addEdge("Patna", "Vellore", 1);
wg.addEdge("Delhi", "Gurgaon", 1);
wg.addEdge("Delhi", "Mumbai", 1);
wg.addEdge("Vellore", "Coimbatore", 1);
wg.printGraph();
