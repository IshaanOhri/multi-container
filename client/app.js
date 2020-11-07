$(document).ready(function () {
  $("#submit").click(function () {
    var name = $("#name").val().toUpperCase();
    
    var settings = {
      "url": "http://localhost:3000/health",
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      alert(response.message);
    });
  });
});
