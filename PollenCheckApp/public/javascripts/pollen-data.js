const key = "demo";
const functionName = "TIME_SERIES_DAILY";
const symbolName = "MSFT";
const apiUrl = `https://cors-anywhere.herokuapp.com/https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json`;


axios
    .get(apiUrl)
    .then(response => {
        console.log(response.data);

        const pollenDataAmbrosia = response.data.content[0].Pollen.Ambrosia;
        

       
        
        //const dates = Object.keys(bitcoinData)
        //const values = Object.values(bitcoinData)
        
        //printTheChart(dates, values);
    })
    .catch(err => {
        console.log('Error while getting the data', err);
    })