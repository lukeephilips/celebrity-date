$(document).ready(function() {
  $("form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("input:radio[name=gender]:checked").val();
    var sign = parseInt($("#sign").val());
    console.log(sign + "  " + gender + "  " + age)
    event.preventDefault();

    if (gender === "male") {
      if (age > 30) {
        if (sign <=6) {
          $("form").hide();
          $(".dolly").show();
        } else {
          $("form").hide();
          $(".judi").show();
        }
      } else if (age <= 30) {
        if (sign <=6) {
          $("form").hide();
          $(".jlaw").show();
        } else {
          $("form").hide();
          $(".miley").show();
        }
      } else {
        //console.log("got to else")
        //$("#age").css("background-color", "red");//
        $(".form-group#age-group").addClass("has-error");
        console.log()
      }
    }

    if (gender === "female") {
      if (age > 30) {
        if (sign <=6) {
          $("form").hide();
          $(".wilford").show();
        } else {
          $("form").hide();
          $(".alan").show();
        }
      } else if (age <= 30) {
        if (sign <=6) {
          $("form").hide();
          $(".chris").show();
        } else {
          $("form").hide();
          $(".aziz").show();
        }
      } else {
        //console.log("got to else")
        //$("#age").css("background-color", "red");//
        $(".form-group#age-group").addClass("has-error");
        console.log()
      }
    }
  });
});
