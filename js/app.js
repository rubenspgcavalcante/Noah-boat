NOAH.app = {
    boat: null,

    counter: null,

    _bindEvents: function(){
        var that = NOAH.app;

        $("body").unbind(NOAH.events.say).bind(NOAH.events.say, function(event, data){
            that.counter.increment(data);
        });

        $(".animal-container").bind(NOAH.events.say, function(event, data){
            console.log(data);
        });

    },

    start: function(){
        var that = NOAH.app;
        that.counter = new NOAH.Comp.SayCounter(".counter");


        that.boat = new NOAH.Comp.Boat(".center");

        try{
            that.boat.addAnimal(new NOAH.Comp.Dog());
            that.boat.addAnimal(new NOAH.Comp.Fox());
            that.boat.addAnimal(new NOAH.Comp.Frog());
        }
        catch (e){
            if(e instanceof NOAH.Error.OverCrowdedError){
                alert("The boat is overcrowded");
            }

        }
        that._bindEvents();
    }
};


$(document).ready(function(){
    NOAH.app.start();
});