
function update_position(scrollto) {
	if ($("html").hasClass("lt8")) { return true; }
	$(".div-affix").each(function() {
		var elm = $(this),
			container = elm.parent(),
			top = $(window).scrollTop(),
			offset = elm.parent().offset(),
			classes = "aligned-fixed aligned-bottom";
		if (elm.height()+24 >= $(window).height()) {
			if (container.hasClass("aligned-fixed")) {
				if (scrollto) {
					container.removeClass(classes).addClass("aligned-bottom");
					$(window).scrollTop(elm.offset().top);
				}
				else {
					container.removeClass(classes);
				}
			}

		}
		else if (top + 12 <= offset.top) {
			container.removeClass(classes);
		}
		else if (top + 12 + elm.height() >= $("body").height()) {
			container.removeClass(classes).addClass("aligned-bottom");
		}
		else {
			container.removeClass(classes).addClass("aligned-fixed");
		}
	});
}


$(document).ready(function(){

	$(".box-settings .top").click(function() {
		$(this)
			.find("i")
				.toggleClass("icon-chevron-down")
				.toggleClass("icon-chevron-up").end()
			.closest(".box-settings").find(".inner-form")
				.slideToggle();
	});
	$(".a-help-markdown").click(function() {
		$(this).closest(".box").find(".div-help-markdown").toggle();
	});

	$(".alert").click(function() { $(this).slideUp(); });

	$(".main-right-open").click(function() {
		$(".main-right").toggleClass("open");
	});
	$(".a-menu").click(function() {
		$(".main-right").toggleClass("open");
	});

// Blocks with fixed position
	$(window).scroll(function() { update_position(); });
	$(window).resize(function() { update_position(); });
	update_position();

});