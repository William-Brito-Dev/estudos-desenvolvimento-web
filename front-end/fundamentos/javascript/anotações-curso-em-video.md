# Módulo A - Conhecendo o JavaScript

## Criando o seu primeiro script - aula 04 

- Não é obrigatório o uso do ponto e vírgula.

- window.alert ou alert - mostra uma janela com conteúdo.

- window.confirm ou confirm - pede a confirmação do usuário.

- window.prompt ou prompt - o usuário pode interagir com o site.

<br>


# Módulo B - Comandos básicos básicos do JavaScript
- Introdução.

## Variáveis e tipos primitivos - aula 05

- Quem comenta bem um código o mantém organizado.
- Pode ser usado o // ou /* */ para comentar.
    - // - Única linha.
    - /* */ - mais de uma linha, várias linhas.
- Excelente para depuração.
- Usar o // para explicar o comando.

<br>

Atribuição de variáveis

Exemplo da vaga de estacionamento
- '=' significa 'recebe': `vaga1 = carro1`
- Se quero remover um carro e colocar outro devo remover o primeiro: `Ex: vaga01 = carro2`
- Se quero que a vaga fique vazia usamos o valor 'null': `vaga01 = null`. 

<br>

Declaração de variáveis

- Variável são espaços separados na memória para um dado.
- 'var', 'let' e 'const' declaram variáveis. Ambos tem diferenças entre si: <br>

    `var n1 = 1`   
        <br>
    `let n2 = 2 `    
        <br>
    `const n3 = 3`

- Podemos atribuir valores dentro variáveis: `var01 = 5`.
- Variáveis possuem tamanhos diferentes.
- Podemos usar 3 tipos diferentes de aspas: simples ' ', duplas " " ou crase ` `. Para o JS elas tem diferenças. 

<br>

Nomes de variáveis (identificadores)

- Podem começar com letras, $ ou _: nome, $compra, _venda.
- Não podem começar com números: 1agf.
- É possível usar letras ou números: hoje, S1.
- É possível usar acentos e símbolos: Médio, num$.
- Não podem conter espaços: num 02.
- Não podem ser palavras reservadas: var.

<br>

Node JS

- Podemos usar o Node no VS pelo terminal (Crtl+J - novo terminal)
- ATENÇÃO: Muitos terminais podem deixar o pc lento. Fechar após uso. 

<br>

Dicas para criar nome de variáveis

- Minúsculas e maiúsculas fazem diferença (case sensitive): `let A` é diferente de `let a`.
- Tente escolher nomes coerentes para variáveis: para nome usar `var nome`, para número `var num1`...

<br>

Tipos de dados

- number - int e float são number.

    - int - 5, 18, -12.
    - float - 5.4, 0.2

- string - 'william'
- boolean - True and False.
- null 
- undefined 
- object
    - array
- function

<br>

- Quando definimos uma var não dizemos o tipo dela.
- typeof - mostra o tipo de varável de um dado.
- typeof null é um objeto para o JS.

<br>


Comentários
- Quem comenta bem um código o mantém organizado.
- Pode ser usado o // ou /* */ para comentar.
    - // - Única linha.
    - /* */ - mais de uma linha, várias linhas.
- Comentários Excelente para depuração.
- Usar o // para explicar o comando.

<br>

Atribuição de variáveis

Exemplo da vaga de estacionamento
- '=' significa 'recebe': `vaga1 = carro1`
- Se quero remover um carro e colocar outro devo remover o primeiro: `vaga01 = carro2`.
- Se quero que a vaga fique vazia usamos o valor 'null': `vaga01 = null`.

<br>

Tipos de atribuições

- Variável são espaços separados na memória para um dado.
- var, let e const declara uma variável. Ambos tem diferenças entre si 
    <br>
   
    `var n1 = 1`      
    
    `let n2 = 2` 
    
    `const n3 = 3`

- Variáveis possuem tamanhos diferentes.
- Podemos usar 3 tipos diferentes de aspas: simples ' ', duplas " " ou crase ` `. Elas tem diferenças para o JS.

<br>

Nomes de variáveis (identificadores)

- Podem começar com letras, $ ou _: `var nome, var $venda, var _compra`.
- Não podem começar com números: `var 1agf`.
- É possível usar letras ou números: `var hoje, var S1`.
- É possível usar acentos e símbolos: `var Médio, num$`.
- Não podem conter espaços: `var num 02`.
- Não podem ser palavras reservadas: var, let, number string, null.

