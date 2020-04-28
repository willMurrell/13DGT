// JavaScript Document
alert( "js is attached"); //test alert
var database = firebase.database(); //creating link to your database
var orderRef = database.ref('order'); //creates a reference point to firebase, order node
function loopForm(form) {
	alert("Check your order please"); //test alert
	var sandwhichOrder = []; //defines empty list
	for ( var i = 0; i < form.elements.length; i++) {//for loop   through form
		if ( form.elements[i].type == "radio") {
			if (form.elements[i].checked) {
				sandwhichOrder.push( form.elements[i].value);
				alert(sandwhichOrder); //test alert
				
			}
		} 
		if ( form.elements[i].type == 'checkbox' ){
			if ( form.elements[i].checked){
				sandwhichOrder.push(form.elements[i].value + ' ');
				alert(sandwhichOrder); //test alert
			}
		}
		
	} 
	

	alert("alert 1")
	//once the for loop has gone through each element in the form it will output the list using the DOM
	var customer_name = document.getElementById("customer_name").value;
	var phone_number = document.getElementById("phone_number").value;
	alert( customer_name + " " + phone_number );
	document.getElementById("radioResults").innerHTML = customer_name + " " + phone_number + " " + sandwhichOrder;
	var data = { //JSON file
		sandwhich: sandwhichOrder,
		name: customer_name,
		cell_number: phone_number
	}
	orderRef.push(data); //pushing the data to firebase
	alert("data has been pushed")
}
