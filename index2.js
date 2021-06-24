var canv = document.getElementById("myCanvas");
canv.height = document.body.clientHeight;

/*

(0,0)
 _________
\         \
\(w/2, h/2)\
\         \
\_________\
          (canv.width, canv.height)
*/
function clear_canvas(){
  // draw a white rectangle over the whole freaking thing
  var context = canv.getContext("2d");
  context.clearRect(0, 0, canv.width, canv.height);
}

function draw_circle(posX, posY, radius){
  var context = canv.getContext("2d");
  context.beginPath();
  context.arc(posX, posY, radius, 0, 2*Math.PI);
  context.stroke();
}

function update_canvas(){
//   clear_canvas();
  draw_circle(canv.width/2, canv.height/2, 10);
}

document.onload = function(){
    alert("Loading?");
}
update_canvas();
