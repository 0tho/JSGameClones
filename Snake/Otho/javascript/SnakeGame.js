(function () {

    function Game () {


    }

    Game.prototype.width = 800;
    Game.prototype.height = 600;
    Game.prototype.tileSize = 10;
    Game.prototype.tsw = Game.prototype.width/Game.prototype.tileSize;
    Game.prototype.tsh = Game.prototype.height/Game.prototype.tileSize;

    Game.prototype.start = function () {
        this.parts = [];

        this.fruit = new Snake.Fruit();
        this.fruitsEated = 0;
        this.newPart = false;

        this.snakeHead = new Snake.Head();
        this.lasPart = this.snakeHead;

        this.fruit.newRandomPos( this );
        this.snakeHead.newRandomPos( this );

        this.newSnakePart();
        this.newSnakePart();
    };

    Game.prototype.update = function () {
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

    Game.prototype.draw = function ( ctx, dt) {
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

    Game.prototype.newSnakePart = function () {
        var part = new Snake.Part();

        part.x = this.lasPart.x;
        part.y = this.lasPart.y;
        this.newPart = true;

        this.parts.push(part);
        this.lasPart = part;
    };

    Game.prototype.onSnakeCollideWithFruit = function ( event ) {
        this.fruitsEated++;
        this.fruit.newRandomPos( this );
        this.newSnakePart();
    };
    Game.prototype.onSnakeCollideWithSnake = function ( event ) {
        alert("GAME OVER");
        this.start();
    };

    window.Snake = window.Snake || {};
    window.Snake.Game = Game;
})();