Capitulo 14 
Aula 01 - Primeiros passos em Tipografia

- Durante os século 15 os monges copistas copiavam os livros à mão
- Gutenberg cria a presa mêcanica para facilitar a cópias de livros
- Daí suurge a necessidade de criar novas letra criando assim a tipografia
- tipografia - typos (impressão) + graphia (escrita)
- O tipo de letra também influencia as pessoas


Aula 02 - Anatomia do tipo

Anatomia do tipo
- Time new romans é a padrão da geande maioria dos navegadores
- Saber se as medidas se aplicam simetricamente.
- A letra X minusculo é a altura base de todas as letras.
- A altura das minusculas é o restante superior da letra.
- Acendente e descendetes
- Altura do corpo  é a soma de todas as medidas.

Anatomicos geometricos 

- Prolongamento das fontes é chamado de serifa.
- Nem todas as fontes tem serifa.
- Astes e arcos.
- esporão servem para "sugurar" a letra.
- Vértice.
- Terminal. 

Anatomicos corporais
- Braço
- Perna
- Pé
- Espinha 
- barriga
- Olho
- orelha
- cauda

- Glifo são as letras.
- Quando pegamos todos os glifos de uma familia chamados isso de "fonte."
- Existem conjuntos glifos para familia.
- Nem toda fonte tem essas varoações.

Categoria de fontes
- Classificamos as famílias em: serifadas, sans-serif, monoespaçada (pode ser com serifa ou sem), handwriting (escrita a mão) e fontes comemorativas ou display. 
- A recomendação para a impressão em tela é serifa. Para as fontes em sites a recomendação é sans-serif.
- Ao acessar um site o usuário quer ler sem desconforto então é importante usar uma boa fonte e um bom contraste.


Aula 03 - Familias de fontes com CSS

- Nem todo pc vai ter a fonte especificada.
- Devemos colocar fontes que existam no dispositivo.
- Usamos as safe combinatons para garantir que as fontes sejam especificadas.
- podemos usar no font-family: serif - os dispositivos iram utilizar uma fonte serifada.
- Podemos usar no font-family: sans-serif - os dispositivos iram utiilzar uma fonte sem serifa.
- Podemos usar no font-family: monospace - os dispositivos iram utilizar uma fonte monoespaçada.

**CSS web safe combinations


Aula 04 - Tamanho de fontes e suas medidas

Existem algumas formas de usarmos o font-size:
-Temos medidas absolutas: cm, mm, in (inch), px, pt (point), pc (paica).
- Por conta dos tamanhos de telas as fontes podem variar em tamanho.
- Pt e pc não são recomendados para exibir em impressõ em tela.

Temos medidas relativas: em, ex, rem, vw (viewidth), vh (viewhieght) 
- em é ralativo ao tamanho de M maiusculo de uma fonte.
- ex é ralativo ao tamanho da altura x de uma fonte.
- relativa ao tamanho da fonte que está configurada no body.
- Largura da viewport ou largura do tamanho da tela.
- Altura da viewport ou altura do tamanho da tela.

- Recomendável sempre usar px e em.
- Não pode ter espaço entre o número e a unidade de medida.
- Geralmente 16px é o tamanho normal da fonte.
- 16px geralmente é o tamanho de 1em que é ralativo ao tamanho da fonte.
- Por ser relativo, em é mais recomendável para visualizar em várias telas.


Aula 05 - Peso, estilo e shorthand font

- Peso é quando fazemos as fontes ficam mais "magras" ou "gordas".
- Usamos font-weight para definir o peso da fonte.
- Existem vários tipos de pesos: lighter, normal, bold e bolder.
- Também existe variações númericas para pesos: começa em 100 - 900.
- A maioria das fontes não tem todas as variações.
- font-style: italic, normal.
- Text-decoration: italic, bold e underline.
- Essas quatro configuração são muito utilizadas.
- Shorthand (mãozinha) simplifica esses 4 elementos em "font".
- deve ser declarado na seguinte ordem - font: font-style, font-wieght, font-size, font family.
- Propriedades shorthand são utilizadas para declarar regras em uma unica linha.
- Não existe shorthand para tudo.


**Usar as recomendações do W3C


Aula 06 - Usando Google Fonts 

- Usar as fontes disponíveis do Google Fonts 
- Disponibiliza as declarações do CSS para implementar no código.
- Recomendado utilizar de 3 a 4 famílias. Não mais que isso.


Aula 07 - Usando fontes externa baixadas 

- Dafont.com

- Ao baixar a fonte atentar-se antes se a fonte é acentuada.
- Nem sempre teremos os dois tipos de fontes.

`````
@font-face
font-family: src url(caminho-do-arquivo) format(formado-da-fonte)
`````

@font-face 
font-family: fonte e sua família
src url(): definimos o caminho de onde está a fonte.
format(): tipo do formato da fonte. Temos os seguintes formatos:

- opentype (otf)
- truetype (ttf)
- embeded-opentype (eot)
- truetype-aat (Apple Advanced Typography)
- svg 

- Geralmente .ttf e .otf funcionam na maioria dos navegadores.
- Sempre é recomendado colocar os dois tipos de formatos.
- Deve sempre estar entre aspas.
- Geralmente deixamos as fontes em pastas separadas dos arquivos principais.


Aula 08 - Capturando as fontes usadas em um site 

- Baixando e utilizando a extensão Fonts Ninjas.
 

Aula 09 - Detectando fontes dentro de imagens 

Sites que capturam as fontes pela imagem 

whatfontis.com 
fontsquirrel.com
myfont.com 


Aula 10 - Alinhamento de textos com CSS 

- <center> não se usa mais. Está obseleta.

- text-align: left, center, right, justify;
- Usamos text-align para alinhar os textos.
- Os textos geralemente tem alinhamento nos dois lados 

- text-indent: 1em;
- O text-indent cria o espaço do primeiro parágrafo.


