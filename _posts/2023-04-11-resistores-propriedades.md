---
title:  "Componente Resistor propriedades"
date: 2023-04-10 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, eletrônica]
---
O resistor é um dos componentes mais comuns e importantes da eletrônica. Ele está presente em quase todos os circuitos eletroeletrônicos, dos mais simples aos mais complexos, sua funcionalidade é limitar a corrente elétrica para evitar a queima de componentes.

## Propriedades

Os resistores podem ser identificados por meio de suas características físicas e marcações. As principais características dos resistores são:

- Valor nominal de resistência: é o valor de resistência que o resistor deve apresentar. Este valor é expresso em ohms (Ω) e pode variar de algumas frações de ohms até milhões de ohms.
- Tolerância: é a variação permitida em relação ao valor nominal de resistência. Geralmente, os resistores têm uma tolerância de 5% ou 10%.
- Potência nominal: é a quantidade de energia que o resistor é capaz de dissipar sem sofrer danos. A potência nominal é expressa em watts (W) e pode variar de alguns décimos de watt até vários watts.

Os resistores têm marcações coloridas que indicam o seu valor nominal de resistência e tolerância. Para identificar o valor nominal de resistência de um resistor, é preciso identificar as faixas coloridas que estão presentes no corpo do componente. Cada faixa corresponde a um dígito e sua posição indica o seu valor significativo. A tabela abaixo mostra as cores e valores dos dígitos:

Por exemplo, um resistor com as faixas de cores marrom, preto, vermelho e ouro terá o valor nominal de resistência de 1.000 ohms (marrom = 1, preto = 0, vermelho = multiplicador de 100 e ouro = tolerância de 5%). É importante observar que a tolerância é representada pela quarta faixa e pode ser ouro (5%), prata (10%) ou sem faixa (20%).

Para identificar a potência nominal de um resistor, basta verificar a sua dimensão e/ou o tamanho da faixa de cor que indica a sua potência. Resistores de potência baixa (até 0,25W) costumam ser pequenos e têm apenas uma faixa de cor indicando a sua potência. Já os resistores de potência mais alta (acima de 0,5W) costumam ter dimensões maiores e uma ou duas faixas de cor indicando a sua potência.

Além das marcações de cores, alguns resistores também têm o seu valor nominal de resistência e tolerância impressos em sua superfície. De qualquer forma, é importante sempre verificar as marcações para ter certeza do valor nominal de resistência, tolerância e potência nominal do resistor.

## Tabela de identificação

![resistor-cores]({{site.data.images.resistor-cores.link}})
_{{site.data.images.resistor-cores.caption}}_

| Cor      | 1º dígito | 2º dígito | 3º dígito | Multiplicador | Tolerância |
| -------- | --------- | --------- | --------- | ------------- | ---------- |
| Preto    | 0         | 0         | 0         | 1             | -          |
| Marrom   | 1         | 1         | 1         | 10            | ±1%        |
| Vermelho | 2         | 2         | 2         | 100           | ±2%        |
| Laranja  | 3         | 3         | 3         | 1.000         | -          |
| Amarelo  | 4         | 4         | 4         | 10.000        | -          |
| Verde    | 5         | 5         | 5         | 100.000       | ±0,5%      |
| Azul     | 6         | 6         | 6         | 1.000.000     | ±0,25%     |
| Violeta  | 7         | 7         | 7         | 10.000.000    | ±0,1%      |
| Cinza    | 8         | 8         | 8         | -             | ±0,05%     |
| Branco   | 9         | 9         | 9         | -             | -          |
| Ouro     | -         | -         | -         | 0,1           | ±5%        |
| Prata    | -         | -         | -         | 0,01          | ±10%       |

A tabela acima mostra as cores utilizadas na identificação do valor nominal de resistência dos resistores. A primeira coluna apresenta a cor da faixa, a segunda, terceira e quarta colunas indicam o primeiro, segundo e terceiro dígito do valor nominal de resistência, respectivamente. A quinta coluna indica o fator de multiplicação do valor nominal de resistência e a sexta coluna indica a tolerância do valor nominal de resistência.

