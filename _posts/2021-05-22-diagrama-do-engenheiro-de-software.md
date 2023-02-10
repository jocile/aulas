---
title:  "Diagrama do engenheiro de software"
author: Prof. Jocilé Serra
date: 2021-05-22 20:14:00 -0300
categories: [DESENVOLVIMENTO, ENGENHARIA DE SOFTWARE]
tags: [diagrama, programação]
mermaid: true
---
**Profissional regulamentado pelo CREA - Conselho Federal de Egenharia e Agronomia, que é responsável pelo projeto e estrutura do desenvolvimento de software**

```mermaid
graph LR

    ENG((Engenheiro de Sofw.)) -->PRO(Projeto)
    PRO --> CON(Conceito)
    PRO --> DEF(Definição)
    PRO --> GES(Gestão)
    PRO --> REQ(Requisitos)
    REQ --> REQ1(Funcionais)
    REQ --> REQ2(Não funcionais)

    PRO --> PROC(Processos)
    PROC -->PROC1>Controle do ciclo de vida]
    PRO --> DES(Desenvolvimento)
    DES --> IMP(Implementação)
    DES --> TES(Teste de qualidade)
    DES --> DEP(Depuração)
    DEP --> DEP1(Problemas)
    DEP --> DEP2(Gargalos)
    DES --> DIS(Disponibilização das versões)

    PRO --> MAN(Manutenção)
    MAN --> COR(Correções)
    MAN --> EVO(Evoluções)
    MAN --> MEL(Melhorias de performanse)

```

# Referência: 
* [Código Fonte TV no TouTube](https://www.youtube.com/watch?v=wdU9L3DqU2w&ab_channel=C%C3%B3digoFonteTV)
* [Código Fonte TV no TouTube Regulamentação](https://www.youtube.com/watch?v=9KKczlUdItg&ab_channel=C%C3%B3digoFonteTVC%C3%B3digoFonteTVVerificado)
