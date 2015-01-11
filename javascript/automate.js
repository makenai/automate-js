$(function() {

  var canvas = document.getElementById('surface'),
      context = canvas.getContext('2d'),
      isDrawing = false,
      segmentCount = 0;

  // for storing coordinates
  var coordinates = [];

  $(canvas).on('mousedown', function() {
    isDrawing = true;
  }).on('mouseup', function() {
    isDrawing = false;
    segmentCount = 0;
  }).on('mousemove', function(e) {
    if ( isDrawing ) {
      coordinates.push({
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop,
        lineStart: segmentCount == 0
      });
      segmentCount++;
    }
    redraw();
  });

  function redraw() {
    context.beginPath();
    for (i in coordinates) {
      var c = coordinates[i];
      if ( c.lineStart ) {
        context.moveTo( c.x, c.y );
      } else {
        context.lineTo( c.x, c.y );
      }
    }
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();
  }

  function init() {
    canvas.width = 500;
    canvas.height = canvas.width * 0.75;
    redraw();
  }
  init();

});
