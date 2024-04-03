//1
let imprimirMensaje = mensaje => console.log(mensaje)

//2
let crearMultiplicacion = (numero1 , numero2) => numero1*numero2

//3
const array = [1,2,3,4,5,6,7,8,9]
let numerosArray = array.map((numeros)=>numeros*2)

console.log(array)
console.log(numerosArray)

//4
let mayorAlcohol = beers.toSorted((elemento1 , elemento2) => elemento2.abv - elemento1.abv).splice(0,10)
console.log(mayorAlcohol)

//5
let masAmargas = beers.toSorted((elemento1 , elemento2)=> elemento1.ibu - elemento2.ibu).splice(0,10)

//6
/* console.log(beers) */
let nombreIngresado = "Mixtape 8"
let arrayYNombreDeCerveza = beers.find(elemento => elemento.name == nombreIngresado)

console.log(arrayYNombreDeCerveza)

//7
let ingreseIbu = 50
let buscadorDeIbu = ((beers , ingreseIbu) => {
    let ibuDetector = beers.find(objeto => objeto.ibu == ingreseIbu)
    return ibuDetector != undefined ? ibuDetector: `No hay cerveza con un ibu de ${ingreseIbu}`
    
})
console.log(buscadorDeIbu(beers))

//8
let nombreDeCerveza = 'Mixtape 8'
let buscadorDeCerveza = ((beers , nombreDeCerveza) => {
    let aux = beers.findIndex(a => a.name == nombreDeCerveza)
    return aux != undefined ? aux: `${nombreDeCerveza} no existe`
})


console.log(buscadorDeCerveza(beers, nombreDeCerveza))


//9
let nuevoObjeto
let nuevaFuncion = (beer , limite) => beer.filter((beer) => beer.abv < limite).map((beer)=>
    nuevoObjeto ={
        name: beer.name,
        alcohol: beer.abv,
        bitterness: beer.ibu,
    }
)

console.log(nuevaFuncion(beers,4.6))

//10
let ordenar = (array, propiedad, booleano) => {
    if(booleano){
        let ordenarAscendente = array.toSorted((a,b)=>a-b).splice(0,10)
        console.log(ordenarAscendente)
        return ordenarAscendente
    }else{
        let ordenarDescendente = array.toSorted((a,b)=>b-a).splice(0,10)
        console.log(ordenarDescendente)
        return ordenarDescendente
    }
}

console.log(ordenar(beers, "ibu", true))

//11
let generador = document.createElement("generador")
let container = document.getElementById("datos")

let crearTabla = obj => `<tr>
    <td class="border-2 border-solid border-slate-950 p-4">${obj.name}</td>
    <td class="border-2 border-solid border-slate-950 p-4">${obj.abv}</td>
    <td class="border-2 border-solid border-slate-950 p-4">${obj.ibu}</td>
    </tr>`

let renderizar = (array, contenedor) => contenedor.innerHTML=array.map(crearTabla).reduce((a,b)=>a+b)
console.log(renderizar(beers,generador))

container.innerHTML=renderizar(beers ,generador)

