
// Without Tail Code

// class Node{
//     constructor(value){
//     this.value = value ;
//     this.next = null;
//     }

//  }

//  class LinkedList {
//      constructor (){
//          this.head = null;
//          this.size = 0 ;
//      }


//      isEmpty(){
//          return this.size == 0 ;
//      }

//      getSize(){
//          return this.size ;
//      }

//      prepend(value){

//          let node = new Node(value)
//          if(this.isEmpty()){
//              this.head = node ;
//          }else{
//              node.next = this.head ;
//              this.head = node;

//          }

//          this.size++;
//      }


//      append(value){
//        const node1 = new Node (value) ;

//        if(this.isEmpty()){
//            this.head = node1 ;
//        }else{
//           let prev = this.head; 

//           while(prev.next){
//              prev = prev.next ;
//           }

//           prev.next = node1 ;
//        }

//        this.size++ ;


//      }

//     insert(value,index){

//         if(index<0 || index> this.size){
//             return;
//         }

//         if(index===0){
//             this.prepend(value)
//         }else{

//             const node = new  Node(value);

//             let prev = this.head;

//             for(let i=0; i<index-1 ; i++){
//                 prev = prev.next ;
//             }

//             node.next = prev.next ; 
//             prev.next = node ; 
//             this.size++;
//         }

//     }

//     removeFrom(index){

//         if(index<0 || index>=this.size){
//             return null ;
//         }

//         let removeNode ;

//         if(index ===0 ){
//             removeNode = this.head;
//             this.head = this.head.next;
//         }else{
//             let prev = this.head;
//             for(let i=0 ; i < index -1 ; i++ ){
//                 prev = prev.next ;
//             }

//             removeNode = prev.next;
//             prev.next = removeNode.next;
//         }

//         this.size--

//         return removeNode.value;

//     }


//     removeValue(value){
//        if(this.isEmpty()){
//         return null ;
//        }

//        if(this.head.value === value){
//          this.head = this.head.next;
//          this.size--;
//          return `Node has been deleted ${value}`;
//        }else{
//           let prev = this.head;
//           while(prev.next && prev.next.value!==value){
//             prev = prev.next;
//           }

//           if(prev.next){
//             let removeNode = prev.next;
//             prev.next = removeNode.next;
//             this.size--;
//             return value;
//           }

//           return null ;
//        }
//     }


//     search(value){
//         if(this.isEmpty()){
//            return -1 ;   
//         }

//         let i=0;
//         let curr = this.head ;

//         while(curr){
//             if(curr.value === value){
//                 return i ;
//             }

//             curr = curr.next;
//             i++;
//         }

//         return -1 ;
//     }

//     reverse(){
//         let prev = null;
//         let curr = this.head;

//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }

//         this.head = prev ;
//     }

//      print(){
//          if(this.isEmpty()){
//              console.log(`List is empty`);

//          }else{
//              let curr = this.head ;
//              let listvalues = `` ;

//              while(curr){
//                  listvalues+= `${curr.value} `;
//                  curr = curr.next ;
//              }

//              console.log(listvalues);

//          }
//      }
//  }

//  let link = new LinkedList() ;



//  link.insert(10,0);

//  link.print();


//  link.insert(20,0);

//  link.print();

//  link.insert(30,1);

//  link.insert(15,2);

//  link.print();

// console.log(link.search(30));

// link.reverse();

// link.print();




//  console.log("link", link)





// With Tail Code 




// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         let node = new Node(value);

//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }

//         this.size++;
//     }

//     append(value) {
//         let node = new Node(value);

//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }

//         this.size++;
//     }

//     removeFromFront(){

//         if(this.isEmpty()){
//             return null;
//         }

//         const value = this.head.value;
//         this.head = this.head.next;
//         this.size--;
//         return value ;
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null ;
//         }

//         const value = this.tail.value;

