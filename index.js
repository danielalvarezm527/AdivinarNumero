// Juego de adivinar el numero

// se debe ingresa un objeto con las siguientes caracteristicas
// metodo math.random para el numero a adivinar
// numero de intentos para adivinar
// estado

// FUNCIONES
// Tradicionales: 2 
// 1. Evaluar intento (validar el numero ingresado con el numero a adivinar)
// 2. Repetir intento ()

// FUNCION FLECHA
// Generar numero (La que usa el math random)
// Mostrar informacion (Imprimir lo que esta pasando)

const player = {
    number: 4,
    attemps: 3,
    status: '...'
}

let c_attemps = 1;

function repeatAttempt(object){
    c_attemps += 1;
    if(c_attemps > object.attemps){
        console.log('No more attemps');
        return;
    }
    randomNumber(object);
}

function evaluateAttempt (number, object){
    if(number == object.number) {
        object.status = 'Winner';
        printInfo(object);
        return;
    }

    object.status = 'Loser';
    printInfo(object);
    repeatAttempt(object);
    return;
}

const randomNumber = (object) => {
    let r_number = Math.round(Math.random() * (5 - 1) + 1);
    console.log('The random number is: ' + r_number);
    evaluateAttempt(r_number, object);
}

const printInfo = (info) => {
    console.log(info)
}

randomNumber(player);