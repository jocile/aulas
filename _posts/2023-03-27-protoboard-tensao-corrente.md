---
title:  "Protoboard tensão e corrente"
date: 2023-03-27 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, eletricidade, eletrônica]
---
O Arduino é uma plataforma de prototipagem eletrônica bastante popular, que permite a criação de projetos de automação, robótica, Internet das Coisas (IoT), entre outros. Uma das principais vantagens do Arduino é a sua flexibilidade, que permite a conexão de diversos componentes eletrônicos, como sensores, atuadores e displays.

## Protoboard

![protoboard]({{site.data.images.protoboard.link}})
_{{site.data.images.protoboard.caption}}_

O Protoboard, também conhecido como breadboard, é uma placa reutilizável muito utilizada em projetos eletrônicos para a montagem de protótipos sem a necessidade de solda. Ele é composto por uma base de plástico com orifícios para a conexão de componentes eletrônicos, como resistores, capacitores, diodos, transistores, entre outros.

A placa protoboard é composta por uma série de blocos de plástico perfurados, interligados por lâminas finas de uma liga metálica de cobre, estanho e fósforo. Cada bloco é composto por uma série de orifícios, geralmente em linhas de cinco furos, que permitem a conexão de componentes eletrônicos por meio de jumpers, que são fios com conectores nas extremidades.

A grande vantagem do protoboard é a facilidade de montagem e desmontagem dos circuitos, permitindo a reutilização dos componentes eletrônicos em diferentes projetos. Além disso, ele oferece uma grande flexibilidade na construção de circuitos, permitindo testar diferentes configurações antes de realizar a soldagem definitiva.

No entanto, é importante observar algumas limitações do protoboard em relação à corrente, tensão e resistência dos componentes eletrônicos que podem ser conectados a ele. A corrente máxima suportada pelo protoboard é da ordem de algumas dezenas de mA, o que significa que componentes que demandem correntes mais elevadas devem ser conectados diretamente a fontes de alimentação ou por meio de módulos intermediários. Em relação à tensão, o protoboard suporta normalmente valores de até 5V, que é a tensão de operação padrão do Arduino. Caso seja necessário utilizar tensões mais elevadas, é recomendável utilizar circuitos reguladores de tensão ou módulos de isolamento.

Em resumo, o protoboard é uma placa reutilizável muito útil para a construção de protótipos de circuitos eletrônicos sem a necessidade de solda. Ele oferece grande flexibilidade na construção de circuitos, mas é importante observar suas limitações em relação à corrente, tensão e resistência dos componentes eletrônicos que podem ser conectados a ele.

## Tensão elétrica

A tensão elétrica, também conhecida como diferença de potencial (DDP) ou voltagem, é uma grandeza física que mede a diferença de potencial elétrico entre dois pontos em um circuito elétrico. Essa diferença de potencial pode ser compreendida como a energia elétrica potencial por unidade de carga elétrica entre os dois pontos.

A unidade de medida da tensão elétrica é o volt (V), que é equivalente a joules por coulomb (J/C). Ela é medida por um dispositivo chamado voltímetro, que é conectado em paralelo ao circuito elétrico, ou seja, entre os dois pontos onde se deseja medir a diferença de potencial.

A diferença de potencial elétrico entre dois pontos em um circuito elétrico é criada pela presença de um campo elétrico. Essa diferença de potencial é igual ao trabalho que deve ser feito por unidade de carga elétrica para mover uma carga de um ponto a outro contra o campo elétrico presente no circuito. Isso significa que quanto maior for a diferença de potencial elétrico entre os dois pontos, maior será a energia necessária para movimentar a carga elétrica de um ponto a outro.

A tensão elétrica é uma grandeza muito importante em circuitos elétricos, pois é responsável por movimentar as cargas elétricas pelos condutores e pelos componentes do circuito. Por exemplo, uma bateria é um dispositivo que fornece uma tensão elétrica entre seus terminais, permitindo que a corrente elétrica flua pelo circuito. O conhecimento da tensão elétrica em um circuito é fundamental para o dimensionamento correto dos componentes, garantindo o funcionamento adequado do circuito.

## Corrente elétrica

A corrente elétrica é o movimento ordenado de partículas portadoras de carga elétrica em um condutor, como elétrons em um fio metálico, quando há uma diferença de potencial elétrico entre as extremidades do condutor. A intensidade da corrente elétrica é medida em ampere (A), que é a quantidade de carga elétrica que passa por um ponto do circuito por unidade de tempo.

