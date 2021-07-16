const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const cityInput = document.getElementById('city').value
    const city = cityInput;
    const baseURL = `https://goweather.herokuapp.com/weather/${city}`
    document.getElementById('city').value = ' '
    
    fetch (baseURL)
    .then(response => response.json())
    .then(data => {
        const report = document.createElement('div')
        report.innerHTML = 
        `<h1> The weather in ${city} is:</h1>
         <h2> ${ data.description} </h2>`
        weather = document.getElementById('weather');
        weather.innerHTML = " "
        weather.append(report);
    })
})





