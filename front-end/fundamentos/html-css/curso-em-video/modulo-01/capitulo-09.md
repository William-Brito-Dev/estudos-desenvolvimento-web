# Capitulo 09

# Índice 

<a href="#aula-01---listas-em-html"> Aula 01 - Listas em HTML</a>

<a href="#aula-02---listas-mistas-e-de-definições">Aula 02 - Listas mistas e de definições</a>

<a href="capitulo-08.md">
	<img src="https://img.shields.io/badge/Capítulo%20anterior-green"/>
</a>
<a href="../LEIAME.md">
	<img src="https://img.shields.io/badge/Ínicio-orange"/>
</a>
<a href="capitulo-10.md">
	<img src="https://img.shields.io/badge/Próximo%20Capítulo-8A2BE2"/>
</a>


<br>


## Aula 01 - Listas em HTML

- A tag ``<ol>`` (ordernad list) coloca itens em uma lista ordenada.

- A tag `<li>` (List items) lista os itens dentro da lista ordenada. A partir do HTML5 não há necessidade de fechar a tag, é opcional. 

- Usamos o atributo **type** para especificar a marcador da lista:

Para `<ol>`:

<ol type="none">
	1 - inícia a partir do número 1.<br>
	a - inícia a partir da letra a minúscula.<br>
	A - inícia a partir da letra A maiuscúla.<br>
	i - inícia a lista com números romanos.<br>
</ol>

- Usamos `<ul>` (Unorded list) quando os itens não precisam estar ordenado.

Há alguns tipos de marcadores para `<ul>`:

<ul>
	disc - padrão.<br>
	circle - bolinha.<br>
  	square - quadrado.<br>
</ul>

Exemplo de Ordernad List (ol) com vários tipos de marcadores:

`ol type="1"` - Ínicia lista pelo número 1.
<ol type="1">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

`ol type="a"` - Ínicia lista pelo a minúsculo.
<ol type="a">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

`<ol type="I">` - Ínicia lista pelo I maiúsculo.
<ol type="I">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

Exemplo de Unorder list (ul) com vários tipos de marcadores:

`ul type="circle">` - Lista iniciada com circle.
<ul type="circle">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

`ul type="square">` - Lista iniciada com square.
<ul type="square">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

`ul type="disc">` - Lista iniciada com disc.
<ul type="disc">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<br>

## Aula 02 - listas mistas e de definições

- Podemos usar `<li>` dentro de `<ol>` e `<ol>` dentro de `<li>`.

- Usamos a tag `<dl>` para definir termos de itens usando uma lista.

- Usamos `<dt>` para os termos.

- Usamos `<dd>` para definições

Exemplo de lista mista:

<ul> 										
<li>Item não ordenado 1</li> 
<li>Item não ordenado 2</li>
<ol>
	<li>Item ordenado 1</li>
	<li>Item ordenado 2</li>
</ol>
<li>Item não ordenado 3</li>
</ul>

Código
```html
<ul> 										
<li>Item não ordenado 1</li> 
<li>Item não ordenado 2</li>
<ol>
	<li>Item ordenado 1</li>
	<li>Item ordenado 2</li>
</ol>
<li>Item não ordenado 3</li>
</ul>
```

Lista de termos 

<dl>
  <dt>HTML</dt>
  <dd>Linguagem de Marcação de Hipertexto usada para criar páginas web.</dd>
  <dt>CSS</dt>
  <dd>Linguagem de Folhas de Estilo em Cascata usada para estilizar páginas web.</dd>
  <dt>JavaScript</dt>
  <dd>Linguagem de programação usada para adicionar interatividade a páginas web.</dd>
</dl>

Código
```html
<dl>
  <dt>HTML</dt>
  <dd>Linguagem de Marcação de Hipertexto usada para criar páginas web.</dd>
  <dt>CSS</dt>
  <dd>Linguagem de Folhas de Estilo em Cascata usada para estilizar páginas web.</dd>
  <dt>JavaScript</dt>
  <dd>Linguagem de programação usada para adicionar interatividade a páginas web.</dd>
</dl>
```