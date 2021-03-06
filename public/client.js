/* global $ */

// search for running activities
// local ajax call to the server external api

function ajaxActiveSearch(searchTerm) {

    $.ajax({
            type: "GET",
            url: "/activity/" + searchTerm,
            dataType: 'json',
        })
        .done(function(dataOutput) {
            // console.log(dataOutput);
            displayActiveSearchData(dataOutput.results);
            // displayActiveActivityResults(JSON.parse(resultsForJsonParse));
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}


function displayActiveSearchData(dataMatches) {
    //create an empty variable to store one LI for each of the results
    var buildTheHtmlOutput = "";
    $.each(dataMatches, function(dataMatchesKey, dataMatchesValue) {
        //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
        buildTheHtmlOutput += '<li class="events">';
        buildTheHtmlOutput += "<div class='favorites'>";
        var utcDate = dataMatchesValue.activityStartDate; // ISO-8601 formatted date returned from server
        buildTheHtmlOutput += "<form class='addToFavorites'>";
        buildTheHtmlOutput += "<input type='hidden' class='addToFavoritesValue' value='" + dataMatchesValue.assetName + "'>";
        buildTheHtmlOutput += "<input type='hidden' class='addToFavoritesDateValue' value='" + new Date(utcDate) + "'>";
        buildTheHtmlOutput += "<input type='hidden' class='addToFavoritesPlaceValue' value='" + dataMatchesValue.place.cityName + "'>";
        buildTheHtmlOutput += "<input type='hidden' class='addToFavoritesUrlValue' value='" + dataMatchesValue.registrationUrlAdr + "'>";
        buildTheHtmlOutput += "<button type='submit' class='addToFavoritesButton'>";
        buildTheHtmlOutput += "<img src='images/add_favorite.png' class='add-favorite-icon'>";
        buildTheHtmlOutput += "</button>";
        buildTheHtmlOutput += "</form>";
        buildTheHtmlOutput += "</div>";
        buildTheHtmlOutput += '<div class="event-description">';

        var linkUrl = dataMatchesValue.registrationUrlAdr;
        if (linkUrl === undefined) {
            buildTheHtmlOutput += '<h4><a target="_blank" href="www.active.com"' + dataMatchesValue.assetName + '</a></h4>';
        }
        else {
            buildTheHtmlOutput += '<h4><a target="_blank" href="' + dataMatchesValue.registrationUrlAdr + '" >' + dataMatchesValue.assetName + '</a></h4>';
        }

        var showDistance = dataMatchesValue.assetAttributes[0];
        if (showDistance === undefined) {
            buildTheHtmlOutput += "";
        }
        else {
            buildTheHtmlOutput += '<p>' + dataMatchesValue.assetAttributes[0].attribute.attributeValue + '</p>';
        }

        buildTheHtmlOutput += '<p>' + dataMatchesValue.place.cityName + '</p>';

        buildTheHtmlOutput += '<p>' + new Date(utcDate) + '</p>';

        var showDescription = dataMatchesValue.assetDescriptions[0];
        if (showDescription === undefined) {
            buildTheHtmlOutput += "";
        }
        else {
            buildTheHtmlOutput += "<div class='auto-populated-description'>" + dataMatchesValue.assetDescriptions[0].description + "</div>";
        }

        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li>';
    });

    //use the HTML output to show it in the index.html
    $(".activity-results").html(buildTheHtmlOutput);
}


// document ready function
// $(function() {
//     ajaxActiveSearch('running');

// });


// STEP 1 - get the input from the user
$("#activitySearch").submit(function(event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    
    
    var userInput = $("#cityName").val();
    
    if(userInput === "") {
        alert("Sorry that search did not yeild any results. Please enter a city and state and try your search again.");
    }
    else{
    // console.log(userInput);
      ajaxActiveSearch(userInput);    
    }
    //use that value to call the getResults function defined bellow
  
  

});


//populate favorites container
function populateFavoritesContainer() {


    $.ajax({
            type: "GET",
            url: "/populate-favorites/",
            dataType: 'json',
        })
        .done(function(dataOutput) {
            // console.log(dataOutput);
            //If successful, set some globals instead of using result object

            var buildTheHtmlOutput = "";

            $.each(dataOutput, function(dataOutputKey, dataOutputValue) {

                buildTheHtmlOutput += "<li class='favorites'>";
                buildTheHtmlOutput += "<div class='deleteFavorite'>";
                buildTheHtmlOutput += "<form class='deleteFavoriteValue'>";
                buildTheHtmlOutput += "<input type='hidden' class='deleteFavoriteValueInput' value='" + dataOutputValue._id + "'>";
                buildTheHtmlOutput += "<button type='submit' class='deleteFavoriteButton'>";
                buildTheHtmlOutput += "<img src='/images/delete_icon.png' class='delete-favorite-icon'>";
                buildTheHtmlOutput += "</button>";
                buildTheHtmlOutput += "</form>";
                buildTheHtmlOutput += "</div>";
                buildTheHtmlOutput += '<h4><a target="_blank" href="' + dataOutputValue.url + '" >' + dataOutputValue.name + '</a></h4>';
                var showCity = dataOutputValue.place;
                if (showCity === undefined) {
                    buildTheHtmlOutput += "";
                }
                else {
                    buildTheHtmlOutput += '<p>' + dataOutputValue.place + '</p>';
                }
                buildTheHtmlOutput += '<p>' + dataOutputValue.date + '</p>';
                buildTheHtmlOutput += "</li>";
                // console.log(dataOutput);
            });
            $(".favoritesContainer").html(buildTheHtmlOutput);
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });


}


$(function() {
    populateFavoritesContainer();

});



// add activity to favorites section
$(document).on('click', '.activity-results .addToFavoritesButton', function(event) {
    

    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
 
    //get the value from the input box
  $(this).toggleClass("highlight");

    var favoritesValue = $(this).parent().find('.addToFavoritesValue').val();
    var favoritesDateValue = $(this).parent().find('.addToFavoritesDateValue').val();
    var favoritesPlaceValue = $(this).parent().find('.addToFavoritesPlaceValue').val();
    var favoritesUrlValue = $(this).parent().find('.addToFavoritesUrlValue').val();

    var nameObject = {
        'name': favoritesValue,
        'date': favoritesDateValue,
        'place': favoritesPlaceValue,
        'url': favoritesUrlValue
    };

    $.ajax({
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(nameObject),
            url: '/add-to-favorites/',
        })
        .done(function(result) {
            
            populateFavoritesContainer();
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});


$(document).on('click', '.deleteFavorite', function(event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box

    
    
    var favoritesIdToDelete = $(this).parent().find('.deleteFavoriteValueInput').val();


    var nameObject = {
        'name': favoritesIdToDelete
    };

    $.ajax({
            method: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            url: '/delete-favorites/' + favoritesIdToDelete,
        })
        .done(function(result) {
            populateFavoritesContainer();
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});

