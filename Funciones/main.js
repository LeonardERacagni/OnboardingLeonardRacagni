/* NIVEL DE DIFICULTAD: BAJO */
/* 1 */
// let agregar = function(num1 , num2){
//     console.log(num1 * num2)
// }
// let resultado = (agregar(100 , 20))


/* 2 */
// let agregar = function(num1 , num2){
//     console.log(num1 * num2)
//     return num1 * num2
// }

// let resultado = (agregar(100 , 20))
// console.log(resultado)

/* 3 */
// let agregar = function(num1 , num2 , num3 , num4){
//     console.log(num1 * num2)
//     return num1 * num2
// }

// let resultado = (agregar(100 , 20))
// console.log(resultado)

/* 4 */
// let number1 = 100
// let number2 = 20

// let agregar = function(num1 , num2 , num3 , num4){
//     console.log(num1 * num2)
//     return num1 * num2
// }

// let resultado = (agregar(100 , 20))
// console.log(resultado)

/* 5 */
// let number3 = 100
// let number4 = 20

// function agregar(num1 , num2 , num3 , num4){
//     let resultadoBloque1 = num1 * num2
//     let resultadoBloque2 = num3 * num4
//     return [resultadoBloque1 , resultadoBloque2] 
// }

// console.log(agregar(100 , 20 , number3 , number4))


/* 6 */
let number3 = 100
let number4 = 20

let agregar = function(num1 , num2 , num3 , num4){
    let resultadoBloque1 = num1 * num2
    let resultadoBloque2 = num3 * num4
    return [resultadoBloque1 , resultadoBloque2] 
}

let datos = (agregar(100 , 20 , number3 , number4))
console.log(datos)




/* NIVEL DE DIFICULTAD: MEDIA */
/* 1 */

let nombre = "Leonard"

function saludar (nam){
    return "Hola!, Como estás " + nam + "?"
}

let Leonard = saludar(nombre)
console.log(Leonard)


/* 2 */

let multiplicacion = function(parametro1 , parametro2){
    return parametro1 * parametro2
}

console.log(multiplicacion(5 , 20))


/* 3 */
function area( xEjeBase , hAltura){
    return (xEjeBase * hAltura) / 2
}

let base = 20
let altura = 50
let resultadoArea = (area(base , altura))
console.log(resultadoArea)

/* 4 */
function perimetro(lad1, lad2, lad3){
    return lad1 + lad2 + lad3
}
let lado1 = 20
let lado2 = 30
let lado3 = 20
let resultadoPerimetro = (perimetro(lado1, lado2, lado3))
console.log(resultadoPerimetro)

/* 5 */
function precioTotal (price, amount){
    let producto = price * amount
    if(amount >= 10 && amount <= 19){
        return(producto) - ((producto * 10) / 100)
    }else if(amount >= 20){
        return(producto) - ((producto * 20) / 100)
    }else{
        return producto
    }
}

let precio = 1500
let cantidad = 24
console.log(precioTotal(precio ,cantidad))

/* 6 */
let isAnAdult = function(old){
    if(old >= 18){
        return "Eres mayor de edad"
    }else{
        return "No eres adulto"
    }
}

let edad = 15

let verificar = isAnAdult(edad)
console.log(verificar)


/* NIVEL DE DIFICULTAD: ALTO */
/* 1 */

let impuestos = function(anual){
    if(anual <= 10000){
        return(anual * 10) / (100)
    }else if(anual > 10000 && anual <= 20000){
        return(anual * 15) / (100)
    }else{
        return(anual * 20) / (100)
    }
}

let ingresoAnual = 15000
let montoImpuesto = impuestos(ingresoAnual)
console.log(montoImpuesto)


/* 2 */
let verificadorDia = function(day){
    switch(day){
        case 1:
        return "Es un día hábil"

        case 2:
        return "Es un día hábil"

        case 3:
        return "Es un día hábil"

        case 4:
        return "Es un día hábil"

        case 5:
        return "Es un día hábil"

        default: 
        return "Es fin de semana"
    }
}

let dia = 6
console.log(verificadorDia(dia))






/* 3 */

// function programa(infPersonal){
//     let name = prompt("Ingrese su nombre")
//     if(name == ""){
//         return alert("El nombre no puede estar vacío")
//     }else{
//         let lastName = prompt("Ingrese su apellido")
//             if(lastName == ""){
//                 return alert("El apellido no puede estar vacío")
//             }else{
//                 let age = prompt("Ingrese su edad")
//                     if(age == ""){
//                         return alert("La edad no puede estar vacía")
//                     }else{
//                         return persona1.nombre = name , persona1.apellido = lastName , persona1.edad = age
//                     }
//             }     
//     }

// }

// let persona1 ={
//     nombre: "Nombre",
//     apellido: "Apellido",
//     edad: "Edad",
// }


// console.log(programa())
// console.log(persona1)





/* 4 */
function fun (){
    function saludo(saludoNombre) {
        console.log(alert("Hola mi nombre es " + saludoNombre))
        function calcularAge (edad){
            console.log(alert("Su edad es " + edad))
            function presentacion(saludoCompleto , edadCompleta){
                console.log(alert("Hola mi nombre es " + saludoCompleto + " y tengo " + edadCompleta + " años"))
            }presentacion(saludoNombre , edad)
        }let añoAct = 2024 ; calcularAge(añoAct - prompt("Ingrese su año de Nacimiento"))
    }
    saludo(prompt("Ingrese su nombre"))
}

console.log(fun())