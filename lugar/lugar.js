const axios = require('axios');

const headers = {
    'x-rapidapi-key': '4f648a522emsh3bb63d7b65ebd5fp175bc0jsn846fe551cec2'
};

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`,
        headers
    });

    const res = await instance.get();
    if (res.data.data.length === 0) {
        throw new Error(`No hay resultados pára la dirección ${dir}`);
    }

    const { city: direccion, latitude: lat, longitude: lng } = res.data.data[0];
    return { direccion, lat, lng }
};

module.exports = { getLugarLatLng }