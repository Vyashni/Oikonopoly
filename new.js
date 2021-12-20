class player{

  constructor(name) {
    this.name = name;
    this.score = 10;
    this.pos = 0;
  }
  getName(){
    return this.name;
  }
  updateScore(sc){
    this.score = sc;
  }
  getPos(){
    return this.pos;
  }
  setPos(s){
      this.pos=s;
  }

}
class Square{
  constructor(id,name, code){
    this.id = id;
    this.name = name;
    this.code = code;
  }
}

var squares;
var pl;
var lastid ;

function rollDie() {

  var die;
  die = Math.floor(Math.random() * 5) + 1;
  document.getElementById("dice").innerHTML = die;

  updatePosition(die);

  forCurSq();

}

function forCurSq() {

  var curSqid = "sq"+pl.getPos();
  document.getElementById(lastid).innerHTML = "";
  document.getElementById(curSqid).innerHTML = "•";
  lastid = curSqid;
  var curSq = squares.filter(function(square) {
    return square.id == curSqid;
  })[0];

  if (curSq.code == 2) {
    document.getElementById("stat").innerHTML = " ";
  }else if (curSq.code == 3) {
    document.getElementById("stat").innerHTML = " ";
  }else if (curSq.code == 4) {
    document.getElementById("stat").innerHTML = " ";
  }else if (curSq.code == 1) {
    document.getElementById("stat").innerHTML = " ";
  }
}
function updatePosition(die) {
  if(pl.getPos() + die >= 40){
    end_game();
  }else{
    pl.setPos(pl.getPos() + die);
    document.getElementById("demo").innerHTML = " ";
  }

}

function init_game(){
  pl= new player("player");
  document.getElementById("player").innerHTML = 'The dice value is';

  init_sq();

  lastid = "sq1";
}

function end_game() {
  console.log("GAME OVER");
}

function init_sq(){
  squares = [
    new Square("sq0", "name", 0),
    new Square("sq1", "name", 1),
    new Square("sq2", "name", 2),
    new Square("sq3", "name", 4),
    new Square("sq4", "name", 3),
    new Square("sq5", "name", 4),
    new Square("sq6", "name", 0),
    new Square("sq7", "name", 2),
    new Square("sq8", "name", 3),
    new Square("sq9", "name", 1),
    new Square("sq10", "name", 0),
    new Square("sq11", "name", 0),
    new Square("sq12", "name", 0),
    new Square("sq13", "name", 3),
    new Square("sq14", "name", 4),
    new Square("sq15", "name", 4),
    new Square("sq16", "name", 1),
    new Square("sq17", "name", 2),
    new Square("sq18", "name", 4),
    new Square("sq19", "name", 0),
    new Square("sq20", "name", 2),
    new Square("sq21", "name", 4),
    new Square("sq22", "name", 1),
    new Square("sq23", "name", 1),
    new Square("sq24", "name", 0),
    new Square("sq25", "name", 4),
    new Square("sq26", "name", 4),
    new Square("sq27", "name", 3),
    new Square("sq28", "name", 1),
    new Square("sq29", "name", 1),
    new Square("sq30", "name", 0),
    new Square("sq31", "name", 3),
    new Square("sq32", "name", 0),
    new Square("sq33", "name", 1),
    new Square("sq34", "name", 4),
    new Square("sq35", "name", 4),
    new Square("sq36", "name", 0),
    new Square("sq37", "name", 4),
    new Square("sq38", "name", 3),
    new Square("sq39", "name", 4),
    new Square("sq40", "name", 0),

  ];
}

window.onload = function() {
  init_game();
};
