// Taget Element Find And Return the index 


// let array1 = [1,2,3,4,5,6,7,8];


// function linearSearch(arr,target){    

//     for(let i=0; i<arr.length;i++){
//         if(arr[i]==target){
//             return i ;
//         }
//     }

//    return -1 ;

// }


// console.log(linearSearch(array1,7));




// Find the First Occurrence of a Character in a String


/*function findCharacter(word,target){
    for(let i=0 ; i<word.length;i++){
        if(word[i] == target){
            return i ;
        }
    }

    return -1 ;
}


console.log(findCharacter("javascript", "a")); */





// Find All Occurrences of a Value




/*function findAllOccurrences(arr,target){
    let occurrence = [] ;

    for(let i=0; i<=arr.length; i++){
        if(arr[i] == target){
            occurrence.push(i);
        }
    }

    return occurrence;
}



console.log(findAllOccurrences([1, 2, 3, 2, 5, 2], 2)); */




// Find the Maximum Number in an Array




/*function findMax(arr){

    if(arr.length ==0) return null;

    let max = arr[0];

    for(let i=0 ; i<arr.length ; i++){

        if(arr[i] > max) max = arr[i];

    }

    return max;

}


console.log(findMax([12, 45, 2, 78, 6])); */



// Check if an Element Exists in an Array



/*function elementExists(arr,target){

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]===target){
            return true ;
        }
    }

    return false ;

}



console.log(elementExists([10, 20, 30, 40], 20)); */




// Count the Number of Times an Element Appears



/*function countOccurrences(arr,target){

    let count = 0 ;

    for(let i=0 ; i<arr.length ; i++){

        if(arr[i] === target){
            count++;
        }

    }

    return count ;
}


console.log(countOccurrences([2, 3, 4, 2, 2, 5], 2)); */


// Find the Smallest Number in an Array


/*function findMin(arr){
     let min = arr[0];

     for(let i=0 ; i<arr.length; i++){
        if(arr[i]<min) min = arr[i];
     }

     return min ;
}


console.log(findMin([10, 4, 2, 99, 5])); */






