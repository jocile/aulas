---
title: "Meios físicos de comunicação"
date: 2023-02-26 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, protocolos]
mermaid: true
---
Meios físicos de comunicação e suas formas de transmissão de dados.

## Os bits de dados

Para definir os meios físicos é necessário entender o comportamento dos bits. Um bit viaja partir de um sistema através de uma série de links e roteadores até atingir o sistema de destino. Nesse caminho, o bit é transmitido diversas vezes. O sistema de origem transmite o bit, o primeiro roteador recebe o bit e o transmite e assim por diante. Enquanto viaja da origem para o destino, o bit passa por uma série de transmissores e receptores. Cada bit é enviado pela propagação de ondas eletromagnéticas ou pulsos ópticos através de um meio
físico.

## Meios físicos

Os meios físicos podem ter formas distintas e não precisam ser do mesmo tipo em todo o caminho. Exemplos de meios físicos incluem:

- Par trançado: é um cabo de cobre composto por pares de fios torcidos, usado em redes de computadores, telefonia e outras aplicações. Possui uma boa relação custo-benefício, é fácil de instalar, mas é mais suscetível a interferências eletromagnéticas em comparação com outros meios.
- Cabo coaxial: é um cabo com um núcleo interno condutor, revestido por um material isolante, seguido de uma malha condutora e, por fim, uma capa externa. É usado em redes de TV a cabo, internet a cabo e outras aplicações. Possui boa imunidade a interferências eletromagnéticas, mas é mais caro e difícil de instalar em comparação com o par trançado.
- Fibra óptica: é um cabo composto por filamentos de vidro ou plástico que transmitem sinais de luz. É usado em redes de alta velocidade, como a internet de fibra óptica. Possui alta imunidade a interferências eletromagnéticas, maior capacidade de transmissão de dados e é muito resistente a interferências externas. No entanto, é mais caro e difícil de instalar em comparação com os outros meios.
- Ondas de rádio: são sinais eletromagnéticos que se propagam pelo ar. São usados em redes sem fio, como o Wi-Fi e o Bluetooth. Possuem boa mobilidade, mas possuem uma capacidade limitada de transmissão de dados e podem ser afetados por interferências de outros sinais.
- Satélite: é um meio de transmissão de dados que utiliza satélites artificiais em órbita terrestre. É usado em redes de TV via satélite e em algumas aplicações de internet. Possui uma grande área de cobertura, mas é mais caro e pode ser afetado pelas condições meteorológicas.

Os meios físicos dividem-se em duas categorias: meios encapsulados e não encapsulados.

Nos meios encapsulados, as ondas percorrem um material sólido. Os exemplos desse tipo de meio são: cabo de fibra-óptica, par-trançado e cabo coaxial.

Nos meios não encapsulados, as ondas propagam-se na atmosfera e no espaço. Exemplos:
LAN wireless e canal digital de satélite.

O custo do link físico é relativamente baixo comparado a outros custos da rede. O custo de instalação do link físico pode ser muito superior ao custo do material.

Por essa razão, muitos construtores instalam tipos variados de cabos em todas as salas de um edifício. Mesmo que, inicialmente, só um meio seja usado, existe uma boa chance de outro meio ser usado no futuro. Dessa forma, economiza-se dinheiro evitando a colocação de fios no futuro.

## Par trançado

O meio de transmissão por par trançado é um tipo de cabo de cobre usado para transmitir sinais digitais ou analógicos em redes de computadores, telefonia, sistemas de segurança, entre outros.

Cada cabo é composto por um conjunto de pares de fios de cobre isolados e torcidos em torno de si mesmos para minimizar a interferência eletromagnética entre eles. Essa torção dos pares de fios cria uma estrutura em forma de hélice que protege os fios do cabo contra interferência externa e reduz a diafonia entre os pares de fios adjacentes.

Existem dois tipos principais de par trançado: o UTP (Unshielded Twisted Pair), que é o par trançado sem blindagem, e o STP (Shielded Twisted Pair), que é o par trançado com blindagem.

O UTP é o tipo mais comum de par trançado e é amplamente utilizado em redes de computadores, telefonia e outras aplicações. Ele não tem uma camada de proteção externa, o que o torna mais flexível e fácil de instalar. No entanto, ele é mais suscetível a interferência eletromagnética e não é adequado para ambientes com alta interferência.

Já o STP é um cabo mais robusto, com uma camada de blindagem que protege ainda mais contra interferência eletromagnética. Ele é mais adequado para ambientes com alta interferência, como fábricas e hospitais, mas é mais difícil de instalar e mais caro.

