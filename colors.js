const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const hello = document.querySelector('#hello');
const buttons = document.querySelectorAll('button');

// red.addEventListener('click', function () {
//     document.querySelector('#hello').style.color = 'red';
// })

// blue.addEventListener('click', function() {
//     hello.style.color = 'blue';
// })

// green.addEventListener('click', function() {
//     hello.style.color = 'green';
// })

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        hello.style.color = button.dataset.color;
    })
})