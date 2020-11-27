class Sling{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness : 0.05,
            length: 6 
        }
        this.pointB = pointB
        this.chain = Constraint.create(option);
        World.add(world,this.chain);
    }

    fly(){
        this.sling.bodyA = null
    }
    
    display(){
        var point1 = this.chain.bodyA.position
        var point2 = this.chain.bodyB.position
        line(point1.x,point1.y,point2.x,point2.y)
    }
}