Em resumo, o par trançado é um meio de transmissão de dados muito utilizado em redes de computadores e outras aplicações, por conta de sua eficiência na redução da interferência eletromagnética e sua facilidade de instalação.

## Meios Magnéticos

Uma forma muito barata de se transportar dados de um lugar para o outro é através de fitas magnéticas ou discos flexíveis. Apesar de simples é muito confiável e, dependendo da maneira como é feita, pode ser mais eficaz que muitos meios de transmissão guiados.

Por exemplo, vamos supor que um usuário queira fazer um back-up de seu HD em outro computador localizado algumas quadras de distância. Um HD de 80 GB portátil leva algumas horas para ser completamente preenchido em um computador e levando para outro. No entanto, transmitir 80GB em uma Internet ADSL comum levaria muito mais tempo.

## Cabo Coaxial

O cabo coaxial é formado por dois condutores separados e envoltos por um material isolante. O primeiro condutor, normalmente o cobre, é mais rígido e está envolto pelo segundo condutor, este em forma de malha e normalmente de alumínio. Este segundo condutor, além de ajudar na transmissão é também responsável por proteger o primeiro condutor contra interferências magnéticas.

O cabo coaxial pode ser classificado de duas formas dependendo do material do condutor em malha.

Quando este material é o alumínio o cabo é dito Cabo Coaxial Grosso (Resistência de 75 ohms, transmissão numa velocidade de até 10 mbps a uma freqüência de 10 Ghz). Quando esse material é cobre o cabo é dito Cabo Coaxial Fino (Resistência de 50 ohms, transmissão numa velocidade de até 10 mbps a uma freqüência de 2 Ghz).

## Fibra óptica

Os cabos de fibra óptica são filamentos de vidro ou de materiais poliméricos com capacidade de transmitir sinais digitais sob a forma de sinais luminosos. Tal filamento pode apresentar diâmetros variáveis, dependendo da aplicação, indo desde diâmetros ínfimos, da ordem de micrômetros (mais finos que um fio de cabelo) até vários milímetros. Graças a essa característica, são cabos que conseguem ter uma velocidade ilimitada, se comparados com cabos elétricos. Também torna seu uso desejável quando existe a necessidade de transmitir dados a grandes distâncias.

A fibra óptica é um meio de transmissão de dados que utiliza filamentos de vidro ou plástico para transmitir sinais de luz. Ela é composta por dois elementos básicos: o núcleo e o revestimento. O núcleo é o filamento de vidro ou plástico por onde a luz é transmitida. O revestimento é uma camada de material reflexivo que protege o núcleo e reflete a luz de volta para dentro da fibra.

A transmissão de dados na fibra óptica funciona da seguinte forma: um dispositivo emissor converte o sinal elétrico em um sinal óptico, que é transmitido pelo núcleo da fibra. O sinal óptico é refletido no revestimento várias vezes, o que permite que ele seja transmitido através da fibra sem se dissipar. No receptor, o sinal óptico é convertido de volta em um sinal elétrico.

A fibra óptica é capaz de transmitir dados a uma velocidade muito alta, pois a luz viaja através do núcleo da fibra a uma velocidade próxima da velocidade da luz. Além disso, ela é menos suscetível a interferências eletromagnéticas em comparação com outros meios de transmissão de dados, como o cabo de cobre.

A instalação da fibra óptica pode ser mais cara e trabalhosa em comparação com outros meios de transmissão, devido à necessidade de equipamentos especializados e à delicadeza dos filamentos. No entanto, ela é amplamente utilizada em redes de alta velocidade, como a internet de fibra óptica, devido à sua capacidade de transmissão de dados em alta velocidade e sua resistência a interferências externas.

Outra característica interessante destes tipos de cabos é que eles não sofrem interferência de campos eletromagnéticos.

São cabos com custo mais alto, e com certa dificuldade de manuseio. Entretanto, seu uso vem se disseminando cada vez mais, com a necessidade cada vez maior de velocidades mais altas. Seu custo também diminui dia após dia, e a matéria-prima para a construção do cabo é abundante.

> Os cabos de fibra óptica são compostos por dois fios(um para a recepção e outro para a transmissão) formados por minúsculos cilindros de vidro. Possui duas camadas: Núcleo (vítreo) e Revestimento (Silicone).
{: .prompt-tip }

### Multímodo Degrau

Primeiro tipo de fibra óptica que surgiu é também o mais simples dos três.

