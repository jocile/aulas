---
title:  "Vantagens do WiFi"
author: Prof. Jocilé Serra
date: 2022-08-10 21:00:00 -0300
categories: [AULAS 2022, MEIOS DE COMUNICAÇÃO]
tags: [redes, meios]
mermaid: true
---
As Redes Sem Fio, ou Redes Wireless, onde wire significa cabo e less significa ausência.

## Tipos básicos de Redes Wireless

### Rede sem infra-estrutura

 ![Image](https://user-images.githubusercontent.com/45495068/182726164-a42adebe-5e37-448e-b270-20472e5576d7.png)

Principal topologia sem infra-estrura:
![Image](https://user-images.githubusercontent.com/45495068/182739043-dac9a65d-27f0-43a1-9356-0438df56b672.png)

Principal arquitetura sem infra-estrura:
![Image](https://user-images.githubusercontent.com/45495068/182733236-f65f6c8c-424f-46a5-b36d-d627ca8aa7a1.png)

### Rede com infra-estrutura

![Image](https://user-images.githubusercontent.com/45495068/182726119-79577611-ca9a-427b-8f29-47cbce1f7c36.png)

Principal topologia com infra-estrutura:
![Image](https://user-images.githubusercontent.com/45495068/182739095-2a528b3e-023e-4fd9-b505-b4913b84b61f.png)

Principal arquitetura com infra-estrutura:

![Image](https://user-images.githubusercontent.com/45495068/182733684-fdbb7944-6cbb-464f-a5b3-96f6728327ab.png)

## Desvantagens do WiFi

### Atenuação do sinal

À medida que vamos nos distanciando da fonte transmissora, o sinal também vai diminuindo ou atenuando. Um sinal fraco pode fazer com que a informação se perca ou se embaralhe com os ruídos gerados por outros elementos no ambiente.

Podem causar atenuação os obstáculos como:

- Paredes
- Montanhas
- Edifícios
- Aparelhos com blindagem

### Interferência eletromagnética

- Este problema também ocorre em redes cabeadas, mas ele causa danos maiores ainda nas redes sem fio.
- Vários outros aparelhos trabalham na mesma banda de frequência de algumas redes sem fio.
- Por exemplo, as redes Wi-Fi, que são as LANs sem fio, utilizam protocolos como o 802.11b, que utiliza para transmissão a faixa de frequência de 2,4GHz, que é a mesma usada por aparelhos de
telefones sem fio e fornos de microondas.
Assim é de se esperar um aparelho interfira no funcionamento do outro.
- Outro grande problema são outros roteadores nas proximidade transmitindo no mesmo canal de frequência.

### Custo de implantação

- Para implantar uma rede wireless deve-se considerar um custo maior que na implantação de uma rede cabeada, pois as placas e demais equipamentos com essa tecnologia são mais caros.
- Entretanto, a manutenção da rede sem fio custa bem menos tempo e dinheiro, se comparada a uma rede com fio.

Comparativo WiFi X cabeamento:
![Image](https://user-images.githubusercontent.com/45495068/182728957-0e06df25-90fa-456b-bda0-0fc03b285ff0.png)

## Vantagens do WiFi

### Tabela comparativa

|                         Redes | sem infra-estrutura |                       com infra-estrutura                       |
| ----------------------------: | :-----------------: | :-------------------------------------------------------------: |
| Mobilidade dentro do alcance: |      dos hosts      |                         da estação-base                         |
|                 Configuração: |  rápida e simples   |                   padronizada e centralizada                    |
|                Conectividade: |       direta        |                     através da estação base                     |
|               Escalabilidade: |  limitada ao host   | configuração padronizada  <br />hosts são conectados facilmente |
|                  Comunicação: |   entre os hosts    |                            em grupo                             |
|             Compartilhamento: |      arquivos       |                      serviços e aplicações                      |
|                        Custo: |        menor        |         maior <br /> mas dependendo do tamanho da rede          |

### Gráfico comparativo

```mermaid
flowchart TB
subgraph Vantagens do WiFi
  direction LR
  
  P{Redes WiFi  <br/>sem infra-estrutura <br/>ou com infra-estrutura} -->|Sem infra-estrutura| S(Redes Ad-hoc <br/> Bluethooth)
  S -.- S1>Mobilidade dentro do alcance <br/>Seus hosts se conectam entre si]
  S --> S2>Configuração rápida <br/>podem ser estabelecidas dinamicamente]
  S --> S3>Conectividade <br/>Conexão direta com o destino]
  S --> S4>Coordenação de equipes em campo]
  S --> S5>Tolerância à falhas: A permanente adaptação e <br/>reconfiguração das rotas permitem que <br/>perdas de conectividade entre os nós possam ser <br/> facilmente resolvidas desde que uma nova rota possa <br/> ser estabelecida]
  P --> |Com infra-estrutura| C(WiFi com <br/>estação base)
  C -.- C1>Mobilidade dentro do alcance <br/>seus hosts se conectatam a uma estação base]
  C --> C2>Escalabilidade = novos hosts recebem a configuração <br/>e são integrados à rede]
  C --> C3>Facilidade de Instalação<br/>Padronização de configuração]
  C --> C4>Facilidade de Manutenção<br/>Controle e gerenciamento centralizado]
  C --> C5>Compartilhamento de serviços e aplicações]
  C --> C6>Comunicação de grupo]
end
```

## Referência

[Apostila da disciplina de Redes de Computadores](https://educacaoprofissional.seduc.ce.gov.br/images/material_didatico/redes_de_computadores/redes_de_computadores.pdf). Secretaria da Educação do Ceará.
