/*!
* hScroll.js
* Author: Mr. Huang
*
*/;
(function() {
	function hScroll(options) {
		var self = this;
		Object.assign(self, options);
		self.init();
	}

	hScroll.prototype = {
		init: function() {
			var self = this,
				arr = [],
				kdiv = $(self.listen);
			for(var i = 0; i < kdiv.length; i++) {
				arr.push($(kdiv[i]).offset().top);
			}
			self.sctopFun(arr);
			// let timer = null;
			$(document.body).scroll(function() {
				// clearTimeout(timer);
				// timer = setTimeout(() => {
				// }, 30);
				self.sctopFun(arr);
			});
		},
		sctopFun: function(arr) {
			var self = this;
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
			var keys = 0,
				flag = true;
			for(var i = 0; i < arr.length; i++) {
				keys++;
				if(flag) {
					if(scrollTop >= arr[arr.length - keys] - 300) {
						const index = arr.length - keys;
						self.callback(index);
						flag = false;
					} else {
						flag = true;
					}
				}
			}
		},
	}
	window.hScroll = hScroll;
}());
