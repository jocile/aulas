---
title:  "Desenvolvimento RAD com Delphi"
date: 2021-05-27 10:22:00 -0300
categories: [DESENVOLVIMENTO, RAD]
tags: [delphi, tutorial, curso, programação]
---
O Delphi desenvolve aplicações utilizando componentes especializados, visualmente com o arrastar e soltar do mouse, no conceito de RAD (Rapid Application Development – Desenvolvimento Rápido de Aplicações).

## Conceito
O Delphi é uma ferramenta extremamente prática e seu maior sucesso se deu na versão 7, com uma infinidade de componentes capazes de realizar os serviços, que seriam necessários no desenvolvimento do software, proporcionando ganho em tempo e produtividade.

## História
O Delphi existe a mais de 20 anos,foi lançado em 1995 pela Borland[^1] e atualmente pode desenvolver aplicativos multiplataformas, utilizando o  mesmo desenvolvimento, atendendo os sistemas operacionais: Windows, Mac OS, IOS, linux e Android.

Inicialmente utilizava a linguagem Object Pascal, e seus componentes na bilioteca visual VCL (Visual Component Library), e uma infinidade de pacotes de componentes que turbinam o Delphi com milhares de funcionalidades.

A partir de 2003 passou a adotar as linguagens:
* .net (2003);
*  C++ (2006);
*  em 2007 foi adquirido pela empresa Embarcadero, especialista em ferramentas para bancos de dados; 
*  A partir de 2010 com o Delphi XE passou a dar suporte para a plataforma iOS e OSX da Apple, utilizando o fantástico framework Firemonkey;
*  Em 2013 passou a dar suporte ao Android em sua versão XE5;

## Principais versões e suas capacidades
A partir da versão XE7, o Delphi passou a disponibilizar: 
- Multi-Device Designer, 
- Guied Tours (Uma espécie de guia de apresentação da IDE), 
- Splash Screen para Android, 
- importação de bibliotecas Java para Android, 
- programação paralela com a class TParallel, Jump List para VCL, 
- EMS (Enterprise Mobility Services), 
- suporte a Bluetooth/Bluetooth LE (Low Energy) 
- e integração com GIT para controle de código-fonte

Na versão XE8:
- Multi-Device Preview;
- suporte total a aplicativos iOS 64 bits;
- funções nativas do sistema operacional, como: TListView, TSwitch, TMemo, TCalendar, TMultiview e TEdit;
- Desktop Web Browsers, 
- Mapas Interativos, 
- AppAnalytics, 
- suporte a Beacons (Internet das Coisas), 
- suporte a TeraDATA
- integração com Mercurial (controle de código-fonte).

Na versão 10 Seattle:
- suporte a serviços no Android, 
- suporte a intents (intenções) do Android;
- suporte ao banco MongoDB, 
- novos controle VCL compatíveis com Windows 10, como: TRelativePanel, TSplitView, TToggleView, TActivityIndicator, TSearchBox; 
- FireMonkey StyleDesigner;
- suporte a JSON Improvements; 
- DataSnap HTTP Nativo.

