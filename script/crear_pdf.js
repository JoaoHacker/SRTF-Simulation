function texto_pdf_prueba(vmetricaUno,vTUno,vEUno,cpUno, vmetricaDos,vTDos,vEDos,cpDos, vmetricaTres,vTTres,vETres,cpTres, blablaUno,blablaDos, blablaTres, blablaGen, ct, stt, cpt, metricaTotal){

	var doc = new jsPDF();
    
	doc.setFontSize(30);
	doc.text(40, 20, 'INFORME SJF');
    
    doc.setFontSize(12);
    doc.text(15, 40, 'Para establecer los estandares y promedio de tiempo de espera por proceso se realizaron 50');
    doc.text(15, 50, 'pruebas de donde se pudo concluir que con este algoritmo cada proceso tiene un promedio de');
    doc.text(15, 60, '10.07 ticks en espera.');
    
    doc.text(15, 80, 'A partir de aqui se establecen los siguientes estandares:');
    doc.text(15, 100, 'Si la metrica es menor de 9.4 ticks el procesador tuvo un rendimiento Excelente');
    doc.text(15, 110, 'Si la metrica esta entre 9.5 ticks y 10.5 ticks el procesador tuvo un rendimiento Bueno');
    doc.text(15, 120, 'Si la metrica es igual o mayor a 10.6 ticks el procesador tuvo un rendimiendo Negativo');
    
    // doc.text(15, 140, 'El Quantum del proceso es asignado de la siguiente manera:');
    // doc.text(15, 160, 'Si el tiempo T del proceso es menor o igual a 3, el Quantum es igual a T.');
    // doc.text(15, 170, 'Si el tiempo T del proceso está entre 4 y 6 , el Quantum es igual al 80% del T.');
    // doc.text(15, 180, 'Si el tiempo T del proceso es mayor o igual a 7, el Quantum es igual al 60% del T.');
    
    
    doc.addPage();

	doc.setFontSize(25);
	doc.text(90, 40, 'CPU 1');
	doc.setFontSize(12);
	doc.text(20, 60, 'Tiempo de Respuesta (T): ' + vTUno + ' ticks');
	doc.text(20, 70, 'Tiempo de Espera (E): ' + vEUno + ' ticks');10.07
	doc.text(20, 80, 'Numero de procesos (P): ' + cpUno + ' Procesos');
	doc.text(20, 90, 'Resultado de la Metrica: ' + vmetricaUno + ' ticks');
	doc.text(20, 100, blablaUno);

	doc.setFontSize(25);
	doc.text(90, 120, 'CPU 2');
	doc.setFontSize(12);
	doc.text(20, 140, 'Tiempo de Respuesta (T): ' + vTDos + ' ticks');
	doc.text(20, 150, 'Tiempo de Espera (E): ' + vEDos + ' ticks');
	doc.text(20, 160, 'Numero de procesos (P): ' + cpDos + ' Procesos');
	doc.text(20, 170, 'Resultado de la Metrica: ' + vmetricaDos + ' ticks');
	doc.text(20, 180, blablaDos);

	doc.setFontSize(25);
	doc.text(90, 200, 'CPU 3');
	doc.setFontSize(12);
	doc.text(20, 220, 'Tiempo de Respuesta (T): ' + vTTres + ' ticks');
	doc.text(20, 230, 'Tiempo de Espera (E): ' + vETres + ' ticks');
	doc.text(20, 240, 'Numero de procesos (P): ' + cpTres + ' Procesos');
	doc.text(20, 250, 'Resultado de la Metrica: ' + vmetricaTres + ' ticks');	
	doc.text(20, 260, blablaTres);
    
     doc.addPage();
    
    doc.setFontSize(30);
	doc.text(50, 20, 'RENDIMIENTO GLOBAL');
    doc.setFontSize(12);
    doc.text(20, 40, 'Tiempo de Respuesta (T): ' + ct + ' ticks');
	doc.text(20, 50, 'Tiempo de Espera (E): ' + (ct - stt) + ' ticks');
	doc.text(20, 60, 'Numero de procesos (P): ' + cpt + ' Procesos');
	doc.text(20, 70, 'Resultado de la Metrica: ' + metricaTotal + ' ticks');
	doc.text(20, 90, blablaGen);
    

	doc.save('Informe SJF.pdf');
}
