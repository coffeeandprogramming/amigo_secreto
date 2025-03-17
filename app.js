// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let names = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = ' ';
    return;
}

function agregarAmigo() {
    let name = document.getElementById("amigo").value;
    if (name != "") {
        names.push(name);
        limpiarCaja();
        console.log(names);
        actualizarAmigos();
    }
    else {
        alert("Ingresaste un nombre vacio. Intentalo nuevamente.");
    }
    return;
}

function actualizarAmigos() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = "";
    for (let i = 0; i < names.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = names[i];
        list.appendChild(elementoLista);
    }

}

function sortearAmigo() {
    if (names.length > 0) {
        let i = Math.floor(Math.random() * names.length);
        console.log(i);
        let sorteado = document.getElementById("resultado");
        sorteado.innerHTML = names[i];
    }
    else
        alert("No hay nombres.")
}