Aqui, o núcleo e o revestimento estão claramente definidos. O núcleo é formado por um único tipo de material, tendo então índice de refração constante e diâmetro variável. Os raios de luz refletem no revestimento em vários ângulos, resultando em comprimentos de caminhos diferentes para o sinal. Isto causa o espalhamento do sinal ao longo do cabo e limita a largura de banda do cabo.

Este fenômeno é chamado de dispersão modal. A atenuação é alta, fazendo com que essas fibras sejam utilizadas em transmissão de dados em curtas distâncias e iluminação.

- Banda: até 35 Mhz.km
- Núcleo: entre 50 e 400 mm
- Atenuação: maior que 5 dB/km

### Multímodo Refração Gradual

Neste tipo de fibra óptica, a interface entre o núcleo e o revestimento é alterada para propiciar índices de refração diferentes dentro do núcleo e do revestimento. Os sinais luminosos viajam no eixo do cabo encontrando uma grande refração, tendo uma velocidade de transmissão baixa. Os raios que viajam na mesma direção do cabo tem um índice de refração menor e são propagados mais rapidamente. Com isso, todos os modos do sinal poderão viajar a uma mesma velocidade efetiva no cabo, de maneira a reduzir a dispersão modal. É normalmente empregada nas telecomunicações.

- Banda: até 500 Mhz.km
- Núcleo:entre 125 e 50 mm
- Atenuação: 3 dB/km

### Monomodo

Com um diâmetro de núcleo diminuto, o índice núcleo/revestimento
permite que apenas um modo seja propagado através da fibra, o que diminui a dispersão do pulso luminoso. A emissão de sinais em fibras do tipo monomodo só é possível com a utilização de laser. Contudo, o equipamento como um todo é mais caro que o dos sistemas multimodo. Esse tipo de fibra possui grande emprego em sistemas telefônicos.

- Banda: até 100 GHz.km
- Núcleo: 8 micrômetros (μm)
- Atenuação: entre 0,2 dB/km e 0,7 dB/km

## Tabela comparativa de cabos

tabela comparativa entre três tipos de cabos de rede mais comuns:

| Característica                  | Cabo Coaxial   | Cabo UTP      | Cabo STP    | Cabo de Fibra Óptica |
| ------------------------------- | -------------- | ------------- | ----------- | -------------------- |
| Material do condutor            | Cobre          | Cobre         | Cobre       | Vidro ou plástico    |
| Blindagem                       | Blindado       | Sem blindagem | Blindado    | Sem blindagem        |
| Interferência eletromagnética   | Resistente     | Suscetível    | Resistente  | Resistente           |
| Largura de banda                | Até 100 Mbps   | Até 10 Gbps   | Até 10 Gbps | Mais de 10 Gbps      |
| Distância máxima de transmissão | Até 500 metros | 100 metros    | 100 metros  | Mais de 10 km        |
| Preço                           | Mais barato    | Mais barato   | Mais caro   | Mais caro            |

O cabo UTP (Unshielded Twisted Pair) é o mais comum, pois é mais barato e é capaz de transmitir dados em alta velocidade por uma distância de até 100 metros. No entanto, ele é mais suscetível a interferências eletromagnéticas, o que pode afetar a qualidade da transmissão de dados.

O cabo STP (Shielded Twisted Pair) é uma opção mais cara, mas oferece maior proteção contra interferências eletromagnéticas. Ele também pode transmitir dados em alta velocidade por uma distância de até 100 metros.

O cabo de fibra óptica é o mais caro dos três, mas é capaz de transmitir dados a velocidades muito mais altas e por uma distância muito maior do que os cabos de cobre. Além disso, ele é resistente a interferências eletromagnéticas e é uma escolha popular para redes de longa distância e em alta velocidade, como redes de telecomunicações.

## Tabela comparativa de fibra óptica

tabela comparativa entre dois tipos de fibra óptica comumente utilizados:

| Característica                  | Fibra monomodo                                | Fibra multimodo                             |
| ------------------------------- | --------------------------------------------- | ------------------------------------------- |
| Diâmetro do núcleo              | 8-10 micrômetros                              | 50-62,5 micrômetros                         |
| Comprimento de onda de operação | 1310 nm e 1550 nm                             | 850 nm e 1300 nm                            |
| Distância máxima de transmissão | Mais de 10 km                                 | Até 550 metros                              |
| Velocidade de transmissão       | Mais de 10 Gbps                               | Até 10 Gbps                                 |
| Utilização                      | Redes de longa distância e em alta velocidade | Redes de curta distância e baixa velocidade |

A fibra monomodo tem um diâmetro de núcleo menor e é projetada para transmissões de longa distância e em alta velocidade, como em redes de telecomunicações. Já a fibra multimodo tem um diâmetro de núcleo maior e é mais adequada para redes de curta distância e baixa velocidade, como em redes locais (LANs).

