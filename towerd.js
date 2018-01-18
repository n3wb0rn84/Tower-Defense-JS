//VARIABLES

var canvas = document.getElementById("my-canvas"); // Init du Canvas
var ctx = canvas.getContext("2d"); // Contexte du canvas en 2D !
var size = 50; // Taille standard d'une tiles ou un wall ou turret
var isWall=false; // Bool pour placement murs ??
var croix=false;
//EventListeners
document.addEventListener("DOMContentLoaded", function(event) {
  for (i = 0; i <= ((canvas.width / 50) - 1); i++) {
    for (j = 0; j <= ((canvas.height / 50) - 1); j++) {
      var tx = i * 50;
      var ty = j * 50;
      initTiles(tx, ty, size);
    }
  }
});
canvas.addEventListener('click', function(event) {
  var x = event.pageX - canvas.offsetLeft;
  var y = event.pageY - canvas.offsetTop;
  var posX = (Math.floor(x / 50)) * 50;
  var posY = (Math.floor(y / 50)) * 50;
  if (isWall == false) {
    drawWall(posX, posY, 50);
  } else if (croix === true){
    clearWall(posX, posY, 50);
  } //Event pour déclencher le placement du mur/turret
});

//FONCTIONS


function drawEnemy() {
  ctx.beginPath();
  ctx.arc(25, 25, (25 / 2), 0, 2 * Math.PI, false);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath(); // Dessin des ennemis , au moins un de base xD
}

function initTiles(x, y, size) {
  ctx.beginPath();
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = "yellow";
  ctx.strokeRect(x, y, size, size);
  ctx.closePath();

}

function drawWall(x, y, size) {
  ctx.beginPath();
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = "red";
  ctx.closePath(); //Dessin du mur

}

function clearWall(x, y, size) {
  ctx.clearRect(x, y, size, size); //Remove du dessin du mur
  initTiles(x, y, size);

}
