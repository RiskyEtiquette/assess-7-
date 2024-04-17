//Step 2: part #1: Sum Zero
function addToZero(arr) {
    const numSet = new Set(); // Use a set to store numbers seen so far
    for (let num of arr) {
        if (numSet.has(-num)) {
            return true; // If the negative of the current number is in the set, sum to zero exists
        }
        numSet.add(num); // Otherwise, add the current number to the set
    }
    return false; // If loop completes without finding a sum to zero, return false
}

// Runtime complexity: O(n)
//Explanation:
//The function iterates through the array once, with a linear time complexity of O(n), where n is the length of the array.
//Inside the loop, it checks if the negative of the current number exists in the set, which has an average time complexity of O(1) for set operations.
//Therefore, the overall runtime complexity of the function is O(n).

//Step 2: part #2: Unique Characters
function hasUniqueChars(word) {
    const charSet = new Set(); // Use a set to store unique characters seen so far
    for (let char of word) {
        if (charSet.has(char)) {
            return false; // If the character is already in the set, word does not have unique characters
        }
        charSet.add(char); // Otherwise, add the character to the set
    }
    return true; // If loop completes without finding duplicate characters, word has unique characters
}

// Runtime complexity: O(n)
//Explanation:
//The function iterates through each character in the word once, with a linear time complexity of O(n), where n is the length of the word.
//Inside the loop, it checks if the character is already in the set, which has an average time complexity of O(1) for set operations.
//Therefore, the overall runtime complexity of the function is O(n).

//Step 2: part #3: Pangram Sentence
function isPangram(sentence) {
    const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz'); // Set of all English alphabet letters
    const sentenceSet = new Set(sentence.toLowerCase().replace(/[^a-z]/g, '')); // Set of unique letters in the sentence
    for (let letter of alphabetSet) {
        if (!sentenceSet.has(letter)) {
            return false; // If any letter from the alphabet is missing in the sentence, it's not a pangram
        }
    }
    return true; // If all letters from the alphabet are present in the sentence, it's a pangram
}

// Runtime complexity: O(n)
//Explanation:
//The function first creates a set containing all the English alphabet letters.
//It then creates another set containing unique letters from the input sentence after converting it to lowercase and removing non-alphabet characters.
//Next, it iterates through each letter in the alphabet set and checks if it exists in the sentence set.
//If any letter from the alphabet set is not found in the sentence set, the function returns false indicating that the sentence is not a pangram.
//If the loop completes without finding any missing letters, the function returns true indicating that the sentence is a pangram.
//The overall runtime complexity of the function is O(n), where n is the length of the input sentence.

//Step 2: part #4: Longest Word
function findLongestWord(words) {
    let longestLength = 0;
    for (let word of words) {
        if (word.length > longestLength) {
            longestLength = word.length; // Update longestLength if current word is longer
        }
    }
    return longestLength;
}

// Runtime complexity: O(n)
//Explanation:
//Explanation:The function iterates through each word in the list once, with a linear time complexity of O(n), where n is the number of words in the list.
//Inside the loop, it compares the length of each word with the current longestLength variable and updates it if the current word is longer.
//Therefore, the overall runtime complexity of the function is O(n).

//Extra credit
//Sum Zero:

//Space Complexity: O(n)
//We use a set to store numbers seen so far. The space required by the set grows linearly with the size of the input array.
//Unique Characters:

//Space Complexity: O(n)
//We use a set to store unique characters seen so far. The space required by the set grows linearly with the length of the input word.
//Pangram Sentence:

//Space Complexity: O(1) or O(26)
//We use two sets: one to store all English alphabet letters and another to store unique letters in the sentence. The maximum number of elements in both sets is fixed (26 for the alphabet set and the number of unique characters in the English alphabet for the sentence set), regardless of the input size.
//Longest Word:

//Space Complexity: O(1)
//The function only uses a few constant space variables (e.g., longestLength), regardless of the input size. Therefore, the space complexity is constant.