function blogPost(){
    location.href = "blogpost.html";
}

const inputs = document.querySelectorAll('.form-box input, textarea, .form-input');
const burger = document.querySelector('.burger');
const ul = document.querySelector('.nav-left ul');
const radios = document.querySelector('.radios');

Array.from(inputs).forEach(elem =>{
    elem.addEventListener('click', ()=>{
        elem.style.border = '2px solid var(--main-bg-color)';
    })
    elem.addEventListener('blur', ()=>{
        elem.style.border = '2px solid black';
    })
})

burger.addEventListener('click', ()=>{
    ul.classList.toggle('active');
})

yearToggle.addEventListener('click', ()=>{
    radios.classList.toggle('none');
})