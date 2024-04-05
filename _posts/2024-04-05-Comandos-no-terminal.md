---
title:  "Comandos no Terminal"
author: Prof. Jocilé Serra
date: 2024-04-05 10:10:00 -0300
categories: [AULAS 2022, SISTEMA OPERACIONAL PROPRIETÁRIO]
tags: [prompt, comandos, Windows, linux, manutenção]
---
Comandos básicos para trabalhar com arquivos e pastas no terminal do Linux e no prompt de comando do Windows:

1. **Listar arquivos e pastas**:
    - Linux: `ls`
    - Windows: `dir`

2. **Mudar de diretório**:
    - Linux: `cd nome_da_pasta`
    - Windows: `cd nome_da_pasta`

3. **Criar um diretório**:
    - Linux: `mkdir nome_da_pasta`
    - Windows: `mkdir nome_da_pasta`

4. **Remover um arquivo**:
    - Linux: `rm nome_do_arquivo`
    - Windows: `del nome_do_arquivo`

5. **Remover um diretório**:
    - Linux: `rmdir nome_da_pasta` (para diretórios vazios) ou `rm -r nome_da_pasta` (para diretórios com arquivos)
    - Windows: `rmdir nome_da_pasta` (para diretórios vazios) ou `rmdir /S nome_da_pasta` (para diretórios com arquivos)

6. **Copiar um arquivo**:
    - Linux: `cp origem destino`
    - Windows: `copy origem destino`

7. **Mover ou renomear um arquivo**:
    - Linux: `mv origem destino`
    - Windows: `move origem destino`

Lembre-se de substituir "nome_da_pasta", "nome_do_arquivo", "origem" e "destino" pelos seus próprios valores. Estes são apenas alguns exemplos de comandos básicos, existem muitos mais comandos e opções disponíveis tanto no terminal do Linux quanto no prompt de comando do Windows.

## Exemplo

Exemplo passo a passo de como você pode usar esses comandos para criar um diretório, criar um arquivo de texto dentro dele, escrever algo nesse arquivo e, finalmente, exibir o conteúdo do arquivo.

**No terminal do Linux:**

```bash
# Criar um diretório
mkdir MeuDiretorio

# Mudar para o diretório criado
cd MeuDiretorio

# Criar um arquivo de texto e escrever algo nele
echo "Olá, Mundo!" > MeuArquivo.txt

# Exibir o conteúdo do arquivo
cat MeuArquivo.txt
```

**No prompt de comando do Windows:**

```cmd
REM Criar um diretório
mkdir MeuDiretorio

REM Mudar para o diretório criado
cd MeuDiretorio

REM Criar um arquivo de texto e escrever algo nele
echo Olá, Mundo! > MeuArquivo.txt

REM Exibir o conteúdo do arquivo
type MeuArquivo.txt
```

Nesses exemplos, "MeuDiretorio" é o nome do diretório que estamos criando, "MeuArquivo.txt" é o nome do arquivo de texto que estamos criando e "Olá, Mundo!" é o texto que estamos escrevendo no arquivo. Você pode substituir esses valores pelos que desejar.

Lembre-se de que esses comandos devem ser executados em um terminal ou prompt de comando. No Linux, você pode abrir um terminal procurando por "Terminal" no menu de aplicações. No Windows, você pode abrir o prompt de comando procurando por "cmd" no menu Iniciar.

## Scripts

Um script é um arquivo que contém uma sequência de comandos que são executados por um determinado interpretador. Em outras palavras, um script é basicamente um programa que é executado passo a passo pelo sistema operacional.

Os scripts são frequentemente usados para automatizar tarefas comuns, permitindo que o usuário economize tempo e evite erros. Eles podem ser escritos em várias linguagens de script, como Bash, Python, Perl, Ruby, JavaScript, entre outras.

Aqui estão algumas características dos scripts:

1. **Automatização de tarefas:** Scripts são frequentemente usados para automatizar tarefas repetitivas. Por exemplo, você pode escrever um script para fazer backup de arquivos, monitorar o uso do sistema, iniciar ou parar serviços, entre outras tarefas.

2. **Portabilidade:** Scripts podem ser executados em qualquer sistema que tenha o interpretador apropriado instalado. Isso os torna uma ferramenta útil para tarefas que precisam ser realizadas em vários sistemas.

