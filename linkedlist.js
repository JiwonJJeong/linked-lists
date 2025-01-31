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
    // head > head> head > null
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

    const pop = 

    return {head,tail,append, prepend, size, at};
}

// Node contains value property, nextNode

const Node = function(value = null, nextNode = null){
    return{
        value,
        nextNode,
    }
}

export {LinkedList, Node};