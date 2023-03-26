---
title:  "Estruturas de repetição com Arduino"
date: 2023-03-20 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, programação]
---
Uma estrutura de repetição, também conhecida como loop, permite que um bloco de código seja executado várias vezes consecutivas.

Existem duas estruturas de repetição disponíveis em C++ que podem ser utilizadas em programas Arduino:

- **while**: executa um bloco de código enquanto uma condição específica for verdadeira.

```cpp

int contador = 0;
while(contador < 10){
  Serial.println(contador);
  contador++;
}

```

Nesse exemplo, o código dentro do loop será executado enquanto o valor da variável "contador" for menor que 10. A cada iteração do loop, o valor da variável "contador" é incrementado em 1.

- **for**: executa um bloco de código um número específico de vezes.

```cpp

for(int i = 0; i < 10; i++){
  Serial.println(i);
}

```

Nesse exemplo, o código dentro do loop será executado 10 vezes. A cada iteração do loop, o valor da variável "i" é incrementado em 1, até que o valor de "i" seja igual a 10.

A escolha entre as estruturas de repetição while e for depende do tipo de tarefa a ser executada e da forma como as variáveis estão sendo utilizadas no código. O uso de loops permite que o código seja mais compacto e eficiente, reduzindo a quantidade de repetições do mesmo bloco de código.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
