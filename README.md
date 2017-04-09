# Flashcard_Generator
flashcard app backend api built with node.js 

Create a new GitHub repository, named Flashcard-Generator or something similar. Clone this to your local drive.
Create a BasicCard constructor. It should accept front and back arguments.
Create a ClozeCard constructor. It should accept text and cloze arguments.
ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
ClozeCard should have a property or method that contains or returns only the partial text.
ClozeCard should have a property or method that contains or returns only the full text.
ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible.
As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:
The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.
Examples

Your constructors should work as follows.
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops"); 
Your property and/or method names can be different, but these examples describe how you would use your flashcard objects.
Bonuses

Write your constructors such that users can call them with or without the new keyword.
Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.
One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.
Good Luck!
