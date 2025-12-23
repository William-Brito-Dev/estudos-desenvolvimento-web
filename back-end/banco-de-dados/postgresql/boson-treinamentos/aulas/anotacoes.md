# Introdução ao PostgreSQL

- **SGBD** que começou como projeto Ingres na universidade de Berkeley.

- Primeira versão em 1997.

- Escrito em C, open-source.


## PostgreSQL

- Possui to todos os requisitos de um banco transacional e compativel com **ACID (Atomicidade, Consistência, Isolamento, Durabilidade).**

- Suporta views, procedimentos armazenados, Triggers e outros tipos de objetos.


## Características

- Compativél com ACID;
- BanconTransacional (WAL/REDO)
- Suporta particionamento.
- Possui Controle de Ocorrência Multiversão (MVCC).
- Busca de texto completo.
- Indexação com vários tipo de algoritmos (B-Tree, GiST, etc).
- Permite operações de manutenção em modo online.
- Operações geoespaciais (PostGIS).
- Possui linguagem procedual.


## Conectividade

- Conexão feita via TCP/IP padrão. Possui protocolo de transmissão libpq.
- Estabelecida a conexão a comunicação é feita por comandos.
- Combina declarações com o padrão SQL:2008 e comandos de manutenção.
- SGBDR serve uma instância a partir de uma única porta TCP/IP.


- Número máximo de dados são limitados pelo servidor.


## Terminologia do PostgreSQL

- Seus objetos são definidos em termos acadêmicos e baseados em álgebra relacional.

Termos industria    |   Termo Postgres

- Tabela                - Relação
- Linha                 - Tupla
- Coluna                - Atributo 
- Bloco de Dados        - Página (quando o bloco está no disco)
- Página                - Buffer (quando o bloco está na memória)

# Instalação do SGBD PostgreSQL no Linux

- No terminal atualizar a lista de pacotes com **apt-get update.**

Instalar os pacotes necessário
 **apt-get install postgresql postgresql-contrib.**

O Postgre por padrão já vem um usuáro root.

**sudo -u postgres psql postgres** entra no prompt do Postgre.

- Senha para o usuário padrão: \password psotgres.

Pacote admin_pack
- Possui várias ferramentas de administração de BD.


## Comando instalação adminpack

Dentro do BD postgres

1º. CREATE EXTENSION adminpack;


## Comandos terminal psql
\q - sai do terminal.


Excluir BD
- DROP DATABASE dbTeste


Excluir usuário
- DROP USER william


Visualizar os BDs criados
- \l


Conectar ao BD
\connect bdTest


Visualizar tabelas
\dt


## Comandos terminal do linux

Cria um novo usuário no BD.
- sudo -u postgres createuser -D -A -P william
- cria uma senha para o usuário.


Cria um novo BD.
- sudo -u postgres createdb -O william dbTeste


Acessar prompt do postgres
- sudo -u postgres psql postgres

 
## Configuração de rede do postgres
- Por padrão as conexões TCP/IP são desabilitadas.
- Temos que modificar o arquivo de configuração padrão.


**No terminal linux**
- vi /etc/postgresql/17/main/postgresql.conf
- linha 'listen_addresses'
- em 'localhost' colocar '*'


**Reiniciar o postgres para aplicar as alterações**
- service postgresql restart


# Instalando o phpPgAdmin para gerenciamento remoto do SGBD 

**Instalação pelo terminal linux***
- sudo apt-get install phppgadmin

**Configuração dos arquivos**
- vi /etec/apache2/conf.d/phppgadmin (correto: vi /etc/apache2/conf-available)
- comentar linha 'allow from 127.0.0.0
- descomentar linha de baixo.

- vi /etc/apache2/apache2.conf
- ultima linha
- Comentar: Configuração do phppgadmin 
- Adicionar Include /etc/apache2/conf.d/phppgadmin

**Reiniciar o serviço do apache**
- service apache2 restart 
- 192.168.1.104/phppgadmin

# PostgreSQL - Instalação do SGBD no Microsoft Windows

- Entrar no site oficial.
- Baixar o arquivo e instalar.
- Colocar sehna e usuário
- Definir a porta 5232 como padrão.

# Como instalar o PostgreSQL no Linux Debian 

## Configurações iniciais


**Criar um arquivo para key**
- sudo nano /etec/apt/sources.list.d/pgdb.list


**Definir um novo repositório**
- Escrever deb https://apt.postgresql.org/pub/repos/apt/ buster-pgdb main


**Importar chave de assinatura**
- sudo wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -


**Instalar o postgres**
- sudo apt install postgresql-18


**Testar se está rodando**
- sudo -i -u postgres - loga como usuário postgres
- psql - entra no terminal
- \conninfo - mensagem de confirmação
- psql --version - versão do postgreSQL