<br>

Node JS

- Podemos usar o Node no VS pelo terminal.
- Muitos terminais podem deixar o pc lento. 

<br>

Dicas para criar nome de variáveis

- Minúsculas e maiúsculas fazem diferença. Ex: A é diferente de a.
- Tente escolher nomes coerentes para variáveis. Ex: para nome usar var nome.


Tipos primitivos

- number - int e float são number.
    - int - 5, 18, -12.
    - float - 5.4, 0.2
- string - 'william'
- boolean - True and False.
- null 
- undefined 
- object
    - array
- function

- typeof - mostra o tipo de varável de um dado.
- Quando definimos uma var não dizemos o tipo dela.
- typeof null é um objeto para o JS.


- Quem comenta bem um código o mantém organizado.
- Pode ser usado o // ou /* */ para comentar.
    - // - Única linha.
    - /* */ - mais de uma linha, várias linhas.
- Excelente para depuração.
- Usar o // para explicar o comando.


Atribuição de variáveis

Exemplo da vaga de estacionamento
- '=' significa 'recebe': `vaga1 = carro1`
- Se quero remover um carro e colocar outro devo remover o primeiro: `Ex: vaga01 = carro2`
- Se quero que a vaga fique vazia usamos o valor 'null': `vaga01 = null`.


- Variável são espaços separados na memória para um dado.
- 'var', 'let' e 'const' declara uma variável. Ambos tem diferenças entre si 
    <br>
    `var n1 = 1`   
    <br>
    let n2 = 2 
    <br>
    const n3 = 3```
- Podemos atribuir valores dentro variáveis. Ex: var01 = 5.
- Variáveis possuem tamanhos diferentes.
- Podemos usar 3 tipos diferentes de aspas: simples ' ', duplas " " ou crase ` `. Elas tem diferenças para o JS.


Nomes de variáveis (identificadores)

- Podem começar com letras, $ ou _.
- Não podem começar com números: 1agf.
- É possível usar letras ou números: hoje, S1.
- É possível usar acentos e símbolos: Médio, num$.
- Não podem conter espaços: num 02.
- Não podem ser palavras reservadas: var.


Node JS

- Podemos usar o Node no VS pelo terminal.
- Muitos terminais podem deixar o pc lento. 


Dicas para criar nome de variáveis

- Minúsculas e maiúsculas fazem diferença. Ex: A é diferente de a.
- Tente escolher nomes coerentes para variáveis. Ex: para nome usar var nome.


Tipos primitivos

- number - int e float são number.
    - int - 5, 18, -12.
    - float - 5.4, 0.2
- string - 'william'
- boolean - True and False.
- null 
- undefined 
- object
    - array
- function

- typeof - mostra o tipo de varável de um dado.
- Quando definimos uma var não dizemos o tipo dela.
- typeof null é um objeto para o JS.


- Quem comenta bem um código o mantém organizado.
- Pode ser usado o // ou /* */ para comentar.
    - // - Única linha.
    - /* */ - mais de uma linha, várias linhas.
- Excelente para depuração.
- Usar o // para explicar o comando.


Atribuição de variáveis

Exemplo da vaga de estacionamento
- '=' significa 'recebe': `vaga1 = carro1`
- Se quero remover um carro e colocar outro devo remover o primeiro: `Ex: vaga01 = carro2`
- Se quero que a vaga fique vazia usamos o valor 'null': `vaga01 = null`.


- Variável são espaços separados na memória para um dado.
- 'var', 'let' e 'const' declara uma variável. Ambos tem diferenças entre si 
    <br>
    `var n1 = 1`   
    <br>
    let n2 = 2 
    <br>
    const n3 = 3```
- Podemos atribuir valores dentro variáveis. Ex: var01 = 5.
- Variáveis possuem tamanhos diferentes.
- Podemos usar 3 tipos diferentes de aspas: simples ' ', duplas " " ou crase ` `. Elas tem diferenças para o JS.


Nomes de variáveis (identificadores)

- Podem começar com letras, $ ou _.
- Não podem começar com números: 1agf.
- É possível usar letras ou números: hoje, S1.
- É possível usar acentos e símbolos: Médio, num$.
- Não podem conter espaços: num 02.
- Não podem ser palavras reservadas: var.


Node JS

- Podemos usar o Node no VS pelo terminal.
- Muitos terminais podem deixar o pc lento. 


