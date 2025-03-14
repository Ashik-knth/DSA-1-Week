
// fibnonci serires 

// function fibnonci(n){
//     let fib = [0,1];
    
//     for(let i=2; i<n; i++){
//        fib[i] = fib[i-1] + fib[i-2]
//     }

//     return fib ;

// }

// console.log(fibnonci(7));


// prime numbers find

// function isPrime(n) {
//     if (n < 2) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) { 
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(6));
// console.log(isPrime(7));


/*function isPowerofTwo(n){
    if(n<1){
        return false ;
    }

    return (n& (n-1)) ===0
    
}

console.log(isPowerofTwo(1));
console.log(isPowerofTwo(2));
console.log(isPowerofTwo(5)); */


// Find The largest and smallest element in array 

/*function findMinMax(arr){

    let min = arr[0] , max = arr[0]

    for(let i=1; i<arr.length;i++){
        if(arr[i]<min) min = arr[i];
        else if(arr[i]>max) max= arr[i];
    }

    return {minimmum : min , maximmum : max}

}

console.log(findMinMax([3, 1, 7, 8, 2, 6]));*/


// Reverse an array 



/*function reversArray(arr){
  let start = 0 , end = arr.length-1;

  while(start<end){
     let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
  }
  return arr ;
}*/


// console.log(reversArray([1,2,3,4,5]));


// Find the Secound Largest 


/*function SecoundLargest(arr){
    let first = 0 , secound = 0 ;

    for(let i=0 ; i<arr.length; i++){
        if(first<arr[i]){
            secound = first;
            first = arr[i];
        }else if(secound<arr[i] && arr[i]!==first){
            secound = arr[i];
        }
    }

    return secound;

}


console.log(SecoundLargest([10, 5, 8, 12, 14]));*/


// Delete a specific element in arryay


/*function deleteElement(arr,target){
     let index = 0 ;

     for(let i=0 ; i<arr.length;i++){
        if(arr[i]!==target){
            arr[index] = arr[i];
            index++;
        }
     }

     return arr.splice(0,index);
}

console.log(deleteElement([1, 2, 3, 4, 5], 3)); */



/*function SecoundLargest(arr){

    let first = 0 , secound = 0 ;

    for(let i=0 ; i<arr.length ; i++){
        if(first<arr[i]){
            secound = first ;
            first = arr[i];
        }else if (secound<arr[i] && first!==arr[i]){
            secound = arr[i];
        }
    }

    return {first : first , secound : secound}

}


console.log(SecoundLargest([1,2,6,3,4,5])); */


