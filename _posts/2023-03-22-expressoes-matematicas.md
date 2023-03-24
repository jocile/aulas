---
title:  "Expressões matemáticas"
date: 2023-03-22 18:30:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, lógica, programador, programação]
---
Chamamos de operadores matemáticos ou aritméticos o conjunto de símbolos que representa as operações básicas da matemática, a saber: + adição ; - subtração ; * multiplicação ; / divisão ; ** potenciação ; // radiciação.

Exemplos:

```math
  -2 + 2 ;
  ABC / 5 ;
  aula * ABC + XPTO - 8.
```

## Funções matemáticas que podem ser usadas

- MOD( resto da divisão )
- DIV( quociente inteiro da divisão )
- INT( x ) - resulta a parte inteira de um número X.
- FRAC( x ) - resulta a parte fracionária de X.
- ABS( x ) - resulta o valor absoluto de X.

Exemplos:

- 15 DIV 7 resulta 2
- 15 MOD 7 resulta 1
- INT( 34.567 ) resulta 34
- FRAC( 546.34 ) resulta 34
- ABS ( -34 ) resulta 34

## PRIORIDADES

Na resolução das expressões aritméticas, as operações e funções matemáticas guardam entre si uma hierarquia.

1. Parênteses mais internos.
2. Funções matemáticas.

**Exercícios:**

3 ** 2 - 4 / 2 + ABS( 5 - 3 * 5 ) / 2

( FRAC( A / B ) + ABS( C ) ) ** 3 onde A = 5 , B = 10 e C = -4

3 + ( 27 // 3 ) * (( 3 MOD D + 0.5 ) * 2 ) onde D = 1.5

- OPERADORES RELACIONAIS com EXPRESSÕES LÓGICAS

= ( igual a )

ou <> ( diferente)

> ( maior )
> < ( menor )

**Exemplo:**

```math
2 * 4 = 24 / 3
8   =     8
V
```

- OPERADORES LÓGICOS

E       conjunção
OU    disjunção
NÃO  negação

Exemplo

```math
2 < 5 e 15  / 3 = 5
V   e     5      = 5
V   e       V
V
```

- PRIORIDADES - Na resolução das expressões lógicas, as operações e funções lógicas guardam entre si uma hirarquia.

1 - NÃO
2 - E  OU

- PRIORIDADES ENTRE TODOS OS OPERADORES

Parênteses mais internos;
Funções matemáticas; ( MOD - FRAC - DIV ....)
Operadores aritméticos; (  **  -  //  -  *  -  /  - +  - - )
Operadores relacionais; ( #  -  =  -  >  -  < )
Operadores lógicos.( E - OU - NÃO )

**Exercícios:**

NÃO  2 ** 3  <  4 ** 2  OU ABS(  INT( -15 / 2 ) ) < 10

3 * ( C / 4 + 5)  <  - 8 * 3 + ( 15 MOD 8 - 3 )  OU  5 ** 2 > INT( C * 0.7 ) onde C = 20

NÃO L OU V E  ABS( C ) >= A DIV A onde L = .F.   C = -3.5  e A < > 0

Exercícios para casa

A ** 3 / B + 5 - C * D > C * D + A - B  OU  A // 2 / D  <  18 - A  onde A = 9 , B = 3 , C = 4 e D = 2

5 + A * B  ≥  16 // 4 - D  E  6 / A * C / ( A - B ) = 234  OU  A / 4 - ( 7 + 5 * C )  <  A ** 2 - 3 * B

## COMANDO DE ATRIBUIÇÃO

Fornece um valor a uma certa variável tendo que este valor ser compatível com o tipo de variável que foi declarada.

Exemplo

```
lógico: A, B;
Inteiro: X, AULA;
A 🡨 Verdadeiro;
X 🡨 15;
AULA 🡨 8 + 13 DIV 5;
B 🡨 5 = 3;
```

## COMANDOS DE ENTRADA DE DADOS

Exemplo:     Leia ( X );
Leia ( X, AULA, B );

## COMANDOS DE SAÍDA DE DADOS

Exemplo:     Escreva ( X );
Escreva ( X, AULA, B );
Escreva ( “O resultado do peso do aluno é de “, PESO, “ quilos” );

## BLOCOS

Um algoritmo pode ser visto como um bloco. Ele serve para definir os limites nos quais as variáveis declaradas em seu interior são conhecidas e processadas.
Para delimitar um bloco ( algoritmo ) utilizamos os delimitadores: inicio e fim.

Exemplo:

| nome do programa
|
| declaração de variáveis
|
inicio
|
|
| seqüência de ações
|
|
| resultado
|
fim.

ESTRUTURAS DE CONTROLE

SEQÜENCIAL

| nome do programa
|
| declaração de variáveis
|
inicio
|
| comando a;
| comando b;
| comando c;
|          .
| comando n;
fim.
Exercícios

- Construa um algoritmo que calcule a média aritmética entre quatro notas quaisquer fornecidas pelo usuário.
