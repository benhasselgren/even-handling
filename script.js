$(document).ready(function() {

	$("a").html(function() {
		var id = "class='bottom_button'";
		$("a").replaceWith("<button " + id + " >Button</button>");
		$("button").first().attr("id", "one");
	});
	$("button").on("click", function() {
		$(this).siblings("p").slideToggle(500)
	});
	$("button").mouseover(function() {
		$(this).fadeTo("medium", 0.5);
	});
	$("button").mouseleave(function() {
		$(this).fadeTo("medium", 1);
	});
	$("#stream1_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});

	/*	$("p").on("click", function() {
			$("p").addClass('pClick');
		});
		$("h2").mouseover(function() {
			$("h2").addClass('h2Hover');
		});
		$("h2").mouseover(function() {
			$(this).addClass('h2HoverOne');
		});
		$(".bottom_button").mouseover(function() {
			$("body").addClass('btnHover');
		});
		$(".bottom_button").mouseleave(function() {
			$("body").removeClass('btnHover');
		});
	*/

});
