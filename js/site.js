function reverseString() {
    //use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g;

    //Get the user's word
    let userWord = document.getElementById("tacoCat").value.toLowerCase();
    //Sanatize the string
    let cleanedWord = userWord.replace(re, '');

    //Start
    let start = cleanedWord.length - 1;
    let reverseWord = "";
    let palindrome = "";
    let palindromeOutput = "";

    //Vakidate string must have at at least 2 words
    stringLengthCheck(userWord.length);


    for (let i = start; i >= 0; i--) {
        reverseWord += cleanedWord[i];
    }

    //Check to see if string is palindrome 
    palindrome = palindromeCheck(cleanedWord, reverseWord);

    //Output the result
    output = document.getElementById("tacoOutput");
    output.innerText = "Your string reversed is: " + reverseWord;

    palindromeOutput = document.getElementById("resultsOutput");
    palindromeOutput.innerText = palindrome;
}

function palindromeCheck(origrnalString, reverseString) {
    let palindromeCheckResult = "";
    //if the words are equal the its palindrome
    //it s not a palindromeCheckResult 
    if (reverseString == origrnalString) {
        palindromeCheckResult = "This is vaild palindrome."
    } else {
        palindromeCheckResult = "This is Not vaild palindrome."
    }
    // return the result
    return palindromeCheckResult;
}

function stringLengthCheck(orginalStringLen) {
    if (orginalStringLen < 2) {
        //TODO add SweetAlert2
        alert("Your String Needs to have at least 2 leters or numbners")
    }
}