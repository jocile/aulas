---
title: "Montando uma rede local"
date: 2023-04-10 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, cabeamento, simulador, packet tracer]
---
Uma rede local é uma forma de conectar dois ou mais dispositivos, podendo eles serem ou não conectados à internet. Esse tipo de configuração é mais comum para residências que possuem dois ou mais computadores que necessitem de compartilhamento de arquivos, ou mesmo pequenas empresas. Neste artigo, vamos mostrar como configurar uma rede local em cinco passos simples.

## O Que É Rede Local?

Em termos mais simples, uma rede local é uma rede de conexão entre dispositivos em uma mesma localização, podendo ou não usar fios de conexão. A rede local LAN é configurada através de um modem ou switch e um cabo de conexão Ethernet. Este modelo de rede cabeada comporta tanto modens tradicionais com fio de fibra óptica como também rede sem fio com modem wi-fi. Com uma rede local, pode-se conectar outros dispositivos, como impressoras.

## Principais Vantagens De Se Ter Uma Rede Doméstica Em Sua Casa Ou Pequena Empresa

Ter uma rede de computadores hoje em dia é mais do que essencial para a sua casa ou empresa. Através da rede de transmissão, é possível acessar a internet de forma simples, como ler e-mails e realizar conferências. Também é possível acessar localmente outros dispositivos, basta para isso conectar um roteador com um cabo de rede. Para transmissão de dados mais complexos, serão necessários outros equipamentos, mesmo quando a rede for sem fio.

## Passo A Passo Para Configurar Uma Rede Local

Antes de começar a configurar sua rede, verifique a necessidade de utilização para analisar o material que será adquirido. Conte quantos computadores serão interligados à rede para saber a quantidade de portas do roteador. Caso sejam necessários mais de quatro computadores, será necessário utilizar um switch, porém os switches não permitem conexões de rede sem fio. Os switches também podem auxiliar no complemento do tamanho dos cabos, que não poderão ultrapassar 10m.

### 1. Reúna Todo O Equipamento Necessário Para Configurar Uma Rede

- Switch de rede
- Roteador, preferencialmente sem fio, e deixe-o próximo do modem. O roteador oferece automaticamente um endereço IP para cada dispositivo conectado. Caso a sua rede não possua conexão com a internet, não será necessário ligar a porta WAN.

### 2. Configure A Sua Rede

O ideal é escolher uma rede padrão para todos os dispositivos, preferencialmente N, e os cabos Ethernet de melhor desempenho, os Cat5e ou superiores, que são ideais para transferência de arquivos multimídia ou streaming.

### 3. Teste A Rede

Depois de conectar todos os fios, faça a conexão nos seus computadores. O endereço IP de cada um se conectará automaticamente. Configure o compartilhamento de arquivos e impressoras. Adicione arquivos e comece a acessar. Ao compartilhar, você poderá compartilhar somente leitura, como também leitura e modificação. Não se esqueça de criar uma senha forte.

### 4. Gerencie Grupos Domésticos E Servidores

No Windows 10, opção painel de controle>rede e internet>escolher grupos domésticos>opções

## Prática no simulador

Para ilustrar melhor os passos para configurar uma rede local, podemos utilizar o simulador Packet Tracer da Cisco. Esse software é uma ferramenta útil para simular redes de computadores e realizar testes de configuração.

Para montar uma rede local básica no Packet Tracer, precisamos seguir alguns passos:

1. Primeiramente, vamos adicionar os dispositivos necessários para a rede, como um roteador, um switch e dois computadores. Para isso, basta selecionar os dispositivos na barra lateral esquerda e arrastá-los para a tela principal do simulador.
2. Em seguida, vamos conectar o roteador e o switch com um cabo de rede. Para fazer isso, basta selecionar o cabo de rede na barra lateral esquerda e clicar no roteador e no switch para criar a conexão.
3. Agora, vamos configurar o roteador para que ele possa atribuir endereços IP aos computadores da rede. Para fazer isso, basta clicar no roteador e abrir a janela de configurações. Na aba "Configuração de interface", podemos atribuir um endereço IP à interface do roteador que está conectada ao switch. Por exemplo, podemos atribuir o endereço IP 192.168.1.1/24 à interface.
4. Em seguida, vamos configurar os computadores para que eles possam se conectar à rede. Para isso, basta clicar em um dos computadores e abrir a janela de configurações de rede. Na aba "Configuração de interface", podemos selecionar a opção "Obter um endereço IP automaticamente" para que o computador receba um endereço IP do roteador.
5. Por fim, vamos testar a conexão entre os computadores da rede. Para isso, podemos abrir um prompt de comando em um dos computadores e executar o comando "ping" seguido do endereço IP do outro computador. Se a conexão estiver funcionando corretamente, devemos receber uma resposta do outro computador.

> É importante ressaltar que essa é uma configuração básica de rede local e que existem muitas outras possibilidades de configuração e dispositivos que podem ser adicionados à rede. Além disso, é sempre importante seguir boas práticas de segurança, como utilizar senhas fortes e manter os dispositivos da rede atualizados.
{: .prompt-info }

## Referências

[Como Configurar Uma Rede Local Em 5 Passos Simples](https://dominandoredes.com.br/como-configurar-uma-rede-local-em-5-passos/)

| Vídeos                                                                                                                                        | descrição                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [![REDE SIMPLES](http://img.youtube.com/vi/kqIcuZRfLfc/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=kqIcuZRfLfc)]                | [COMO CRIAR UMA REDE SIMPLES ENTRE 2 COMPUTADORES](https://www.youtube.com/watch?v=kqIcuZRfLfc)                    |
| [![Configurando uma Rede Local](http://img.youtube.com/vi/BgYPJn6KS78/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=BgYPJn6KS78)] | [Webinar Packet Tracer - Parte 1 - Configurando uma Rede Local (LAN)](https://www.youtube.com/watch?v=BgYPJn6KS78) |
