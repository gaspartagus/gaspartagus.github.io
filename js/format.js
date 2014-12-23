
var k = [68, 73, 67, 75, 73, 78, 65, 66, 79, 88],
n = 0;
$(document).keydown(function (e) {
  if (e.keyCode === k[n++]) {
    if (n === k.length) {
      if( localStorage.areyouadick == "ouiouioui"){
      	localStorage.areyouadick = "nonnonnon"
        $("body").css("opacity","0");
      } else {
      	localStorage.areyouadick = "ouiouioui"
        $("body").css("opacity","1");
      }
    }
  } else n = 0
});

$(document).ready(function(){
	if(localStorage.areyouadick == "ouiouioui"){
		$("body").css("opacity","1")
	}

	$("img").parents().css("margin","10px");
	$("a").css("color","rgb(179, 5, 5)");
	$("h2 a").css("color","#DF5000");
	$("h3 a").css("color","rgb(58, 58, 58)");
	$(".c23").css("display","block").css("margin","10px");

	$("a").filter(function(i,el) {return el.hash[0] != "#"}).attr("target","_blank");
})



// <script src="js/jquery.min.js"></script>
// <script src="js/format.js"></script>