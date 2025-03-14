// Given a sorted array of n elements and find the target element index return 

// function binarySearch(arr,target){

//     let leftindex = 0 ;
//     let rightindex = arr.length-1;

//     while(leftindex<=rightindex){
//         let middleindex = Math.floor((leftindex+rightindex)/2);
//         if(target==arr[middleindex]){
//             return middleindex;
//         }

//         if(target<=arr[middleindex]){
//             rightindex = middleindex-1
//         }else{
//             leftindex = middleindex +1;
//         }
//     }

//     return -1 ;

// }


// console.log(binarySearch([1,2,3,4,5],4));



// Find min in a sorted rotated array


/*function findMinInRotatedArray(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
    
        if (arr[mid] > arr[right]) {
            
            left = mid + 1;
        } else {
           
            right = mid;
        }
    }

    return arr[left]; 
}


console.log(findMinInRotatedArray([4, 5, 6, 7, 0, 1, 2])); */


