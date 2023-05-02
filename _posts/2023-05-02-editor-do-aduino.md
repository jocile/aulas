---
title:  "Editor do Arduino"
date: 2023-05-02 09:00:00 -0300
categories: [AULAS, NOÇÕES DE ROBÓTICA]
tags: [arduino, robótica, simulador, eletrônica]
---
O Editor da Web para Arduino é uma ótima opção para trabalhar com sua placa Arduino, armazenando todos os seus esboços online, sem requerer a instalação de núcleos e incluindo a maioria das bibliotecas populares. Este tutorial irá orientá-lo nas etapas necessárias para usar o Web Editor com sua placa Arduino, permitindo que você:

- Crie uma conta para usar o Web Editor
- Baixe e instale o plugin de criação
- Certifique-se de que sua placa seja reconhecida pelo computador
- Carregue um exemplo simples de piscar

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte hardware e software:

- Editor Web do Arduino
- Plugin de criação instalado
- Placa Arduino
- Cabo USB (diferente dependendo da placa que você está usando)

## Configurando o Editor da Web

A seguir, as etapas necessárias para configurar sua placa Arduino para funcionar com o Web Editor.

### Criando uma conta

O primeiro passo é criar uma conta navegando até [login.arduino.cc/login](https://login.arduino.cc/login). Aqui, você pode criar manualmente uma conta ou fazer login usando sua conta do Google, por exemplo.

### Instalando o plugin

Após criar e ativar sua conta, é preciso instalar o Create Plugin navegando até a página [Create agent installation](https://create.arduino.cc/getting-started/plugin-installation). Clique em "Iniciar" para iniciar a instalação e siga as instruções na página para baixar o Create Agent e instalá-lo localmente em sua máquina.

### Carregando um exemplo simples

Agora, vamos testar o Editor da Web, carregando um exemplo simples para o quadro. Primeiramente, navegue até o Editor Web, clicando no botão Editor da Web no menu no canto superior direito ou acessando [este link](https://create.arduino.cc/editor).

Quando estiver no Editor da Web, verifique se a placa que está conectada ao computador aparece na lista. Em seguida, carregue o exemplo básico do Blink navegando até Example > 01.Basics > Blink. Para carregá-lo, clique na seta no canto superior esquerdo do editor. Certifique-se de não desconectar a placa durante a fase de upload.

Após o carregamento, uma mensagem de sucesso deve aparecer na parte inferior do editor. Se olharmos para a placa, veremos o LED integrado piscando com um intervalo de 1 segundo, indicando que o código foi carregado com sucesso.

Parabéns! Agora, você pode usar o Editor da Web para carregar seus esboços para a placa Arduino de forma fácil e rápida.

## Referências

[Getting started with the Web Editor | Arduino Documentation](https://docs.arduino.cc/arduino-cloud/getting-started/getting-started-web-editor)
