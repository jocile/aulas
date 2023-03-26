---
title:  "Como programar no Arduino - Sketch"
date: 2023-02-28 10:40:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, programação]
---
A programação visual com blocos é uma forma de programação em que os programas são criados juntando blocos em uma interface gráfica. Isso permite que as pessoas criem programas sem precisar escrever código, tornando a programação mais acessível para iniciantes e pessoas sem experiência em programação.

## O Sketch e suas funções

Para programar no Arduino, é necessário escrever um código em linguagem C/C++ conhecido como "sketch". A estrutura básica de um sketch do Arduino é dividida em duas partes: a função **`setup()`** e a função **`loop()`**.

A função **`setup()`** é executada uma vez quando o Arduino é ligado e é usada para definir as configurações iniciais, como configurações de pinos, baud rate para a comunicação serial e outras inicializações necessárias. Por exemplo, para definir o pino 13 como saída, podemos usar o seguinte comando:

```c++
void setup() {
  pinMode(13, OUTPUT);
}
```

Já a função **`loop()`** é executada continuamente após a função **`setup()`**, e é usada para escrever o código principal do programa. Por exemplo, para fazer o LED conectado ao pino 13 piscar, podemos usar o seguinte código:

```c++
void loop() {
  digitalWrite(13, HIGH);   // liga o LED
  delay(1000);              // espera 1 segundo
  digitalWrite(13, LOW);    // desliga o LED
  delay(1000);              // espera 1 segundo
}
```

Este código faz com que o LED conectado ao pino 13 pisque a cada segundo.

Além disso, é importante lembrar que é necessário incluir a biblioteca **`Arduino.h`** no início do sketch para que as funções do Arduino possam ser utilizadas. O código completo ficaria assim:

```c++
#include <Arduino.h>void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);   // liga o LED
  delay(1000);              // espera 1 segundo
  digitalWrite(13, LOW);    // desliga o LED
  delay(1000);              // espera 1 segundo
}
```

Após escrever o código, é possível enviar o sketch para o Arduino através do cabo USB ou de outro meio de comunicação disponível.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
