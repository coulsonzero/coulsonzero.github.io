function tweenAnimate() {
	/*======= header =========*/
	TweenMax.from("header", 1, {
		opacity: 0,
		delay: 0,
		y: -80,
		ease: Expo.easeInOut,
	})

	TweenMax.staggerFrom("header .navbar li", 1, {
		opacity: 0,
		delay: .8,
		x: -20,
		ease: Expo.easeInOut,
	})

	TweenMax.from("header .nav .logo", 1, {
		opacity: 0,
		delay: 1.7,
		x: -20,
		ease: Expo.easeInOut,
	})

	TweenMax.from("header .icons", 1, {
		opacity: 0,
		delay: 2.2,
		x: -20,
		ease: Expo.easeInOut,
	})

	TweenMax.from("header .nav-toggle", 1, {
		opacity: 0,
		delay: 1.7,
		x: -20,
		ease: Expo.easeInOut,
	})

	/*======= home ========*/
	TweenMax.from(".home .content-name", 1, {
		opacity: 0,
		delay: 3,
		y: 20,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home  p", 1, {
		opacity: 0,
		delay: 3.4,
		y: 20,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home .content-btn", 1, {
		opacity: 0,
		delay: 3.7,
		y: 20,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home .img-toggle", 1, {
		opacity: 0,
		delay: 4.6,
		y: 40,
		ease: Expo.easeInOut,
	})

	TweenMax.staggerFrom(".home .social li", 1, {
		opacity: 0,
		delay: 4.2,
		y: 30,
		ease: Expo.easeInOut,
	})

	TweenMax.from(".home .awwwards", 1, {
		opacity: 0,
		delay: 3.2,
		x: 180,
		ease: Expo.easeInOut,
	})
}

export default tweenAnimate