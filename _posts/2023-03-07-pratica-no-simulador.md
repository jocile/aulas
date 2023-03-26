---
title:  "Prática no simulador Tinkercad"
date: 2023-02-07 10:40:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, curso, programação]
---
A interface do simulador Tinkercad é organizada em várias áreas para facilitar a visualização e interação do usuário com os componentes e o código do projeto.

## Interface do Tinkercad

1. Área de trabalho: É a área principal da tela, onde são adicionados os componentes e criado o projeto. Nessa área, é possível posicionar os componentes, criar conexões entre eles e testar o funcionamento do projeto.
2. Biblioteca de componentes: É a área onde são encontrados todos os componentes disponíveis para uso no projeto. A biblioteca é dividida em categorias, como "Eletrônica", "Mecânica" e "Artesanato", e permite buscar e filtrar os componentes por nome ou categoria.
3. Propriedades do componente: É a área onde são exibidas as propriedades e configurações do componente selecionado na área de trabalho. Nessa área, é possível alterar as propriedades do componente, como nome, valor, cor e tamanho.
4. Console serial: É a área onde são exibidas as mensagens enviadas pelo código do projeto para a porta serial do Arduino. Essa área é útil para depurar o código e verificar o funcionamento do projeto.
5. Editor de código: É a área onde é editado o código do projeto. O editor de código possui recursos de sintaxe de destaque, auto-completar, e depuração do código. Nessa área, é possível escrever e editar o código do projeto em linguagem C++.
6. Botões de controle: São os botões localizados na parte superior direita da tela, que permitem controlar a simulação do projeto. Os botões incluem "Start Simulation" (Iniciar Simulação), "Stop Simulation" (Parar Simulação), "Step Forward" (Avançar um Passo), "Step Backward" (Voltar um Passo) e "Reset" (Redefinir).

Essa é uma descrição básica da interface do simulador Tinkercad. A ferramenta possui outras funcionalidades e recursos que podem variar de acordo com a versão e atualizações do software.

## Simular um sinal de trânsito

Exemplo de prática utilizando o simulador Tinkercad é simular um sinal com LEDs, como um semáforo de trânsito. Para isso, podemos utilizar três LEDs, um para cada cor do semáforo: vermelho, amarelo e verde. O programa deve acionar os LEDs em sequência, de acordo com o tempo de cada fase do semáforo.

1. Adicione três LEDs na placa do Arduino, conectando o anodo de cada LED nos pinos 13, 12 e 11, e o catodo de cada LED no GND.
2. Abra o código do programa clicando no botão "Code" na parte inferior esquerda da tela.
3. No campo "setup()", defina os pinos dos LEDs como saída:

```c++
void setup()
{
  pinMode(13, OUTPUT);   // LED vermelho
  pinMode(12, OUTPUT);   // LED amarelo
  pinMode(11, OUTPUT);   // LED verde
}
```

1. No campo "loop()", acione os LEDs em sequência, de acordo com o tempo de cada fase do semáforo. Por exemplo, podemos definir um tempo de 10 segundos para o sinal verde, 2 segundos para o amarelo e 8 segundos para o vermelho:

```c++
void loop()
{
  digitalWrite(11, HIGH);   // liga o LED verde
  delay(10000);              // espera 10 segundos
  digitalWrite(11, LOW);    // desliga o LED verde
  digitalWrite(12, HIGH);   // liga o LED amarelo
  delay(2000);               // espera 2 segundos
  digitalWrite(12, LOW);    // desliga o LED amarelo
  digitalWrite(13, HIGH);   // liga o LED vermelho
  delay(8000);               // espera 8 segundos
  digitalWrite(13, LOW);    // desliga o LED vermelho
}
```

1. Clique no botão "Start Simulation" na parte superior direita da tela para iniciar a simulação. Observe os LEDs acendendo e apagando em sequência, de acordo com o tempo de cada fase do semáforo.

Este é um exemplo de como simular um sinal com LEDs utilizando o simulador Tinkercad. Com essa ferramenta é possível criar diversos projetos e experimentar diferentes configurações de componentes e programação.

## Referências

- [Apostila de Robótica]({{site.data.references.apostilas.informatica[3].link}})
