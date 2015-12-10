/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 

/*
var existe_db;
var db;
				 navigator.notification.alert("Me estoy ejecutando -3");
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
						// navigator.notification.alert("Me estoy ejecutando -2");
//						var selec = $('#lista_familia ul');
//						selec.append('<li><a href="#detalle"><div class="interior_lista"><img src=img/logo.png  
//			class="img_peq"/><span>aldo gamaliel </span></div> </a><a href="#form">Predet.</a></li>//').listview('refresh');
						 
						 
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
						 navigator.notification.alert("Me estoy ejecutando -1");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
						 navigator.notification.alert("Me estoy ejecutando 0");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
				 navigator.notification.alert("Me estoy ejecutando");
		
		existe_db = window.localStorage.getItem("existe_db");
		db = window.openDatabase("agenda_curso","1.0","DB del curso phonegap",200000);
		if(existe_db == null){
			this.creaDB();
		}else{
			this.cargaDatos();
		}
    },

	creaDB: function(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	//	window.localStorage.setItem("existe_db",1); 
	
	},
	creaNuevaDB: function(tx){
		    console.log("creando la bd");
			tx.executeSql("DROP TABLE IF EXISTS agenda_curso");
			var sql = "CREATE IF NOT EXISTS agenda_curso ( "+
			"id INTEGER PRIMARY KEY AUTOINCREMENT, "+
			"nombre VARCHAR(50), "+
			"apellidos VARCHAR(50), "+
			"telefono VARCHAR(30), "+
			"categoria VARCHAR(30), "+
			"foto VARCHAR(200), "+
			"email VARCHAR(30) ) ";
			
			tx.executeSql(sql);
			
			tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (1,'Jose','Perez','+5517471212313','amigos','','','asd@gmail.com')");

tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (2,'Sirio','Gonzalez','+5517471212321','trabajo','','','fzfz@gmail.com')");

tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (3,'Julio','Rodriguez','+5517471222213','familia','','','fff@gmail.com')");		
	},
	creaSuccess: function(){
		window.localStorage.setItem("existe_db",1); 
		this.cargaDatos();
	},
	errorDB: function(){
		 console.log("Error ejecutando sql");
		 navigator.notification.alert("rror ejecutando sql");
	},
	cargaDatos: function(){
	db.transaction(cargaRegistros,errorDB);	
	},
	cargaRegistros: function(tx){
		console.log("cargando registros de la base de datos");
		tx.executeSql('SELECT * FROM agenda_curso',[],cargaDatosSuccess,errorDB);
	},
	cargaDatosSuccess: function(tx,results){
		console.log("Rscibidos de la BD "+results.rows.length+" registros");
		if(results.rows.length == 0){
			console.log(" se han recibido registros");
			navigator.notification.alert("No hay contactos en la base de datos");
		}
		for(var i =0; i< results.rows.length;i++){
			var persona = results.rows.item(i);
			var selector = $("#lista_" + persona.categoria+" ul");
			var foto = persona.foto;
			if(foto == ""){
				foto = "img/logo.png";
			}
			selector.append('<li><a href="#detalle"><div class="interior_lista"><img src=' + foto + ' 
			class="img_peq"/><span>' + persona.nombre + ' ' + persona.apellidos + '</span></div> </a><a href="#form">Predet.</a></li>').listview('refresh');
		}
		
	}
};
*/

// alert dialog dismissed
        function alertDismissed() {
            // do something
        }
		
		
var i_log=0;
function mklog(text){
	var date = new Date();
	var txt = i_log + " - " + date.getHours() + " - " + date.getMinutes() + " - " + 
	date.getSeconds() + ": " + text;
	i_log++;
	console.log(txt);
}

var existe_db;
var db;

function onBodyLoad(){
	document.addEventListener("deviceready",onDeviceReady,false);
	
	navigator.notificaiton.alert("Alerta1");
		alert("Alerta2");
		navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);

		
		
}
function onDeviceReady(){
	navigator.notification.alert("PhoneGap is working");
	mklog("aplicacion iniciada y lista");
	existe_db = window.localStorage.getItem("existe_db");
	db = window.openDatabase("agenda_curso","1.0","DB del curso phonegap",200000);
	if(existe_db == null){
		creaBD();
	}else{
		cargaDatos();
	}
	
	
}

function creaBD(){
	db.transaction(creaNuevaDB,errorDB,creaSuccess);
	
	
}

function creaNuevaDB(tx){
	mklog("creando base de datos");
	
	tx.executeSql("DROP TABLE IF EXISTS agenda_curso");
			var sql = "CREATE IF NOT EXISTS agenda_curso ( "+
			"id INTEGER PRIMARY KEY AUTOINCREMENT, "+
			"nombre VARCHAR(50), "+
			"apellidos VARCHAR(50), "+
			"telefono VARCHAR(30), "+
			"categoria VARCHAR(30), "+
			"foto VARCHAR(200), "+
			"email VARCHAR(30) ) ";
			
			tx.executeSql(sql);
			
			tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (1,'Jose','Perez','+5517471212313','amigos','','asd@gmail.com')");

tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (2,'Sirio','Gonzalez','+5517471212321','trabajo','','fzfz@gmail.com')");

tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (3,'Julio','Rodriguez','+5517471222213','familia','','fff@gmail.com')");			
}
function creaSuccess(){
	window.localStorage.setItem("existe_db",1);
	cargaDatos();
}

function errorDB(err){
	mklog("Error procesando SQL " + err.code);
	navigator.notificaiton.alert("Error procesando SQL " + err.code);
}

function cargaDatos(){
	db.transaction(cargaRegistros,errorDB);
}

function cargaRegistros(tx){
	mklog("cargando registros de la base de datos");
	tx.executeSql('SELECT * FROM agenda_curso',[],cargaDatosSuccess,errorDB);
}

function cargaDatosSuccess(tx, results){
	mklog("recibidos de la db " + results.rows.length);
	if(results == 0){
		mklog("no se han recibido registros");
		navigator.notificaiton.alert("No hay contactos en la base de datos");
	}
	
	for(var i = 0; i< results.rows.length; i++){
			var persona = results.rows.item(i);
			var selector = $("#lista_" + persona.categoria+" ul");
			var foto = persona.foto;
			if(foto == ""){
				foto = "img/logo.png";
			}
			selector.append('<li><a href="#detalle"><div class="interior_lista"><img src="' + foto + '"  
			class="img_peq"/><span>' + persona.nombre + ' ' + persona.apellidos + '</span></div> </a><a href="#form">Predet.</a></li>').listview('refresh');
		}
	
}