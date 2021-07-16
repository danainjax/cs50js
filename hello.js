const hello = document.getElementById('hello');
const form = document.getElementById('form')

hello.addEventListener('click', (e) => {
    if (hello.innerHTML == "Hello") {
        hello.innerHTML = "Goodbye";
    } else {
        hello.innerHTML = "Hello"
    }
})

form.addEventListener('submit', function() {
    let myName = document.querySelector('#name').value;
    alert(`${myName} is my name, don't wear it out!`);
})