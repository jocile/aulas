---
title:  "Planejamento de Sistemas Operacionais livres"
author: Prof. Jocilé Serra
date: 2022-08-04 09:00:00 -0300
categories: [AULAS 2022, SISTEMAS OPERACIONAIS LIVRES]
tags: [linux, planejamento]
---
Apresentar os conceitos práticos na utilização de sistemas operacionais livres analisando a estrutura de funcionamento das principais distribuições do mercado com ênfase na distribuição
Ubuntu.

## Planejamento

* [x] Conceituar os [sistemas operacionais]({% post_url 2022-08-08-funcoes-do-sistema-operacional %}) (visão geral);
* [x] Conhecer as [principais distribuições Linux]({% post_url 2022-08-15-conhecendo-o-linux %}) existentes no mercado (distribuições de base);
* [x] Conhecer os pré-requisitos de hardware para instalação do Linux;
* [x] Praticar a instalação do sistema operacional Linux na distribuição Ubuntu;
* [x] Configurar o sistema operacional Ubuntu no pós-instalação (modo gráfico);
* [x] Entender a estruturação de diretórios Linux baseado na distribuição Ubuntu;
* [x] Operar com os principais comandos Linux através do terminal (ambiente de comandos);
* [x] Capacitar o aluno a instalar, configurar e resolver problemas apresentados pelo sistema operacional Ubuntu.

## Avaliações

