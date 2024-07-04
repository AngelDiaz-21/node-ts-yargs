import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

// De esta forma podemos "obligar" a que nos manden argumentos en la consola
// En este caso solo debe de enviar el primer argumento, ya que no tiene un valor por defecto como los otros 2 argumentos que si tienen
// Con hideBin se excluyen los primeros argumentos, o sea, solo detectara los argumentos que aqui se especifiquen. En este caso no se toman en cuenta los argumentos "npx ts-node" y el archivo a ejecutar "src/app.ts"
// La forma de enviar los argumentos puede ser de 2 formas, ya sea usando la opcion o el alias
    // Ejemplo de usar la opcion: -b(lleva solo un guion)
    // Ejemplo de usar el alias: --base(lleva doble guion)
export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
})
// Y en el caso de este argumento, con solo poner el argumento este lo regresa como true, ya si se necesita que se ponga en false se debe de enviar el valor del argumento o bien, no especificar el argumento y por defecto toma el valor de false
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
})
.option( 'n', {
    alias: 'name',
    type:  'string',
    default: 'multiplication-table',
    describe: 'File name'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
})
// Check permite validar los argumentos
// Las opciones son todas las opciones de nuesto objeto de configuracion de yargs
.check((argv, options) => {
    // console.log({argv, options});
    // Si el argumento denominado base le mandamos un numero menor a 0, nos regresarae el error
    if(argv.b < 1) throw 'Error: base must be greather than 0';
    // throw new Error ('Error: base must be a number');
    return true
})
// Si ponemos solamente parse nos devolvera un objeto y una promesa que resuelve el objeto. Si nosotros sabemos que todo será sincrono ponemos parseSync
.parseSync()