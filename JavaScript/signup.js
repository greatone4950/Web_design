document.getElementById("signBT").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById("signBT").addEventListener("click", function() {
    document.getElementById("psbox").style.display = "block";
  });
  
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("psbox").style.display = "none";
  });