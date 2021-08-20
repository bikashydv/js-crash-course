//single element//
// // console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// multiple element

//  console.log(document.querySelectorAll('.item'));
//  console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByClassName('li'));

//   const items = document.querySelectorAll('.item');

//   items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

//ul.remove();
// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Bard';
// ul.lastElementChild.innerHTML = '<h1>hello</h1>'


// const btn = document.querySelector('.btn')
// btn.style.background = 'red';


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
 
myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
if(nameInput.value === ''|| emailInput.value === '') {
    alert('please enter field');
} else{
    console.log('success');
}
}




