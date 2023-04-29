---
title: "Prática Montando uma rede local com servidores"
date: 2023-04-18 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, simulador, packet tracer]
---
Para realizar uma prática de configuração de uma rede com alguns computadores, um servidor DNS, DHCP e HTTP no simulador Packet Tracer, você pode seguir os seguintes passos:

Passo 1: Abra o Packet Tracer e crie uma nova topologia.

Passo 2: Adicione os seguintes dispositivos: 1 switch, 1 roteador, 1 servidor DNS, 1 servidor DHCP e 3 computadores.

Passo 3: Conecte os dispositivos conforme a imagem abaixo:

Passo 4: Configure o endereço IP e a máscara de sub-rede para cada dispositivo, como mostrado abaixo:

- Roteador: 192.168.1.1/24
- Servidor DNS: 192.168.1.10/24
- Servidor DHCP: 192.168.1.20/24
- Computador 1: 192.168.1.100/24
- Computador 2: 192.168.1.101/24
- Computador 3: 192.168.1.102/24

Passo 5: Configure o servidor DHCP com o pool de endereços IP e o gateway padrão. Para isso, siga os seguintes passos:

a) Clique no servidor DHCP e selecione a guia Configuração.

b) Clique no botão Adicionar para criar um novo pool de endereços IP.

c) Digite as informações abaixo:

- Nome do Pool: Pool_DHCP
- Endereço Inicial: 192.168.1.100
- Endereço Final: 192.168.1.200
- Máscara de Sub-Rede: 255.255.255.0
- Gateway Padrão: 192.168.1.1

d) Clique em OK para salvar as configurações.

Passo 6: Configure o servidor DNS com o nome de domínio e o endereço IP. Para isso, siga os seguintes passos:

a) Clique no servidor DNS e selecione a guia Configuração.

b) Digite as informações abaixo:

- Nome de Domínio: empresa.local
- Endereço IP: 192.168.1.10

c) Clique em OK para salvar as configurações.

Passo 7: Configure os computadores com o endereço IP, a máscara de sub-rede, o gateway padrão, o servidor DNS e o servidor HTTP. Para isso, siga os seguintes passos:

a) Clique em cada computador e selecione a guia Configuração.

b) Digite as informações abaixo:

- Endereço IP: 192.168.1.100 (para o Computador 1), 192.168.1.101 (para o Computador 2) e 192.168.1.102 (para o Computador 3).
- Máscara de Sub-Rede: 255.255.255.0
- Gateway Padrão: 192.168.1.1
- Servidor DNS: 192.168.1.10
- Servidor HTTP: 192.168.1.20

c) Clique em OK para salvar as configurações.

Passo 8: Verifique se as configurações estão corretas. Para isso, abra o prompt de comando em cada computador e execute o comando "ipconfig /a”

Passo 8: Verifique se as configurações estão corretas. Para isso, abra o prompt de comando em cada computador e execute o comando "ipconfig /all". Isso mostrará todas as informações de rede do computador, incluindo o endereço IP, a máscara de sub-rede, o gateway padrão, o servidor DNS e o servidor HTTP.

Passo 9: Configure o servidor HTTP para hospedar um site simples. Para isso, siga os seguintes passos:

a) Clique no servidor HTTP e selecione a guia Configuração.

b) Clique no botão Adicionar para criar um novo site.

c) Digite as informações abaixo:

- Nome do Site: MeuSite
- Diretório Raiz: C:\MeuSite

d) Clique em OK para salvar as configurações.

e) Crie um arquivo index.html dentro da pasta C:\MeuSite com algum conteúdo.

Passo 10: Verifique se o site está funcionando corretamente. Para isso, abra um navegador em um dos computadores e digite o endereço IP do servidor HTTP na barra de endereço (por exemplo, [http://192.168.1.20/MeuSite](http://192.168.1.20/MeuSite)). O site deve ser exibido corretamente no navegador.

Pronto! Agora você configurou uma rede com alguns computadores, um servidor DNS, DHCP e HTTP no simulador Packet Tracer e verificou que tudo está funcionando corretamente.

## Referências

- [Simulador de redes]({% post_url 2022-08-09-simulador-de-redes %})

[![Servidores](http://img.youtube.com/vi/U2Z61gkYoFs/0.jpg){: w="300" h="150" }](http://www.youtube.com/watch?v=__lwzny9PaM)
