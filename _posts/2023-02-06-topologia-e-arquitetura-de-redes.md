---
title:  "Topologia e arquitetura de redes"
date: 2023-02-06 09:00:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [redes, infraestrutura]
---
As redes de computadores se diferenciam em formas de transmissão, arquitetura, topologia e escopo de abrangência.

## Objetivo profissional

Adquirir competência permitindo situar-se em relação ao mercado trabalho de tecnologia da informação, levando em conta as precisões e participando das atividades propostas segundo o planejamento do módulo, as condições e critérios que seguem.

## Objetivos específicos

- Entender/compreender os conceitos fundamentais de infraestrutura de redes, entendendo suas principais diferenças de utilização e implementação em redes locais com segurança.
- Entender/compreender os conceitos básicos sobre infraestrutura de redes
  - Conceituação
  - Topologias
  - Componentes principais de uma rede

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

## Referências

- [Tipos de redes]({% post_url 2022-08-05-Tipos-de-redes %})
