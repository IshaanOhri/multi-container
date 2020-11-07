$(document).ready(function () {
  $("#submit").click(function () {
    var name = $("#name").val().toUpperCase();
    
    var settings = {
      "url": `/api/health?name=${name}`,
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      alert(response.message);
    });
  });
});
