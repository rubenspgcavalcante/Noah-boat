/**
 * The boat overcrowd error
 * @constructor
 */
NOAH.Error.OverCrowdedError = function(){
    this.msg = "Its overcrowded!";
};

NOAH.Error.OverCrowdedError.prototype = new Error();