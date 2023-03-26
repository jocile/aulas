---
title:  "Tipos de Arduino"
date: 2023-02-27 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, programação]
---
O Arduino é uma empresa italiana de tecnologia que tem como objetivo facilitar o estudo eletrônico, principalmente para quem está começando. Ela renovou a indústria de desenvolvimento de hardware pessoal em todo o mundo e ajudou no crescimento do movimento maker.

## A placa do Arduino

![arduino-descricao]({{site.data.images.arduino-descricao.link}})
_{{site.data.images.arduino-descricao.caption}}_

Componentes:

1 - Conector USB para o cabo tipo AB
2 - Botão de reset
3 - Pinos de entrada e saída digital e PWM
4 - LED verde de placa ligada
5 - LED laranja conectado ao pin13
6 - ATmega encarregado da comunicação com o computador
7 - LED TX (transmissor) e RX (receptor) da comunicação serial
8 - Porta ICSP para programação serial
9 - Microcontrolador ATmega 328, cérebro do Arduino
10 - Cristal de quartzo 16Mhz
11 - Regulador de voltagem
12 - Conector fêmea 2,1mm com centro positivo
13 - Pinos de voltagem e terra
14 - Entradas analógicas

## Tipos de placas do Arduino

![arduino-tipos]({{site.data.images.arduino-tipos.link}})
_{{site.data.images.arduino-tipos.caption}}_

- Arduino Uno: é a placa mais comum e popular do Arduino. Possui 14 pinos digitais, 6 pinos analógicos, um microcontrolador ATMega328P e um conector USB para programação.
- Arduino Mega: possui 54 pinos digitais e 16 pinos analógicos, tornando-o mais adequado para projetos maiores e mais complexos.
- Arduino Leonardo: é semelhante ao Arduino Uno, mas possui um microcontrolador ATMega32u4 que permite que ele seja programado como um dispositivo USB HID (Human Interface Device).
- Arduino Due: possui um microcontrolador ARM Cortex-M3 mais poderoso e uma arquitetura de 32 bits, tornando-o adequado para projetos mais avançados que requerem alta velocidade de processamento.
- Arduino Nano: é uma versão menor e mais compacta do Arduino Uno, tornando-o ideal para projetos com restrições de espaço.
- Arduino Pro Mini: é uma versão ainda menor e mais simplificada do Arduino Uno, projetado para ser usado em projetos permanentes onde o tamanho é crítico.
- Arduino Lilypad: é projetado especificamente para projetos wearable (vestíveis), como roupas e acessórios, e possui uma forma circular e conexões para sensores e atuadores.
- Arduino Yun: combina um microcontrolador Arduino com uma placa de processamento baseada em Linux, permitindo que ele se conecte facilmente à Internet e execute tarefas mais complexas.

## Shields para Arduino

Um shield é uma placa que permite expandir as funcionalidades originais do Arduino. Alguns exemplos:

![arduino-shields]({{site.data.images.arduino-shields.link}})
_{{site.data.images.arduino-shields.caption}}_

Os shields são placas de expansão que se conectam ao Arduino, permitindo que ele se comunique com outros dispositivos, adicionando funcionalidades e recursos adicionais. Existem diversos tipos de shields disponíveis para o Arduino, cada um com uma finalidade específica. A seguir, descreverei alguns dos principais shields do Arduino:

