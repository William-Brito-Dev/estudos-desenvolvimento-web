    const prompt = require("prompt-sync")({ sigint: true });

    //Cria uma lista com os páises disponíveis 
       var paises = ['EUA', 'Brasil', 'Japão', 'Portugal', 'Grã Bretanha']
       
    //Armazena o país que o usuário digitou
        var pais_pessoa = prompt("Digite seu país de origem:")
    
    // Compara o valor que o usuário digitou com a lista de países disponíveis e retorna o resultado ao usuário.

        if (pais_pessoa == paises[0]) {
                console.log ("Você é Americano")
            }
            
            else 
                if (pais_pessoa == paises[1]) {
                        console.log ("Você é Brasileiro")
                }
            else    
                if (pais_pessoa == paises[2]) {
                        console.log ("Você é Japonês")
                    }
            else    
                if (pais_pessoa == paises[3]) {
                        console.log ("Você é Português")
                    }
            else
                if (pais_pessoa == paises[4]) {
                        console.log ("Você é Inglês")
                    } 
                else 
                    if (pais_pessoa != paises) {
                        console.log ("Nacionalidade não encontrada")
                        console.log ("Deseja tentar novamente?")  
                    }
