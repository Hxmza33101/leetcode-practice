class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor(data, next = null) {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        let node = new Node(data);
        let current; 

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current=current.next;
            }
            current.next=node;
        }
        this.size++
    }

    clearListData() {
        this.head= null;
    }

    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data)
            current=current.next;
        }
    }
}

const ll = new linkedList();

ll.insertFirst(10);
ll.insertFirst(20);
ll.insertLast(30);

//ll.printListData();

//ll.insertFirst(60);
//ll.insertLast(100);

//ll.printListData();

ll.clearListData();

ll.printListData();