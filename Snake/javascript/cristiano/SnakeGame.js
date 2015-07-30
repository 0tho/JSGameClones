(function () {
	var ARROWS_KEYCODES = {
		"left": 37,
		"up": 38, 
		"right": 39, 
		"down": 40
	}

    function SnakeGame () {
    	this.snake = new SnakeHead(),
    	this.food = new Food()
    }

 	
    SnakeGame.prototype.update = function () {
    	this.checkInput();
    	food.update();
    	snake.update();
    };

    SnakeGame.prototype.draw = function () {
    	food.draw();
		snake.draw();
    };

  	SnakeGame.prototype.checkInput = function () {
    	// Process inputs
    	var direction = null;

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

    };

    SnakeGame.prototype.init = function () {
    	snake.init();
    	food.init();
    };

    SnakeGame.prototype.gameOver = function () 
    {
    	// I have to figure out how this PAUSED state from the GameMachine works
    	window.GameMachine = STATES.PAUSED;
    };

    window.SnakeGame = SnakeGame;
})();