
function getFormvalue(event) {
    //Write your code here
//event.preventDefault();
	let firstName=document.getElementsByName("fname");
	let lastName=document.getElementsByName("lname");
	alert(firstName[0].value);
}

//document.getElementById("btn").addEventListener("click", getFormvalue);