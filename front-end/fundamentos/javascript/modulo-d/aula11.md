# Condições (parte 01) - aula 11

## Condições

- A "direção" do código pode mudar e queremos executar apenas um parte desse código daí usamos condições.

### Desvios condicionais 
if (condições) {

    executa quando as condições são verdadeiras.

} else {

    executa quando as condições não são verdadeiras.

}

### Tipos de condições
- Codição simples: Por não haver o else é uma condição simples:

```JS
if (condição) {
        true
    }
```



- Condição composta: Utiliza o else por haver mais de uma opção:

```JS
var vel = 60
console.log ('a velocidade de seu carro é ${vel}')
if (vel > 60) {
    console.log ('você ultrapassou a velocidade permitida. MULTADO!')
}

console.log ('Dirija sempre usando cinto de segurança!')
```



```JS
var pais = 'EUA'
console.log (`vivendo em ${pais}`)

if (pais == 'Brasil') {
        
    console.log ("Brasileiro")

    } else {
        console.log ("Você é estrangeiro estrangeiro")
    }
```
# Condições (parte 01) - aula 11

## Condições

- A "direção" do código pode mudar e queremos executar apenas um parte desse código daí usamos condições.

### Desvios condicionais 
```
if (condições) {
    executa quando as condições são verdadeiras.
} else {
    executa quando as condições são falsas.
}
```

### Tipos de condições
- Codição simples: 
    - if (condição) {
        true
    }


- Condições compostas
    - if (condição) {
        true
    } else {
        false
    }


