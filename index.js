let input = document.querySelector('.select');
const body = document.querySelector('body');

input.checked = JSON.parse(localStorage.getItem('mode'));
updateBody();

input.addEventListener('input', ()=>{
   updateBody();
})

function updateBody(){
    if(input.checked){
        body.style.backgroundColor = 'black';
        body.style.color = 'white'
        updateLocalStorage();
    }
    else{
        body.style.backgroundColor = 'white';
        body.style.color = 'black'
        updateLocalStorage();
    }
}

function updateLocalStorage(){
    localStorage.setItem('mode', JSON.stringify(input.checked));
}