const h1 = document.getElementById('h1');
const bttn = document.getElementById('bttn')
const wordSpelled = document.querySelector("#spelling")
const speller = document.querySelector("#spell")
const spellBttn = document.querySelector("#spell-button")
let counter = 0;

function count() {
    counter ++;
    h1.innerHTML = counter;
}

setInterval(count, 1000)

bttn.addEventListener('click', count)

spellBttn.addEventListener('click', spell)

function spell() {
    console.log(speller.value)
    wordSpelled.innerHTML = speller.value ;
    speller.value = " "
}
