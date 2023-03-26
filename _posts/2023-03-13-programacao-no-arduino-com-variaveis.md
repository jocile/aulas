---
title:  "Programação no Arduino com variáveis"
date: 2023-03-13 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, programação]
---
Ao programar no Arduino com variáveis, é possível armazenar valores e manipulá-los em diferentes partes do código, tornando-o mais flexível e adaptável.

## Uso de variáveis

Existem vários tipos de variáveis disponíveis em C++, a linguagem de programação utilizada pelo Arduino, como int, float, boolean, char, entre outros.

Para declarar uma variável em Arduino, é necessário indicar o seu tipo e nome. Por exemplo, para declarar uma variável inteira chamada "contador", utilizamos o seguinte código:

```c

int contador;

```

A variável "contador" agora pode ser utilizada para armazenar e manipular valores inteiros em diferentes partes do código. Por exemplo, podemos inicializar a variável com o valor 0 e incrementá-la dentro de um loop:

```cpp

int contador = 0;

void loop() {
  contador = contador + 1;
  delay(1000);
}

```

Nesse exemplo, a variável "contador" é inicializada com o valor 0 e, a cada vez que o loop é executado, o valor é incrementado em 1 e, em seguida, é aguardado um segundo antes de reiniciar o loop.

As variáveis também podem ser utilizadas em operações matemáticas e lógicas, como soma, subtração, multiplicação, divisão e comparação. Por exemplo:

```cpp

int a = 10;
int b = 5;
int soma = a + b;
int subtracao = a - b;
int multiplicacao = a * b;
int divisao = a / b;
boolean igual = (a == b);

```

Nesse exemplo, as variáveis "a" e "b" são inicializadas com os valores 10 e 5, respectivamente. Em seguida, outras variáveis são declaradas para armazenar o resultado de diferentes operações matemáticas e lógicas envolvendo as variáveis "a" e "b".

Assim, o uso de variáveis em programas Arduino pode tornar o código mais organizado, legível e eficiente, permitindo a manipulação e armazenamento de valores de forma dinâmica.

## Tipos de variáveis

Além do tipo de variável "int", que representa valores inteiros, existem outros tipos de variáveis que podem ser usadas em programas Arduino:

- **float**: representa números de ponto flutuante, ou seja, números com casas decimais. É útil em cálculos que envolvem valores não inteiros, como medições de temperatura, por exemplo.

```cpp

float temperatura = 25.5;

```

- **boolean**: representa valores lógicos, que podem ser verdadeiro (true) ou falso (false). É útil em testes condicionais e em operações de controle de fluxo.

```cpp

boolean luz_ligada = true;

```

- **char**: representa um caractere, que pode ser uma letra, número ou símbolo. É útil em operações que envolvem manipulação de strings ou caracteres.

```cpp

char primeira_letra = 'A';

```

- **String**: representa uma sequência de caracteres. É útil em operações que envolvem manipulação de texto ou palavras.

```cpp

String mensagem = "Olá, mundo!";

```

Esses são apenas alguns exemplos de tipos de variáveis disponíveis em C++. Para utilizar cada um desses tipos em um programa Arduino, é necessário declarar a variável com o seu tipo correspondente e, em seguida, atribuir um valor a ela.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
