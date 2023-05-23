---
title:  "Portas analógicas e digitais no Arduino"
date: 2023-05-22 04:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
Vamos explorar as portas analógicas e digitais do Arduino, bem como o conceito de PWM (Modulação por Largura de Pulso, do inglês Pulse Width Modulation). Vamos explicar o funcionamento de cada tipo de porta, fornecer exemplos práticos e explicar o passo a passo de como utilizá-las em projetos.

## Portas Analógicas

As portas analógicas do Arduino permitem a leitura de sinais analógicos, ou seja, valores variáveis em uma faixa contínua. O Arduino UNO, por exemplo, possui 6 portas analógicas, numeradas de A0 a A5. Cada porta analógica pode ler valores entre 0 e 5 volts e converter esses valores em números digitais de 10 bits (ou seja, entre 0 e 1023).

Para utilizar uma porta analógica, siga estes passos:

1. Conecte o componente que você deseja ler à porta analógica do Arduino.
2. No código, utilize a função `analogRead()` seguida do número da porta analógica (por exemplo, `analogRead(A0)`) para ler o valor analógico.

Aqui está um exemplo de código que lê um sensor de luz conectado à porta analógica A0 e imprime o valor lido no monitor serial:

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int valorLido = analogRead(A0);
  Serial.println(valorLido);
  delay(1000);
}

```

## Portas Digitais

As portas digitais do Arduino permitem a leitura e a escrita de sinais digitais, ou seja, valores que podem ser apenas 0 (LOW) ou 1 (HIGH). O Arduino UNO possui 14 portas digitais, numeradas de 0 a 13.

Para utilizar uma porta digital como entrada, siga estes passos:

1. Conecte o componente que você deseja utilizar à porta digital do Arduino.
2. No código, utilize a função `pinMode()` seguida do número da porta digital e defina-a como `INPUT`.

Aqui está um exemplo de código que lê o estado de um botão conectado à porta digital 2 e acende um LED conectado à porta digital 3 com base no estado do botão:

```cpp
const int botaoPin = 2;
const int ledPin = 3;

void setup() {
  pinMode(botaoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int estadoBotao = digitalRead(botaoPin);

  if (estadoBotao == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Botão pressionado");
  } else {
    digitalWrite(ledPin, LOW);
    Serial.println("Botão não pressionado");
  }

  delay(100);
}

```

## PWM (Modulação por Largura de Pulso)

O PWM (Modulação por Largura de Pulso) é uma técnica utilizada para simular saídas analógicas em portas digitais do Arduino. Essa técnica envolve a variação do tempo em que um sinal está em nível alto (HIGH) em relação ao tempo total de um ciclo. Isso permite controlar a média de energia entregue a um componente, como um LED ou um motor, mesmo usando uma porta digital.

Para utilizar PWM em uma porta digital do Arduino, siga estes passos:

1. Conecte o componente que você deseja controlar (por exemplo, um LED) à porta digital do Arduino, com PWM, ela tem a marca ~.
2. No código, utilize a função `analogWrite()` seguida do número da porta digital e um valor entre 0 e 255 para definir a intensidade do sinal PWM. Quanto maior o valor, maior será a média de energia entregue ao componente.

Aqui está um exemplo de código que utiliza PWM para controlar a intensidade de um LED conectado à porta digital 9:

```c++
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  for (int brilho = 0; brilho <= 255; brilho++) {
    analogWrite(ledPin, brilho);
    delay(10);
  }

  for (int brilho = 255; brilho >= 0; brilho--) {
    analogWrite(ledPin, brilho);
    delay(10);
  }
}

```

Neste exemplo, o LED aumenta gradualmente a intensidade de brilho de 0 a 255 e depois diminui de volta para 0, criando um efeito de fade-in e fade-out.

## Prática

Vamos continuar com um exemplo prático de como utilizar um potenciômetro ligado a uma porta analógica do Arduino e um LED com um resistor conectado a uma porta digital PWM.

Neste exemplo, vamos ler o valor do potenciômetro e utilizar esse valor para controlar a intensidade do brilho do LED. Quanto maior o valor lido do potenciômetro, maior será a intensidade do LED.

### Materiais necessários

- Arduino UNO
- Potenciômetro
- LED
- Resistor (recomendado: 220 ohms)
- Jumpers

### Montagem

1. Conecte o terminal central do potenciômetro a uma das portas analógicas do Arduino (por exemplo, A0).
2. Conecte um dos terminais externos do potenciômetro ao GND (terra) do Arduino.
3. Conecte o outro terminal externo do potenciômetro a 5V (alimentação) do Arduino.
4. Conecte o LED ao Arduino:
    - Conecte o terminal positivo (maior) do LED a uma porta digital PWM do Arduino (por exemplo, 9).
    - Conecte o terminal negativo (menor) do LED a um resistor (por exemplo, 220 ohms).
    - Conecte o outro terminal do resistor ao GND (terra) do Arduino.

### Código

```c++
const int potPin = A0;
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int valorPot = analogRead(potPin);
  int brilho = map(valorPot, 0, 1023, 0, 255); // Mapeia o valor lido para o intervalo de 0 a 255

  analogWrite(ledPin, brilho);

  Serial.print("Valor do potenciômetro: ");
  Serial.print(valorPot);
  Serial.print(" | Brilho do LED: ");
  Serial.println(brilho);

  delay(100);
}

```

### Explicação do código

1. Definimos as constantes `potPin` e `ledPin` para representar as portas analógica e digital PWM, respectivamente.
2. No `setup()`, configuramos a porta do LED como saída (`OUTPUT`) e iniciamos a comunicação serial.
3. No `loop()`, lemos o valor do potenciômetro usando `analogRead(potPin)`, que retorna um valor entre 0 e 1023.
4. Em seguida, usamos a função `map()` para mapear esse valor para o intervalo de 0 a 255, que corresponde à faixa de intensidade do PWM.
5. Utilizamos `analogWrite(ledPin, brilho)` para ajustar a intensidade do LED com base no valor mapeado.
6. Imprimimos os valores lidos do potenciômetro e a intensidade do LED no monitor serial para acompanhamento.
7. Adicionamos um pequeno atraso (`delay(100)`) para evitar leituras muito rápidas e oscilações indesejadas.

Com este exemplo, o LED terá sua intensidade de brilho controlada pelo potenciômetro. Conforme você gira o potenciômetro, a intensidade do LED irá variar proporcionalmente.

## Referências

[Entradas analógicas do Arduino](https://medium.com/20-21/entradas-analógicas-do-arduino-e6e787204ab4)

[Arduino - Entradas e Saídas Digitais - Pinos digitais](https://portal.vidadesilicio.com.br/entradas-e-saidas-digitais/)

[Curso Arduíno EaD - Prática 6 - Entrada Analógica](https://www.youtube.com/watch?v=30gzjDZe9h0&list=PLyLhwPdeloGgv3SnPyy5KHfbjjWD-noDS&index=9)

[Como usar Portas Digitais e Analógicas no ARDUINO](https://www.youtube.com/watch?v=965Tm3Zuizo)

[Circuit design Analogica com potenciometro e led - Tinkercad](https://www.tinkercad.com/things/7jory0KcdKs)

[Circuit design Potenciômetro/Analógica - Tinkercad](https://www.tinkercad.com/things/dOrKQLXohPu-copy-of-pratica-7-led-analog-control)

[Usando os pinos digitais do Arduino](https://embarcados.com.br/pinos-digitais-do-arduino/)

[Tutorials - Arduino Documentation](https://docs.arduino.cc/tutorials/?query=pwm)
