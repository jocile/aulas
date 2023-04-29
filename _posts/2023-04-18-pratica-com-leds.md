---
title:  "Prática com leds"
date: 2023-04-18 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
Prática de pisca-pisca com LED, onde é necessário usar um resistor entre o pino de saída do Arduíno e o LED para limitar a corrente elétrica e evitar o excesso de tensão, que pode ser prejudicial ao LED.

Se você nunca utilizou um LED, saiba que ele é diferente de uma pequena lâmpada, pois possui polaridade. Ou seja, ao ligá-lo, é necessário ter atenção em colocar o polo positivo da pilha, por exemplo, no polo positivo do LED, que também é chamado de ânodo, e o polo negativo da pilha no polo negativo do LED, também conhecido como cátodo. Se cada polaridade não for obedecida, o LED simplesmente não irá acender. Normalmente, em projetos eletrônicos, é utilizada essa simbologia para representar o diodo LED, onde podemos ver também a polaridade de seus terminais, representados pelo ânodo e cátodo.

É importante prestar atenção à polaridade do LED, pois ele possui polaridade positiva (ânodo) e negativa (cátodo) e, se a polaridade não for obedecida, o LED não acenderá. O circuito é montado no software online Tinkercad, onde é possível explorar e alterar os componentes e criar o programa em linguagem C, utilizando os comandos digitais para configurar o pino digital como entrada ou saída e escrever ou ler informações.

O programa para o pisca-pisca com LED começa com a declaração da variável LED pin, associada ao pino 10 do Arduíno, e a configuração do mesmo como saída, utilizando a função pin mode no void setup. No void loop, é iniciado o programa do pisca-pisca com LED utilizando a função digitalWrite para acender e apagar o LED.

## Materiais necessários

- Arduino Uno;
- LEDs;
- Resistores de 470 ohms;
- Cabos de conexão.

## Passo a passo

1. Acesse o site do Tinkercad e faça login com seu e-mail e senha;
2. Clique em "Circuitos" e depois em "Criar um novo circuito";
3. No ambiente, selecione o Arduino Uno e o resistor. Gire-os conforme sua necessidade;
4. Altere o valor do resistor para 470 ohms;
5. Pegue o LED e observe a indicação do polo anodo positivo e do polo catodo negativo;
6. Conecte a saída do pino 10 do Arduino passando pelo resistor ligado ao anodo do LED;
7. Conecte o negativo diretamente ao catodo do LED;
8. Clique em "Código" e selecione a opção "Texto";
9. Inicie o programa em linguagem C, utilizando a estrutura básica de um programa para o Arduino;
10. Utilize os comandos digitais, como o "pinMode" para configurar o pino digital como uma entrada ou saída, "digitalWrite" para escrever uma informação na saída do pino digital e "digitalRead" para ler uma informação na entrada digital;
11. Elabore o programa para a prática pisca LED, declarando a variável "ledPin" associada ao pino 10 do Arduino e, em seguida, utilize as funções "pinMode" e "digitalWrite" para fazer o LED piscar.

## Montagem do circuito no Tinkercad

1. Acesse a página do Tinkercad e faça login com seu e-mail e senha.
2. Vá em "Circuitos" e clique em "Criar um novo circuito".
3. Nesta aba, temos acesso a todos os componentes disponíveis para explorar. Podemos também alterar o nome do arquivo.
4. Pegue o Arduino Uno e gire-o, se assim desejar. Os componentes aos terminais ficam do lado.
5. Pegue o resistor e gire-o, se necessário. Altere o valor dele para 470 ohms. Este valor é recomendável para a aplicação com LED de 2 volts.
6. Pegue o LED e observe a indicação do polo ânodo positivo e do polo cátodo negativo. Ligue agora a saída do pino 10 no Arduino, passando pelo resistor, ligado ao ânodo.
7. O negativo, que é o GND, vamos ligar direto no cátodo do LED.

## Programação

1. No início, aparece a lógica em blocos, similar ao software "Scratch". Vamos mudar para texto e iniciar o programa em linguagem C.
2. Temos a estrutura básica de um programa para o Arduino. O comando `#include` é utilizado para incluir algumas bibliotecas em aplicações específicas em alguns programas. Quando utilizamos variáveis no programa em linguagem C, é necessário declará-las. Neste caso, foi declarada uma variável `int`, como variável inteira.
3. Os dois comandos essenciais para o programa são `void setup` e `void loop`. Sem eles, fatalmente você terá um erro na hora de fazer a compilação.
4. O `void setup` é uma função de inicialização, ou seja, realiza as funções

Escrevendo o programa em linguagem C para fazer o LED piscar. Para fazer isso, usamos o comando digital write para enviar um sinal para o pino do LED e fazê-lo acender e apagar em um determinado intervalo de tempo. Aqui está o código completo:

```cpp
// Declaração da variável para o pino do LED
int ledPin = 10;

void setup() {
  // Configura o pino do LED como saída
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Liga o LED
  digitalWrite(ledPin, HIGH);
  delay(1000); // Aguarda 1 segundo

  // Desliga o LED
  digitalWrite(ledPin, LOW);
  delay(1000); // Aguarda 1 segundo
}

```

Esse programa é bastante simples. Na função setup, configuramos o pino do LED como uma saída usando o comando pinMode. Em seguida, na função loop, usamos o comando digitalWrite para acender e apagar o LED em um intervalo de tempo de um segundo (1000 milissegundos).

Agora que escrevemos o programa, podemos fazer a simulação no Tinkercad. Basta clicar no botão "Iniciar Simulação" na parte superior da tela e aguardar a simulação começar. Você deve ver o LED piscando a uma taxa de uma vez por segundo.

Com essa prática, aprendemos como montar um circuito com um LED e um resistor, como programar o Arduino usando a linguagem C e como simular o circuito no Tinkercad. Esses são os fundamentos para a criação de projetos mais avançados com o Arduino.

## Referência

{% include embed/youtube.html id='N15EYMAdfXQ' %}
