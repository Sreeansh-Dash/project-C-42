class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("PRO-C43 image/Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.image = loadImage("PRO-C43 image/bat/Bestman-01.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(framecount>=200){
        image(this.image,pos.x,pos.y+70,300,300);
        }
    }
}
