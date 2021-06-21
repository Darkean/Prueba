var texto = document.getElementById("txt_lineas");
var btn_enviar = document.getElementById("btn_enviar");
btn_enviar.addEventListener("click",DibujoPorClick);


var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho_canvas = d.width;

function dibujarLinea(color,x1,y1,x2,y2){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1,y1);
    lienzo.lineTo(x2,y2);
    lienzo.stroke();
    lienzo.closePath();
}

function DibujoPorClick(){


    var lineas = parseInt(texto.value);
    var L = 0;
    var xi,yi,xf,yf;
    console.log(lienzo);

    for(L=0; L<lineas;L++){
        yi = (ancho_canvas/lineas) * L;
        xf = (ancho_canvas/lineas) * (L+1);
        dibujarLinea("red",0,yi,xf,300);

        /*
        xi = 10 * L;
        yf = 300 - (10 * (L+1));
        dibujarLinea("blue",xi,300,300,yf);
        
        xi = 10 * L;
        yf = 10 + (10 * L);
        dibujarLinea("green",xi,0,300,yf);

        xi = 310 - (10 * (L+1));
        yi = 10 * L;
        dibujarLinea("yellow",0,yi,xi,0);
        */
    }
    dibujarLinea("black",1,1,1,300);
    dibujarLinea("black",1,299,299,299);
    dibujarLinea("black",0,0,300,0)
}