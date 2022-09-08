/* //-------------------- LISTA ESPECIALISTAS -----------------------------------*/

const especialistas = [
    {nombre: 'Mario Bross', espe: 'OFTALMOLOGIA'},
    {nombre: 'Esteban Quito', espe: 'MEDICO CLINICO'},
    {nombre: 'Adriana Gonzales', espe: 'GINECOLOGIA'},
    {nombre: 'Armando Paredes', espe: 'NUTRICION'}
]

/* //------------------ FIN ESPECIALISTAS -------------------------*/



/*-------------------------------- PACIENTE Y COSTO-----------------*/


const consulta = 1000
let precio = 0

class Paciente {
    constructor(nombre, apellido, dni, condicion) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = parseInt(dni)
        this.condicion = condicion.toUpperCase()
    }

    costo(){
        if (this.condicion==='PARTICULAR'){
            precio = 2000 + consulta
        } else if (this.condicion==='OSDE'){
            precio = 1000 + consulta
        } else { alert('Particular u osde')
            }
    }

    mostrar(){
        if((this.condicion==='PARTICULAR') || (this.condicion==='OSDE')){
           alert('Los datos del paciente son: ' + this.nombre +' '+ this.apellido +' '+ this.dni +' '+ this.condicion+'.'+'Su costo es: '+precio+'')
        }
    }
}

const pacientes=[]
function pac (pacientes){
    console.log (pacientes)
}
/*----------------------------- FIN COSTO Y PACIENTES-------------------------------------*/ 


function presuPaciente (){
    debugger
    let nombre = prompt('Ingrese su nombre:')
    let apellido = prompt('Ingrese su apellido:')
    let dni = parseInt(prompt('Ingrese su dni:'))
    let condicion = prompt('Ingrese si es particular o indique su obra social:')
    let especial = (prompt('Elija una especialidad: Oftalmología, Medico clinico, Ginecología o Nutrición')).toUpperCase()


    const pacie = {nombre: nombre, apellido: apellido, dni: dni, condicion: condicion}
    pacientes.push(pacientes)

    const espec = especialistas.filter(especialista => especialista.espe.includes(especial))

    const costo = new Paciente(nombre,apellido,dni,condicion)
    costo.costo()
    costo.mostrar()
    console.log (espec)
}