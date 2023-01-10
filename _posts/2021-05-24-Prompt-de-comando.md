---
title:  "O Prompt de Comando"
author: Prof. Jocilé Serra
date: 2021-05-24 16:10:00 -0300
categories: [AULAS 2022, SISTEMA OPERACIONAL PROPRIETÁRIO]
tags: [prompt, comandos, Windows, manutenção]
---
**A base para o que conhecemos hoje do sistema Windows é o DOS (Disk Operating System), e hoje está embutido no sistema operacional. Isso possibilita a utilização do sistema digitando linhas de comandos, ou seja, instruções em texto que realizam tarefas.**

# Acessando o Prompt de Comando

Para começarmos a utilizar os comandos de texto, use o atalho CTRL + R para acessar a janela executar. A seguir, digite “cmd”, como mostra a figura abaixo.

![Executar](/assets/img/img_posts/cmd_exec.png)_Executar o prompt de comandos_

Pode acontecer um problema na inicialização do sistema, e será necessário acessar as ferramentas de reparo pelo prompt de comando do Window através de um pendrive[^6]. Então execute os seguintes passos[^8]\:

* Insira o DVD ou o pen drive do Windows no computador.
* Execute o boot do Windows pelo disco de instalação. Se não souber como iniciar o * boot pelo pen drive, siga este guia.
* Na tela de instalação, clique em Avançar e, depois, em Reparar o computador.
* Clique em Solução de Problemas -> Opções Avançadas -> 


Para que possamos digitar nossos comandos, no Windows, utilizamos o Prompt de Comando.

Quando o Prompt está trabalhando, mostra a unidade ou partição em que está trabalhando e a pasta em que está trabalhando. Veja o exemplo:

![Executar](/assets/img/img_posts/cmd_particao.png)_Informações do prompt de comandos_

O exemplo acima mostra:
*  A versão do Windows instalado na máquina;
*  A Unidade em que o sistema está instalado (C:);
*  O diretório em uso (C:\Users\hugo);
*  O símbolo (>) indicando que a sua direita, o usuário poderá digitar os comandos.

# Configurando o prompt de Comandos
Podemos editar algumas configurações para que a sua utilização fique mais adequada para o uso. Para isso, clique com o botão direito do mouse na barra de títulos ou acione através do atalho (Alt+espaço) e depois em ―padrões. Agora, podemos configurar a janela do prompt da maneira que achar mais conveniente, possibilitando a mudanças no tamanho do cursor, layout e cursor.

Seja curioso! Investigue mais possibilidades de configurações!!

# Formato dos comandos
O formato dos comandos a serem digitados no Prompt é

    Comando <parâmetro> [especificação] diretório

Alguns podem ser executados de forma simples, bastando para isso digitar o comando, outros necessitam de atributos e/ou paramentos para completar o comando. Veja um exemplo simples. O comando ―ver‖ que indica na tela, a versão utilizada ou instalada no computador. Ela não possui nenhum atributo que qualifique ou adicione algo a mais na tarefa. Já o comando dir, que lista arquivos em um diretório, necessita além da digitação do comando, os parâmetros do local ou diretório a ser aplicado o comando, e pode vir acompanhado de uma especificação. Por exemplo, se o comando vier adicionado o a especificação /d, a listagem obtida de arquivos será dada por coluna. Veja a figura abaixo:

![Executar](/assets/img/img_posts/cmd_comandos.png)_Comandos do prompt de comandos_

# Comandos do prompt
A seguir uma lista de comandos que podemos usar no prompt[^9]\:

* cls - limpa a tela do prompt de comando
* ver - Exibe a versão do Windows instalado no computador. cls - Limpa a tela do prompt de comandos.
* date - Permite alteração da data.
* time - Permite alteração da hora.
* Help – exibe uma lista de comandos e uma breve descrição dos mesmos. Se em seguida do help for digitado algum outro comando, uma descrição mais detalhada do comando será exibida.
* Exit – sai do prompt de comando
* Systeminfo – Exibe Informações da configuração do sistema 
* Ping 192.168.1.10 - Testa conexão tcp/ip

## Desligando o computador
O camando shutdowm desliga o computador com os seguintes parâmentos[^4]:

```
shutdowm -s - desliga PC
shutdowm -r - desliga e reinicia o pc
shutdowm -c - desliga podendo deixar um comentário
shutdowm -h – hiberna o computador
shutdowm -l - fazer logoff
shutdowm -a - Anular um desligamento do sistema.
shutdowm -g - Desligar e reiniciar o computador.
shutdowm -t [x] – Desliga o computador em x segundos.
```

## Mudando as cores do prompt
* O comando color - Permite alterar a cor de fundo e da fonte Lista de cores:
  
|     | cor        |     | cor           |     | cor              |
| --- | ---------- | --- | ------------- | --- | ---------------- |
| 0   | - preto    | 6   | - Amarelo     | C   | - Vermelho claro |
| 1   | - Azul     | 7   | - Branco      | D   | - Roxo claro     |
| 2   | - Verde    | 8   | - Cinza       | E   | - Amarelo claro  |
| 3   | - Cian     | 9   | - Azul claro  | F   | - Branco claro   |
| 4   | - Vermelho | A   | - Verde claro |     |
| 5   | - Roxo     | B   | - Cian claro  |     |
 

* Exemplo para mudar a cor de fundo para azul e o texto para branco:
  
    color 17

## Diretórios e arquivos
Os seguintes comandos são usados para manipulação de arquivos e diretórios no Windows[^2]\:
* dir - lista arquivos e pastas
* cd caminho - muda de diretório
* cd .. - sobe para o diretório acima
* md nome_da_pasta - cria uma pasta no atual diretório
* rd nome_da_pasta - remove a pasta
* nul nome_do_arquivo - cria um arquivo
* del arquivo - deleta o arquivo
* copy arquivo c:\pasta\arquivo - copia o arquivo para a pasta
* ren nome outro_nome - renomeia o nome do arquivo ou pasta

