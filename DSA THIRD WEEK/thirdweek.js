/*


class Node{
    constructor(value){
        this.value = value ;
        this.right = null ;
        this.left = null ;
    }
}

class BinaryTree{
    constructor(){
        this.root = null ;
    }
    
    isEmpty(){
        return this.root === null ;
    }
    
    insert(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode ;
        }else{
            this.insertNode(this.root , newNode);
        }
    }
    
    insertNode(root,newNode){
        
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode ;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
        
    }
    
    search(value,root=this.root){
        if(!root){
            return 
        }else{
            if(root.value === value){
                return root.value ;
            }else if (value < root.value){
                return this.search(value,root.left);
            }else{
                return this.search(value,root.right);
            }
        }
    }
    
    inOrder(root=this.root){
       if(root){
            this.inOrder(root.left);
        console.log("Inorder",root.value);
        this.inOrder(root.right);
       }
    }
    
    postOrder(root=this.root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log("Postorder",root.value)
        }
    }
    
    preOrder(root=this.root){
        if(root){
            console.log("Preorder",root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
    
    levelOrder(){
        const queue = [];
        
        queue.push(this.root);
        
        while(queue.length){
            const curr = queue.shift();
            
            console.log("Levelorder",curr.value);
            
            if(curr.left){
                queue.push(curr.left);
            }
            
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
    
    min(root = this.root){
        if(!root.left){
            return root.value ;
        }else{
            return this.min(root.left);
        }
    }
    
    max(root = this.root){
        if(!root.right){
            return root.value ;
        }else{
            return this.max(root.right);
        }
    }
    
    delete(value){
        this.root = this.deleteNode(this.root,value);
    }
    
    deleteNode(root,value){
        if(root === null){
            return root
        }
        
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if (value>root.value){
            root.right = this.deleteNode(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null
            }
            
            if(!root.left) return root.right ;
            
            if(!root.right) return root.left ;
            
            let minRight = this.min(root.right);
            
            root.value = minRight ;
            
            root.right = this.deleteNode(root.right,minRight);
        }
        
        return root ;
    }
    
    countNodes(root = this.root){
        if(root === null){
            return 0;
        }
        
        return 1 + this.countNodes(root.left) + this.countNodes(root.right);
    }
    
    height(root = this.root){
        if(root === null ){
            return 0 ;
        }
        
        return 1 + Math.max(this.height(root.left),this.height(root.right));
    }
    
      
 findClosest(target){
     let current = this.root ;
     
     let closest = current ? current.value : null ;
     
     while(current){
         if(Math.abs(target - current.value) < Math.abs(target - closest)){
             closest = current.value ;
         }
         
         if(target < current.value){
             current = current.left ;
         }else if (target>current.value){
             current = current.right ;
         }else{
             break ;
         }
     }
     
     return closest ;
 }
 
 
isBalanced(root = this.root) {
    function check(node) {
        if (!node) return 0;

        const left = check(node.left);
    
        if (left === -1) return -1;

        const right = check(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }

    return check(root) !== -1;
}

printLeafNodes(root=this.root){
    if(!root) return ; 
    
    if(!root.left && !root.right){
        console.log("Leafnodes",root.value);
        return
    }
    
    this.printLeafNodes(root.left);
    
    this.printLeafNodes(root.right);
}

printNodeDegrees(root=this.root){
    if(!root) return ;
    
    let degree = 0 ;
    
    if(root.left) degree++;
    if(root.right)degree++;
    
    console.log(`Node ${root.value} has degree : ${degree}`);
    
    this.printNodeDegrees(root.left);
    this.printNodeDegrees(root.right);
}

SecoundLargest(root=this.root){
    if(!root || (!root.left && !root.right)){
        console.log("Tree must have atleast 2 nodes");
        return null ;
    }
    
    let current = root ;
    
    while(current){
        if(current.right && !current.right.left && !current.right.right){
            return current.value ;
        }
        
        if(!current.right){
            return this.max(current.left);
        }
        
        current = current.right;
    }
}

 
 
    
}


const bst = new BinaryTree();

bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(15);

console.log("Search value",bst.search(7));

bst.inOrder();

bst.postOrder();

bst.preOrder();

bst.levelOrder();

bst.delete(5);



console.log("Max",bst.max());

console.log("Min",bst.min());

bst.levelOrder();

console.log("Countnodes",bst.countNodes());

console.log("heightof the tree",bst.height());

console.log("findClosest",bst.findClosest(4))

console.log("isBalanced",bst.isBalanced());

bst.printLeafNodes();

bst.printNodeDegrees();

console.log("Secound Largest",bst.SecoundLargest());


 */


