---
title:  "Comandos no terminal do linux"
author: Prof. Jocilé Serra
date: 2021-05-31 14:00:00 -0300
categories: [AULAS 2022, SISTEMAS OPERACIONAIS LIVRES]
tags: [prompt, comandos, linux, manutenção]
---
O linux permite realizar tarefas com o sistema operacional inserindo comandos no terminal. Cada comando aciona um programa, armazenado geralmente na pasta bin, e pode receber parâmetros com diversas opções.

Neste artigo irei reunir uma lista dos principais comandos e suas funcionalidades.

## Acessando o terminal de comandos

O terminal de comandos do linux (bash), é uma interface que recebe comandos de teclado do usuário, estes executam programas utilitários que  realizam tarefas no sistema operacional (unix shell). Esses comandos podem ser reunidos em um arquivo texto (scripts[^2]) para automatizar sequências de tarefas.

Para acessar o terminal, podemos utilizar o atalho ctrl + shift + T, ou geralmente no menu de programas, na parte de administração.

## Vantagens do terminal

comandos no terminal podem[^1]:

* Automatizar tarefas repetitivas.
* Economizar tempo.
* Oferece uma sequência de atividades bem estruturadas usando argumentos
* Simplifica argumentos complexos em um único comando.
* Linhas de lógica podem ser criadas com funções no terminal.
* Os comandos podem ser executados na inicialização.

## Ajuda com os comandos

Podemos acessar um manual do terminal entrando com o camando:

* man bash

Também tempos uma ajuda com os comandos com:

* help comando

## Principais comandos

* clear - limpa a tela[^3];
* find arquivo - busca de arquivo dentro do diretório[^7];
* find / -name arquivo - busca em todo sistema[^11];
* locate arquivo - busca o arquivo em todo sistema;
* ls \| grep "palavra" - busca arquivos que contenham palavra[^12];
* sudo su - modo super usário (administrador);

## Atalhos de teclado

* ctrl + c - cancela a tarefa atual;
* crtl + shift + c - copia o texto selecionado
* ctrl + shift + v - cola texto copiado;
* setas para cima e para baixo - repete comandos anteriores;
* tab - completa o texto do comando;

## Comandos de diretórios

* pwd - mostra o diretório (pasta) atual[^10];
* ls -l - lista o conteúdo do diretório;
* cd diretório - muda de diretório;
* cat > arquivo.txt - cria arquivo de texto;
* touch arquivo.txt - cria arquivo de texto;
* mkdir diretório - cria diretório;
* rmdir diretório - remove diretório;
* cp - copia;
* cp -i teste.txt teste-copia.txt
* cp -R /home/ftp /home/ftp2
* mv arquivo /home/arquivo - move o arquivo;
* rm arquivo - remove o arquivo;
* rm -r /tmp/pasta - remove a pasta e seu conteúdo;
* ln -s arquivo /home/desktop/arquivo - cria um atalho para o arquivo;
* cat teste.txt - exibe o conteúdo do arquivo texto;
* cat contato1 > contato2 - copia o conteúdo de um arquivo para outro.
* file arquivo - identifica o tipo de arquivo;
* tar zcvf pasta - empacotar a pasta em pasta.tar.gz
* tar zxpvf arquivo.tar.gz - descompacta o arquivo tar.gz;
* gzip arquivo - compacta o arquivo com .gz
* gunzip arquivo.gz - descompacta o arquivo gzip.

## Comandos de usuários

* useradd usuario - adiciona usuário[^4];
* passwd - muda a senha ao usuário;
* cat /etc/passwd - Mostra usuários;
* userdel - nome do usuário Remove usuário;
* userdel -r - nome do usuário Remove usuário e sua pasta;
* cat /etc/group - Mostra grupos;
* groupadd - nome do grupo Adiciona grupo;
* adduser - nome do usuário -g nome do grupo Cria e adiciona usuário ao grupo;

## Comandos de segurança CACL

* ls -la - Mostra pastas e subpastas com as permissões[^8];
* chmod o=r arquivo - permite outros visualizar o arquivo;
* chmod o+x arquivo - permite outros executarem o arquivo;
* chmod -R o=rx pasta - permite outros visualizarem e executarem aquivos dentro da pasta;
* chmod u+x teste.txt - permite o usuário executar o arquivo;
* chmod g-w teste.txt - permite o grupo editar o arquivo;
* sudo chown usuário arquivo - altera o proprietário do arquivo;

## Comandos de rede

* hostname - Mostra o nome da máquina;
* who - mostra o usuário logado;
* ifconfig - Mostra endereço da placa de rede;
* cat /etc/hosts - Mostra nomes e IPs das máquinas na rede
* netstat -ln - Mostra portas escutando possíveis conexões;

## Instalação de programas

As bibliotecas de programas ficam armazenadas em repositórios (servidores), e são gerenciadas pelo "apt"[^5], e sua interface "apt-get", que pode ser acessado na interface gráfica pelo "synaptic". Os principais comandos do apt são[^6]:

* sudo apt-get update - atualiza a lista de repositórios dos pacotes de programas;
* sudo apt-get install programa - instala um programa;
* sudo apt upgrade - atualizações de segurança do sistema;
* sudo apt-get remove pacote - remove o pacote;
* sudo apt autoremove - remove pacotes desnecessários;
* sudo apt-get clean - remover arquivos inúteis do cache;
* sudo apt-get autoclean - remove pacotes antigos ou duplicados;
* sudo apt-get check - procura arquivos corrompidos;

