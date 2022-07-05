---
title:  "Esquema de Arquitetura do Sistema"
author: Prof. Jocilé Serra
date: 2021-06-05 18:50:00 -0300
categories: [DESENVOLVIMENTO, ENGENHARIA DE SOFTWARE]
tags: [diagrama, modelo, uml]
mermaid: true
---
A arquitetura de software projeta e documenta o sistema, define o que vai ser usado (requisitos) e o que não vai ser usado - evitando perda de tempo, estrutura os dados, seu processamento, as informações geradas, seu ambiente, recursos, a implementação e manutenção do projeto.

```mermaid
graph LR

    SIS((Arquitetura e Modelagem<br/> do Sistema<br/>Arquiteto de Software)) -->OBJ(Objetivo<br/>Requisitos<br/>Analista do sistema)
    OBJ --> LEV(Levantamento)
    LEV --> LEV1(Entrevista)
    LEV --> LEV2(Pesquisa)
    LEV --> LEV3(Questionário)
    LEV --> LEV4(Reuniões)
    LEV --> LEV5(Observações)
    OBJ --> REQ(Tipos de requisitos)
    REQ --> REQ1(Funcionais - necessários)
    REQ --> REQ2(Não funcionais - desejáveis)
    REQ --> REQ3(Do usuário)
    REQ --> REQ4(Do sistema)
    REQ --> REQ5(Do software)

    SIS --> ENT(Entradas)
    ENT --> DAD>Coleta de dados]
    ENT --> ANA(Análise dos dados)

    SIS --> PROC(Processamento)
    PROC --> MUD>Converte entradas em saídas]

    SIS --> SAI(Saídas)
    SAI --> INF>Informações geradas pelo processamento]

    SIS --> RET(Retroalimentação)
    RET --> COM>Informações sobre o comportamento do sistema]

    SIS --> AMB(Ambiente)
    AMB --> MEI>Meio de atuação do sistema]
    AMB --> ONL(Online)
    AMB --> LOC(Local)

    SIS --> REC(Recursos)
    REC --> DIN(Dinheiro)
    REC --> MAQ(Equipamentos)
    REC --> PES(Pessoas capacitadas)
    REC --> VIA(Viabilidade)

    SIS --> PROJ(Projeto<br/>Engenheiro de software)
    PROJ --> IMP(Implementação)
    PROJ --> MAN(Manutenção)

``` 

## Modelagem do Sistema
- Objetivo - Requisitos
  - Levantamento
     - Entrevista
     - Pesquisa
     - Questionário
     - Reuniões
     - Observações
   - Tipos de requisitos - Analista do sistema
     - Funcionais - necessidades
     - Não funcionais - desejáveis
     - Do usuário - quem interage
     - Do sistema
     - Do software
- Entradas
   - Coleta de dados
   - Análise dos dados
- Processamento - Converte entradas em saídas
- Saídas - Informações geradas pelo processamento
- Retroalimentação - Informações sobre o comportamento do sistema
- Ambiente - Meio de atuação do sistema
   - Online
   - Local
- Recursos
   - Dinheiro
   - Equipamentos
   - Pessoas capacitadas
- Viabilidade
- Projeto
  - Implementação
  - Manutenção

## Referência

PEREIRA, Rômulo. POO Java - Introdução a Sistemas. **YouTube**, 2021. Disponível em <https://www.youtube.com/watch?v=bIjXgoqhZcg&list=PL-aWZs7H0EAwGm-lD96-l4G7rG2eN4HKG&index=1>. Acessado em 5 dejunho de 2021.