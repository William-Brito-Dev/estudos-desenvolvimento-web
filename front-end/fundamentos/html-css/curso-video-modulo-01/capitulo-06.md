# Capitulo 06

# Índice

<ol>

<a href="#aula-01---você-tem-o-direito-de-usar-qualquer-imagem-no-seu-site"> Aula 01 - você tem o direito de usar qualquer imagem no seu site?</a>

<a href="#aula-02---quais-são-os-formatos-de-para-imagens-na-web"> Aula 02 - quais são os formatos de para imagens a web?</a>
    
<a href="#aula-03---o-tamanho-de-uma-imagem-importa-para-um-site"> Aula 03 - o tamanho de uma imagem importa para um site?</a>
    
<a href="#aula-04---a-tag-img-em-html5"> Aula 04 - a tag `<img>` em HTML5 </a>
    
<a href="#aula-05---como-mudar-o-favicon-de-um-site"> Aula 05 - como mudar o favicon de um site?</a>

<a href="#">
    <img src="https://img.shields.io/badge/Capítulo%20anterior-green"/>
</a>
<a href="../LEIAME.md">
    <img src="https://img.shields.io/badge/Ínicio-orange"/>
</a>
<a href="capitulo-07.md">
    <img src="https://img.shields.io/badge/Próximo%20Capítulo-8A2BE2"/>
</a>


</ol>

<br>


## Aula 01 - Você tem o direito de usar qualquer imagem no seu site?

<br>

## Aula 02 - Quais são os formatos de para imagens a web?

- **Jpeg:** Compacta imagens. Qualidade menor, porém maior compactação.
- **Png:** Não permite animação, porém permite transparência. Qualidade maior.
- Uso de cada tipo de imagem depende do uso. 

<br>

## Aula 03 - O tamanho de uma imagem importa para um site?

Tamanhos de arquivos: 
- Arquivo tamanho grande (pesado): >1500px >2mb >70px (**não recomendável**)
- Arquivo tamanho ideal: <=1500px  <=1mb <= 70px
- Sites lentos não aparecem tanto no Google.

<br>

## Aula 04 - A tag img em HTML5

- Tag `<img>` inseri imagens ao site.
- src (source): caminho de onde está a imagem.
- alt: texto alternativo usado para acessibilidade.

Exemplo:

```html
<img src=”caminho-da-imagem/imagem” alt=”texto-alternativo”>
```
<br>

## Aula 05 - Como mudar o favicon de um site

- Utilizar imagens que não tenham tantos detalhes.
- Favicon deve sempre estar no header.
- Recomedável ter o nome "favicon.ico".

Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | William Brito</title>
    <<link rel="icon" href="caminho/favicon.ico" type="image/x-icon">
```
<br>