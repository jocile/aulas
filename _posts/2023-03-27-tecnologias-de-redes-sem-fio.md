---
title: "Tecnologias de redes sem fio"
date: 2023-03-27 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, conectores, WiFi]
---
As redes sem fio surgiram para promover a mobilidade e a visualização rápida dos dados, independentemente da localização do usuário, e são transmitidas pelo ar ou espaço livre, constituindo-se como meio físico para propagação de sinais eletromagnéticos.

As redes sem fio são padronizadas segundo o IEEE e divididas em quatro grandes grupos, dependendo do alcance. O texto aborda três desses grupos: WPAN, WLAN e WMAN, descrevendo suas características, protocolos e tecnologias, como o Bluetooth, Wi-Fi e WiMAX. As redes sem fio se tornaram uma alternativa ou complemento às redes cabeadas, sendo comuns em aeroportos, instituições públicas e shopping centers.

## 1. WPAN (Wireless Personal Area Network)

O WPAN é uma rede sem fio de área pessoal que permite a conexão de dispositivos pessoais em um raio curto, normalmente em uma distância de até 10 metros. Alguns exemplos de tecnologias WPAN incluem o Bluetooth e o Zigbee. O Bluetooth é uma tecnologia de comunicação sem fio que permite a transferência de dados entre dispositivos compatíveis. Ele usa a frequência de rádio de curto alcance (2,4 GHz) para conectar dispositivos móveis, como smartphones, laptops, fones de ouvido sem fio, alto-falantes, etc. O Zigbee é uma tecnologia sem fio que usa a especificação IEEE 802.15.4 para criar redes de baixa potência, baixa taxa de transmissão de dados e baixa velocidade, geralmente usada em aplicações de automação residencial e industrial.

### Tabela comparativa WPAN

Segue abaixo uma tabela comparativa entre algumas das principais tecnologias WPAN:

| Tecnologia | Alcance  | Taxa de Transferência | Frequência           | Consumo de energia | Aplicações                                                                                                             |
| ---------- | -------- | --------------------- | -------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Bluetooth  | 10 m     | 1-3 Mbps              | 2.4 GHz              | Baixo              | Fones de ouvido sem fio, alto-falantes, teclados e mouses sem fio, transferência de arquivos entre dispositivos móveis |
| ZigBee     | 10-100 m | 20-250 kbps           | 2.4 GHz, 868/915 MHz | Muito baixo        | Sensores de rede sem fio, sistemas de automação residencial, iluminação inteligente, monitoramento de energia          |
| Z-Wave     | 30-100 m | 9.6-100 kbps          | 908/916 MHz          | Baixo              | Sistemas de automação residencial, iluminação inteligente, monitoramento de energia                                    |
| NFC        | 10 cm    | 106-424 kbps          | 13.56 MHz            | Muito baixo        | Pagamento móvel, compartilhamento de informações, acesso a locais restritos                                            |
| IrDA       | 1 m      | 9.6 kbps - 16 Mbps    | Infravermelho        | Baixo              | Transmissão de dados entre dispositivos móveis, controle remoto de dispositivos                                        |

Observe que as tecnologias WPAN variam em termos de alcance, taxa de transferência, frequência de operação, consumo de energia e aplicações. Cada tecnologia é projetada para um conjunto específico de requisitos de comunicação sem fio, e cabe ao desenvolvedor escolher a tecnologia mais adequada para sua aplicação.

## 2. WLAN (Wireless Local Area Network)

As redes WLAN são redes sem fio que permitem a conexão de dispositivos a uma rede local através de um ponto de acesso sem fio (WAP) ou roteador. Eles são baseados na especificação IEEE 802.11 e são usados principalmente para conectar dispositivos em uma rede local, como computadores, smartphones, tablets, impressoras, etc. O Wi-Fi é uma das tecnologias mais populares para implementar redes WLAN. Ele permite que dispositivos sem fio se conectem à Internet ou a outras redes por meio de pontos de acesso sem fio (WAPs) ou roteadores Wi-Fi. O Wi-Fi usa a faixa de frequência de 2,4 GHz ou 5 GHz para transmitir dados sem fio.

