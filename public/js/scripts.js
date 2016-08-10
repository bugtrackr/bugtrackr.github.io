$(document).ready(function(){

	$(".box-settings .top").click(function() {
		$(this)
			.find("i")
				.toggleClass("icon-chevron-down")
				.toggleClass("icon-chevron-up").end()
			.closest(".box-settings").find(".inner-form")
				.slideToggle();
	});

	$(".alert").click(function() { $(this).slideUp(); });

	$(".main-right-open").click(function() {
		$(".main-right").toggleClass("open");
	});
	$(".a-menu").click(function() {
		$(".main-right").toggleClass("open");
	});

});