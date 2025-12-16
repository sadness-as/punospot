const maps = L.map("map").setView([-15.8402, -70.0219], 13);

let y=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(maps);

L.marker([-15.8402, -70.0219])
  .addTo(maps)
  .bindPopup("<b>Puno</b><br>Lago Titicaca")
  .openPopup();



let btnMenu=document.querySelector('.btnMenu');
let menu=document.querySelector('.menu');
btnMenu.addEventListener('click',function(){
	menu.classList.toggle('on');
});


let mapContent=document.querySelector('.map-content');
let btnCloseMap=document.querySelector('.map-content .btn-close');
let mapTitle=document.querySelector('.map-content .map-title');

btnCloseMap.addEventListener('click',function(){
	mapContent.classList.add('none');
});

let atractivos=document.querySelectorAll('.atractivos .card .card-link');
for(let i=0;i<atractivos.length;i++){
	atractivos[i].addEventListener('click',function(){
		mapContent.classList.remove('none');
		/*console.log(destinos[i]);*/
		mapTitle.innerHTML=destinos[i].nombre;
		L.marker([destinos[i].coords[0],destinos[i].coords[1]])
  		.addTo(maps)
  		.bindPopup(destinos[i].nombre)
  		.openPopup();
	});
}

let hoteles=document.querySelectorAll('.hoteles .card .card-link');
for(let i=0;i<hoteles.length;i++){
	hoteles[i].addEventListener('click',function(){
		mapContent.classList.remove('none');
		mapTitle.innerHTML=hotelesJson[i].nombre;
		L.marker([hotelesJson[i].coords[0],hotelesJson[i].coords[1]])
  		.addTo(maps)
  		.bindPopup(hotelesJson[i].nombre)
  		.openPopup();
	});
}

