jQuery(function(){
	initFullPage();
	initMagic();
});

function initMagic(){

	TweenMax.from(".logo", 3, {
		delay: 8,
		opacity: 0,
		x: -400,
		ease: Expo.easeInOut
	});

	TweenMax.to(".p_one", 3, {
		y: 0,
		yoyo: true, 
		repeat: -1,
		ease: Expo.easeInOut
	});

	TweenMax.to(".p_two", 3, {
		y: 20,
		yoyo: true, 
		repeat: -1,
		ease: Expo.easeInOut
	});

	TweenMax.to(".p_three", 3, {
		y: 40,
		yoyo: true, 
		repeat: -1,
		ease: Expo.easeInOut
	});

	TweenMax.from(".block_section_intro h2", 4, {
		delay: 8.3,
		x: -1000,
		opacity: 1,
		ease: Expo.easeInOut,
	});

	TweenMax.from(".block_section_intro h1", 4, {
		delay: 8.6,
		x: -1000,
		opacity: 1,
		ease: Expo.easeInOut,
	});

	TweenMax.from(".section_intro_text", 4, {
		delay: 8.6,
		y: 1000,
		opacity: 1,
		ease: Expo.easeInOut,
	});

	// TweenMax.to(".p_one", 3, {
	// 	y: 0,
	// 	x: 0,
	// 	yoyo: true, 
	// 	repeat: -1,
	// 	ease: Expo.easeInOut
	// });

	// TweenMax.to(".p_two", 3, {
	// 	y: -15,
	// 	x: 28,
	// 	yoyo: true, 
	// 	repeat: -1,
	// 	ease: Expo.easeInOut
	// });

	// TweenMax.to(".p_three", 3, {
	// 	y: -31,
	// 	x: 58, 
	// 	yoyo: true, 
	// 	repeat: -1,
	// 	ease: Expo.easeInOut
	// });

	// TweenMax.from(".portfolio-item.one", 3, {
	// 	delay: 0,
	// 	opacity: 0,
	// 	y: 100,
	// 	ease: Expo.easeInOut
	// });

	// TweenMax.from(".portfolio-item.two", 3, {
	// 	delay: 0.5,
	// 	opacity: 0,
	// 	y: 100,
	// 	ease: Expo.easeInOut
	// });

	// TweenMax.from(".portfolio-item.three", 3, {
	// 	delay: 1,
	// 	opacity: 0,
	// 	y: 100,
	// 	ease: Expo.easeInOut
	// });

	// TweenMax.staggerFrom(".ml7", 3, {
	// 	delay: 1,
	// 	x: -120,
	// 	opacity: 1,
	// 	ease: Expo.easeInOut
	// }, 0.1);


	// var tl = new TimelineMax({onUpdate:updatePercentage});
	// const controller = new ScrollMagic.Controller();

	// tl.from('.text', 1.5, {
	// 	x:-200, 
	// 	opacity: 0, 
	// 	ease: Expo.easeInOut
	// });

	// tl.from('.portfolio-item.four', 3, {
	// 	opacity: 0,
	// 	y: 100,
	// 	ease: Expo.easeInOut,
	// });

	// tl.from('.portfolio-item.five', 3, { 
	// 	opacity: 0,
	// 	y: 100,
	// 	ease: Expo.easeInOut
	// }, "=-.5");

	// tl.from('.portfolio-item.six', 3, {
	// 	opacity: 0,
	// 	y: 100,
	// 	ease: Expo.easeInOut
	// }, "=-1");

	// const scene = new ScrollMagic.Scene({
	// 	triggerElement: ".section_two",
	// 	triggerHook: "onLeave",
	// 	duration: "100%"
	// })
	// .setPin(".section_two")
	// .setTween(tl)
	// .addTo(controller);


	// function updatePercentage() {
	// 	tl.progress();
	// }

	TweenMax.to(".loading-screen", 4, {
		delay: 6.6,
		top: "-110%",
		ease: Expo.easeInOut
	});

	var ring = new TimelineMax();

	ring.from(".ringOne", 4, {
		delay: 0.4,
		opacity: 0,
		y:40,
		ease: Expo.easeInOut
	}).from(".ringTwo", 4, {
		delay: 0.9,
		opacity: 0,
		y: 40,
		ease: Expo.easeInOut
	}, "-=5").to(".ringOne", 4, {
		delay: 0.4,
		x: 40,
		ease: Expo.easeInOut
	}).to(".ringTwo", 4, {
		delay: 0.9,
		x: 40,
		ease: Expo.easeInOut
	},"-=5");
}



function initFullPage(){
	// $(document).ready(function() {
	// 	$('#fullpage').pagepiling({
	// 		sectionSelector: 'section',
	// 		direction: 'horizontal',
	// 		verticalCentered: true,
	// 		scrollingSpeed: 700,
	// 		easing: 'none',
	// 		loopBottom: false,
	// 		loopTop: false,
	// 		normalScrollElements: null,
	// 	});
	// });
}

$(function() {
	(function () {

		const link = document.querySelectorAll('.block_section_intro > .hover-this');
		const cursor = document.querySelector('.cursor');

		const editCursor = e => {
			const { clientX: x, clientY: y } = e;
			cursor.style.left = x + 'px';
			cursor.style.top = y + 'px';
		};

		link.forEach(b => b.addEventListener('mousemove', animateit));
		link.forEach(b => b.addEventListener('mouseleave', animateit));
		window.addEventListener('mousemove', editCursor);

	})();
});


