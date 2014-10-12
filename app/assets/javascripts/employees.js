$(function() {
  var pomodoroCounter = 0;
  function pomodoroDisplay(){
    document.getElementById("pomodoro").innerHTML = 
      "You have Done "+pomodoroCounter+" cycles for this task.";
    if ( pomodoroCounter > 0 ){
      return;
    }
  }

  var ifCancelled = 0;
  $(".start").click(function() {
    ifCancelled = 0;
    $('section#assignee-task-item button.start span.s-message').text('Started');
    $('section.assignee-task-item button.start').toggleClass('active');
    $(".item__timer").css("background","#f16a70");
    var tirthMinutes = 60 * 30,
      display = $('#time'),
      mins, seconds, count = 1,
      exit = pomodoroCounter;
    
    var interval = setInterval(function() {
      mins = parseInt(tirthMinutes / 60);
      seconds = parseInt(tirthMinutes % 60);
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      document.getElementById("timer").innerHTML = mins + ":" + seconds;
      tirthMinutes--;

      if (tirthMinutes < 0 && count < 3) {	
        if(count < 2){
          swal("Good job!", "Cycle is Done! Countdown Starting", "success");
          $(".item__timer").css("background","lightGreen");
          count++;
          tirthMinutes = 10 * 60;
        } else {
          document.getElementById("timer").innerHTML = "Done!";
          if (pomodoroCounter == exit){
            pomodoroCounter++;
            pomodoroDisplay();
            count++
            function stopUpdating(){
              clearInterval(interval);
            }
            setTimeout(stopUpdating, 360);
            alert("" + pomodoroCounter);
          }            	 
        }
      }
      if (ifCancelled > 0) {
        function stopUpdating(){
          clearInterval(interval);
        }
        setTimeout(stopUpdating, 10);
      }; 
    }, 1000);
  });

  $(".stop").click(function(){
    $('section#assignee-task-item button.start span.s-message').text('Start');
    ifCancelled++;
    document.getElementById("timer").innerHTML = "CANCELED";
    sweetAlert(
      "Oops...", "So you got interrupted, lets try it again!", "error");
  });

  /* END OF POMODORO FUNCTION */
  $(".finish").click(function() {

  //GET THE POMODORO NUMBER AND POST IN THE SERVER
  });
});
