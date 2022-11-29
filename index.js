// variable to hols username
var user_name; 
function read_name(){
    user_name = document.getElementById("u_name").value;
    // store user name in local storage & use this in results page
    var s = user_name;
    localStorage.setItem("u_name", s);
    // console.log(localStorage.setItem("u_name", s));

    console.log(user_name);
    return user_name;
}
function submit_name(){
    //get the username
    var s = read_name();
    alert(s);
    //write username to json file using XHR
}
// var s = user_name;
// localStorage.setItem("u_name", s);
// console.log(localStorage.setItem("u_name", s));