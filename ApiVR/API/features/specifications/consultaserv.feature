#language: pt

@consulta
Funcionalidade: Consulta servicos
     validar produtos e servicos no endpoint

     @get_servicos
     Cenario: Validar servico que possui estabelecimento
        Quando faco uma requisicao para API
        Entao o servico que possui chave typeOfEstablishment e retornado 