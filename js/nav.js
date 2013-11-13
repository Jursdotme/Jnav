(function($){
  
  // Icon Setup
  var $menu_closed_icon = "&#9776;";
  var $menu_open_icon = "&#9776;";
  var $dropdown_open_icon = "&darr;";
  var $dropdown_closed_icon = "&rarr;";
  
  var $navToggle = "#nav-toggle";

  $($navToggle).addClass("closed")
  
  $($navToggle).on("click", function() {

    $("nav#mobile").slideToggle(300);
    
    var $this = $(this); // this is just for performance
    if(!$this.hasClass('closed'))
    $('.closed').toggleClass("closed").toggleClass("open");
    $this.toggleClass("closed").toggleClass("open");
    
    $($navToggle+".closed").html($menu_closed_icon)
    $($navToggle+".open").html($menu_open_icon)
  });

//Add Toggle Buttons to dropdown menus
$("nav#mobile ul li.has-dropdown > a").append('<span class="icon">' + $dropdown_closed_icon + '</span>');

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
    
    if ($(this).text() == $dropdown_open_icon)
       $(this).html($dropdown_closed_icon)
    else
       $(this).html($dropdown_open_icon);

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
    
})(jQuery);
