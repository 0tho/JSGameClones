(function () {

    var Util = Snake.Util;

    function Fruit () {
        this.x = 0;
        this.y = 0;
    }

    Fruit.prototype.size = Math.floor( Snake.Game.prototype.tileSize*0.6 );

    Fruit.prototype.update = function () {

    };

    Fruit.prototype.draw = function ( ctx, dt ) {
        var
        x = Math.floor( this.x + Snake.Game.prototype.tileSize*0.5 - this.size*0.5 ),
        y = Math.floor( this.y + Snake.Game.prototype.tileSize*0.5 - this.size*0.5 );

        ctx.fillStyle = '#FF0000';
        ctx.fillRect( x, y, this.size, this.size );
    };

    Fruit.prototype.newRandomPos = function ( game ) {
        this.x = Util.random( 0, game.tsw ) * game.tileSize;
        this.y = Util.random( 0, game.tsh)  * game.tileSize;
    };

    window.Snake = window.Snake || {};
    window.Snake.Fruit = Fruit;
})();