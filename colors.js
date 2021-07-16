const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const hello = document.querySelector('#hello');
const buttons = document.querySelectorAll('button');
const select = document.querySelector('select');

// red.addEventListener('click', function () {
//     document.querySelector('#hello').style.color = 'red';
// })

// blue.addEventListener('click', function() {
//     hello.style.color = 'blue';
// })

// green.addEventListener('click', function() {
//     hello.style.color = 'green';
// })

buttons.forEach(button => {
    button.addEventListener('click', () => {
        hello.style.color = button.dataset.color;
    })
})

select.addEventListener('change', () => {
    hello.style.color = select.value;
})