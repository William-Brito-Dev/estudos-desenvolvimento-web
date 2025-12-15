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