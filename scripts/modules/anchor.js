export default function anchor (){
    
    $(document).ready(function(){
        $('.header-container a ,.panel a').on('click', function(event) {
            var target = $($(this).attr('href'));
            if( target.length ) {
                event.preventDefault();
                var offset = 150; 
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - offset
                }, 1000);
            }
        });
    });

}