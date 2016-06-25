$( ".submit" ).click(function() {
	var reservations = [ 
		{
			name:  $("#reserve_name").val(),
			phoneNumber: $("#reserve_phone").val(),
			email: $("#reserve_email").val(),
			uniqueID: $("#reserve_uniqueID").val()
		} 
	]	

	$.post( "http://localhost:3000/api/new", reservations)
	.done(function(data){
		console.log(data);
		alert("Adding reservation...")
	})
			
	console.log(reservations);
	return false;
});