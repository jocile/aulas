---
title:  "Comandos do Git"
categories: [DESENVOLVIMENTO, GIT]
tags: [git, comandos, repositório]
---

Git é um controle de versões e GitHub é o repositório na internet

## Informações do repositório
* git status - estado dos arquivos
* git status -s - status mais curto
* git log - mostra um histórico dos commits
* git log --oneline - simplifica em uma linha
* git log --oneline --decorate - mostra para onde os ponteiros do branch estão apontando
* git log --graph - desenha um gráfico
* git log --oneline --graph - simplifica com um gráfico
* git log --oneline --decorate --graph --all - exibindo com algo mais legível e com cores
* git log -p meus-arquivos - histórico de arquivos
* git log --after="MMM DD YYYY" - histórico a partir de uma data
* git log --before="MMM DD YYYY" - histórico antes de uma data
* git log --autor=nome-autor - histórico do autor
* git diff - mostrar diferenças
* git mergetool - usa a ferramenta gráfica para resolver conflitos

## Adicionando
* git add arquivo - adicionar o arquivo ou diretório para o commit
* git rm arquivo - remove o arquivo do stage e do diretório de trabalho
* git commit -m "Comentário"
* git commit -v  - inclui as diferenças (diff) da sua alteração
* git commit -am "este comando adiciona e comita comentando"

## Desfazendo
* git checkout arquivo - remove as modificações no arquivo que ainda não foi adicionado
* git checkout . - remove as modificações ainda não foram adicionadas
* git clean -df - apaga novos arquivos que não foram adicionados
* git reset - apaga novos arquivos que foram adicionados
* git revert HEAD - desfaz o commit
* git commit --amend - renomear a mensagem do último commit

## Remoto
* git remote -v - visualizar links dos repositórios remotos
* git remote show origin - Inspecionar um repositório remoto
* git remote add origin endereço-no-github - Adicionar repositório remoto
* git remote add upstream endereço-no-github - adicionar repositório remoto original de um fork
* git clone endereço-no-github - clonar o projeto do servidor remoto para local
* git pull origin nome-do-branch - puxar (trazer) o histórico do servidor remoto
* git fetch upstream nome-do-branch - Baixar objetos e referências de outro repositório remoto
* git push origin nome-do-branch - empurrar (enviar) o histórico do local para o servidor remoto
* git remote rm origin - remove o link do repositório remoto
* git remote rename nome-atual novo-nome - renomeia repositório remoto
* git remote set-url origin http://meu-novo-endereco/meu-projeto.git - altera o link do remoto
* git push origin -d minha-branch - apaga um branch remoto

## Ramificações
* git branch - Identifica a versão em que o projeto se encontra.
* git branch -a - lista os branches
* git checkout nome-do-branch - trocar, alternar de branch (muda o projeto para o branch)
* git checkout master - retornar a ultima versão do projeto
* git branch nome-do-branch - criar um branch
* git checkout -b nome-do-branch - criar um branch e selecioná-lo em apenas um passo (atalho
* git reset --hard nome-do-branch - 
* git branch -d nome-do-branch  - deletar um branch
* git push origin nome-do-branch - Para deletar um branch remoto enviar um push após deletar local
* git merge nome-do-branch - une o branch ao branch em que o projeto se encontra
* git branch -m novo-nome-da-branch - renomeia o branch

### Tags
* git tag - listar as tags
* git show v1.4 - detalhar tag
* git tag v1.4-lw - criar a tag tipo leve
* git tag -a v1.4 -m "my version 1.4" - criar a tag anotada
* git tag -a v1.2 9fceb02 - criar uma tag para um branch específico
* git push origin v1.5 - enviar a tag para o servidor
* git push origin --tags - enviar todas tags para o servidor
* git checkout -b version2 v2.0.0 - criar um branch a partir de uma tag

## Configurações
* git init - Para inicializar um repositório
* git config --list - Listando as configurações
* git config --global user.name "Fulano de Tal" - Configurar o nome
* git config --global user.email fulanodetal@exemplo.br  - Configurar o email
* git config --global core.editor nome-do-editor - Configurar o editor

## Referências: 
* [Livro do Git](https://git-scm.com/book/pt-br/v2)
* [Referência do Git](https://git-scm.com/docs)
* [Resumo](http://devfuria.com.br/git/resumo/)
* [Curso no YouTube](https://www.youtube.com/watch?v=v8-4rI0cJXE&list=PLbEOwbQR9lqzK14I7OOeREEIE4k6rjgIj)
* [Livro Fundamentos de Git](https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Gravando-Altera%C3%A7%C3%B5es-em-Seu-Reposit%C3%B3rio)
* [Clonando um repositório](https://docs.github.com/pt/github/getting-started-with-github/fork-a-repo)
* [Comandos que voce precisa conhecer](https://www.treinaweb.com.br/blog/comandos-do-git-que-voce-precisa-conhecer-parte-1/)
