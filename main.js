import {LinkedList, Node} from "./linkedlist.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size());
console.log(list.tail().value);

list.prepend("new first");
list.pop();

console.log(list.head().value);
console.log(list.find("turtle"));
console.log(list.find("new first"));
console.log(list.contains("parrot"));