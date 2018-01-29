$(document).ready(function() {
	var d = new Date();
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var m = month[d.getMonth()];
	var day = d.getDate();
	$("#today").text(m +" "+ day);
});

//check off specific Todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
	//var time = $(this).children("span#time");
	if ($(this).hasClass("completed")) {
		var d = new Date();
		$(this).append("<span id='time'>" + d.getHours() + ":" + d.getMinutes() + "</span>");
	} else {
		$(this).children("#time").remove();
	};
});
//click on X to delete Todo
$("ul").on("click", "#trash", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span id='trash'><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});



$("#plus").click(function() {
	$("#add").slideToggle();
})
