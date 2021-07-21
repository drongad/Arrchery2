class PlayerArcher{

    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.x = x
        this.y = y
        this.height = height
        this.image = loadImage("playerArcher.png")
        World.add(world, this.body)
        Matter.Body.setAngle(this.body, -PI/2)

    }

    display(){
        var position = this.body.position
        var angle = this.body.angle
        if(keyIsDown(DOWN_ARROW) && angle < -1.2){
            angle += 0.05
            Matter.Body.setAngle(this.body,angle)
        }
        if(keyIsDown(UP_ARROW) && angle > -2){
            angle -= 0.05
            Matter.Body.setAngle(this.body,angle)
        }
        push()
        translate(position.x, position.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0,0, this.width, this.height)
        pop()
       
    }
}