function tweenAnimate() {
	/*======= header =========*/
	TweenMax.from("header", 1, {
		opacity: 0,
		delay: 0.1,
		y: -0,
		ease: Expo.easeInOut,
	})

	TweenMax.staggerFrom("header .navbar li", 1, {
		opacity: 0,
		delay: 0.5,
		x: -20,
		ease: Expo.easeInOut,
	})

	TweenMax.from("header .nav .logo", 1, {
		opacity: 0,
		delay: 0.8,
		x: -20,
		ease: Expo.easeInOut,
	})

	TweenMax.from("header .icons", 1, {
		opacity: 0,
		delay: 0.9,
		x: -20,
		ease: Expo.easeInOut,
	})

	TweenMax.from("header .nav-toggle", 1, {
		opacity: 0,
		delay: 0.7,
		x: -20,
		ease: Expo.easeInOut,
	})

	/*======= home ========*/
	TweenMax.from(".home .content-name", 1, {
		opacity: 0,
		delay: 2,
		y: 20,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home  p", 1, {
		opacity: 0,
		delay: 2.4,
		y: 20,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home .content-btn", 1, {
		opacity: 0,
		delay: 2.7,
		y: 20,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home .img-toggle", 1, {
		opacity: 0,
		delay: 1.6,
		y: 40,
		ease: Expo.easeInOut,
	})

	TweenMax.staggerFrom(".home .social li", 1, {
		opacity: 0,
		delay: 2.4,
		y: 20,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home .awwwards", 1, {
		opacity: 0,
		delay: 2.2,
		x: 180,
		ease: Expo.easeInOut,
	})
}

export default tweenAnimate