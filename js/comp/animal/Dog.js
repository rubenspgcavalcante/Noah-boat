/**
 * A dog :)
 * @augments NOAH.Comp.Animal
 */
NOAH.Comp.Dog = function(){

    /**
     * Dogs goes au
     * @override {NOAH.Comp.Animal}
     */
    this.say = function(){
        alert("Au au!");
        this.triggerSay();
    };

};

NOAH.Comp.Dog.prototype = new NOAH.Comp.Animal("Dog", NOAH.rsc.imgs.animals.dog);