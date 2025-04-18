
// Fibonacci Sequence (nth Fibonacci Number)

/*function recursiveFibonacci(n){
    if(n<2){
        return n 
    }

    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(6));*/


// Factorial number 

// function recursiveFactorial(n){
//   if(n==0) return 1
//   return n * recursiveFactorial(n-1);
// }

// console.log(recursiveFactorial(5));



// Give the sorted number array of 'n' elements and target elements  index return in the array || if target element not found return -1

// let nums = [1,2,3,4,5];

// function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) return -1; 

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) 
//         return binarySearchRecursive(arr, target, mid + 1, right); 
//     else 
//         return binarySearchRecursive(arr, target, left, mid - 1); 
// }


// console.log(binarySearchRecursive(nums, 4)); 


// Print first 10 elements of Fibonacci series



/*function recursiveFibonacci(n){
    if(n<2){
        return n 
    }

    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

for(let i=0 ; i<10;i++){
    console.log(recursiveFibonacci(i));
    
}*/


/*function Fibonacci(n){
  let fib = [0,1];
  for(let i=2;i<n;i++){
     fib[i] = fib[i-1] + fib[i-2];
  }

  console.log(fib.join(", "));
  
}

Fibonacci(10)*/





// Countdown Function


/*function countdown(n){

    if(n<=0){
        console.log("Done");
        return;   
    }

    console.log(n);

    countdown(n-1);   

}

countdown(5)*/


// SUM OF FIRST N NUMBERS


/*function sum(n){

    console.log("n",n);
    
  if(n==0) return 0 ;

  return n+sum(n-1);
}

console.log(sum(5));*/




// Rverse a String

/*function reverse(str){
    if(str.length==0) return "" ;
    return str[str.length-1] + reverse(str.slice(0,-1));
}

console.log(reverse("hello")); */



// Check if a String is a PAllindrome

/* function isPallindrome(str){
  if(str.length<=1) return true;
  if(str[0] !== str[str.length-1]) return false;
  return isPallindrome(str.slice(1,-1))
}  

console.log(isPallindrome("hello")); */ 


// Power of a Number (X^N)


/*function Power(x,n){
    if(n==0) return 1
    return x * Power(x,n-1);
}

console.log(Power(2,3));*/



// count Digits in a number 


/* function countDigits(n){
  console.log("nnnnnnn",n);
  
  if(n<10) return 1;

  return 1 + countDigits(Math.floor(n/10));
}

console.log(countDigits(123456)); */


// Sum of an array


/*function sumArray(arr){
  if(arr.length==0)return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1,2,3,4,5]));*/



/*function binarySearch(arr,target,left=0,right=arr.length-1){
   if(left>right) return -1 ;
   let mid = Math.floor((left+right)/2);
   if(arr[mid] === target) return mid;
   if(arr[mid]>target) return binarySearch(arr,target,left,mid-1);
   return binarySearch(arr,target,mid+1,right);
}


console.log(binarySearch([1, 2, 3, 4, 5], 4)); */



/*function removeL(str) {
  if (str.length === 0) return ""; // Base case: return empty string

  let firstChar = str[0] === "l" ? "" : str[0]; 
  return firstChar + removeL(str.slice(1)); 
}

console.log(removeL("hello")); // Output: "heo" */


