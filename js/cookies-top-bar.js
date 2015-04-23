$(function() {
	var cname = cname || undefined;
	function cookiesTopBar(cname) {
		// obtengo valor de la cookie pasada a la funcion
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
	$("#cookie-click").on("click", function() {
		document.cookie = "acceptcookies=yes";
		console.log(document.cookie);

		function swing() {
			console.log('Efecto entransicion');
			$( ".center" ).fadeOut( "fast" );
		}

		$('#cookies-top-bar').slideUp(400, swing(), function() {
				console.log("Efecto en completado");
		});
		// $("#cookies-top-bar").css("display", "none");
	});
	cookiesTopBar("acceptcookies");
});
