
var projectQuestion = [];
var number = 5;
var intervalId;
var objectGame = {
  questions: ["Which war movie won the Academy Award for Best Picture in 2009?", "Q. What was the name of the second Indiana Jones movie, released in 1984?", "Which actor starred in the 1961 movie The Hustler?", "In which year were the Academy Awards, or 'Oscars', first presented?", "What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?"],
  quiz1: ["The Hurt Locker.","The Wurt Worker", "Titanic", "Star Mars"],
  quiz2: ["Indiana Jones and the Temple of Doom.","Indiana Jones and the Temple of Doom.", "Indiana Jones", "Indiana Bones"],
  quiz3: [" Paul Newman.","Paul Mcarty", "Paul Smith", "Paul Waker"],
  quiz4: ["1929.","2000", "1995", "1990", "1980"],
  quiz5: ["Frodo Baggins.","Frodo De Fredo", "Frodon", "Frody"]
}
var things = [objectGame.quiz1, objectGame.quiz2, objectGame.quiz3, objectGame.quiz4, objectGame.quiz5];


$('#startbutton').on('click', function hey() {
  $('#startbutton').hide();
  run();
  render();
})


function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  $('#timeup').hide()
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#timer").html("<h2>" + number + "</h2>");
  //  Once number hits zero...
  if (number === 0) {
    $('#timeup').text('Time is up!')
    clearInterval(intervalId);
    number = 5;
    $('#timeup').show()
    setTimeout(function () {
      $('#posibleans1').empty();
      $('#posibleans2').empty();
      run();
      render();
    }, 1000);
  }
}
// If array if empty finish the game
// add styling for selecting the answers and event click listeners
//win/ loss function
//right know timer working perfectly and it going through all the questions
function render() {
  var randomIndex = Math.floor(Math.random() * things.length);
  objectArray = things[randomIndex]; 
console.log (objectArray)
  for (i = 0; i < 5; i++) {
    projectQuestion[i] = objectArray[i];
  }

  randomizer(projectQuestion);
  for (i = 0; i < projectQuestion.length; i++){
     if (i === 1 || i === 0){
       $('#posibleans1').append('<p>' + projectQuestion[i] + '</p>');
     }
     else if (i === 2 || i === 3){
      $('#posibleans2').append('<p>' + projectQuestion[i] + '</p>');
    }
  }

  things.splice(randomIndex, 1)
}

function randomizer(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

