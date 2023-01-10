---
title:  "Funções do Sistema Operacional"
author: Prof. Jocilé Serra
date: 2022-08-08 21:00:00 -0300
categories: [AULAS 2022, SISTEMAS OPERACIONAIS LIVRES]
tags: [linux, devops]
---
A principal função do Sistema Operacional é gerenciar recursos, tais como os usuários, as memórias para os arquivos e o hardware com os dispositivos de entrada e saída, os aplicativos, a comunicação em rede, etc.

## O gerenciamento

![image](https://user-images.githubusercontent.com/45495068/183531771-86061c26-bf4a-4492-acf0-02bd18aee5ae.png)

Uma das principais funções do Sistema Operacional é gerenciar recursos, sejam os dispositivos de Entrada e Saída (E/S) ligados ao computador, os componentes de hardware e aplicativos de software, os usuários, a comunicação em rede, etc.

![image](https://user-images.githubusercontent.com/45495068/183531930-5ce5d8f8-7505-480f-8e48-35b88a205f9b.png)

É tarefa do sistema operacional enviar sinais, informando as ações que o usuário espera que o dispositivo realize; tratar as interrupções e erros gerados pelos dispositivos.

![image](https://user-images.githubusercontent.com/45495068/183532150-1f34cbca-37f5-4bb3-8f99-1d29a6b0f4aa.png)

## A interface

![image](https://user-images.githubusercontent.com/45495068/183532877-5e14240c-9017-4737-b89e-e7163bc9bc1d.png)

O sistema operacional é uma interface para interação do usuário e aplicativos e com o hardware.

> O Sistema Operacional trabalha mediando a comunicação entre dois elementos básicos do uso de um sistema computacional. De um lado nós temos o Hardware com sua complicada linguagem de máquina e emaranhados tecnológicos, do outro lado nós temos você, o ser humano. E servindo de interface entre você e todo este hardware tem o Sistema Operacional.

## Principais conceitos

Estudaremos termos como Processos, Núcleo (Kernel), Interpretador de Comandos (Sheel), Chamadas de Sistemas (system calls), Endereçamento de Memória, Memória Virtual e Entrada e Saída.

### Processos

* Programa - série de comandos - instruções elaboradas por um programador;
* Processo - programa em uma fila de execução do processador;

Durante toda execução de um processo ele pode mudar constantemente de estado de acordo com as circunstâncias, mais as mudanças não são aleatórias e muito menos acontecem a qualquer momento. Vejamos as quatro possíveis mudanças dos estados de processo:

![image](https://user-images.githubusercontent.com/45495068/183533695-76682171-1eee-4d64-903d-cf8c7c961010.png)

Note no gráfico acima que o processo quando em espera nunca volta para o estado de Execução e quando o processo está em estado de Pronto ele não retorna para estado de Espera logo, deduzimos que existem basicamente quatro mudanças de estado de um processo.

### Núcleo Kelnel

O núcleo (ou Kernel em inglês) é a parte central do Sistema Operacional na maioria dos computadores, ele que fica em contato direto com o Hardware da máquina.

![image](https://user-images.githubusercontent.com/45495068/183534041-6f0b2dae-19dc-486b-b1cf-aece511461d1.png)

Podemos observar que os aplicativos interagem diretamente com o núcleo e este, faz a gerência destes processos com o hardware do computador.

### O interpretador de comandos Shell

A nossa interação com os programas é feita pelo Interpretador de Comandos. Quando clicamos no botão fechar - é o interpretador de comandos que manda a informação solicitada via mouse para que todos os procedimentos relativos a esta ação seja feita.
Vale ressaltar que o Interpretador de Comandos não faz parte do Sistema Operacional ele emite um processo que cumprirá a ação solicitada pelo usuário e, quando o processo é finalizado o Interpretador de Comandos retorna ao usuário um ok e fica aguardando um novo comando.

### Chamadas do sistema

As chamadas de sistema são micro processo enviados pelos programas para o SO com instruções de funcionamento. Então, enquanto o shell é responsável pela interface entre o usuário e o SO, as chamadas de sistema são responsáveis pela interação entre os programas (aplicativos) com o núcleo (kernel).

Outro fato importante é que as Chamadas de Sistema varia de acordo com o SO, com certeza o do MS-DOS é diferente do Windows que é diferente do Linux que tem suas particularidades frente ao UNIX e assim sucessivamente.

Elas são responsáveis por:

* Chamar o gerenciamento de arquivos.
* Chamar o gerenciamento de diretórios.
* Chamar o gerenciamento de processos.
* Fazer a interação entre processos.

### Memória virtual

Os SO mais modernos tem a capacidade de gerenciar vários programas na memória principal ao mesmo tempo, para evitar problemas e conflitos, cada processo tem um espaço na memória para armazenar seu endereço. Este espaço pode ir de 0 até uma quantidade máxima que pode ser de 32 bits ($2^{32}$) ou de 64bit ($2^{64}$) de acordo com a arquitetura do computador.

![image](https://user-images.githubusercontent.com/45495068/183538423-c41d4747-e8e7-43a5-9c3b-f292f32f4c18.png)

Os SO utilizam de uma técnica conhecida de Memória Virtual quando um endereço de memória excede a capacidade máxima da memória
principal, isso consiste em armazenar estes endereços na memória secundária - o disco rígido. Alguns Sistemas Operacionais
reservam este espaço automaticamente, no linux ela conhecida como **Swap**.

## Referência

[Apostila de Sistemas Operacionais](https://educacaoprofissional.seduc.ce.gov.br/images/material_didatico/redes_de_computadores/redes_de_computadores_sistemas_operacionais.pdf). Secretaria de Educação do Estado do Ceará.
