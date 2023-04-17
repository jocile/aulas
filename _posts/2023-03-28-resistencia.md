---
title:  "Resistência elétrica"
date: 2023-03-28 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, eletricidade, eletrônica]
---
A resistência elétrica é a capacidade de um corpo se opor à passagem de corrente elétrica.

- Mesmo quando existe uma diferença de potencial aplicada, o corpo oferece uma oposição à passagem de corrente elétrica.
- A unidade de medida da resistência elétrica é o ohm (Ω).

## Resistores

![resistor]({{site.data.images.resistor.link}})
_{{site.data.images.resistor.caption}}_

- Resistores são componentes eletrônicos que oferecem uma oposição à passagem de corrente elétrica.
- A oposição à passagem de corrente elétrica é oferecida através do material do resistor.
- Os resistores causam uma queda de tensão em alguma parte de um circuito elétrico.
- Os resistores limitam a corrente elétrica, mas jamais causam quedas de corrente elétrica.
- Isso significa que a corrente elétrica que entra em um terminal do resistor será exatamente a mesma que sai pelo outro terminal, mas haverá uma queda de tensão.

## Controle da tensão sobre os componentes

- Utilizando resistores, é possível controlar a tensão sobre os componentes desejados em um circuito elétrico.
- Os resistores são frequentemente usados em circuitos elétricos para ajustar a corrente elétrica e a tensão que é fornecida aos diferentes componentes do circuito.
- Eles são usados para reduzir a tensão que é fornecida a um componente, para limitar a corrente que flui através de um circuito e para dividir a tensão em diferentes partes do circuito.
- Ao usar resistores em um circuito, é possível garantir que os componentes estejam operando dentro dos limites de corrente e tensão seguros, o que ajuda a evitar danos aos componentes e a garantir que o circuito funcione corretamente.

Em resumo, a resistência elétrica é a capacidade de um corpo oferecer uma oposição à passagem de corrente elétrica, e os resistores são componentes eletrônicos que aproveitam essa propriedade para controlar a tensão sobre os componentes de um circuito elétrico. Os resistores são usados para ajustar a corrente elétrica e a tensão que é fornecida aos diferentes componentes do circuito, garantindo que os componentes estejam operando dentro dos limites de corrente e tensão seguros e ajudando a evitar danos aos componentes e a garantir que o circuito funcione corretamente.

## Cálculo da resistência

![calculo-da-resistencia]({{site.data.images.calculo-da-resistencia.link}})
_{{site.data.images.calculo-da-resistencia.caption}}_

Existem diversas maneiras de calcular a resistência, tensão e corrente de um circuito elétrico, dependendo da complexidade do circuito e da informação que se deseja obter. A seguir, apresentamos alguns exemplos de cálculos básicos:

1. Cálculo da resistência:

- Se a tensão (V) e a corrente (I) são conhecidas, a resistência (R) pode ser calculada pela fórmula `R = V/I`.
- Se a resistividade (ρ) e as dimensões de um material condutor são conhecidas, a resistência pode ser calculada pela fórmula `R = (ρ * L) / A`, onde L é o comprimento do material, A é a área da seção transversal do material e ρ é a resistividade do material.
- Se a resistência de cada componente em um circuito é conhecida, a resistência total do circuito pode ser calculada pela fórmula `Rtotal = R1 + R2 + ... + Rn, onde R1, R2, ..., Rn` são as resistências de cada componente.

2. Cálculo da tensão:

- Se a resistência (R) e a corrente (I) são conhecidas, a tensão (V) pode ser calculada pela fórmula `V = R * I`.
- Se a tensão em um ponto do circuito é conhecida, a tensão em outro ponto pode ser calculada usando a lei de Ohm: `V = I * R`, onde I é a corrente que flui entre os dois pontos e R é a resistência entre os dois pontos.

3. Cálculo da corrente:

- Se a resistência (R) e a tensão (V) são conhecidas, a corrente (I) pode ser calculada pela fórmula `I = V/R`.
- Se a corrente que flui em um componente é conhecida, a corrente em outro componente pode ser calculada usando a lei de Ohm: `I = V / R`, onde V é a tensão entre os dois componentes e R é a resistência entre os dois componentes.

