
function getFormvalue(event) {
    //Write your code here
event.preventDefault();
	let firstName=document.ElementById("fname").value;
let lastName=document.ElementById("lname").value;
	alert("firstName");
}
document.getElementById("btn").addEventListener("click", getFormvalue);