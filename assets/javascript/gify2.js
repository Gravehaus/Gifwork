$(document).ready(function(){

  $("button").on("click", function () {

    var person = $(this).attr("data-person");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });


  $("button").on("click", function () {



    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function (response) {

        var imageUrl = response.data.image_original_url;

        var rpgImage = $("<img>");


        rpgImage.attr("src", imageUrl);
        rpgImage.attr("alt", "rpgImage");


        $("#images").prepend(rpgImage);
      });
  });

  $("button").on("click", function () {

    var state = $(this).attr("data-state");
    console.log(state);

    if (state === 'still') {
      var animatedSrc = $(this).attr("data-animate");
      $(this).attr("src", animatedSrc);
      $(this).attr("data-state", "animate");

    } else {
      var stillSrc = $(this).attr("data-still");
      $(this).attr("src", stillSrc);
      $(this).attr("data-state", "still");
    }

  });

  $("#submitPress").on("click", function(){

var input = $("#user-input").val().trim();
form.reset();
displayedButtons.push(input);
        
renderButtons();

return false;
})

renderButtons();

$(document).on("click", "#input", displayImg);
$(document).on("click", ".gif", imageChangeState);
});