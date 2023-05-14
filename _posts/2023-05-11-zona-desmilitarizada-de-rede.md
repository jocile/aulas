---
title: "Zona desmilitarizada de rede"
date: 2023-05-11 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, segurança]
---
A segurança em redes de computadores é um tema fundamental na era da informação, nela a Zona Desmilitarizada (DMZ), também conhecida como Rede de Perímetro, é uma área intermediária dentro de uma rede de computadores. Ela atua como uma barreira de proteção entre a rede pública (por exemplo, a internet) e a rede interna de uma empresa, conhecida como rede local. A DMZ é geralmente implementada por meio do uso de firewalls e tem a finalidade de permitir o acesso externo a serviços disponíveis na empresa.

## O Conceito da DMZ

A DMZ foi inspirada na zona desmilitarizada existente entre dois estados ou nações, onde operações militares não são permitidas. Por exemplo, na península coreana, existe uma zona desmilitarizada entre a Coreia do Sul e a Coreia do Norte. Esse conceito foi importado para redes de computadores, representando uma área que isola a rede interna da rede externa, criando assim um perímetro de segurança. A DMZ não é uma zona totalmente segura, mas também não é completamente insegura. Ela contém recursos que precisam ser acessados tanto internamente quanto externamente.

## Categorias de Locais em uma Rede

Dentro da DMZ, existem três categorias de locais ou dispositivos:

1. **Rede Local Insegura**: Essa categoria engloba dispositivos ou redes que não são confiáveis em termos de segurança. Esses dispositivos podem ser acessados tanto internamente quanto a partir da DMZ.
2. **Rede Local Protegida**: Nessa categoria, encontram-se dispositivos ou redes que são considerados protegidos e confiáveis. Eles não devem ser acessados por usuários externos ou não autorizados. A rede local protegida está isolada da DMZ.
3. **DMZ**: A DMZ é a área intermediária que atua como uma ponte entre a rede local insegura e a rede local protegida. Nela, são colocados servidores que fornecem serviços específicos, como servidor de e-mail, servidor FTP ou servidor web. Esses servidores, também conhecidos como "bastion hosts", podem ser acessados tanto internamente quanto a partir da rede externa.

## Serviços na DMZ

A DMZ permite a hospedagem de diversos serviços que são acessados a partir da rede externa. Alguns exemplos de serviços comumente implementados na DMZ são:

- Servidores web
- Servidores DNS
- Servidores de e-mail
- Servidores FTP
- Serviços de VoIP
- Bancos de dados específicos

Além disso, é possível implementar um proxy reverso na DMZ, que permite o acesso a outros serviços. Todos os serviços que são acessados a partir da rede externa são colocados na DMZ, garantindo que eles não acessem diretamente a rede interna protegida.

## Arquiteturas de Rede na DMZ

Existem duas arquiteturas principais para a implementação da DMZ: a arquitetura de um único firewall (single firewall) e a arquitetura de dois firewalls (dual firewall).

Na arquitetura de um único firewall, há apenas um firewall que faz a interligação entre a rede externa e a DMZ. Esse firewall possui pelo menos três interfaces de rede para conectar as três redes distintas: a rede externa, a DMZ e a rede interna protegida. O tráfego da rede externa para a DMZ é permitido, assim como o tráfego da DMZ para a rede interna é controlado pelo firewall. Essa arquitetura é mais simples de ser implementada, mas também é considerada menos segura, pois um único ponto de falha pode comprometer toda a segurança da rede.

Na arquitetura de dois firewalls, há dois firewalls que atuam em conjunto para proteger a rede interna. Um firewall é colocado entre a rede externa e a DMZ, e outro firewall é colocado entre a DMZ e a rede interna. Essa arquitetura cria uma camada adicional de segurança, pois o tráfego deve passar por dois firewalls para chegar à rede interna. Ela é mais complexa de ser implementada, mas oferece um nível de segurança maior do que a arquitetura de um único firewall.

## Considerações de Segurança

Ao implementar uma DMZ, é importante levar em consideração algumas práticas de segurança para garantir a proteção da rede interna. Algumas considerações incluem:

1. **Segmentação de Rede**: A DMZ deve ser isolada da rede interna por meio do uso de firewalls. Isso evita que um atacante, que conseguiu acesso à DMZ, comprometa diretamente a rede interna.
2. **Políticas de Acesso**: Devem ser definidas políticas de acesso claras para controlar o tráfego entre a rede externa, a DMZ e a rede interna. Apenas o tráfego necessário para os serviços hospedados na DMZ deve ser permitido, enquanto todo o restante deve ser bloqueado.
3. **Atualizações de Segurança**: Todos os dispositivos e servidores na DMZ devem estar com as atualizações de segurança em dia. Isso inclui aplicar patches de segurança, atualizar softwares e manter uma política de senhas fortes.
4. **Monitoramento de Tráfego**: É essencial ter um sistema de monitoramento de tráfego na DMZ para identificar possíveis ataques ou comportamentos suspeitos. Isso permite uma resposta rápida a incidentes de segurança.
5. **Backup e Recuperação**: É importante realizar backups periódicos dos servidores e dados na DMZ. Isso garante que, em caso de comprometimento ou falha, seja possível recuperar as informações importantes.

Essas são apenas algumas das considerações de segurança ao implementar uma DMZ. Cada ambiente e organização pode ter requisitos específicos que devem ser levados em conta para garantir a segurança adequada da rede.

## Conclusão

A Zona Desmilitarizada (DMZ) é uma abordagem de segurança para redes de computadores que visa proteger a rede interna de uma organização ao permitir o acesso externo a serviços específicos. Ela atua como uma barreira intermediária entre a rede externa e a rede interna protegida, hospedando servidores e serviços que precisam ser acessados tanto internamente quanto externamente. A implementação adequada da DMZ, juntamente com práticas de segurança sólidas, ajuda a mitigar riscos e fortalecer a segurança da rede como um todo.

## Referência

[![Segurança de redes video](http://img.youtube.com/vi/Cai9S-bYMoE/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=Cai9S-bYMoE)