3. **Facilidade de uso:** Scripts são arquivos de texto que podem ser criados e modificados com qualquer editor de texto. Isso os torna fáceis de criar, modificar e distribuir.

4. **Execução passo a passo:** Ao contrário dos programas compilados, os scripts são executados linha por linha. Isso pode torná-los mais fáceis de depurar, pois você pode ver exatamente o que o script está fazendo em cada etapa.

## Automatizando com Scripts

Etapas para criar scripts tanto no Linux quanto no Windows:

**No Linux:**

1. **Crie um novo arquivo de script.** Você pode usar qualquer editor de texto que preferir. Por exemplo, para criar um novo arquivo chamado `script.sh`, você pode abrir um terminal e digitar `nano script.sh`.

2. **Escreva seu script.** No topo do arquivo, você deve incluir `#!/bin/bash`. Isso indica que o script deve ser executado usando o interpretador bash. Em seguida, você pode escrever seus comandos. Por exemplo:

    ```bash
    #!/bin/bash
    echo "Olá, Mundo!"
    ```

3. **Salve e feche o arquivo.** No nano, você pode fazer isso pressionando `Ctrl+X`, depois `Y` para confirmar que deseja salvar as alterações e, em seguida, `Enter` para confirmar o nome do arquivo.

4. **Torne o script executável.** No terminal, digite `chmod +x script.sh`.

5. **Execute o script.** No terminal, digite `./script.sh`.

**No Windows:**

1. **Crie um novo arquivo de script.** Você pode usar qualquer editor de texto que preferir. Por exemplo, para criar um novo arquivo chamado `script.bat`, você pode abrir o Bloco de Notas e salvar o arquivo como `script.bat`.

2. **Escreva seu script.** No topo do arquivo, você deve incluir `@echo off`. Isso impede que o prompt de comando exiba o próprio comando. Em seguida, você pode escrever seus comandos. Por exemplo:

    ```cmd
    @echo off
    echo Olá, Mundo!
    ```

3. **Salve e feche o arquivo.** No Bloco de Notas, você pode fazer isso clicando em `Arquivo > Salvar`.

4. **Execute o script.** Abra o Prompt de Comando, navegue até o diretório onde o arquivo `script.bat` está localizado e digite `script.bat`.

## Exemplo de script

Siga os seguintes passos para criar um script tanto no linux como no windows, que crie uma pasta, entre nela, e  envie um texto para um arquivo, e crie outra pasta e copie esse arquivo.

**No terminal do Linux:**

Primeiro, crie um novo arquivo de script com seu editor de texto favorito e escreva o seguinte:

```bash
#!/bin/bash

# Criar uma pasta
mkdir pasta1

# Entrar na pasta
cd pasta1

# Enviar um texto para um arquivo
echo "Olá, Mundo!" > arquivo.txt

# Voltar para a pasta anterior
cd ..

# Criar outra pasta
mkdir pasta2

# Copiar o arquivo para a nova pasta
cp pasta1/arquivo.txt pasta2/
```

Salve este arquivo como `script.sh`, torne-o executável com `chmod +x script.sh` e execute-o com `./script.sh`.

**No prompt de comando do Windows:**

Primeiro, crie um novo arquivo de script com seu editor de texto favorito e escreva o seguinte:

```cmd
@echo off

REM Criar uma pasta
mkdir pasta1

REM Entrar na pasta
cd pasta1

REM Enviar um texto para um arquivo
echo Olá, Mundo! > arquivo.txt

REM Voltar para a pasta anterior
cd ..

REM Criar outra pasta
mkdir pasta2

REM Copiar o arquivo para a nova pasta
copy pasta1\arquivo.txt pasta2\
```

Salve este arquivo como `script.bat` e execute-o com `script.bat`.

Nesses exemplos, "pasta1" e "pasta2" são os nomes das pastas que estamos criando, "arquivo.txt" é o nome do arquivo que estamos criando e "Olá, Mundo!" é o texto que estamos escrevendo no arquivo. Você pode substituir esses valores pelos que desejar.

## Referências

- [Comandos no Terminal do linux]({% post_url 2021-05-31-Comandos-no-terminal-linux %})
- [Comandos no Prompt do Windows]({% post_url 2021-05-24-Prompt-de-comando %})
