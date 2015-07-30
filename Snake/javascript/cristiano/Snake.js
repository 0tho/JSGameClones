(function () {

    var SIZE_SNAKE = 8;

    function SnakeBody (initialX,initialY,previous) {
        this.next = null;
        this.prev = previous;
        this.direction = previous.direction;
        this.lastDirection = previous.direction;
        this.X = initialX;
        this.Y = initialY;
        this.update = function()
        {
            // Next element will get direction from before the update
            this.lastDirection = this.direction;
            this.direction = prev.direction;

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
    }

    function SnakeHead () {
        this.body = null;
        this.direction = DIRECTION.RIGHT;
        this.lastDirection = DIRECTION.RIGHT;
        this.X = 2;
        this.Y = 2;
        this.update = function()
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
        this.draw = function()
        {
            body.draw();
        };
        this.init = function()
        {
            this.X = 2;
            this.Y = 2;
            this.direction = DIRECTION.RIGHT;
            this.lastDirection = DIRECTION.RIGHT;

            // Setting first element from body, and increasing its size to get 3 blocks in the beginning of the game
            this.body = new SnakeBody();
            this.body.increase();
        };

        this.checkCollision = function(){};
        this.changeDirection = function(updatedDirection)
        { 
            this.lastDirection = this.direction;
            this.direction = updatedDirection

        };
        this.isEatingFood = function(){ return false;};
    }
})();