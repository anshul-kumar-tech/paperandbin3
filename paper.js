class Paper{
    constructor(x,y,radius,bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");
        this.pointB = pointB
        this.paper = Constraint.create(options);
        World.add(world, this.paper);
        this.trajectory=[];
        World.add(world,this.body);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        stroke(48,22,8);
    if(pointA.x < 220) {
        strokeWeight(7);
        line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling3,pointA.x -30, pointA.y -10,15,30);
}
    else{
        strokeWeight(3);
        line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
    }
        ellipse(pos.x, pos.y, this.radius);
    }
}

stroke(48,22,8);
if(pointA.x < 220) {
    strokeWeight(7);
    line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
    line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
    image(this.sling3,pointA.x -30, pointA.y -10,15,30);
}
    else{
        strokeWeight(3);
        line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
    }