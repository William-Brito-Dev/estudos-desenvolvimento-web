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



