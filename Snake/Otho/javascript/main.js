(function () {

    var
    game = new SnakeGame(),
    cfg = {
        width: 800,
        height: 600,
        fps: 25
    },
    gameMachine = new GameMachine( game, cfg, '.gameStage' );
    gameMachine.game.start();
    gameMachine.start();

})();