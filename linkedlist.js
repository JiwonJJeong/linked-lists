// LinkedList represents full list
const LinkedList = function(){

    let headNode = null;
    const head = function(){
        return headNode;
    }

    const tail = function(){
        let node = headNode;
        while (node.nextNode != null){
            node = node.nextNode;
        }
        return node;
    }
    
    const append = function(value){
        if (headNode == null){
            headNode = new Node(value);
        } else {
            tail.nextNode = new Node(value);
        }
    }

    const prepend = function(value){
        if (headNode == null){
            headNode = new Node(value);
        } else {
            headNode = new Node(value, headNode);
        }
    }

    const size = function(){
        let count = 0;
        if (headNode == null){
            return count;
        } else{
            count++;
        }
        let node = headNode;
        while (node.nextNode != null){
            node = node.nextNode;
            count++;
        }
        return count;
    }

    // count index from 1
    const at = function(index){
        if (index <= 0){
            return null;
        }
        let node = headNode;
        while (index > 1){
            node = node.nextNode;
            index--;
            if (node == null){
                return null;
            }
        }
        return node;
    }

    const pop = function(){
        let secondToLastIndex = size() - 1;
        let secondToLastNode = at(secondToLastIndex);
        secondToLastNode.nextNode = null;
    }

    // returns true if value passed is in list, else returns false
    const contains = function(value){
        let node = headNode;
        while(node != null){
            if (node.value == value){
                return true;
            } else {
                node = node.nextNode;
            }
        }
        return false;
    }

    // returns index of node containing value, or null if not found
    const find = function(value){
        let node = headNode;
        let index = 1;
        while(node != null){
            if (node.value == value){
                return index;
            } else {
                node = node.nextNode;
                index++;
            }
        }
        return null;
    }

    // returns string of node values in format "(value) -> (value) -> null"
    const toString = function(){
        if (headNode == null){
            return null;
        }
        let string = headNode.value;
        let node = headNode.nextNode;
        while (node != null){
            string += ` -> ${Node.value}`;
            node = node.nextNode;
        }
        string += "null";
        return string;
    }

    return {head,tail,append, prepend, size, at, pop, contains, find, toString};
}

// Node contains value property, nextNode

const Node = function(value = null, nextNode = null){
    return{
        value,
        nextNode,
    }
}

export {LinkedList, Node};