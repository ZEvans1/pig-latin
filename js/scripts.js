$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("#input").val().toLowerCase();
    var letters = userInput.split('');
    //console.log(letters);
    analysis(letters);
  });
});

// This is backend----------------------------

function analysis(letters) {
  var numbers = "0987654321".split('');
  var vowels = "aeiou".split('');
  var consonants = "bcdfghjklmnprstvwxyz".split('');
  var firstlets = [];
  var consecutive = [];

  //numbers
  for (i=0; i < letters.length; i++) {
      char = letters[i];
      if (numbers.indexOf(char) !== -1){
        alert("You entered a number");
        return false
      } else {
      //  console.log(letters);
      };
  };

    //double consonants
    for (i = 0; i < letters.length; i++) {
      if (consonants.indexOf(letters[i]) !== -1) {
        consecutive.push(letters[i]);
      } else if (vowels.indexOf(letters[i]) !== -1 ) {
        break;
      }
    };

  // q's and u's
    if (letters[0] === ("q")) {
        firstlets = letters.slice(0,2);
        letters.splice(0,2);
      } else if (letters[1] === ("q") && consonants.indexOf(letters[0]) !== -1) {
        firstlets = letters.slice(0,3);
        letters.splice(0,3);
      } else if (vowels.indexOf(letters[0] !== -1)) {
        firstlets = letters.slice(0,1);
        letters.splice(0,1);
      }
        console.log("hello");



  console.log(letters);
  console.log(firstlets);
  console.log(consecutive);

  // var first = letters[0];
};
