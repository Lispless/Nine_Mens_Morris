$(document).ready(function() {

  var count = 9;

  var board = new Board($('#board'), count);

  var checkers = [];

    for (var i=0; i < count; i++) {
      var c = new Checker($('#bank'), 'black')

      checkers.push(c);

      c.element.draggable({
        start: function() {

        },
        drag: function() {

        },
        stop: function(e) {
          console.log(e)
        }
      });


    }

});