## Comandos do sistema

* top - informações de recursos e processos[^9];
* uname -a - Mostra informações sobre o kernel da máquina;
* free -m - informações de memória livre;
* df -h - informações das partições;
* last - quem se logou no sistema;
* lspci -v \| more - Mostra os drivers das placas;
* df -h - Mostra tamanho do disco raiz;
* ps -df - Mostra processos em andamento;
* ps aux \| grep programa - lista processo pelo nome do programa.
* pgrep programa - mostra o PID que identifica o programa;
* kill -9 PID - encerra o processo pelo número PID;
* pstree - mostra um gráfico em árvore dos processos;
* sudo reboot - reinicia o computador;
* sudo shutdown -h now - desliga o computador;
* sudo shutdown -h +15 - desligar daqui a 15 min.
* sudo shutdown -r 18:00 - desligar às 18 hrs.

## Comando de manutenção

* df - informações de uso do HD;
* sudo fdisk -l - informações de partições e HDs;
* du -h --max-depth=1 - informação do tamanho dos diretórios;
* chkconfig \| more - Estado dos serviços iniciados com o sistema;
* chkconfig nome_serviço - Verifica estado do serviço;
* chkconfig nome_serviço - on ou off Iniciar ou não o serviço junto com o sistema;
* fsck /dev/sda1 - corrigir erros no hd;
* fsck.ext3 -f /dev/sda1 - recuperar partição de hd danificado;

## Referências

[^1]: Comandos Bash Linux - Guia Básico e Exemplos de Uso. **Hostinger tutoriais**, 2020. Disponível em <https://www.hostinger.com.br/tutoriais/comandos-bash-linux>. Acessado em 31 de maio de 2021.

[^2]: FILIPE, Luis, Arthur e Rodrigo. Shell Script. **UFES**. Disponível em: <http://www.inf.ufes.br/~vitorsouza/archive/2020/wp-content/uploads/teaching-lp-20132-seminario-shell.pdf>. Acessado em 31 de maio de 2021.

[^3]: Iniciando o uso do terminal do linux. **UFSM**, 2021. Disponível em: <https://www.ufsm.br/pet/sistemas-de-informacao/2020/04/29/iniciando-o-uso-do-terminal-do-linu/>. Acessado em 31 de maio de 2021.

[^4]: The Complete Guide to "useradd" Command in Linux - 15 Practical Examples. **Tecmint**, 2019. Disponível em: <https://www.tecmint.com/add-users-in-linux/>. Acessado em 31 de maio de 2021.

[^5]: O Manual do Administrador Debian. **Debian handbook**. Disponível em: <https://debian-handbook.info/browse/pt-BR/stable/sect.apt-get.html>. Acessado em 31 de maio de 2021.

[^6]: Lista de comandos de manutenção. **Blog Click**, 2009. Disponível em: <https://ueider.wordpress.com/2009/11/18/linux-lista-de-comandos-de-manutencao/>. Acessado em 31 de maio de 2021.

[^7]: MATHEUS, Yure. Procurando arquivos no Linux. **Alura**, 2017. Disponível em: <https://www.alura.com.br/artigos/procurando-arquivos-no-linux>. Acessado em 31 de maio de 2021.

[^8]: MATHEUS, Yure. Entendendo as permissões no Linux. **Alura**, 2017. Disponível em: <https://www.alura.com.br/artigos/entendendo-as-permissoes-no-linux>. Acessado em 31 de maio de 2021.

[^9]: DELFINO, Pedro. Comando Kill - Aprenda A Gerenciar Processos No Linux ( Windows E MacOS). **Profissionais Linux**. Disponível em: <https://e-tinet.com/linux/comando-kill/>. Acessado em 31 de maio de 2021.

[^10]: CISNEIROS, Hugo. Comandos no linux. **UFCG**, 2003. Disponível em <http://www.dca.ufcg.edu.br/mna/Linux.pdf>. Acessado em 31 de maio de 2021.

[^11]: ALVIN, Alexander. **A BIG collection of Unix/Linux 'find' command examples**, 2021. Disponível em <https://alvinalexander.com/unix/edu/examples/find.shtml>. Acessado em 31 de maio de 2021.

[^12]: WELLINGTON, Weslley. Usando grep e egrep. **Viva o linux**, 2011. Disponível em <https://www.vivaolinux.com.br/artigo/Usando-grep-e-egrep?pagina=2>. Acessado em 31 de maio de 2021.

Comandos básicos. **Viva o linux**, 2007. Disponível em <https://www.vivaolinux.com.br/dica/Comandos-basicos>. Acessado em 31 de maio de 2021.

Referência Debian. **Debian**. Disponível em: <https://www.debian.org/doc/manuals/debian-reference/index.pt.html>. Acessado em 31 de maio de 2021.

Referência de comandos linux. **Rapidtables**. Disponível em: <https://www.rapidtables.com/code/linux/index.html>. Acessado em 31 de maio de 2021.

Referência de linha de comando. **SS64**. Disponível em: <https://ss64.com/>. Acessado em 31 de maio de 2021.
