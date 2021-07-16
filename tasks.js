const form = document.querySelector('form');
const tasks = document.querySelector('#tasks')
 

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const task = document.querySelector('#task').value
    const li = document.createElement('li');
    li.innerHTML = task
    tasks.append(li)
    document.querySelector('#task').value = ' ';
})

document.querySelector('#submit').disabled = true;

document.querySelector('#task').addEventListener('keyup', () => {
    if (document.querySelector('#task').value.length > 0) {
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
    }

})