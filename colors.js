const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const hello = document.querySelector('#hello');

red.addEventListener('click', function () {
    document.querySelector('#hello').style.color = 'red';
})

blue.addEventListener('click', function() {
    hello.style.color = 'blue';
})

green.addEventListener('click', function() {
    hello.style.color = 'green';
})
