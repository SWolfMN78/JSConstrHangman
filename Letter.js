/*Letter.js: Contains a constructor, Letter. This constructor should be able 
    to either display an underlying character or a blank placeholder 
    (such as an underscore), depending on whether or not the user has 
    guessed the letter. 
    That means the constructor should define:
        * A string value to store the underlying character for the letter
        * A boolean value that stores whether that letter has been guessed 
             yet
        * A function that returns the underlying character if the letter 
            has been guessed, or a placeholder (like an underscore) 
            if the letter has not been guessed
        * A function that takes a character as an argument and checks 
            it against the underlying character, updating the stored 
            boolean value to true if it was guessed correctly */



//letter constructor to start building a word object.
function NewLetter(letter, bool) {
    this.letter = letter; //string value to contain a letter char.
    this.bool = false; //set to false for if letter is not guessed.
}

/*check the characgter and if it's already guessed display "_" or
    if yas yet to be guessed*/
NewLetter.prototype.Underlaying = function(guessed) {
    this.guessed = function() {
        if (this.bool === false) {
            //have the letter show up as "_"
            this.letter = "_";
        }
    };
}

/*takes a character as an argument then checks it against the Underlying
    character, updating the stored boolean val to true if correctly guessed */
NewLetter.prototype.CharCheck = function(letter) {
    if (letter === letter) {
        this.bool = true;
    }
}

module.exports = Letter;