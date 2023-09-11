export default function questions (){
    $(document).ready(function() {
        $(".questions-contant .one").click(function() {
            var $image = $("#rotate-btn-1");
            $(".one-answer").slideToggle(1000);
            setTimeout(function() {
                $image.toggleClass("rotate-90");
            }, 1000);
        });
    
        $(".questions-contant .two ").click(function() {
            var $image = $('#rotate-btn-2');
            $(".two-answer").slideToggle(1000);
            $image.toggleClass("rotate-90");
        });
    
        $(".questions-contant .three ").click(function() {
            var $image = $('#rotate-btn-3');
            $(".three-answer").slideToggle(1000);
            $image.toggleClass("rotate-90");
        });
    });
}