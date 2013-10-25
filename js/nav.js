var $navToggle = "#nav-toggle";

$($navToggle).addClass("closed")

$($navToggle).on("click", function() {

	$("nav#mobile").slideToggle(300);

	var $this = $(this); // this is just for performance
		if(!$this.hasClass('closed'))
		$('.closed').toggleClass("closed").toggleClass("open");
		$this.toggleClass("closed").toggleClass("open");

	$($navToggle+".closed").html("^")
	$($navToggle+".open").html("T")
});

//Add Toggle Buttons to dropdown menus
$("nav#mobile ul li.has-dropdown > a").append('<span class="icon">2</span>');



//Make the dropdown menus work
$("a span.icon").on("click", function() {
	
	

	$(this)
		.parent()
			.parent()
				.find(" > ul")
						.slideToggle();
return false;

});

$("a span.icon").click(function() {
    
    if ($(this).text() == "2")
       $(this).html("(")
    else
       $(this).html("2");

});


$("#label")
	.prev()
		.addClass( "before-label" )
$("#label")
	.next()
		.addClass("after-label");

$(function () {

	var $labelTarget = "nav a[title='label']"

	$( $labelTarget  ).parent().attr('id', 'label');

	$( $labelTarget  ).wrapInner( "<p></p>");

	$( $labelTarget ).replaceWith(function() {
		return $( this ).contents().wrap("<p></p>");
	});

	

});