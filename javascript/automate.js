$(function() {

  var AXIS_SCALE = 0.25,
      MOVE_SPEED = 5,
      Z_SLOPE = 1/5;

  var drawCanvas = document.getElementById('drawingSurface'),
      drawCtx = drawCanvas.getContext('2d'),
      displayCanvas = document.getElementById('display'),
      displayCtx = displayCanvas.getContext('2d'),
      isDrawing = false,
      segmentCount = 0;

  var coordinates = [];

  // Drawing Functionality
  $(drawCanvas).on('mousedown', function() {
    isDrawing = true;
  }).on('mouseup', function() {
    isDrawing = false;
    segmentCount = 0;
  }).on('mousemove', function(e) {
    if ( isDrawing ) {
      coordinates.push({
        x: e.clientX - drawCanvas.offsetLeft,
        y: e.clientY - drawCanvas.offsetTop,
        lineStart: segmentCount == 0
      });
      segmentCount++;
    }
    redraw();
  });

  function redraw() {
    drawCtx.beginPath();
    for (i in coordinates) {
      var c = coordinates[i];
      if ( c.lineStart ) {
        drawCtx.moveTo( c.x, c.y );
      } else {
        drawCtx.lineTo( c.x, c.y );
      }
    }
    drawCtx.lineWidth = 1;
    drawCtx.strokeStyle = 'black';
    drawCtx.stroke();
    drawDisp();
  }

  function drawDisp() {
    for (i in coordinates) {
      var c = coordinates[i];
      displayCtx.fillStyle = "#FF0000";
      displayCtx.fillRect( i, 0, 1, c.x * AXIS_SCALE);

      displayCtx.fillStyle = "#00FF00";
      displayCtx.fillRect( i, 150, 1, c.y * AXIS_SCALE);
      if (c.lineStart) {
        // console.log( c );
      }
    }
  }

  function init() {
    drawCanvas.width = 500;
    drawCanvas.height = drawCanvas.width * 0.75;
    displayCanvas.width = 500;
    displayCanvas.height = drawCanvas.width * 0.75;
    redraw();
  }
  init();

});
