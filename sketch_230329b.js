let x;
let y;
let a;
let p;
let b;

function setup() {
  createCanvas(800, 800);
  background(54, 77, 153);
  
  a=true
  x=0
  y=0
  p=0
}
function draw() {
  
  textSize(10);
  fill(0, 0, 3);
  textSize(20);
  text("press space bar to make the rain stop", 5,10);
  text("move the sun to make it grow",5,30);
  
  if(a===true){
    x=random(800);
    y=random(800);  
  
    //the rain   
    background(54, 77, 153);  
    fill(96, 155, 209)
    noStroke();
    ellipse(x+10,y+10,6,30)
  }
  
  else{      
  
    //the sun
    fill(250, 190, 77)
    noStroke()
    background(250, 234, 157)
    circle(mouseX, mouseY, 100)

    //flower
    fill(21, 138, 62);
    rect(399,800,10,p);
    fill(255,192,203)
    ellipse(420,p+805,30,50);
    ellipse(390,p+805,30,50);
    ellipse(405,p+800,30,60);
    if(mouseY<300){
      p=map(mouseY,0,500,-100,-500)
      
    }
  }
  
  //grass
  fill(21, 138, 62);
  noStroke(); 
  rect(0,700,800,100);
 
}

//the rain function
 function mousePressed(){
   if(mouseButton===LEFT){
     a=true
   }
 }

function keyPressed(){
//the sun function
  if(keyCode ===32){
    a=false;
  }
}