A fibra monomodo também é mais cara do que a fibra multimodo, devido à sua fabricação mais complexa e aos equipamentos especiais necessários para sua instalação. No entanto, ela é capaz de suportar maiores distâncias e velocidades de transmissão, tornando-a a escolha preferida para aplicações em redes de alta velocidade.

## Transmissão via rádio

Neste tipo de transmissão utilizamos várias características físicas que as ondas de rádio podem oferecer. Elas são fáceis de serem geradas, atravessam paredes, contornam objetos, são refletidas pela atmosfera e percorrem longas distâncias. É muito útil quando se quer construir uma rede em regiões onde esticar cabos é coisa complicada, como em uma cidade cheia de prédios, ou dentro de um prédio ou em regiões montanhosas.

A desvantagem é que é preciso uma visada perfeita (sem obstáculos) para uma boa qualidade de tráfego, embora fatores como chuva, neblina, serração não influenciam a via rádio.

## Ondas infravermelhas

As ondas infravermelhas são largamente utilizadas em controles remotos, por exemplo. Uma característica importante desta onda é que ela não pode atravessar objetos sólidos. Assim pode-se construir LAN's mais seguras contra espionagem eletrônica. Contudo, essas transmissões estão limitadas a cerca de 30 metros, e possui largura de banda de até cerca de 30Mbps.

## Outros meios

As redes também podem ser construídas por outros meios, que agora estão conquistando mercado. Entre eles:

### Bluetooth

As redes Bluetooth (chamadas de rede PicoNet) tem suas vantagens e desvantagens não estão aqui. Dentre suas vantagens, está o preço bem acessível dos adaptadores Bluetooth, baixo consumo de energia, e a possibilidade de usar esses mesmos adaptadores para fazer a conexão com diversos gadgtes do dia-a-dia. Como desvantagem, a velocidade da conexão Bluetooth raramente passa de 700kb/s, o alcance é do no máximo 10 metros, e só podem ser ligados 8 acessos simultâneos.

- O Bluetooth é uma tecnologia de comunicação sem fio de curto alcance que permite a transmissão de dados entre dispositivos eletrônicos. Ele utiliza ondas de rádio de curto alcance para estabelecer uma conexão sem fio entre os dispositivos.
- Quando dois dispositivos com tecnologia Bluetooth desejam se comunicar, eles usam um processo chamado "emparelhamento". Durante o emparelhamento, os dispositivos estabelecem uma conexão criptografada e trocam informações sobre suas capacidades e funções.
- Após o emparelhamento, os dispositivos Bluetooth podem trocar dados em um modo de transmissão conhecido como "conexão ponto a ponto". Neste modo, um dispositivo envia os dados para outro dispositivo diretamente, sem a necessidade de um roteador ou outro dispositivo intermediário.
- O Bluetooth pode ser usado para conectar dispositivos de diferentes tipos, como fones de ouvido, alto-falantes, teclados, mouses, smartphones, tablets e outros dispositivos eletrônicos. Alguns dos recursos mais comuns do Bluetooth incluem a capacidade de transmitir áudio de alta qualidade, controlar dispositivos remotamente e compartilhar dados entre dispositivos.

> Além disso, a tecnologia Bluetooth também pode ser usada para criar redes de área pessoal (PANs) em que vários dispositivos podem se comunicar uns com os outros. Essas redes de área pessoal são geralmente limitadas a uma distância de cerca de 10 metros, mas podem ser estendidas com o uso de dispositivos intermediários, como roteadores ou repetidores.
{: .prompt-tip }

### PLC (Power Line Communications)

Pensando na enorme rede elétrica que já existe em todo o mundo, foi desenvolvida essa tecnologia para a transferência de dados e voz pela rede elétrica. Outra vantagem é a fácil instalação desse tipo de rede. Agora, como desvantagens, temos a quantidade de interferência que ainda existe nesse meio, e o imenso compartilhamento dele.

### USB (Cabo de rede USB)

As portas Universal Serial Bus mais conhecidas como USB, estão presentes em todos os computadores atuais, além de ser a interface mais utilizada pelos outros periféricos. Para montar uma rede via USB, é necessário um cabo especial, que possui um hardware controlador de rede, que será o responsável pela criação de uma rede virtual entre os computadores. Apesar de ter uma alta taxa de transferência, as redes USB são limitadas a conectar apenas duas máquinas.

## Referências

- [Apostila de Meios de Comunicação de Dados]({{site.data.references.apostilas.redes[0].link}})
