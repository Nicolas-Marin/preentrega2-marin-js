const usuario = {
  nombre: "",
  edad: 0,

  // Paso 2: Utilizar el método prompt para obtener los datos del usuario
  solicitarDatos: function () {
    this.nombre = prompt("Ingresa tu nombre:");
    this.edad = parseInt(prompt("Ingresa tu edad:"));
  },
};

usuario.solicitarDatos();

function iniciarAventura() {
  const mensajes = [
    "Comienza la aventura!",
    `Eres el general ${usuario.nombre} del estado de la China antigua`,
    "Te enfrentas contra el ejército descendiente de Sun Tzu",
    "¿PODRÁS GANAR LA GUERRA?",
    "Tu oponente Sun Pin es el general del estado de Qi y tiene menos tropas",
    "El ejército de Qi es conocido por ser cobarde, tus hombres se sienten confiados",
    "Elige\n1 - Preparar un ataque\n2 - Esperar al movimiento del enemigo"
  ];

  for (let mensaje of mensajes) {
    alert(mensaje);
  }
}

iniciarAventura();

let num1 = parseInt(prompt("Ingrese un número"));

while (num1 !== 1) {
  switch (num1) {
    case 2:
      alert("Tus tropas han cuestionado tu decisión");
      alert("Tropas: Esta guerra es nuestra, no debemos darle tiempo a Sun Pin para pensar");
      alert(`Tus tropas te traicionan, te asesianan y toman el mando \n ${usuario.nombre} muerió a la edad de ${usuario.edad} años 💀 `)
      break;
    default:
      alert("No tienes más que 2 opciones, ¡elige! ¡No seas cobarde!");
      break;
  }

  num1 = parseInt(prompt("Ingrese otro número"));
}
alert("Tu ejército está listo para atacar\nElije: \n1 - Atacar por la noche\n2 - Esperar al amanecer");

let num2 = parseInt(prompt("Ingrese un número"));

while (num2 !== 1) {
  switch (num2) {
    case 2:
      alert("En el camino eres sorprendido por el ejercito de Qi");
      alert(`${usuario.nombre} muerió a la edad de ${usuario.edad} años 💀`)
      break;
    default:
      alert("No tienes más que 2 opciones, ¡elige! ¡No seas cobarde!");
      break;
  }

  alert("Tu ejército está listo para atacar\nElije: \n1 - Atacar por la noche\n2 - Esperar al amanecer");
  num2 = parseInt(prompt("Ingrese otro número"));
}
alert("Durante la noche se encienden hogeras en las fronteras de tu territorio\n\n Elije: \n1 - Ir a investigar \n2 - Esperar");

let num3 = parseInt(prompt("Ingrese un número"));

while (num3 !== 2) {
  switch (num3) {
    case 1:
      alert("Las hogeras provenian del ejercito de Qi");
      alert(`${usuario.nombre} muerió a la edad de ${usuario.edad} años 💀`)
      break;
    default:
      alert("No tienes más que 2 opciones, ¡elige! ¡No seas cobarde!");
      break;
  }

  alert("Durante la noche se encienden hogeras en las fronteras de tu territorio\n\n Elije: \n1 - Ir a investigar \n2 - Esperar");
  num3 = parseInt(prompt("Ingrese otro número"));
}
alert("La gente empieza a dudar de tí\n Tropas: \n No podemos darle a Qi la ventaja de atacar primero");
alert("Día tras día encienden menos hogueras, el ejercito de Qi retrocede\n ¿que haces? \n 1 -Dejar que retrocedan \n 2 -Atacar");

let num4 = parseInt(prompt("Ingrese un número"));

switch (num4) {
  case 2:
    alert("Te encuentras con un tronco que bloquea el camino, parece tener un mensaje");
    alert("Enciendes la antorcha y lees el mensaje");
    alert(`El general ${usuario.nombre} morirá en este arbol \n\n Decide: \n 1 - Preparar un ataque \n 2 - Huir`);
    prompt("Elije tu estrategia");
    alert(`Antes de que puedas moverte una lluvia de flechas cae sobre tus tropas, estas solo.\n\n ¿Que haras ${usuario.nombre}? \n 1 - Quitarte la vida \n 2- Rendirte`);

    let num5 = parseInt(prompt("Ingrese un número"));
    if (num5 == 1) {
      alert(`Tu arrogancia te llevo a perder la guerra.\n Atacar primero te puso en desventaja \n\n GUERRA PERDIDA QEPD ${usuario.nombre}  ${(usuario.edad -2023)*-1} - 2023`);
      console.log("Juego finalizado \n Gracias por jugar");
    } else {
      alert(`Sun Pin no tuvo piedad y terminó contigo..\n Atacar primero te puso en desventaja \n\n ${usuario.nombre}  ${(usuario.edad -2023)*-1} - 2023\n Murio como un Cobarde`);
      console.log("Juego finalizado \n Gracias por jugar");
    }
    break;
  case 1:
    alert(`Sun Pin solo podía ganar si te asesinaba en contraataque\n\n VICTORIA! Felicidades ${usuario.nombre} ganaste esta guerra!!\n`);
    console.log("Juego finalizado \n Gracias por jugar");
    break;

}

