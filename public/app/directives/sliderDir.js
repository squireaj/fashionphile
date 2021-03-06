app = angular.module('sliderDir', []);

app.directive('sliderDirective', function(){
	return {
		restrict: "A",
		templateUrl: "/app/directives/sliderTemplate.html",
		scope: {
			data: "=",
			emptyqueue: "=",
			direction: "="
		},
		link: function(scope, elem, attr){
			scope.toggs = $('#CheckBox')[0].value;
			console.log("data", scope.data);
			console.log('queu', scope.emptyqueue)
			console.log("direction from DIRective", scope.direction)
			
			scope.active = false;
			scope.open = function(){
				!scope.active;
			}

			$(scope.emptyqueue).change(function(){
				console.log("CHANGED")
			})

			$('.BSswitch').bootstrapSwitch('state', true);	

				var $c = $('#carousel'),
				$w = $(window);
				console.log("$c", scope);

		    $c.carouFredSel({
		    	direction: scope.direction,
		    	// items: itemCount,
		    	scroll: {
		    		items: 1,
		    		easing: 'linear',
		    		duration: 8000,
		    		timeoutDuration: 0,
		    		pauseOnHover: "immediate"
		    	}
		    });
		    	$w.bind('resize.example', function() {
		var nw = $w.width();
		if (nw < 990) {
			nw = 990;
		}
 
		$c.width(nw * 3);
		$c.parent().width(nw);
 
	}).trigger('resize.example');
		}
	}
})