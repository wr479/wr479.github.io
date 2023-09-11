export default function panel () {
    $(document).ready(function () {
        $(".open-panel").click(function () {
            $(".panel").toggleClass("flex");
        });
    });
}