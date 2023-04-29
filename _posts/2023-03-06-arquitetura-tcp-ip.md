---
title: "Arquitetura TCP-IP"
date: 2023-03-06 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, protocolos]
---
Para que a comunicação ocorra na internet, é necessário seguir um conjunto de protocolos conhecido como TCP/IP, que é a base de comunicação da rede mundial de computadores. O TCP/IP é formado por várias camadas, cada uma com uma responsabilidade específica.

A camada mais baixa é a camada física, que trata da transmissão dos dados através dos meios físicos, como cabos, fibra óptica e ondas de rádio. A camada seguinte é a camada de enlace de dados, que garante a integridade dos dados transmitidos e trata da identificação dos dispositivos que se comunicam.

A camada de rede é responsável pelo roteamento dos dados através da rede, escolhendo o melhor caminho para que os dados cheguem ao seu destino. Já a camada de transporte é responsável por estabelecer a conexão entre as aplicações que estão se comunicando, garantindo que os dados sejam entregues sem erros.

Por fim, a camada de aplicação é a camada mais alta do TCP/IP, que oferece serviços de rede para as aplicações que estão rodando nos dispositivos. É nessa camada que os protocolos de aplicação, como HTTP, SMTP e FTP, são implementados.

Dessa forma, a comunicação na internet é realizada de forma hierárquica, com cada camada tendo uma responsabilidade específica. Quando um dispositivo se conecta à internet, ele segue esse conjunto de protocolos para se comunicar com outros dispositivos, permitindo a troca de informações e a realização de diversas atividades online.

| Camada         | Função                                                                                         | Protocolos                                   |
| -------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Aplicação      | Oferece serviços de rede para as aplicações que estão rodando                                  | HTTP, FTP, SMTP, SSH, DNS, Telnet, POP, IMAP |
| Transporte     | Estabelece a conexão entre as aplicações que estão se comunicando                              | TCP, UDP                                     |
| Internet       | Roteamento dos dados através da rede                                                           | IP, ICMP, IGMP                               |
| Acesso ao meio | Identifica os dispositivos que se comunicam e garante<br> a integridade dos dados transmitidos | Ethernet, Wi-Fi, Bluetooth, PPP, SLIP, ATM   |
| Física         | Trata da transmissão dos dados através dos meios físicos                                       | Cabos de cobre, fibra óptica, ondas de rádio |

Essa tabela apresenta um resumo das principais funções e protocolos de cada camada do modelo TCP/IP, ajudando a entender a estrutura da comunicação na Internet.

## Referências

- [Apostila de Meios de Comunicação de Dados]({{site.data.references.apostilas.redes[0].link}})

Vídeos no YouTube:

[![TCP IP e a internet](http://img.youtube.com/vi/zheD2o16Lb0/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=zheD2o16Lb0)
[![As camadas TCP IP](http://img.youtube.com/vi/BTPKlSq2sCw/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=BTPKlSq2sCw)
