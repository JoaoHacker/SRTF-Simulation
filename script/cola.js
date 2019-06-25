/*------------------
	OBJETO COLA
-------------------*/
//constructor
function cola() {
	this.raiz = null;
	this.fondo = null;
	this.insertarPrimero = insertarNodoP;
	this.insertarUltimo = insertarNodoU;
	this.extraerPrimero = extraerNodoP;
	this.extraerUltimo = extraerNodoU;
	this.mirarPrimeroMenor = mirarPrimeroM;
	this.mirarSiHayMejorQuantum = mirarSiHayMejorQ;
	this.ordenarQuantum = ordenarQ;
	this.evaluarLlegada = evaluarLl;
	this.vacia = vacia;
	this.tamaño;
}

//inserta un nodo en la cola de primero
function insertarNodoP(proceso, tiempo, quantum, recurso, estado, llegada) {
	var nuevo = new nodo();
	nuevo.llegada = llegada;
	nuevo.proceso = proceso;
	nuevo.tiempo = tiempo;
	nuevo.quantum = quantum;
	nuevo.recurso = recurso;
	nuevo.estado = estado;


	if (this.vacia()) {
		this.raiz = nuevo;
		this.fondo = nuevo;
	} else {
		this.raiz = nuevo;
		this.raiz.sig = this.fondo;
		this.fondo = this.raiz;
	}
}

//inserta un nodo en la cola de ultimo
function insertarNodoU(proceso, tiempo, quantum, recurso, estado, llegada) {
	var nuevo = new nodo();
	var colaTemp = new cola();
	nuevo.proceso = proceso;
	nuevo.tiempo = tiempo;
	nuevo.quantum = quantum;
	nuevo.recurso = recurso;
	nuevo.estado = estado;
	nuevo.llegada = llegada;
	nuevo.sig = null;

	if (this.vacia()) {
		this.raiz = nuevo;
		this.fondo = nuevo;
	} else {
		while (!this.vacia()) {
			var temp = new nodo();
			temp = this.extraerPrimero();
			colaTemp.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
		}
		this.insertarPrimero(proceso, tiempo, quantum, recurso, estado, llegada);
		while (!colaTemp.vacia()) {
			var temp = new nodo();
			temp = colaTemp.extraerPrimero();
			this.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
		}
	}
}

//retorna el primer nodo de la cola
function extraerNodoP() {
	var nuevo = this.raiz;
	if (!this.vacia()) {
		this.raiz = this.raiz.sig;
	}
	return nuevo;
}

//retorna el ultimo nodo de la cola
function extraerNodoU() {
	var nuevo = new nodo();
	var colaTemp = new cola();
	while (this.raiz.sig != null) {
		var temp = new nodo();
		temp = this.extraerPrimero();
		colaTemp.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
	}
	nuevo = this.extraerPrimero();
	while (!colaTemp.vacia()) {
		var temp = new nodo();
		temp = colaTemp.extraerPrimero();
		this.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
	}
	return nuevo;
}
//Mirar si ya llegó el proceso
function evaluarLl(tiempo, arreglo) {

	var aux = new nodo();
	aux = this.raiz;
	do {
		if (aux.llegada <= tiempo && aux.estado == "Ausente") {

			aux.estado = "Listo";
			arreglo[aux.proceso - 1] = "Listo";
		}

		try{
			aux = aux.sig;
		} catch(e){
			
			e.log(e);
		}




	} while (aux != undefined);
}
//Mira de acuerdo a el quantum si es menor el quantum de otro proceso listo
 function mirarSiHayMejorQ(nod){
	 var aux = new nodo();
	 aux = this.raiz;
	 var nodoMenor = nod;
	 do{
		 //console.log(aux.quantum+" "+nod.quantum+" "+nod.estado+" "+aux.estado);
		 if(aux.quantum<nod.quantum && aux.estado=="Listo"){
			 nodoMenor = aux;
		 }
		 aux = aux.sig;


	 }while(aux !=null)

	 return nodoMenor;

 }
//retorna el nodo con menor tiempo de llegada
function mirarPrimeroM() {
	var aux = new nodo();
	aux = this.raiz;
	var llegadaMenor = aux.llegada;
	var temp = new nodo();
	temp = aux;
	do {
		if (llegadaMenor > aux.llegada) {
			temp = aux;
			llegadaMenor = aux.llegada;
		}
		aux = aux.sig;
	} while (aux != null);

	//Eliminarlo de la Lista
	if (temp == this.raiz) {
		if(this.raiz.sig != null){
			this.raiz = this.raiz.sig;
		}
		
	}
	else {
		aux = this.raiz;
		ant = this.raiz;

		while (aux != temp) {
			ant = aux;
			aux = aux.sig;
		}

		ant.sig = aux.sig;
	}

	return temp;
}


//devuelva true si la cola esta vacia
function vacia() {
	if (this.raiz == null) {
		return true;
	} else {
		return false;
	}
}

function ordenarQ(tamañoCola) {

	var i;
	var temp = new nodo();
	var temp2 = new nodo();
	var colaTemp = new cola();
	var colaTemp2 = new cola();


	for (i = 1; i < tamañoCola; i++) {
		if (this.raiz.sig != null) {
			while (!this.vacia()) {
				temp = this.extraerPrimero();
				if (!this.vacia()) {
					temp2 = this.extraerPrimero();
					if (temp2.tiempo > temp.tiempo) {
						colaTemp.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
						colaTemp2.insertarPrimero(temp2.proceso, temp2.tiempo, temp2.quantum, temp2.recurso, temp2.estado, temp2.llegada);
						while (!this.vacia()) {
							var temp5 = new nodo();
							temp5 = this.extraerPrimero();
							colaTemp2.insertarPrimero(temp5.proceso, temp5.tiempo, temp5.quantum, temp5.recurso, temp5.estado, temp5.llegada);
						}
						while (!colaTemp2.vacia()) {
							var temp6 = new nodo();
							temp6 = colaTemp2.extraerPrimero();
							this.insertarPrimero(temp6.proceso, temp6.tiempo, temp6.quantum, temp6.recurso, temp6.estado, temp6.llegada);
						}
					} else {
						colaTemp.insertarPrimero(temp2.proceso, temp2.tiempo, temp2.quantum, temp2.recurso, temp2.estado, temp2.llegada);
						colaTemp2.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
						while (!this.vacia()) {
							var temp5 = new nodo();
							temp5 = this.extraerPrimero();
							colaTemp2.insertarPrimero(temp5.proceso, temp5.tiempo, temp5.quantum, temp5.recurso, temp5.estado, temp5.llegada);
						}
						while (!colaTemp2.vacia()) {
							var temp6 = new nodo();
							temp6 = colaTemp2.extraerPrimero();
							this.insertarPrimero(temp6.proceso, temp6.tiempo, temp6.quantum, temp6.recurso, temp6.estado, temp6.llegada);
						}
					}
				} else {
					colaTemp.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
				}
			}

			while (!colaTemp.vacia()) {
				var temp = new nodo();
				temp = colaTemp.extraerPrimero();
				this.insertarPrimero(temp.proceso, temp.tiempo, temp.quantum, temp.recurso, temp.estado, temp.llegada);
			}
		}
	}
}