const buttons = document.querySelectorAll('.button')
// console.log(buttons);

buttons.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        
        document.body.style.backgroundColor = e.target.id
        
    })
    
})