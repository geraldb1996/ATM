class billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero(){
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja){
        if (dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad){
                papeles = bi.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push( new billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0){
    resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :c";

    }
    else{
    for (e of entregado){
        if (e.cantidad > 0){
            resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor+"<br/>";
        }

    }
    }
}

var caja = [];
var entregado = []; //billetes a entregar al usuario
caja.push( new billete (1000, 4));
caja.push( new billete (500, 4));
caja.push( new billete (200, 3));
caja.push( new billete (100, 4));
caja.push( new billete(50, 3));
caja.push( new billete(20, 2));
caja.push( new billete(10, 2));

var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);