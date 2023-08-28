const tareas = [
    {
        id: Date.now(),
        nombre: 'Revisar tareas',
        estado: false
    },
    {
        id: Date.now()+1,
        nombre: 'Revisar correo',
        estado: false
    },
    {
        id: Date.now()+2,
        nombre: 'Desayunar',
        estado: false
    }
];

const botonAgregar = document.querySelector('#btnAgregar');
const completadas = document.querySelector('#realizadas');

function datosPorDefectos() {
    let html = '';
    let listaDeTareas = document.querySelector('.cuerpo');
    let realizada = 0;
    for (let tarea of tareas) {
        html += `
            <tr>
                <td class="lista">${tarea.id}</td>
                <td class="table-active">${tarea.nombre}</td>
                <td>
                    <input id='listo' type="checkbox" ${tarea.estado ? 'checked' : ''} onclick="cambiarEstado(${tarea.id})" />
                    <i class="fa-solid m-1 fa-trash" onclick='borrar(${tarea.id})'></i>
                </td>
            </tr>`;
        if (tarea.estado) {
            realizada++;
        }
    }
    listaDeTareas.innerHTML = html;
    document.querySelector('#totalTarea').innerHTML = tareas.length;
    completadas.innerHTML = realizada;
}

datosPorDefectos();

botonAgregar.addEventListener('click', () => {
    let agregarTarea = document.querySelector('#agregarTarea');
    if (agregarTarea.value !== '') {
        const nuevaTarea = { id: Date.now(), nombre: agregarTarea.value, estado: false };
        tareas.push(nuevaTarea);
        agregarTarea.value = '';
        datosPorDefectos();
    } else {
        alert('ingrese');
    }
});

function borrar(id) {
    let buscando = tareas.findIndex((e) => e.id === id);
    tareas.splice(buscando, 1);
    datosPorDefectos();
}

function cambiarEstado(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.estado = !tarea.estado;
        datosPorDefectos();
    }
}
