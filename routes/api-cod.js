const settings = {
  "url": "https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/Sunshine%252314256/battle",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
    "x-rapidapi-key": "2dc88bc862msh01a6273fcbf4194p1e37acjsn0de8a177d74a",
    "content-type": "application/json",
    "useQueryString": "true"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});