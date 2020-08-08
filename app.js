/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '703c2a99151c82a49eace36e5822c660';



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', () => {
    let zip = document.getElementById('zip').value;
    getWeather(baseURL, apiKey, zip)
    .then(data => {
        const feel = document.getElementById('feelings').value;
        console.log(postWeather(`${baseURL}${zip}&appid=${apiKey}`, {newDate, feel}));
        
    });
    
})




const getWeather = async (baseURL, apiKey, zip) => {

    const wholeURL = `${baseURL}${zip}&appid=${apiKey}`;
    const response = await fetch(wholeURL);
    try{
        const data = await response.json();
        console.log(data);
        return data;

    }catch(err){
        console.log(`We have encountered this error: ${err}`);
    }
}

const postWeather = async (url = '', data = {}) => {
    console.log(data);

    /*
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try{
        newData = {
            temp = this.temp;
            date = this.date;
            feelings = this.feelings;
        }
        
    }catch(error){
        console.log(`We have encounted this error: ${error}`)
    }
    */
}