
var reservations = [ 
	{
		name: name,
		phoneNumber: phone,
		email: email,
		uniqueID: id
	} 
]


function reservation(name, phone, email, id){
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.id = id;  
}
