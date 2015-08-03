(function () {
      var SIZE_SNAKE = 8;

    // Declaring the directions constant
    var DIRECTION = {
    UP: 'Up',
    DOWN: 'Down',
    LEFT: 'Left',
    RIGHT: 'Right'
    };
    
    function SnakeHead () {
        this.body = null;
        this.direction = DIRECTION.RIGHT;
        this.lastDirection = DIRECTION.RIGHT;
        this.X = 2;
        this.Y = 2;
       
    }

    SnakeHead.prototype.update = function()
    {
        switch(this.direction)
        {
            case DIRECTION.RIGHT:
                this.X = this.X + SIZE_SNAKE;
            break;
            case DIRECTION.LEFT:
                this.X = this.X - SIZE_SNAKE;
            break;
            case DIRECTION.UP:
                this.Y = this.Y - SIZE_SNAKE;
            break;
            case DIRECTION.DOWN:
                this.Y = this.Y + SIZE_SNAKE;
            break;
            default:
                this.X = this.X + SIZE_SNAKE;
            break;
        }

        body.update();
    };

    SnakeHead.prototype.draw = function(ctx,dt)
    {
        ctx.fillStyle = '#00AA00';
        ctx.fillRect( this.X, this.Y, SIZE_SNAKE, SIZE_SNAKE);
        body.draw(ctx,dt);  
    };

    SnakeHead.prototype.init = function()
    {
        this.X = 2;
        this.Y = 2;
        this.direction = DIRECTION.RIGHT;
        this.lastDirection = DIRECTION.RIGHT;

        // Setting first element from body, and increasing its size to get 3 blocks in the beginning of the game
        this.body = new SnakeBody();
        this.body.increase();
    };

    SnakeHead.prototype.checkCollision = function(){};
    
    SnakeHead.prototype.changeDirection = function(updatedDirection)
    { 
        this.lastDirection = this.direction;
        this.direction = updatedDirection

    };
    
    SnakeHead.prototype.isEatingFood = function(){ return false;};

    window.SnakeHead = SnakeHead;
})();