- Shield Ethernet: este shield permite que o Arduino se conecte a uma rede Ethernet com fio. Ele inclui um chip Ethernet embutido e suporta velocidades de até 10 Mbps. Com este shield, é possível criar projetos que se conectem à Internet e enviem dados para servidores remotos ou recebam informações de dispositivos conectados à rede.
- Motor Shield: este shield permite que o Arduino controle motores DC e motores de passo. Ele inclui duas pontes H (H-bridge) que permitem controlar a direção e a velocidade de até quatro motores DC ou dois motores de passo. Com este shield, é possível criar projetos de robótica, automação e controle de motores.
- Shield Wi-Fi: este shield permite que o Arduino se conecte a uma rede Wi-Fi. Ele inclui um módulo Wi-Fi embutido e suporta protocolos como HTTP, FTP, TCP e UDP. Com este shield, é possível criar projetos que se conectem à Internet sem fio e enviem ou recebam dados de servidores remotos ou outros dispositivos conectados à rede.
- Shield de relés: este shield permite que o Arduino controle até 8 relés de alta potência. Com ele, é possível criar projetos que controlem equipamentos elétricos de alta potência, como lâmpadas, motores e aquecedores.
- Protoshield: este shield é uma placa de circuito impresso sem componentes eletrônicos, que permite criar projetos personalizados com o Arduino. Ele tem uma área de prototipagem onde é possível soldar componentes e criar circuitos personalizados para interagir com o Arduino.
- Shield Host USB: este shield permite que o Arduino se comunique com dispositivos USB, como câmeras, teclados, mouses e outros. Ele inclui uma porta USB host que suporta dispositivos USB 1.1 e 2.0.
- Shield DOF: este shield contém um sensor de orientação e movimento de 9 eixos (3 eixos de aceleração, 3 eixos de giroscópio e 3 eixos de campo magnético), permitindo que o Arduino detecte a orientação e movimento do dispositivo em que está instalado.
- Shield GPS: este shield contém um receptor GPS embutido, permitindo que o Arduino obtenha informações de localização precisas. Ele pode ser usado em projetos que requerem monitoramento de localização, como rastreamento de veículos, navegação e geolocalização.
- Shield GSM: este shield permite que o Arduino se comunique com a rede celular, permitindo enviar e receber mensagens SMS e fazer chamadas telefônicas. Ele inclui um módulo GSM embutido que suporta várias bandas de frequência e protocolos de comunicação.
- Shield MP3 Player: este shield permite que o Arduino reproduza arquivos de áudio MP3 de um cartão SD. Ele inclui um decodificador de MP3 embutido e um amplificador de áudio, permitindo criar projetos que reproduzam músicas, efeitos sonoros
- GPS Shield: Como o nome sugere, o GPS Shield é usado para adicionar recursos de GPS aos projetos do Arduino. Este shield permite que você se conecte a satélites GPS e obtenha informações de localização e tempo precisas. Ele é compatível com o Arduino Uno e Mega, e tem um conector para uma antena externa.
- GSM Shield: O GSM Shield é uma placa que permite ao Arduino se comunicar com redes de telefonia celular. Ele usa um módulo de comunicação GSM/GPRS SIM900 para conectar-se a redes de telefonia celular, permitindo que você envie e receba mensagens de texto, faça e receba chamadas e acesse a internet em projetos com o Arduino.
- MP3 Player Shield: O MP3 Player Shield permite que o Arduino reproduza arquivos de áudio em formato MP3. Ele usa o chip VS1053B para decodificar arquivos MP3 e tem um slot para cartão SD para armazenamento de arquivos de áudio. O shield tem um conector para fones de ouvido e um amplificador de áudio embutido.
- XBee Shield: O XBee Shield é um shield de comunicação sem fio baseado no módulo XBee da Digi. Ele permite que o Arduino se comunique com outros dispositivos usando a tecnologia Zigbee, uma rede de comunicação sem fio de baixa potência que é adequada para aplicações de IoT.
- Wireless SD Shield: O Wireless SD Shield é um shield que combina comunicação sem fio e armazenamento de dados em um único dispositivo. Ele tem um slot para cartão SD para armazenamento de dados e usa o módulo de comunicação sem fio NRF24L01 para se conectar a outros dispositivos sem fio.

Cada shield é projetado para adicionar funcionalidades específicas aos projetos do Arduino, tornando-os mais versáteis e poderosos. Os shields são plug and play, o que significa que você pode facilmente conectá-los ao seu Arduino e começar a usá-los imediatamente. Além disso, muitos shields são empilháveis, o que significa que você pode usar vários shields ao mesmo tempo para obter mais recursos.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})