import { apiFetch } from "./apiFetch.js";
import { UpdateWeatherUI } from "./UpdateWeatherUI.js";
import "./styles.css";


document.addEventListener('DOMContentLoaded', () =>{
    const searchLocation = document.querySelector("form");
    const locationInput = document.querySelector(".location-input")
    if(searchLocation){
        searchLocation.addEventListener('submit',(e) =>{
            e.preventDefault();

            //Pass the input element into your API fetch function
            apiFetch(locationInput)
            .then((data) =>{
                UpdateWeatherUI(data.days[0]);
            })
            .catch((err) =>{
                console.error("Error handling weather process");
            })
        });
    }

});







