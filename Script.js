
//alert("Hola mundo");
//alert(1 + 9 + 41);
//alert("1+9+41");

let saludo = "holaaaa";

let despedida;
despedida = "adios ";

saludo = "hola!";

saludo = despedida;

function createFlower() {
    const flower = document.createElement('div');

    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 8 + 's';
    document.body.appendChild(flower);
    setTimeout(() => {
        flower.remove();
    }, 5000);
}
setInterval(createFlower, 100);
//alert(1 + 2);//suma
//alert(1 - 2);//resta
//alert(1 / 2);//division
//alert(1 * 2);//multiplicacion
//alert(1 % 2);//resto de dividir

let nombreusuario = "Leidys";

//alert(saludo + nombreusuario);

//const SALUDO_USUARIO = "hola de nuevo " + nombreusuario; //adios Leidys



let edad = 20;
edad = 20;
edad + 1; //puede sumar a la variable porque guarda un valor numerico
edad++; //suma
edad--; //resta una

//console () muestra lo que pongamos dentro de los parentesis


// operadores logicos
console.log(edad);
console.log("hola");

console.log(5 > 4);
console.log(5 < 8);

console.log(5 >= 6);
console.log(5 <= 7);

console.log(5 == 5);
console.log(5 != 7);

console.log("a" > "b");
console.log("cortazar" > "Navarro");

//condicionales
if (edad >= 18) {
    //alert("eres mayor de edad");
}

let premium = true;

if (premium) {
    console.log("tiene cuenta privada");
   // alert("bienvenido " + nombreusuario)
} else if (edad >= 18) {
    console.log("puedes crear una cuenta");
}
console.log("no puedes crear cuenta");

//interactuar con html DOM
document.getElementById("texto").innerHTML = "holaaaaaaaaaaaa " + nombreusuario;
document.getElementsByClassName("articulo")

document.querySelector("p").innerHTML 

document.body.querySelector("texto").innerHTML



let texto = document.getElementById("texto");
texto.innerHTML = "he guardado el selector en una variable";

//alert(saludo + nombreusuario);

//Funciones de modos dia noche

function saludar() {

    alert("Bienvenido")
}
saludar();

function modoNoche() {
    document.body.style.backgroundColor = "black";

}
function modoDia() {
    document.body.style.background = "white";
}

function ingresar(){
let inputusuario = document.querySelector("#nombre-usuario")
let generofemenino = document.getElementById("femenino")
let generomasculino = document.getElementById("masculino")
}

if(generofemenino.checked){
    alert("bienvenida "+inputusuario);
}else if(generomasculino.checked){
    alert("bienvenido "+inputusuario);
}else{
    alert("hola "+inputusuario);
}
    

alert("hola de nuevo" +inputusuario);
if(inputusuario == "Leidys"){

}

