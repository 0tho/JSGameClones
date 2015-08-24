(function () {

    var
    Util = Pong.Util,
    Pad = Pong.Pad,
    Ball = Pong.Ball;

    function Game ( is1AI, is2AI ) {

        this.is1AI = false || is1AI;
        this.is2AI = false || is2AI;

    }

    Game.prototype.width = 800;
    Game.prototype.height = 600;

    Game.prototype.start = function () {

        if( this.is1AI ) {
            this.pad2 = new Pad( new AIController() );
        } else {
            this.pad2 = new Pad( new HumanController( 38, 40 ) );
        }
        this.pad1 = new Pad( new HumanController( 38, 40 ) );
        this.pad1.x = 50;
        this.pad1.y = Game.prototype.height/2 - this.pad1.height/2;

        if( this.is2AI ) {
            this.pad2 = new Pad( new AIController() );
        } else {
            this.pad2 = new Pad( new HumanController( 38, 40 ) );
        }

        this.pad2.x = Game.prototype.width - 50;
        this.pad2.y = Game.prototype.height/2 - this.pad1.height/2;

        //Random 1 or -1
        this.turn = Util.random( 0, 1 ) == 1 ? 1 : -1;

        this.points1 = 0;
        this.points2 = 0;

        this.ball = new Ball();
    };

    Game.prototype.update = function () {



    };

    Game.prototype.draw = function () {

    };

    window.Pong = window.Pong || {};
    window.Pong.Game = Game;
})();