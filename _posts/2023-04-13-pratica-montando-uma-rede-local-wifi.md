---
title: "Prática Montando uma rede local WiFi"
date: 2023-04-13 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, WiFi, simulador, packet tracer]
---
Exemplo de como configurar uma rede local usando um roteador Wi-Fi e alguns computadores no Packet Tracer:

1. Abra o Packet Tracer e crie uma nova topologia.
2. Adicione um roteador e quatro computadores à topologia.
3. Conecte os computadores ao roteador usando cabos Ethernet.
4. Adicione um módulo sem fio ao roteador e conecte-o à antena.
5. No modo de configuração do roteador, configure as seguintes informações:
   - Nome da rede (SSID)
   - Senha da rede
   - Tipo de criptografia sem fio (WPA2, por exemplo)
6. Configure o endereço IP do roteador, o endereço IP padrão da rede local e o gateway padrão. Por exemplo:
   - Endereço IP do roteador: 192.168.1.1
   - Endereço IP padrão da rede local: 192.168.1.0/24
   - Gateway padrão: 192.168.1.1
7. Configure as informações de rede em cada um dos quatro computadores da rede, incluindo o endereço IP, a máscara de sub-rede e o gateway padrão. Por exemplo:
   - Computador 1:
   Endereço IP: 192.168.1.2
   Máscara de sub-rede: 255.255.255.0
   Gateway padrão: 192.168.1.1
   - Computador 2:
   Endereço IP: 192.168.1.3
   Máscara de sub-rede: 255.255.255.0
   Gateway padrão: 192.168.1.1
   - Computador 3:
   Endereço IP: 192.168.1.4
   Máscara de sub-rede: 255.255.255.0
   Gateway padrão: 192.168.1.1
   - Computador 4:
   Endereço IP: 192.168.1.5
   Máscara de sub-rede: 255.255.255.0
   Gateway padrão: 192.168.1.1
8. Verifique se as configurações estão corretas e salve a topologia.
9. Execute a simulação e teste a conexão de rede entre os computadores e o roteador Wi-Fi.

## Referências

- [Simulador de redes]({% post_url 2022-08-09-simulador-de-redes %})
- [3 Formas de Configurar seu PC para uma Rede Local](https://pt.wikihow.com/Configurar-seu-PC-para-uma-Rede-Local)
