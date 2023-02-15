---
title:  "Arquitetura de redes"
date: 2023-02-14 09:00:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [redes, infraestrutura]
---
A arquitetura de redes de computadores é composta por diversos componentes que trabalham juntos para garantir a comunicação eficiente entre dispositivos na rede.

## Componentes

1. Dispositivos de rede: Estes incluem roteadores, switches, hubs, pontes, modems, etc. Eles são responsáveis por fornecer conexão física entre dispositivos na rede e controlar o tráfego de dados.
2. Protocolos de rede: Estes são conjuntos de regras que governam a comunicação na rede. Os protocolos mais comuns são o TCP/IP, o UDP, o HTTP, o FTP, o DNS, entre outros.
3. Endereços IP: Cada dispositivo na rede tem um endereço IP único, que é usado para identificá-lo e permitir que ele seja encontrado por outros dispositivos.
4. Servidores: Estes são computadores que fornecem serviços aos dispositivos da rede, como o armazenamento de arquivos, o gerenciamento de impressoras, o gerenciamento de usuários, entre outros.
5. Segurança: É importante proteger a rede contra acesso não autorizado, invasões de segurança e outras ameaças. Para isso, são utilizadas diversas técnicas de segurança, como firewalls, criptografia, autenticação de usuários, entre outros.

## Protocolos de rede

Os protocolos de rede são regras e padrões que definem como os dispositivos na rede se comunicam entre si. Eles especificam como os dados são transmitidos, formatados e recebidos, garantindo que a comunicação seja eficiente e confiável.

Os protocolos de rede são usados em diferentes camadas da Pilha de Protocolos TCP/IP, cada um responsável por diferentes aspectos da comunicação de dados. Alguns exemplos de protocolos de rede incluem:

1. HTTP (HyperText Transfer Protocol): usado para transferir dados na Web, especificamente páginas da web e outros conteúdos da Internet.
2. FTP (File Transfer Protocol): usado para transferir arquivos entre dispositivos na rede.
3. SMTP (Simple Mail Transfer Protocol): usado para transferir e-mails entre servidores de correio eletrônico.
4. TCP (Transmission Control Protocol): responsável por garantir que os dados sejam transmitidos de maneira confiável, garantindo que todos os pacotes de dados cheguem ao destinatário na ordem correta.
5. IP (Internet Protocol): responsável por rotear pacotes de dados através da rede, identificando o destinatário e garantindo que eles cheguem ao local correto.

> A utilização de protocolos padronizados é fundamental para a interoperabilidade entre dispositivos de diferentes fabricantes e para garantir a confiabilidade e eficiência da comunicação de dados na rede.
{: .prompt-info }

## O modelo OSI

O Modelo OSI (Open Systems Interconnection) é um modelo de referência para redes de computadores, projetado para facilitar a compreensão e a interoperabilidade entre sistemas diferentes. Ele é composto por sete camadas, cada uma delas responsável por diferentes aspectos da comunicação de dados.

As sete camadas do Modelo OSI são:

1. Camada de Aplicação: é responsável por fornecer a interface para aplicações, como o navegador da Web ou o cliente de e-mail.
2. Camada de Apresentação: responsável por formatar os dados para que possam ser lidos pelas aplicações na camada de aplicação.
3. Camada de Sessão: responsável por estabelecer, gerenciar e encerrar sessões entre aplicações, garantindo que as mensagens sejam entregues corretamente.
4. Camada de Transporte: responsável por garantir a entrega confiável dos dados, independentemente da complexidade da rede.
5. Camada de Rede: responsável por rotear pacotes de dados através da rede, identificando o destinatário e garantindo que eles cheguem ao local correto.
6. Camada de Enlace de Dados: responsável por gerenciar o acesso à mídia de rede, como o cabo Ethernet ou o WiFi.
7. Camada Física: responsável por representar a física da mídia de rede, como os pinos e os sinais elétricos que transmitem os dados.

> O Modelo OSI é uma abstração do funcionamento de uma rede de computadores e é amplamente utilizado como uma ferramenta para ensinar a arquitetura de redes e para garantir a interoperabilidade entre sistemas diferentes. Embora os sistemas reais não sigam rigorosamente o Modelo OSI, ele é útil como uma forma de organizar e compreender a complexidade da comunicação de dados em redes de computadores.
{: .prompt-tip }

## O modelo TCPIP

O Modelo TCP/IP (Transmission Control Protocol/Internet Protocol) é um modelo de referência para redes de computadores que é amplamente utilizado na Internet. Ele é composto por quatro camadas, cada uma delas responsável por diferentes aspectos da comunicação de dados.

As quatro camadas do Modelo TCP/IP são:

1. Camada de Aplicação: é responsável por fornecer a interface para aplicações, como o navegador da Web ou o cliente de e-mail.
2. Camada de Transporte: responsável por garantir a entrega confiável dos dados, independentemente da complexidade da rede. O TCP (Transmission Control Protocol) é o protocolo utilizado nesta camada.
3. Camada de Rede: responsável por rotear pacotes de dados através da rede, identificando o destinatário e garantindo que eles cheguem ao local correto. O IP (Internet Protocol) é o protocolo utilizado nesta camada.
4. Camada Física: responsável por representar a física da mídia de rede, como os pinos e os sinais elétricos que transmitem os dados.

> A diferença principal entre o Modelo TCP/IP e o Modelo OSI é que o Modelo TCP/IP é mais simples e focado na interoperabilidade entre sistemas, enquanto o Modelo OSI é mais complexo e abrangente. O modelo TCP/IP é amplamente utilizado como uma forma de organizar e compreender a comunicação de dados na Internet.
{: .prompt-info }

## Referências

{% include slideshare.html
 key="1ydDPJXKAhd7B8"
 link="//www.slideshare.net/AnaJuliaFAlvesFerrei/arquitetura-de-redes-de-computadores"
 caption="Arquitetura de Redes de Computadores - Ana Julia F Alves Ferreira"
 %}

 - [Apostila de Meios de Comunicação de Dados]({{site.data.references.apostilas.redes[0].link}})