/*

Heap -----  MIN HEAP -----


class MinHeap{
    constructor(){
        this.heap = [] ;
    }
    
    ParentIndex(i) { return Math.floor((i-1)/2) ; } 
    LeftChild(i) { return 2 * i + 1 ;}
    RightChild(i) {return 2 * i + 2 ;}
    
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j] , this.heap[i]];
    }
    
    heapifyUp(){
        let index = this.heap.length-1 ;
        
        while(index>0 && this.heap[this.ParentIndex(index)] > this.heap[index]){
            this.swap(index , this.ParentIndex(index) );
            
            index = this.ParentIndex(index);
        }
    }
    
    peek(){
        return this.heap[0] ?? null ;
    }
    
    ExtractMin(){
        if(this.heap.length === null ) return null ;
        if(this.heap.length === 1) return this.heap.pop();
        
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min ;
    }
    
    heapifyDown(){
        let index = 0 ;
        
        let length = this.heap.length ;
        
        while(this.LeftChild(index) < length){
            
            let smallerchild = this.LeftChild(index);
            let rightIndex = this.RightChild(index);
            
            if( rightIndex < length &&  this.heap[rightIndex]<this.heap[smallerchild]){
                smallerchild = rightIndex;
            }
            
            if(this.heap[0] <= this.heap[smallerchild]) break ;
            
            this.swap(index,smallerchild);
            
            index = smallerchild ;
        }
    }
    
    heapSort(){
        let result = [];
        
        let tempHead = [...this.heap];
        
        while(this.heap.length>0){
            result.push(this.ExtractMin());
        }
        
        this.heap = tempHead ;
        
        return result ;
    }
    
    print(){
        console.log(this.heap);
    }
}


const heap = new MinHeap();

heap.insert(10);
heap.insert(4);
heap.insert(15);
heap.insert(1);

heap.print();

console.log("Peek",heap.peek());

console.log("Extraction",heap.ExtractMin());

heap.print();

console.log(heap.heapSort());


HEAP MAX HEAP -----


class Maxheap{
    constructor(){
        this.heap = [];
    }
    
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    
    Parent(i) { return Math.floor((i-1)/2) ; } 
    
    LeftChild(i) { return 2 * i + 1 ; } 
    rightChild(i) { return 2 * i + 2 ; } 
    
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]] ;
    }
    
    heapifyUp(){
        let index = this.heap.length-1 ;
        
        while(index>0 && this.heap[this.Parent(index)] < this.heap[index] ){
           this.swap(index,this.Parent(index));
           index = this.Parent(index);
        }
    }
    
    Peek(){
        return this.heap[0] ?? null ;
    }
    
    extractMax(){
        if(this.heap.length === 0 ) return null ;
        if(this.heap.length === 1) return this.heap.pop();
        
        let Max = this.heap[0];
        
        this.heap[0] = this.heap.pop();
        
        this.heapifyDown()
        
        return Max ;
        
    }
    
    heapifyDown(){
        
        let index = 0 ;
        
        let length = this.heap.length ;
        
        while(this.LeftChild(index) < length ){
            let Largerchild = this.LeftChild(index);
            let rightIndex = this.rightChild(index)
            
            if(rightIndex < length  && this.heap[rightIndex] > this.heap[Largerchild] ){
                Largerchild = rightIndex ;
            }
            
            if(this.heap[0] >= this.heap[Largerchild]) break ;
            
            this.swap(index,Largerchild);
            
            index = Largerchild ;
        }
        
    }
    
    heapSort(){
        let result = [];
        
        let tempHeap = [...this.heap];
        
        while(this.heap.length > 0 ){
            result.push(this.extractMax());
        }
        
        this.heap = tempHeap 
        
        return result ;
    }
  
    
    print(){
        console.log(this.heap);
    }
}


const heap  = new Maxheap();

heap.insert(10);
heap.insert(40);
heap.insert(15);
heap.insert(5);

heap.print();

console.log(heap.heapSort());

heap.print();


*/






