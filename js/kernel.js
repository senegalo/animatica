
$(function() {
    var scenario = [
        {
            background: "bg1.jpg",
            sound: "background.mp3",
            library: {
                duckHorse: {
                    src: "images/duck_horse.jpg",
                    type: "image",
                    init: function() {
                        this.css({
                            top: 0,
                            left: 0,
                            opacity: 0,
                            position: "absolute"
                        });
                    }
                }, 
                duckHorseText: {
                    string: "Ana Duck Horse... we ba7eb Masr !",
                    type: "text",
                    init: function() {
                        this.css({
                            bottom: 100,
                            left: 0,
                            opacity: 0,
                            position: "absolute"
                        });
                    }
                },
                sharkHorse: {
                    src: "images/shark_horse.jpg",
                    type: "image",
                    init: function() {
                        this.css({
                            top: 0,
                            left: 0,
                            opacity: 0,
                            position: "absolute"
                        });
                    }
                }, 
                sharkHorseText: {
                    string: "Ana Shark Horse... we ba7eb Masr !",
                    type: "text",
                    init: function() {
                        this.css({
                            bottom: 100,
                            left: 0,
                            opacity: 0,
                            position: "absolute"
                        });
                    }
                }
            },
            animations: [
                //fadding in of the shark / text
                {
                    animationProp: {
                        duration: 1000,
                        on: "sharkHorse",
                        queue: "q1"
                    },
                    animationObj: {
                        left: 500 ,
                        right: 100,
                        opacity: 1
                    }
                },
                {
                    animationProp: {
                        duration: 1000,
                        on: "sharkHorseText",
                        queue: "q2"
                    },
                    animationObj: {
                        left: 500 ,
                        right: 100,
                        opacity: 1
                    }
                },
                
                //Fadding out of the shark / text
                {
                    animationProp: {
                        delay: 3000,
                        duration: 1000,
                        on: "sharkHorse",
                        queue: "q1"
                    },
                    animationObj: {
                        opacity: 0
                    }
                },
                {
                    animationProp: {
                        delay: 3000,
                        duration: 1000,
                        on: "sharkHorseText",
                        queue: "q2"
                    },
                    animationObj: {
                        opacity: 0
                    }
                },
                
                //Fadding in the duck horse /text 
                {
                    animationProp: {
                        duration: 1000,
                        on: "duckHorse",
                        queue: "q1",
                        start: function(){
                            console.log('IT WORKED');
                        }
                    },
                    animationObj: {
                        opacity: 1,
                        left: 100,
                        top:100
                    }
                },
                {
                    animationProp: {
                        duration: 1000,
                        on: "duckHorseText",
                        queue: "q2"
                    },
                    animationObj: {
                        opacity: 1,
                        left: 100,
                        top: 100
                    }
                },
                
                {
                    animationProp: {
                        duration: 1000,
                        delay: 2000,
                        on: "duckHorse",
                        queue: "q1",
                        start: function(){
                            console.log('IT WORKED');
                        }
                    },
                    animationObj: {
                        opacity: 0
                    }
                },
                {
                    animationProp: {
                        duration: 1000,
                        delay: 2000,
                        on: "duckHorseText",
                        queue: "q2"
                    },
                    animationObj: {
                        opacity: 0
                    }
                }
            ]
        }
    ];

    var body = $(document.body);
    var queues = {};
    var currTime = 0;

    for (var f = 0, senariosLength = scenario.length; f < senariosLength; f++) {
        
        var frame = scenario[f];

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
            }

            if (item.init) {
                item.init.call(element);
            }
        }

        //running the scene Animation
        for (var a = 0, aLen = frame.animations.length; a < aLen; a++) {
            var animation = frame.animations[a];
            var element = $("#"+animation.animationProp.on);
            
            //create the queue and push it in the timeline to it's appropriate 
            //time 
            var queue = queues[animation.animationProp.queue];
            if(!queue){
                element.delay(currTime, animation.animationProp.queue);
                queue = queues[animation.animationProp.queue] = {
                    elements: {},
                    time: currTime
                };
            }
            
            var qElement = queues[animation.animationProp.queue].
                    elements[animation.animationProp.on];
            
            if(!qElement){
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
        for(var q in queues){
            if(!ahead || queues[q].time[ahead] < queues[q].time[q]){
                ahead = q;
            }
        }
        
        //Add the delays to the queues are late in the timeframe
        for(var q in queues){
            if(q === ahead){
                continue;
            }
            var delay = queues[ahead].time-queues[q].time;
            if(delay > 0){
                for(var qelement in queues[q].elements){
                    queues[q].elements[qelement].delay(delay, q);
                }
            }
        }
    }
    
    //dequeuing all queues !! let the Fun begin !!
    for(var q in queues){
        for (var qelement in queues[q].elements) {
            queues[q].elements[qelement].dequeue(q);
        }
    }
});