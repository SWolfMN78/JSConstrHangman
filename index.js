/* index.js: The file containing the logic for the course of the game, which depends on Word.js and:   
 * Randomly selects a word and uses the Word constructor to store it
 * Prompts the user for each guess and keeps track of the user's remaining guesses*/
var prompt = require("prompt");

//pull the information from the cmd prompt based on what was pressed.
var input = process.argv;
var action = input[2];

//the following variables allow access to the other js files.
var words = require("./Words.js");