## Associações de resistores

As associações de resistores podem ser classificadas em duas categorias: associações em série e associações em paralelo.

Associação em série:

- Os resistores são conectados em uma sequência, um após o outro;
- A corrente elétrica é a mesma em todos os resistores;
- A tensão elétrica é dividida entre os resistores, de acordo com suas resistências;
- A resistência total da associação é a soma das resistências de cada resistor;
- Quanto maior a resistência total, menor a corrente elétrica.

Associação em paralelo:

- Os resistores são conectados em paralelo uns aos outros, ou seja, com as mesmas extremidades conectadas;
- A tensão elétrica é a mesma em todos os resistores;
- A corrente elétrica é dividida entre os resistores, de acordo com suas resistências;
- A resistência total da associação é calculada utilizando a Lei de Ohm, que diz que a resistência total é igual ao inverso da soma dos inversos das resistências de cada resistor;
- Quanto menor a resistência total, maior a corrente elétrica.

Além dessas duas associações básicas, existem outras combinações possíveis, como associações mistas, que são combinações de associações em série e paralelo. Nessas combinações, os conceitos e fórmulas das associações em série e paralelo são aplicados de forma combinada.

## Divisor de tensão

O divisor de tensão é um circuito simples que é usado para reduzir a tensão de um sinal. É composto por dois resistores em série, onde a tensão total é dividida entre eles. A razão entre a resistência de cada resistor determina a proporção em que a tensão é dividida.

Na prática, o divisor de tensão é muito utilizado para reduzir a tensão de uma fonte para níveis que possam ser lidos por microcontroladores, sensores e outros dispositivos eletrônicos. O valor da tensão na saída do divisor de tensão é calculado a partir da equação:

`Vout = Vin * R2 / (R1 + R2)`

Onde:

- Vout é a tensão na saída do divisor de tensão;
- Vin é a tensão na entrada do divisor de tensão;
- R1 e R2 são as resistências dos dois resistores.
- O valor de R1 é o resistor que está ligado na entrada do divisor de tensão e o valor de R2 é o resistor que está ligado na saída do divisor de tensão.

Por exemplo, suponha que desejamos reduzir a tensão de 5V para 2V, utilizando um divisor de tensão com resistores de 10kΩ e 20kΩ. Neste caso, temos:

`Vout = 5 * 20 / (10 + 20) = 3,33 V`

Portanto, a tensão na saída do divisor de tensão será de 3,33V, que é a metade da tensão de entrada.

O divisor de tensão é um circuito muito útil para interfacear sinais analógicos com microcontroladores, sensores e outros dispositivos eletrônicos. No entanto, é importante levar em conta que o uso do divisor de tensão pode alterar a impedância do circuito, o que pode afetar a precisão da medição. Além disso, é importante escolher resistores com valores adequados para evitar que a corrente circulando no circuito seja muito alta, o que pode levar a erros de medição ou até mesmo danificar os componentes.

## Exemplo de prática

Segue abaixo um exemplo utilizando Arduino e o simulador Tinkercad com resistores e voltímetro para medir a resistência:

1. Leitura de tensão em um divisor de tensão:
    - Conectar dois resistores em série (exemplo: 10kΩ e 20kΩ);
    - Conectar um dos extremos do divisor de tensão ao 5V do Arduino e o outro extremo ao GND;
    - Conectar um dos pontos médios do divisor de tensão a uma entrada analógica do Arduino;
    - Utilizar o código para ler o valor da entrada analógica e calcular a tensão no ponto médio do divisor de tensão (utilizando a fórmula de divisor de tensão);
    - Exibir o valor da tensão lida no monitor serial.

## Referências

- [Introdução ao Resistor](https://www.robocore.net/tutoriais/introducao-ao-resistor?gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke5csZCbd7AcW6RiUOMBBAIwMkWTIvSVTYuHujiVRcCe17A8WinaAuUaArQbEALw_wcB)
- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
- [Tinkercad | From mind to design in minutes](https://www.tinkercad.com/)
