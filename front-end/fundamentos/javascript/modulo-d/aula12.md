# Condições (parte 02) 

## Condições aninhadas

- Conjunto de condições aninhadas em outra.
```JS
if (cond1) {
        bloco1
} else {
    if (cond2) {
        bloco2
    } else {
        bloco3
    }
}
```

Exemplo

```JS
var idade = 22

if (idade < 18) {
    console.log ('Menor de idade')
} else {
    console.log ('Maior de idade')
}


var idade = 22

console.log (`Vocẽ tem ${idade} anos.`)

if (idade < 16) {
    console.log ('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log ('Voto opcional')
} else {
    console.log ('Voto obrigatório')
}

```

- Mesmo que não apresente nenhum erro a lógica pode estar errada.


## Condições multiplas

- Muito útil para valores fixos.
- Tem a possibilidade não só do sim ou não.
- Ùtil em situações específicas.

```JS
switch (expressão) {
    case valor01
        break
    case valor02
        break
    case valor03
        break
    defalt:
        break
}
```
- O uso do break é obrigatório, somente no defalt que não.
- Só funciona com string e números inteiros.