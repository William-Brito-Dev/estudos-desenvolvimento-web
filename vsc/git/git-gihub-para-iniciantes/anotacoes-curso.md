# Introdução

**Objetivos**

- Aprender o que é Controle de Versão.
- Como lidar com comandos Git.
- Como subir um código para o GitHub. 


# Aula 02 - Controle de Versão

- Serve para gerenciar diferentes versões de um documento.
- Outros sistemas trabalham com diferenças dos arquivos; o Git trabalha com o estados dos arquivos.

**Sistema Git** 
- Tira snapshots dos estados dos arquivos de cada versão do código.
- Leva o estado de cada versão.
- Fica fácil de voltar a versões anteriores.


# Aula 03 - História do Git

- BitKeeper guardava todo código do Kernel do Linux.
- Passa a cobrar do Linux para usar suas ferramentas.
- O sistema da BitKeeper tinha vários problemas e então o Linus Torvalds cria o seu próprio sistema de controle.


## Melhorias em relação ao sistema Bitkeeper

- Velocidade.
- Design simples.
- Suporte robusto a desenvolvimento não linear.
- Totalmente distribuído.
- Capaz de lidar eficientemente com grandes projetos.


# Aula 04 - O que é o Github?

- Serviço web compartilhado para projetos que utilizam o Git para versionamento.

**Diferenças do Git**
- Git: controle de versionamento
- GitHub: repositório remoto para armazenar projetos.


# Aula 05 - Instalando o Git

- vem instalado como padrão no Linux.
- No Windows baixar o pacote e instalar.


# Aula 06 - Configuração inicial do Git

**Informações de configuração do Git ficam armazenadas nesses locais:**
- Git config - Sistema, Usuário e Projeto.

**Configurações de usuário**
- git config --global user.name "William Brito Dev" - Define usuário
- git confg --global user.email "contato.williambritodev@hotmail.com" - DEfine e-mail.
- git config --global core.editor vscode - Define o editor padrão.

**Exbir dados**
- git config user.email - exibe o e-mail cadastrado.
- git config user.name - exibe o nome.
- git config -list - mostra todos os valores.


# Aula 07 - Inicializar um repositório

- Criar pasta: mkdir nome pasta
- Entrar na pasta: cd nome pasta/
- Inicializar repositório: git init 
- Abre o diretório: cd nome
- Voltar diretório: cd ..


# Aula 08 - Usando o edtior do terminal

- Abrir arquivo (vim): vim nome arquivo.
- Letra i: entra em modo de inserção.
- Esc/:wd: salva arquivo e sai do editor.


# Aula 09 - O ciclo de vida dos status de seus arquivos

**1º estágio: untrack(U)** - Arquivo foi adicionado ao repositório, porém ainda não está sendo rastreado pelo Git.

**2º estágio: unmodified** - Está sendo rastreado, mas não sofreu nenhuma alteração.

**3º estágio: modified (M)** - Arquivo foi modificado e está pronto para ser adicionado ao staged.

**4º estágio: Staged (S)** - Ao chegar o staged o arquivo está pronto para criar a primeira versão (commitar). Volta ao estado unmodified.


**Git Commit**
- Pega os arquivos do repositório e cria um snapshot.
- Boa prática colocar o que foi feito.


**Git Status** 
- Mostra os status dos arquivos no repositório.


# Aula 10 - Visualização de logs 

**Git log**
- Depois dos primeiros commits podemos ver os histórico dos arquivos.
- Hash do commit que é a identificação


**Git log --decorate** 
- Mostra a branch.
- Tags geradas.


**Git log --author="nome"**
- Filtra todas as alterações feitas pelo autor.


**Git shotlog**
- Mostra em ordem alfabética os autores, quantos commit e quais foram.


**Git shorlog -sn** 
- Pessoa e a quantidade de commit.


**Git log --graph** 
- Mostra de forma gráfica o que está acontecendo com as branches.


**Git show id da hash**
- Pela hash podemos identificar o que aconteceu com o commit dela.
 

# Aula 11 - Visualizando o diff

**Git diff**
- Conseguimos olhar as mudanças antes de commitar.
- Usar antes de fazsr um commit.

**Git diff --name-only**
- Visualiza apenas o nome do arquivo modificado.


# Aula 12 - Desfazendo as coisas

**Git checkout nome arquivo**
- Volta o arquivo antes da edição.


**Git reset HEAD**
- Remove o arquivo do stage.


**Git commit am- "mensagem"**
- Adiciona todos os arquivos modificados e adiciona uma mensagem a eles.


**Git reset**
--soft -  Volta o commit, mas o arquivo está em stage.
--mixed - Volta os arquivos antes do stage.
--hard - Elimina os commit feitos.

