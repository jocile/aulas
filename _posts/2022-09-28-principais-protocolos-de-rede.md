---
title:  "Principais protocolos de rede"
author: Prof. Jocilé Serra
date: 2022-09-28 15:00:00 -0300
categories: [AULAS, MEIOS DE COMUNICAÇÃO]
tags: [redes, meios, simulador, protocolos, práticas]
---
Roteiro de práticas no simulador de redes Packet Tracer.

Todas as práticas seguem os cursos oficiais da Cisco Network Academy, que estão disponíveis na plataforma [Skills for all](https://skillsforall.com/), elas contêm vídeos e tutoriais que estão em inglês e podem ser traduzidas com a [extenção Google tradutor do Chrome](https://canaltech.com.br/utilitarios/conheca-a-extensao-do-google-tradutor-para-o-chrome/).

## Objetivos

 Este curso mostra como conectar e configurar dispositivos finais em uma rede local, utilizando os principais protocolos de rede.

## Conceitos básicos

* Host = dispositivo conectado na rede;
* Endereço MAC = endereço único de placa de rede do host
* Endereço IP = número de endereçamento atribuído a um Host;
* Sub-rede = parcela de uma rede;
* Máscara = número de 32 bits que separa rede de host;
* Relação = conexão de rede.
* Encapsulamento = processo que coloca um formato de mensagem em outro formato.
* Servidor DHCP = fornece automaticamente endereçamento IP atribuído a um Host.
* Protocolo NAT = traduz o endereço IP em outro IP local.
* Gateway = endereço IP do roteador de entrada e saída da rede para ligação a outras redes.

## Protocolo de Internet IP v4

* É formado por 32 bits binários;
* Separado por 4 octetos (1 octeto = 8bits);
* Cada octeto é convertido em decimal;
* Cada octeto é separado por ponto;
* O valor máximo de cada octeto é 255.

      Ex. 172.16.81.100

## Protocolo DHCP

Os endereços IPv4 podem ser atribuídos estática ou dinamicamente.

Com uma atribuição estática, o administrador de rede deve configurar manualmente as informações da rede para um host. No mínimo, isso inclui o seguinte:

* Endereço IP– Identifica o computador na rede.
* Máscara de Sub-rede - Identifica a rede à qual o host está conectado
* Gateway padrão – Identifica o dispositivo de rede que o host usa para acessar a Internet ou outra rede remota.

O protocolo DHCP fornece um mecanismo para atribuição automática de informações de endereçamento.

![Image](https://user-images.githubusercontent.com/45495068/191833457-62cdf02f-8f67-40ce-b722-8393e596c453.png)

## Iniciando a atividade no Simulador de redes

1. Acesse o catálogo de cursos na [plataforma Skills for all](https://skillsforall.com/) e selecione o curso: Networking Basics(Noções básicas de rede);
2. Selecione o idioma clicando no ícone do globo na parte superior da página.

> Caso ainda não tenha o Packet Tracer acesse a área de [recursos de aprendizagem da plataforma](https://skillsforall.com/resources/lab-downloads?userLang=pt-BR) para instalá-lo.

## Módulo 11.2.3: Configuração do DHCP

Nesta atividade do Packet Tracer, você concluirá os seguintes objetivos:

1. Acesse o catálogo de cursos na [plataforma Skills for all](https://skillsforall.com/) e selecione o curso: Networking Basics (Noções básicas de rede);
1. Selecione o ítem 11.2.3: Packet Tracer - Configuração do DHCP em um Roteador Wireless (sem fio);
1. Faça do download do [arquivo](https://contenthub.netacad.com/sgp/nb/1.0/en-US/m11/course/pt-BR/assets/11.2.3--packet-tracer---configure-dhcp-on-a-wireless-router.pka) e abra-o no Packet Tracer;
1. Realize as atividades conforme as instruções que acompanham o arquivo:
   * Conectar 3 PCs a um roteador wireless (sem fio)
   * Alterar a configuração do DHCP para uma faixa de rede específica
   * Configurar os clientes para obter seus endereços por DHCP

## Módulo 12.2.2: Examinando o NAT

Nesta atividade do Packet Tracer, você concluirá os seguintes objetivos:

1. Acesse o catálogo de cursos na [plataforma Skills for all](https://skillsforall.com/) e selecione o curso: Networking Basics (Noções básicas de rede);
1. Selecione o ítem 11.2.2: Packet Tracer - Examinando o NAT em um roteador sem fio;
1. Faça do download do [arquivo](https://contenthub.netacad.com/sgp/nb/1.0/en-US/m12/course/pt-BR/assets/12.2.2--packet-tracer---examine-nat-on-a-wireless-router.pka) e abra-o no Packet Tracer;
1. Realize as atividades conforme as instruções que acompanham o arquivo:
   * Examinar a configuração da NAT em um roteador sem fio
   * Configurar 4 PCs para que se conectem a um roteador sem fio com DHCP
   * Examinar o tráfego que cruza a rede usando NAT

## Referências

* [Simulador de redes]({% post_url 2022-08-09-simulador-de-redes %})
* [Curso Conceitos Básicos de Redes - Cisco Skills for all](https://skillsforall.com/course/networking-basics?userLang=pt-BR)
* [Paket Tracer BR download](https://skillsforall.com/resources/lab-downloads?userLang=pt-BR)
* [Extenção Google tradutor do Chrome](https://canaltech.com.br/utilitarios/conheca-a-extensao-do-google-tradutor-para-o-chrome/).
