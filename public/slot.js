var Slot = {};

(function() {
var count = 0;

  Slot = function(parent) {

    this.available = true;

    this.position = {top: null, left: null};

    this.id = count;
    count++

    this.element = $('<div class="slot"></div>');
    parent.append(this.element);
    this.element.attr('data-slotId', this.id);

    this.element.attr( "id",  "slot" + (this.id + 1))


  this.position = this.element.position();

  }
}())
