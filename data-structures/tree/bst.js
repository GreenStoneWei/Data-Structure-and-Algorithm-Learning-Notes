function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.push = function(value) {
    const root = this.root;

    if (!root) {
        this.root = new Node(value);
        return;
    }

    let currentNode = root;
    const newNode = new Node(value);

    while(currentNode){
        if (value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else {
                currentNode = currentNode.left;
            }

        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

let bst = new BinarySearchTree();
bst.push(2);
bst.push(4);
bst.push(8);
bst.push(1);
bst.push(5);
console.log(bst);