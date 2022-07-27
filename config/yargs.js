
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es el parametro que indica hasta donde llega la multiplicacion por defecto es 10'
                })
                .check((argv, options) => {
                    if ( isNaN(argv.b) ) {
                        throw 'La base debe ser numerica';
                    }

                    if ( isNaN(argv.h) ) throw 'El parametro h debe ser numerico';

                    return true;
                })
                .argv;

module.exports = argv