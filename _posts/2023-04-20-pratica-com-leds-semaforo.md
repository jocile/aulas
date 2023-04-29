---
title:  "Prática com leds - Semáforo"
date: 2023-04-20 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
Como criar e simular um semáforo simples usando o Arduino e o Tinkercad. É demonstrado como fazer as conexões dos LEDs na protoboard, ligá-los a uma porta do Arduino e, em seguida, adicionar resistores para evitar sobrecarga de corrente. O código para o semáforo é fornecido e explicado, e o tutorial termina com a simulação do semáforo em ação.

## Construindo o circuito

Na área de trabalho do Tinkercad, vamos começar puxando uma placa que será nossa protoboard. Vamos selecionar um LED vermelho e conectá-lo à placa. Em seguida, escolhemos um LED amarelo e um LED verde, conectando-os também. Para cada um dos LEDs, vamos puxar um fio do negativo e conectar na protoboard.

Para evitar problemas de sobrecarga de corrente nos LEDs, vamos ligar os resistores. Escolhemos um resistor de 220Ω e o conectamos ao LED vermelho. Repetimos o processo para os outros LEDs, trocando a cor e o valor do resistor.

## Materiais necessários

- Computador com acesso à internet
- Conta gratuita no Tinkercad
- Acesso à plataforma do Arduino
- Placa de prototipagem
- LEDs vermelho, amarelo e verde
- Resistores de 220Ω
- Fios para conexão
- Arduino

## Passo a passo

### Passo 1: Acesso ao Tinkercad

Acesse a plataforma do Tinkercad através do site [https://www.tinkercad.com/](https://www.tinkercad.com/) e faça o login em sua conta.

### Passo 2: Criação do circuito

Após acessar a plataforma do Tinkercad, crie um novo circuito e adicione uma placa de prototipagem. Em seguida, adicione três LEDs (vermelho, amarelo e verde) na placa, com um espaço entre eles.

Conecte o GND de sua terra à placa. Para cada um dos LEDs, conecte um fio do negativo à placa e faça a ligação do fio de cada LED com o negativo através de uma curva.

Posicione os LEDs para que possam ser conectados a uma porta do Arduino. Para isso, selecione a porta 13 e faça a ligação desta porta com o LED vermelho. Repita o processo para a porta 12 e o LED amarelo, e para a porta 11 e o LED verde.

Conecte resistores (utilize um resistor de 220 ohms) para evitar sobrecarga de corrente nos LEDs.

### Passo 3: Acesso à plataforma do Arduino

Acesse a plataforma do Arduino através do site [https://create.arduino.cc/editor](https://create.arduino.cc/editor) e faça o login em sua conta.

### Passo 4: Criação do código

Após acessar a plataforma do Arduino, abra um novo sketch e adicione o seguinte código:

```cpp
int ledVermelho = 13;
int ledAmarelo = 12;
int ledVerde = 11;

void setup() {
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  pinMode(ledVerde, OUTPUT);
}

void loop() {
  digitalWrite(ledVermelho, HIGH);
  delay(5000);
  digitalWrite(ledVermelho, LOW);
  delay(1000);
  digitalWrite(ledAmarelo, HIGH);
  delay(3000);
  digitalWrite(ledAmarelo, LOW);
  digitalWrite(ledVerde, HIGH);
  delay(7000);
  digitalWrite(ledVerde, LOW);
  digitalWrite(ledVermelho, HIGH);
}

```

No código acima, indicamos quais são os pinos que correspondem a cada LED. Em seguida, pedimos para o LED vermelho ligar por 5 segundos, depois desligar. Repetimos o processo para o LED amarelo, ligando por 3 segundos, e para o LED verde, ligando por 7 segundos.

Por fim, dentro do loop, indicamos que o LED vermelho deve ser ligado novamente, dando continuidade à sequência.

### Passo 5: Execução do código

Após criar o código, conecte o Arduino ao computador e selecione a opção "Verificar" para verificar se não há erros no código. Caso não haja erros, selecione a opção "Fazer upload" para carregar o código no Arduino.

### Passo 6: Teste do semáforo

Após carregar o código no Arduino, o semáforo estará pronto para ser testado. Conecte o Arduino ao circuito e ligue-o.

## Conclusão

Com o Tinkercad e o Arduino, é possível criar projetos incríveis, como o semáforo que aprendemos neste tutorial. Espero que tenha gostado e que continue explorando as possibilidades dessa tecnologia. Até a próxima!

## Referência

{% include embed/youtube.html id='pljx0UEcJZs' %}

[TUTORIAL TINKERCAD ARDUINO COMO CRIAR E SIMULAR UM SEMÁFORO SIMPLES](https://www.youtube.com/watch?v=pljx0UEcJZs)
