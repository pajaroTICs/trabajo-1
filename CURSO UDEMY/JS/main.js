//Alertas
//alert("Hola soy Jesus Alejandro");

//Variables
let nombre = "Jesus Alejandro";
nombre = "Jesus Pinales";


//Constantes
const apellido = "Pinales";
const altura = 187;

//Mostrar por consolas
console.log(nombre);
console.log(altura);



//Concatenacion
let Concatenacion = nombre + " " + apellido;

//seleccionar elementos del la pagina
let datos = document.querySelector("#datos");
datos.innerHTML = `
     <hr/>
     <h1>Soy la caja de datos</h1>
     <h2>Mi nombre es: ${nombre} ${apellido}</h2>
     <h3>Mi altura es: ${altura} cm </h3>
`;
    

