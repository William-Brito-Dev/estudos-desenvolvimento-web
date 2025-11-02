# Capítulo 15

## Aula 01 - Usando o ID com CSS

- Quando temos dois elementos iguais e queremos personalizá-lo diferente um do outro, usamos o "**id**".
- Não há necessidade de colocar o nome do elemento. Ex: `#principal`.
- Porém posso colocar o elemento também. Ex: `h1#principal`.
- Todo elemento que não tem um "**id**" ou "**class**" é genérico.

- Tudo o que é **id** em HTML = **#** em css
- Tudo o que é **class** em HTML = **.** em css

Exemplo: 

```html

<p id="primeiro-paragrafo">meu primeiro parágrafo em html</p>
<p class="segundo-paragrafo">meu segundo parágrafo em html</p>

<style>
    #primeiro-paragrafo {
        color: blue;
    }

    .segundo-paragrafo {
        color: yelllow;
    }
</style>
```
Output:

<p id="primeiro-paragrafo">meu primeiro parágrafo em html</p>
<p class="segundo-paragrafo">meu segundo parágrafo em html</p>

<style>
    #primeiro-paragrafo {
        color: blue;
    }

    .segundo-paragrafo {
        color: yellow;
    }
</style>
