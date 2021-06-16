class Cell{
    constructor(x,y,index){
     this.x=x;
     this.y=y;
     this.index=index;
    }

display(){
    
    if(row%2==0){
        if(this.index%2==0){
            fill("lightblue")
             
           }else{
            fill ("yellow")
           }
    }else{
        if(this.index%2==0){
            fill("yellow")
             
           }else{
            fill ("lightblue")
           }
    }
    rect(this.x,this.y,50,50);
    textSize(20);
    fill("black");
    text(this.index,this.x+15,this.y+15);
console.log(row);
}
}

