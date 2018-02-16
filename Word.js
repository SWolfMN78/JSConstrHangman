/*Word.js: Contains a constructor, Word that depends on the Letter 
    constructor. This is used to create an object representing the current 
    word the user is attempting to guess. That means the constructor 
    should define:
        *x An array of new Letter objects representing the letters of the 
            underlying word
        *x A function that returns a string representing the word. This 
            should call the function on each letter object 
    (the first function defined in Letter.js) that displays the character 
        or an underscore and concatenate those together.
        * A function that takes a character as an argument and calls the 
            guess function on each letter object 
    (the second function defined in Letter.js) */

//the following variables allow access to the other js files.
var NewLetter = require("./Letter.js");

var NewWord = function(word) {
    this.letterArray = []; //make an array of letters

    this.setWord = function(word) {
            for (var i = 0; i < word.length; i++) {

                this.l = word.substring(i, i + 1);

                this.letter = new NewLetter(this.l);
                this.letterArray.push(this.letter); //trying to push the letter into the array.
            }
            console.log(this.letterArray);
        }
        /* A function that returns a string representing the word. This 
            should call the function on each letter object */
    this.andYourWordIs = function() {
        var result = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            result += this.letterArray[i].DisplayLetter() + " ";
        }
        return result;
    };


};


module.exports = NewWord;