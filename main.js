import {LinkedList, Node} from "./linkedlist.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());   // dog>cat>parrot>hamster>snake>turtle>null
console.log(list.size());       // 6
console.log(list.tail().value); // turtle

list.prepend("new first");
list.pop();

console.log(list.at(3).value);  // cat

list.insertAt("hello",3);
console.log(list.toString());   // new first>dog>hello>cat>parrot>hamster>snake>null
list.removeAt(3);
console.log(list.toString());   // new first>dog>cat>parrot>hamster>snake>null

console.log(list.head().value); // new first
console.log(list.find("turtle"));       // null
console.log(list.find("new first"));    // 1
console.log(list.contains("parrot"));   // true