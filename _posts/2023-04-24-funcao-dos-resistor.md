---
title:  "Função do resistor"
date: 2023-04-24 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
Neste artigo, vamos entender o que é um resistor, para que serve e quais são os tipos disponíveis. Vamos também falar sobre a sua importância em circuitos elétricos e aprender a calcular o valor de resistência com base nas suas cores.

## O que é um resistor?

Um resistor é um componente elétrico passivo, com a função principal de limitar o fluxo de corrente elétrica em um circuito. Ele é representado por símbolos, sendo que o da esquerda é definido pelo IEEE e o da direita pelo IEC. Podemos pensar na analogia de um cano por onde passa água, onde a água representa a corrente elétrica. Quando existe uma resistência ao fluxo de água, o fluxo é reduzido. Da mesma forma, quando a corrente elétrica passa por um resistor, a sua resistência é maior que a dos cabos e trilhas de um circuito elétrico, fazendo com que a corrente elétrica diminua e ocorra uma queda de tensão. A relação entre tensão, corrente elétrica e resistência elétrica é descrita pela Lei de Ohm, descoberta pelo cientista alemão George Ohm em 1827.

## Polaridade do resistor

O resistor não possui polaridade, ou seja, não tem um lado positivo ou negativo quando conectado em um circuito elétrico. É possível até mesmo inverter a sua posição que a sua resistência continuará a mesma. Não há uma forma correta ou uma polaridade específica para conectar um resistor em um circuito elétrico.

## Uso do resistor

Uma aplicação comum para o resistor é para conectar um LED vermelho a uma fonte de 5V. Com 20mA de corrente, já é possível alimentar o LED, mas se o LED for conectado diretamente à fonte, sem um resistor para limitar a corrente, ele pode queimar rapidamente. Para evitar este problema, coloca-se um resistor entre a fonte de tensão e o LED. O valor do resistor deve ser suficiente para limitar a corrente em 20mA, o suficiente para acender o LED sem queimá-lo. Usando a Lei de Ohm, sabemos que a resistência é igual à tensão dividida pela corrente. A tensão sobre o resistor é 5V menos a queda de tensão de 2V no LED, resultando em 3V. Dividindo a tensão do resistor, 3V, pela corrente de 20mA, obtemos o valor de 150 ohms para o resistor. Colocando o resistor de 150 ohms em série com a fonte de tensão e o LED, a corrente é limitada e o LED pode finalmente acender sem queimar, pois o resistor limita a corrente total que passa pelo circuito.

## Tipos de resistores

Os resistores fixos podem ser axiais ou SMD, sendo que estes últimos são amplamente utilizados por serem pequenos e fáceis de montar por máquinas em larga escala. Já os resistores variáveis são aqueles em que é possível mudar o valor da resistência, sendo que a maioria deles é ajustado por movimento mecânico. Quando se trata de um divisor de tensão e tem três terminais, são chamados de potenciômetros. 

Para finalizar, é importante lembrar que os resistores são componentes essenciais em praticamente todos os circuitos eletrônicos, seja em aplicações simples como ligar um LED, ou em circuitos mais complexos como em sistemas de controle. A escolha do tipo de resistor e do valor correto da resistência é fundamental para o bom funcionamento do circuito e a segurança dos componentes envolvidos. Portanto, sempre verifique cuidadosamente as especificações dos resistores antes de utilizá-los em seus projetos.

## Referências

[![Vídeo](http://img.youtube.com/vi/xK1xe5gsfVk/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=xK1xe5gsfVk)

- [Resistores]({% post_url 2023-04-10-resistores %})
- [Propriedades dos resistores]({% post_url 2023-04-11-resistores-propriedades %})
