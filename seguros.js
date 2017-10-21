'use strict';
const request = require('request');
const uber = require('./uber');
const contrato = require('./contratos');


module.exports = {

	cadastrar: function(dados){
		let dadosDriver = uber.getDados();
		let inicioTimeStamp = '';
		let fimTimeStamp = '';
		for(let key in dadosDriver ){
			if( dadosDriver[key].status != 'completed') continue;

			for( let keyStatus in dadosDriver[key].status_changes ){

				if( dadosDriver[key].status_changes[keyStatus].status == 'accepted' )
					inicioTimeStamp = dadosDriver[key].status_changes[keyStatus].timestamp;

				if( dadosDriver[key].status_changes[keyStatus].status == 'completed' )
					fimTimeStamp = dadosDriver[key].status_changes[keyStatus].timestamp;
			}

			contrato.criar( 
				dadosDriver[key].vehicle_id,
				dadosDriver[key].driver_id,
				dadosDriver[key].trip_id,
				dadosDriver[key].duration,
				inicioTimeStamp,
				fimTimeStamp
			);
		}
	},

	consolidar: function(dados){
		
		let dadosFaturar = {
			valor: 1500,
			dataVencimento : '11/01/2017',
			seguradoNome : 'Danilo Péla Izac',
			seguradoCpf : '42400319820',
			seguradoEndereco : 'Rua Joaquim Vilac',
			seguradoNumero : '501',
			seguradoBairro : 'Vila Teixeira',
			seguradoCep : '13301510'
		};

		return dadosFaturar;
	}
}