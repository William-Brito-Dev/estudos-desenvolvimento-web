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



