module Rest 
    class Servicos
        include HTTParty
      
        headers 'Content-Type' => 'application/json'
        base_uri CONFIG['base_uri']

        def getservicos
            self.class.get('/comum/enumerations/VRPAT')
        end
    end
end
