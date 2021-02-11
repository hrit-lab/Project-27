class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();
    }
}