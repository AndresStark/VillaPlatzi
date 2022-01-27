document.addEventListener("keyup",moverPersonaje)
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
	url: "tile.png",
	cargaOK: false
}

var vaca = {
	url: "vaca.png",
	cargaOK: false
}
var cerdo = {
	url: "cerdo.png",
	cargaOK: false
}
var pollo = {
	url: "pollo.png",
	cargaOK: false
}

var goku = {
	url: "goku.png",
	cargaOK: false
}
var majinboo = {
	url: "majinboo.png",
	cargaOK: false
}



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

goku.imagen = new Image();
goku.imagen.src = goku.url;
goku.imagen.addEventListener("load",cargarGoku);

majinboo.imagen = new Image();
majinboo.imagen.src = majinboo.url;
majinboo.imagen.addEventListener("load",cargarMajinBoo);


function cargarFondo(){
	fondo.cargaOK = true;
	dibujar();

}
function cargarVacas(){
	vaca.cargaOK = true;
	dibujar();
}
function cargarCerdos(){
	cerdo.cargaOK = true;
	dibujar();
}
function cargarPollos(){
	pollo.cargaOK = true;
	dibujar();
}
function cargarGoku(){
	goku.cargaOK = true;
	dibujar();
}
function cargarMajinBoo(){
	majinboo.cargaOK = true;
	dibujar();
}



var cantidadv = aleatorio(1,10);
var cantidadc = aleatorio(1,10);
var cantidadp = aleatorio(1,10);







var x = (aleatorio(0,7)) * 60;



var posicion_goku = {
	px: 7,
	py: 7
};
var posicion_majinboo = {
	px: 0,
	py: 0
};

var teclas = {
	w_up:87,
	d_right:68,
	s_down:83,
	a_left:65,
	arrow_up:38,
	arrow_right:39,
	arrow_down:40,
	arrow_left:37
};



function moverPersonaje(evento){
	switch(evento.keyCode){
		case teclas.w_up:
			posicion_goku.py = posicion_goku.py - 1;
			dibujar();
		break;
		case teclas.d_right:
			posicion_goku.px = posicion_goku.px + 1;
			dibujar();
		break;
		case teclas.s_down:
			posicion_goku.py = posicion_goku.py + 1;
			dibujar();
		break;
		case teclas.a_left:
			posicion_goku.px = posicion_goku.px - 1;
			dibujar();
		break;
		case teclas.arrow_up:
			posicion_majinboo.py = posicion_majinboo.py - 1;
			dibujar();
		break;
		case teclas.arrow_right:
			posicion_majinboo.px = posicion_majinboo.px + 1;
			dibujar();
		break;
		case teclas.arrow_down:
			posicion_majinboo.py = posicion_majinboo.py + 1;
			dibujar();
		break;
		case teclas.arrow_left:
			posicion_majinboo.px = posicion_majinboo.px - 1;
			dibujar();
		break;
	}
	
}

function dibujar(){
	if(fondo.cargaOK){
		papel.drawImage(fondo.imagen, 0, 0);
	}
	

	if(vaca.cargaOK){
		for(var v=0; v<cantidadv; v++){
		var x = (aleatorio(0,7)) * 60;
		var y = (aleatorio(0,7)) * 60;
		papel.drawImage(vaca.imagen, x, y);
		}
	}

	if(cerdo.cargaOK){
		for(var c=0; c<cantidadc; c++){
		var x = (aleatorio(0,7)) * 60;
		var y = (aleatorio(0,7)) * 60;
		papel.drawImage(cerdo.imagen, x, y);
		}
	}

	if(pollo.cargaOK){
		for(var p=0; p<cantidadp; p++){
		var x = (aleatorio(0,7)) * 60;
		var y = (aleatorio(0,7)) * 60;
		papel.drawImage(pollo.imagen, x, y);
		}
	}

	if(pollo.cargaOK){
		for(var p=0; p<cantidadp; p++){
		var x = (aleatorio(0,7)) * 60;
		var y = (aleatorio(0,7)) * 60;
		papel.drawImage(pollo.imagen, x, y);
		}
	}

	if(goku.cargaOK){
		var x = (posicion_goku.px) * 60;
		var y = (posicion_goku.py) * 60;
		papel.drawImage(goku.imagen, x, y);
	}

	if(majinboo.cargaOK){
		var x = (posicion_majinboo.px) * 60;
		var y = (posicion_majinboo.py) * 60;
		papel.drawImage(majinboo.imagen, x, y);
	}
}

function aleatorio(min, maxi){
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}