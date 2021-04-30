
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"images/freelunchhifiwhole.jpg",
				"images/freelunch-tilted.jpg",
				"images/edhifiwhole.jpg",
				"images/ed-case.jpg",
				"images/see-thru.jpg",
                "images/seethruhifiwhole.png"
			)