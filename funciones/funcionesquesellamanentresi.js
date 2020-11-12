// Mandar a llamar funciones que se comunican entre si
iniciarAplicacion();

function iniciarAplicacion() {
  console.log("1 iniciando ...");
  // Como primer paso vamos a restar
  restar(10, 2);
}

function sumar(n1, n2) {
  console.log("sumando...", n1 + n2);
}

function restar(n1, n2) {
  console.log("restando...", n1 - n2);
  sumar(20, 4);
}

// Ejemplo Amazon
// 1 El usuario este autenticado
// 2 El usuario tenga credito

let name = "Alan";
let pass = "demodemo";
let email = "alanarostegui@hotmail.ocm";
let address = "privada";
let phone = 238378494;
let haveMoney = false;

comprarEnAmazon()

function comprarEnAmazon() {
  registerUser(name, pass, email, address, phone);
}

function registerUser(name, password, email, address, phone) {
  if (!name || !password || !email || !address || !phone) {
    console.log("Necesitas completar tus datos");
  } else {
    console.log("tus datos son correctos, autenticate");
    autenticarUser(email, password);
  }
}

function autenticarUser(email, password) {
  if (!email || !password) {
    console.log("No hay correo o no hay contraseña ");
  } else {
    console.log("El usuario autenticó correctamente");
    checarSiTDCTieneDinero(haveMoney)
  }
}

function checarSiTDCTieneDinero(checkMoney) {
  if (!checkMoney) {
    console.log("El usuario no tiene dinero");
  } else {
    console.log("El usuario tiene dinero");
    console.log('Se realizó la compra')
  }
}
