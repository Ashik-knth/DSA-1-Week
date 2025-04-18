// Merge Sort

/*function MergeSort(arr){
    
    if(arr.length<=1) return arr ;
    
    let left = [] , right = [] ;
    
    let mid = (arr.length/2);
    
    for(let i=0 ; i<mid ; i++){
        left[left.length] = arr[i];
    }
    
    for(let i=mid ; i<arr.length ; i++){
        right[right.length] = arr[i] ;
    }
    
    
    let SortedLeft = MergeSort(left);
    
    let Sortedright = MergeSort(right);
    
    return merge(SortedLeft,Sortedright);
    
}

function merge(left,right){

    let result = [];
    
    let i = 0 , j = 0 ;
    
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            result[result.length] = left[i++];
        }else{
            result[result.length] = right[j++];
        }
    }
    
    while(i<left.length){
        result[result.length] = left[i++];
    }
    
    while(j<right.length){
        result[result.length] = right[j++];
    }
    
    return result ;
}








let nums = [7,8,5,6,4,2,3,1];

console.log("Orginal Array :",nums);

console.log("Sorted Array :",MergeSort(nums)); */


// bubbleSort



/* function strString(char){
    let swapped ;
    let n = char.length ;
    
    for(let i=0 ; i<n-1;i++){
          swapped = false ;
        for(let j=0 ; j<n-1-i;j++){
            if(char[j].toLowerCase() > char[j+1].toLowerCase()){
                [char[j],char[j+1]] = [char[j+1],char[j]];
                swapped = true ;
            }
        }
        
        if(!swapped) break ;
    }
    
    return char ;
}

let names = ["Zebra", "apple", "Lemon", "banana"];

console.log("Sorted:" , strString(names)); 



function bubbleSort(arr){
    
    let swapped ; 
    
    let n = arr.length ;
    
    for(let i=0 ; i<arr.length ; i++){
        
        swapped = false ;
        
        for(let j=0 ; j<n-1-i ; j++){
            if(arr[j+1]<arr[j]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped = true ;
            }
        }
        
        if(!swapped) break ;
    }
    
    return arr ;
    
}





let nums = [3, 1, 4, 2, 5];

console.log("This is the orginal",nums);

console.log("This is the Sorted",bubbleSort(nums)); */



// Quick Sort 


/* function quickSortInPlace( arr , low , high = arr.length-1){
    
    if(low<high){
        
        let pivotindex = partition(arr,low,high);
        
        quickquickSortInPlace(arr,low,pivotindex-1);
        
    }
}

function partition(arr,low,high){
    
    let = pivot[high];
    
    let i = low - 1 ;
    
    for(let j=low ; j<high ; i++){
        
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    
    [arr[i+1],arr[high]] = [arr[high],arr[i+1];
    
    return i+1 ;
}

const nums = [9, 4, 6, 2, 7, 3, 1, 5, 8];
console.log("Sorted:", quickSortInPlace(nums));  */



// Stack Implementation


/*class Stack{
    constructor(){
        this.items = [];
    }
    
    push(element){
        this.items.push(element)
    }
    
    pop(){
        if(this.isEmpty()) return `Stack Underflow : Cannot pop empty stack.`;
        
        return this.items.pop();
    }
    
    peek(){
        if(this.isEmpty()) return null ;
        
        return this.items[this.items.length-1];
    }
    
    isEmpty(){
        
        return this.items.length == 0 ;
    }
    
    Size(){
        return this.items.length ;
    }
    
    Clear(){
        return this.items = [] ;
    }
    
    print(){
        
        if(this.isEmpty()) console.log("Stack is Empty");
        else 
        console.log("Stack Elements is ", this.items);
    }
}

const stack = new Stack();


stack.push(10);

stack.push(20);

stack.push(30);

stack.push(40);

stack.push(50);

stack.print();

console.log(" Peek result :",stack.peek())

console.log("Pop result : ",stack.pop());

console.log("Number element stack : ",stack.Size());

stack.Clear();

stack.print(); 



Revrse Stack -----


function reverseString(str){
    
    const stack = new Stack();
    
    let reversed = "";
    
    for(let char of str){
        stack.push(char);
    }
    
    while(!stack.isEmpty()){
        reversed += stack.pop();
    }
    
    return reversed ;
    
}

console.log(reverseString("hello"));


Valid paranthesses --- 


function Validparenthesses(str){
    
    let stack = [];
    
    let obj = {'(':')' , '{' :'}' , '[' : ']'};
    
    for(let char of str){
        if(obj[char]){
            stack.push(char);
            
            console.log(stack);
        }
        
        
        
       
        else if (obj[stack.pop()] !== char) return  false ;
    }
    
    return stack.length==0;
    
}

console.log(Validparenthesses("()"));



*/


