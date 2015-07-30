(function () {

    var
    game = new SnakeGame(),
    cfg = {
        width: 800,
        height: 800,
        fps: 60
    },
    gameMachine = new GameMachine( game, cfg, '.gameStage' );
    game.init();
})();