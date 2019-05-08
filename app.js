var url = require('url');
var fs = require('fs');

function renderJS(path, response){
	response.writeHead(200, {'Content-Type': 'text/js'});
	console.log(path);
	fs.readFile(path, null, function(error, data){
		if(error){
			response.writeHead(404);
			response.write('Archivo no encontrado');
		}else{
			response.write(data);
		}
		response.end();
	});
}
function renderCSS(path, response){
	response.writeHead(200, {'Content-Type': 'text/css'});
	fs.readFile(path, null, function(error, data){
		if(error){
			response.writeHead(404);
			response.write('Archivo no encontrado');
		}else{
			response.write(data);
		}
		response.end();
	});
}
function renderHTML(path, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile(path, null, function(error, data){
		if(error){
			response.writeHead(404);
			response.write('Archivo no encontrado');
		}else{
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response){
		console.log("request");
		var path = url.parse(request.url).pathname;
		switch(path){
			case '/':
				renderHTML('./index.html', response);
				break;
			case '/transferir':
				renderHTML('./index.html', response);
				break;
			case '/crear-cuenta':
				crearCuenta(response);
				break;
			case '/migraciones':
				renderHTML('./migraciones.html', response);
				break;
			default:
				if(path.indexOf(".css") >= 0){
					renderCSS( "." + path, response);
				}else if( path.indexOf(".js") >= 0){
						renderJS( "." + path, response);
				}else{
					response.writeHead(404);
					response.write('La ruta no existe');
					response.end();
				}
		}
	}
}

