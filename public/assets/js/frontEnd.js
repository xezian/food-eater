(function(){
    console.log("hello I am frontEnd.js");
    $(document).on("click", "#submit", event => {
        event.preventDefault();
        const newFood = {
            food_name: $("#new-food").val().trim()
        };
        $.ajax("/api/foods", {
            type: "POST",
            data: newFood
        }).then(function(){
            location.reload();
        })
    });
    $(".eat").click(function(event) {
        event.preventDefault();
        const id = $(this).attr("id");
        console.log(id); 
        $.ajax(`/api/foods/${id}`, {
            type: "PUT",
        }).then(function() {
            location.reload();
        })
    })
});