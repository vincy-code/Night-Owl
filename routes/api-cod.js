$(function () {
    var queryURL = "https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/" + gamertag + "%2523" + gamertagNum + "/" + platform;
    // ------- these var's are temporary -------
    var gamertag = "Sunshine"
    var gamertagNum = "14256"
    var platform = "battle"
    // -----------------------------------------
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        alert("Load was performed.");
        console.log(res)
        console.log(res.Runtime)
    });
});