---
title: "Segurança WiFi"
date: 2023-04-20 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, simulador, packet tracer]
---
A segurança WPA2-PSK é uma das opções mais fortes para proteger a rede sem fio. Ela usa criptografia AES (Advanced Encryption Standard) de 128 bits para proteger a comunicação entre os dispositivos e o roteador WiFi.

Para configurar a segurança WPA2-PSK no roteador WiFi, siga os seguintes passos:

1. Na guia Configuração do roteador WiFi, selecione a guia Wireless.
2. Selecione a opção "Habilitar Rede sem Fio".
3. Digite um nome para a rede sem fio no campo "SSID". Este nome será exibido para os dispositivos móveis quando eles procurarem uma rede sem fio.
4. Em "Modo de Segurança", selecione "WPA2-PSK".
5. Digite uma senha forte no campo "Chave de Rede". A senha deve ter pelo menos oito caracteres e ser uma combinação de letras maiúsculas e minúsculas, números e símbolos.
6. Clique em "Aplicar" para salvar as configurações.

Com essa configuração, os dispositivos móveis precisam inserir a senha correta para se conectar à rede sem fio. Isso impede que usuários não autorizados acessem a rede sem fio e protege a comunicação entre os dispositivos e o roteador WiFi.

Além disso, é importante lembrar que a senha da rede sem fio deve ser alterada regularmente para aumentar ainda mais a segurança. Recomenda-se alterar a senha pelo menos uma vez a cada três meses ou sempre que um funcionário que tem acesso à senha deixar a empresa.

Adicionando um roteador WiFi

Seguindo a prática anterior, agora vamos adicionar um roteador WiFi à rede e configurá-lo para fornecer acesso à internet sem fio para os dispositivos móveis. Além disso, vamos adicionar uma camada de segurança ao acesso ao Access Point (AP), usando WPA2-PSK.

Passo 1: Adicione um roteador WiFi à topologia e conecte-o ao switch.

Passo 2: Configure o endereço IP e a máscara de sub-rede para o roteador WiFi, como mostrado abaixo:

- Roteador WiFi: 192.168.1.254/24

Passo 3: Configure a rede sem fio no roteador WiFi. Para isso, siga os seguintes passos:

a) Clique no roteador WiFi e selecione a guia Configuração.

b) Clique na guia Wireless e habilite a rede sem fio.

c) Configure o nome da rede (SSID) como "MinhaRedeWiFi".

d) Selecione o modo de segurança WPA2-PSK e defina uma senha forte.

e) Clique em OK para salvar as configurações.

Passo 4: Configure os dispositivos móveis para se conectarem à rede sem fio. Para isso, siga os seguintes passos:

a) Ligue o Wi-Fi nos dispositivos móveis e procure a rede "MinhaRedeWiFi".

b) Insira a senha configurada no Passo 3d quando solicitado.

c) Verifique se os dispositivos móveis receberam um endereço IP válido na rede.

Passo 5: Verifique se a conexão com a internet está funcionando corretamente. Para isso, abra um navegador em um dos dispositivos móveis e acesse qualquer site. O site deve ser exibido corretamente no navegador.

Passo 6: Verifique a segurança da rede sem fio. Para isso, tente se conectar à rede sem fio sem inserir a senha correta. A conexão não deve ser estabelecida e deve ser exibida uma mensagem de erro informando que a senha está incorreta.

Pronto! Agora você configurou um roteador WiFi na rede simulada do Packet Tracer e adicionou uma camada de segurança usando WPA2-PSK para proteger o acesso ao Access Point (AP).

## Segurança da configuração do roteador

Além da configuração de segurança, também é importante definir uma senha forte para o acesso à interface de administração do roteador WiFi. Isso garante que apenas usuários autorizados possam acessar e modificar as configurações do roteador WiFi.

Para definir a senha de administração, siga os seguintes passos:

1. Na guia Configuração do roteador WiFi, selecione a guia Segurança.
2. Em "Senha de Acesso", digite uma senha forte que contenha uma combinação de letras, números e símbolos. É recomendável que a senha tenha pelo menos oito caracteres.
3. Clique em "Aplicar" para salvar as configurações.

É importante salvar um backup das configurações do roteador WiFi regularmente. Isso permite que você restaure as configurações caso ocorra algum problema ou se precisar reconfigurar o roteador WiFi em outra ocasião.

Para salvar um backup das configurações, siga os seguintes passos:

1. Na guia Configuração do roteador WiFi, selecione a guia Administração.
2. Clique em "Salvar Configurações".
3. Escolha um local para salvar o arquivo de backup e dê um nome para o arquivo.
4. Clique em "Salvar" para salvar o arquivo de backup.

Com essas configurações adicionais, você garante que o roteador WiFi está protegido tanto em termos de segurança de acesso à rede sem fio quanto em termos de acesso à interface de administração. Além disso, a criação de backups regulares das configurações permite que você restaure as configurações rapidamente em caso de problemas.

## Referências

- [Simulador de redes]({% post_url 2022-08-09-simulador-de-redes %})

[![Segurança WiFi](http://img.youtube.com/vi/0hnWaKKJJug/0.jpg){: w="300" h="150" }](http://www.youtube.com/watch?v=0hnWaKKJJug)
