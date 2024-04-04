document.getElementById("login-BT").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById("login-BT").addEventListener("click", function() {
    document.getElementById("pbox").style.display = "block";
  });
  
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("pbox").style.display = "none";
  });