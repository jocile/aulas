---
title:  "Sistemas numéricos"
author: Prof. Jocilé Serra
date: 2022-08-09 19:00:00 -0300
categories: [AULAS 2022, MONTAGEM E INSTALAÇÃO DE SISTEMAS]
tags: [numérico, binário]
---
Os sistemas numéricos, são usados para definir e representar quantidade de dados.

Sua representação é definida de acordo com uma base específica. Por exemplo, o sistema que usamos hoje chamamos de decimal, pois todo e qualquer número pode ser representado por 10 símbolos diferentes, sendo 10 a base.

## Sistema Binário

É o sistema em que os números são representados por 2 algarismos (0 ou 1). Ex: 0, 1, 01, 10, 11, etc.

### Conversão Binário para Decimal

Dado o número binário B = b<sub>4</sub> b<sub>3</sub> b<sub>2</sub> b<sub>1</sub> b<sub>0</sub>,  
esse número é representado na base decimal em  
D = b<sub>4</sub> * 2<sup>4</sup> + b<sub>3</sub> * 2<sup>3</sup> + b<sub>2</sub> * 2<sup>2</sup> + b<sub>1</sub> * 2<sup>1</sup> + b<sub>0</sub> * 2<sup>0</sup>,  
veja o exemplo a seguir:  

Exemplo: Converta 11001<sub>2</sub> para decimal

11001 <sub>2</sub> = 1\*2<sup>4</sup> + 1\*2<sup>3</sup> + 0\*2<sup>2</sup> + 0\*2<sup>1</sup> + 1\*2<sup>0</sup>  
= 1\*16 + 1\*8 + 0\*4 +0\*2 +1\*1  
= 16 + 8 + 0 + 0 +1  
= 25  
11001<sub>2</sub> = 25<sub>10</sub>

### Conversão Decimal para Binário

Para converter um número em base decimal para binário, basta fazer divisões sucessivas por 2, e armazenar os valores dos restos inteiros (0 ou 1) e o último quociente possível. Veja o exemplo:

Exemplo: Converta 123<sub>10</sub> para binário

![Image](https://user-images.githubusercontent.com/45495068/183762583-225ca720-86dd-4ae7-893e-317a5eff01c8.png)

## Sistema Hexadecimal

O sistema hexadecimal possibilita expressar valores numéricos utilizando 16 algarismos: 0,1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.

### Conversão Hexadecimal para Decimal

Dado o número Hexadecimal H = h<sub>4</sub> h<sub>3</sub> h<sub>2</sub> h<sub>1</sub> h<sub>0</sub> , esse número é representado na base decimal em:

D = h<sub>4</sub> * 16<sup>4</sup> + h<sub>3</sub> * 16<sup>3</sup> + h<sub>2</sub> * 16<sup>2</sup> +h<sub>1</sub> * 16<sup>1</sup> + h<sub>0</sub> * 16<sup>0</sup> ,  

veja o exemplo a seguir:

Exemplo: Converta A34<sub>16</sub> para decimal  
A34<sub>16</sub> = A\*16<sup>2</sup> + 3\*16<sup>1</sup> + 4\*16<sup>0</sup>  
= A\*256 + 3\*16 + 4\*1  
= 10\*256 + 48 + 4  
= 2560 + 52  
A34<sub>16</sub> = 2612<sub>10</sub>

### Conversão Decimal para Hexadecimal

Para converter um número em base decimal para hexadecimal, basta fazer divisões sucessivas por 16, e armazenar os valores dos restos inteiros (0,1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E ou F) e o último quociente possível. Veja o exemplo:
Exemplo: Converta 2468<sub>10</sub> para hexadecimal

![Image](https://user-images.githubusercontent.com/45495068/183766269-8ea84b27-8851-4e58-9a65-368f67aed26f.png)

2468<sub>10</sub> = 9A4<sub>16</sub>

### Conversão Binário para Hexadecimal

Para converter um valor em binário para Hexadecimal, basta agrupá-los em 4 dígitos e inserir o valor correspondente aos mesmos em hexadecimal com o auxílio da tabela. Veja o exemplo:

Exemplo: Converta 101010110001<sub>2</sub> para Hexadecimal

|   Binário   | 1010  | 1011  | 0001  |
| :---------: | :---: | :---: | :---: |
| Hexadecimal |   A   |   B   |   1   |

101010110001<sub>2</sub> = AB1<sub>16</sub>

### Conversão de Hexadecimal para Binário

Para converter um valor em Hexadecimal para Binário, devemos separar cada digito individualmente e inserir seu valor correspondente em binário com o auxílio da tabela. Veja o exemplo:

101010110001<sub>2</sub> = AB1<sub>16</sub>

| Hexadecimal |   8   |   2   |   A   |   F   |   9   |
| :---------: | :---: | :---: | :---: | :---: | :---: |
|   Binário   | 1000  | 0010  | 1010  | 1111  | 1001  |

82AF9<sub>16</sub> = 10000010101011111001<sub>2</sub>

## Referência

[Conversor online](https://www.to-convert.com/pt/index.php#body)
