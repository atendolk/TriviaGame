
console.log("it's working");
/*var allQuestions = [{
    question: "Which president was the Hoover Dam named after?",
    choices: ["Bill Clinton", "Herbert Hoover", "George W. Bush"],
    correctAnswer: 1
  },

  {
    question: "What day is America's Independence Day?",
    choices: ["July 4", "June 4", "July 6"],
    correctAnswer: 0
  },

  {
    question: "What day is India's Independence Day?",
    choices: ["August 2", "July 15", "August 15", "December 24"],
    correctAnswer: 2
  },

  {
    question: " What were the names of the two cities that got nuked during World War II? ",
    choices: ["Hiroshima and Nagasaki", "Hiroshima and Tokyo", "Hong Kong and Nagasaki", "Hong Kong and Beijing"],
    correctAnswer: 0
  },

  {
    question: "What is fifteen squared?",
    choices: ["One-Thousand", "two-twenty-Five", "Six-Hundred"],
    correctAnswer: 1
  },

  {
    question: "Which brothers invented planes?",
    choices: ["Mario and Luigi", "The Wright Brothers", "Warner Bros.", "Einstein Bagel Bros."],
    correctAnswer: 1
  },


];
var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};

$(document).ready(function() {

  $(".jumbotron").hide();
  $('#start').click(function() {
    $(".jumbotron").fadeIn();
    $(this).hide();
  });

  $(function() {
    $("#progressbar").progressbar({
      max: allQuestions.length - 1,
      value: 0
    });
  });

  setupOptions();

  $("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentquestion++;
    $(function() {
      $("#progressbar").progressbar({
        value: currentquestion
      });
    });
    if (currentquestion < allQuestions.length) {
      setupOptions();
      if (currentquestion == allQuestions.length - 1) {
        $('#next').html("Submit");
        $('#next').click(function() {
          $(".jumbotron").hide();
          $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          $("#result").fadeIn(1500);
        });

      };

    };
  });
});*/
//document.getElementById("demo").innerHTML="Which president was the Hoover Dam named after?";
// Set the date we're counting down to
var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
      if(minutes == 0 && seconds == 0){window.alert("TIME'S UP!!");}
  }, 1000);
}

$('#js-startTimer').click(function () {
  $('.js-timeout').text("2:00");
  countdown();
});

$('#js-resetTimer').click(function () {
  $('.js-timeout').text("2:00");
  clearInterval(interval);
});

var correctAnswers = 0;
var wrongAnswers = 0;

function wrongFunction(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  //document.getElementById("demo").innerHTML= " wrong: " + wrongAnswers
  console.log("working");
  document.getElementById("demo2").innerHTML="Your answer is recorded, move on to next question!";
}
function rightFunction(){
  correctAnswers++;
  //console.log(correctAnswers);
 // document.getElementById("demo1").innerHTML=" correct: " + correctAnswers
 document.getElementById("demo2").innerHTML="Your answer is recorded, move on to next question!";

}
function wrongFunction1(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  //document.getElementById("demo2").innerHTML= " wrong: " + wrongAnswers
  console.log("also working");
  document.getElementById("demo2").innerHTML="Your answer is recorded, move on to next question!";
}
function rightFunction1(){
  correctAnswers++;
  //console.log(correctAnswers);
  // document.getElementById("demo3").innerHTML=" correct: " + correctAnswers;
  document.getElementById("demo5").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction2(){
  wrongAnswers++;
  //console.log(wrongAnswers);
document.getElementById("demo5").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction3(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  document.getElementById("demo5").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction4(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  document.getElementById("demo8").innerHTML="Your answer is recorded, move on to next question!";

}
function rightFunction5(){
  correctAnswers++;
  //console.log(correctAnswers);
  document.getElementById("demo8").innerHTML="Your answer is recorded, move on to next question!";

}

function wrongFunction6(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  document.getElementById("demo8").innerHTML="Your answer is recorded, move on to next question!";

}
function rightFunction7(){
  correctAnswers++;
  //console.log(correctAnswers);
    document.getElementById("demo11").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction8(){
  wrongAnswers++;
  //console.log(wrongAnswers);
    document.getElementById("demo11").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction9(){
  wrongAnswers++;
  //console.log(wrongAnswers);
    document.getElementById("demo11").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction10(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  document.getElementById("demo14").innerHTML="Your answer is recorded, move on to next question!";
}
function rightFunction11(){
  correctAnswers++;
  //console.log(correctAnswers);
  document.getElementById("demo14").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction12(){
  wrongAnswers++;
  //console.log(wrongAnswers);
    document.getElementById("demo14").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction13(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  // document.getElementById("demo15").innerHTML= " wrong: " + wrongAnswers;
  document.getElementById("demo17").innerHTML="Your answer is recorded, move on to next question!";
}
function rightFunction14(){
  correctAnswers++;
  //console.log(correctAnswers);
  // document.getElementById("demo16").innerHTML=" correct: " + correctAnswers;
  document.getElementById("demo17").innerHTML="Your answer is recorded, move on to next question!";
}
function wrongFunction15(){
  wrongAnswers++;
  //console.log(wrongAnswers);
  document.getElementById("demo17").innerHTML= " wrong: " + wrongAnswers;
}
function endFunction(){
  document.getElementById("endanswer").innerHTML = "Good Job! You have successfully finished!" + " Right: " + correctAnswers + " wrong: " + wrongAnswers;
}
