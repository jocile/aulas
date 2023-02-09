---
title:  "Componentes principais de uma rede"
date: 2023-02-07 09:00:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [redes, planejamento, infraestrutura]
---
Dispositivos e tecnologias que podem ser usados dependendo das necessidades específicas de uma rede de computadores.

## Equipamentos de redes

- Placa de rede: dispositivo de interface de conexão de rede para conectar o computador com a rede.
- Roteadores: responsáveis por encaminhar pacotes de dados entre redes e controlar o tráfego de rede.
- Switches: encaminham pacotes de dados entre dispositivos na mesma rede.
- Hubs: concentram e transmitem pacotes de dados para todos os dispositivos conectados na rede.
- Modems: permitem que as redes de computadores se conectem à internet ou a outras redes externas.
- Firewalls: protegem as redes de ameaças externas, como vírus e ataques de hackers.
- Bridges: conectam duas redes separadas e permitem que os dispositivos compartilhem informações.
- Access Points (APs): permitem que dispositivos sem fio se conectem à rede.
- Cabeamento: incluindo cabos de cobre e fibra óptica, é utilizado para conectar os dispositivos de rede entre si.
- Servidores: armazenam e gerenciam informações, arquivos e recursos compartilhados na rede.

## Placa de rede

![Placa de rede]({{site.data.images.placa-de-rede.link}})
_{{site.data.images.placa-de-rede.caption}}_

Cada dispositivo em uma rede precisa ter uma interface de rede, que é responsável por fornecer a conexão física entre o dispositivo e a rede.

A NIC (Network Interface Card), também conhecida como placa de interface de rede, é o componente que lida com a transmissão e recepção de dados na rede. Ela pode ser integrada à placa-mãe do computador ou ser uma placa separada que é instalada em uma slot de expansão dentro do computador. A NIC é responsável por codificar os dados em um formato que pode ser transmitido através da rede e também é responsável por decodificar os dados recebidos.

Além disso, é importante destacar que existem duas formas de conectar dispositivos em uma rede: via cabo de rede ou através de uma rede sem fio. No caso de uma conexão via cabo, a NIC usa uma porta Ethernet para enviar e receber dados através de um cabo de rede. Já no caso de uma rede sem fio, a NIC usa uma placa de rede sem fio (também conhecida como placa Wi-Fi) para enviar e receber dados através do ar, sem a necessidade de cabos físicos.

## Hubs

![Hub]({{site.data.images.hub.link}})
_{{site.data.images.hub.caption}}_

Os hubs são dispositivos de rede simples que permitem a conexão de vários computadores em uma rede. Eles funcionam como um ponto central para onde todos os dados são enviados e, em seguida, replicados para todos os outros dispositivos conectados.

Os hubs básicos funcionam no nível de camada física (camada 1) do modelo OSI, replicando todos os pacotes de dados recebidos para todas as portas conectadas. Cada dispositivo na rede (como uma placa de rede) precisa então determinar se a informação recebida é destinada a ele ou não, descartando os pacotes que não são relevantes.

No entanto, é importante observar que os hubs básicos são limitados em sua capacidade de controlar o tráfego de rede e podem resultar em colisões de pacotes de dados, o que pode afetar negativamente a performance da rede. Por essa razão, hoje em dia, os switches são mais comumente usados em redes de computadores.

## Switches

![Switch]({{site.data.images.switch.link}})
_{{site.data.images.switch.caption}}_

Os switches são considerados dispositivos mais inteligentes do que os hubs, pois possuem a capacidade de realizar a comutação de pacotes de dados em vez de simplesmente replicá-los para todas as portas conectadas.

Os switches criam tabelas de endereços MAC (Media Access Control) de todos os dispositivos conectados a cada porta, o que lhes permite entender qual computador está conectado a cada porta. Quando um pacote de dados é recebido por um switch, ele usa a informação da tabela para encaminhar o pacote apenas para a porta destinada ao dispositivo de destino, em vez de replicá-lo para todas as outras portas. Isso ajuda a reduzir a congestão da rede e melhora a performance geral da rede.

De fato, as redes de 10 ou mais computadores tendem a ser mais complexas e requerem uma gestão mais eficiente do tráfego de rede. Por isso, é recomendável utilizar switches em vez de hubs em redes deste tamanho, a fim de garantir uma comunicação confiável e eficiente entre os dispositivos.

## Roteadores

![Roteadores]({{site.data.images.roteador-wifi.link}})
_{{site.data.images.roteador-wifi.caption}}_

![Roteadores]({{site.data.images.roteador.link}})
_{{site.data.images.roteador.caption}}_

Os roteadores são switches inteligentes. Além de ter as funções de um switch, que é encaminhar pacotes de dados entre dispositivos na mesma rede, os roteadores também têm a capacidade de conhecer e compreender o endereço IP dos dispositivos em diferentes redes e de encaminhar pacotes de dados entre elas. Eles realizam o roteamento de pacotes de dados baseado em informações como o endereço IP de destino, a máscara de sub-rede e as informações de roteamento armazenadas na tabela de roteamento.

Em resumo, os roteadores são switches inteligentes que possuem a capacidade de se conectar a várias redes e de encaminhar pacotes de dados de forma eficiente e segura, garantindo a comunicação confiável entre dispositivos em diferentes redes.

## Referências

- [União Geek - principais dispositivos de redes de computadores](https://www.uniaogeek.com.br/principais-dispositivos-de-uma-rede-de-computadores-p2/)
- [FS Community - Hub vs Switch vs Router](https://community.fs.com/es/blog/whats-the-difference-hub-vs-switch-vs-router.html)
- [Projeto de redes - roteadores](https://www.projetoderedes.com.br/artigos/artigo_por_falar_em_roteadores.php)
- [Slide player - Hubs](https://slideplayer.com.br/slide/2845215/)
- [Slide player - Histórico de Hubs e Switches](https://slideplayer.com.br/slide/3477902/)
- [Slide player - Componentes de uma rede](https://slideplayer.com.br/slide/5613047/)
- [Apostila de Meios de Comunicação de Dados]({{site.data.references.apostilas.redes[0].link}})
