function countVowel(word) {
    // Initialize an array with vowels
    var vowelArray = ["a", "e", "i", "o", "u"];
    // Initialize a counter for the number of vowels
    var numVowels = 0;
    // Check if the input is a string
    if (typeof word == "string") {
        // Loop through each character in the string
        for (i = 0; i < word.length; i++) {
            // Loop through each vowel in the vowel array
            for (x = 0; x < vowelArray.length; x++) {
                // Check if the current character is a vowel
                if (word.charAt(i).toLowerCase() == vowelArray[x]) {
                    // Increment the vowel counter
                    numVowels++;
                }
            }
        }
    }
    // Return the total number of vowels
    return numVowels;
}

// Prompt the user to enter a string and provide clear instructions
var totalVowels = countVowel(prompt("Please enter a string to count its vowels:"));

// Display the result in the console
if (totalVowels == 1) {
    console.log("Your entry contained " + totalVowels + " vowel");
} else {
    console.log("Your entry contained " + totalVowels + " vowels");
}
