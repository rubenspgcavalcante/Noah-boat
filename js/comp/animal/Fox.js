/**
 * A fox :)
 * @augments NOAH.Comp.Animal
 */
NOAH.Comp.Fox = function(){

    /**
     * What the does the fox say?
     * @override {NOAH.Comp.Animal}
     */
    this.say = function(){
        window.open("http://youtu.be/jofNR_WkoCE");
    };
};

NOAH.Comp.Fox.prototype = new NOAH.Comp.Animal("Fox", NOAH.rsc.imgs.animals.fox);