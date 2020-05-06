var images = [];
images[0] = "images_s_v/logo_s_v.png";
images[1] = "images_s_v/carte_de_visite_sv.jpg";
images[2] = "images_s_v/images_1.jpeg.jpg";
images[3] = "images_s_v/poulets-entasses-industrie-senegal.jpg";
images[4] = "images_s_v/th_19).jpg";
images[5] = "images_s_v/large_92_poulet_frais.jpg";
images[6] = "images_s_v/vHUN_332537.png";
images[6] = "images_s_v/obtenez_s_v.jpg";

var i = 0;
var durer = 9000;

function changerImage(){
	document.diapo.src = images[i];
	if(i < images.length -1){
		i++;
	}
	else{
		i=0;
}
setTimeout("changerImage()",durer);
}
window.onload = changerImage;