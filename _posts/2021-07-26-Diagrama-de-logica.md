---
title:  "Diagrama de lógica"
author: Prof. Jocilé Serra
date: 2021-07-26 10:30:00 -0300
categories: [DESENVOLVIMENTO, LÓGICA]
tags: [lógica, diagrama]
mermaid: true
---
A lógica formal é a linguagem do pensamento, que pode ser desenvolvida matematicamente e na eletrônica.

```mermaid
flowchart TB
subgraph Lógica
  direction LR
  A(Argumento) -.- A1>Série conectada de proposições que tem a <br/>intenção de dar razões para outra proposição]
  A --> P(Premissas <br/>Proposições)
  P -.- P1>Palavras ou símbolos que exprimem <br/>um pensamento de sentido completo]
  P --> Su(Compostos por <br/> Sujeito + Predicado)
  Su --> In{De forma <br/> Individual ou <br/>universal}
  Su --> Af{Afirmam <br/>ou <br/>negam}
  P --> V{Valor lógico <br/>V ou F}
  P --> |Inferência - Razão| C(Conclusão)
end
subgraph Inferência
  direction LR

  Pa(Particular) --> |Indução| Ge(Geral)
  Ge --> |Dedução| Pa
end
Lógica --> Inferência

```

## Referências

<a href="http://www.youtube.com/watch?feature=player_embedded&v=-Mi50m87ffY" target="_blank"><img src="http://img.youtube.com/vi/-Mi50m87ffY/0.jpg" alt="Vídeo de lógica" width="240" height="180" border="10" /></a> 
<a href="http://www.youtube.com/watch?feature=player_embedded&v=-u-R_dAtEP9k" target="_blank"><img src="http://img.youtube.com/vi/u-R_dAtEP9k/0.jpg" alt="Vídeo de lógica" width="240" height="180" border="10" /></a>

