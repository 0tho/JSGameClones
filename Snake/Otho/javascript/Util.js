(function () {

    function Util () {

    }

    Util.prototype.random = function (min, max) {
        var dif = max - min;

        return Math.floor(Math.random() * dif) + min;
    };

    window.Util = new Util();
})();