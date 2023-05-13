---
title:  "Programação visual com Netbeans"
date: 2023-05-10 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, gui, java, ide, uml, diagrama]
---
O NetBeans é um ambiente de desenvolvimento integrado (IDE) popular que suporta várias linguagens de programação, incluindo Java, C/C++, PHP e HTML/CSS/JavaScript.

## Como utilizar o Netbeans

Embora o NetBeans seja conhecido principalmente pelo desenvolvimento Java, ele também possui recursos de desenvolvimento visual para criar interfaces gráficas de usuário (GUIs) de forma fácil e rápida. Aqui estão os passos básicos para usar o NetBeans para programar de forma visual:

1. Instale o NetBeans: Faça o download e instale a versão mais recente do NetBeans no site oficial ([netbeans.apache.org](http://netbeans.apache.org/)). Certifique-se de escolher a versão correta para a linguagem de programação que você deseja usar.
2. Crie um novo projeto: Abra o NetBeans e clique em "File" (Arquivo) no menu superior e selecione "New Project" (Novo Projeto). Escolha a categoria relevante, como "Java" ou "Web", e selecione o tipo de projeto que deseja criar. Dê um nome ao projeto e escolha o local onde deseja salvá-lo.
3. Crie uma GUI: Com o projeto criado, clique com o botão direito do mouse na pasta "Source Packages" (Pacotes de Origem) do seu projeto e selecione "New" (Novo) e, em seguida, "JFrame Form" (Formulário de JFrame) ou "JPanel Form" (Formulário de JPanel), dependendo da sua necessidade.
4. Projete a GUI: O NetBeans abrirá uma janela de design visual para a sua GUI. Você pode arrastar e soltar componentes da paleta (localizada no canto direito da interface) para a área de design para criar a interface do usuário. Os componentes incluem botões, rótulos, campos de texto e muitos outros. Você também pode ajustar as propriedades dos componentes, como tamanho, posição, cor, fonte, etc.
5. Adicione código: Depois de projetar a GUI, você pode adicionar lógica ao seu programa. Clique duas vezes em um componente para criar um evento associado a ele, como um botão de clique. O NetBeans abrirá automaticamente o editor de código para o evento selecionado, onde você pode adicionar seu código Java para lidar com a lógica do evento.
6. Execute o programa: Depois de concluir o design e a codificação, você pode executar o programa clicando no botão "Run" (Executar) no menu superior ou pressionando a tecla F6. O NetBeans compilará o código e executará o programa, exibindo a interface gráfica que você criou.

> Esses são apenas os passos básicos para começar a usar o NetBeans para programação visual. O NetBeans possui muitos recursos adicionais que podem facilitar o desenvolvimento, como depuração, controle de versão integrado, suporte a frameworks e muito mais. Conforme você ganha mais experiência, pode explorar esses recursos para melhorar ainda mais seu processo de desenvolvimento.
{: .prompt-info }

## Diagramas de classe com EasyUML

O EasyUML permite criar visualmente diagramas de classes, e gerar o código em java e vice-versa.

### Como utilizar o EasyUML

Para criar diagramas de classes usando o plugin EasyUML no NetBeans, siga as etapas abaixo:

1. Instale o plugin EasyUML: Visite o [repositório do Github](https://github.com/mgeee35/easyUML) e baixe os arquivos, conforme o [vídeo explicativo](https://www.youtube.com/watch?v=KaUtssmQs6A).
2. Abra o NetBeans e vá para "Tools" (Ferramentas) no menu superior e selecione "Plugins" (Plugins). Na janela "Plugins", clique na guia "Downloaded Plugins" (Plugins Baixados) e pesquise pela pasta "EasyUML" baixados anteriormente. Selecione os plugin "EasyUML" na lista de resultados e clique no botão "Install" (Instalar) para instalá-los. Siga as instruções fornecidas pelo assistente de instalação para concluir o processo.
3. Crie um novo projeto UML com diagrama de classe: Com o plugin EasyUML instalado, você pode criar um novo diagrama de classe. Crie um novo projeto: Abra o NetBeans e clique em "File" (Arquivo) no menu superior e selecione "New Project" (Novo Projeto). Escolha a categoria  "UML", e selecione o tipo de projeto "UML Diagrams Project". Dê um nome ao projeto e escolha o local onde deseja salvá-lo.
4. Clique com o botão direito do mouse na pasta do projeto em que deseja criar o diagrama, vá para "New" (Novo) e selecione "Other" (outro), selecione: "UML" e, em seguida, "Class Diagram" (Diagrama de Classe).
5. Adicione classes ao diagrama: Com o diagrama de classe aberto, você pode adicionar classes a ele. Clique com o botão direito do mouse no espaço em branco do diagrama e selecione "Add Class" (Adicionar Classe). Digite o nome da classe e pressione Enter. Repita esse processo para adicionar outras classes ao seu diagrama.
6. Adicione relacionamentos entre classes: Com as classes adicionadas, você pode adicionar relacionamentos entre elas. Clique com o botão direito do mouse em uma classe e vá para "Add Relationship" (Adicionar Relacionamento). Selecione o tipo de relacionamento que deseja adicionar, como associação, herança, dependência, etc. Clique na classe de destino para estabelecer o relacionamento. Repita esse processo para adicionar outros relacionamentos conforme necessário.
7. Personalize o diagrama: Você pode personalizar o diagrama de classe conforme suas preferências. Clique com o botão direito do mouse em uma classe ou relacionamento e selecione "Properties" (Propriedades) para ajustar as configurações, como nome da classe, multiplicidade do relacionamento, visibilidade dos membros, etc. Você também pode redimensionar as classes e reposicioná-las no diagrama conforme necessário.
8. Salve o diagrama: Após concluir o diagrama de classe, salve-o clicando em "File" (Arquivo) no menu superior e selecionando "Save" (Salvar). Escolha um local e um nome para o arquivo de diagrama e clique em "Save" (Salvar).

> O EasyUML é um plugin útil para criar diagramas de classes no NetBeans, mas tenha em mente que ele pode ter algumas limitações e não possui todos os recursos avançados de ferramentas dedicadas para modelagem UML. Para projetos maiores e mais complexos, é recomendável considerar o uso de ferramentas específicas de modelagem UML, por exemplo o [PlantUML](https://plantuml.com/), e o [Mermaid](https://mermaid.live/).
{: .prompt-tip }

### Gerando código Java

Para gerar código Java a partir do diagrama de classe criado no plugin EasyUML no NetBeans:

1. Gerar código Java: Após criar o diagrama de classe no EasyUML, clique com o botão direito do mouse no diagrama no painel de projetos ou na área de trabalho do NetBeans. No menu de contexto, selecione "Generate Code" (Gerar Código).
2. Escolha as opções de geração de código: Uma nova janela será aberta com opções de geração de código. Você pode selecionar as configurações desejadas, como o local onde deseja salvar o código gerado, o pacote de destino, as opções de importação, entre outros. Selecione as opções apropriadas para o seu projeto.
3. Iniciar a geração de código: Após escolher as opções de geração de código, clique no botão "Generate" (Gerar). O EasyUML converterá o diagrama de classe em código Java com base nas configurações selecionadas.
4. Revisar e ajustar o código gerado: Uma vez concluída a geração de código, você poderá revisar o código Java gerado. Abra os arquivos de código Java no NetBeans e verifique se o código atende às suas necessidades. Se necessário, você pode fazer ajustes adicionais no código gerado.
5. Salvar e compilar o código: Após revisar e fazer os ajustes necessários no código gerado, salve os arquivos de código Java no local desejado dentro do seu projeto NetBeans. Em seguida, compile o código para garantir que não haja erros de compilação. Você pode fazer isso pressionando a tecla F9 ou clicando em "Run" (Executar) no menu superior e selecionando "Compile Project" (Compilar Projeto).

> Pronto! Agora você gerou o código Java a partir do diagrama de classe criado no plugin EasyUML no NetBeans. Lembre-se de que o código gerado é uma base inicial e pode exigir ajustes adicionais para atender aos requisitos específicos do seu projeto.
{: .prompt-info }

## Referências

{% include embed/youtube.html id='KaUtssmQs6A' %}

- [Download dos Plugins do easyUML](https://github.com/mgeee35/easyUML)
- [NetBeans - Getting Help](https://netbeans.apache.org/help/index.html)
