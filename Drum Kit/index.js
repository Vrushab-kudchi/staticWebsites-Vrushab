document.querySelector(".w").addEventListener("click" ,function(){
  let audio = new Audio("sounds/crash.mp3");
  audio.play();
});

document.querySelector(".a").addEventListener("click" ,function(){
    let audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  });

document.querySelector(".s").addEventListener("click" ,function(){
    let audio = new Audio("sounds/snare.mp3");
    audio.play();
  });

document.querySelector(".d").addEventListener("click" ,function(){
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });

  document.querySelector(".j").addEventListener("click" ,function(){
    let audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  });

  document.querySelector(".k").addEventListener("click" ,function(){
    let audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  });

  document.querySelector(".l").addEventListener("click" ,function(){
    let audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  });

  document.addEventListener("keypress" , function(event){
    console.log(event.key)
    if (event.key == "w" || event.key == "W")
    {
        let audio = new Audio("sounds/crash.mp3");
        audio.play(); 
    }
    else if (event.key == "a" || event.key == "A")
    {
        let audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if (event.key == "s" || event.key == "S")
    {
        let audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if (event.key == "d" || event.key == "D")
    {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if (event.key == "j" || event.key == "J")
    {
        let audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    }
    else if (event.key == "k" || event.key == "K")
    {
        let audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if (event.key == "l" || event.key == "L")
    {
        let audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    }
    
  })