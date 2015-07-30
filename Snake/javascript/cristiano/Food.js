(function () {
	var TIMEOUT_FOOD = 30;
	function Food () {
    	this.X = 0;
    	this.Y = 0;
    	this.elapsedTime = 0;
    	this.update = function()
    	{
    		elapsedTime++;

    		if(elapsedTime >= TIMEOUT_FOOD)
    			this.generateFood();

    	};
    	this.draw = function()
    	{

    	};

    	this.generateFood = function()
    	{
    		var randomX,randomY;
    		var inSnake = true;

    		while(inSnake)
    		{
    			// Implement that later
    			randomX = getRandomInt(0,GameMachine.width); 
    			randomY = getRandomInt(0,GameMachine.height);
    			inSnake = false;
    		}

    		this.X = randomX;
    		this.Y = randomY;
    		this.elapsedTime = 0;
    	};
    	this.init = function(){
    		this.generateFood();
    	};

    	function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
    }

})();