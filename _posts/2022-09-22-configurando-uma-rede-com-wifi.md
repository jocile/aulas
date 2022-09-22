---
title:  "Configurando uma rede com WiFi"
author: Prof. Jocilé Serra
date: 2022-09-22 15:00:00 -0300
categories: [AULAS, MEIOS DE COMUNICAÇÃO]
tags: [redes, meios, simulador, wifi, práticas]
---
Roteiro de práticas no simulador de redes Packet Tracer.

Todas as práticas seguem os cursos oficiais da Cisco Network Academy, que estão disponíveis na plataforma [Skills for all](https://skillsforall.com/), elas contêm vídeos e tutoriais que estão em inglês e podem ser traduzidas com a [extenção Google tradutor do Chrome](https://canaltech.com.br/utilitarios/conheca-a-extensao-do-google-tradutor-para-o-chrome/).

## Objetivos

 Este curso mostra como conectar e configurar dispositivos finais em uma rede local, incluindo: uma smart tv, computadores desktop e notebook, e como verificar sua conectividade. Você aprenderá sobre como configurar um roteador WiFi, a segurança de acesso e o endereçamento de conexão com um servidor web.

## Iniciando

1. Acesse o catálogo de cursos na [plataforma Skills for all](https://skillsforall.com/) e selecione o curso: Networking Basics: Build a Home Network (Noções básicas de rede: Construa uma rede doméstica);
1. Selecione o idioma clicando no ícone do globo na parte superior da página.

> Caso ainda não tenha o Packet Tracer acesse a área de [recursos de aprendizagem da plataforma](https://skillsforall.com/resources/lab-downloads?userLang=pt-BR) para instalá-lo.

## Módulo 4.4: Configurar um roteador doméstico

![Image](https://user-images.githubusercontent.com/45495068/191833972-cf5b36fb-8919-4362-992f-599a6e7fa7a7.png)

Muitos roteadores sem fio projetados para uso doméstico têm um utilitário de configuração automática que pode ser usado para definir as configurações básicas do roteador. Esses utilitários geralmente exigem que um PC ou laptop seja conectado a uma porta com fio no roteador. Se nenhum dispositivo estiver disponível com conexão com fio, pode ser necessário configurar primeiro o software cliente sem fio no laptop ou tablet.

### Conectando o cabeamento ao roteador

Para se conectar ao roteador usando uma conexão com fio, conecte um cabo de rede Ethernet na porta de rede do computador. Conecte a outra extremidade a uma porta LAN no roteador. Não conecte o cabo à porta ou interface identificada como “Internet”, pois esta se conectará ao modem de fibra óptica ou a cabo que liga ao provedor de internet. Alguns roteadores domésticos podem ter um modem embutido para estas conexões com a Internet. Se este for o caso, verifique se o tipo de conexão está correto para o seu serviço de internet. Uma conexão de modem a cabo terá um terminal coaxial para aceitar um conector do tipo BNC. Uma conexão DSL terá uma porta para um cabo tipo telefone, geralmente um conector RJ-11.

### Configurando o endereçamento

Depois de confirmar que o computador está conectado ao roteador de rede e as luzes de link na NIC indicam que a conexão está funcionando, o computador precisa de um endereço IP. A maioria dos roteadores de rede são configurados para que o computador receba um endereço IP automaticamente de um servidor DHCP local configurado automaticamente no roteador sem fio. Se o computador não tiver um endereço IP, verifique a documentação do roteador e configure o PC ou tablet com um endereço IP exclusivo, máscara de sub-rede, gateway padrão e informações de DNS.

### Configurando a rede local WiFi

![Image](https://user-images.githubusercontent.com/45495068/191833457-62cdf02f-8f67-40ce-b722-8393e596c453.png)

Para configurar a rede WiFi será necessário acessar o utilitário de configuração do roteador por meio de um navegador da Web, e definir os seguintes parâmetros:

1. SSID - como a rede será chamada;
1. Que tipos de dispositivos serão anexados à minha rede?  
     - Os dispositivos sem fio contêm transmissores/receptores de rádio que funcionam dentro de uma faixa de frequência específica. Se um dispositivo tiver apenas o rádio necessário para 802.11 b/g, ele não se conectará se o roteador ou ponto de acesso sem fio estiver configurado para aceitar apenas os padrões 802.11n ou 802.11ac. Se todos os dispositivos suportarem o mesmo padrão, a rede funcionará em sua velocidade ideal.  
     - Se você tiver dispositivos que não suportam os padrões n ou ac, será necessário habilitar o modo legado. Um ambiente de rede sem fio de modo legado varia entre os modelos de roteador, mas pode incluir uma combinação de 802.11a, 802.11b, 802.11g, 802.11n e 802.11ac.
1. Definir um canal livre:
     - Se na vizinhança existem outros roteadores devemos usar um scanner de canais para verificar um canal livre e evitar interferência, roteadores moderno fazem esta procura automaticamente, um exemplo de software scanner é o [Ubiquiti WiFiman](https://wifiman.com/).
1. Definir a segurança de acesso:
     - Configurar o usário e senha;
     - Configurar o tipo de criptografia da senha;
     - Mudar a senha de administrador do roteador
1. Definir o endereçamento IP da rede local
1. Configurar o acesso ao provedor de internet
1. Verificar a conectividade.

### Atividade no Packet Tracer

![Image](https://user-images.githubusercontent.com/45495068/191834652-5f67cafb-9ac9-418c-9ac7-4c6ac5c28410.png)

Nesta atividade do Packet Tracer, você concluirá os seguintes objetivos:

1. Acesse o catálogo de cursos na [plataforma Skills for all](https://skillsforall.com/) e selecione o curso: Networking Basics: Build a Home Network (Noções básicas de rede: Construa uma rede doméstica);
1. Selecione o ítem 4.4.4: Packet Tracer - Configurar um roteador e cliente sem fio;
1. Faça do download do [arquivo](https://contenthub.netacad.com/sgp/nb/1.0/en-US/m4/course/pt-BR/assets/4.4.4-packet-tracer---configure-a-wireless-router-and-clients.pka) e abra-o no Packet Tracer;
1. Realize as atividades conforme as instruções que acompanham o arquivo:
   - Parte 1: Conecte os dispositivos
   - Parte 2: Configurar o roteador sem fio
   - Parte 3: Configurar o endereçamento IP e testar a conectividade

## Referências

- [Simulador de redes]({% post_url 2022-08-09-simulador-de-redes %})
- [Curso Conceitos Básicos de Redes - Cisco Skills for all](https://skillsforall.com/course/networking-basics?userLang=pt-BR)
- [Paket Tracer BR download](https://skillsforall.com/resources/lab-downloads?userLang=pt-BR)
- [Extenção Google tradutor do Chrome](https://canaltech.com.br/utilitarios/conheca-a-extensao-do-google-tradutor-para-o-chrome/).
