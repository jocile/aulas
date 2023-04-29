---
title:  "Componente Led"
date: 2023-04-17 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, eletrônica]
---
O LED (Light Emitting Diode ou Diodo Emissor de Luz) é um componente eletrônico que emite luz quando uma corrente elétrica passa por ele. Algumas características do LED são:

1. Eficiência energética: O LED é mais eficiente energeticamente do que outras fontes de luz, como lâmpadas incandescentes ou fluorescentes. Isso significa que ele produz mais luz por watt de energia consumida, o que o torna uma opção mais sustentável e econômica.
2. Vida útil longa: O LED tem uma vida útil muito longa em comparação com outras fontes de luz. Eles podem durar até 50.000 horas ou mais, o que significa que precisam ser substituídos com menos frequência.
3. Tamanho compacto: O LED é muito pequeno e pode ser utilizado em diversos tipos de aplicações, desde iluminação de ambientes até displays de aparelhos eletrônicos.
4. Resistência a choques e vibrações: O LED é mais resistente a choques e vibrações do que outras fontes de luz, como lâmpadas incandescentes ou fluorescentes.
5. Cores variadas: O LED pode emitir luz em diversas cores, como vermelho, verde, azul, amarelo, entre outras. Isso o torna uma opção versátil para diferentes aplicações.
6. Baixa tensão: O LED funciona com baixa tensão, o que o torna seguro e fácil de usar em circuitos eletrônicos.

## Composição do led

![led]({{site.data.images.led.link}})
_{{site.data.images.led.caption}}_

O LED (Light Emitting Diode ou Diodo Emissor de Luz) é composto por camadas de materiais semicondutores, que são dopados (ou seja, têm impurezas adicionadas) para criar uma junção p-n. A junção p-n é a interface entre duas camadas de semicondutores com polaridades opostas, ou seja, uma camada é carregada positivamente (p) e a outra é carregada negativamente (n).

Quando uma tensão elétrica é aplicada à junção p-n do LED, os elétrons na camada n são atraídos para a camada p, onde eles preenchem lacunas na estrutura atômica do material. Essa recombinação entre elétrons e lacunas produz fótons de luz, que são emitidos pelo LED.

O material semicondutor utilizado na camada p é geralmente uma liga de gálio, alumínio e índio (AlGaInP), que produz luz nas cores vermelha, laranja e amarela. Já o material semicondutor utilizado na camada n é geralmente nitreto de gálio (GaN), que produz luz nas cores azul, verde e branca.

O tamanho e a composição dos materiais semicondutores utilizados no LED podem ser ajustados para produzir diferentes cores de luz. Além disso, o LED pode ser encapsulado em plástico ou vidro para proteger os materiais semicondutores e direcionar a emissão de luz em uma determinada direção.

## Exemplo de prática

Um exemplo de prática com resistores e leds no Tinkercad seria a montagem de um circuito simples para acender um LED. Para isso, pode-se utilizar um resistor de 220 ohms e um LED.

O circuito seria montado da seguinte forma: o resistor seria conectado em série com o LED, e essa combinação seria conectada em série com uma fonte de energia, como uma bateria de 9V. A perna mais longa do LED, que é o anodo, seria conectada ao terminal positivo da fonte, enquanto a perna mais curta, que é o catodo, seria conectada ao resistor.

Ao simular o circuito no Tinkercad, pode-se observar que o LED acende com intensidade adequada, graças à resistência oferecida pelo resistor, que protege o LED de uma corrente elétrica excessiva. É possível também variar o valor do resistor para ajustar a intensidade da luz do LED.

Outra prática com resistores e leds seria a montagem de um circuito com vários LEDs, utilizando resistores de valores diferentes para cada LED, de modo a obter uma distribuição uniforme da corrente elétrica entre os componentes. Essa prática é útil para a criação de efeitos de luz em projetos de eletrônica e pode ser facilmente simulada no Tinkercad.

## Referências

- [Mundo da elétrica: Led, o que é e como utilizar](https://www.mundodaeletrica.com.br/led-o-que-e-e-como-utilizar/)
- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
- [Tinkercad - simulador](https://www.tinkercad.com/)
