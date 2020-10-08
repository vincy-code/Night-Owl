$(document).ready(() => {
  $.ajax({
    method: "GET",
    url: "https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/Sunshine%252314256/battle",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
      "x-rapidapi-key": "2dc88bc862msh01a6273fcbf4194p1e37acjsn0de8a177d74a",
      "useQueryString": true
    },
    timeout: 6000
  }).then((data) => {
    console.log(data)
    $("#tag").text(data.username)
    $("#kd").text(data.lifetime.all.properties.kdRatio.toFixed(2));
    $("#wl").text(data.lifetime.all.properties.winLossRatio.toFixed(2));
    $("#ttp").text(data.lifetime.all.properties.timePlayedTotal);
    $("#tgp").text(data.lifetime.all.properties.gamesPlayed);
    $("#acc").text(data.lifetime.all.properties.accuracy.toFixed(2));
  }).catch((error) => {
    console.log(error)
  })
});
