/*$(".calendar-widget").click(function(){
  $(this).toggleClass("widget-active");
});*/

$(".open-events").click(function(){
  //$(this).toggleClass("event-open");
  /*$(".calendar-widget").css("width", "450px");*/
  /*$(".calendar-events").css("width", "150px");*/
  /*$(".calendar-events").css("left", "0px");*/
  $(".calendar-widget").toggleClass("opened-event");
});