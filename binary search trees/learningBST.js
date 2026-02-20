//This is my attempt at creating a BST from scratch without following a tutorial.

/*
class binarySearchTree {
    constructor(value, one, two) {
        this.value = value;
        if (one >= value && two <= value) {
            this.right = one;
            this.left = two;
        } else if (one <= value && two >= value) {
            this.right = two;
            this.left = one;
        }
    }

}

const a = new binarySearchTree(1, null, null);
const b = new binarySearchTree(2, null, null);
const c = new binarySearchTree(3, a, b);

console.log(c.left);
*/

//The reason this doesn't work is because BSTs don't grow from top down, they grow dynamically. The correct class structure is this:

class bst {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new bst(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new bst(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

const tree = new bst(4);
tree.insert(10);
tree.insert(2);
tree.insert(49);

console.log(tree);

// BSTs use the logic of a linked list, however instead of having a tail, they have left and right pointers. 