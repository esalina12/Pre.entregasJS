/* //----------------------------PRIMER PRE ENTREGA----------------------------------------



/* //-------------------- LISTA ESPECIALISTAS -----------------------------------*/

// /* const especialistas = [
//     {nombre: 'Mario Bross', espe: 'OFTALMOLOGIA'},
//     {nombre: 'Esteban Quito', espe: 'MEDICO CLINICO'},
//     {nombre: 'Adriana Gonzales', espe: 'GINECOLOGIA'},
//     {nombre: 'Armando Paredes', espe: 'NUTRICION'}
// ]

// /* //------------------ FIN ESPECIALISTAS -------------------------*/



// /*-------------------------------- PACIENTE Y COSTO-----------------*/


// // const consulta = 1000
// // let precio = 0

// // class Paciente {
// //     constructor(nombre, apellido, dni, condicion) {
// //         this.nombre = nombre,
// //         this.apellido = apellido,
// //         this.dni = parseInt(dni)
// //         this.condicion = condicion.toUpperCase()
// //     }

// //     costo(){
// //         if (this.condicion==='PARTICULAR'){
// //             precio = 2000 + consulta
// //         } else if (this.condicion==='OSDE'){
// //             precio = 1000 + consulta
// //         } else { alert('Particular u osde')
// //             }
// //     }

// //     mostrar(){
// //         if((this.condicion==='PARTICULAR') || (this.condicion==='OSDE')){
// //            alert('Los datos del paciente son: ' + this.nombre +' '+ this.apellido +' '+ this.dni +' '+ this.condicion+'.'+'Su costo es: '+precio+'')
// //         }
// //     }
// // }

// // const pacientes=[]
// // function pac (pacientes){
// //     console.log (pacientes)
// // }
// // /*----------------------------- FIN COSTO Y PACIENTES-------------------------------------*/ 


// // function presuPaciente (){
// //     debugger
// //     let nombre = prompt('Ingrese su nombre:')
// //     let apellido = prompt('Ingrese su apellido:')
// //     let dni = parseInt(prompt('Ingrese su dni:'))
// //     let condicion = prompt('Ingrese si es particular o indique su obra social:')
// //     let especial = (prompt('Elija una especialidad: Oftalmología, Medico clinico, Ginecología o Nutrición')).toUpperCase()


// //     const pacie = {nombre: nombre, apellido: apellido, dni: dni, condicion: condicion}
// //     pacientes.push(pacientes)

// //     const espec = especialistas.filter(especialista => especialista.espe.includes(especial))

// //     const costo = new Paciente(nombre,apellido,dni,condicion)
// //     costo.costo()
// //     costo.mostrar()
// //     console.log (espec)
// // }

//------------------------------------------------- FIN PRIMER ENTREGA ---------------------------------------------





//---------------------------------- SEGUNDA PRE ENTREGA---------------------------------------------------

const nombre = document.querySelector('#nombre')
const dni = document.querySelector('#dni')
const condicion = document.querySelector('#condicion')
const especialidad = document.querySelector('#especialidad')
const datosPaciente = document.querySelector('#datosPaciente')

//----------------------------------- LISTA OBRA SOCIAL ----------------------

const obraSocial = [{
   opcion: 'Particular'},
   {opcion: 'OSDE'} ,
   {opcion: 'OSECAC'} ,
   {opcion: 'UPCN'} ,
   {opcion: 'SUTEBA'} ,
]

const cargaCondicion = (select, array) => {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option>${elemento.opcion}</option>`
        });
    }
}

cargaCondicion(condicion, obraSocial)

//---------------------- FIN LSITA OBRA SOCIAL---------------------------------------

// -------------------------Lista especialistas----------------------------------------

const especialistas = [{
    sede: 'CABA',
    nombre: 'Mario Bross',
    especializacion: 'OFTALMOLOGIA'
},
{
    sede: 'Zona Oeste',
    nombre: 'Esteban Quito',
    especializacion: 'MEDICO CLINICO'
},
{
    sede: 'Zona Norte',
    nombre: 'Adriana Gonzales',
    especializacion: 'GINECOLOGIA'
},
{
    sede: 'Zona Sur',
    nombre: 'Armando Paredes',
    especializacion: 'NUTRICION'
}
]

const cargaEspecialidad = (select, array) => {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option>${elemento.especializacion}</option>`
        });
    }
}
cargaEspecialidad(especialidad, especialistas)




function cargarEspecialistas(array) {

array.forEach(lista =>{
    datosPaciente.innerHTML = ` <p> Médico/a: ${lista.nombre}</p>
                                <p> Especialidad: ${lista.especializacion}</p>
                                <p> Sede: ${lista.sede}</p>`

    document.body.appendChild(datosPaciente)
})
    
}

// ---------------------------------Fin lista especialistas-------------------------



//-----------------------SACAR TURNO---------------------------------

const turnos = []

const sacarTurno = () => {  

     datosPaciente.innerHTML = `<h3>SU TURNO:</h3>
                                <p> Nombre: ${nombre.value}</p>
                                <p> DNI: ${dni.value}</p>
                                <p> Condicion: ${condicion.value}</p>
                                <p> Especialidad: ${especialidad.value}</p>`

    document.body.appendChild(datosPaciente)
}

let boton = document.querySelector('#btn')
boton.addEventListener('click', sacarTurno)

function datosTurno () {
    localStorage.setItem('nombre', nombre.value)
    localStorage.setItem('dni', dni.value)
    localStorage.setItem('condicion', condicion.value)
    localStorage.setItem('especialidad', especialidad.value)
}
boton.addEventListener('click', datosTurno)

//--------------------- FIN SACAR TURNO ----------------------------

//------- RECUPERAR DATOS--------------------------

let recuperar = document.querySelector('#recuperar')



function recuperarTurno(){
    let nombre = localStorage.getItem('nombre')
    let dni = localStorage.getItem('dni')
    let condicion = localStorage.getItem('condicion')
    let especialidad = localStorage.getItem('especialidad')

    datosPaciente.innerHTML = `<h3>SU TURNO:</h3>
                                <p> Nombre: ${nombre}</p>
                                <p> DNI: ${dni}</p>
                                <p> Condicion: ${condicion}</p>
                                <p> Especialidad: ${especialidad}</p>`

    document.body.appendChild(datosPaciente)
}
recuperar.addEventListener('click', recuperarTurno)
//------------------ FIN RECUPERAR DATOS---------------------------

//---------------- ENVIAR DATOS POR EMAIL---------------------
let botonEnviar = document.querySelector('#btnEnviar')

const enviarPorEmail = ()=> {
    const suTurno = {
        fecha: new Date().toLocaleString(),
        Nombre: nombre.value,
        DNI: dni.value,
        Especialidad: especialidad.value,
    }
    localStorage.setItem("suTurno", JSON.stringify(suTurno))
    alert("Los datos de su turno fueron eviados exitosamente")
}

botonEnviar.addEventListener("click", enviarPorEmail)
//--------------------- FIN EVIAR DATOS ----------------------------
//-------------------------------- FIN SEGUNDA PRE ENTREGA ----------------------------------------------