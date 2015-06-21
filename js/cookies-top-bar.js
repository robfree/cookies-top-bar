$(function() {
	var cname = cname || undefined;

	function cookiesTopBar(cname) {
		cname = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" +
		 encodeURIComponent(cname).replace(/[\-\.\+\*]/g, "\\$&") +
		  "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
		if(cname) {
			$("#cookies-top-bar").css("display", "none");
		}
		else {
			if(window.history.length > 1) {
				document.cookie = "acceptcookies=yes";
				$("#cookies-top-bar").css("display", "none");
			}
			else {
				$("#cookies-top-bar").css("display", "block");
			}
		}
 	}

	$("#cookie-click").on("click", function(e) {
		document.cookie = "acceptcookies=yes";
		e.preventDefault();

		function swing() {
			$( ".center" ).fadeOut( "fast" );
		}

		$('#cookies-top-bar').slideUp(400, swing(), function() {

		});
	});

	cookiesTopBar("acceptcookies");

});
