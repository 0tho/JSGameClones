(function () {

    function SnakeGame () {


    }

    SnakeGame.prototype.width = 800;
    SnakeGame.prototype.height = 600;
    SnakeGame.prototype.tileSize = 10;
    SnakeGame.prototype.tsw = SnakeGame.prototype.width/SnakeGame.prototype.tileSize;
    SnakeGame.prototype.tsh = SnakeGame.prototype.height/SnakeGame.prototype.tileSize;

    SnakeGame.prototype.start = function () {
        this.parts = [];

        this.fruit = new Fruit();
        this.fruitsEated = 0;
        this.newPart = false;

        this.snakeHead = new SnakeHead();
        this.lasPart = this.snakeHead;

        this.fruit.newRandomPos( this );
        this.snakeHead.newRandomPos( this );

        this.newSnakePart();
        this.newSnakePart();
    };

    SnakeGame.prototype.update = function () {
        this.snakeHead.update( this );

        if( this.parts.length ) {
            var all = this.parts.length - (this.newPart ? 1 : 0);

            this.parts[0].update( this.snakeHead.lastDir );

            for( i = 1; i < all; i++ ) {
                var
                part = this.parts[i],
                previousPart = this.parts[i-1];
                part.update( previousPart.lastDir );
            }

            this.newPart = false;
        }
    };

    SnakeGame.prototype.draw = function ( ctx, dt) {
        //Draw black back screen
        ctx.fillStyle = '#000';
        ctx.fillRect( 0, 0, 800, 600 );

        //Draw sneak parts

        //Draw fruit
        this.fruit.draw( ctx, dt );
        this.snakeHead.draw( ctx, dt );

        for( i = 0; i < this.parts.length; i++ ) {
            var part = this.parts[i];
            part.draw( ctx, dt );
        }
    };

    SnakeGame.prototype.newSnakePart = function () {
        var part = new SnakePart();

        part.x = this.lasPart.x;
        part.y = this.lasPart.y;
        this.newPart = true;

        this.parts.push(part);
        this.lasPart = part;
    };

    SnakeGame.prototype.onSnakeCollideWithFruit = function ( event ) {
        this.fruitsEated++;
        this.fruit.newRandomPos( this );
        this.newSnakePart();
    };
    SnakeGame.prototype.onSnakeCollideWithSnake = function ( event ) {
        alert("GAME OVER");
        this.start();
    };

    window.SnakeGame = SnakeGame;
})();