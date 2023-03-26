---
title:  "Tinkercad - introdução ao Simulador"
date: 2023-03-06 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, programação]
---
A programação visual com blocos é uma forma de programação em que os programas são criados juntando blocos em uma interface gráfica. Isso permite que as pessoas criem programas sem precisar escrever código, tornando a programação mais acessível para iniciantes e pessoas sem experiência em programação.

## Como acessar

O Tinkercad é uma ferramenta online que permite simular o funcionamento de um Arduino, sem a necessidade de possuir o hardware físico. Para programar no Arduino usando o simulador Tinkercad, siga os seguintes passos:

1. Acesse o site do Tinkercad (**[https://www.tinkercad.com/](https://www.tinkercad.com/)**);
2. Crie uma nova conta (ou faça login se já possuir uma);
3. Clique em "Circuits" e depois em "Create new circuit";
4. Selecione o componente "Arduino" na lista de componentes disponíveis.

## Prática no simulador

Para ilustrar um exemplo de prática no Tinkercad, vamos criar um programa para acionar um LED conectado ao pino 13 do Arduino através de um botão conectado ao pino 2.

1. Adicione um LED na placa do Arduino, conectando seu anodo no pino 13 e o catodo no GND.
2. Adicione um botão na placa do Arduino, conectando uma das pernas no pino 2 e a outra perna no GND.
3. Abra o código do programa clicando no botão "Code" na parte inferior esquerda da tela.
4. No campo "setup()", defina o pino 13 como saída e o pino 2 como entrada:

```c++
void setup()
{
  pinMode(13, OUTPUT);
  pinMode(2, INPUT);
}
```

1. No campo "loop()", leia o estado do botão (HIGH ou LOW) e acione o LED de acordo:

```c++
void loop()
{
  if (digitalRead(2) == HIGH) {   // se o botão estiver pressionado
    digitalWrite(13, HIGH);       // liga o LED
  } else {                        // senão
    digitalWrite(13, LOW);        // desliga o LED
  }
}
```

1. Clique no botão "Start Simulation" na parte superior direita da tela para iniciar a simulação. Pressione o botão na placa do Arduino e verifique se o LED acende e apaga de acordo com o estado do botão.

Este é um exemplo simples de como programar no Arduino usando o simulador Tinkercad. O Tinkercad oferece diversos componentes e ferramentas que permitem criar projetos mais complexos e avançados.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
