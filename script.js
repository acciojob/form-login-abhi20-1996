function getFormvalue() {
//Write your code here
let firstName=document.getElementsByName("fname");
let lastName=document.getElementsByName("lname");
alert(firstName[0].value+" "+lastName[0].value);
}