function isPalindromeAnother(str: string) {
  return str.split("").reverse().join("") === str;
  /*
      first the string is converted to string[] using split().
      second the string[] is reversed using reverse().
      third the string[] is converted to string using join().
      last the value is then checked is it same or not.
  */
}

console.log(isPalindromeAnother("madam"));



function isPalindrome(str: string): boolean {
   // Convert to lowercase and remove non-alphanumeric characters if needed
   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   
   // Use two pointers: one from start and one from end
   let left = 0;
   let right = cleanStr.length - 1;
   
   while (left < right) {
      if (cleanStr[left] !== cleanStr[right]) {
         return false;
      }
      left++;
      right--;
   }
   
   return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
