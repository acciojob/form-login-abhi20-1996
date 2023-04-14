
function getFormvalue() {
    //Write your code here
//event.preventDefault();
	let firstName=document.ElementsByName("fname").value;
let lastName=document.ElementSByName("lname").value;
	alert(firstName);
}
document.getElementById("btn").addEventListener("click", getFormvalue);