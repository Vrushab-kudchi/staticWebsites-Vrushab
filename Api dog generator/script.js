function getdog(){
fetch("https://dog.ceo/api/breeds/image/random")      
  .then(response => response.json())
  .then(response => { console.log(response.message)
   let img = document.getElementById("randomimg")
   img.src = `${response.message}`
    });
}
