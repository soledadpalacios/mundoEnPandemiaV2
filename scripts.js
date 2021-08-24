/* Place your JavaScript in this file */
/*function sorteoSeisPaises() {
  //  numeroCarta=Math.floor(Math.random() * 6) + 1;

  var client = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais1";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  //client2 = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais2";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}*/

function muestrapais() {
  var client = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais1";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}

function muestrapais2() {
  var client = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais2.html");
  idHTML = "cartaPais2";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}
function muestrainfo2() {
  alert("rellenar con datos del país");
}
