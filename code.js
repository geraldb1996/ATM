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
            
            for (i = 0; i < e.cantidad; i++){
                var img = document.createElement("img");
                img.width = "150";
                img.height = "68";
                switch(e.valor){
                    case 1000:
                        img.src = caja[0].imagen;
                        break;
        
                    case 500:
                        img.src = caja[1].imagen;
                        break;
                    
                    case 200:
                        img.src = caja[2].imagen;
                        break;
        
                    case 100:
                        img.src = caja[3].imagen;
                        break;
        
                    case 50:
                        img.src = caja[4].imagen;
                        break;
        
                    case 20:
                        img.src = caja[5].imagen;
                        break;
        
                    case 10:
                        img.src = caja[6].imagen;
                        break;
                }
                billeteImg.appendChild(img);


            }

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