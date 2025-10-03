
let button = document.getElementById('searchbutton')
let input = document.getElementById('input')

button.addEventListener('click',async ()=>{
    let location = input.value.trim()
    let formattedData= await fetchData(location);
        let city = formattedData.location.name;
        $(".cityName").text(city);
        let temp = formattedData.forecast.forecastday[3].hour[0].temp_c
        $('.temp').text(temp)
        let small =formattedData.forecast.forecastday[3].hour[12].feelslike_c
        $('.small').text(small)
        $('.skyDesc').text(formattedData.current.condition.text)
        $('#date').text(formattedData.location.localtime.split(" ")[0])
        $('#time').text(formattedData.location.localtime.split(" ")[1])
        $("#wind").text(formattedData.current.wind_mph)
        $("#windDirection").text(formattedData.current.wind_dir)
        $("#pressure").text(formattedData.current.humidity)

        $("#sunriseTime").text(formattedData.forecast.forecastday[3].astro.sunrise)
        $("#sunsetTime").text(formattedData.forecast.forecastday[3].astro.sunset)
})

async function fetchData(cityName) {
        let key = '5c7fd074aef24f13a2392559250110'
        let fetchData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}&days=7`)
        let formatData = await fetchData.json();
            // console.log(formattedData)
            return formatData;

}


          