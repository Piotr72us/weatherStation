// // JS code
// var city = "chicago";
// // var city = 
// // var city;

// var searchPan = $("#searchCityBtnPlace");

// var lat;
// var lon;

// var poiId = [];
// var imgId = [];

// var placeName = [];
// var address = [];
// var country = [];
// var rank = [];

// var openAPI = "af6923e95cbb6c53be8ceb07c2b776e5"
// var tomAPI = "OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk"

// function weatherSearch (city2) {
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city2 + "&units=imperial&appid=" + openAPI;
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         lat = response.coord.lat;
//         lon = response.coord.lon;
//         console.log(city2, lat, lon);
//         tom1(lat, lon);
//     });
// }

// // weatherSearch();


// // Show TomTom Tourist Attractions
// function tom1 (lat, lon) {
//     var queryURL = "https://api.tomtom.com/search/2/search/important tourist attraction.json?key=" + tomAPI + "&lat=" + lat + "&lon=" + lon + "&idxSet=POI&limit=11";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         //make an array of POIs which possess "dataSources" = images
//         for (var i = 0; i < 11; i++) {
//         if (response.results[i].dataSources !== undefined) {
//             poiId.push(response.results[i].dataSources.poiDetails[0].id);
//             placeName.push(response.results[i].poi.name);
//             address.push(response.results[i].address.freeformAddress);
//             country.push(response.results[i].address.country);
//             rank.push(response.results[i].score.toFixed(1));
//         }
//         else 
//         {console.log("not lucky today")}
//     }   
//     tom2(poiId);
//     console.log(poiId);
//     console.log(placeName);
//     console.log(address);
//     console.log(country);
//     console.log(rank);


//     });   
// }


// // get POI details and images after you know POI's ID
// function tom2 (poiId) {

//     for (i = 0; i < poiId.length; i++) {
//     var queryURL = "https://api.tomtom.com/search/2/poiDetails.json?key=" + tomAPI + "&id=" + poiId[i];

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         imgId.push(response.result.photos[0].id);
//                 // var creator = $(".place-img-top").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + response.result.photos[0].id + "&height=200&width=200");
//                 // var creator = $("<img>").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + response.result.photos[0].id + "&height=200&width=200");
//                 callme(imgId);
//                 // $("#results").append(creator);
//     });
//     } 
    
// }

// console.log(imgId);

// function callme(imgId) {
//     for (var i = 0; i < 5; i++) {
// // var imageEl = $("<img>").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + imgId[i]);
                        
// $("#imx" + i).attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + imgId[i]);
// // $("#imx2").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + imgId[1]);
// // $("#imx3").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + imgId[2]);
// // $("#imx4").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + imgId[3]);

// $("#hel" + i).text(placeName[i]);
// $("#par" + i).text(address[i]);
// var ctry = $("<p>").text(country[i]);
// var rnk = $("<p>").text("Our verdict: " + rank[i] + " out of 10 stars!");
// $("#par" + i).text(address[i]).append(ctry).append(rnk);
// // var p = $("<p>").text(placeName[i]);
// // var r = $("<p>").text(address[i]);
// // var s = $("<p>").text(country[i]);
// // var t = $("<p>").text(rank[i]);

// // $("#results").append(p);
// // $("#results").append(r);
// // $("#results").append(s);
// // $("#results").append(t);
// }
// }
// // $("#el2").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + imgId + "&height=200&width=200");

// // $("#el3").text(placeName[0]);
// // $("#el4").text(address[0]);
// // $("#el5").text(country[0]);
// // $("#el6").text("Our score is: " + rank[0] + "/10");
// // var star = $("<img>").attr("src", "star.png");
// // var recom = $("<img>").attr("src", "https://media.giphy.com/media/LpKKZSe05le5Ki8YAt/giphy.gif").attr("class", "smaller");

// // recom.setAttribute("class", "feedback");
// // setTimeout(function() {
// //     recom.setAttribute("class", "flashing");
// // }, 1000);

// // feedbackEl.setAttribute("class", "feedback");



// // $("#el6").prepend(star);
// // $("#el6").append(recom);

// // }


// // function appendAll(captions) {

// //         console.log(captions);

// // }
// //         // console.log(address[i]);
// //         // console.log(country[i]);




// //     // console.log(captions);
// //     // console.log(imgId);
// //     // console.log(address);
// //     // console.log(country);


// // appendAll(captions);

// // console.log(placeName);




// // $('#searchCityBtn').on('click', function(){
// //     event.preventDefault();
// //     city = $('#cityInput').val();
// //     weatherSearch(city);
// // });


