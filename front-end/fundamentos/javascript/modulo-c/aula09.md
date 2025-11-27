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
