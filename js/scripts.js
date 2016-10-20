$(document).ready(function() {
  $("form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("input:radio[name=gender]:checked").val();
    var sign = parseInt($("#sign").val());
    console.log(sign + "  " + gender + "  " + age)
    event.preventDefault();
  });
});
