
let counter = 0;
// select the elements to target 
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.counter-btn');

btn.forEach((button)=>{
  button.addEventListener('click', (event)=>{
    let curr = event.target.classList;
    if(curr.contains('increase')) counter++;
    else if(curr.contains('decrease')) counter--;
    else if(curr.contains('reset')) counter = 0;
    displayValue();
  })
})
function displayValue(){
  value.textContent = counter;
  if(counter < 0) value.style.color = 'red';
  else if(counter > 0) value.style.color = 'green';
  else value.style.color = 'inherit';
}
