---
title:  "Controle de versões com Git e GitHub"
date: 2023-05-17 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, git, github]
---
O Git e o GitHub são ferramentas essenciais para o controle de versão e colaboração no desenvolvimento de software. O Git é um sistema de controle de versão distribuído, enquanto o GitHub é uma plataforma baseada na web que permite hospedar e compartilhar projetos Git. Neste artigo, vamos explorar como usar o Git e o GitHub em um ambiente de desenvolvimento.

## Usando o Git

### Passo 1: Instalação do Git

1. Acesse o site oficial do Git em [https://git-scm.com/](https://git-scm.com/).
2. Faça o download da versão compatível com o seu sistema operacional (Windows, macOS, Linux) e execute o instalador.
3. Siga as instruções do instalador para concluir a instalação do Git.

### Passo 2: Configuração inicial do Git

1. Abra o terminal ou prompt de comando.
2. Execute o seguinte comando para configurar o seu nome de usuário:

`git config --global user.name "Seu Nome"`

3. Execute o seguinte comando para configurar o seu endereço de e-mail:

`git config --global user.email "seuemail@example.com"`

4. Opcionalmente, você pode configurar outras opções, como a cor da saída do Git:

`git config --global color.ui auto`

### Passo 3: Inicialização de um repositório Git

1. Crie uma nova pasta para o seu projeto.
2. Abra o terminal ou prompt de comando e navegue até a pasta do projeto usando o comando `cd`.
3. Execute o seguinte comando para inicializar um repositório Git na pasta:

`git init`

### Passo 4: Adição e confirmação de alterações

1. Coloque os arquivos do seu projeto na pasta do repositório Git.
2. Execute o seguinte comando para ver o status das alterações:

`git status`

3. Utilize o comando `git add` para adicionar os arquivos ao próximo commit:

`git add arquivo1.txt arquivo2.txt`

ou para adicionar todos os arquivos.
    
`git add .`

4. Execute o seguinte comando para confirmar as alterações:

`git commit -m "Mensagem do commit"`
 
5. Para visualizar as configurações execute o comando list:

`git config --list`

6. No Windows: marque para visualizar as extensões e os arquivos ocultos, em opções do explorador de arquivos.

![opcoes-explorador]({{site.data.images.opcoes-explorador.link}})
_{{site.data.images.opcoes-explorador.caption}}_

### Passo 5: Criação e utilização de branches

1. Execute o seguinte comando para criar uma nova branch:

`git branch nome-da-branch`

2. Troque para a nova branch usando o comando `git checkout`:

`git checkout nome-da-branch`

3. Realize as alterações necessárias nos arquivos.
4. Adicione e confirme as alterações como explicado anteriormente.
5. Para mesclar a branch com a branch principal (geralmente chamada de `main` ou `master`), troque para a branch principal e execute o comando `git merge`:

```plaintext
git checkout main
git merge nome-da-branch

```

## Usando o Github

### Passo 6: Uso do GitHub

1. Acesse o site do GitHub em [https://github.com/](https://github.com/) e crie uma conta, caso ainda não tenha.
2. Crie um novo repositório clicando no botão "New" ou "Novo".
3. Siga as instruções para criar um repositório remoto no GitHub.
4. No terminal ou prompt de comando, adicione o repositório remoto ao seu repositório local usando o seguinte comando:

`git remote add origin URL-do-repositorio-remoto`

5. Envie as alterações locais para o repositório remoto usando o comando `git push`:
Substitua `main` pelo nome da branch principal, se necessário.

`git push -u origin main`

Agora você está pronto para começar a usar o Git e o GitHub em seus projetos de desenvolvimento de software. Lembre-se de consultar a documentação oficial do Git e do GitHub para obter mais informações sobre os recursos avançados e práticas recomendadas.

### Usando o GitHub desktop

O GitHub Desktop é uma ferramenta gráfica que facilita o uso do GitHub para controle de versão e colaboração em projetos. Aqui está um guia básico sobre como usar o GitHub Desktop:

1. Instalação:
   - Baixe e instale o GitHub Desktop em seu computador a partir do site oficial do GitHub: [desktop.github.com](https://desktop.github.com/).

2. Configuração inicial:
   - Abra o GitHub Desktop e faça login com sua conta do GitHub.
   - Caso não tenha uma conta do GitHub, crie uma antes de prosseguir.

3. Clonando um repositório:
   - Clique no botão "Clone a repository" (Clonar um repositório) na página inicial do GitHub Desktop.
   - Escolha o repositório que deseja clonar da lista de repositórios disponíveis no GitHub.
   - Selecione o local onde deseja salvar o repositório clonado em seu computador.

4. Trabalhando em um repositório:
   - Depois de clonar um repositório, você poderá ver os arquivos e as alterações pendentes no painel do GitHub Desktop.
   - Para fazer alterações, adicione, modifique ou exclua arquivos em seu computador usando sua ferramenta de preferência (como um editor de código).

5. Enviando alterações:
   - No painel do GitHub Desktop, você verá as alterações que fez nos arquivos do repositório.
   - Selecione as alterações que deseja enviar ao repositório.
   - Adicione uma descrição opcional para descrever as alterações.
   - Clique no botão "Commit to main" (Enviar para o principal) para confirmar suas alterações localmente.

6. Sincronizando com o repositório remoto:
   - Depois de confirmar suas alterações localmente, você precisará enviá-las para o repositório remoto.
   - Clique no botão "Push origin" (Enviar origem) no canto superior direito do GitHub Desktop.
   - Isso enviará suas alterações para o repositório remoto no GitHub.

> Essas são apenas as etapas básicas para começar a usar o GitHub Desktop. A ferramenta possui mais recursos, como trabalhar com branches, resolver conflitos, visualizar histórico de alterações e colaborar com outros usuários. Recomendo explorar a documentação oficial do GitHub Desktop para obter mais informações sobre recursos avançados e funcionalidades adicionais.
{: .prompt-info }

## Utilizando o git e gihub no Nebeans

Para utilizar o Git e o GitHub com a IDE NetBeans, você precisa primeiro configurar o Git no seu ambiente e, em seguida, integrá-lo ao NetBeans. Aqui está um guia passo a passo sobre como fazer isso:

### Passo 1: Instalação e configuração do Git

1. Baixe e instale o Git no seu computador, seguindo as instruções do site oficial: [https://git-scm.com/](https://git-scm.com/).
2. Abra o terminal ou prompt de comando e configure seu nome de usuário Git com o seguinte comando:

`git config --global user.name "Seu Nome"`

3. Configure seu endereço de e-mail Git com o seguinte comando:

`git config --global user.email "seuemail@example.com"`

### Passo 2: Clonando um repositório do GitHub

1. No NetBeans, vá para "Equipe" (Team) e escolha "Git" > "Clonar" (Clone).
2. Na caixa de diálogo "Clonar Repositório", insira a URL do repositório do GitHub que você deseja clonar.
3. Escolha o diretório local onde você deseja clonar o repositório.
4. Selecione a branch desejada.
5. Clique em "Finalizar" (Finish) para iniciar o processo de clonagem.
6. Após a conclusão, o repositório será clonado para o diretório local especificado.

### Passo 3: Gerenciando e realizando alterações

1. No NetBeans, você verá o painel "Equipe" (Team) no lado esquerdo da IDE. Aqui você pode ver as alterações, histórico e outras operações relacionadas ao Git.
2. Para realizar alterações, faça modificações nos arquivos do projeto.
3. No painel "Equipe" (Team), você pode ver as alterações detectadas. Clique com o botão direito nas alterações e escolha "Adicionar" (Add) para adicioná-las ao próximo commit.
4. Após adicionar as alterações, clique com o botão direito no projeto e escolha "Commit" para confirmar as alterações.
5. No diálogo de confirmação, insira uma mensagem de commit e clique em "Confirmar" (Commit) para salvar as alterações localmente.
6. Você pode usar outras operações do Git, como criar e alternar entre branches, mesclar branches, etc., por meio do painel "Equipe" (Team).

## Passo 4: Enviando alterações para o GitHub

1. Após realizar os commits localmente, você pode enviar suas alterações para o repositório remoto no GitHub.
2. No painel "Equipe" (Team), clique com o botão direito no projeto e escolha "Git" > "Enviar" (Push).
3. Selecione a branch que deseja enviar para o repositório remoto e clique em "Próximo" (Next).
4. Verifique as alterações e clique em "Próximo" (Next).
5. Insira suas credenciais do GitHub, se solicitado.
6. Clique em "Finalizar" (Finish) para enviar as alterações para o repositório remoto.

Agora você pode usar o Git e o GitHub diretamente do NetBeans para gerenciar seus projetos de forma eficiente. Lembre-se de sincronizar suas alterações regularmente e realizar os commits com mensagens descritivas para manter um histórico claro do seu projeto.

## Referências

[![Tutorial Git e Github 2022 - Introdução prática para iniciantes](http://img.youtube.com/vi/_hZf1teRFNg/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=_hZf1teRFNg)
[![Como usar o Github Desktop](http://img.youtube.com/vi/Fj3gtbaF8WA/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=Fj3gtbaF8WA)

- [Comandos do Git]({% post_url 2021-05-10-Comandos-do-git %})
- [Livro do Git](https://git-scm.com/book/pt-br/v2)