## Instalação
Atualmente o Delphi encontra-se na versão 10.3 Rio (Comunity Edition) e 10.4 Sidney. Disponívelno no site da Embarcadero, encontramos a versão Comunidade para [download](https://www.embarcadero.com/br/products/delphi/product-editions) livre.

* Inicialmente é necessário preencher com um email no cadastro, para iniciar o download e receber o serial de instalação[^2];
* Na instalação podemos selecionar as plataformas e pacotes para onde serão compiladados os aplicativos;

### Kits de desenvolvimento Android
Para o Android é necessário o Kit de Desenvolvimento de Software (Software Development Kit ou SDK), que é um conjunto de ferramentas que os desenvolvedores e programadores usam para criar aplicativos para smartphones e tablets com o sistema operacional da Google.

O SDK inclui[^4]\:
* SDK tools com
  - SDK Manager - gerenciador de pacotes do SDK;
  - AVD Manager - interface gráfica de dispositivos virtuais Android;
  - Emulador Dalvik - para testar os aplicativos;
  - Debug Monitor Server;
  - sqlite3 - banco de dados usados pelos aplicativos Android;


> Já o Kit de Desenvolvimento Nativo (NDK, na sigla em inglês) é um conjunto de ferramentas que permite usar códigos C e C++ no Android, além de fornecer bibliotecas de plataforma que podem ser usadas para gerenciar atividades nativas e acessar componentes físicos do dispositivo, como sensores e entrada de toque[^3].

Para cada versão do Android existe uma versão correspondente do SDK, NDK e Java. O responsável pelas versões do SDK é o "SDK Manager", que baixa automaticamente novas versões.

Para verificarmos esta instalação (automática) dos pacotes de desenvolvimento Java SDK, acessamos a configuração do "SDK Manager":
- selecionando o menu superior "Tools", 
- escolhendo "Options", 
- em seguida "Deployment", 
- e em "SDK Manager", onde vemos os locais (pasta base) desta instalação.


Para instalar (manualmente) uma versão específica do Android:
* Primeiramente pesquisamos o [download do Android NDK](https://developer.android.com/ndk/downloads?hl=pt-br), 
* da mesma maneira pesquisamos o [download do SDK](https://developer.android.com/studio?hl=pt-br#downloads) e do [Java](https://www.java.com/pt-BR/download/manual.jsp);
* Em seguida baixar e descompactar os arquivos nos respectivos locais (pasta base) que serão usados pelo Delphi.
* Agora acessamos o "SDK Manager" (ítem anterior), e clicamos no botão "Add", podemos configurar o local do novo SDK e NDK;


> Quando já baixamnos um SDK, podemos executar (como administrador) o "SDK Manager" para baixar diferentes versões, geralmente ele vem junto com o pacote SDK. Selecionamos a versão do Android que desejamos e clicamos no botão "Install".


## Criando aplicações para multi dispositivos
* Selecionar o caminho "File", "New", "Multi-DeviceApplication", "Blank Application";
* Será criado um arquivo "unit" (unit.pas) contendo o código criado pelo Delphi.
* Será aberto um novo form (formulário .fmx), onde podemos adicionar visualmente nosso componentes.

## Ambiente de desenvolvimento
Os componentes são organizados da seguinte maneira[^5]\:
* à esquerda do form temos:
  - o explorador (Struture) - onde organizamos os componentes que utilizamos;
  - o Object Inspector - a tabela de propriedades do componente selecionado, permitindo a sua configuração;
* à direita do form temos:
  - a paletta  - com a lista de componentes que podemos utilizar, arrastando e soltando no form com o mouse;
  - o explorador (Project) - onde organizamos os arquivos que utilizamos no desenvolvimento, e onde podemos configur a plataforma de compilação do aplicativo (targuet plataforms).

## Componentes
Os componentes são funcionalidades encapsuladas (API) que permitem o reaproveitamento de código, podem ser adicionados através de suas bibliotecas, e encontrados na palleta.

As principais[^6] são:
* Button - botão clicável;
* BitBtn - botão com imagem;
* Label - para rótulo texto;
* Edit - caixa de entrada de texto quer recebe digitação;
* Rectangle - cria um quadro para organizar outros componentes;
* CheckBox - caixa de seleção;
* ListBox - lista de informações;
* RadioGroup - caixa de seleção de opções;
* RadioButton - caixa de seleção;
* ActionList - alterar uma ação;
* MainMenu - cria um menu de opções
* GroupBox - agrupar outros componentes

## Eventos
Eventos são respostas às ações, por exemplo como o clicar de um botão.

No "Object Inspector" selecionamos a aba "events", onde podemos encontrar o OnClick - clicar do botão esquerdo do mouse, e clicando neste entramos na área de código, para programar a função (resposta) da ação click.

## Funções
A programação fica localizada nas funções, que podem ser disparadas pelos eventos.

Exemplo:
* MessageDlg `(mensagem, tipo, [botões], ContextoAjuda)` - exibe uma caixas de mensagens;

## Referências

[^1]: SANTOS, Adriano. Delphi: conheça a história da ferramenta que existe, há 20 anos! **Portal Tdevrocks**, 2015. Disponível em: <http://portal.tdevrocks.com.br/2015/10/02/delphi-conheca-a-historia-da-ferramenta-mais-atual-que-existe-ha-20-anos/>. Acessado em 27 de maio de 2021.

[^2]: MAZUTTI, Heber Stein. Curso Delphi - Curso App Financeiro 2.0. **YouTube**, 2020. Disponível em: <https://www.youtube.com/playlist?list=PLRRDagG1z-EKgQDXX676r9zA6UPkenQF3>. Acessado em 27 de maio de 2021.

[^3]: Primeiros passos com o NDK. **Guias Developer Android**. Disponível em: <https://developer.android.com/ndk/guides?hl=pt-br#:~:text=O%20Kit%20de%20Desenvolvimento%20Nativo>. Acessado em 27 de maio de 2021.

[^4]: CORDEIRO, Felipe. Android SDK: o que é? para que server? Como usar? **Androidpro**. Disponível em: <https://www.androidpro.com.br/blog/android-studio/android-sdk/>. Acessado em 27 de maio de 2021.

[^5]: BEZERRA, Cicero Aparecido Bezerra. **Introdução à linguagem de programação Delphi**. 2018. UFPR. Disponível em: <https://acervodigital.ufpr.br/bitstream/handle/1884/55881/delphi.pdf>. Acessado em: 29 de maio de 2021.

[^6]: VCL Components Categories Index.  **Embarcadero**. Disponível em <http://docwiki.embarcadero.com/RADStudio/Rio/en/VCL_Components_Categories_Index> . Acessado em 29 de maio de 2021.
