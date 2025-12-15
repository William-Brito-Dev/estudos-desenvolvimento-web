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

