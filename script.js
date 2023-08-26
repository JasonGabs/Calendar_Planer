
const saveButton = document.querySelector("btn saveBtn col-2 col-md-1");

$(function () {

  $(".saveBtn").on("click", function(event) {
    var textInfo = $(this).siblings(".description").val();
    var textContentHour = ($(this).parent().attr("id"));
    localStorage.setItem(textContentHour, textInfo);
  });
  
  
  $(".time-block").each( function () {
    var elementHours = $(this).attr("id").split("-")[1];
    var currentHour = dayjs().format("HH");
    if (elementHours == currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } else if (parseInt(elementHours) < currentHour) { 
      $(this).removeClass("future");
      $(this).addClass("past");
      $(this).removeClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    console.log(currentHour);
    console.log(elementHours);
  })
  
  function init() {
    $(".time-block").each(function () {
      var localData = localStorage.getItem($(this).attr("id"));
      if (localData !== null) {
        $(this).find(".description").val(localData);
      }
    });
  }
  
  init();
});
  updateCurrentTime();
  function updateCurrentTime() {
    var currentTimeDisplay = $('#currentDay');
    var currentTime = dayjs().format('dddd, MMMM DD');
    currentTimeDisplay.text(currentTime);
    console.log(currentTime);
  }

