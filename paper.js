class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0.8,
            density: 1.2
        }


        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius
        this.image = loadImage("paper.png")

        World.add(world, this.body);

    }
    display() {

        var angle = this.body.angle;

        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        rectMode(CENTER)


        fill("red")
        ellipse(0, 0, this.r, this.r)
        pop();
    }




}