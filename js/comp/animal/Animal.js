/**
 * The animal base object
 * @param {String} name The animal name
 * @param {String} img The image representation
 * @constructor
 */
NOAH.Comp.Animal = function(name, img){

    this._name = name;
    this._img = img || NOAH.rsc.imgs.no_image;
    this._dom = null;

    /**
     * Receives the animal implementation and
     * binds this events
     * @param {NOAH.Comp.Animal} animalImpl
     * @private
     */
    var _bindEvents = function(animalImpl){
        animalImpl._dom.click(function(event){
            animalImpl.say();
            event.stopPropagation();
        });

        animalImpl._dom.mouseover(function(event){
            animalImpl._dom.stop(true, true);
            animalImpl.jump();
        });
    };

    /**
     * Renders the animal
     * @param {String|jQuery} container Where to render the animal
     */
    this.render = function(container){
        this._dom = $("<img>").attr("src", this._img);
        container.append(this._dom);

        /*
         We need to pass the this reference, as a implementation
         of the animal (e.g. Dog) and not the reference of this
         constructor instance
         */
        _bindEvents(this);
    };

    /**
     * Triggers the event say
     */
    this.triggerSay = function(){
        this._dom.trigger(NOAH.events.say, this._name);
    };

    /**
     * Animal jump!
     */
    this.jump = function(){
        this._dom.animate({top: -10}, "fast").animate({top: 0});
    };

    /**
     * What does the animal say
     * @abstract
     * @throws Error
     */
    this.say = function(){
        throw new Error(this._name + " must implement say");
    };
};
