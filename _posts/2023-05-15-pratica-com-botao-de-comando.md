---
title:  "Prática com botão de comando"
date: 2023-05-15 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
Nessa prática, vamos aprender como receber um sinal de nível lógico nas portas digitais do Arduino. Para isso, faremos uma montagem onde iremos pressionar um botão externo para acender ou apagar um LED, utilizando o Arduino como intermediário. Antes de iniciarmos a montagem, vamos entender o funcionamento de uma chave eletrônica para microcontroladores.

## Funcionamento de uma Chave Eletrônica

Uma chave eletrônica para microcontroladores é utilizada para garantir que o sinal de entrada recebido pelo Arduino tenha um nível lógico adequado. Utilizaremos um circuito com um resistor pull-down para essa finalidade.

- Quando a chave está aberta, o terminal conectado à entrada do Arduino está com potencial próximo de zero volts.
- Ao pressionarmos a chave, o terminal conectado à entrada do Arduino recebe uma tensão de 5 volts.

Essa configuração evita deixar a entrada do Arduino aberta, sem um nível lógico definido. Na prática, utilizaremos um botão de pulso, que fica sempre aberto, mas quando pressionado, fecha o contato, enviando o sinal para o Arduino. Agora que entendemos o funcionamento da chave eletrônica, vamos realizar a montagem no Tinkercad.

## Montagem da Prática

1. Abra o Tinkercad e clique em "Circuitos" e depois em "Novo Circuito".
2. Adicione um Arduino Uno ao circuito.
3. Em seguida, adicione um protoboard.
4. Conecte a alimentação de 5 volts nos pinos horizontais inferiores e superiores do protoboard.
    - Observação: Ao ligar o terminal negativo da alimentação, todas as linhas do protoboard ficam conectadas.
5. Conecte um fio saindo de uma das linhas superiores de alimentação de 5 volts até a linha inferior correspondente.
    - Isso garantirá que tenhamos alimentação de 5 volts disponível em ambos os lados do protoboard.
6. Agora, pegue um fio e conecte-o ao pino de 5 volts do Arduino.
    - Conecte a outra extremidade do fio a uma linha superior do protoboard.
7. Utilize outro fio e conecte-o a uma linha inferior do protoboard, interligando as duas fileiras.
8. Adicione um botão ao protoboard.
    - Observe que os terminais 1 e 1b são interligados internamente, assim como os terminais 2 e 2b.
    - Conecte um dos terminais do botão ao fio que está ligado ao pino de 5 volts do Arduino.
    - Pegue um resistor de 100k ohms e conecte o outro terminal do botão a um dos terminais do resistor.
    - Conecte o outro terminal do resistor a uma linha interligada com o terminal do botão.
    - Em seguida, conecte um outro resistor de 100 ohms nessa mesma linha de interligação entre o terminal do botão e o primeiro resistor.
9. Pegue o lado livre do segundo resistor de 100 ohms e conecte-o ao pino 2 do Arduino.
    - Esse será o pino de entrada para receber o sinal do botão. Agora, vamos adicionar o LED à montagem:
    1. Pegue um resistor de 470 ohms e conecte-o ao protoboard.
    - Conecte a outra extremidade do resistor a uma linha do protoboard.
    1. Agora, pegue o LED e observe os terminais anodo (ânodo) e cátodo (cátodo).
    - Conecte o terminal anodo (positivo) do LED à linha do protoboard onde está conectado o resistor de 470 ohms.
    - Conecte o terminal cátodo (negativo) do LED ao terra (GND) ou a 0 volts do Arduino.
    1. A montagem está concluída. Agora, vamos ao código.

## Código do Programa

Agora vamos desenvolver o programa para controlar o LED utilizando o botão. Utilizaremos a função `digitalRead` para ler o estado lógico do botão e a função `digitalWrite` para acender ou apagar o LED.


```cpp
void setup() {
pinMode(13, OUTPUT);  // Define o pino 13 como saída para o LED
pinMode(2, INPUT);    // Define o pino 2 como entrada para o botão
}

void loop() {
int buttonState = digitalRead(2);  // Lê o estado lógico do botão

if (buttonState == HIGH) {
  digitalWrite(13, HIGH);  // Acende o LED se o botão estiver pressionado
} else {
  digitalWrite(13, LOW);   // Apaga o LED se o botão não estiver pressionado
}
}

```

O programa começa definindo os pinos 13 e 2, respectivamente, como saída para o LED e como entrada para o botão. Em seguida, no loop principal, o programa lê o estado lógico do botão utilizando a função `digitalRead` e armazena esse valor na variável `buttonState`. Em seguida, utilizando uma estrutura `if`, o programa verifica se o botão está pressionado (estado lógico alto) e acende o LED utilizando a função `digitalWrite`. Caso contrário, o LED é apagado.

## Conclusão

Nesta prática, aprendemos a utilizar um botão para acionar um LED utilizando o Arduino. Exploramos o funcionamento de uma chave eletrônica para microcontroladores, utilizamos o protoboard para fazer as conexões e desenvolvemos o programa em Arduino para controlar o LED com o botão. Essa é uma prática simples, mas que ilustra conceitos importantes de entrada e saída digital em microcontroladores.

Como desafio adicional, você pode tentar criar um programa que utilize dois botões, um para ligar o LED e outro para apagá-lo. Experimente modificar o código e explore outras funcionalidades disponíveis no Arduino.

Espero que você tenha gostado dessa prática e tenha aprendido mais sobre o uso de botões e LEDs com o Arduino.

## Referências

| [![video](http://img.youtube.com/vi/gmDcc26Ef5g/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=gmDcc26Ef5g) | [Curso Arduíno EaD - Prática 2 - Botão LED](https://www.youtube.com/watch?v=gmDcc26Ef5g&list=PLyLhwPdeloGgv3SnPyy5KHfbjjWD-noDS&index=5) |
| [![video](http://img.youtube.com/vi/oc7T7_vyW0c/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=oc7T7_vyW0c) | [ABTC-3-Arduino Básico com TinkerCad Circuits - Aula 3 - Botão e LED](https://www.youtube.com/watch?v=oc7T7_vyW0c) |

[Introdução a Chaves e Botões - RoboCore](https://www.robocore.net/tutoriais/introducao-a-chaves-e-botoes)
