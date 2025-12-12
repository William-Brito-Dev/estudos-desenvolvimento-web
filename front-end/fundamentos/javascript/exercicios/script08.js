
    //Cria uma lista com os páises disponíveis 
       var paises = ['EUA', 'Brasil', 'Japão', 'Portugal', 'Grã Bretanha']
       
    //Armazena o país que o usuário digitou
        var pais_pessoa = document.querySelector("input#pais").value
    
    // Compara o valor que o usuário digitou com a lista de países disponíveis e retorna o resultado ao usuário.
    function verificarnacionalidade () {

        if (pais_pessoa == 'Brasil') {
            console.log ("Você é Brasileiro")
            }
            
            if (pais_pessoa == 'EUA') {
                console.log ("Você é estrangeiro estrangeiro")
                }

                if (pais_pessoa == 'Japão') {
                    console.log ("Você é Japonês")
                    }
            
                    if (pais_pessoa == 'Portugal') {
                    console.log ("Você é Portuguẽs")
                        }

                        if (pais_pessoa == 'Grã Bretanha') {
                            console.log ("Você é Inglês")
                            } else {
                              console.log ("Nacionalidade não encontrada")
                            }
                    }


        var verificar = document.querySelector("input#verificar")