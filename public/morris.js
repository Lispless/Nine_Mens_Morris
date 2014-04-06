$(document).ready(function() {

// $(".checker").on("click", function(test) {
// $(this).toggleClass('red')
// } )

// $(".checker").draggable({ snap: ".slot", snapMode: "Inner", snapTolerence: "5px" });

$(".slot").on("click", function() {
  $(this).find(".blackpiece").toggleClass("on")
})

 });

