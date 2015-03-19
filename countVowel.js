function countVowel(word) {
	var vowelArray = ["a", "e", "i", "o", "u"];
	var numVowels = 0;
	if (typeof word == "string"){
	for (i = 0; i < word.length; i++) {
		for (x = 0; x < vowelArray.length; x++){
			if (word.charAt(i).toLowerCase() == vowelArray[x]) {
				numVowels++;
			}
		}
	}
	}
	return numVowels;
} 

var totalVowels = countVowel(prompt("enter a string and open the console for vowel counting ~wisdom~"))

if (totalVowels == 1) { 
	console.log("your entry contained " + totalVowels + " vowel");
} else {
	console.log("your entry contained " + totalVowels + " vowels");
}