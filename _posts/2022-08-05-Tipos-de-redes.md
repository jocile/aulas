---
title:  "Tipos de Redes de Computadores"
author: Prof. Jocilé Serra
date: 2022-08-05 15:00:00 -0300
categories: [AULAS, MEIOS DE COMUNICAÇÃO]
tags: [redes, meios]
mermaid: true
---
As redes de computadores se diferenciam em formas de transmissão, arquitetura, topologia e escopo de abrangência.

# Tipos de redes de computadores
## Tipos de Transmissão de Dados

Para que haja comunicação são necessários os seguintes elementos:

- Transmissor: é o dispositivo (computador, telefone, câmera) que envia a informação.
- Receptor: é o dispositivo a quem foi endereçada a informação. O receptor vai receber a mensagem enviada pelo transmissor.
- Mensagem: são os dados e as informações que precisam ser enviados.
- Meio: é o meio físico, ou seja, o caminho pelo qual a mensagem trafegará do transmissor até chegar ao receptor.
- Protocolo: controla o envio e recepção da mensagem e define alguns aspectos como formato da mensagem e ordem de chegada. Tanto o transmissor quanto o receptor devem estar seguindo o mesmo protocolo.

Para que a comunicação de dados obtenha sucesso ela necessita de três atributos:

- Entrega: os dados devem estar endereçados corretamente. Deve-se ter a certeza de que a informação será entregue ao destinatário correto.
- Confiabilidade: os dados devem chegar ao destino, e mais do que simplesmente chegar, os dados devem estar intactos, sem nenhum tipo de alteração e sem faltar nenhuma parte da informação.
- Controle do Atraso: o tempo que a informação possui para chegar ao destino não pode ser indeterminado. Deve haver um tempo limite para que o destinatário a receba, principalmente no caso de aplicações multimídia em tempo real como áudio e vídeo. Não seria interessante, por exemplo, ao receber um vídeo, ver primeiro as imagens e só depois ouvir o áudio.

### Taxa de transmissão

Ao se transmitir um arquivo, seja ele de que tipo for, pela rede, na realidade estão sendo transmitidos vários bits que, em conjunto, comporão o arquivo depois de processados. A taxa de transmissão de uma rede é a velocidade com a qual esses bits trafegam pelos meios de comunicação e é medida em bps (bits por segundo), ou seja, a quantidade de bits que são enviados em um segundo, portanto quanto maior a taxa de transmissão de uma rede, mais rápido o arquivo consegue ser transmitido do emissor para o receptor.

### Modos de operação

