$(function() {
  // Hide range.
  var hide = document.querySelector('.js-hiderange');
  var initHideRange = new Powerange(hide, { hideRange: true, start: 70 });

  /* Function buttons Active */
  $(".tmr").click(function(e){
    $(".tmr").addClass("active btn-warning");
    $(".tod").removeClass("active btn-warning");
    $(".tod").addClass("btn-info");
    $(".lat").removeClass("active btn-warning");
    $(".lat").addClass("btn-info");
  });

  $(".tod").click(function(){
    $(".tod").addClass("active btn-warning");
    $(".tmr").removeClass("active btn-warning");
    $(".tmr").addClass("btn-info");
    $(".lat").removeClass("btn-warning active");
    $(".lat").addClass("btn-info");
  });

  $(".lat").click(function(){
    $(".lat").addClass("active btn-warning");
    $(".tod").removeClass("active btn-warning");
    $(".tod").addClass("btn-info");
    $(".tmr").removeClass("active btn-warning");
    $(".tmr").addClass("btn-info");
  });
  
  $('section.task input[name=assignee]').autocomplete({
    source: Employees})

  var task_manager = (function() {
    var create_task = function(date, task_name, assignee, weightage) {
      $.ajax({
        type: 'POST',
        url: '/tasks',
        data: {
          name: task_name,
          weightage: weightage,
          assignee: assignee,
          due_date: date}
      }).success(function(data) {
        console.log('Yes posted the task');
      }).error(function(jqxhr, status) {
        console.log('Something went wrong', status);
      });
    };
    return {
      create_task: create_task
    };
  })();
  
  $('section.task button.save-task').click(function(){
    var date = '';
    if ($('section.task button.tod').hasClass('active')) {
      date = 'today';
    } else if ($('section.task button.tmr').hasClass('active')) {
      date = 'tomorrow';
    } else {
      date = 'later';
    } 
    var task_name = $('form.task-form input[name=title]').val(),
      assignee = $('form.task-form input[name=assignee]').val(),
      weightage = $('section.task input.weightage').val();
    task_manager.create_task(date, task_name, assignee, weightage);
  });

});
