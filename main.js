let button = document.querySelector('body a');

button.addEventListener('click',()=>{
   const span = document.querySelector('a span');
   button.style.paddingRight = '10px';
   span.style.visibility = 'visible';
  
   setTimeout(() => {
    span.style.visibility = 'hidden';
    button.style.transition ='1s ease-in-out';
    button.style.paddingRight = '0px'
   },3000);
})
