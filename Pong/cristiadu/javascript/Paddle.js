function Paddle(pos, pType){
	
	this.playerType = pType;
	this.position = pos;
	this.X = 0;
	this.Y = 0;
	this.points = 0;
}


Paddle.prototype.update = function () {
	
	if(this.playerType == PLAYER_TYPE.AI)
		this.moveAI();
	else
		this.checkInput();

	this.checkCollisionWithWall();
};

Paddle.prototype.draw = function (ctx,dt) 
{
  	ctx.fillStyle = '#fff';
    ctx.fillRect(this.X, this.Y, THICKNESS_PADDLE, SIZE_PADDLE);
};


Paddle.prototype.checkInput = function () 
{

	if(this.playerType == PLAYER_TYPE.HUMAN)
	{
		if(Keyboard.isDown(KEYCODES.down))
			this.Y += SPEED_PADDLE;
		else if(Keyboard.isDown(KEYCODES.up))
			this.Y -= SPEED_PADDLE;
	}
	else if(this.playerType == PLAYER_TYPE.HUMAN2)
	{
		if(Keyboard.isDown(KEYCODES.w))
	        this.Y -= SPEED_PADDLE;
		else if(Keyboard.isDown(KEYCODES.s))
			this.Y += SPEED_PADDLE;
		
	}

};

Paddle.prototype.moveAI = function () {

	if((this.Y + SIZE_PADDLE/2) > game.ball.Y)
		this.Y -= REDUCED_SPEED_AI;
	else if((this.Y + SIZE_PADDLE/2) < game.ball.Y)
		this.Y += REDUCED_SPEED_AI;

};

// Used to calculate the angles
Paddle.prototype.getBounceAngle = function (intersectY) 
{
	// Y position relative to paddle height.
	var relativeIntersection = this.Y + (SIZE_PADDLE/2) - intersectY;

	return (relativeIntersection/(SIZE_PADDLE/2))*MAX_BOUNCE_ANGLE;
};

Paddle.prototype.checkCollisionWithWall = function () {

	// Collision with wall
	if(this.Y <= 0)
		this.Y = 0;
	else if(this.Y + SIZE_PADDLE >= game.height)
		this.Y = game.height - SIZE_PADDLE;
};

Paddle.prototype.init = function () {
	if(this.position == POSITION.RIGHT)
	{
		this.X = game.width - THICKNESS_PADDLE;
		this.Y = game.height/2;
	}
	else if(this.position == POSITION.LEFT)
	{
		this.X = 0;
		this.Y = game.height/2;
	}

	this.points = 0;
};



