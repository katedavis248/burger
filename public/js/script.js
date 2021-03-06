$(document).ready(function () {
    $(".devour-form").on("submit", function (event) {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        $.ajax({
            method: "PUT",
            url: "/burger/" + burger_id

        }).then(function (data) {
            location.reload()
        })
    })

    $("#text-enter-button").on("click", function (event) {
        event.preventDefault();

        var burger_name = $("#enter_text").val();
        console.log(burger_name)

        $.ajax({
            method: "POST",
            url: "/burger/create",
            data: { burger_name }
        })
            .then(function (data) {
                location.reload();
            })
    })
});