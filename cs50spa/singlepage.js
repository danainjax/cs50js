function showPage(page) {
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = 'block';
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        showPage(button.dataset.page);
    })
       
    }
)