//         if(this.size==1){
//             this.head = null ;
//             this.tail = null ;
//         }else{

//             let prev = this.head.next;

//             while(prev.next!==this.tail){
//                 prev = prev.next;
//             }

//             prev.next = null ;

//             this.tail = prev ;
//         }

//         this.size--;

//         return value ;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("No nodes found. The list is empty.");
//         } else {
//             let curr = this.head;
//             let listValues = "";

//             while (curr) {
//                 listValues += `${curr.value} ->  `;
//                 curr = curr.next;
//             }

//             console.log("List values:", listValues.trim());
//         }
//     }
// }

// const list = new LinkedList();

// console.log(list.isEmpty()); // true
// console.log(list.getSize()); 

// list.prepend(10);
// console.log("After prepend(10):", list);

// list.append(20);
// console.log("After append(20):", list);

// list.prepend(30);
// console.log("After prepend(30):", list);

// list.append(25);
// console.log("After append(25):", list);

// console.log("Remove first element",list.removeFromFront());

// console.log("After removing first element :", list);


// console.log("Remove last element",list.removeFromEnd());

// console.log("After removing last  element :", list);

// list.print(); 




// Lnkedn List Stack


// class LinkedListStack {

//     constructor(){
//         this.list = new LinkedList();
//     }

//     push(value){
//      this.list.prepend(value);
//     }

//     pop(){
//         return this.list.removeFromFront()
//     }

//     peek(){
//         return this.list.head.value;
//     }

//     isEmpty(){
//         return this.list.isEmpty();
//     }

//     getSize(){
//         return this.list.getSize();
//     }

//     print(){
//         return this.list.print();
//     }

// }

// const Stack = new LinkedListStack();

// console.log(Stack.isEmpty());

// Stack.push(10);
// Stack.push(20);
// Stack.push(30);

// console.log(Stack.getSize());

// Stack.print();


// Linkedn List Quebased

// class LinkedListQueue{
//     constructor(){
//         this.list = new LinkedList();
//     }

//     enqueue(value){
//         this.list.append(value);
//     }

//     dequeue(){

//         return this.list.removeFromFront();

//     }

//     peek(){

//         return this.list.head.value;

//     }

//     isEmpty(){

//       return this.list.isEmpty();

//     }

//     getSize(){

//         return this.list.getSize();

//     }

//     print(){
//         return this.list.print();
//     }
// }

// const Que = new LinkedListQueue();


// console.log(Que.isEmpty());

// Que.enqueue(10);
// Que.enqueue(20);
// Que.enqueue(30);
// Que.enqueue(40);

// console.log(Que.getSize());

// Que.print();

// Que.dequeue();

// Que.print();




// APPENDING METHOD USE NODE ADD


// class Node{
//     constructor(value){
//         this.value = value ;
//         this.next = null;
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0 ;
//     }


//     isEmpty(){
//         return this.size == 0 ;
//     }

//     getSize(){
//         return this.size ;
//     }

//     append(value){

//         let node = new Node(value);

//         if(this.isEmpty()){

//         this.head = node ;
//         this.tail = node;

//         }else{
//             this.tail.next = node;
//             this.tail = node;
//         }

//         this.size++;
//     }

//     print(){

//         if(this.isEmpty()){
//             console.log('The list is Empty no node found');   
//         }else{
//             let curr = this.head;
//             let listedvalues = ``;
//             while(curr){
//               listedvalues+= `${curr.value} -> `;
//               curr = curr.next;
//             }
//             console.log("This is the values ",listedvalues);
//         }
//     }


// }


// list = new LinkedList();

// console.log("empty checking",list.isEmpty());

// console.log("The size of linked list",list.getSize());


// list.append(10);

// list.append(20);

// list.append(30);

// list.append(40);

// list.append(50);

// console.log("empty checking",list.isEmpty());

// console.log("The size of linked list",list.getSize());

// list.print();



// ALL IN ONE CLASSS


