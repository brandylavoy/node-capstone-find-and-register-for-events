/* global $ */

// var activityArray = [{
//         activityName: "Run 1",
//         activityDistance: "1k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 2",
//         activityDistance: "2k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 3",
//         activityDistance: "3k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 4",
//         activityDistance: "4k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 5",
//         activityDistance: "5k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 6",
//         activityDistance: "6k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 7",
//         activityDistance: "7k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 8",
//         activityDistance: "8k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 9",
//         activityDistance: "9k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 10",
//         activityDistance: "10k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 11",
//         activityDistance: "11k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 12",
//         activityDistance: "12k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 13",
//         activityDistance: "13k",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 14",
//         activityDistance: "1 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 15",
//         activityDistance: "2 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 16",
//         activityDistance: "3 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 17",
//         activityDistance: "4 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 18",
//         activityDistance: "5 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 19",
//         activityDistance: "6 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 20",
//         activityDistance: "7 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 21",
//         activityDistance: "8 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 22",
//         activityDistance: "9 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 23",
//         activityDistance: "10 Mile",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 24",
//         activityDistance: "Half Marathon",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     },

//     {
//         activityName: "Run 25",
//         activityDistance: "Marathon",
//         activityLocation: "San Francisco, CA",
//         activityDate: "Saturday, March 25, 2017"
//     }
// ]

// search for running activities
// local ajax call to the server external api

