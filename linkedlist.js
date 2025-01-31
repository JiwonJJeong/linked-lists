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

    return {head,tail,append, prepend, size, at, pop, contains, find};
}

// Node contains value property, nextNode

const Node = function(value = null, nextNode = null){
    return{
        value,
        nextNode,
    }
}

export {LinkedList, Node};