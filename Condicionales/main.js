/* DIFICULTAD BAJO */
/* 1 */

let num1 = 4
let num2 = 5

if(num1 > num2){
    console.log(num1)
}else{
    console.log(num2)
}

/* 2 */

if(num1 > num2){
    console.log(num1)
}else if(num2 > num1){
    console.log(num2)
}else{
    console.log("los numeros son iguales")
}

/* 3 */
if(num1 == num2){
    console.log("los numeros son iguales")
}else{
    console.log("los numeros son diferentes")
}

/* 4 */
let date1 = "2018-9-2"
let date2 = "2023-7-5"

if(date1 < date2){
    console.log("la fecha " + (date2) + " es mayor que " + (date1))
}else if(date1 == date2){
    console.log("las fechas son iguales")
}else{
    console.log("la fecha " + (date2) + " es menor que " + (date1))
}

/* 5 */
if(date1 < date2){
    console.log("la fecha " + (date2) + " es mayor que " + (date1))
}else if(date1 > date2){
    console.log("la fecha " + (date2) + " es menor que " + (date1))
}else{
    console.log("las fechas son iguales")
}

/* 6 */
let number1 = 5
let number2 = 7
let number3 = 9

if(number1 > number2){
    console.log("el numero " + [number1] + " es mas grande")
}else if(number2 > number3){
    console.log("el numero " + [number2] + " es mas grande")
}else{
    console.log("el numero " + [number3] + " es mas grande")
}

/* DIFICULTAD MEDIA */
/* 1 */
/*
let color = prompt("elija y escriba: rojo, azul o verde")
switch (color){
    case "rojo":
    console.log(alert("El color de la pasion"))
    break;
    case "azul":
    console.log(alert("El color del mar"))
    break;
    case "verde":
    console.log(alert("El color de la naturaleza"))
    break;
    default:
    console.log(alert("Error"))
    break;

}
*/

/* 2 */
/*
let numero1 = prompt("ingrese un numero del 1 al 100")
let operacion = prompt("ingrese el simbolo + , - , / , *")
let numero2 = prompt("ingrese un numero del 1 al 100")

switch(operacion){
    case "+":
        console.log(alert("la suma de " + (numero1) + " y " + (numero2) + " es " + (parseInt([numero1]) + parseInt([numero2]))))
        break;
    case "-":
        console.log(alert("la resta de " + (numero1) + " y " + (numero2) + " es " + (parseInt([numero1]) - parseInt([numero2]))))
        break;
    case "/":
        console.log(alert("la division de " + (numero1) + " y " + (numero2) + " es " + (parseInt([numero1]) / parseInt([numero2]))))
        break;
    case "*":
        console.log(alert("la multiplicacion de " + (numero1) + " y " + (numero2) + " es " + (parseInt([numero1]) * parseInt([numero2]))))
        break;
    default:
        console.log(error)
        break;
}
*/

/* 3 */
let persona1 = {
    name: "Juan",
    age: 39,
    height: 1.69,
}
let persona2 = {
    name: "Rosa",
    age: 35,
    height: 1.50,
}
// OPCION SIMPLE
if(persona1.age > persona2.age , persona1.height > persona2.height){
    console.log(persona1.name + " es mas alto y mayor que " + persona2.name)
}else{
    console.log(persona2.name + " es mas alto y mayor que " + persona1.name)
}

// OPCION SOFISTICADA
if(persona1.age > persona2.age){
    if(persona1.height > persona2.height){
        console.log(persona1.name + " es mas alto y mayor que " + persona2.name)

    }else{
        console.log(persona1.name + " es mas bajo y mayor que " + persona2.name)
    }
}else if(persona1.age < persona2.age){

    if(persona1.height > persona2.height){
        console.log(persona1.name + " es mas alto y menor que " + persona2.name)

    }else{
        console.log(persona1.name + " es mas bajo y menor que " + persona2.name)
    }
}


/* 4 */
/*
let nombre = prompt("Ingresa tu nombre")
let edad = prompt("Ingresa tu edad")
let altura = prompt("Ingresa tu altura en cm")
let vision = prompt("Ingresa tu vision del 1 al 10")

if(edad >= 18){
    if(altura >= 110){
        if(vision >= 8){
            console.log(alert(nombre + " estas calificado para conducir"))
        }else{
            console.log(alert(nombre + " NO estas calificado para conducir"))
        }
    }else{
        console.log(alert(nombre + " NO estas calificado para conducir"))
    }
}else{
    console.log(alert(nombre + " NO estas calificado para conducir"))
}
*/


/* 5 */
/*
let edad = prompt("Ingresa tu edad")

if(edad >= 0 , edad <= 12){
    console.log(alert("Infantil"))    
}else if(edad >= 13 , edad <= 18){
    console.log(alert("Adolescente"))
}else if(edad >= 19 , edad <= 45){
    console.log(alert("Joven Mayor"))
}else if(edad >= 45 , edad <= 99){
    console.log(alert("Mayores de 45 años"))
}else{
    console.log(alert("¿Es realmente tan viejo?"))
}
*/


/* 6 */
/*
let numIngresado = prompt("Ingresa un numero del 1 al 3")
switch(numIngresado){
    case "1":
        console.log(alert("El numero ingresado es " + [numIngresado]))
        break;
    case "2":
        console.log(alert("El doble del numero ingresado es " + 2*[numIngresado]))
        break;
    case "3":
        console.log(alert("El triple del numero ingresado es " + 3*[numIngresado]))
        break;
    default:
        console.log(alert("Ese valor no está permitido"))
}
*/



/* DIFICULTAD ALTO */
/* 1 */
let nombreCliente = prompt("Ingrese su nombre de cliente")
let pase = prompt("Ingrese su pase vip o normal")

if(nombreCliente == "Leonard" || pase == "vip" ){
    console.log(alert(nombreCliente + " bienvenido!"))
}else{
    let entrada = confirm("¿Tenes entrada?")
        if(entrada == true){
            let usar = confirm("Queres usarla?")
                if(usar == true){
                    console.log(alert(nombreCliente + " bienvenido!"))
                }else
                    console.log(alert("Adios!"))
        }else{
            let comprar = confirm("Queres comprar?")
                if(comprar == true){
                    let montoIngresado = prompt("Ingresa 1000")
                        if(montoIngresado == "1000"){
                            console.log(alert("Bienvenido!"))
                        }else{
                            console.log(alert("Adios!"))
                        }
                }else
                    console.log(alert("Adios!"))
        }
}
