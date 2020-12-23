// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
let colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();
        // console.log(colors.cyan(listado));
        for (let tarea of listado) {
            console.log('========================'.green)
            console.log(tarea.descripcion);
            console.log('Estado:', colors.cyan(tarea.completado));
        }
        break;

    case 'actualizar':
        // console.log('Actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break

    default:
        console.log("Comando no reconocido");
}