### Tabela comparativa WLAN

Aqui está uma tabela comparativa das tecnologias WLAN mais comuns:

| Tecnologia | Frequência | Velocidade máxima | Alcance máximo | Padrão |
| ---------- | ---------- | ----------------- | -------------- | ------ |
| 802.11a    | 5 GHz      | 54 Mbps           | 30 metros      | IEEE   |
| 802.11b    | 2,4 GHz    | 11 Mbps           | 100 metros     | IEEE   |
| 802.11g    | 2,4 GHz    | 54 Mbps           | 100 metros     | IEEE   |
| 802.11n    | 2,4/5 GHz  | 600 Mbps          | 70 metros      | IEEE   |
| 802.11ac   | 5 GHz      | 1,3 Gbps          | 35 metros      | IEEE   |
| 802.11ax   | 2,4/5 GHz  | 10 Gbps           | 40 metros      | IEEE   |

Observe que a velocidade, alcance e frequência variam entre as diferentes tecnologias. Por exemplo, o 802.11b usa a frequência de 2,4 GHz e oferece uma velocidade máxima de 11 Mbps, enquanto o 802.11ax é capaz de alcançar velocidades de até 10 Gbps e usa tanto a frequência de 2,4 GHz quanto de 5 GHz. Além disso, o alcance máximo também varia, com o 802.11a oferecendo um alcance de apenas 30 metros, enquanto o 802.11n oferece um alcance máximo de 70 metros.

## 3. WMAN (Wireless Metropolitan Area Network)

O WMAN é uma rede sem fio de área metropolitana que permite a conexão de dispositivos em uma área geográfica maior do que a cobertura de uma WLAN. O WiMAX (Worldwide Interoperability for Microwave Access) é uma tecnologia de rede sem fio que pode ser usada para implementar redes WMAN. O WiMAX usa a tecnologia IEEE 802.16 para permitir a transmissão de dados em longas distâncias, geralmente em uma distância de até 30 milhas (48 km). Ele usa a faixa de frequência de 2 GHz a 11 GHz e pode oferecer taxas de transferência de dados de até 70 Mbps.

## Tabela comparativa WMAN

Aqui está uma tabela comparando as tecnologias WMAN:

| Tecnologia | Padrão      | Velocidade de Dados | Frequência  | Alcance   |
| ---------- | ----------- | ------------------- | ----------- | --------- |
| WiMAX      | IEEE 802.16 | Até 1 Gbps          | 2-66 GHz    | Até 50 km |
| LMDS       | IEEE 802.20 | Até 155 Mbps        | 28 GHz      | Até 5 km  |
| MMDS       | IEEE 802.20 | Até 50 Mbps         | 2.5-2.7 GHz | Até 10 km |

O WiMAX é a tecnologia mais popular para redes WMAN e pode fornecer velocidades de dados de até 1 Gbps em uma distância de até 50 km. O LMDS (Local Multipoint Distribution System) opera na faixa de frequência de 28 GHz e pode fornecer velocidades de dados de até 155 Mbps em uma distância de até 5 km. Já o MMDS (Multichannel Multipoint Distribution Service) opera na faixa de frequência de 2,5 a 2,7 GHz e pode fornecer velocidades de dados de até 50 Mbps em uma distância de até 10 km.

Em geral, as tecnologias WMAN têm maior alcance e velocidades de dados mais altas do que as tecnologias WPAN e WLAN, mas geralmente requerem equipamentos mais caros e complexos para serem instaladas e configuradas.

Em resumo, WPAN é uma rede sem fio de curto alcance usada para conectar dispositivos pessoais, WLAN é usada para conectar dispositivos em uma rede local e WMAN é usada para conectar dispositivos em uma área geográfica maior. As tecnologias populares incluem o Bluetooth para WPAN, o Wi-Fi para WLAN e o WiMAX para WMAN.
