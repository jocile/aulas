---
title:  "Bibliotecas no Arduino"
date: 2023-04-03 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso]
---
No Arduino, uma biblioteca é um conjunto de arquivos de código que implementam uma funcionalidade específica para ser usada em um projeto. Esses arquivos são geralmente escritos em C ou C++, e podem incluir funções, variáveis, constantes e outras estruturas de dados necessárias para implementar a funcionalidade desejada.

## Usando bibliotecas

Para usar uma biblioteca em seu sketch do Arduino, você precisa incluí-la usando a diretiva **`#include`**. Esta diretiva informa ao compilador que você deseja usar a biblioteca no seu sketch.

Aqui está um exemplo de como incluir a biblioteca "Wire.h" para comunicação I2C:

```cpp
#include <Wire.h>

void setup() {
  Wire.begin(); // inicializa a comunicação I2C
}

void loop() {
  // faça algo com a comunicação I2C
}
```

Neste exemplo, a biblioteca "Wire.h" é incluída usando a diretiva **`#include <Wire.h>`**. Em seguida, no **`setup()`**, a função **`Wire.begin()`** é chamada para inicializar a comunicação I2C. No **`loop()`**, você pode fazer o que quiser com a comunicação I2C, usando as funções disponíveis na biblioteca "Wire.h".

## Criando Bibliotecas

Para criar uma biblioteca no Arduino, você precisa seguir os seguintes passos:

1. Escreva o código que implementa a funcionalidade desejada e salve-o em um ou mais arquivos de código-fonte.
2. Crie um arquivo de cabeçalho (com extensão .h) que declare as funções, variáveis e outras estruturas de dados necessárias para usar a biblioteca em um projeto.
3. Crie um arquivo de manifesto (com extensão .cpp ou .ino) que inclua os arquivos de código-fonte e defina qualquer configuração adicional necessária para usar a biblioteca.
4. Empacote os arquivos em um diretório com o nome da biblioteca e salve-o no diretório de bibliotecas do Arduino.

Para usar uma biblioteca no seu projeto do Arduino, você precisa incluir o arquivo de cabeçalho da biblioteca no seu código-fonte e usar as funções e outras estruturas de dados declaradas na biblioteca. Isso é feito usando a diretiva #include no início do seu código.

Por exemplo, se você criou uma biblioteca chamada "MeuSensor", você pode incluí-la no seu código-fonte da seguinte forma:

```cpp
#include <MeuSensor.h>void setup() {
  // Configuração inicial
}

void loop() {
  // Uso da biblioteca MeuSensor
}
```

Assim que você inclui a biblioteca no seu código, todas as funções, variáveis e outras estruturas de dados definidas nela estão disponíveis para serem usadas no seu programa.

Em resumo, a criação de bibliotecas no Arduino envolve escrever o código que implementa a funcionalidade desejada, empacotá-lo em um formato adequado e incluir o arquivo de cabeçalho da biblioteca no seu código-fonte. Depois disso, você pode usar as funções e outras estruturas de dados definidas na biblioteca no seu programa.

## Exemplo

Vamos criar uma biblioteca chamada "MeuSensor" que lê um sensor de temperatura LM35 e retorna o valor da temperatura em graus Celsius.

### 1. Criando o arquivo de cabeçalho "MeuSensor.h"

```cpp
#ifndef MeuSensor_h
#define MeuSensor_h

#include <Arduino.h>class MeuSensor {
  public:
    MeuSensor(int pino);
    float lerTemperatura();
  private:
    int _pino;
};

#endifEste arquivo define a classe "MeuSensor" que contém um construtor que inicializa o pino do sensor e uma função "lerTemperatura" que lê o valor do sensor e retorna a temperatura em graus Celsius.
```

### 2. Criando o arquivo de manifesto "MeuSensor.cpp"

```cpp
#include "MeuSensor.h"

MeuSensor::MeuSensor(int pino) {
  pinMode(pino, INPUT);
  _pino = pino;
}

float MeuSensor::lerTemperatura() {
  float tensao = (analogRead(_pino) * 5.0) / 1023.0;
  float temperatura = tensao * 100.0;
  return temperatura;
}
```

Este arquivo define o construtor da classe "MeuSensor" que configura o pino do sensor como entrada e atribui seu valor a uma variável privada da classe. Também define a função "lerTemperatura" que lê o valor do sensor usando a função analogRead, converte-o para tensão e, em seguida, para temperatura em graus Celsius.

### 3. Criando a biblioteca "MeuSensor"

Para criar a biblioteca "MeuSensor", você precisa criar uma pasta chamada "MeuSensor" dentro do diretório "libraries" do seu sketchbook do Arduino e salvar os arquivos "MeuSensor.h" e "MeuSensor.cpp" nesta pasta.

### 4. Utilizando a biblioteca "MeuSensor"

Depois de criar a biblioteca "MeuSensor", você pode incluí-la em seus sketches do Arduino da seguinte maneira:

```cpp
#include <MeuSensor.h>MeuSensor sensor(A0);

void setup() {
  Serial.begin(9600);
}

void loop() {
  float temperatura = sensor.lerTemperatura();
  Serial.print("Temperatura: ");
  Serial.print(temperatura);
  Serial.println(" °C");
  delay(1000);
}
```

Este sketch inclui a biblioteca "MeuSensor.h", cria um objeto "sensor" da classe "MeuSensor" no pino A0 e, no loop, lê o valor do sensor usando a função "lerTemperatura" e o imprime na porta serial.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
