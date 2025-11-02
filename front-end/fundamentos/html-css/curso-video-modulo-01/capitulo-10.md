# Capítulo 10

# Índice 

<a href="#aula-01---links-e-âncoras-em-html5"> Aula 01 - Links e âncoras em HTML</a>

<a href="#aula-02---links-interno">Aula 02 - Links internos</a>

<a href="#aula-03---links-para-download">Aula 03 - Links para download</a>

<a href="capitulo-09.md">
    <img src="https://img.shields.io/badge/Capítulo%20anterior-green"/>
</a>
<a href="../LEIAME.md">
    <img src="https://img.shields.io/badge/Ínicio-orange"/>
</a>
<a href="capitulo-11.md">
    <img src="https://img.shields.io/badge/Próximo%20Capítulo-8A2BE2"/>
</a>

<br>



## Aula 01 - Links e âncoras em HTML5

- Âncora `<a>` serve para inserir links.

- Usamos o atributo "**href** - referência do hypertexto" para dizermos qual é a URL.

- Quando for um link externo é recomendavel usar o atributo "**target = blank**".

- Usamos o atributo "**rel**" para dizer que a URL é externa ao meu site.

Exemplo de uso de âncoras

```html
<a href="https://meusite.com" target="blank" rel ="external">
```
<br>

## Aula 02 - links interno

- Links internos vão fazer a relação com outra página da página principal.

- Quando usamos links internos não precisamos especificar a URL inteira dele se a página estiver junto ao index.

- Dentro do “**rel**” devemos colocar ou "**next**" para próxima página ou "**prev**" para página anterior.

- Geralmente quando não sabemos se o link é oficial usamos o "**nofollow**".

- Caso uma página esteja dentro de uma pasta deve ser especificado senão não funcionará.

- Para nevegação interna no próprio site podemos usar “**target= _self**”, pois não abrirá várias página para o usuário.

- Voltar de uma página usamos “**./pasta (própria pasta)**” para anterior “**../pasta (página anterior)**”.

<br>

Exemplo de link para uma página na mesma pasta 

```html
<a href="sobre.html">Sobre Nós</a>
```

<br>

Exemplo de link para uma página dentro de uma subpasta

```html
<a href="servicos/desenvolvimento.html">Nossos Serviços de Desenvolvimento</a>
```
<br>

Exemplo navegação para a próxima página 

```html
<a href="pagina2.html" rel="next">Próxima Página</a>
```
<br>


Exemplo de navegação para a página anterior 

```html
<a href="pagina1.html" rel="prev">Página Anterior</a>
```

<br>

Exemplo de link não oficial ou não endossado 

```html
<a href="http://site-externo.com/promocao" rel="nofollow">Promoção Externa</a>
```
<br>

Exemplo de navegação interna no próprio site 

```html
<a href="contato.html" target="_self">Entre em Contato</a>
```

<br>

Exemplo de caminho para voltar para a pasta pai 

```html
<a href="../">Voltar</a>
```

<br>

Exemplo de caminho para voltar para uma pasta específica no mesmo nível 

```html
<a href="./blog/post.html">Voltar para este Post no Blog</a>
```
<br>

Exemplo de links internos 

```html
<h2 id="secao1">Seção 1</h2>
<p>Conteúdo da seção 1.</p>

<h2 id="secao2">Seção 2</h2>
<p>Conteúdo da seção 2.</p>

<a href="#secao2">Ir para a seção 2</a>
```

<br>

Links dofollow e nofollow

<p style="color: #009dcf">Dúvida: Se eu tiver vários links para o usuário entrar, deve sempre usar o next e prev?</p>

<br>

## Aula 03 - links para download

- Usamos “#” no **href** para links vazios.

- Dependendo do navegador ele não baixa o arquivo.

- Podemos usar o parametro “**download=nome-do-arquivo**” para dizer que o arquivo é baixavél.

- Para cada tipos de arquivo podemos especificar usando o “**type**”.

<br>

Exemplo de links para download

<a href="# para link vazio ou URL do link" download="caminho/arquivo.pdf" type="application/pdf">Download do arquivo</a>

Código 

```html
<a href="hello-word-teste.txt" download="curso-video-modulo-01/hello-world-teste.txt" type="application/txt">Download do arquivo</a>
```

<p style="color: green">No navegador: Botão direito -> Salvar o link como" já baixa o arquivo.</p>
