---
title:  "Experiência com display de 7 segmentos"
date: 2023-05-23 04:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
O display de 7-segmentos são basicamente 7 LEDs que, quando acionados na sequência correta, apresentam o desenho de números.
É possível criar várias outras formas neles, basta usar a imaginação. Vamos entender o display de 7-segmentos, e depois faremos outra experiência para utilizarmos alguns tipos de dados apresentados anteriormente.

## EXPERIÊNCIA - USANDO UM DISPLAY DE 7-SEGMENTOS

Display de 7 segmentos é um mostrador comumente utilizado para mostrar números. Normalmente, são usados em conjunto com um conversor Binário/BCD (Binary Coded Decimal). São baratos e construídos por 7 LEDs que formam seus segmentos e o ponto decimal (DP). Display de 7 segmentos podem ser de ânodo comum, que possui um pino que é o polo negativo comum a todos os segmentos que devem ser conectados ao polo positivo para serem acesos, ou cátodo comum, que possui um pino que é o polo positivo comum a todos os segmentos que devem ser conectados ao polo negativo para serem acesos.

Os segmentos são identificados por letras de A até G, mais o DP (ponto decimal). Para formar números e algumas letras, basta acender ou apagar os segmentos:

![Display 7]({{site.data.images.display7.link}})
_{{site.data.images.display7.caption}}_

Para trabalhar com displays de 7-segmentos, usamos os mesmos conhecimentos que já temos em trabalhar com LEDs.

## O que é necessário

- 1 x Arduino
- 1 x Display de 7-segmentos cátodo comum
- Resistores de 220 Ohms

## Esquema de montagem

Orientando-se pela imagem a seguir e usando um cabinho, ligue os pinos comuns (5V) a um resistor de 220Ω e ao pino 5V do
Arduino. Agora, também usando um cabinho, ligue o pino do segmento A ao pino digital 2 do Arduino.

![Montagem do display 7 com arduino]({{site.data.images.display7arduino.link}})
_{{site.data.images.display7arduino.caption}}_

## Programação

```cpp
int a = 2;
int b = 3;
int c = 4;
int d = 5;
int e = 6;
int f = 7;
int g = 8;
void setup()
{ // Configuracao dos pinos 2 a 8 como SAIDA
  for (int i= 2; i<= 8; i++) {
     pinMode(i, OUTPUT);
  }
}

void loop()
{ //----Número 0 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(e, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, LOW);  
  delay(1000);  // espera de 1 segundo  
  
  //----Número 1 -------------
  digitalWrite(a, LOW);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, LOW);
  digitalWrite(e, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);  
  delay(1000);  // espera de 1 segundo
  
  //----Número 2 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c,  LOW);
  digitalWrite(d, HIGH);
  digitalWrite(e, HIGH);
  digitalWrite(f, LOW);
  digitalWrite(g, HIGH);
  delay(1000);
  
 //----Número 3 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(e, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, HIGH);  
  delay(1000);  // espera de 1 segundo
  
  //----Número 4 -------------
  digitalWrite(a, LOW);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, LOW);
  digitalWrite(e, LOW);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);  
  delay(1000);  // espera de 1 segundo
  
  //----Número 5 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, LOW);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(e, LOW);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);  
  delay(1000);  // espera de 1 segundo
 
  //----Número 6 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, LOW);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(e, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);  
  delay(1000);  // espera de 1 segundo
  
  //----Número 7 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, LOW);
  digitalWrite(e, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, HIGH);  
  delay(1000);  // espera de 1 segundo
  
  //----Número 8 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(e, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);  
  delay(1000);  // espera de 1 segundo
  
  //----Número 9 -------------
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(e, LOW);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);  
  delay(1000);  // espera de 1 segundo  
}
```

Programação 2

```cpp
int a = 3, b = 4, c = 5, d = 6, e = 7, f = 8, g = 9;
int num[10][7] = {
  {a,b,c,d,e,f},// Zero
  {b,c},// Um
  {a,b,e,d,g},// Dois
  {a,b,c,d,g},// Três
  {b,c,f,g},// Quatro
  {a,c,d,f,g},// Cinco
  {a,c,d,e,f,g},// Seis
  {a,b,c},// Sete
  {a,b,c,d,e,f,g},// Oito
  {a,b,c,f,g}// Nove
};
void setup() {
  pinMode(a,OUTPUT);
  pinMode(b,OUTPUT);
  pinMode(c,OUTPUT);
  pinMode(d,OUTPUT);
  pinMode(e,OUTPUT);
  pinMode(f,OUTPUT);
  pinMode(g,OUTPUT);
}
void loop() {
  for(int i=0;i<10;i++) {
    apaga();
    numero(i);
    delay(1000);
  }
}
void apaga() {
  digitalWrite(a,HIGH);
  digitalWrite(b,HIGH);
  digitalWrite(c,HIGH);
  digitalWrite(d,HIGH);
  digitalWrite(e,HIGH);
  digitalWrite(f,HIGH);
  digitalWrite(g,HIGH);
}
void numero(int n) {
  for(int i=0;i<7;i++) digitalWrite(num[n][i],LOW);
}
}
```

## Referências

[Circuit design Display de 7 segmentos - Tinkercad](https://www.tinkercad.com/things/h0GlrbkmQNO)

[Entradas analógicas do Arduino](https://medium.com/20-21/entradas-analógicas-do-arduino-e6e787204ab4)

[Arduino - Entradas e Saídas Digitais - Pinos digitais](https://portal.vidadesilicio.com.br/entradas-e-saidas-digitais/)

[Como usar Portas Digitais e Analógicas no ARDUINO](https://www.youtube.com/watch?v=965Tm3Zuizo)

[Usando os pinos digitais do Arduino](https://embarcados.com.br/pinos-digitais-do-arduino/)
