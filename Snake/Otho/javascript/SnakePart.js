(function () {


    function SnakePart () {
        this.x = 0;
        this.y = 0;

        this.lastDir = {x:0, y:0};
        this.dir = {x:0, y:0};
    }

    SnakePart.prototype.size = Math.floor( SnakeGame.prototype.tileSize*1.0 );

    SnakePart.prototype.update = function ( dir ) {
        this.lastDir = this.dir;
        this.dir = dir;

        this.x += this.dir.x * SnakeGame.prototype.tileSize;
        this.y += this.dir.y * SnakeGame.prototype.tileSize;

        if(this.x >= SnakeGame.prototype.width)
            this.x -= SnakeGame.prototype.width;

        if(this.x < 0)
            this.x += SnakeGame.prototype.width;

        if(this.y >= SnakeGame.prototype.height)
            this.y -= SnakeGame.prototype.height;

        if(this.y < 0)
            this.y += SnakeGame.prototype.height;
    };

    SnakePart.prototype.draw = function ( ctx, dt) {
        var
        x = Math.floor( this.x + SnakeGame.prototype.tileSize*0.5 - this.size*0.5 ),
        y = Math.floor( this.y + SnakeGame.prototype.tileSize*0.5 - this.size*0.5 );

        ctx.fillStyle = '#00FF00';
        ctx.fillRect(x, y, this.size, this.size);
    };

    SnakePart.prototype.newRandomPos = function ( game ) {
        this.x = Util.random(0, game.tsw) * game.tileSize;
        this.y = Util.random(0, game.tsh) * game.tileSize;
    };

    window.SnakePart = SnakePart;
})();