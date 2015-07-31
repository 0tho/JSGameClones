(function () {

	// Declaring the directions constant
	var DIRECTION = {
	UP: 'Up',
	DOWN: 'Down',
	LEFT: 'Left',
	RIGHT: 'Right'
	};

    var
    game = new SnakeGame(),
    cfg = {
        width: 800,
        height: 800,
        fps: 60
    },
    gameMachine = new GameMachine( game, cfg, '.gameStage' );

    game.init();
    gameMachine.start();

})();