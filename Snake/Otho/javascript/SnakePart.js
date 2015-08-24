(function () {


    function Part () {
        this.x = 0;
        this.y = 0;

        this.lastDir = {x:0, y:0};
        this.dir = {x:0, y:0};
    }

    Part.prototype.size = Math.floor( Snake.Game.prototype.tileSize*1.0 );

    Part.prototype.update = function ( dir ) {
        this.lastDir = this.dir;
        this.dir = dir;

        this.x += this.dir.x * Snake.Game.prototype.tileSize;
        this.y += this.dir.y * Snake.Game.prototype.tileSize;

        if(this.x >= Snake.Game.prototype.width)
            this.x -= Snake.Game.prototype.width;

        if(this.x < 0)
            this.x += Snake.Game.prototype.width;

        if(this.y >= Snake.Game.prototype.height)
            this.y -= Snake.Game.prototype.height;

        if(this.y < 0)
            this.y += Snake.Game.prototype.height;
    };

    Part.prototype.draw = function ( ctx, dt) {
        var
        x = Math.floor( this.x + Snake.Game.prototype.tileSize * 0.5 - this.size * 0.5 ),
        y = Math.floor( this.y + Snake.Game.prototype.tileSize * 0.5 - this.size * 0.5 );

        ctx.fillStyle = '#00FF00';
        ctx.fillRect(x, y, this.size, this.size);
    };

    Part.prototype.newRandomPos = function ( game ) {
        this.x = Util.random(0, game.tsw) * game.tileSize;
        this.y = Util.random(0, game.tsh) * game.tileSize;
    };

    window.Snake = window.Snake || {};
    window.Snake.Part = Part;
})();