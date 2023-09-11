export default function questions (){
    $(document).ready(function() {
        $("#rotate-btn-1").click(function() {
            var $image = $(this);
            $image.toggleClass("rotate-90");
            $(".one-answer").slideToggle(1000);
            setTimeout(function() {
                $image.toggleClass("rotate-90");
            }, 1000);
        });

        $("#rotate-btn-2").click(function() {
            var $image = $(this);
            $image.toggleClass("rotate-90");
            $(".two-answer").slideToggle(1000);
            setTimeout(function() {
                $image.toggleClass("rotate-90");
            }, 1000);
        });

        $("#rotate-btn-3").click(function() {
            var $image = $(this);
            $image.toggleClass("rotate-90");
            $(".three-answer").slideToggle(1000);
            setTimeout(function() {
                $image.toggleClass("rotate-90");
            }, 1000);
        });
    });
}