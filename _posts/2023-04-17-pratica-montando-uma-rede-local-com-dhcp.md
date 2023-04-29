---
title: "Prática Montando uma rede local com servidor de DHCP"
date: 2023-04-17 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, simulador, packet tracer]
---
O servidor DHCP é responsável por atribuir endereços IP automaticamente aos dispositivos na rede, em vez de exigir que o usuário configure manualmente cada dispositivo. Isso é particularmente útil em redes maiores, onde a atribuição manual de endereços IP pode ser um processo demorado e propenso a erros.

No nosso exemplo, o servidor DHCP está configurado para atribuir endereços IP na faixa de 192.168.1.100 a 192.168.1.200. Isso significa que, quando um novo dispositivo é conectado à rede, o servidor DHCP atribuirá automaticamente um endereço IP dentro dessa faixa ao dispositivo. Além disso, o servidor DHCP também está configurado para atribuir um endereço IP para o gateway padrão (o roteador Wi-Fi) e para o servidor DNS.

Desta forma, quando um novo dispositivo é conectado à rede, ele receberá automaticamente um endereço IP, um gateway padrão e um servidor DNS. Isso torna a configuração da rede muito mais fácil e reduz o risco de erros de configuração.

## Prática

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
7. Para configurar o servidor DHCP, siga estes passos:
   - Selecione o servidor DHCP e vá para a guia "Configuração".
   - Clique em "Pool DHCP" e adicione um novo pool com o seguinte:
       - Nome do pool: pool1
       - Endereço de rede: 192.168.1.0
       - Máscara de sub-rede: 255.255.255.0
       - Gateway padrão: 192.168.1.1
       - DNS: 192.168.1.10
   - Clique em "OK" para salvar o pool DHCP.
8. Configure as informações de rede em cada um dos quatro computadores da rede para receberem a configuração por DHCP.
9. Verifique se as configurações estão corretas e salve a topologia.
10. Execute a simulação e teste a conexão de rede entre os computadores e o roteador Wi-Fi.

## Referências

- [Simulador de redes]({% post_url 2022-08-09-simulador-de-redes %})

[![Wlan com DHCP](http://img.youtube.com/vi/__lwzny9PaM/0.jpg){: w="300" h="150" }](http://www.youtube.com/watch?v=__lwzny9PaM)
