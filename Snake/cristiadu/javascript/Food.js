(function () {
	var TIMEOUT_FOOD = 30;
    var FOOD_SIZE = 4;
   
	function Food () {
    	this.X = 0;
    	this.Y = 0;
    	this.elapsedTime = 0;
    	
    	
    }

    Food.prototype.update = function()
    {
        elapsedTime++;

        if(elapsedTime >= TIMEOUT_FOOD)
            this.generateFood();

    };

    Food.prototype.draw = function(ctx,dt)
    {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect( this.X, this.Y, FOOD_SIZE, FOOD_SIZE);
    };

    Food.prototype.generateFood = function()
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

    Food.prototype.init = function(){
        this.generateFood();
    };

})();