var Checker = {};

(function() {
  var count = 0;

  Checker = function(parent, color) {
    this.color = color;

    this.ontable = false;

    this.slot;

    this.movable = true;

    this.id = count;
    count++

    this.element = $('<div class="checker"></div>');
    parent.append(this.element);
    this.element.attr('data-checkerId', this.id);
  }

  Checker.prototype.getPosition = function () {
    return this.element.position();
  }
}())
