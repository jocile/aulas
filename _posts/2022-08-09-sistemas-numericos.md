---
title:  "Sistemas numéricos"
author: Prof. Jocilé Serra
date: 2022-08-09 19:00:00 -0300
categories: [AULAS, MONTAGEM E INSTALAÇÃO DE SISTEMAS]
tags: [numérico, binário]
---
Os sistemas numéricos, são usados para definir e representar quantidade de dados.

Sua representação é definida de acordo com uma base específica. Por exemplo, o sistema que usamos hoje chamamos de decimal, pois todo e qualquer número pode ser representado por 10 símbolos diferentes, sendo 10 a base.

## Sistema Binário

É o sistema em que os números são representados por 2 algarismos (0 ou 1). Ex: 0, 1, 01, 10, 11, etc.

### Conversão Binário para Decimal

Dado o número binário B = b$_4$ b$_3$ b$_2$ b$_1$ b$_0$,  
esse número é representado na base decimal em  
D = b$_4$ *2$^4$ + b$_3$* 2$^3$ + b$_2$ * 2$^2$ + b$_1$ *2$^1$ + b$_0$* 2$^0$,  
veja o exemplo a seguir:  

Exemplo: Converta 11001$_2$ para decimal

11001 $_2$ = 1\*2$^4$ + 1\*2$^3$ + 0\*2$^2$ + 0\*2$^1$ + 1\*2$^0$\
= 1\*16 + 1\*8 + 0\*4 +0\*2 +1\*1\
= 16 + 8 + 0 + 0 +1\
= 25\
11001$_2$ = 25$_10$

### Conversão Decimal para Binário

Para converter um número em base decimal para binário, basta fazer divisões sucessivas por 2, e armazenar os valores dos restos inteiros (0 ou 1) e o último quociente possível. Veja o exemplo:

Exemplo: Converta 123$_10$ para binário

![Image](https://user-images.githubusercontent.com/45495068/183762583-225ca720-86dd-4ae7-893e-317a5eff01c8.png)

## Sistema Hexadecimal

O sistema hexadecimal possibilita expressar valores numéricos utilizando 16 algarismos: 0,1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.

### Conversão Hexadecimal para Decimal

Dado o número Hexadecimal H = h$_4$ h$_3$ h$_2$ h$_1$ h$_0$ , esse número é representado na base decimal em:

D = h$_4$ * 16$^4$ + h$_3$ *16$^3$ + h$_2$* 16$^2$ +h$_1$ * 16$^1$ + h$_0$ * 16$^0$ ,  

veja o exemplo a seguir:

Exemplo: Converta A34$_16$ para decimal\
A34$_16$ = A\*16$^2$ + 3\*16$^1$ + 4\*16$^0$\
= A\*256 + 3\*16 + 4\*1\
= 10\*256 + 48 + 4\
= 2560 + 52\
A34$_16$ = 2612$_10$

### Conversão Decimal para Hexadecimal

Para converter um número em base decimal para hexadecimal, basta fazer divisões sucessivas por 16, e armazenar os valores dos restos inteiros (0,1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E ou F) e o último quociente possível. Veja o exemplo:
Exemplo: Converta 2468$_10$ para hexadecimal

![Image](https://user-images.githubusercontent.com/45495068/183766269-8ea84b27-8851-4e58-9a65-368f67aed26f.png)

2468$_10$ = 9A4$_16$

### Conversão Binário para Hexadecimal

Para converter um valor em binário para Hexadecimal, basta agrupá-los em 4 dígitos e inserir o valor correspondente aos mesmos em hexadecimal com o auxílio da tabela. Veja o exemplo:

Exemplo: Converta 101010110001$_2$ para Hexadecimal

|   Binário   | 1010  | 1011  | 0001  |
| :---------: | :---: | :---: | :---: |
| Hexadecimal |   A   |   B   |   1   |

101010110001$_2$ = AB1$_16$

### Conversão de Hexadecimal para Binário

Para converter um valor em Hexadecimal para Binário, devemos separar cada digito individualmente e inserir seu valor correspondente em binário com o auxílio da tabela. Veja o exemplo:

Exemplo: Converta 82AF9$_16$ para Binário

| Hexadecimal |   8   |   2   |   A   |   F   |   9   |
| :---------: | :---: | :---: | :---: | :---: | :---: |
|   Binário   | 1000  | 0010  | 1010  | 1111  | 1001  |

82AF9$_16$ = 10000010101011111001

## Referência

[Conversor online](https://www.to-convert.com/pt/index.php#body)
