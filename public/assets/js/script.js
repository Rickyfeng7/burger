$(function(){
	$(".change-devoured").on("click", function(event){
		var id = $(this).data("id");
		var newDevoured = $(this).data("devour");
		console.log("click", id)
		console.log("click", newDevoured)
		var eaten = {
			devoured: newDevoured
		};
		console.log(eaten)
		$.ajax("/api/burgers/" + id, {
		  method:"PUT",
		  data: eaten
		}).then(
		  function(data){
		  	console.log("changed to", data)
		    location.reload();
		  }
		);
	});

	$(".create-form").on("submit", function(event){
		console.log("click")
		event.preventDefault();
		var newBurger = {
			burger_name: $("#bg").val().trim(),
		};
		$.ajax("/api/burgers/", {
		  method:"POST",
		  data: newBurger
		}).then(
		  function(data){
		  	console.log("changed devoured", data)
		    location.reload();
		  }
		);
	});
});
