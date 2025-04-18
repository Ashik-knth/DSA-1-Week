/*function strString(char){
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

console.log("Sorted:" , strString(names)); */



/*function bubbleSort(arr){
    
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




