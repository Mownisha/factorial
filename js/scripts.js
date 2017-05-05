$(document).ready(function() {
  $("#fact").submit(function(event) {
    event.preventDefault();
    var output = 1;
    var number = parseInt($("#num").val());
    var n;
    for(n=number;n>=1;n=n-1) {
      output *=n;
    }
    $("#result").text(output);
  });
});
