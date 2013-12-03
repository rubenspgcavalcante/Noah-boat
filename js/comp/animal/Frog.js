/**
 * A frog :)
 * @augments NOAH.Comp.Animal
 */
NOAH.Comp.Frog = function(){

    /**
     * Frogs goes au
     * @override {NOAH.Comp.Animal}
     */
    this.say = function(){
        var sound = new Audio("sounds/frog.wav");
        sound.play();
        this.triggerSay();
    };
};

NOAH.Comp.Frog.prototype = new NOAH.Comp.Animal("Frog", NOAH.rsc.imgs.animals.frog);