Dicas para criar nome de variáveis

- Minúsculas e maiúsculas fazem diferença. Ex: A é diferente de a.
- Tente escolher nomes coerentes para variáveis. Ex: para nome usar var nome.


Tipos primitivos

- number - int e float são number.
    - int - 5, 18, -12.
    - float - 5.4, 0.2
- string - 'william'
- boolean - True and False.
- null 
- undefined 
- object
    - array
- function

- typeof - mostra o tipo de varável de um dado.
- Quando definimos uma var não dizemos o tipo dela.
- typeof null é um objeto para o JS.


- Quem comenta bem um código o mantém organizado.
- Pode ser usado o // ou /* */ para comentar.
    - // - Única linha.
    - /* */ - mais de uma linha, várias linhas.
- Excelente para depuração.
- Usar o // para explicar o comando.


Atribuição de variáveis

Exemplo da vaga de estacionamento
- '=' significa 'recebe': `vaga1 = carro1`
- Se quero remover um carro e colocar outro devo remover o primeiro: `Ex: vaga01 = carro2`
- Se quero que a vaga fique vazia usamos o valor 'null': `vaga01 = null`.


- Variável são espaços separados na memória para um dado.
- 'var', 'let' e 'const' declara uma variável. Ambos tem diferenças entre si 
    <br>
    `var n1 = 1`   
    <br>
    let n2 = 2 
    <br>
    const n3 = 3```
- Podemos atribuir valores dentro variáveis. Ex: var01 = 5.
- Variáveis possuem tamanhos diferentes.
- Podemos usar 3 tipos diferentes de aspas: simples ' ', duplas " " ou crase ` `. Elas tem diferenças para o JS.


Nomes de variáveis (identificadores)

- Podem começar com letras, $ ou _.
- Não podem começar com números: 1agf.
- É possível usar letras ou números: hoje, S1.
- É possível usar acentos e símbolos: Médio, num$.
- Não podem conter espaços: num 02.
- Não podem ser palavras reservadas: var.


Node JS

- Podemos usar o Node no VS pelo terminal.
- Muitos terminais podem deixar o pc lento. 


Dicas para criar nome de variáveis

- Minúsculas e maiúsculas fazem diferença. Ex: A é diferente de a.
- Tente escolher nomes coerentes para variáveis. Ex: para nome usar var nome.


Tipos primitivos

- number - int e float são number.
    - int - 5, 18, -12.
    - float - 5.4, 0.2
- string - 'william'
- boolean - True and False.
- null 
- undefined 
- object
    - array
- function

- typeof - mostra o tipo de varável de um dado.
- Quando definimos uma var não dizemos o tipo dela.
- typeof null é um objeto para o JS.


## Tratamento de dados - aula 06

- Usamos o + para concatenar ou soma.
- window.prompt sempre recebe o valor como string.


Conversão de tipos

String -> Número

- Usamos Number.parseInt(n1) ou parseInt(n1) para converter em números inteiros.
- Usamos Number.parseFloat(n1) ou parseFloat(n1) para converter em números reais ou flutuantes.
- Forma mais simplificada: Number(n1) 

Número -> String

- Usamos String(n) ou n.toString() para converter para string.

Formatando Strings

- Template String

- Usamos crase para placehold.
- `Eu estou aprendendo ${s}`

- .length - quantos caracteres a string tem.
- .toUpperCase() - Tudo para letras maiúsculas.
- l.toLowerCase() - Tudo para letras minúsculas.

- document.write - Escreve na tela.
- document.writel - Escreve na tela e pula linha.

.toFixed() - Define a quantidade de casas decimais em um número.
.toFixed().replace('.', ',') - Substitui os itens.

toLocaleString() - String localizada no mundo.


Atalhos 

Crtl + J - abre um novo terminal
Crtl + Shift + A - adiciona comentários
f12 - devtools


## Operadores (parte 1) - aula 07

JS possui familias de operadores

- Aritméticos 
- Atribuição
- Relacionais 
- Lógicos 
- Ternário 
- e outros.

<br>

Operadores Aritméticos 
  
- Soma (+)
- Subtração (-)
- Multiplicação (*)
- Divisão real (/)
- Resto (%) 
- Potência (**)

<br>

Precedência de operadores 

- Parenteses.
- Potência.
- Divisão, multiplicação e resto.
- Soma e subtração.

- Usamos parenteses para mudar a ordem de precedência.

<br>

Atribuição simples 
```
    n = 5+8
    n1 = 8-4
    n2 = 8*4**5
