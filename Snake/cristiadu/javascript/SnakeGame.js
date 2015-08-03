(function () {
	var ARROWS_KEYCODES = {
		"left": 37,
		"up": 38, 
		"right": 39, 
		"down": 40
	}

    function SnakeGame () {
    	this.snake = new SnakeHead();
    	this.food = new Food();
    	this.gameOver = false;
    }

 	
    SnakeGame.prototype.update = function () {
    	this.checkInput();
    	if(!gameOver)
    	{
			food.update();
    		snake.update();
    	}
    };

    SnakeGame.prototype.draw = function () {

    	food.draw();
		snake.draw();
    };

  	SnakeGame.prototype.checkInput = function () {
    	// Process inputs
    	var direction = null;

		if(!gameOver)
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
	    		snake.changeDirection(direction);
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
    	snake.init();
    	food.init();
    };

    SnakeGame.prototype.gameIsOver = function () 
    {
    	// I have to figure out how this PAUSED state from the GameMachine works
    	//window.GameMachine = STATES.PAUSED;
    	this.gameOver = true;
    };

    window.SnakeGame = SnakeGame;
})();