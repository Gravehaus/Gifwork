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

    function makeButton(){
        for ( var i = 0; i <topics.length; i++){
            var newButton = $("<button");
            newButton.addClass("btn");
            newButton.addClass("jrpg-button");
            newButton.text(topics[i]);
            $("#button-container"). append(newButton);
        }
        $(".jrpg-button").unbind("click");
        $(".jrpg-button").on("click", function(){
            $("gif-img").unbind("click");
            $("#gif-container").empty();
            $("gif-container").removeClass("solid-border");
            populateGIFContainer($(this).text());
        });
    }

    function addButton(show){
        if(topics.indexOf(show) === -1){
            topics.push(show);
            $("#button-container").empty();
            renderButtons();
        }
    }

    function populateGIFContainer(show){
        $.ajax({
            url:"" + show + "" +ratingCutOff + "&limit" +numberOfGifs, method: "GET"
        }).then(function(response){
            
        })
    }

    