```

Auto-atribuições 

```
    var n = 3
    n=n + 4 = 7 
```

<br>

Simplificar auto-atribuições

```
n+=4, 
n-=4, 
n*=4
...
```

- Só serve se for ela mesma, operador, mais outro valor.

<br>

Incremento

```
var x=5
x=x+1
x=x-1
```

Simplificar incremento

```
x++, x-- 
e 
--x, ++x.
```

- Usado para simplificar a incrementação.
- Existe o pré-incremento e o pós-incremento como também existe o pré-decremento e o pós-drecemento.

<br>

## Operadores (parte 2) - aula 08

Operadores relacionais 

```
    > - maior 
    5 > 2 - True

    < - menor
    7 < 4 - false

    >= - maior ou igual a
    8 >= 8 - True

    <= - menor ou igual a
    9 <= 7 - False

    == - igual 
    5 == 5 - True 

    != - diferente
    4 != 4 - false
```

- Para expressões relacionais os valores relacionados a ela serão bool.

- Em uma expressão onde há operadores aritméticos e relacionais executá-se primeiro os aritméticos. ` a => b - 10`

<br>

Exemplos

```
    preco >= 200.50
    idade < 18
    curso == 'JavaScript'
    n1 != n2
```
<br>

Operadores de identidade

```
    5 == 5 - true
    5 == '5' - true
```
- Ambos os valores iguais, pois o Js não testa os tipos.

- Igualdade restrita (===)

    - Testa se o valor e o tipo são identicos.
    ```
    5 == 5 - true   //valores iguais
    5 == '5' - true  //valores iguais
    5 === '5' - false   //valores diferentes
    5 === 5 - true  //valores iguais.

<br>

Operadores lógicos 

- ! - negação
    - ! true - false
    - ! false - true

<br>

- && - conjunção ou e lógico
    - operador binário, pois possue dois valores.

    - true && true - true
    - true && false - false
    - false && true - false

<br>

- || - disjunção ou ou lógico
    - basta que apenas um seja verdadeiro.

    - true || true - true
    - true || false - true
    - false || true - true
    - false || false - false

- Em uma expressão numérica primeiro os aritmétivos, depois os relacionais e por fim os lógicos.


    ```
    var a = 5
    var b = 8

    a > b && b % 2 == 0 
    // se o valor de expressão tiver um e, ou, ou um não a ordem é: primeiro o não, depois o e, e por fim o ou.

    a <= b || b / 2 == 2
    ```

<br>

Ordem de procedência 

dentro de uma expressão...

```
    (), **, /...
    > < >=...
    ! && ||...
```
<br>

Operador ternário (?:)

- operador ternário, pois junta três operandos:

```
    teste ? true : false

    var média = 5.5

    média > 7?'APROVADO':'REPROVADO'

    resultado: REPROVADO
```

<br>

## Introdução ao DOM - aula 09

DOM (Document Object Model)

- Conjunto de objetos no navegador.

<br>

Árvore DOM

- Tudo que esta dentro do JS está no window.
- Há muito mais elementos do que apenas esses.

<br> 

Elementos dentro de Window

- location
- document - pai de html
    - html - pai de head e boddy
    
        - head - filho de html
        - body - filho de html
    
    - history

- elementos são qualquer coisa que estiver na arvore DOM.

<br>

Seleção de elementos 

- Muitos elementos da mesma classe selecionamos por Marca e por Nome. 

<br>

por Marca (tag)

- getElementByTagName()[]

    - pode selecionar vários elementos.
    - entre o parentese colocamos os elementos (p).
    - entre conchetes colocamos o índice do elemento [0,1] quando temos várias tags do mesmo tipo.

<br>

por ID

- get.ElementById
    
    - Não há necessidade de colocar colchetes pois seleciona apenas um elemento.

<br>

por Nome

- get.ElementsByName()[] 

    - Selecionamos o(s) elemento(s) pela tag.

<br>

por Classe

- get.ElementsByClassName()
    
    - Atribuimos uma(s) classe(s) o(s) elemento(s) e o modificamos. 

<br>

por Seletor (css) - **método mais recomendado**

- querySelector() - apenas um elementos
    - Usamos elemento html (div) e os atributos css de id (#) ou classe (.) 

- querySelectorAll() - vários elementos 
