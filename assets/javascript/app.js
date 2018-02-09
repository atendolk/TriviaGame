
console.log("it's working");

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
  document.getElementById("demo17").innerHTML="Your answer is recorded, move on to next question!";

}
function endFunction(){
  document.getElementById("endanswer").innerHTML = "Good Job! You have successfully finished!" + " Right: " + correctAnswers + " wrong: " + wrongAnswers;
}
