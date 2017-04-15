//var BasicCard = require("./basicFlash.js");
//var ClozeFlash = require("./ClozeFlash");
var inquirer = require("inquirer");
function Basic(front, back) {
    this.front = front;
    this.back = back;
};

function Cloze(partial, deleted) {
    this.partial = partial;
    this.deleted = deleted;
};
var firstPresident = new Basic("Who was the first president of the United States?", "George Washington");
var secPresident = new Basic("Who was the second president of the United States?", "John Adams");
var thirdPresident = new Basic("Who was the third president of the United States?", "Thomas Jefferson");
var presidents = [firstPresident, secPresident, thirdPresident];

var firstPresidentCloze = new Cloze("George Washington was the first president of the United States.", "George Washington");
var secPresidentCloze = new Cloze("John Adams was the second president of the United States.", "John Adams");
var thirdPresidentCloze = new Cloze("Thomas Jefferson was the third president of the United States", "Thomas Jefferson");
var presidentsCloze = [firstPresidentCloze, secPresidentCloze, thirdPresidentCloze];


var Q = process.argv[2];
var A = process.argv[3];


if (Q === undefined) {
    console.log("Sorry, you must enter Basic or Cloze");
    return
}


else if (Q.toLowerCase() === "basic") {
//console.log("you've selected basic");
    if (A === undefined) {
        console.log("Sorry, you must select front or back");
        return
    }
    else if (A.toLowerCase() === "front") {
      
      var rand = presidents[Math.floor(Math.random() * presidents.length)];
      console.log(rand.front);
      inquirer.prompt([{
          type: "confirm",
          name: "flip",
          message: "Flip Card?"

    }]).then(function(flip) {
        console.log(rand.back)
    })
}

       else if (A.toLowerCase() === "back") {
      
      var rand = presidents[Math.floor(Math.random() * presidents.length)];
      console.log(rand.back);
      inquirer.prompt([{
          type: "confirm",
          name: "flip",
          message: "Flip Card?"

    }]).then(function(flip) {
        console.log(rand.front)
    })
}
 
    
}
else if (Q.toLowerCase() === "cloze") {
    var rand2 = presidentsCloze[Math.floor(Math.random() * presidentsCloze.length)];
         var partial = rand2.partial
         var deleted = rand2.deleted;
         var res = partial.replace(deleted, "...");
    if (A === undefined) {
        console.log("Sorry, you must select text or delete")
    }
   else if (A.toLowerCase() === "text") {
         
         console.log(res);
         inquirer.prompt([{
             type: "list",
             message: "Flip Cloze?",
            choices: ["Yes","No"],
             name: "choice"
         }]).then(function(flipCloze) {

             if (flipCloze.choice === "Yes"){
                 console.log(deleted)
             }
            
             else {
                 return
             }
            

         })
    }

    else if (A.toLowerCase() === "delete") {
        console.log(deleted);

           inquirer.prompt([{
             type: "list",
             message: "Flip Cloze?",
            choices: ["Yes","No"],
             name: "choice"
         }]).then(function(flipCloze) {

             if (flipCloze.choice === "Yes") {
                 console.log(res);
             }

    })
}
}