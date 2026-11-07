// Fetch Timeline Weather API data for Dillon, South Carolina using Fetch API
// Units: metric, Content type: JSON
// Endpoint: /timeline/{location}
// API Key: RWLDSGQRLRSVX65KWPTSXGQH7 (Replace for production)
export function apiFetch(locationInput){

    if(!locationInput){
        console.error("Could not find .location-Input value")
        return;
    }

    if(!locationInput.value.trim()){
        alert("Please enter a location")
        return;
    }




    
    const apiKey = 'RWLDSGQRLRSVX65KWPTSXGQH7';
    const location = encodeURIComponent(locationInput.value.trim());
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}&contentType=json`;

    return fetch(url)
    .then(async (response) => {
        if (!response.ok) {
        // Try to extract error message
        let errorMsg = '';
        try {
            errorMsg = await response.text();
        } catch (_) {}
        throw new Error(`API request failed with status ${response.status}: ${errorMsg}`);
        }
        return response.json();
    })
    .then((data) => {
        // Example: Print the resolved address and first day's forecast
        console.log('Location:', data.resolvedAddress);
        if (Array.isArray(data.days)) {
        console.log('First daily summary:', data.days[0]);
        } else {
        console.log('No daily data found.');
        }
        // To inspect all data: console.log(data);
        return data
    })
    .catch((err) => {
        console.error('Error fetching weather data:', err);
    });
};
