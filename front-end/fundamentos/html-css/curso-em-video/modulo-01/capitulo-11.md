# Capitulo 11

# Índice 

<a href="#aula-01---imagens-dinâmicas"> Aula 01 - Imagens dinâmicas</a>

<a href="#aula-02---imagens-que-se-adaptam-sozinhas">Aula 02 - Imagens que se adaptam sozinhas</a>

<a href="#aula-03---colocando-áudio-no-seu-site">Aula 03 - Colocando áudio no seu site</a>

<a href="#aula-04---formatos-de-vídeos-para-sites">Aula 04 - Formatos de vídeos para sites</a>

<a href="#aula-05---vídeos-em-hospedagem-própria">Aula 05 - Vídeos em hospedagem própria </a>

<a href="#aula-06---incorporação-de-vídeo-externos">Aula 06 - Incorporação de vídeo externos</a>

<a href="capitulo-10.md">
    <img src="https://img.shields.io/badge/Capítulo%20anterior-green"/>
</a>
<a href="../LEIAME.md">
    <img src="https://img.shields.io/badge/Ínicio-orange"/>
</a>
<a href="capitulo-12.md">
    <img src="https://img.shields.io/badge/Próximo%20Capítulo-8A2BE2"/>
</a>


<br>


## Aula 01 - Imagens dinâmicas

- Todo conteúdo deve se adaptar aos diversos dispositivos.

- Criação de três imagens no Gimp de tamanhos diferentes.


## Aula 02 - Imagens que se adaptam sozinhas

- tag `<picture>` permite que criamos vários “sources”.

- Usuários se incomodam com rolagem lateral.

Exemplo 

```html
<picture>
    <src="caminho-do-arquivo" width=”1050”>
    <src="caminho-do-arquivo" width=”750”>
    <src="caminho-do-arquivo" width=”350”>
</picture>
```

<br>

## Aula 03 - Colocando áudio no seu site

- Tomar cuidado com o copyright dos arquivos.

- Existem alguns navegadores que não tem suporte para arquivos mp3. Usar outros formatos como wav, ogg, etc.

Existem duas maneiras de inserir um áudio em um site:

- Usando a tag `<audio src="caminho-do-arquivo" autoplay controls loop>`
    
    <audio preload="auto/metadata/none">
           <source src="caminho-do-arquivo/arquivo.mp3" type="audio/mpeg">
           <source src="caminho-do-arquivo/arquivo.ogg" type="audio/ogg">
           <source src="caminho-do-arquivo/arquivo.wav" type="audio/wav">
    </audio>
    
- A ordem de procedencia é muito importante (cima para baixo).

- o "**auto**" não é recomendado pois é necessário carregar o site inteiro.

- o "**loop**" cria um loop de áudio.

- Evitar arquivos wav pois são mais pesados.

Exemplo 01 (comum e mais simples)

```html
<audio src="caminho-do-arquivo" autoplay controls loop>
```

Exemplo 02 (recomendavél)

```html
<audio preload="auto/metadata/none">
    <source src="caminho-do-arquivo/arquivo.mp3" type="audio/mpeg">
    <source src="caminho-do-arquivo/arquivo.ogg" type="audio/ogg">
    <source src="caminho-do-arquivo/arquivo.wav" type="audio/wav">
</audio>
```

<br>

## Aula 04 - Formatos de vídeos para sites

- Os formatos com maior compatibilidade são: **mp4, m4v, webm e ogv**.

- Se o cliente pedir hospedagem local para vídeos é melhor sugerir outra opção.

<p style="color: green; text-indent: 25px">Recomendado até 1080p não mais que isso.</p>

<br>

## Aula 05 - Vídeos em hospedagem própria

- Os vídeos devem ter compatibilidade em vários formatos por conta do suporte dos navegadores.

Existem duas maneiras de inserir vídeos usando a tag `<video>`:

Exemplo 01 (mais simples e comum)

```html
<video src="caminho-do-arquivo/video.mp4/webm/m4v/ogv" controls>
```

Exemplo 02 (recomendável)

```html
<video poster="caminho/imagem" controls>
    <source src="caminho-do-arquivo/video.mp4" type="video/mp4">
     <source src="caminho-do-arquivo/video.m4v" type="video/mp4">
     <source src="caminho-do-arquivo/video.webm" type="video/webm">
     <source src="caminho-do-arquivo/video.ogv" type="ogg">
</video>
```

- A ordem de procendecia é muito importante (cima para baixo)

- O "**poster**" especifica que o video tem uma *tumbnail*.

- Sempre deixar claro ao cliente que hospedagem local terá um maior gasto financeiro.

<br>

## Aula 06 - Incorporação de vídeo externos

- Alguns sites de compartilhamento de videos oferecem o recurso "compartilhar" e depois "incorporar" que irá geral uma tag html.

