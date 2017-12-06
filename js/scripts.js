$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("#input").val().toLowerCase();
    var letters = userInput.split('');
    console.log(letters);
    analysis(letters);
  });
});

// This is backend----------------------------

function analysis(letters) {
  var numbers = "0987654321".split('');
  var vowels = "aeiou".split('');
  var consonants = "bcdfghjklmnpqrstvwxyz".split('');

  //this for loop is for checking if numbers are in the input
  for (i=0; i < letters.length; i++) {
    char = letters[i];
    if (numbers.indexOf(char) !== -1){
      alert("You entered a number");
      return false
    } else {
      console.log(letters);
    };
  };
  //this assigns the first letter to a variable only if it passes the above for loop
  var first = letters[0];
  console.log(first);

  //this determines what the first character is. Example: vowel, consonant, other
  if (vowels.indexOf(first) !== -1) {
    alert("This is a vowel");
    } else if (consonants.indexOf(first) !== -1) {
    //alert("This is a consonant");
    } else {
    alert("This is undefined for us right now");
    };

  var firstlets = [];
  for (i = 0; i < letters.length; i++) {

    if (consonants.indexOf(letters[i]) !== -1) {
      firstlets.push(letters[i]);
    } else if (vowels.indexOf(letters[i]) !== -1 ) {
      break;
    }

  };
console.log(firstlets);
};
