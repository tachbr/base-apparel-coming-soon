document.querySelector(".base-btn").addEventListener("click", function(){

  var email = document.getElementById("email").value;

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    document.querySelector("#email").classList.remove("invalid-email");
    document.querySelector("#error-text").innerHTML= "";
  } else {
    document.querySelector("#email").classList.add("invalid-email");
    document.querySelector("#error-text").innerHTML= "Please enter a valid email";
}


});
