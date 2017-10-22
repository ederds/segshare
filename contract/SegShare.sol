contract SegShare{
	struct regTrip {
		uint veiculo;
		uint condutor;
		uint viagem;
		uint duracao;
		uint inicio;
		uint fim;
		uint segurado;
	}
	regTrip myTrip;
	function Trip(uint veiculo,uint condutor,uint viagem,uint duracao,uint inicio,uint fim,uint segurado)
	{
		myTrip.veiculo=veiculo;
		myTrip.condutor=condutor;
		myTrip.viagem=viagem;
		myTrip.duracao=duracao;
		myTrip.inicio=inicio;
		myTrip.fim=fim;
		myTrip.segurado=segurado;
		
	}
}



