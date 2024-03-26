// Tipo de datos
// String, number, boolean, null, underfined



/*Nivel de dificultad: Facil*/

console.log("Iniciando javascript");
let = "myName";
let = "myLastName";
let = "myAge";
myName = "Leonard";
myLastName = "Racagni";
myAge = 30;
let = "myPet";
myPet = "Santinho";
let = "petAge";
petAge = 15;
let = "nombreCompleto";
nombreCompleto = myName + " " + myLastName;
/* nombreCompleto = (`${myName} ${myLastName}`) */
console.log(nombreCompleto);

let = "presentacionText";
presentacionText =
  "Hola, mi nombre es " +
  nombreCompleto +
  " tengo " +
  myAge +
  " años, vivo en Misiones y tengo un perrito muy lindo llamado " +
  myPet +
  " que tiene " +
  petAge +
  " años, su apariencia y comportamiento es de un cachorro de 3 años, es un perrito muy saludable!";
console.log(presentacionText);



/*Nivel de dificultad: Medio*/
/* 1 */
let = "sumAges"
let = "restAges"
let = "divisionAges"

sumAges = myAge + petAge
restAges = myAge - petAge
divisionAge = myAge / petAge

console.log(sumAges, restAges, divisionAge)

/*Nivel de dificultad: Medio*/
/* 2 */
let estudiante={
    Nombre: "Leonard",
    Apellido: "Racagni",
    Edad: "30",
    Nacionalidad: "Argentina",
    Sexo: "Masculino",
}
console.table(estudiante)
console.log(estudiante.Nombre)
console.log(estudiante.Apellido)
console.log(estudiante.Edad)
console.log(estudiante.Nacionalidad)
console.log(estudiante.Sexo)

let pet={
    Nombre: "Santinho",
    Edad: "15",
    Pelaje: "peludo",
    Color: "blanco y marron claro",
    Tamaño: "pequeño",
}
console.table(pet)
console.log(pet.Nombre)
console.log(pet.Edad)
console.log(pet.Pelaje)
console.log(pet.Color)
console.log(pet.Tamaño)

/*Nivel de dificultad: Medio*/
/* 2 */
let frutaVerde = "pera"
let frutaAmarilla = "banana"
let frutaMarron = "kiwi"
let frutaRoja = "manzana"
let frutaNaranja = "naranja"

let frutas = [frutaVerde , frutaAmarilla , frutaMarron , frutaRoja , frutaNaranja]

console.table(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

/*Nivel de dificultad: Alto*/

let edad = prompt("Ingresar edad")
let numEntero = parseInt (edad)
// console.log(typeof(numEntero))
if(numEntero >= 18){
    let iAmAdult = numEntero
    console.log("Soy Adulto " + iAmAdult)
}else{
    console.log("Rechazado por ser menor")
}

/* PROFEEEEEEE acá yo pase de string a numero entero
porque dijo que era mejor manejar numeros enteros, es
una linea mas de codigo pero bueno, no se si es buena o 
mala practica pasar string a numero entero */

let numeros = [1 , 2 , 3 , 4 , 5]
console.table(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let termo = {
    nombre: "Termo",
    tamaño: "grande",
    color: "gris",
}
let mate = {
    nombre: "Mate",
    tamaño: "mediano",
    color: "negro",
}
let bombilla = {
    nombre: "Bombilla",
    tamaño: "pequeño",
    color: "plateado",
}
let yerba = {
    nombre: "Yerba",
    tamaño: "del contenedor",
    color: "verde",
}
let agua = {
    nombre: "Agua",
    tamaño: "del contenedor",
    color: "incoloro",
}

let familia = [termo, mate, bombilla, yerba, agua]

console.table(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let randomText = (frutas[1])+(numeros[3])+(familia[4].nombre)
console.log(randomText)