A corrente elétrica é produzida por uma diferença de potencial elétrico entre dois pontos, que é medida em volts (V), e o material do condutor que oferece menor ou maior resistência ao fluxo de elétrons. É importante notar que a corrente elétrica flui sempre do potencial mais elevado para o potencial mais baixo.

A corrente elétrica produz um campo magnético, que pode ser utilizado para criar um eletroímã ou para fazer um motor elétrico funcionar. O campo magnético é produzido pela movimentação das cargas elétricas em um condutor. O sentido da corrente elétrica determina o sentido do campo magnético produzido.

Para medir a corrente elétrica em um circuito, é necessário utilizar um amperímetro, que é um instrumento que se conecta em série com o circuito. Para medir a diferença de potencial elétrico entre dois pontos, pode-se utilizar um voltímetro, que é um instrumento que se conecta em paralelo com o circuito. É importante notar que a medição da tensão elétrica deve ser feita entre dois pontos, e um desses pontos pode ser a referência comum do circuito, que geralmente é o terra.

## Corrente contínua

![corrente-continua]({{site.data.images.corrente-continua.link}})
_{{site.data.images.corrente-continua.caption}}_

A corrente contínua (CC) é um tipo de corrente elétrica que flui sempre na mesma direção, sem mudar de sentido. Esse tipo de corrente é gerado por fontes de energia elétrica que produzem uma tensão constante em um circuito, como baterias, pilhas, dínamos, células solares e fontes de alimentação com retificação de corrente alternada.

Em um circuito de corrente contínua, os elétrons fluem do polo negativo da fonte para o polo positivo, passando pelos componentes do circuito, como resistores, capacitores e transistores, e voltando ao polo negativo. Essa direção constante do fluxo de elétrons é o que caracteriza a corrente contínua.

A corrente contínua é amplamente utilizada em eletrônica, pois muitos dispositivos eletrônicos e digitais exigem uma fonte de alimentação constante e estável, o que é fornecido por baterias e outras fontes de corrente contínua. No entanto, a corrente contínua não é adequada para transmissão de energia elétrica em longas distâncias, já que a perda de energia devido à resistência dos cabos é muito alta. Para a transmissão de energia elétrica em longas distâncias, é usado o sistema de corrente alternada (CA).

## Corrente alternada

![corrente-alternada]({{site.data.images.corrente-alternada.link}})
_{{site.data.images.corrente-alternada.caption}}_

A corrente alternada é a forma mais comum de energia elétrica utilizada em residências, comércios e indústrias. A sua principal característica é que a direção do fluxo de elétrons muda continuamente, invertendo seu sentido em intervalos regulares de tempo, geralmente 50 ou 60 vezes por segundo, dependendo do país. Isso ocorre porque a corrente é gerada por meio de um gerador que é constituído por um conjunto de bobinas e um rotor que gira, produzindo uma corrente elétrica que varia sua polaridade.

A forma de onda da corrente alternada é geralmente senoidal, o que significa que a intensidade da corrente elétrica varia em uma curva que se assemelha a um seno ou um cosseno. A forma de onda senoidal é a mais utilizada em circuitos de potência porque é a forma mais eficiente de transmissão de energia. No entanto, em alguns circuitos de controle, podem ser utilizadas outras formas de onda, como triangular ou quadrada.

Ao contrário da corrente contínua, a corrente alternada é composta por fases, que são diferentes formas de onda que estão defasadas no tempo em relação umas às outras. Isso é necessário para que haja um fluxo de energia constante e contínuo no circuito. Além disso, a corrente alternada é geralmente transmitida em três fios, cada um correspondendo a uma fase, além de um fio neutro que é comum a todas as fases. Esse sistema é conhecido como trifásico e é amplamente utilizado em aplicações industriais.

## Calculando

Cálculo da tensão:

- Se a resistência (R) e a corrente (I) são conhecidas, a tensão (V) pode ser calculada pela fórmula `V = R * I`.
- Se a tensão em um ponto do circuito é conhecida, a tensão em outro ponto pode ser calculada usando a lei de Ohm: `V = I * R`, onde I é a corrente que flui entre os dois pontos e R é a resistência entre os dois pontos.

Cálculo da corrente:

- Se a resistência (R) e a tensão (V) são conhecidas, a corrente (I) pode ser calculada pela fórmula `I = V/R`.
- Se a corrente que flui em um componente é conhecida, a corrente em outro componente pode ser calculada usando a lei de Ohm: `I = V / R`, onde V é a tensão entre os dois componentes e R é a resistência entre os dois componentes.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
