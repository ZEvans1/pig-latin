$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("#input").val().toLowerCase();
    var letters = userInput.split('');
    //console.log(letters);
    pigLatin(letters);
  });
});

//----------------------------------
function pigLatin(letters) {
  var numbers = "0987654321".split('');
  var vowels = "aeiou".split('');
  var consonants = "bcdfghjklmnprstvwxyz".split('');
  var firstlets = [];
  var consecutive = [];
  var ending1 = ["a", "y"];
  var ending2 = ["w", "a", "y"];
  var translate = [];

  if (vowels.indexOf(letters[0]) !== -1) {
    firstlets = letters[0];
    letters.splice(0,1);
    translate = letters + firstlets + ending2;
  } else if (consonants.indexOf(letters[0]) !== -1) {
    firstlets = letters[0];
    letters.splice(0,1);
    translate = letters + firstlets + ending1;
  } else if (letters[0] === ("q")) {
      firstlets = letters.slice(0,2);
      letters.splice(0,2);
      translate = letters + firstlets + ending1;
    }
    // else if (letters[1] === ("q") && consonants.indexOf(letters[0]) !== -1) {
    //   firstlets = letters.slice(0,3);
    //   letters.splice(0,3);
    // } else if (vowels.indexOf(letters[0] !== -1)) {
    //   firstlets = letters.slice(0,1);
    //   letters.splice(0,1);
    // }
    console.log(letters);
  console.log(firstlets);
console.log(translate);
};
