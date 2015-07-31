(function () {


    function SnakeHead () {
        this.x = 0;
        this.y = 0;

        this.lastDir = {x:0, y:0};
        this.dir = {x:0, y:0};
    }

    SnakeHead.prototype.size = Math.floor( SnakeGame.prototype.tileSize*1.0 );

    SnakeHead.prototype.update = function ( game ) {
        this.lastDir = this.dir;

        if( Keyboard.isDown(37) ) {
            if(this.lastDir.x != 1)
                this.dir = {x:-1, y:0};
        }else if( Keyboard.isDown(39) ) {
            if(this.lastDir.x != -1)
                this.dir = {x:1, y:0};
        }else if( Keyboard.isDown(38) ) {
            if(this.lastDir.y != 1)
                this.dir = {x:0, y:-1};
        }else if( Keyboard.isDown(40) ) {
            if(this.lastDir.y != -1)
                this.dir = {x:0, y:1};
        }


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

        if(this.collideWith(game.fruit)) {
            game.onSnakeCollideWithFruit();
        }

        for(i = 2; i<game.parts.length; i++) {
            if(this.collideWith(game.parts[i])){
                game.onSnakeCollideWithSnake();
            }
        }
    };

    SnakeHead.prototype.draw = function ( ctx, dt) {
        var
        x = Math.floor( this.x + SnakeGame.prototype.tileSize*0.5 - this.size*0.5 ),
        y = Math.floor( this.y + SnakeGame.prototype.tileSize*0.5 - this.size*0.5 );

        ctx.fillStyle = '#00AA00';
        ctx.fillRect(x, y, this.size, this.size);
    };

    SnakeHead.prototype.newRandomPos = function ( game ) {
        this.x = Util.random(0, game.tsw) * game.tileSize;
        this.y = Util.random(0, game.tsh) * game.tileSize;
    };

    SnakeHead.prototype.collideWith = function ( obj ) {
        return this.x < obj.x + obj.size &&  this.x + this.size > obj.x &&
               this.y < obj.y + obj.size &&  this.y + this.size > obj.y;
    };


    window.SnakeHead = SnakeHead;
})();