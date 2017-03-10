function ajaxActiveSearch(searchTerm) {

    $.ajax({
            type: "GET",
            url: "/activity/" + searchTerm,
            dataType: 'json',
        })
        .done(function(result) {
            console.log(result);
            // displayWikipediaAuthorResults(JSON.parse(resultsForJsonParse));
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

$(function() {
    ajaxActiveSearch('running');

});