/* PROBLEMA SWITCH 1
 * crear una seleccion de distintos tipos de suscripcion para una pagina
 * en caso de que el ingreso no sea valido informar
 * caso contrario mostrar la cantidad de meses suscrito al servicio
 * y los beneficios obtenidos:
 *  1 mes - 1 dispositivo activo
 *  3 meses - 2 dispositivos activos
 *  6 meses - 4 dispositivos activos
 *  12 meses - 6 dispositivos activos
 * 
 * requisitos:
 *  + mostrar respuesta ante suscripcion o falla con la misma
 *  + mostrar beneficios de la suscripcion realizada  
 */



//constantes
const SUSCRIPCION_NIVEL_1_MESES = 1;
const SUSCRIPCION_NIVEL_2_MESES = 3;
const SUSCRIPCION_NIVEL_3_MESES = 6;
const SUSCRIPCION_NIVEL_4_MESES = 12;

const CANT_DISPOSITIVOS_NIVEL_1 = 1;
const CANT_DISPOSITIVOS_NIVEL_2 = 2;
const CANT_DISPOSITIVOS_NIVEL_3 = 4;
const CANT_DISPOSITIVOS_NIVEL_4 = 6;

//variables

let mesesSuscripcion = "Meses por defecto";

/**
 * Dependiendo del tipo de suscripcion de parte del usuario entonces
 * modificar la pagina para que visualice una respuesta
 */
function verificarSuscripcion(){
    mesesSuscripcion = document.querySelector("#lista_suscripciones").value;
    switch( Number(mesesSuscripcion) ){
        case SUSCRIPCION_NIVEL_1_MESES:
            document.querySelector("#respuesta").innerHTML = `
                <h5> Te suscribiste al nivel 1 - cantidad de meses: ${SUSCRIPCION_NIVEL_1_MESES} </h5>
                <h5> Beneficio: dispositivos simultaneos activos ${CANT_DISPOSITIVOS_NIVEL_1} </h5>     
                `;
            break;
        case SUSCRIPCION_NIVEL_2_MESES:
            document.querySelector("#respuesta").innerHTML = `
                <h5> Te suscribiste al nivel 2 - cantidad de meses: ${SUSCRIPCION_NIVEL_2_MESES} </h5>
                <h5> Beneficio: dispositivos simultaneos activos ${CANT_DISPOSITIVOS_NIVEL_2} </h5>   
            `;
            break;
        case SUSCRIPCION_NIVEL_3_MESES:
            document.querySelector("#respuesta").innerHTML = `
                <h5> Te suscribiste al nivel 3 - cantidad de meses: ${SUSCRIPCION_NIVEL_3_MESES} </h5>
                <h5> Beneficio: dispositivos simultaneos activos ${CANT_DISPOSITIVOS_NIVEL_3} </h5>   
            `;
            break;
        case SUSCRIPCION_NIVEL_4_MESES:
            document.querySelector("#respuesta").innerHTML = `
                <h5> Te suscribiste al nivel 4 - cantidad de meses: ${SUSCRIPCION_NIVEL_4_MESES} </h5>
                <h5> Beneficio: dispositivos simultaneos activos ${CANT_DISPOSITIVOS_NIVEL_4} </h5>   
            `;
            break;
        default:
            alert("error ingreso no aceptado");
            document.querySelector("#respuesta").innerHTML = `
                <h5> Tipo de suscripcion no valida - favor de seleccionar correctamente </h5>
            `;
                    
    }
}