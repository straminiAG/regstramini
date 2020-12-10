var btn = document.getElementById("btn");
btn.addEventListener("click", regForm);

function regForm() {
   var name = document.getElementById("getName").value;
   var pass = document.getElementById("passs").value;
   var city = document.getElementById("getCity").value;

   if (name == "") {
      //console.log("1");
      document.getElementById("error1").innerHTML = "You must insert name!";
   } else document.getElementById("error1").innerHTML = "";

   if (pass == "")
      document.getElementById("error2").innerHTML = "You must insert password!";
   else if (pass.length < 6)
      document.getElementById("error2").innerHTML =
         "Your password must be at least 6 characters long!";
   else document.getElementById("error2").innerHTML = "";

   if (city == "")
      document.getElementById("error3").innerHTML = "You must insert city!";
   else document.getElementById("error3").innerHTML = "";

   if (
      document.getElementById("male").checked == false &&
      document.getElementById("female").checked == false
   ) {
      document.getElementById("error4").innerHTML = "Choose gender!";
   } else document.getElementById("error4").innerHTML = "";
}
