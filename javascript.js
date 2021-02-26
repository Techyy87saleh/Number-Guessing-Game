     let para = document.getElementById('content');
    let input = document.getElementById('form').value;
    let button = document.getElementById('btn'); 

    button.addEventListener('click',(e)=>{
     
    e.preventDefault()

     let randomNumber = (Math.floor(Math.random()*10));

     if(input == randomNumber){
         para.innerHTML = "Your Number is  high";
     }
     else if(input < randomNumber){
         para.innerHTML  = "Your Number is too low";
     }
     else if(input > randomNumber){
         para.innerHTML  = "Your number is too high"
     }
     else{
         para.innerHTML  = "Not Good,try again!"
     }
});
