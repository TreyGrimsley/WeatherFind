export function UpdateWeatherUI(data){

const currentTemp = document.querySelector('#current-temp');
const feelsLikeTemp = document.querySelector('#feels-like');
const highestTodayTemp = document.querySelector('#high');
const lowestTodayTemp = document.querySelector('#low');
const conditions = document.querySelector('#conditions');


if(currentTemp && feelsLikeTemp && highestTodayTemp && lowestTodayTemp && conditions){
    currentTemp.textContent = `${data.temp}${"\u00B0F"}`;
    feelsLikeTemp.textContent = `${data.feelslike}${"\u00B0F"}`;
    highestTodayTemp.textContent = `${data.tempmax}${"\u00B0F"}`;
    lowestTodayTemp.textContent = `${data.tempmin}${"\u00B0F"}`;
    conditions.textContent = `The weather description for today is: ${data.conditions}`;
}





}