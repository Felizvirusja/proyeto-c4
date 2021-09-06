class Stone{
	constructor(x, y) {
		var options = {
		  'density':0.8,
		  'friction':0.9,
		  'restitution':12
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
			stroke("yellow");
			fill("blue");
	}

}