![Image](https://user-images.githubusercontent.com/45495068/182736472-99d96cd9-8f26-49c5-b69b-5a51b931767e.png)

Existem três tipos de operação na transmissão de dados: simplex, half-duplex e full-duplex. Vejamos como funciona cada uma delas:

- Simplex: a transmissão é unidirecional. Só existe um transmissor e um canal de transmissão. Quaisquer outros componentes que apareçam na comunicação serão receptores. Exemplos: televisão e radiodifusão.
- Half-duplex: a transmissão é bidirecional, ou seja, as duas partes transmitem e também são receptoras, mas, assim como no modo simplex, existe somente um canal de transmissão, portanto só é possível transmitir um por vez. Exemplo: walkie-talkie.
- Full-duplex: é o modo de transmissão mais completo, já que ambas as partes podem transmitir e receber dados simultaneamente, pois existem dois canais de transmissão. Exemplo: telefone.

## Arquitetura de redes de computadores

### REDES PONTO-A-PONTO

![Image](https://user-images.githubusercontent.com/45495068/182733236-f65f6c8c-424f-46a5-b36d-d627ca8aa7a1.png)

Existem 2 tipos fundamentais de redes. O primeiro tipo é a rede ponto-a-ponto, onde os computadores são ligados entre si para a troca de informações, porém a maioria dos recursos não pode ser compartilhada fazendo com que cada host deva possuir os próprios recursos e aplicações como um programa, por exemplo.

> HOST: Palavra inglesa que significa hospedeiro.
> Em informática, um host é um computador ou outro equipamento conectado na rede e que pode compartilhar informações, serviços e recursos.

### REDES CLIENTE-SERVIDOR

![Image](https://user-images.githubusercontent.com/45495068/182733684-fdbb7944-6cbb-464f-a5b3-96f6728327ab.png)


O segundo tipo é a arquitetura cliente-servidor, onde todos os hosts, chamados de clientes, se comunicam com uma máquina principal, chamada de servidor. O servidor provê todas as aplicações e serviços e consegue gerenciar o acesso aos recursos da rede como impressoras, por exemplo. Neste tipo de arquitetura os hosts não trocam informações entre si de uma forma direta.
Cada cliente se comunica com o servidor e este devolve respostas atendendo as requisições de cada um. Por exemplo, em um servidor de banco de dados, o cliente pode acessar a aplicação (programa) e alterar um dado. Esta alteração será feita no servidor. Caso outro cliente acesse a aplicação, ele já verá o dado alterado, pois está buscando a informação diretamente no servidor.

Normalmente um servidor é uma máquina mais robusta que as máquinas clientes, pois ela armazena e processa um grande número de informações,  além de precisar estar sempre ligada para que haja tráfego de informações na rede.

## Topologia de redes

A topologia de uma rede nada mais é do que a forma como se define o layout da rede, ou como se organiza estruturalmente os computadores, dispositivos de rede e suas conexões. Uma topologia pode física ou lógica. 

A topologia física é como os computadores e dispositivos se encontram fisicamente, configurando uma espécie de desenho que é caracterizado pela disposição dos equipamentos. A topologia lógica é a forma como os dados trafegam na rede, logo, uma rede pode obedecer a uma determinada topologia apenas de forma lógica, não sendo necessário que os equipamentos estejam organizados de
acordo com a topologia física. Há varias formas de se estruturar uma rede, veja as principais:

![Image](https://user-images.githubusercontent.com/45495068/182739000-d1a24f90-aefb-4146-8384-b76ec65d7cfb.png)

![Image](https://user-images.githubusercontent.com/45495068/182739043-dac9a65d-27f0-43a1-9356-0438df56b672.png)

![Image](https://user-images.githubusercontent.com/45495068/182739095-2a528b3e-023e-4fd9-b505-b4913b84b61f.png)

![Image](https://user-images.githubusercontent.com/45495068/182739138-dc2b36e8-71cf-477f-89e5-5ddb7138f5ec.png)

![Image](https://user-images.githubusercontent.com/45495068/182739187-a7f94769-d805-49f5-af88-4390b991cb8a.png)

![Image](https://user-images.githubusercontent.com/45495068/182739222-4c11a233-32ee-4d51-9df2-40c23a3fa119.png)

## Escopo de abrangência de redes

A abrangência de alcance das redes de caracterizam em:

* LAN – Rede Local interliga computadores presentes dentro de um mesmo espaço físico.
* MAN – Rede Metropolitana, abrangem bairros ou uma cidade.
* WAN – A Wide Area Network, ou Rede de Longa Distância, abrange um país ou até mesmo um continente.
* WLAN – Rede Local Sem Fio.
* WMAN – Rede Metropolitana Sem Fio, é a versão sem fio da MAN, com um alcance de dezenas de quilômetros.
* WWAN – Rede de Longa Distância Sem Fio, alcança diversas partes do mundo. Justamente por isso, a WWAN está mais sujeita a ruídos.
* SAN – Rede de Área de Armazenamento, são utilizadas para fazer a comunicação de um servidor e outros computadores.
* PAN – Rede de Área Pessoal, de curtas distâncias mais utilizadas por periféricos.

## Referência

[Apostila da disciplina de Redes de Computadores](https://educacaoprofissional.seduc.ce.gov.br/images/material_didatico/redes_de_computadores/redes_de_computadores.pdf). Secretaria da Educação do Ceará.