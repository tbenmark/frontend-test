$(document).ready(function() {

// Sidebar Toggle
$('#sidebarToggle').click(function() {
	setTimeout(function() {
	  $('.sidebar').toggle();
	}, 3000);
});

// Blue Hover
$('#blue').hover(
	function() {
	  $('a').not(this).css('color','blue');
	}, function() {
	  $('a').css('color','black');
	}
);

});