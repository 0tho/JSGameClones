(function () {

    var SIZE_SNAKE = 8;

    function SnakeBody (initialX,initialY,previous) {
        this.next = null;
        this.prev = previous;
        this.direction = previous.direction;
        this.lastDirection = previous.direction;
        this.X = initialX;
        this.Y = initialY;
        
    }

    SnakeBody.prototype.update = function()
    {
        // Next element will get direction from before the update
        this.lastDirection = this.direction;
        this.direction = prev.lastDirection;

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

        if(this.next != null)
            next.update();
    };
    
    SnakeBody.prototype.draw = function()
    {
        if(this.next != null)
            next.draw();
    };
    
    SnakeBody.prototype.increase = function()
    {
        if(next != null)
            next.increase();
        else
        {
            switch(this.direction)
            {
                case DIRECTION.RIGHT:
                    next = new SnakeBody(this.X - SIZE_SNAKE,this.Y,this);
                break;
                case DIRECTION.LEFT:
                    next = new SnakeBody(this.X + SIZE_SNAKE,this.Y,this);
                break;
                case DIRECTION.UP:
                    next = new SnakeBody(this.X,this.Y - SIZE_SNAKE,this);
                break;
                case DIRECTION.DOWN:
                    next = new SnakeBody(this.X,this.Y + SIZE_SNAKE,this);
                break;
                default:
                    next = new SnakeBody(this.X - SIZE_SNAKE,this.Y,this);
                break;
            }
        }
            

    };

})();