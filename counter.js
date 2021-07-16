const h1 = document.getElementById('h1');
const bttn = document.getElementById('bttn')
const wordSpelled = document.querySelector("#spelling")
const speller = document.querySelector("#spell")
const spellBttn = document.querySelector("#spell-button")
// let counter = 0;
document.addEventListener('DOMContentLoaded', () => {
    
    h1.innerHTML = localStorage.getItem('counter')

})

function count() {
    let bicycle = localStorage.getItem('bicycle')
    let counter = localStorage.getItem('counter');
    counter ++;
    bicycle ++
    h1.innerHTML = counter;
    localStorage.setItem('counter', counter);
    localStorage.setItem('bicycle', bicycle)
    console.log(localStorage.getItem('bicycle'))
}


// setInterval(count, 1000)

bttn.addEventListener('click', count)

spellBttn.addEventListener('click', spell)

function spell() {
    console.log(speller.value)
    wordSpelled.innerHTML = speller.value ;
    speller.value = " "
}
