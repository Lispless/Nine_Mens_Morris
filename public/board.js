var Board = {};

(function() {

  Board = function(board, slotcount) {
    this.element = board
    this.slots = [];

    for (var i=0; i < slotcount; i++) {
        this.slots.push(new Slot(this.element));
    }

  }
}())
