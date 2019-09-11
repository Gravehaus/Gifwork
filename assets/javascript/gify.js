//searchGif("")
//
/*onlick="searchGif('Kingdom Hearts')"
onclick="searchGif('Final Fantasy')"
onclick="searchGif('Persona 4')"
onclick="searchGif('Persona 5')"
onclick="searchGif('Chrono Trigger')"
onclick="searchGif('Dark Souls')"
onclick="searchGif('Legend of Zelda')" 
 
----------------ACTUAL CODING------------------

TODO: SETUP GLOBAL CLICK HANDLER EVENTS
    
TODO: 
TODO: CREATE SEARCHGIF FUNCTION
    >FIVE GIFS PER SEARCH
    >GET BUTTONS TO WORK 
TODO: SET IT UP AS STILL --> ONCE CLICKED BECOME ANIMATED
TODO: 

--------------------AESTHETICS------------------

TODO: PLACE GIFS IN CARDS
TODO:

-------------------MISC.--------------------
 
TODO: FIGURE GITHUB. UGH....

$(document).on('click', 'myButton', function(){ //This is my click function

})

*/

var topics = ["Kingdom Hearts", "Final Fantasy", "Persona 4", "Persona 5", "Chrono Trigger", "Dark Souls", "Legend of Zelda"];

var numberOfGifs = 7;
var ratingCutOff = "R"; // ;D //

function makeButton() {
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button");
        newButton.addClass("btn");
        newButton.addClass("jrpg-button");
        newButton.text(topics[i]);
        $("#button-container").append(newButton);
    }
    $(".jrpg-button").unbind("click"); //.jrpg-button repaced "cartoon-button"
    $(".jrpg-button").on("click", function () {
        $("gif-img").unbind("click");
        $("#gif-container").empty();
        $("gif-container").removeClass("solid-border"); //was dotted-border
        populateGIFContainer($(this).text());
    });
}

function addButton(show) {
    if (topics.indexOf(show) === -1) {
        topics.push(show);
        $("#button-container").empty();
        renderButtons();
    }
}

function populateGIFContainer(show) {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=OTK0RzS64LOKMNipYVJOWMhZFiZiW0MD&rating=" + ratingCutOff + "&limit" + numberOfGifs, method: "GET"
    }).then(function(response){
		response.data.forEach(function(element){
			newDiv = $("<div>");
			newDiv.addClass("individual-gif-container");
			newDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
			var newImage = $("<img src = '" + element.images.fixed_height_still.url + "'>");
			newImage.addClass("gif-image");
			newImage.attr("state", "still");
			newImage.attr("still-data", element.images.fixed_height_still.url);
			newImage.attr("animated-data", element.images.fixed_height.url);
			newDiv.append(newImage);
			$("#gif-container").append(newDiv);
        });

        //$("#gif-container").addClass("dotted-border");
		$(".gif-image").unbind("click");
		$(".gif-image").on("click", function(){
			if($(this).attr("state") === "still") {
				$(this).attr("state", "animated");
				$(this).attr("src", $(this).attr("animated-data"));
			}
			else {
				$(this).attr("state", "still");
				$(this).attr("src", $(this).attr("still-data"));
			}
		});
	});
}

$(document).ready(function(){
	renderButtons();
	$("#submit").on("click", function(){
		event.preventDefault();
		addButton($("#jrpg-game").val().trim());
		$("#jrpg-game").val("");
	});
});