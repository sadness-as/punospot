let images=document.querySelectorAll('.images');
/*console.log(images);*/
let indice=0;
let interval=setInterval(function bgs(){
	if(indice>=2){
		indice=0;
	}
	else{
		indice++;
	}
	for(let i=0;i<images.length;i++){
		if(indice==i){
			images[i].classList.remove('off');
		}
		else{
			images[i].classList.add('off');
		}
	}
},5000);




function screen(){
	if(window.innerWidth<=900){
		clearInterval(interval);
		indice=0;
		for(let i=0;i<images.length;i++){
			if(indice==i){
				images[i].classList.remove('off');
			}
			else{
				images[i].classList.add('off');
			}
		}
	}
}
window.addEventListener('resize',screen);
screen();