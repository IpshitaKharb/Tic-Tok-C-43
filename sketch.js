var sc;
var mn;
var hr;
var s;
var h;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw(){
  background(0);

  sc = second();
  mn = minute();
  hr = hour();

  translate(300,300);

  // fill("white");
  // textSize(30);
  // text("second : " + sc,100,50);
  // text("minute : " + mn,100,100);
  // text("Hour : " + hr,100,150);

  s = map(sc,0,60,0,360);
  m = map(mn,0,60,0,360);
  h = map(hr,0,12,0,360);

  secHand();
  hourHand();
  minuteHand();

  stroke(255,0,255);
  strokeWeight(15);
  point(0,0)
  
  drawSprites();
}

function secHand(){
  var stro = 15;
  push();
  stroke(255,0,0);
  strokeWeight(stro);
  rotate(s);
  line(0,0,0,-175);
  pop();
  // ARC
  push();
  stroke(255,0,0);
  strokeWeight(stro);
  rotate(-90);
  noFill();
  arc(0,0,500,500,0,s);
  pop();
}
function minuteHand(){
  var stro = 15
  var color = "#00FF00";
  angleMode(DEGREES);
  push();
  stroke(color);
  strokeWeight(stro);
  rotate(m);
  line(0,0,0,-150);
  pop();
  // ARC
  push();
  stroke(color);
  strokeWeight(stro);
  rotate(-90);
  noFill();
  arc(0,0,460,460,0,m);
  pop();
}
function hourHand(){
  var stro = 15
  var color = "#0000FC";
  angleMode(DEGREES);
  push();
  stroke(color);
  strokeWeight(stro);
  rotate(h);
  line(0,0,0,-100);
  pop();
  // ARC
  push();
  stroke(color);
  strokeWeight(stro);
  rotate(-90);
  noFill();
  arc(0,0,420,420,0,h);
  pop();
}