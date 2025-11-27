# Eventos DOM - aula 10

## Eventos 

- Eventos é tudo aquilo que pode acontecer com o elemento.

Exemplo

- Eventos de mouse 
    - mouseenter
    - mousemove
    - mousedown
    - mouseup
    - click
    - mouseout

<p style="color: green"> Event reference - MDN</p>

<br>

## Funções

- Conjunto de linhas que são executada apenas quando um evento ocorrer.

- bloco: conjunto de linhas dentro de uma função

Declarar função

- function - palavra reservada seguida de chaves { }

- função anônimas: não possuem nome.

- nome de função: geralmente é  dado a ação que será realizada

- funções de eventos: Para disparar um evento é obrigatório que a função tenha nome.

- Opcionalmente podemos colocar parâmetros dentro dos ().


Exemplo - função anõnima

```function {

}```


Exemplo - função

```function ação() {
    bloco de instruções
}

<br>

Evento de Click

- Dentro do html adicionamos onclick="nome_da_acao"

```html 
    <div id="area" onclick="clicar" onmouseenter="entrar()" onmouseout="sair">
        interaja...
    </div>

    var area = document.getElementById('area')
    function clicar() {
        area.innerText = "Clicou!"
        area.style.background = 'red'
    }

    //Cada função dispara um evento diferente

    function entrar() {
        area.innerText = 'Entrou!'
    }

    function sair(){
        area.innerText = 'Saiu!'
    }
```

- Além de disparar diretamente pelo html podemos usar listeners: 

```html

<div id="area">
    interaja...
</div>

<script>
    
    var area = document.getElementById('area')

    //Evita poluir o html com eventos
    area.addEventListener('click', clicar)
    area.addEventListener('mouseenter', entrar)
    area.addEventListener('mouseout', sair)


    //Cada função dispara um evento diferente

    function clicar() {
        area.innerText = "Clicou!"
        area.style.background = 'red'
    }

    function entrar() {
        area.innerText = 'Entrou!'
    }

    function sair(){
        area.innerText = 'Saiu!'
    }

</script>
```

Detectação de erros

- o Js não avisa possíveis erros no código.
- Abrir devtools para inspecionar erros.

