var score = 0;
var answer = '';
var projectQuestion = [];
var number = 30;
var intervalId;
var objectGame = {
  questions: ["Which war movie won the Academy Award for Best Picture in 2009?", "Q. What was the name of the second Indiana Jones movie, released in 1984?", "Which actor starred in the 1961 movie The Hustler?", "In which year were the Academy Awards, or 'Oscars', first presented?", "What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?"],
  quiz1: ['aThe Hurt Locker', 'The Wurt Worker', 'Titanic', 'Star Mars'],
  quiz2: ['aIndiana Jones and the Temple of Doom', 'Indiana Jones and the Temple of Room.', 'Indiana Jones', 'Indiana Bones'],
  quiz3: ['aPaul Newman', 'Paul Mcarty', 'Paul Smith', 'Paul Waker'],
  quiz4: ['a1929', '2000', '1995', '1990'],
  quiz5: ['aFrodo Baggins', 'Frodo De Fredo', 'Frodon', 'Frody']
}
var things = [objectGame.quiz1, objectGame.quiz2, objectGame.quiz3, objectGame.quiz4, objectGame.quiz5];


$('#startbutton').on('click', function () {
  if ((things.length < 1 || things == undefined)) {
    reset();
    run();
    render();
    $('#timer').show();
    $('#startbutton').hide();
  }

  else {
    run();
    render();
    $('#startbutton').hide();
  }
})

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  $('#timeup').hide()


  number--;

  $("#timer").html("<h2>" + number + "</h2>");

  if (number === 0) {
    $('#posibleans1').empty();
    $('#posibleans2').empty();
    $('#question').empty();
    $('#timeup').text('Time is up! the answer was:' + answer);
    clearInterval(intervalId);
    number = 30;
    $('#timeup').show()
    setTimeout(function () {
      render();
      run();
    }, 1000);
  }
}

function render() {
  $('#posibleans1').empty();
  $('#posibleans2').empty();
  var randomIndex = Math.floor(Math.random() * things.length);
  objectArray = things[randomIndex];
  $('#question').text(objectGame.questions[randomIndex]);
  if ((things.length < 1 || things == undefined)) {
    $('#timer').hide();
    clearInterval(intervalId);
    number = 30
    $('#posibleans1').empty();
    $('#posibleans2').empty();
    $('#question').text("Game is over, final score: " + score + ", you correctly answered " + score/10 + " questions out of 5!");
    setTimeout(function () {
      $('#startbutton').show();
    }, 2000);
  }

  else {
    for (i = 0; i < 4; i++) {
      projectQuestion[i] = objectArray[i];
    }
    randomizer(projectQuestion);
    for (i = 0; i < 4; i++) {
      if (i === 1 || i === 0) {
        if (projectQuestion[i].charAt(0) === 'a') {
          $("#posibleans1").append("<div class='choice' id='answer'>" + projectQuestion[i].substring(1) + "</div>")
          answer = projectQuestion[i].substring(1);
        }
        else {
          $("#posibleans1").append("<div class='choice' id='incorrect'>" + projectQuestion[i] + "</div>")
        }
      }

      else if (i === 2 || i === 3) {

        if (projectQuestion[i].charAt(0) === 'a') {
          $("#posibleans2").append("<div class='choice' id='answer'>" + projectQuestion[i].substring(1) + "</div>")
          answer = projectQuestion[i].substring(1);
        }
        else {
          $("#posibleans2").append("<div class='choice' id='incorrect'>" + projectQuestion[i] + "</div>")
        }
      }
    }
    things.splice(randomIndex, 1)
    objectGame.questions.splice(randomIndex, 1)
  }
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


function reset() {
  score = 0;
  answer = '';
  projectQuestion = [];
  number = 30;
  things = [objectGame.quiz1, objectGame.quiz2, objectGame.quiz3, objectGame.quiz4, objectGame.quiz5];
  objectGame.questions = ["Which war movie won the Academy Award for Best Picture in 2009?", "Q. What was the name of the second Indiana Jones movie, released in 1984?", "Which actor starred in the 1961 movie The Hustler?", "In which year were the Academy Awards, or 'Oscars', first presented?", "What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?"]
}

$(document).on("click", ".choice", function () {
  var elementid = ($(this).attr('id'));
  $('#timer').hide();
  clearInterval(intervalId);
  number = 30;

  if (elementid === 'incorrect') {
    clearInterval(intervalId);
    $('#timer').hide();
    $('#posibleans1').empty();
    $('#posibleans2').empty();
    $('#question').text("Incorrect! the correct answer was: " + answer);
    setTimeout(function () {
      $('#posibleans1').empty();
      $('#posibleans2').empty();
      run();
      $('#timer').show();
      render();
    }, 2000);
  }

  else {
    if (things.length != -1) {
      clearInterval(intervalId);
      score = score + 10;
      $('#posibleans1').empty();
      $('#posibleans2').empty();
      $('#question').text("Good job! but can you keep going?");
      setTimeout(function () {
        $('#posibleans1').empty();
        $('#posibleans2').empty();
        run();
        $('#timer').show();
        render();
      }, 2000);
    }
  }
});