* [x] Práticas no laboratório
  * [x] I[nstalação do Sistema Operacional Ubuntu](https://fiodevida.com/como-instalar-o-ubuntu-linux-no-windows-10-com-o-virtualbox/)
* [x] Avaliações globais
  * [x] Avaliação global 1
  * [x] Avaliação global 2

## Conteúdo programático

* Visão geral de sistema operacional
  * O sistema operacional como gerente de uma máquina
* Distribuições Linux
  * Distribuições de base
  * Interfaces gráficas usadas
  * Como escolher uma distribuição Linux
* [Requisitos de hardware para instalação do Linux](https://sempreupdate.com.br/requisitos-de-sistema-do-ubuntu-linux)
  * Arquitetura
  * Processamento
  * Armazenamento
  * Memória
* Preparando o dispositivo para instalação do Ubuntu
  * Como preparar o dispositivo inicializável: [Rufus](https://www.profissionaisti.com.br/como-criar-um-usb-bootavel-com-o-programa-rufus/) e [Yumi](https://br.ccm.net/faq/21234-criar-um-pen-drive-usb-multiboot-com-o-yumi-multiboot-usb-creator)
* [Instalando o sistema operacional Linux Ubuntu em uma máquina virtual](https://fiodevida.com/como-instalar-o-ubuntu-linux-no-windows-10-com-o-virtualbox/)
  * Iniciando a instalação: Tela de boas vindas: Experimentar ou instalar o Ubuntu
  * Escolha do layout do teclado
  * Atualizações e outros softwares
  * [Tipo de instalação](https://www.blogopcaolinux.com.br/2022/04/Guia-instalacao-Ubuntu-22-04-LTS-Jammy-Jellyfish.html) (Ponto de montagem, particionamento, sistemas de arquivos)
* Pós-instalação: Configurando o Ubuntu no modo gráfico
  * [Instalando programas através do Ubuntu Software](https://www.blogopcaolinux.com.br/2022/04/Guia-pos-instalacao-Ubuntu-22-04-LTS-Jammy-Jellyfish.html)
  * [Configuração de rede](https://pt.wikihow.com/Configurar-a-Rede-no-Ubuntu) (cabeada e sem fio) através da central de configuração
  * Criação de usuário através da central de configuração
  * Gerenciamento de impressoras
  * Programa e atualizações
* [Estrutura de diretórios linux](https://help.ubuntu.com/kubuntu/desktopguide/pt_BR/directories-file-systems.html)
  * Organização geral de diretórios e arquivos
* Visão geral do [Shell](https://guialinux.uniriotec.br/shell/) e o terminal Linux
  * Entendendo o Shell
  * Criação do superusuário (root) com o sudo passwd
  * Como trabalhar com linhas de comandos Linux no terminal
  * Buscando ajuda através de comandos ([man](https://guialinux.uniriotec.br/shell/) e [info](https://guialinux.uniriotec.br/info/))
* [Manipulando arquivos com os comandos](https://pt.wikibooks.org/wiki/Guia_do_Linux/Iniciante%2BIntermedi%C3%A1rio/Comandos_para_manipula%C3%A7%C3%A3o_de_Arquivos/cp):
  * [cd](https://guialinux.uniriotec.br/cd/), [ls](https://guialinux.uniriotec.br/ls/), [pwd](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-pwd/)
  * [mkdir](https://www.certificacaolinux.com.br/comando-linux-mkdir/), [rm](https://www.certificacaolinux.com.br/comando-linux-rm/) e [touch](https://www.hostinger.com.br/tutoriais/comando-touch-linux)
  * [cp, mv](http://www.bosontreinamentos.com.br/linux/comandos-cp-e-mv-como-copiar-e-mover-arquivos-no-linux/) e [rename](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-rename/)
  * [locate](https://guialinux.uniriotec.br/locate/) e [find](https://guialinux.uniriotec.br/find/)
* Compactar arquivos e diretórios com:
  * [gzip](https://guialinux.uniriotec.br/gzip/), [tar](https://guialinux.uniriotec.br/tar/)
  * [cat](https://guialinux.uniriotec.br/cat/), [pipe](https://pt.linuxteaching.com/article/linux_pipe_command)
* Editores de texto:
  * [gedit](https://ubunlog.com/pt/gedit-un-procesador-o-un-editor-de-codigo/), nano, [VI](https://www.vivaolinux.com.br/dica/VI-O-fantastico-editor-de-textos) e VIM
* Controle de usuários com:
  * [adduser](https://www.dicas-l.com.br/arquivo/comando_adduser_completo.php) e userdel
  * Comandos [chown](https://www.hostinger.com.br/tutoriais/comando-chown-linux) e [chmod](https://guialinux.uniriotec.br/chmod/)
* Instalando programas com:
  * [dpkg](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-dpkg/) e [apt](https://debian-handbook.info/browse/pt-BR/stable/sect.apt-get.html)
* Comandos de rede:
  * [hostname](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-hostname/), [arp](https://acervolima.com/comando-arp-no-linux-com-exemplos/), [ifconfig](http://www.bosontreinamentos.com.br/linux/certificacao-lpic-1/configuracao-de-rede-basica-comandos-ifconfig-e-dhclient-linux/)
  * [netstat](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-netstat/), [traceroute](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-traceroute/)
* [Comandos de sistema](https://canaltech.com.br/linux/conheca-6-comandos-para-gerenciar-processos-do-linux/):
  * [arch](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-arch/), [lsdev](https://maisgeek.com/como-listar-os-dispositivos-do-seu-computador-a-partir-do-terminal-linux/#8_O_Comando_lsdev), lspci, lsusb, df
  * [top](https://www.linuxdescomplicado.com.br/2013/12/comandos-linux-dominando-o-comando-top.html), [ps](https://www.certificacaolinux.com.br/comando-linux-ps/), [pstree](https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-pstree), [kill](https://e-tinet.com/linux/comando-kill/)
  * [reboot, power off e shutdown](http://www.bosontreinamentos.com.br/linux/como-desligar-e-reiniciar-o-linux-shutdown-reboot-halt-poweroff/)

## Referências

* [Aulas anteriores de Sistemas Operacionais](https://aulas.jocile.com/redes/sistemas-operacionais-redes)
* [Guia do Linux UNIRIO](https://guialinux.uniriotec.br/)
* [Guia do Linux iniciante e intermediário](https://pt.wikibooks.org/wiki/Guia_do_Linux/Iniciante%2BIntermedi%C3%A1rio)
* [Guia do Linux avançado](https://pt.wikibooks.org/wiki/Guia_do_Linux/Avan%C3%A7ado)
* [Comandos equivalentes entre DOS/CMD do Windows e o Linux](https://pt.wikibooks.org/wiki/Guia_do_Linux/Iniciante%2BIntermedi%C3%A1rio/Migrando_do_DOS/Windows_para_o_Linux/Comandos_equivalentes_entre_DOS/CMD_do_Windows_e_o_Linux)
* [Command line reference](https://ss64.com/)
* [Escopo de aula - acesso restrito a professores](https://drive.google.com/file/d/1HlKJseD8jSv9uAduwd6fLmAmh6wwXRrX/view?usp=sharing)
* [Cronograma de aula - acesso restrito a professores](https://drive.google.com/file/d/1Xb6PqPYrXhrsqjXsYaulEo2m4Z8Hn7I6/view?usp=sharing)
* [Kanban de planejamento da disciplina](https://github.com/users/jocile/projects/10)
* [Dúvidas e sugestões](https://github.com/jocile/redes-de-computadores/discussions)
