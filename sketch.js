var cells=[];
var x=25;
var y=25;
var index=1;
var row=1;
function setup() {
  createCanvas(800,800);
for(var k=1;k<11;k++){
  for(var i=1;i<11;i++){
var cell=new Cell(x,y,index);
cells.push(cell);
index=index+1;
x=x+50;
//console.log(cells);
}
x=25
y=y+50;
row=row+1;
}

}

function draw() {
  background(255,255,255);  
 for(var i=0;i<cells.length;i++){
   cells[i].display();
 }
  drawSprites();
}