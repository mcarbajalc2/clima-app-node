const axios = require('axios');

const getClima = async(lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=ce368a3e01ffa3db54e9e71df7067f39&lat=${lat}&lon=${lng}&units=metric`);
    return res.data.main.temp;
}

module.exports = { getClima }