// class Node {
//     constructor(value) {

//         this.value = value;
//         this.next = null;
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }


//     isEmpty() {
//         return this.size == 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value){
//       let node = new Node(value)

//       if(this.isEmpty()){
//         this.head = node;
//         this.tail = node;
//       }else{
//         node.next = this.head;
//         this.head = node;
//       }
//       this.size++;
//     }


//     append(value) {

//         let node = new Node(value);

//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;

//             this.tail = node;
//         }

//         this.size++;

//     }

//     removeFromFront() {
//         if (this.isEmpty()) {
//             return `The node is null`
//         }
//         const value = this.head.value;

//         this.head = this.head.next;

//         this.size--;
//         return value
//     }


//    removeFromend(){
//       if(this.isEmpty()){
//         return null;
//       }

//       let value = this.tail.value;

//       if(this.size==1){
//         this.head = null;
//         this.tail = null;
//       }else{

//         let prev = this.head.next;

//         while(prev.next!==this.tail){
//             console.log("while loop working");

//            prev = prev.next;
//         }

//         prev.next = null;
//         this.tail = prev;
//       }

//       this.size--;
//    }

//     reverse(){
//         let prev = null;
//         let current = this.head;
//         this.tail = this.head;

//         while(current){
//             let next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }

//         this.head = prev;
//     }


//     findMiddle(){
//         let slow = this.head;
//         let fast = this.head;

//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         return slow ? slow.value : null
//     }


//     hasCycle() {
//         let slow = this.head;
//         let fast = this.head;

//         while (fast && fast.next) {
//             slow = slow.next;
//             fast = fast.next.next;

//             if (slow === fast) {
//                 return true;
//             }
//         }

//         return false;
//     }

//    removeMiddleNode(){
//      if(!this.head || !this.head.next){
//         console.log("List is too short to remove a middle node.");
//         return 
//      }

//      let prev = null;
//      let slow = this.head;
//      let fast = this.head;

//      while(fast && fast.next){
//         prev = slow;

//         slow = slow.next;

//         fast  = fast.next.next;
//      }

//      prev.next = slow.next;

//      this.size--;
//    }


//    removeDuplicates(){
//      if(!this.head) return;

//      let seen = new Set();
//      let current = this.head;
//      let prev = null;

//      while(current){
//         if(seen.has(current.value)){
//             prev.next = current.next;
//             this.size--;
//         }else{
//             seen.add(current.value);
//             prev = current;
//         }
//         current = current.next;
//      }
//    }

//     print() {
//         if (this.isEmpty()) {
//             console.log("No nodes found. The list is empty");

//         } else {
//             let curr = this.head;
//             let listedvalues = ``;

//             while (curr) {
//                 listedvalues += `${curr.value} -> `
//                 curr = curr.next;
//             }


//             console.log("This is head posisition", this.head);


//             console.log("These are the values ", listedvalues);

//         }
//     }
// }


// const list = new LinkedList();

// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(20);
// list.append(50);

// list.print();

// console.log(list.findMiddle());

// list.removeDuplicates();

// list.print();




// console.log("Size of the list:", list.getSize());


// DOUBLE LINKEDLIST


/*class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }

    append(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    fromArray(arr){

      arr.forEach((value)=>this.append(value));
    }


    preppend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    }

      // Display the list forward


       displayForward() {
        let current = this.head;
        let result = "Forward: ";
        while (current) {
            result += current.value + " <-> ";
            current = current.next;
        }
        console.log(result + "NULL");
    }

    // Display the list backward


    displayBackward() {
        let current = this.tail;
        let result = "Backward: ";
        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        console.log(result + "NULL");
    }


    print() {
        if (this.isEmpty()) {
            console.log("No nodes found this is null");

        } else {
            let curr = this.head;
            let listedvalues = ``;

            while (curr) {
                listedvalues += `${curr.value} -> `;
                curr = curr.next;

            }

            console.log("This is the values",listedvalues);
            
        }
    }
}

const dll = new DoublyLinkedList();

let arr = [1,2,3,4,5,6,7,8]

dll.fromArray(arr);
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.append(50);
dll.preppend(5)

dll.print();


console.log("This entire linked list ",dll);*/



