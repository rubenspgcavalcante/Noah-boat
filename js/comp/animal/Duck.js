/**
 * A duck :)
 * @augments NOAH.Comp.Animal
 */
NOAH.Comp.Duck = function(){

    /**
     * What does the duck say?
     * @override {NOAH.Comp.Animal}
     */
    this.say = function(){
        alert("Quack!");
    };
};

NOAH.Comp.Duck.prototype = new NOAH.Comp.Animal("Duck", NOAH.rsc.imgs.animals.duck);