document.getElementById("subBT").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById("subBT").addEventListener("click", function() {
    document.getElementById("ssbox").style.display = "block";
  });
  
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("ssbox").style.display = "none";
  });