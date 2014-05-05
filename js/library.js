function createScene1(a) {
    a.createScene({
        background: "bg1.jpg",
        sounds: [{
                src: "sounds/background.mp3"
            },
            {
                delay: 1000,
                src: "sounds/background.mp3"
            }]
    });

    //Adding stuff to this scene library
    /*
     a.addToSceneLibrary("video2", {
     src: "videos/video2.webm",
     type: "video",
     init: function() {
     this.css({
     top: 0,
     left: 0,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("maskVideo1", {
     src: "images/mask_video.png",
     type: "image",
     init: function() {
     this.css({
     top: 0,
     left: 0,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("animals", {
     src: "images/animals.png",
     type: "image",
     init: function() {
     this.css({
     top: 110,
     left: 0,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("howdo", {
     src: "images/howdo.png",
     type: "image",
     init: function() {
     this.css({
     top: 20,
     left: 640,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("intricate", {
     src: "images/intricate.png",
     type: "image",
     init: function() {
     this.css({
     top: 50,
     left: -640,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("darwin", {
     src: "images/darwin.png",
     type: "image",
     init: function() {
     this.css({
     top: 120,
     left: 350,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("cdarwin", {
     src: "images/cdarwin.png",
     type: "image",
     init: function() {
     this.css({
     top: 360,
     left: 20,
     opacity: 0
     });
     }
     });
     
     
     a.addToSceneLibrary("smart_darwin", {
     src: "images/smart_darwin.png",
     type: "image",
     init: function() {
     this.css({
     width: 280,
     height: 280,
     left: 360,
     top: 0,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("beagle", {
     src: "images/beagle.png",
     type: "image",
     init: function() {
     this.css({
     left: -640,
     top: 50,
     opacity: 1
     });
     }
     });
     
     a.addToSceneLibrary("left", {
     src: "images/left.png",
     type: "image",
     init: function() {
     this.css({
     left: -640,
     top: 280,
     opacity: 1
     });
     }
     });
     
     a.addToSceneLibrary("hms", {
     src: "images/hms.png",
     type: "image",
     init: function() {
     this.css({
     left: 340,
     top: 280,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("video1", {
     src: "videos/video1.webm",
     type: "video",
     init: function() {
     this.css({
     top: 0,
     left: 0,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("maskVideo2", {
     src: "images/mask_video.png",
     type: "image",
     init: function() {
     this.css({
     top: 0,
     left: 0,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("gala", {
     src: "images/gala.jpg",
     type: "image",
     init: function() {
     this.css({
     left: 0,
     top: 0,
     width: 640,
     height: 360,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("what", {
     src: "images/what.png",
     type: "image",
     init: function() {
     this.css({
     top: 20,
     left: 20,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("itbe", {
     src: "images/itbe.png",
     type: "image",
     init: function() {
     this.css({
     top: 20+50,
     left: 640
     });
     }
     });
     
     a.addToSceneLibrary("how", {
     src: "images/how.png",
     type: "image",
     init: function() {
     this.css({
     bottom: 20+36+30+4,
     right: 20+209+2,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("new", {
     src: "images/new.png",
     type: "image",
     init: function() {
     this.css({
     bottom: 20+36+2,
     right: 20+209+2,
     opacity: 0
     });
     }
     });
     
     a.addToSceneLibrary("species", {
     src: "images/species.png",
     type: "image",
     init: function() {
     this.css({
     bottom: 20+36+2,
     right: 20,
     opacity: 0
     });
     }
     });  
     
     a.addToSceneLibrary("cometobe", {
     src: "images/cometobe.png",
     type: "image",
     init: function() {
     this.css({
     bottom: 20,
     right: 640
     });
     }
     }); 
     
     a.addToSceneLibrary("good_nature", {
     src: "images/good_nature.png",
     type: "image",
     init: function() {
     this.css({
     width: 640,
     height: 413,
     left: 0,
     bottom: 360
     });
     }
     }); 
     
     a.addToSceneLibrary("bad_nature", {
     src: "images/bad_nature.png",
     type: "image",
     init: function() {
     this.css({
     width: 640,
     height: 413,
     left: 0,
     bottom: 0,
     opacity: 0
     });
     }
     }); 
     */
    a.addToSceneLibrary("competition", {
        src: "images/competition.png",
        type: "image",
        init: function() {
            this.css({
                left: (640 - 578) / 2,
                top: (360 - 91) / 2,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("takes_place", {
        src: "images/takes_place.png",
        type: "image",
        init: function() {
            this.css({
                left: 20,
                top: 20 + 47 + 1,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("between", {
        src: "images/between.png",
        type: "image",
        init: function() {
            this.css({
                left: 20 + 84 + 1 + 215 / 2,
                top: 20 + 47 + 1 + 72 / 2,
                width: 1,
                height: 1,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("species2", {
        src: "images/species2.png",
        type: "image",
        init: function() {
            this.css({
                right: 640 - 20 - 84 - 1 - 215,
                top: 20 + 47 + 1 + 72 + 1,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("short_penguin1", {
        src: "images/short_penguin.png",
        type: "image",
        init: function() {
            this.css({
                right: 170,
                bottom: 10,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("short_penguin2", {
        src: "images/short_penguin.png",
        type: "image",
        init: function() {
            this.css({
                right: 110,
                bottom: 30,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("tall_penguin1", {
        src: "images/tall_penguin.png",
        type: "image",
        init: function() {
            this.css({
                right: 180,
                bottom: 90,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("tall_penguin2", {
        src: "images/tall_penguin.png",
        type: "image",
        init: function() {
            this.css({
                right: 60,
                bottom: 50,
                opacity: 0
            });
        }
    });

    a.addToSceneLibrary("croc", {
        src: "images/croc.png",
        type: "image",
        init: function() {
            this.css({
                right: 550,
                bottom: 10,
                opacity: 0
            });
        }
    });

}
