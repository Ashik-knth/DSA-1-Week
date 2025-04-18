/*function bubbleSort(arr){
    let swapped ;
    do{
        swapped = false ;
        for(let i=0 ; i<arr.length-1 ; i++){
            if(arr[i]>arr[i+1]){
                [arr[i] , arr[i+1]] = [arr[i+1],arr[i]];
                swapped = true
            }
        }
    }while(swapped);
}

const arr1 = [8,20,-2,4,-6];

bubbleSort(arr1);

console.log(arr1) */


/*function insertion(arr){
    
    for(let i=1 ; i<arr.length ; i++){
        let crnt = arr[i];
        let j = i-1;
        
        while(j>=0 && arr[j]>crnt){
            arr[j+1] = arr[j];
            j--;
        }
        
        arr[j+1] = crnt;
    }
    
    return arr;
    
}

let arr1 =  [-2,16,-1,1,4,2];


console.log(insertion(arr1));


function Selection(arr){
    
    for(let i=0 ; i<arr.length-1 ; i++){
        let minindex = i ;
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[j]<arr[minindex]){
                minindex = j ;
            }
        }
        
        if(minindex!==i){
            [arr[i],arr[minindex]] = [arr[minindex],arr[i]];
        }
    }
    
    return arr;
    
}

console.log(Selection([5, 3, 8, 4, 2]));*/


