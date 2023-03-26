---
title:  "Operações matemáticas com Arduino"
date: 2023-03-14 10:40:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, programação]
---
Existem diversos tipos de operações matemáticas que podem ser realizadas com variáveis em programas Arduino, incluindo:

- **Soma (+)**: realiza a adição de dois ou mais valores.

```cpp
int a = 10;
int b = 5;
int soma = a + b;

```

- **Subtração (-)**: realiza a subtração de dois ou mais valores.

```cpp
int a = 10;
int b = 5;
int subtracao = a - b;

```

- **Multiplicação (*)**: realiza a multiplicação de dois ou mais valores.

```cpp
int a = 10;
int b = 5;
int multiplicacao = a * b;

```

- **Divisão (/)**: realiza a divisão de dois ou mais valores.

```cpp
int a = 10;
int b = 5;
int divisao = a / b;

```

- **Resto da divisão (%)**: retorna o resto da divisão entre dois valores.

```c+pp
int a = 10;
int b = 3;
int resto = a % b;

```

- **Incremento (++ e +=)**: adiciona 1 ao valor de uma variável. Pode ser feito utilizando o operador "++" ou " +=". O operador "++" adiciona 1 diretamente à variável, enquanto o operador "+=" adiciona um valor específico à variável.

```cpp
int a = 10;
a++; // equivale a "a = a + 1;"
int b = 5;
b += 3; // equivale a "b = b + 3;"

```

- **Decremento (-- e -=)**: subtrai 1 do valor de uma variável. Pode ser feito utilizando o operador "--" ou "-=". O operador "--" subtrai 1 diretamente da variável, enquanto o operador "-=" subtrai um valor específico da variável.

```cpp
int a = 10;
a--; // equivale a "a = a - 1;"
int b = 5;
b -= 3; // equivale a "b = b - 3;"

```

Essas são apenas algumas das operações matemáticas que podem ser realizadas com variáveis em programas Arduino. A escolha da operação depende do tipo de cálculo a ser feito e da forma como as variáveis estão sendo utilizadas no código.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
