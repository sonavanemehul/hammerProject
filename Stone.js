class Stone{
   constructor(x, y, width, height)  {
        var options = {
            restitution:0.3,
            friction:5,
            density:0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rect(CENTER);
        //rectangle(this.body, 0, 0, this.width, this.height);
        pop();
      }
}