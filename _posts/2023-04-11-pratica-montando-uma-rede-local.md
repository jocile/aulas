---
title: "Prática Montando uma rede local"
date: 2023-04-11 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, cabeamento, simulador, packet tracer]
---
Exemplo de prática de configuração de uma rede local usando o simulador Packet Tracer, vamos incluir mais dispositivos. Neste cenário, teremos 4 computadores, 1 impressora, 1 switch e 1 roteador.

1. Abra o Packet Tracer e selecione o ícone "Switch" na barra de ferramentas à esquerda. Arraste o ícone para a área de trabalho.
2. Selecione o ícone "Computador" e arraste 4 instâncias do ícone para a área de trabalho.
3. Selecione o ícone "Impressora" e arraste-o para a área de trabalho.
4. Selecione o ícone "Router" e arraste-o para a área de trabalho.
5. Conecte os computadores e a impressora ao switch arrastando uma linha de conexão de cada dispositivo para o switch.
6. Conecte o switch ao roteador arrastando uma linha de conexão do switch para o roteador.
7. Clique duas vezes no switch para abrir a janela de configuração do dispositivo. Na guia "Configuração", renomeie o switch para "Switch1".
8. Clique duas vezes no roteador para abrir a janela de configuração do dispositivo. Na guia "Configuração", renomeie o roteador para "Roteador1".
9. Clique duas vezes em cada um dos computadores e na impressora para abrir a janela de configuração do dispositivo. Na guia "Configuração", insira um nome para cada dispositivo, como "PC1", "PC2", "PC3", "PC4" e "Impressora1".
10. Na guia "Configuração" do roteador, insira um nome para a interface "FastEthernet0/0", como "Switch1".
11. Na guia "Configuração" do roteador, insira um endereço IP e uma máscara de sub-rede para a interface "FastEthernet0/0". Use um endereço IP que esteja na mesma faixa que os endereços IP dos computadores e da impressora. Por exemplo, se os endereços IP dos computadores e da impressora forem 192.168.1.1 a 192.168.1.4, use o endereço IP 192.168.1.5 e a máscara de sub-rede 255.255.255.0.
12. Na guia "Configuração" do switch, selecione a opção "Configurar VLAN" e crie duas VLANs: uma para os computadores e outra para a impressora.
13. Na guia "Configuração" do switch, atribua a porta 1 à VLAN dos computadores e a porta 2 à VLAN da impressora.
14. Na guia "Configuração" do roteador, configure a interface "FastEthernet0/0" para ser a porta de entrada da rede local.
15. Na guia "Configuração" do roteador, configure a interface "Serial0/0/0" para ser a porta de saída da rede WAN (internet). Você precisará inserir as informações fornecidas pelo seu provedor de internet para configurar essa interface corretamente.
16. Salve as configurações de todos os dispositivos.

Agora, a rede local está configurada e pronta para ser usada. Os computadores e a impressora estão conectados ao switch.

## Referências

[Simulador de redes]({% post_url 2022-08-09-simulador-de-redes %})