// $(searchPan).on('click', function(){
//     event.preventDefault();
//     var city2 = $('#cityInput2').val();
//     console.log("i was click")
//     console.log(city2);
//     weatherSearch(city2);
    

// });


// VERSION 01

// JS code
var city = "chicago";

var searchPan = $("#searchCityBtnPlace");

var descriptions = [];

var lat;
var lon;

var poiId = [];
var imgId = [];
var anotherId = [];

const imgObj = {}
const imgObj2 = {}
const imgObjReviews = {}
const imgObjReviewsDate = {}
const imgObjRatings = {}

var placeName = [];
var address = [];
var country = [];
var rank = [];

var openAPI = "af6923e95cbb6c53be8ceb07c2b776e5"
var tomAPI = "OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk"

var touristAtt = "important%20tourist%20attraction"

function weatherSearch2 (city2) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city2 + "&units=imperial&appid=" + openAPI;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        lat = response.coord.lat;
        lon = response.coord.lon;
        
        tom1(lat, lon);
    });
}


// Show TomTom Tourist Attractions
function tom1 (lat, lon) {
    var queryURL = "https://api.tomtom.com/search/2/search/important%20tourist%20attraction.json?key=" + tomAPI + "&lat=" + lat + "&lon=" + lon + "&idxSet=POI";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //make an array of POIs which possess "dataSources" = images
        for (var i = 0; i < response.results.length; i++) {

        if (response.results[i].dataSources !== undefined) {

            poiId.push(response.results[i].dataSources.poiDetails[0].id);

            placeName.push(response.results[i].poi.name);
            address.push(response.results[i].address.freeformAddress);
            country.push(response.results[i].address.country);
            rank.push(response.results[i].score.toFixed(0));

        }

    }   
    tom2(poiId);
    });   
}

// get POI details and images after you know POI's ID
function tom2 (poiId) {

    for (i = 0; i < poiId.length; i++) {
    var queryURL = "https://api.tomtom.com/search/2/poiDetails.json?key=" + tomAPI + "&id=" + poiId[i];

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // descriptions.push(response.result.description);

        // console.log(descriptions);
        imgObj[response.id] = response.result.photos[0].id
        imgObj2[response.id] = response.result.description
        imgObjReviews[response.id] = response.result.reviews[0].text
        imgObjReviewsDate[response.id] = response.result.reviews[0].date
        imgObjRatings[response.id] = response.result.rating.value
        
        imgId.push(response.result.photos[0].id);
        anotherId.push(response.result.description);

        callme(imgObj, imgObj2, imgObjRatings);
        console.log(anotherId);

    });
    } 
    
}
console.log(anotherId);
// console.log(descriptions);
function callme(imgObj, imgObj2, imgObjRatings) {
    // console.log(imgObj);
    // console.log(imgObj2);
    // console.log(descriptions);

    for (var i = 0; i < 5; i++) {
        
        $("#imx" + i).empty().attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + imgObj[poiId[i]]);

        $("#hel" + i).empty().text(placeName[i]);
        $("#par" + i).empty().text(address[i]);
        var ctry = $("<p>").text(country[i]);

        var rnk = $("<p>").text("Our verdict: " + rank[i] + " out of 10 stars!");
        $("#par" + i).empty().text(address[i]).append(ctry).append(rnk)
    }

    for (var i = 0; i < 5; i++) {
        
        var deb = $("<p>").text(imgObj2[poiId[i]]);
        var realRating = $("<p>").text("Average rating: " + imgObjRatings[poiId[i]])

        $("#par" + i).append(deb).append(realRating);
    }

    // for (var i = 0; i < 5; i++) {
    //     if (imgObjReviews[poiId[i]] !== undefined && imgObjReviewsDate[poiId[i]] !== undefined) {
    //     var realReview = $("<p>").text("Top review: " + imgObjReviews[poiId[i]] + " (from " + imgObjReviewsDate[poiId[i]] + ")")
    //     $("#par" + i).append(realReview);
    //     }
    // }

    // for (var i = 0; i < 5; i++) {
    //     if (imgObjRatings[poiId[i]] !== undefined) {
    //     var realRating = $("<p>").text("Average rating: " + imgObjRatings[poiId[i]])
    //     $("#par" + i).append(realRating)
    //     }
    // }



}


$(searchPan).on('click', function(event){
    event.preventDefault();
    var city2 = $('#cityInput2').val();
    weatherSearch2(city2);
    // location.reload();

});

// VERSION 02