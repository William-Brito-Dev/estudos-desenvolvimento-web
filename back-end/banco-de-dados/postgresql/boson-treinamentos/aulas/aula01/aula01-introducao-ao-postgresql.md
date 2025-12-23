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

