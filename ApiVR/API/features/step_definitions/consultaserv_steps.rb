Quando('faco uma requisicao para API') do
    @request_servicos = servicos.getservicos
  end
  
  Entao('o servico que possui chave typeOfEstablishment e retornado') do
    expect(@request_servicos.code).to eq 200
    expect(@request_servicos.message).not_to be_empty
    puts @request_servicos
  end