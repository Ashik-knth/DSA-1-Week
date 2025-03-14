// String Reverse 

// function reverse(string){
//   let reverse = "";

//   for(let i= string.length-1; i>=0 ; i--){
//     reverse+=string[i];
//   }

//   return reverse;
   
// }


// console.log(reverse("hello"));


// CheckPalindrome

/*function isPalindrome(word){
    let left = 0;
    let right = word.length-1;
    while(left<right){
        if(word[left]!==word[right]) return false

        left++;
        right--
    }
    return true;
}

console.log(isPalindrome("racecar"));*/



// Count Vowels and consonants

/*function countVowelsConsonants(word){
    let vowels = "aeiouAEIOU";
    let vowelCount =0 , consonantCount = 0 ;

    for(let char of word ){
        if(char.match(/[a-zA-z]/)){
            if(vowels.includes(char)) vowelCount++;
            else consonantCount++;
        }
    }

    return {vowels:vowelCount, consonants:consonantCount};

}


console.log(countVowelsConsonants("Hello World"));*/



// Find Duplicate Characters


// function findDuplicates(word){
//     let freq = {};
//     let duplicates = {};


//     for(let char of word){
//         freq[char] = (freq[char] || 0) + 1;
//     }

//     for(let char in freq){
//         if(freq[char]>1) duplicates[char] = freq[char];
//     }

//     return duplicates;

// }


// console.log(findDuplicates("programming"));


// Anagram Check 


// function isAnagram(str1,str2){
//     if(str1.length!==str2.length) return false;
//     return str1.split("").sort().join("") == str2.split("").sort().join("");
// }
//  console.log(isAnagram("silent","listen"));
 
//  console.log(isAnagram("hello","world"));



//  Remove Duplicates


/*function RemoveDuplicates(word){

    let unique = new Set(word)

     return [...unique].join("")
    

}

console.log(RemoveDuplicates("banana"));*/


// First Non-Repeating Character


/*function firstNonRepeatingChar(word){
    let freq = {};

    for(let char of word)  freq[char] = (freq[char] || 0 )+1;

    for(let char of word) if(freq[char]==1) return char;

    return null ;
}

console.log(firstNonRepeatingChar("swiss"));*/


// Check Rotation 


/*function isRotation(word1, word2){
    
    return word1.length == word2.length && (word1+word1).includes(word2);
    
}

console.log(isRotation("waterbottle", "erbottlewat"));*/


/*function RemoveDuplicates(word){
    
    let seen = new Array(10).fill(false);

    let result = "" ;

    for(let i=0;i<word.length;i++){
        let cahrcode = word.charCodeAt(i);

        if(!seen[cahrcode]){
            result+=word[i];
            seen[cahrcode] = true;
        }
    }

    return result;

}

console.log(RemoveDuplicates("banana"));*/


/*function reverseWords(s) {
    let result = "";
    let word = "";

    for (let i = 0; i <= s.length; i++) {
        if (i === s.length || s[i] === ' ') { 
            // If space or end of string, add reversed word to result
            let reversedWord = "";
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j]; // Reverse the current word
            }
            result += reversedWord + (i === s.length ? "" : " "); // Add space if not last word
            word = ""; // Reset word for next word
        } else {
            word += s[i]; // Build word character by character
        }
    }

    return result;
}

// Example usage:
console.log(reverseWords("Hello World"));  // Output: "olleH dlroW"
console.log(reverseWords("JavaScript is fun"));  // Output: "tpircSavaJ si nuf"
console.log(reverseWords("DSA Rocks")); // Output: "ASD skcoR" */
