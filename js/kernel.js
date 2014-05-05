
var Animatica = function() {
    this.scenario = [];
    this.spritesUpdater = {};
};

Animatica.prototype.createScene = function(obj) {
    this.currentScene = {
        background: obj.background,
        sound: obj.sound,
        library: {},
        animations: []
    };
    this.scenario.push(this.currentScene);
};

Animatica.prototype.addToSceneLibrary = function(objID, obj) {
    this.currentScene.library[objID] = obj;
};

Animatica.prototype.addAnimation = function(animObj,propObj) {
    this.currentScene.animations.push({
        animationProp: propObj,
        animationObj: animObj
    });
};

Animatica.prototype.play = function() {
    var body = $(document.body);
    var queues = {};
    var currTime = 0;

    for (var f = 0, senariosLength = this.scenario.length; f < senariosLength; f++) {

        var frame = this.scenario[f];

        //initializing library
        for (var i in frame.library) {
            var item = frame.library[i];

            if (frame.library[i].type === "image") {
                var element = $("<img/>").attr({
                    src: item.src,
                    id: i
                }).appendTo(body);

            } else if (frame.library[i].type === "text") {
                var element = $("<div/>").attr({
                    id: i
                }).text(item.string).appendTo(body);
            } else if (item.type === "sprite"){
                var element = $('<div/>').attr({
                    id: i
                }).css({
                    height: item.height,
                    width: item.width,
                    overflow: "hidden"
                }).append($('<img src="'+item.sprite+'"/>')).
                        appendTo(body);
                
                var length = item.orientation === "h" ? item.width : item.height;
                this.spritesUpdater[i] = {
                    element: element,
                    orientation: item.orientation,
                    frames: item.frames,
                    updateRate: item.updateRate || 1, 
                    length: length,
                    currentFrame: 0,
                    ticker: 0
                };
            }
            
            element.css({
                position: "absolute"
            });

            if (item.init) {
                item.init.call(element);
            }
        }

        //running the scene Animation
        for (var a = 0, aLen = frame.animations.length; a < aLen; a++) {
            var animation = frame.animations[a];
            var element = $("#" + animation.animationProp.on);

            //create the queue and push it in the timeline to it's appropriate 
            //time 
            var queue = queues[animation.animationProp.queue];
            if (!queue) {
                element.delay(currTime, animation.animationProp.queue);
                queue = queues[animation.animationProp.queue] = {
                    elements: {},
                    time: currTime
                };
            }

            var qElement = queues[animation.animationProp.queue].
                    elements[animation.animationProp.on];

            if (!qElement) {
                queues[animation.animationProp.queue].
                        elements[animation.animationProp.on] = element;
                element.delay(queues[animation.animationProp.queue].time,
                        animation.animationProp.queue);
            }

            if (animation.animationProp.delay) {
                element.delay(animation.animationProp.delay,
                        animation.animationProp.queue);
                queue.time += animation.
                        animationProp.delay;
            }

            element.animate(animation.animationObj, {
                duration: animation.animationProp.duration,
                queue: animation.animationProp.queue,
                start: animation.animationProp.start
            });
            queue.time += animation.animationProp.duration;
        }

        //find the queue that is ahead of them all and fill the gaps with
        //even Moer delays !! :D
        var ahead;
        for (var q in queues) {
            if (!ahead || queues[q].time[ahead] < queues[q].time[q]) {
                ahead = q;
            }
        }

        //Add the delays to the queues are late in the timeframe
        for (var q in queues) {
            if (q === ahead) {
                continue;
            }
            var delay = queues[ahead].time - queues[q].time;
            if (delay > 0) {
                for (var qelement in queues[q].elements) {
                    queues[q].elements[qelement].delay(delay, q);
                }
            }
        }
    }

    //dequeuing all queues !! let the Fun begin !!
    for (var q in queues) {
        for (var qelement in queues[q].elements) {
            queues[q].elements[qelement].dequeue(q);
        }
    }
    
    //let the heart beat ! 
    this.heartBeat();
};

Animatica.prototype.heartBeat = function(){
    for(var s in this.spritesUpdater){
        var sprite = this.spritesUpdater[s];
        if(sprite.ticker++ < sprite.updateRate){
            continue;
        }
        sprite.ticker = 0;
        var length = sprite.length;
        var margin = sprite.orientation === "h" ? "marginLeft" : "marginTop";
        
        sprite.element.find("img").css(margin,  -1*length*sprite.currentFrame);
        
        if(++sprite.currentFrame >= sprite.frames){
            sprite.currentFrame = 0;
        }
    }
    var self = this;
    setTimeout(function(){
        self.heartBeat();
    }, 41);
};