Esses são apenas alguns exemplos de como calcular a resistência, tensão e corrente em um circuito elétrico. Existem outras fórmulas e técnicas que podem ser usadas dependendo da complexidade do circuito e do tipo de informação que se deseja obter.

## Exercícios

Exemplos de exercícios com cálculos de resistência, tensão e corrente de circuitos:

Calcule a resistência total e a corrente que flui no circuito abaixo, sabendo que a resistência de cada resistor é de 10 ohms.

Resolução:
A resistência total do circuito é a soma das resistências de cada resistor, ou seja, Rtotal = 10 ohms + 10 ohms + 10 ohms = 30 ohms.
Para calcular a corrente que flui no circuito, podemos usar a lei de Ohm: I = V/R. Como a tensão em um circuito em série é a mesma em todos os componentes, podemos usar a tensão de 12 volts que é aplicada no circuito:

`I = V/Rtotal = 12 volts / 30 ohms = 0,4 amperes.`

Exemplo 2:
Calcule a tensão em cada resistor e a corrente que flui no circuito abaixo, sabendo que a resistência de R1 é de 10 ohms e a resistência de R2 é de 20 ohms.

Resolução:
A resistência total do circuito em série é a soma das resistências de cada resistor, ou seja, Rtotal = 10 ohms + 20 ohms = 30 ohms.
A corrente que flui no circuito pode ser calculada usando a lei de Ohm: I = V/Rtotal. Usando a tensão de 24 volts que é aplicada no circuito, temos:

`I = V/Rtotal = 24 volts / 30 ohms = 0,8 amperes.`

Para calcular a tensão em cada resistor, podemos usar novamente a lei de Ohm: `V = I * R`. Assim, a tensão em `R1 é V1 = I * R1 = 0,8 amperes * 10 ohms = 8 volts` e a tensão em `R2 é V2 = I * R2 = 0,8 amperes * 20 ohms = 16 volts`.

Exemplo 3:
Calcule a resistência total e a corrente que flui no circuito abaixo, sabendo que a resistência de R1 é de 20 ohms, a resistência de R2 é de 30 ohms e a tensão aplicada é de 24 volts.

Resolução:
Para calcular a resistência total do circuito em paralelo, podemos usar a fórmula: 1/Rtotal = 1/R1 + 1/R2. Assim:

```plain text
1/Rtotal = 1/20 ohms + 1/30 ohms = 0,05 + 0,0333 = 0,0833.
Rtotal = 1/0,0833 = 12 ohms.

```

Para calcular a corrente que flui no circuito, podemos usar a lei de Ohm: `I = V/Rtotal = 24 volts / 12 ohms = 2 amperes`.

Note que, como os resistores estão em paralelo, a tensão em cada resistor é a mesma e pode ser calculada diretamente usando a lei de Ohm: `V1 = I * R1 = 2 amperes * 20 ohms = 40 volts` e `V2 = I * R2 = 2 amperes * 30 ohms = 60 volts`.

Exemplo 4:
Calcule a resistência total e a corrente que flui no circuito abaixo, sabendo que a resistência de R1 é de 10 ohms, a resistência de R2 é de 20 ohms e a tensão aplicada é de 12 volts.

Resolução:
Para calcular a resistência total do circuito em série, podemos somar as resistências de cada resistor, ou seja, `Rtotal = 10 ohms + 20 ohms = 30 ohms`.

Para calcular a corrente que flui no circuito, podemos usar a lei de Ohm: `I = V/Rtotal = 12 volts / 30 ohms = 0,4 amperes`.

Note que a tensão em cada resistor é diferente, pois os resistores estão em série e a tensão é dividida entre eles de forma proporcional às suas resistências.

Assim, a tensão em R1 é `V1 = I * R1 = 0,4 amperes * 10 ohms = 4 volts` e a tensão em R2 é `V2 = I * R2 = 0,4 amperes * 20 ohms = 8 volts`.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
