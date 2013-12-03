/**
 * The animal boat
 * @param {String|jQuery} container
 * @constructor
 */
NOAH.Comp.Boat = function(container){
    var $this = $(container);
    var pos = "center";

    /** @type {NOAH.Comp.Animal[]} */
    var animals = [];

    var _initBinds = function(){
        $this.click(function(){
            if(pos == "center"){
                $this.animate({marginLeft: 0}, 3000);
                pos = "left";
            }
            else if(pos == "left"){
                $this.animate({marginLeft: "25%"}, 3000);
                pos = "center";
            }

        });
    };

    /**
     * The object constructor
     * @private
     */
    var _init = function(){
        $this.addClass("boat-container");
        var $boat = $("<img>", {class: "boat"}).attr("src", NOAH.rsc.imgs.boat);
        var $animalContainer = $("<div>", {class: "animal-container"});
        $this.append($boat).append($animalContainer);
        _initBinds();
    };
    _init();

    /**
     * Verify if is overcrowded
     * @returns {boolean}
     * @private
     */
    var _overCrowded = function(){
        return animals.length >= 3;
    };

    /**
     * Adds a animal to the boat
     * @param {NOAH.Comp.Animal} animal
     */
    this.addAnimal = function(animal){
        if(!_overCrowded()){
            animals.push(animal);
            animal.render($this.find(".animal-container"));
        }
        else{
            throw new Error();
        }
    };

    /**
     * Get all the animals in boat
     * @returns {Animal[]}
     */
    this.getAnimals = function(){
        return animals;
    }

};
