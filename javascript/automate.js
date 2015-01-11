$(function() {

  var canvas = document.getElementById('surface'),
      context = canvas.getContext('2d'),
      isDrawing = false;

  $(canvas).on('mousedown', function() {
    isDrawing = true;
  }).on('mouseup', function() {
    isDrawing = false;
  }).on('mouseleave', function() {
    isDrawing = false;
  }).on('mousemove', function() {
    console.log('mousemove');
  });

  function init() {
    canvas.width = 500;
    canvas.height = canvas.width * 0.75;
  }
  init();

});