### Permissões no diretório:
 O CACLS[^3] é um utilitário de linha de comando do Windows NT, que é usado para exibir ou modificar o arquivo ou listas de controle de acesso de diretório (ACLs), veja a seguir como exibir ou modificar as permissões[^1] de acesso no Windows:

* cacls nomedoarquivo (ou pasta) - exibe as permissões com a legenda:
  - R – Ler
  - W – Gravar
  - C – Alterar (gravar)
  - F – Controle total
* cacls nomedoarquivo (ou pasta) /E /P (ou G) - altera as permissões através dos parâmetros:
  - /E – Edita as permissões
  - /G – Concede direitos ao usuário especificado. Utiliza-se cacls “nomearquivo” /E /G usuario:Permissão(R,W,C,F)
  - /P – Substitui os direitos ao usuário especificado. Utiliza-se cacls “nomearquivo” /E /P usuario:Permissão(R,W,C,F)
  - /R – Revoga os direitos do usuário especificado. Utiliza-se calcs “nomearquivo” /E /R usuario
  - /D – Nega Acesso ao usuário especificado. Utiliza-se calcs “nomearquivo” /E /D usuario
* cacls “nomedoarquivo” /E /R (ou D) usuario - remove as permissões.


## Redes Windows
Os seguintes comandos exibem as configurações da rede no Windows:
* ipconfig /all - exibe as informações de configuração da rede;
* ping 192.168.1.1 - testa a comunicação com o IP;
* netstat - exibe estatísticas da rede;
* arp -a - exibe informações da tabela de roteamento ARP;
* tracert - exibe os saltos pelos roteadores no caminho da rede;
* nslookup - exibe informaçõe do servidor de DNS;
* route - exibe e configura as tabelas de roteamento da rede;
* netdiag - diagnóstico de problemas de rede
* getmac - retorna o endereço MAC de um dispositivo de rede.

## Gerenciando processos
* tasklist - exibe uma lista dos processos ativos
* tasklist /fi "imagename eq nome_do_programa" - exibe informações sobre o programa
* taskkill /pid 1230 - finaliza o processo com identificador 1230

## Restaurar o sistema Windows
Os seguintes comandos são usados para a manutenção[^5] do sistema Windows:
* sfc /scannow - Verificador de arquivos do sistema verifica arquivos de sistema e substitui as versões incorretas;
* DISM /image:D:\ /cleanup-image /restorehealth - limpeza de imagem e restauração
* rstrui - acessa a restauração do sistema
* chkdsk /f /r c: - localiza setores defeituosos do HD e tenta recuperar os dados[^7]
* defrag /c c: - desgragmenta o HD


# Referências

[^1]: Alterar Permissões via CMD no Windows 10. **Riocamp**, 2019. Disponível em <http://www.riocamp.com.br/boletim/n117-alterar-permissoes-via-cmd-windows-10.asp >. Acessado em 24 de maio de 2021.

[^2]: Como Criar e Apagar Arquivos de Diretórios Através do Prompt de Comando. **Wikihow** Disponível em <https://pt.wikihow.com/Criar-e-Apagar-Arquivos-de-Diret%C3%B3rios-Atrav%C3%A9s-do-Prompt-de-Comando >. Acessado em 26 de maio de 2021.


[^3]: Como definir ou redefinir as permissões NTFS de um arquivo ou pasta com o comando icacls. **Iperius**, 2020. Disponível em: <https://www.iperiusbackup.net/pt-br/como-definir-ou-redefinir-as-permissoes-ntfs-de-um-arquivo-ou-pasta-com-o-comando-icacls/ >. Acessado em 24 de maio de 2021.


[^4]: Guia do Linux/Iniciante+Intermediário/Migrando do DOS/Windows para o Linux/Comandos equivalentes entre DOS/CMD do Windows e o Linux. **Wikibooks**, 2014. Disponível em: <https://pt.wikibooks.org/wiki/Guia_do_Linux/Iniciante%2BIntermedi%C3%A1rio/Migrando_do_DOS/Windows_para_o_Linux/Comandos_equivalentes_entre_DOS/CMD_do_Windows_e_o_Linux >. Acessado em 24 de maio de 2021.

[^5]: MELO. Diego. Como restaurar o Windows 10 e o Windows 7. **Tecnoblog**, 2018. Disponível em <https://tecnoblog.net/241887/como-restaurar-windows-10-ou-windows-7/ >. Acessado em 24 de maio de 2021.

[^6]: Use Windows Ambiente de Recuperação (WinRE) para solucionar problemas comuns de inicialização. **Microsoft**, 2020. Disponível em <https://docs.microsoft.com/pt-br/troubleshoot/windows-server/performance/use-winre-to-troubleshoot-startup-issue >. Acessado em 24 de maio de 2021.

[^7]: Chkdsk. **Microsoft**,2012. Disponível em <https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/chkdsk >. Acessado em 24 de maio de 2021.

[^8]: Recuperando seu Windows através do Prompt de Comando. **Microsoft**, 2015. Disponível em <https://answers.microsoft.com/pt-br/windows/forum/windows_10-update/recuperando-seu-windows-atrav%C3%A9s-do-prompt-de/75d2a02d-a3cc-4b21-b218-7074abfa812c >. Acessado em 24 de maio de 2021.


[^9]: Referências de comandos. **SS64**, 2021. Disponível em <https://ss64.com/ >. Acessado em 24 de maio de 2021.
