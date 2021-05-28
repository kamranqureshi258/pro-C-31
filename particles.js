class Particles{
    constructor(x,y,radius){
        var options={
            restitution:1,
            friction:1
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.color=color(random(0,225),random(0,225),random(0,225))
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}