/* global $ */

var activityArray = [{
        activityName: "Run 1",
        activityDistance: "1k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 2",
        activityDistance: "2k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 3",
        activityDistance: "3k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 4",
        activityDistance: "4k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 5",
        activityDistance: "5k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 6",
        activityDistance: "6k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 7",
        activityDistance: "7k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 8",
        activityDistance: "8k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 9",
        activityDistance: "9k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 10",
        activityDistance: "10k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 11",
        activityDistance: "11k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 12",
        activityDistance: "12k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 13",
        activityDistance: "13k",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 14",
        activityDistance: "1 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 15",
        activityDistance: "2 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 16",
        activityDistance: "3 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 17",
        activityDistance: "4 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 18",
        activityDistance: "5 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 19",
        activityDistance: "6 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 20",
        activityDistance: "7 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 21",
        activityDistance: "8 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 22",
        activityDistance: "9 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 23",
        activityDistance: "10 Mile",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 24",
        activityDistance: "Half Marathon",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    },

    {
        activityName: "Run 25",
        activityDistance: "Marathon",
        activityLocation: "San Francisco, CA",
        activityDate: "Saturday, March 25, 2017"
    }
]



function ajaxActiveSearch(searchTerm) {

    $.ajax({
            type: "GET",
            url: "/activity/" + searchTerm,
            dataType: 'json',
        })
        .done(function(result) {
            console.log(result);
            // displayActiveActivityResults(JSON.parse(resultsForJsonParse));
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });


    $(function() {
        ajaxActiveSearch('running');

    });

    $("#activitySearch").submit(function(event) {
        //if the page refreshes when you submit use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();
        //get the value from the input box
        var postalCode = $("#postalCode").val();
        var activityRadius = $("#activityRadius").val();
        var activityDistance = $("#activityDistance").val();


        //use that value to call the getResults function
        ajaxActiveSearch(postalCode, activityDistance);

    })
};

function getActiveSearchData(postalCode, activityDistance) {

    var active_base_URL = "http://api.amp.ACTIVE.com/search?{queryString params}&api_key={2e4ra5w6b9augfrn54vjb4bx}" //NOT SURE THIS IS CORRECT//

    if (postalCode != "" && activityRadius != "" && activityDistance != "") {
        // active_base_URL +=;
    }
    else {
        alert("Please enter a value for zip code, select a search radius, and running event distance")
    }


    console.log(active_base_URL);
    
    
//     var result = $.ajax({
//         /* update API end point */
//         url: active_base_URL,
//         dataType: "json",
//         /*set the call type GET / POST*/
//         type: "GET"
//     })
//  /* if the call is successful (status 200 OK) show results */
//         .done(function (result) {
//             /* if the results are meeningful, we can just console.log them */
//             //            console.log(result);
//             //            console.log(result.matches[0].smallImageUrls[0]);
//             //            console.log(result.matches[0].recipeName);
//             //            console.log((result.matches[0].totalTimeInSeconds / 60) + " minutes");
//             //            console.log(result.matches[0].rating + "*");

//             displayActiveActivityResults(result.matches);
//         })
//         /* if the call is NOT successful show errors */
//         .fail(function (jqXHR, error, errorThrown) {
//             console.log(jqXHR);
//             console.log(error);
//             console.log(errorThrown);
//         });
 }

