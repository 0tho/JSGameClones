 (function () {

	 function Util(){
	 	
	    }

	    Util.prototype.getRandomInt = function(min, max) {
	            return Math.floor(Math.random() * (max - min + 1)) + min;
	        };

	    window.Util = new Util();
	
})();
 