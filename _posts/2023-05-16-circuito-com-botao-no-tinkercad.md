---
title:  "Circuito com botão no Tinkercad"
date: 2023-05-16 04:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
Neste artigo, vamos falar sobre push buttons ou micro botões e apresentar o que são e como funcionam. Um push button é uma pequena peça com quatro pernas, e vamos explorar seu funcionamento passo a passo.

## O que é um Push Button?

Um push button, também conhecido como micro botão, é um dispositivo eletrônico comumente utilizado como um interruptor momentâneo. Ele possui quatro terminais ou pernas que realizam conexões específicas quando o botão é pressionado.

## Funcionamento do Push Button

O push button funciona da seguinte maneira: ele possui uma chavinha que, quando pressionada, estabelece conexões entre diferentes terminais. Vejamos o diagrama de conexão do push button:

```plaintext
Legenda:
1 - Terminal 1
2 - Terminal 2
3 - Terminal 3
4 - Terminal 4

Quando pressionado:
Terminal 1 conecta com Terminal 3
Terminal 2 conecta com Terminal 4

```

Portanto, quando o botão é pressionado, ocorre o contato entre as pernas 1 e 3, assim como entre as pernas 2 e 4. Ao soltar o botão, as conexões são interrompidas, e cada perna retorna ao seu estado original.

## Montagem Simples no Tinkercad Circuits

Vamos realizar uma montagem simples no Tinkercad Circuits para ilustrar o funcionamento do push button. A montagem consiste em um LED conectado em série com um resistor, e o push button inserido entre as camadas de contatos.

Passo a passo:

1. Abra o Tinkercad Circuits, faça login e crie um novo projeto, acessando o link: [Simulador online Tinkercad](https://www.tinkercad.com/).
2. Na área de componentes, localize o LED e o resistor.
3. Posicione o LED e o resistor no espaço de trabalho do Circuits.
4. Conecte uma extremidade do resistor a um pino de alimentação (5V).
5. Conecte a outra extremidade do resistor ao anodo (positivo) do LED.
6. Conecte o catodo (negativo) do LED ao terra (GND).
7. Insira o push button entre os contatos dos terminais do circuito, garantindo que as pernas estejam conectadas corretamente.
8. Verifique se todas as conexões estão corretas.

Ao pressionar o push button, o LED deve acender, e ao soltá-lo, o LED deve apagar.

## Montagem com Arduino no Tinkercad Circuits

Agora, vamos realizar uma montagem utilizando um Arduino para controlar o LED através do push button.

Passo a passo:

1. Abra o Tinkercad Circuits e crie um novo projeto.
2. Na área de componentes, localize o Arduino, o LED e o push button.
3. Posicione o Arduino, o LED e o push button no espaço de trabalho do Circuits.
4. Conecte uma extremidade do resistor ao pino de 5 volts do Arduino.
5. Conecte a outra extremidade do resistor ao anodo (positivo) do LED.
6. Conecte o catodo (negativo) do LED ao terra (GND) do Arduino.
7. Conecte uma perna do push button a um pino digital de entrada (por exemplo, pino 7) do Arduino.
8. Conecte a outra perna do push button a um pino digital de saída (por exemplo, pino 8) do Arduino.

Agora, vamos programar o Arduino para controlar o funcionamento do LED com base na leitura do push button.

Passo a passo:

1. Abra o editor de código no Tinkercad Circuits e selecione a aba do Arduino.
2. No código, defina o pino 7 como entrada utilizando a função `pinMode()`. Por exemplo: `pinMode(7, INPUT);`
3. Em seguida, defina o pino 8 como saída utilizando a função `pinMode()`. Por exemplo: `pinMode(8, OUTPUT);`
4. Dentro do loop principal (`void loop()`), adicione um teste condicional para verificar se a leitura digital do pino 7 é alta (ou seja, se o push button está pressionado). Por exemplo: `if (digitalRead(7) == HIGH)`
5. Dentro do bloco condicional, escreva o valor HIGH (ou ligue) no pino 8 utilizando a função `digitalWrite()`. Por exemplo: `digitalWrite(8, HIGH);`
6. Fora do bloco condicional, adicione um bloco `else` para o caso em que o push button não está pressionado. Dentro deste bloco, escreva o valor LOW (ou desligue) no pino 8 utilizando `digitalWrite()`. Por exemplo: `digitalWrite(8, LOW);`
7. Verifique se não há erros de sintaxe no código e faça as devidas correções, se necessário.
8. Clique em "Simular" para testar a simulação.

Ao pressionar o push button, o LED deve acender, e ao soltá-lo, o LED deve apagar. O funcionamento do LED será controlado pela leitura do push button através do Arduino.

Essas foram as instruções básicas para a montagem e programação de push buttons no Tinkercad Circuits. Com essas informações, você poderá explorar diferentes aplicações e aprimorar seus projetos eletrônicos.

O código completo que você pode carregar no Arduino:

```cpp
// Definição dos pinos
const int pushButtonPin = 7;  // Pino conectado ao push button
const int ledPin = 8;        // Pino conectado ao LED

void setup() {
  pinMode(pushButtonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (digitalRead(pushButtonPin) == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}

```

Certifique-se de ter conectado o push button ao pino 7 e o LED ao pino 8 do Arduino, conforme explicado anteriormente.

Para carregar o código no Arduino, siga as etapas abaixo:

1. Conecte o Arduino ao computador utilizando um cabo USB.
2. Abra a IDE do Arduino no seu computador.
3. Crie um novo arquivo e copie o código fornecido.
4. Selecione o tipo de placa Arduino que você está usando em "Tools" > "Board" no menu da IDE.
5. Selecione a porta correta do Arduino em "Tools" > "Port".
6. Clique no botão de upload (seta apontando para a direita) para carregar o código no Arduino.
7. Aguarde até que o processo de upload seja concluído e verifique se não há erros na janela de saída.

Após o upload do código, o Arduino estará pronto para controlar o funcionamento do LED com base na leitura do push button.

## Referências

| [![video](http://img.youtube.com/vi/oc7T7_vyW0c/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=oc7T7_vyW0c) | [ABTC-3-Arduino Básico com TinkerCad Circuits - Aula 3 - Botão e LED](https://www.youtube.com/watch?v=oc7T7_vyW0c) |
| [![video](http://img.youtube.com/vi/gmDcc26Ef5g/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=gmDcc26Ef5g) | [Curso Arduíno EaD - Prática 2 - Botão LED](https://www.youtube.com/watch?v=gmDcc26Ef5g&list=PLyLhwPdeloGgv3SnPyy5KHfbjjWD-noDS&index=5) |

- [Como funciona um interruptor - Geração de Energia](https://blog.tecnogera.com.br/blog/como-funciona-um-interruptor)
- [Simulador online Tinkercad](https://www.tinkercad.com/)