/*class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0 ;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size==0;
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
          this.head = node;
          this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    preppend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head
            this.head = node;
        }

        this.size++;
    }

    removeFront(){
        if(this.isEmpty()){
            console.log("node is null ");
            
        }

        let value = this.head.value;

        this.head = this.head.next;

        this.size--;

        return value;
    }


    removeEnd(){
        if(this.isEmpty()){
            console.log("No nodes null");      
        }
        
        let value = this.tail.value;

        if(this.size==1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head.next ;
            while(prev.next!==this.tail){
                prev = prev.next;
            }

            prev.next = null;
            this.tail = prev;

            this.size--;
        }

        return value;

    }

   
    reverse(){
        if(this.isEmpty()){
            console.log("null");
            return;  
        }

        let prev = null;
        let current = this.head;
        this.tail = this.head;

        while(current){
            let next = current.next;

            current.next = prev;

            prev = current;
            current = next;
        }

        this.head = prev;
    }

    findMiddle(){
        if(this.isEmpty()){
           console.log("There are no nodes found");
           
        }

        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow ? slow.value : null;
    }


    hasCycle(){
        if(this.isEmpty()){
            console.log("There are no nodes found");
            
        }

        let slow = this.head;
        let fast = this.head;

        while(fast&&fast.next){
            slow = slow.next;
            fast = fast.next.next;

            if(slow === fast){
                return true;
            }
        }

        return false ;
    }

    removemiddlenode(){
        if(!this.head || !this.head.next){
        console.log("list is very short");
            return;
        }

        let prev = null;
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev.next = slow.next;
        this.size--;
    }

    removeDuplicates(){
        if(this.isEmpty()){
            console.log("the list is empty"); 
        }

        let seen = new Set();

        let current = this.head;
        let prev = null ;

        while(current){
            if(seen.has(current.value)){
                prev.next = current.next;
            }else{
                seen.add(current.value);
                prev = current
            }

            current = current.next;
        }
    }


    print(){
        if(this.isEmpty()){
            console.log("NO nodes found");
        }else{
            let curr = this.head;
            let listedvalues = ``;

            while(curr){
              listedvalues+=`${curr.value} -> `
              curr = curr.next;
            }

            console.log(listedvalues);
            
        }


    }



}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

list.print(); */



/*let temp = list.head;
while (temp.next) {
    temp = temp.next; 
}
temp.next = list.head.next.next; 

console.log(list.hasCycle()); */


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null;
//         this.prev = null;
//     }
// }



// class DoublyLinkedList{

// }


class Node{
    constructor(value){
        this.value = value;
        this.next = null ;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0 ;
    }

    isEmpty(){
        return this.size === 0 ;
    }

    getSize(){
        return this.size ;
    }

    append(value){

        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node
        }

       this.size++;
        
    }


    removeend(){
        if(this.isEmpty()){
            console.log("null");
            
        }

        if(this.size==1){
            this.head = null;
            this.tail = null;
        }else{
            let curr = this.head.next;

            while(curr.next!==this.tail){
                curr = curr.next;
            }

            curr.next = null;
            this.tail = curr;
        }

        this.size--;
    }

    print(){
        if(this.isEmpty()){
            console.log("No nodes found null");  
        }
       let current = this.head;
       let listedvalues = "";

       while(current){
         listedvalues+= `${current.value} -> `;

         current = current.next
       }

       console.log("Listedvalues : ",listedvalues);
       
    }
  
}

const list = new LinkedList();


list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

list.print();

list.removeend();
list.removeend();


list.print();