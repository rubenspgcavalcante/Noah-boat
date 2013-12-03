/**
 * A simple counter
 * @param {jQuery|String} container
 * @constructor
 */
NOAH.Comp.SayCounter = function(container){
    var $this = $(container);
    var cnt = 0;

    var _init = function(){
        $this.html(cnt);
    };
    _init();

    this.increment = function(name){
        cnt += 1;
        $this.html(cnt + " " + name);
    };

};