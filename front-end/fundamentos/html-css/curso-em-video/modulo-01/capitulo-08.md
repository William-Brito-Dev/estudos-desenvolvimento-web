# Capítulo 08

# Índice 

<a href="#aula-01---semântica-da-html"> Aula 01 - Semântica da HTML5</a>

<a href="#aula-02---negrito-e-itálico"> Aula 02 - Negrito e itálico</a>

<a href="#aula-03---formatações-adicionais-em-html"> Aula 03 - Formatações adicionais em HTML5</a>

<a href="#aula-04---citações-e-códigos"> Aula 04 - Citações e códigos </a>

<a href="#atalhos-úteis-no-vs-code"> Atalhos úteis no vs code </a>

<a href="capitulo-07.md">
    <img src="https://img.shields.io/badge/Capítulo%20anterior-green"/>
</a>
<a href="../LEIAME.md">
    <img src="https://img.shields.io/badge/Ínicio-orange"/>
</a>
<a href="capitulo-09.md">
    <img src="https://img.shields.io/badge/Próximo%20Capítulo-8A2BE2"/>
</a>


<br>


## Aula 01 - Semântica da HTML

- Semântica: tem mais valor o significado do que a forma.

<p style="color: green; text-indent: 25px"> Pesquisar: html5 obsolete tags - W3C


## Aula 02 - Negrito e Itálico

Existem duas maneiras de colocar o negrito:

Forma não semântica:

- Usando o bold  `<b>` direto no conteúdo.
- Usando o italic `<i>`  direto no contúdo.

Forma semântica:

- Usando a tag `<strong>` que é semântica.
- Usando a tag `<em>` que é semântica direto no conteúdo.

Exemplos 

<strong>A tag `<strong>` aplica o negrito e destaca que o texto é muito importânte.</strong>

<em>A tag `<em>` dá ênfase ao texto e aplica itálico a ele.</em>

<br>

## Aula 03 - Formatações adicionais em HTML

- Usamos tag `<mark>` para marcar uma <mark>palavra</mark>.

- A tag `<small>` é usada geralmente no `<footer>` <small>em avisos legais, restrições e informações complementares. Torna o texto ligeiramente menor.</small>

- Texto excluido usamos a tag `<del>` <del>para mostrar que o texto foi excluido. Pode ser lido, porém está excluido.</del>

- Usamos a tag `<ins>` para dizer que um <ins>texto foi inserido e adiciona sublinhado.</ins> 

- A tag `<u>` <u>adiciona um sublinhado assim como `<ins>`, porém não é semântica.</u>

- Para adicionar <sub>texto sobescrito usamos `<sub>`</sub>.

- Tag `<sup>` <sup>para adicionar texto sobrescrito.</sup>

<br>

## Aula 04 - citações e códigos

- A tag `<code>` exibe o código código ao usuário. Ele não organiza o código dentro da identação.

Exemplo 

```html
<code> 
	<!DOCTYPE html>
	<html lang="pt-br">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Home | William Brito</title>
</code>
```

- Tag `<pre>`<pre> exibi o texto pré-formatado. </pre>

- Se quisermos usar o código identado podemos usar o `<code> + <pre>`.

- Usamos a tag `<q>` para usar uma citações simples.

- Usamos a tag citação de bloco `<blockquote>` para fazer uma citação completa. Dá para citar o link da matéria (melhora a busca de SEO usando o atributo cite).

- Podemos abreviar siglas usando a tag `<abb>`. Melhora a busca de SEO.

- A tag `<bdo>` com os valores **dir=”ltr (left to right)** ou **dir=”rtl” (right to left)** inverte a direção do texto.

<br>

Exemplo de código pré-formatado `<code> + <pre>`

```html
<code><pre>
<!DOCTYPE html>
	<html lang="pt-br">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Home | William Brito</title>
</code></pre>
```

Exemplo de citação simples `<q>`

<q>Mas a saudade é isto mesmo; é o passar e repassar das memórias antigas. - Dom Casmurro, Assis de Machado</q>

Exemplo citação em bloco `<blockquote>`

<blockquote>Esquecer é uma necessidade. A vida é uma lousa, em que o destino, para escrever um novo caso, precisa de apagar o caso escrito. - Machado de Assis.</blockquote>

<br>

Exemplo do uso da tag `<abb>`

<abb>HTML</abb> é a abreviação de Hyper Text Markup Language.

Exemplo de uso da tag `<bdo>`

<bdo dir="ltr"> Este texto está escrito da esquerda para a direita. </bdo>

<bdo dir="rtl"> Este texto está escrito da direita para a esquerda. </bdo>


## Atalhos úteis no VS Code

`Shift + Tab` - Remove a tabulação no início do código. 
