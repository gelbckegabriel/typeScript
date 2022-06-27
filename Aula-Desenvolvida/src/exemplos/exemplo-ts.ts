let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement; // definir como um elemento de input.
let input2 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros (numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2;
}

let devePrintar = true;
let frase = "O valor é: "

if (button) { // definir se caso o button exista.
    button.addEventListener('click', () => {
            if (input1 && input2) { // definir se caso os inputs existam.
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase)) // Converser para number, pois o .value é uma string.
        }
    })
}