class ComputerArcher{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.x = x
        this.y = y
        this.height = height
        this.image = loadImage("computerArcher.png")
        World.add(world, this.body)
        Matter.Body.setAngle(this.body, PI/2)

    }

    display() {
        var position = this.body.position
        var angle = this.body.angle
        push()
        translate(position.x, position.y)
        rotate(angle)
        Matter.Body.setAngle(this.body, PI/2)
        imageMode(CENTER)
        image(this.image, 0,0, this.width, this.height)
        pop()
    }
}
