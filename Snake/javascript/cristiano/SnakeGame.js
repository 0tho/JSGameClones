(function () {

    function SnakeGame () {
    	this.snake = new SnakeHead(),
    	this.food = new Food()
    }

 	
    SnakeGame.prototype.update = function () {
    	food.update();
    	snake.update();
    };

    SnakeGame.prototype.draw = function () {
    	food.draw();
		snake.draw();
    };

  	SnakeGame.prototype.checkInput = function () {
    	// Process inputs
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