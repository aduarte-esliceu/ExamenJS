//Hola comentario de inicio del examen




function _id(ident) {
    return document.getElementById(ident);
}

function factorial() {
    var NumFacto = _id("entradaFactorial").value;
    NumFacto =parseInt(NumFacto);
    var resultadoOp = "";
    let resultado = 1;
    console.log(NumFacto);

    
    for (let i = NumFacto; i > 0; i--) {
        resultado *= i;

        resultadoOp += i + "*";
        
    } 
  
 

   
    _id("resultatFactorial").innerHTML = resultado;
    _id("operacionsFactorial").innerHTML = resultadoOp;
    if (NumFacto < 0) {
        alert ("no cruc mejor mira este video https://www.youtube.com/watch?v=vGqb4oHeMAc&t=8s")
        _id("resultatFactorial").innerHTML = "ERROR";
        _id("operacionsFactorial").innerHTML = "ERROR";
    }
    
    

}

function calculaIVA() {

    var PreuIva = _id("preuAmbIVA").value;
    var ValorOpcion = _id("tipusIVA").value;
 
    var PreuSenseiva = PreuIva / (1 + ValorOpcion /100)

    var IVA = PreuIva - PreuSenseiva;

    console.log(PreuSenseiva)

    _id("preuSenseIVA").innerHTML = PreuSenseiva.toFixed(2);

    _id("IVA").innerHTML = IVA.toFixed(2);



}

function canviaFons(tipus) {

    var colorfons;
    var colorTexto;
    if (tipus == "clear") {
        colorfons = "white";
        colorTexto = "black";
    
    } else if (tipus == "random"){

        var gris = Math.floor(Math.random() * 255);
        colorfons = "rgb(" + gris + "," + gris + "," + gris + ")";
       
        if (gris <= 100) {
            grisnegativo = 255 - gris; 
            colorTexto = "rgb(" + grisnegativo + "," + grisnegativo + "," + grisnegativo + ")";

        }else {
            colorTexto = "black";  
        }

    
    }
    
    _id("cos").style.backgroundColor = colorfons;
    _id("cos").style.color = colorTexto;



}
