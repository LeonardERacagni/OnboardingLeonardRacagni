//1
let titulo = document.getElementById("titulo")
//2
let tituloPrincipal = "Frutas"
titulo.innerHTML = tituloPrincipal
// console.log(titulo)
//3
let headerAndFooter = document.getElementsByClassName("headerYfooter")
// console.log(document.querySelectorAll(".headerYfooter").className += " text-yellow-700")
// console.log([headerAndFooter])
// headerAndFooter[0].className = " bg-yellow-500"
// headerAndFooter[0].style.backgroundColor= "#FFA233"
// headerAndFooter[1].style.backgroundColor= "#FFA233"

for (const iterator of headerAndFooter) {
    iterator.style.backgroundColor= "#FFA233";
}

//4
let parrafoFooter = document.getElementsByTagName("p")
// console.log([parrafoFooter])
parrafoFooter[0].innerHTML += " Leonard Emanuel Racagni Cohort 54"

//5
let divCard = document.createElement("div")
document.body.children[1].appendChild(divCard)
divCard.setAttribute("id", "contenedor")
// console.log(document.getElementById("contenedor"))
// console.log(document.body.children[1].createElement("div"))
// console.log(document.body.children[1])

//6

let createCard = function( objeto ){
    return `<div class="flex flex-col w-3/4 md:w1/3 lg:w-1/5 p-1 bg-yellow-200 shadow-lg m-8">
                <img src="${objeto.foto}" alt="${objeto.name}">
            <div class="flex flex-col p-1">
                <h2 class="text-center">nombre : ${objeto.nombre}</h2>
                <p>descripcion : ${objeto.descripcion}</p>
            </div>
        </div>`
}

//7
const frutasCard = []

for (const iterator of frutas) {
    frutasCard.push(iterator)
}

// console.log(frutasCard)

for (const iterator of frutasCard) {
    contenedor.innerHTML += createCard(iterator)
    // console.log(createCard(iterator))
}

//8
// console.log(document.getElementById("contenedor"))

//9
let divLista = document.createElement("div")
document.body.children[1].appendChild(divLista)
divLista.setAttribute("id" , "lista")
// console.log(document.getElementById("lista"))

let tituloFrutas = document.createElement("h2")
tituloFrutas.innerText = "Frutas dulces"
document.getElementById("lista").appendChild(tituloFrutas)
// console.log(document.getElementById("lista").children)

//10
let ulLista = document.createElement("ul")
document.body.children[1].appendChild(ulLista)
ulLista.setAttribute("id" , "idListaDesordenada")



let arrayEsDulce = frutasCard.filter( niIdea => niIdea.esDulce).map(frutasCard => frutasCard.nombre)


let crearLi = obj => `<li> ${obj} </li>`

let agregarLista = (array, contenedor) => {
    for (const nombre of array) {
        contenedor.innerHTML += crearLi(nombre)
        contenedor.appendChild(ulLista)
    }
} 



