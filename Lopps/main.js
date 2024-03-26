/* NIVEL DE DIFICULTAD BAJO */
/* 1 */

// let ingreso = parseInt(prompt("Ingrese un numero del 1 al 100"))

// if(ingreso <= 100 && ingreso > 0){
//     for (let index = ingreso; index >= 0; index--) {
//         console.log(index)
        
//     }
// }else{
//     console.log(alert("numero invalido"))
// }





/* 2 */

// let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"))

// if(numeroIngresado <= 10 && numeroIngresado > 0){
//     for (let index = 1; index <= 10; index++) {
//         console.log(index + "x" + numeroIngresado + "=" + index * numeroIngresado)        
//     }
// }else{
//     console.log(alert("numero invalido"))
// }



/* 3 */
// let suma = 0

// while (true) {
//     let entradaNumeros = parseInt(prompt("Ingrese un numero"))
//     if(entradaNumeros === 0 || isNaN(entradaNumeros)){
//         break
//     } 
//     suma += entradaNumeros
// }

// console.log(suma)



/* 4 */
// let agregar = 0;

// do {
//     let numeros = parseInt(prompt("Ingrese numeros a sumar"))
//     if (numeros === 0 || isNaN(numeros)) {
//         break
//     }
//     agregar += numeros;
// }
// while (true)
// console.log("La suma de los numeros ingresados es: ", agregar)




/* 5 */
// let persona = {
//     nombre: "Leonard",
//     apellido: "Racagni",
//     origen: "Argentina",
//     estudios: "Estudiante",
//     edad: 30}

// for (let perfil in persona){
//     console.log(perfil)
// }

/* 6 */
// for (let perfil in persona){
//     console.log(persona[perfil])
// }




/* NIVEL DE DIFICULTAD MEDIO */
/* 1 */
// let numeroSecreto = agregar

// let intentos = 0
// while (true) {
//     let numeroIngresado = parseInt(prompt("Ingrese un numero"))
//     intentos ++
//     if (numeroIngresado ===  numeroSecreto) {
//         console.log ("El numero secreto era " + numeroSecreto + " en " + intentos + " intentos")
//         break       
//     }   else if (numeroIngresado >  numeroSecreto){
//         console.log ("Ingresaste un numero mayor al numero secreto")
//     }
//         else {
//         console.log ("Ingresaste un numero menor al numero secreto")
//     }
// }




/* 2 */
// let numerO = parseInt(prompt("Ingresa un numero"))
// if(numerO > 0 && !isNaN(numerO)){
//     console.log("La division de " + numerO + " es ")
//     for(let index = 0; index < numerO; index++){
//     if (numerO %i == 0){
//         console.log(index)
//     }
// }
// }else{
//     console.log("Ingrese un numero valido")
// }




/* 3 */
// function campana(){
//     console.log("Ding Dong");
//     return "Ding Dong,"
// }

// function campanaOperacion(){
//     let veces = parseInt(prompt("Ingrese la hora"))
//     if (!isNaN(veces) && veces > 0){
//         let resultado= ""
//         for (let index = 0; index < veces; index++){
//             resultado+= campana() }
//             console.log(resultado)
//     }else{
//     console.log ("Ingrese un numero valido")}
// }
// campanaOperacion()


/* 4 */
// const dateLimite = "1997-8-3"
// const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for (let index=0; index < fechas.length; index++){
//     if (dateLimite <fechas[index]){
//         console.log(fechas[index])
//     }
// }




/* 5 */
// let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marron", "Negro", "Blanco"]
// for (let index=0; index < colores.length; index++){
//     console.log(colores[index])

/* 6 */
// function mostrarColor(array){
//     for (let index = 0; index<colores.length; index++){
//         console.log(colores[index])
//     }
// }
// mostrarColor(colores)


/* 7 */
// let arrayNumberos = [ 2 , 4 , 6 , 8 , 10 , 12 ]
// for (let index = 0; index < arrayNumberos.length; index++){
//     console.log("el numero es " + arrayNumberos[index] + " y su doble es " + arrayNumberos[index] * 2)
// }



/* 8 */
// let familiaLopez = [{
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 38,
//     miembroFamiliar: "padre"
// }, {
//     nombre: "Maria",
//     apellido: "Lopez",
//     edad: 40,
//     miembroFamiliar: "mother"
// }, {
//     nombre: "Tomás",
//     apellido: "Perez",
//     edad: 10,
//     miembroFamiliar: "son"
// }, {
//     nombre: "Romina",
//     apellido: "Perez",
//     edad: 13,
//     miembroFamiliar:  "hija"
// }]

// function mostratMiembros(array){
//     for (let index=0; index< familiaLopez.length; index++){
//         console.log("Hola, soy" + ${familiaLopez[index].nombre} ${familiaLopez[index].apellido} (${familiaLopez[index].miembroFamiliar}) + " y yo soy " + ${familiaLopez[index].edad} + " años" )
//     }
// }
// mostratMiembros(familiaLopez)

/* NIVEL DE DIFICULTAD ALTO */
/* 1 */
// let numeroPar = 0
// let numeroViejo = 0
// while (true){
//     let numeroIngresado = parseInt(prompt("Introduce un numero"))
//     if (numeroIngresado %2 == 1){
//         numeroViejo += numeroIngresado
//     } else if (numeroIngresado %2 == 0){
//         numeroPar += numeroIngresado
//     } else if (numeroIngresado === 0 || isNaN(numeroIngresado)){
//         break
//     }
// }   
//     console.log("Numero par: " + numeroPar)
//     console.log("Numero viejo: " + numeroViejo)



/* 2 */
// let arrayAlto = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]
// let numeroGrande = arrayAlto[0]
// for (let index = 0; index < arrayAlto.length; index++){
//     if (arrayAlto[index] > numeroGrande){
//         numeroGrande = arrayAlto[index]
//     }
// }
// console.log(numeroGrande)