function ajaxActiveSearch(searchTerm) {

    $.ajax({
            type: "GET",
            url: "/activity/" + searchTerm,
            dataType: 'json',
        })
        .done(function(dataOutput) {
            console.log(dataOutput);
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
    // var buildTheHtmlOutput = "<ul class='activity-results'>";
    // http://api.amp.active.com/v2/search?topicName=Running&registerable_only=true&zip=94590&radius=25&api_key=2e4ra5w6b9augfrn54vjb4bx
    $.each(dataMatches, function(dataMatchesKey, dataMatchesValue) {
        //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
        buildTheHtmlOutput += '<li class="events">';

        buildTheHtmlOutput += "<div class='favorites'>";
        buildTheHtmlOutput += "<form class='addToFavorites'>";
        buildTheHtmlOutput += "<input type='hidden' class='addToFavoritesValue' value='" + dataMatchesValue.assetName + "'>";
        buildTheHtmlOutput += "<button type='submit' class='addToFavoritesButton'>";
        buildTheHtmlOutput += "<img src='add_favorite.png' class='add-favorite-icon'>";
        buildTheHtmlOutput += "</button>";
        buildTheHtmlOutput += "</form>";
        buildTheHtmlOutput += "</div>";

        buildTheHtmlOutput += '<div class="event-description">';
        buildTheHtmlOutput += '<h4><a target="_blank" href="' + dataMatchesValue.registrationUrlAdr + '" >' + dataMatchesValue.assetName + '</a></h4>';

        var showDistance = dataMatchesValue.assetAttributes[0];
        if (showDistance === undefined) {
            buildTheHtmlOutput += "";
        }
        else {
            buildTheHtmlOutput += '<p>' + dataMatchesValue.assetAttributes[0].attribute.attributeValue + '</p>';
        }

        // buildTheHtmlOutput += '<p>' + dataMatchesValue.assetAttributes[0].attribute.attributeValue + '</p>';
        buildTheHtmlOutput += '<p>' + dataMatchesValue.place.cityName + '</p>';
        var utcDate = dataMatchesValue.activityStartDate; // ISO-8601 formatted date returned from server
        buildTheHtmlOutput += '<p>' + new Date(utcDate) + '</p>';
        // buildTheHtmlOutput += '<img>' + dataMatches.logoUrlAdr; 
        // buildTheHtmlOutput += '</img>'

        var showDescription = dataMatches.assetDescriptions;
        if (showDescription === undefined) {
            buildTheHtmlOutput += "";
        }
        else {
            buildTheHtmlOutput += '<p>' + dataMatches.assetDescriptions.description + '</p>';
        }

        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li>';
    });

    // buildTheHtmlOutput += "</ul>";

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
    console.log(userInput);
    //use that value to call the getResults function defined bellow
    ajaxActiveSearch(userInput);

});



if (ajaxActiveSearch == "") {
    alert("Unfortunatley your search did not return any events. Please try entering a different city and state.")

}


//populate favorites container
function populateFavoritesContainer() {


    $.ajax({
            type: "GET",
            url: "/populate-favorites/",
            dataType: 'json',
            contentType: 'application/json'
        })
        .done(function(dataMatches) {
            //If successful, set some globals instead of using result object



            var buildTheHtmlOutput = "";

            $.each(dataMatches, function(dataMatchesKey, dataMatchesValue) {

                buildTheHtmlOutput += "<li class='favorites'>";

                // delete button
                buildTheHtmlOutput += "<div class='deleteFavorite'>";
                buildTheHtmlOutput += "<form class='deleteFavorite'>";
                buildTheHtmlOutput += "<input type='hidden' class='deleteFavoriteValue' value='" + dataMatchesValue.assetName + "'>";
                buildTheHtmlOutput += "<button type='submit' class='deleteFavorite'>";
                buildTheHtmlOutput += "<img src='/images/delete_icon.png' class='delete-favorite-icon'>";
                buildTheHtmlOutput += "</button>";
                buildTheHtmlOutput += "</form>";
                buildTheHtmlOutput += "</div>";


                buildTheHtmlOutput += '<h4><a target="_blank" href="' + dataMatchesValue.registrationUrlAdr + '" >' + dataMatchesValue.assetName + '</a></h4>';

                var showCity = dataMatchesValue.place;
                if (showCity === undefined) {
                    buildTheHtmlOutput += "";
                }
                else {
                    buildTheHtmlOutput += '<p>' + dataMatchesValue.place.cityName + '</p>';
                }

                var utcDate = dataMatchesValue.activityStartDate; // ISO-8601 formatted date returned from server
                buildTheHtmlOutput += '<p>' + new Date(utcDate) + '</p>';
                buildTheHtmlOutput += "</li>";
                console.log(dataMatches);
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

$(document).on('click', '.activity-results .addToFavoritesButton', function(event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    var favoritesValue = $(this).parent().find('.addToFavoritesValue').val();


    var nameObject = {
        'name': favoritesValue
    };

    $.ajax({
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(nameObject),
            url: '/add-to-favorites/',
        })
        .done(function(result) {
            console.log(result);
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

    $.ajax({
            method: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            url: '/delete-favorites',
        })
        .done(function(result) {
            console.log(result);
            populateFavoritesContainer();
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});





//     $("#activitySearch").submit(function(event) {
//         //if the page refreshes when you submit use "preventDefault()" to force JavaScript to handle the form submission
//         event.preventDefault();
//         //get the value from the input box
//         var zip = $("#zip").val();
//         var activityRadius = $("#activityRadius").val();
//         var activityDistance = $("#activityDistance").val();


//         //use that value to call the getResults function
//         ajaxActiveSearch(zip, activityDistance);

//     })
// };

// function getActiveSearchData(zip, activityDistance) {

//     var active_base_URL = "http://api.amp.active.com/v2/search?topicName=Running&registerable_only=true&zip=94590&radius=50&api_key=2e4ra5w6b9augfrn54vjb4bx" 

//     if (zip != "" && activityRadius != "" && activityDistance != "") {
//         // active_base_URL +=;
//     }
//     else {
//         alert("Please enter a value for zip code, select a search radius, and running event distance")
//     }


//     console.log(active_base_URL);

//define function
//enter search term return recipes and/or
//select diet return filtered list of recipes and/or
//select allergy return filtered list of recipes

// STEP 1 - get the input from the user
// $("#activitySearch").submit(function (event) {
//     //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
//     event.preventDefault();
//     //get the value from the input box
//     var zip = $("#zip").val();
//     var activityRadius = $("#activityRadius").val();

//     console.log(zip, activityRadius);
//     //use that value to call the getResults function defined bellow
//     getActiveSearchData(zip, activityRadius);
// });

// function getActiveSearchData(zip, activityRadius) {
//     http: //api.amp.active.com/v2/search?topicName=Running&registerable_only=true&zip=92101&radius=50


//         var active_base_URL = "http://api.amp.active.com/v2/search?topicName=Running&registerable_only=true";

//     if (zip != "" && activityRadius != "choose") {
//         active_base_URL += "&zip=" + zip += "&radius="  + value += "&api_key=2e4ra5w6b9augfrn54vjb4bx"
//     } 

//     else {
//         alert("Please enter a value for zip code, select a search radius, and then submit");
//     }

//     console.log(active_base_URL);
//     var result = $.ajax({
//             /* update API end point */
//             url: active_base_URL,
//             dataType: "json",
//             /*set the call type GET / POST*/
//             type: "GET"
//         })
//         /* if the call is successful (status 200 OK) show results */
//         .done(function (result) {
//             /* if the results are meeningful, we can just console.log them */
//             console.log(result);
//             //
//             //            console.log(result.matches[0].recipeName);
//             //            console.log((result.matches[0].totalTimeInSeconds / 60) + " minutes");
//             //            console.log(result.matches[0].rating + "*");

//             displayActiveSearchData(result.matches);
//         })
//         /* if the call is NOT successful show errors */
//         .fail(function (jqXHR, error, errorThrown) {
//             console.log(jqXHR);
//             console.log(error);
//             console.log(errorThrown);
//         });
// }









//use functions
// $(document).ready(function() {

// })

//on click on #searchButton filter results and display them
