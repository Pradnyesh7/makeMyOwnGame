class Slingshot{
    constructor(A,B){
        var options = {
            bodyA:A,
            pointB:B,
            stiffness:0.04,
            length:10
        }
        this.pointB = B
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

        this.slingshot1 = loadImage("assets/sling1.png");
        this.slingshot2 = loadImage("assets/sling2.png");
        this.slingshot3 = loadImage("assets/sling3.png");
}   


    display(){
        image(this.slingshot1,200,200);
        image(this.slingshot2,170,200);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8)
            if(pointA.x < 220){
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
                image(this.slingshot3,pointA.x-30,pointA.y-10,15,30);

            }
            else{
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                image(this.slingshot3,pointA.x+25,pointA.y-10,15,30);
            }
            
            pop()
        }
    }

    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }
}