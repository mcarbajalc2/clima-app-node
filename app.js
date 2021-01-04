const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const getInfo = async(dir) => {
    try {
        const { direccion, lat, lng } = await getLugarLatLng(dir);
        const temperatura = await getClima(lat, lng);
        return `La temperatura en ${direccion} es de ${temperatura}°`;
    } catch (err) {
        return `No se pudo determinar la temperatura de ${dir}`;
    }

}

getInfo(argv.direccion)
    .then(result => console.log(result))
    .catch(err => console.log(err));