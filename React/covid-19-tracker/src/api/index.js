import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url
    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }

h

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        //const modifiedData = {
            // confirmed: data.confirmed,
            // recovered: data.recoverd,
            // deaths: data.deaths,
            // lastUpdate: data.lastUpdate
        //}
        //return modifiedData;
        return { confirmed, recovered, deaths, lastUpdate }
    }
    catch(error){ 
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        //console.log(data);

        // returning the instance of an object
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData; 
    }
    catch(error){
        console.log(error);
    }
}
export const fetchCountries = async () => {
    try{
        const { data: {countries }} = await axios.get(`${url}/countries`);
        // console.log(response);
        return countries.map((country) => country.name)
    }
    catch(error){
        console.log(error);
    }
}