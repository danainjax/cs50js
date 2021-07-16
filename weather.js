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
        const temperature = data.temperature;
        report.innerHTML = 
        `<h3>The weather in</h3>
         <h1>${city}</h1> is:
        <h2> Temperature: ${temperature} </h2>
        <h3> The wind is ${data.wind} </h3>
         <h2> ${data.description} </h2>`
        weather = document.getElementById('weather');
        weather.innerHTML = " "
        weather.append(report);
    })
})