// Using Stack 


/*class Node {
    constructor(value){
        this.value = value ;
        this.next = null ;
    }

}

class Stack{
    constructor(){
        this.top = null ;
        this.size = 0 ;
    }
    
    push(value){
        const node = new Node(value);
        node.next = this.top ;
        this.top = node ;
        this.size++;
    }
    
    pop(){
        if(this.isEmpty()) throw new Error("Stack Underflow ")
        
        const poppedvalue = this.top.value ;
        this.top = this.top.next;
        this.size--;
        
        return poppedvalue ;
    }
    
    peek(){
        if(this.isEmpty()){
            
            return null ;
        }
        
        return this.top.value ;
    }
    
    isEmpty(){
        return this.top == null ;
    }
    
    getSize(){
        return this.size;
    }
    
    clear(){
        this.top = null ;
        this.size = 0 ;
    }
    
    print(){
        let crnt = this.top ;
        let values = "";
        
        while(crnt){
            values+=`${crnt.value} -> `;
            crnt = crnt.next ;
        }
        
        console.log("Values is",values);
    }
}




const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

stack.print();

console.log(stack.pop())

console.log(stack.peek());

console.log(stack.getSize());

*/



/*


USING QUEUE ----


class Queue {
    constructor(){
        this.items = [];
    }
    
    enqueue(value){
        this.items.push(value);
    }
    
    dequeue(){
        if(this.isEmpty()){
            throw new Error("Que is Empty");
        }
        
        return this.items.shift();
    }
    
    peek(){
        if(this.isEmpty()){
            throw new Error("Que is Empty")
        }
        
        return this.items[0];
    }
    
    isEmpty(){
        return this.items.length == 0 ;
    }
    
    size(){
        return this.items.length
    }
    
    print(){
        console.log(this.items.join("<-"));
    }
}

const queue = new Queue ;

console.log(queue.isEmpty());

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log(queue.peek());

queue.print();

console.log(queue.dequeue());

queue.print();



Circulat Queue ---


class CircularQueue {
    constructor(size){
        this.items = new Array(size);
        this.size = size ;
        this.currentlength = 0 ;
        this.rear = -1 ;
        this.front = -1 ;
    }
    
    isFull(){
        return this.currentlength == this.size ;
    }
    
    isEmpty(){
        return this.currentlength == 0 ;
    }
    
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear+1) % this.size ;
            this.items[this.rear] = element ;
            this.currentlength +=1;
            if(this.front == -1){
                this.front = this.rear ;
            }
        }
    }
    
    dequeue(){
        if(this.isEmpty()){
            return null ;
        }
        
        const item = this.items[this.front];
        this.items[this.front] = null ;
        this.front = (this.front + 1) % this.size ;
        this.currentlength -=1
        
        if(this.isEmpty()){
            this.front = -1 ;
            this.rear = -1 ;
        }
        
        return item;
        
    }
    
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        
        return null ;
    }
    
    print(){
        if(this.isEmpty()){
            console.log("Que is Empty");
        }else{
            let str = '';
            for(let i = this.front ; i !== this.rear ; i = (i+1) % this.size){
                str+=this.items[i] + "";
            }
            
            console.log("String is ",str);
        }
    }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.print();

queue.peek();

queue.dequeue();


*/



/*


HASH TABLE ---


class HashTable {
    constructor(size){
        this.table = new Array(size) ;
        this.size = size ;
    }
    

    hash(key){
        
        console.log("heuyyyyy");
        
        let hash = 0 ;
        
        for(let i=0 ; i<key.length ; i++){
            hash+= key.charCodeAt(i);
        }
        
        return hash % this.size ;
    }
    
    set(key,value){
        let index = this.hash(key);
        console.log("Index",index);
        this.table[index] = value;
        console.log(`Inserted ${key}  : ${value} at index ${index}`);
    }
    
    get(key){
        let index = this.hash(key);
        let value = this.table[index];
        console.log(`Retrived from index ${index} : ${value}`);
        
        return value ;
    }
    
    remove(key){
        let index = this.hash(key);
        let removedvalue = this.table[index];
        this.table[index] = undefined ;
        console.log(`Removed key ${key} from index ${index}`);
        
        return removedvalue ;
    }
    
    display(){
        console.log("Hash Table State:");
        for(let i=0 ; i<this.size ; i++){
          if(this.table[i]!==undefined){
                console.log(`${i} => ${this.table[i]} `);
          }
        }
    }
}

const ht = new HashTable(10);

ht.set("apple", 100);
ht.set("banana", 200);
ht.set("grape", 300);

ht.get("apple");
ht.remove("banana");

ht.display();


*/







