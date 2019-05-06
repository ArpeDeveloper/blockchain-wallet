if (typeof web3 !== 'undefined') {
 web3 = new Web3(web3.currentProvider);
} else {
 // set the provider you want from Web3.providers
 web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
function Cartera(callback){
		this.accounts = [];
		this.cartera = null;
	}
Cartera.prototype = {
	constructor: Cartera,
	crearCartera: function(callback){
		this.cartera = web3.eth.accounts.wallet.create();
		this.callback(callback, null, this.cartera)
	},
	agregarCuenta: function(llavePrivada, callback){
		var cuenta = web3.eth.accounts.privateKeyToAccount(llavePrivada);
		this.cuentas.push(cuenta);
		web3.eth.accounts.wallet.add(cuenta);
		this.callback(callback, null, cuenta);
	},
	crearCuenta: function(callback){
		var cuenta = web3.eth.accounts.create();
		this.cuentas.push(cuenta);
		web3.eth.accounts.wallet.add(cuenta);
		this.callback(callback, null, cuenta);
	},
	transferir: function(from, to, value, callback){
		var that = this;
		// using the promise
		web3.eth.sendTransaction({
		    from: from,
		    to: to,
		    value: value
		})
		.then(function(receipt){
		    that.callback(callback, null, receipt);
		});
	},
	callback: function(callback, error, data){
		if(callback){
			callback(error, data);
		}
	}
};