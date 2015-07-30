(function () {

    function SnakeGame () {
    	this.snake = new SnakeHead(),
    	this.food = new Food()
    }

 	function SnakeBody () {
		this.next = null;
    	this.direction = "left";
    	this.X = ;
    	this.Y = ;
    	this.update = function()
    	{
    		if(this.next != null)
    			next.update();
    	};
    	this.draw = function()
    	{
    		if(this.next != null)
    			next.draw();
    	};
    	this.increase = function()
    	{
    		if(next != null)
    			next.increase();
    		else
    		{
    			next = new SnakeBody();
    		}
    	};
    }

    function SnakeHead () {
    	this.body = new SnakeBody();
    	this.direction = "left";
    	this.X = ;
    	this.Y = ;
    	this.update = function()
    	{
    		body.update();
    	};
    	this.draw = function()
    	{
    		body.draw();
    	};
    	this.init = function()
    	{
    		body.increase();
    	};

    	this.checkCollision = function(){};
    	this.changeDirection = function(){};
    	this.isEatingFood = function(){ return false;};
    }

    function Food () {
    	this.X = ;
    	this.Y = ;
    	this.elapsedTime = ;
    	this.update = function(){};
    	this.draw = function(){};
    	this.generateFood = function(){};
    	this.init = function(){};
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

    SnakeGame.prototype.gameOver = function () {
    };

    window.SnakeGame = SnakeGame;
})();