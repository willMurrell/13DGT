// JavaScript Document
alert( "js is attached"); //test alert

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
	//once the for loop has gone through each elemnts i the form
	//it will output the list using the DOM
	alert("yo")
	var text="ypopyop"
	document.getElementById("radioResult").innerHTML = text;
}