- Seleciona uma hash acima do commit que quero voltar.
- Usar somente se não subiu ao repositório remoto.


# Aula 13 - Criando um repositório no GitHub
- Criar repositório, dar nome, público ou privado.
 

 # Aula 14 - Criando e adicionando um chave SSH
- SSH é um protocolo para autêntica um usuário ao servidor.
- Gerar a senha do SSH.


# Aula 15 - Ligando repositório local a um remoto

**Git remote** 
- add origin: liga o repositório local ao remoto.
- git remote -v: mostra o endereço do repositório.

**Git push** 
- Envia os arquivos locais ao repositório remoto.
- git push -u origin mater: envia arquivos ao GitHub.


# Aula 16 - Enviando mudanças para um repositório remoto

**Git push origin nome branch** 
- Para enviar os arquivos locais a um repositório remoto


# Aula 17 - Clonando repositórios remotos

**Git clone** 
- Clona qualquer repositório para a máquina local.
- Podemos adiciona a pasta onde será baixado colocando o nome dela no fim.


# Aula 18 - Fazendo fork de um projeto

**Fork** 
- Faz uma cópia de um projeto de outra pessoa.
- Execelente para trabalhar em outros projetos.


# Aula 19 - O que é uma branch e por quê usá-la?

**O que é uma branch?**
- Aponta para um commit.
- Pode apontar para outro commit.

**Por que usar?**
- Poder modificar sem alterar o local principal.
- Facilmente "desligável".
- Múltiplas pessoas trbalhando.
- Evita conflitos.


# Aula 20 - Criando uma branch 

**Git checkout -b nome** 
- cria uma nova branch.

**Git branch** 
- mostra as braches existentes. 


# Aula 21 - Movendo e deletando branches

**Git checkout nome (testing)**
- Muda para a branch.

**Git checkout nome da branch (master)**
- Entra na nova branch.

**Git branch -D nome**
- Deleta a branch.


# Aula 22 - Entendendo o merge 

- Crio um novo commit para juntar as duas branches.

**Pro** 
- Operação não destrutiva. 

**Contra** 
- Commit extra.
- Histórico poluído.


# Aula 23 - Entendendo o rebase

- Deixa os commits lineares.
- Pega tudo o que está na branch separado e junta a outra.

**Pro**
- Evita commits extras.
- Histórico linear.


**Contra**
- Perde ordem cronológica.


# Aula 24 - # Merge e Rebase na prática

**Rebase**
- rebase junta as branches sem criar um novo commit. 

**Merge**
- merge nome branch - mescla as branches na principal.
- Não é muito recomendável ficar criando o merge.
- Em casos de pull request usamos o merge.


# Aula 25 - Crindo o .gitignore

- Ignora especificamente alguns arquivos e algumas extensões de arquivos.


# Aula 26 - Git stash é lindo

- Guarda modificações que ainda não foram commitadas.
- Útil no caso de precisarmos sair de um branch e queremos guardar um arquivo sem precisar commitar.

**Git stash apply** 
- coloca as alterações de volta no projeto.

**Git stash list**
- mostra um lista de todos os testes

**Git stash clear** 
- limpa a lista.


# Aula 27 - Alias para que te quero

- Criar Alias que são atalhos do comando.

**Git config --global alias.s status** 
- define um atalho para o comando git status.


# Aula 28 - versionamento com tags

- Definiar as versões daquilo que estamos fazendo em projetos grandes.
- git tag -a versao -m mensagem
- git push origin master --tag
- git tag - ver todas as tags.


# Aula 29 - Salvando sua sexta com um git revert

- git log buscar o id e aplicar o git revert.
- Apaga o commit especifico.
- Usado para não perder do histório as mudanças feitas.


# Aula 30 - Apagando as tags e branches remotos

- git tag -d nome - apaga a tag local.
- git push origin :nome tag ou branch - apaga a tag/branch remota.


## Conteúdo adicional

- Staging: Nome comum de branch de atualizações que não estão em produção.

**Git  reflog**

- Registro completo de todos as alterações. 

**Pull request** 

- Antes de mergiar para outra branch uma pessoa tem que aprovar o commit pelo pull request.
- Antes de fazer um merge executar git pull na branch para atualizar os arquivos localmente.

**Git ignore**

- touch .gitignore - Adiciona um arquivo que ignora o que estiver dentro dele.

**Git log --oneline** 

- Apresenta o histórico de uma maneira resumida e simples.

**Executar vários comandos ao mesmo tempo**

- Usando && podemos usar dois comandos ao mesmo tempo. Ex: git add . && git commit -m "novo arquivo".




