const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, lista, hasta) => {

    let salida = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base}x${i}=${base*i} \n`;
    }

    // La diferencia con el otro writeFile es que en este caso habría que manejar el error con un try catch
    try {
        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        if (lista) console.log(salida.blue);

        return `tabla-${base}`;
    } catch (error) {
        return error
    }
}

module.exports = {
    crearArchivo,
}