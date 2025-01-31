// LinkedList represents full list
const LinkedList = function(){

    let headNode = null;
    const head = function(){
        return headNode;
    }

    const tail = function(){
        let node = headNode.nextNode;
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

    return {head,tail,append, prepend};
}

// Node contains value property, nextNode

const Node = function(value = null, nextNode = null){
    return{
        value,
        nextNode,
    }
}

export {LinkedList, Node};