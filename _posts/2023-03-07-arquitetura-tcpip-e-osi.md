---
title: "Arquitetura OSI e TCP-IP"
date: 2023-03-07 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, protocolos]
---
A arquitetura TCP/IP e a arquitetura OSI são dois modelos de referência para comunicações em rede que foram desenvolvidos por diferentes organizações e em diferentes momentos.

A arquitetura TCP/IP (Transmission Control Protocol/Internet Protocol) é a base da Internet e foi desenvolvida pela DARPA (Defense Advanced Research Projects Agency) nos anos 70. Ela consiste em quatro camadas principais: camada de aplicação, camada de transporte, camada de internet e camada de acesso à rede.

A arquitetura OSI (Open Systems Interconnection) foi desenvolvida pela ISO (International Organization for Standardization) nos anos 80 e é composta por sete camadas: camada física, camada de enlace de dados, camada de rede, camada de transporte, camada de sessão, camada de apresentação e camada de aplicação.

Embora as duas arquiteturas tenham uma estrutura semelhante de camadas, a arquitetura OSI é geralmente considerada mais teórica e complexa, enquanto a arquitetura TCP/IP é mais prática e fácil de implementar. A arquitetura OSI é amplamente utilizada para fins educacionais e de padronização, enquanto a arquitetura TCP/IP é a base da Internet e é usada em todo o mundo para comunicações em rede.

## Tabela comparativa

Para ajudar a visualizar as diferenças e semelhanças entre as duas arquiteturas, segue abaixo uma tabela comparativa:

|                        | Arquitetura TCP/IP                                                                                  | Arquitetura OSI                                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Número de camadas      | 4                                                                                                   | 7                                                                                                                                                                       |
| Camadas                | Camada de aplicação,<br> camada de transporte,<br> camada de internet e<br> camada de acesso à rede | Camada de aplicação,<br> camada de apresentação,<br> camada de sessão,<br> camada de transporte,<br> camada de rede,<br> camada de enlace de dados e <br> camada física |
| Desenvolvedor          | DARPA                                                                                               | ISO                                                                                                                                                                     |
| Ano de desenvolvimento | Década de 1970                                                                                      | Década de 1980                                                                                                                                                          |
| Complexidade           | Menos complexa e mais prática                                                                       | Mais complexa e teórica                                                                                                                                                 |
| Utilização             | Base da Internet e amplamente<br> usada em todo o mundo                                             | Utilizada principalmente para<br> fins educacionais e de padronização                                                                                                   |

Em resumo, a arquitetura TCP/IP é mais enxuta e prática, tendo sido desenvolvida para atender às necessidades de comunicação da Internet, enquanto a arquitetura OSI é mais complexa e teórica, tendo sido desenvolvida para fins de padronização e educação. Ambas as arquiteturas têm uma estrutura de camadas semelhante, mas diferem no número e na nomenclatura das camadas, além de terem sido desenvolvidas por organizações diferentes em momentos diferentes.

## Tabela de camadas

segue abaixo uma tabela comparativa mais detalhada das camadas da arquitetura TCP/IP e da arquitetura OSI:

| Arquitetura TCP/IP      | Arquitetura OSI                                                             | Descrição                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Camada de Aplicação     | Camada de Aplicação ,<br> camada de apresentação,<br> camada de sessão,<br> | Fornece serviços de rede para aplicativos e serviços de usuário final, incluindo e-mail, navegação na web, transferência de arquivos e outros     |
| Camada de Transporte    | Camada de Transporte                                                        | Responsável pela transmissão confiável de dados entre dispositivos na rede, incluindo segmentação e retransmissão de pacotes, e controle de fluxo |
| Camada de Internet      | Camada de Rede                                                              | Gerencia o roteamento de pacotes de dados pela rede, incluindo a definição de endereços IP e o uso de protocolos de roteamento                    |
| Camada de Acesso à Rede | Camada de Enlace de Dados e<br> Camada Física                               | Fornece a interface entre a rede e os dispositivos conectados, incluindo a transmissão física de dados e a detecção de erros                      |

Embora a arquitetura TCP/IP tenha menos camadas do que a arquitetura OSI, as funções das camadas correspondentes em ambas as arquiteturas são semelhantes em muitos aspectos. A Camada de Aplicação, por exemplo, é responsável por fornecer serviços de rede para aplicativos e serviços de usuário final em ambas as arquiteturas, enquanto a Camada de Transporte é responsável pela transmissão confiável de dados entre dispositivos. A principal diferença é a nomenclatura e a organização das camadas, que refletem as diferenças na abordagem de desenvolvimento e no momento histórico de cada arquitetura.

## Referências

- [Apostila de Meios de Comunicação de Dados]({{site.data.references.apostilas.redes[0].link}})

Vídeos no YouTube:

[![TCP IP e a internet](http://img.youtube.com/vi/zheD2o16Lb0/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=zheD2o16Lb0)
[![As camadas TCP IP](http://img.youtube.com/vi/BTPKlSq2sCw/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=BTPKlSq2sCw)
