$(document).ready(function(){
//codigo para el slider. 

	$('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: false,
	    responsive: true,
	    pager: true,
	    speed:500,
	    auto:true,
	    controls:false
	});
	
//codigo para el contador

	function conteoRegresivo(){
		setInterval( function(){
			var fecha= new Date('Mon Dec 24 2018 23:59:00 GMT-0300');
			var hoy = new Date();
			var dias = 0;
			var horas =0;
			var minutos =0;
			var segundos =0;
			if(fecha>hoy){
				var diferencia = (fecha.getTime()-hoy.getTime())/1000
				dias = Math.floor(diferencia/86400)
				diferencia = diferencia-(86400*dias)
				horas=Math.floor(diferencia/3600)
				diferencia=diferencia-(3600*horas)
				minutos=Math.floor(diferencia/60)
				diferencia=diferencia-(60*minutos)
				segundos=Math.floor(diferencia)
				$('#dias').html(dias);
				if(horas<10){
					$('#horas').html('0' + horas);
				}else{
					$('#horas').html(horas);
					}
				if(minutos<10){
					$('#minutos').html('0' + minutos);
				}else{
					$('#minutos').html(minutos);
					}	
				if(segundos<10){
					$('#segundos').html('0' + segundos);
				}else{
					$('#segundos').html(segundos);
					}	

			}	
		else{
			$('#reloj').html = 'Falta 1 Minuto:';
			}
		},1000);
	}

	conteoRegresivo();
});

