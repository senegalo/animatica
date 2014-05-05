function createAnimationScene1(a) {
/*

	a.addAnimation({
			opacity: 1
	}, {												
			duration: 100,
			on: "video2",
			queue: "q1",
			start: function() {
				this.play();
			}
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 1
	}, {
			delay: movie1_length-1000,
			duration: 1000,
			on: "maskVideo1",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			delay: movie1_length,
			duration: 100,
			on: "video2",
			queue: "q2",
			complete: function() {
				this.pause();
			}
	});

	
	a.addAnimation({
			opacity: 1,
	}, {
			duration: 10,
			on: "animals",
			queue: "q1"
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 1,
			left: 100,
	}, {
			delay: 200,
			duration: 800,
			on: "howdo",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1,
			left: 60,
	}, {
			sync: true,
			delay: 200,
			duration: 800,
			on: "intricate",
			queue: "q2"
	});

	a.addAnimation({
			opacity: 1,
	}, {
			delay: 2000,
			duration: 1600,
			on: "darwin",
			queue: "q1"
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 0,
	}, {
			delay: 2000,
			duration: 1600,
			on: "howdo",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0,
	}, {
			delay: 2000,
			duration: 1600,
			on: "intricate",
			queue: "q2"
	});

	a.addAnimation({
			opacity: 0,
	}, {
			delay: 2000,
			duration: 1600,
			on: "animals",
			queue: "q3"
	});

	a.syncQueues();

	a.addAnimation({
			width: 280,
			height: 280,
			left: 360,
			top: 0
	}, {
			delay: 200,
			duration: 800,
			on: "darwin",
			queue: "q1"
	});

	a.addAnimation({
			top: 280,
			opacity: 1
	}, {
			delay: 200, 
			duration: 800,
			on: "cdarwin",
			queue: "q2"
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 0,
	}, {
			delay: 2200,
			duration: 800,
			on: "darwin",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1,
	}, {
			delay: 2000,
			duration: 800,
			on: "smart_darwin",
			queue: "q2"
	});

	a.syncQueues();

	a.addAnimation({
			left: 20,
	}, {
			delay: 1000,
			duration: 800,
			on: "beagle",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0,
	}, {
			delay: 1000,
			duration: 200,
			on: "cdarwin",
			queue: "q2"
	});

	a.syncQueues();

	a.addAnimation({
			left: 20,
	}, {
			delay: 1000,
			duration: 800,
			on: "left",
			queue: "q1"
	});


	a.addAnimation({
			opacity: 1
	}, {
			delay: 1800,
			duration: 800,
			on: "hms",
			queue: "q2"
	});


	a.syncQueues();

	a.addAnimation({
			opacity: 0
	}, {
			delay: 1800,
			duration: 400,
			on: "hms",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			delay: 1800,
			duration: 400,
			on: "left",
			queue: "q2"
	});

	a.addAnimation({
			opacity: 0
	}, {
			delay: 1800,
			duration: 400,
			on: "beagle",
			queue: "q3"
	});

	a.addAnimation({
			opacity: 0
	}, {
			delay: 1800,
			duration: 400,
			on: "smart_darwin",
			queue: "q4"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 2000,
			duration: 400,
			on: "gala",
			queue: "q5"
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 1
	}, {
			duration: 1,
			on: "video1",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			delay: 500,
			duration: 500,
			on: "gala",
			queue: "q1",
			start: function() {
					$("#video1")[0].play();
			}
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 1
	}, {
			delay: movie2_length-1000,
			duration: 1000,
			on: "maskVideo2",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: movie2_length-1000,
			duration: 1000,
			on: "smart_darwin",
			queue: "q2",
			start: function() {
				var d = $(this);
				d.css({
					top: 20,
					right: 20,
					left: "",
					width: 180,
					height: 180,
					opacity: 0
				});
				d.parent().append(d);
			}
	});


	a.addAnimation({
			opacity: 0
	}, {
			delay: movie2_length,
			duration: 100,
			on: "video1",
			queue: "q3",
			complete: function() {
				this.pause();
			}
	});

	a.addAnimation({
			opacity: 1
	}, {
			duration: 200,
			on: "what",
			queue: "q1"
	});

	a.addAnimation({
			left: 20
	}, {
			delay: 200,
			duration: 400,
			on: "itbe",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 200,
			duration: 200,
			on: "how",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 200,
			duration: 200,
			on: "new",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 200,
			duration: 200,
			on: "species",
			queue: "q1"
	});

	a.addAnimation({
			right: 20
	}, {
			delay: 200,
			duration: 400,
			on: "cometobe",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			delay: 200,
			duration: 1,
			on: "smart_darwin",
			queue: "q1"
	});

	a.addAnimation({
			bottom: 0
	}, {
			duration: 1000,
			on: "good_nature",
			queue: "q1"
	});

//hide old scene
	a.addAnimation({
			opacity: 0
	}, {
			duration: 1,
			on: "what",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			duration: 1,
			on: "itbe",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			duration: 1,
			on: "how",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			duration: 1,
			on: "new",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			duration: 1,
			on: "species",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0
	}, {
			duration: 1,
			on: "cometobe",
			queue: "q1"
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 0
	}, {
			delay: 1000,
			duration: 1000,
			on: "good_nature",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 1000,
			duration: 1000,
			on: "bad_nature",	
			queue: "q2"
	});

	a.addAnimation({
			top: 640
	}, {
			delay: 1000,
			duration: 1000,
			on: "bad_nature",
			queue: "q1"
	});
*/

	a.addAnimation({
			opacity: 1
	}, {
			delay: 1,
			duration: 1,
			on: "competition",
			queue: "q1",
	});

	a.addAnimation({
			top: 20,
			left: 20,
			width: 300,
			height: 47
	}, {
			delay: 1000,
			duration: 1000,
			on: "competition",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 100,
			duration: 200,
			on: "takes_place",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1,
			left: 20+84+1,
			top: 20+47+1,
			width: 215,
			height: 72,
	}, {
			delay: 100,
			duration: 600,
			on: "between",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 100,
			duration: 200,
			on: "species2",
			queue: "q1"
	});

	a.syncQueues();

	a.addAnimation({
			opacity: 1
	}, {
			delay: 200,
			duration: 200,
			on: "short_penguin1",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 200,
			duration: 200,
			on: "short_penguin2",
			queue: "q2"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 200,
			duration: 200,
			on: "tall_penguin1",
			queue: "q3"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 200,
			duration: 200,
			on: "tall_penguin2",
			queue: "q4"
	});

	a.addAnimation({
			opacity: 1
	}, {
			delay: 400,
			duration: 200,
			on: "croc",
			queue: "q1"
	});

	a.syncQueues();

	a.addAnimation({
			right: 110
	}, {
			delay: 1000,
			duration: 800,
			on: "croc",
			easing: "linear",
			queue: "q1"
	});

	a.addAnimation({
			right: 80
	}, {
			delay: 1000,
			duration: 800,
			on: "short_penguin1",
			easing: "linear",
			queue: "q2"
	});

	a.addAnimation({
			right: -80
	}, {
			delay: 1000,
			duration: 1600,
			on: "short_penguin2",
			easing: "linear",
			queue: "q3"
	});

	a.addAnimation({
			right: -80
	}, {
			delay: 1000,
			duration: 800,
			on: "tall_penguin1",
			easing: "linear",
			queue: "q4"
	});


	a.addAnimation({
			right: -80
	}, {
			delay: 1000,
			duration: 800,
			on: "tall_penguin2",
			easing: "linear",
			queue: "q5"
	});

	var degree = -20;

	a.addAnimation({
			degree: -45
	}, {
			delay: 1800,
			duration: 100,
			on: "short_penguin1",
			easing: "linear",
			queue: "q6",
			start: function(){
				$(this).degree = 0;
			},
			step: function(degree) {
			    $(this).css({
						'-webkit-transform': 'rotate(' + degree + 'deg)',
						'-moz-transform': 'rotate(' + degree + 'deg)',
						'-ms-transform': 'rotate(' + degree + 'deg)',
						'-o-transform': 'rotate(' + degree + 'deg)',
						'transform': 'rotate(' + degree + 'deg)',
					});
     	}			
	});	

	a.addAnimation({
			right: 800
	}, {
			delay: 0,
			duration: 2000,
			on: "croc",
			easing: "linear",
			queue: "q1"
	});

	a.addAnimation({
			right: 770
	}, {
			delay: 0,
			duration: 2000,
			on: "short_penguin1",
			easing: "linear",
			queue: "q2"
	});

	a.syncQueues();

//SWITCH TO INTER SPECIE COMPETITION

	a.syncQueues();

	a.addAnimation({
			opacity: 0.4
	}, {
			delay: 200,
			duration: 500,
			on: "competition",
			queue: "q1"
	});

	a.addAnimation({
			opacity: 0.4
	}, {
			delay: 200,
			duration: 500,
			on: "takes_place",
			queue: "q2"
	});

	a.addAnimation({
			opacity: 0.4
	}, {
			delay: 200,
			duration: 500,
			on: "between",
			queue: "q3"
	});

	a.addAnimation({
			opacity: 0.4
	}, {
			delay: 200,
			duration: 500,
			on: "species2",
			queue: "q4"
	});
}
