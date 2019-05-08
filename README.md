# blockchain-wallet
Una pequeña aplicación local que permite crear cuentas y realizar transferencias entre ellas, se utilizaron las siguientes tecnologías:

•	Backend
  o	Node.js (v10.15.3): Framework JavaScript que se utilizó como servidor para la aplicación.
  o	Web3.js (v^0.20.6): Librería que utiliza el lenguaje JavaScript para poder utilizar las funciones de Ethereum.
  o	EthereumJS TestRPC (v6.0.3): Cliente Ethereum basado en Node.js para realizar pruebas de desarrollo.
  El cliente se debe instalar localmente con la siguiente línea:
	  $ npm install -g ethereumjs-testrpc
    
•	Frontend 
  o	Bootstrap (v^4.3.1): Framework para el diseño de la interfaz de usuario en HTML.
  o	JQuery (v3.3.1): Framework que utiliza JavaScript para manipular los objetos del documento HTML.
  
Para comenzar se debe inicializar el cliente testrpc con la siguiente línea de comando:
  $ testrpc
  
Posteriormente iniciar el servidor de Node.js, para ejecutar la siguiente línea de comando se debe posicionar en el directorio del proyecto:
  $ node server.js

En el navegador escribir la ruta:
  http://localhost:8000


