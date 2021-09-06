class Hierro {
	constructor(x, y) {
		var options = {
		  'density':0.8,
		  'friction':3,
		  'restitution':30
		};
		this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);
	    }
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("skyblue");
			fill("skyblue");
			

			pop()
	}

}