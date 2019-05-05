var cardTransitionTime = 500;

//var $card = $('#f1_container');
var switching = false;

//$('#btn').hover(flipCard);
$('.card-1,.card-2,.card-3,.card-4,.card-5').click( function() {
    console.log("Calling flipCard");
    var $card = $(this).attr('class');
    console.log($card);
    console.log($(this));

    if (switching) {
        return false;
    }
    
    switching = true;

    $(this).toggleClass('is-switched')
    window.setTimeout(function () {
      $(this).children().children().toggleClass('is-active')
      switching = false
    }, cardTransitionTime / 2)
});

$(function() {
    $('.card-1,.card-2,.card-3,.card-4,.card-5').hover(
        function() {
            $(this).click();
        }, function() {
            $(this).click();
        }
    );
});


//Smooth scroll
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});
