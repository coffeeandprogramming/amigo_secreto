// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let names = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = ' ';
    return;
}

function agregarAmigo() {
    let name = document.getElementById("amigo").value;
    if (name != " ") {
        names.push(name);
        limpiarCaja();
        console.log(names);
    }
    else {
        alert("Ingresaste un nombre vacio. Intentalo nuevamente.");
    }
    return;

}