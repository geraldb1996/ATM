class billete{
    constructor(v, c, imagen){
        this.valor = v;
        this.cantidad = c;
        this.imagen = imagen;
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
            billeteImg.innerHTML = "<img src=\""+caja[contador].imagen+"\" width=\"150px\" />";
            contador += 1;

        }

    }
    }
}

var caja = [];
var entregado = []; //billetes a entregar al usuario
caja.push( new billete (1000, 4, "1000.png"));
caja.push( new billete (500, 4, "500.jpg"));
caja.push( new billete (200, 3, "200.jpg"));
caja.push( new billete (100, 4, "100.jpg"));
caja.push( new billete(50, 3, "50.png"));
caja.push( new billete(20, 2, "20.jpg"));
caja.push( new billete(10, 2, "10.png"));
var dinero;
var div = 0;
var papeles = 0;
var contador = 0;

var resultado = document.getElementById("resultado");
var billeteImg = document.getElementById("billeteImg");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);