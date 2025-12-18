const button = document.getElementById("search-button")
const input = document.getElementById("city");

const cityname = document.getElementById("city-name");
const citytime = document.getElementById("city-time");
const citytemp = document.getElementById("city-temp");


async function getData(input) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=81fbdf59c81a4091972113336251712&q=${input}&aqi=yes`);
    return await promise.json()
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`
    citytime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
})


