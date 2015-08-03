(function () {
	var ARROWS_KEYCODES = {
		"left": 37,
		"up": 38, 
		"right": 39, 
		"down": 40
	}

    function SnakeGame (w,h) {
        this.wid = w;
        this.hei = h;
    	this.snake = new SnakeHead();
    	this.food = new Food();
    	this.gameOver = false;
    }

 	
    SnakeGame.prototype.update = function () {
    	this.checkInput();
    	if(!this.gameOver)
    	{
			this.food.update();
    		this.snake.update();
    	}
    };

    SnakeGame.prototype.draw = function (ctx,dt) {
        ctx.fillStyle = '#000';
        ctx.fillRect( 0, 0, this.wid, this.hei);
    	this.food.draw(ctx,dt);
		this.snake.draw(ctx,dt);
    };

  	SnakeGame.prototype.checkInput = function () {
    	// Process inputs
    	var direction = null;

		if(!this.gameOver)
		{
			if(Keyboard.isDown(ARROWS_KEYCODES.left))
                direction = DIRECTION.LEFT;
			else if(Keyboard.isDown(ARROWS_KEYCODES.right))
				direction = DIRECTION.RIGHT;
			else if(Keyboard.isDown(ARROWS_KEYCODES.down))
				direction = DIRECTION.DOWN;
			else if(Keyboard.isDown(ARROWS_KEYCODES.up))
				direction = DIRECTION.UP;

			
			if(direction != null)
	    		this.snake.changeDirection(direction);
		}
		else if(Keyboard.isDown(27))
		{
			// ESC key was pressed
			// Reset game
			this.init();
		}
		


    };

    SnakeGame.prototype.init = function () {
    	this.gameOver = false;
    	this.snake.init();
    	this.food.init();
    };

    SnakeGame.prototype.gameIsOver = function () 
    {
    	// I have to figure out how this PAUSED state from the GameMachine works
    	//window.GameMachine = STATES.PAUSED;
    	this.gameOver = true;
    };

    window.SnakeGame = SnakeGame;
})();