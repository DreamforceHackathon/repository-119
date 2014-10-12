// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.autocomplete
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

/*
// Hide range.
var hide = document.querySelector('.js-hiderange');
var initHideRange = new Powerange(hide, { hideRange: true, start: 70 });

var btnChoice = 1;
Function buttons Active 
$(".tmr").click(function(){
	$(".tmr").addClass("active btn-warning");
	$(".tod").removeClass("active btn-warning");
	$(".tod").addClass("btn-info");
	$(".lat").removeClass("active btn-warning");
	$(".lat").addClass("btn-info");
	btnChoice = 2;
});

$(".tod").click(function(){
	$(".tod").addClass("active btn-warning");
	$(".tmr").removeClass("active btn-warning");
	$(".tmr").addClass("btn-info");
	$(".lat").removeClass("btn-warning active");
	$(".lat").addClass("btn-info");
	btnChoice = 1;
});

$(".lat").click(function(){
	$(".lat").addClass("active btn-warning");
	$(".tod").removeClass("active btn-warning");
	$(".tod").addClass("btn-info");
	$(".tmr").removeClass("active btn-warning");
	$(".tmr").addClass("btn-info");
	btnChoice = 3;
});

/* end */

/*message sucess*/


/* Post connection 
$(".save").click(function(){
	var taskName,dueDate, employeeName;
	taskName = document.getElementById('taskName').value;
	employeeName = document.getElementById('employee').value;
	var date = new Date();
	if (btnChoice == 1) {
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dueDate = month + "/" + day + "/" + year;
	};  
	if (btnChoice == 2) {
		var day = date.getDate() + 1;
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dueDate = month + "/" + day + "/" + year;
	} 
	if(btnChoice == 3){
		var day = date.getDate() + 5;
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dueDate = month + "/" + day + "/" + year;
	}

	var importance = document.getElementById('importance').value;


	if (taskName != '' && employeeName != ''){
	//DO POST METHOD
/*	var data = {"name":taskName, "due_date":dueDate, "weightage":importance, "status":"notActive"};
var url  = '/tasks';
jQuery.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){
        var jsonObj = jQuery.parseJSON(data);
        alert(data.name);
    },
    failure: function(errorMsg) {
        alert(errorMsg);
    }
});

swal("Good job!", "You clicked the button!", "success")

} else {
	sweetAlert("Oops...", "You forgot to asnwer some field", "error");
}




});


/*auto complete function
$(document).ready(function() {
	var employees = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
	];
	$( "#employee" ).autocomplete({
		source: employees
	});
});

/* Timer Function TOO DANGEROUS FOR CHANGE!!

pomodoroCounter = 0;

function pomodoroDisplay(){
	document.getElementById("pomodoro").innerHTML = "You have Done "+pomodoroCounter+" cycles for this task.";
	if ( pomodoroCounter > 0 ){
		return;
	}
}

var ifCancelled = 0;

$(".start").click(function() {
	ifCancelled = 0;
	$(".item__timer").css("background","#f16a70");
	var tirthMinutes = 60 * 30,
	display = $('#time'),
	mins, seconds, count = 1;
	var exit = pomodoroCounter;
	var interval = setInterval(function() {
		mins = parseInt(tirthMinutes / 60);
		seconds = parseInt(tirthMinutes % 60);
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		document.getElementById("timer").innerHTML = mins + ":" + seconds;
		tirthMinutes--;

		if (tirthMinutes < 0 && count < 3) {	
			if(count < 2){
				swal("Good job!", "Cycle is Done! Countdown Starting", "success")
				$(".item__timer").css("background","lightGreen");
				count++
				tirthMinutes = 10 * 60;
			} else {
				document.getElementById("timer").innerHTML = "Done!";
				if (pomodoroCounter == exit){
					pomodoroCounter ++;
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
	ifCancelled++
	document.getElementById("timer").innerHTML = "CANCELED";
	sweetAlert("Oops...", "So you got interrupted, lets try it again!", "error");

});

/* END OF POMODORO FUNCTION 
(".finish").click(function() {

//GET THE POMODORO NUMBER AND POST IN THE SERVER

});
*/
