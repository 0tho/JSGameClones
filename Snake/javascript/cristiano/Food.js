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
    		this.X = getRandomInt(0,GameMachine.width);
    		this.Y = getRandomInt(0,GameMachine.height);;
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