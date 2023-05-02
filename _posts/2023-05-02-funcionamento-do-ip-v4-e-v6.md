---
title: "Funcionamento do IP v4 e v6"
date: 2023-05-02 10:40:00 -0300
categories: [AULAS, INFRAESTRUTURA DE REDES]
tags: [infraestrutura, simulador, packet tracer]
---
O endereço IP é uma representação numérica criada para identificar uma interface específica em uma rede. Mesmo que muitas pessoas conheçam e usem esse endereço, não sabem como ele funciona por trás das cortinas. Este artigo tem como objetivo ajudá-lo a entender como funciona o IP, desde a criação até o presente momento, contextualizando o tema para o público em geral.IP

## História do IP

O desenvolvimento de tecnologias de comunicação, como os protocolos TCP e UDP e o HTTP, tornou possível a existência da Internet. O IP (Internet Protocol) foi criado para permitir que computadores se comuniquem em uma rede e é responsável por encaminhar pacotes de dados de um ponto a outro. O primeiro IP, chamado de RFC 760, foi publicado em janeiro de 1980 pela Advanced Research Project Agency Network (ARPANET) dos Estados Unidos. O protocolo IPv4 foi definido no RFC 791, em setembro de 1981.

As primeiras versões do protocolo, versões 1, 2 e 3 foram experimentais, assim como a versão 5. O IPv4 foi criado em uma época em que os computadores tinham pouquíssima memória e as conexões eram muito lentas, por isso precisavam economizar em tudo, inclusive no tamanho dos endereços. O IPv4 tem apenas três quartos bytes de tamanho para economizar memória e tempo de transmissão. Já na década de 80, percebeu-se que essas limitações do IPv4 eram muito grandes para o futuro da Internet.

O IP é uma parte fundamental da Internet e permite que computadores de diferentes partes do mundo se comuniquem entre si. A transição para o IPv6 é inevitável, uma vez que o IPv4 não tem mais endereços disponíveis. É importante estar ciente das mudanças e estar preparado para fazer a transição, para que a Internet continue a crescer e evoluir.

## IPv4

Existem duas especificações para os endereços IP: o IPv4 e o IPv6. O IPv4, endereço IP mais comum, é composto por números decimais que permitem o máximo de 4294967296 endereços únicos. Embora parecesse suficiente para criar uma rede gigante na década de 80, a verdade é que o IPv4 está acabando e, há pelo menos seis anos, existe até lista de espera para conseguir um endereço IPv4.

O IPv4 é um protocolo de endereçamento IP que é usado para conectar dispositivos em uma rede. Ele é usado para identificar e localizar dispositivos em uma rede, permitindo que eles se comuniquem uns com os outros. O IPv4 é composto por 32 bits, que são divididos em quatro octetos (ou bytes), cada um representado por um número decimal de 0 a 255.

### IPv4 descrição

Como é representado o IP V4 em formato decimal e pontuação. O IPv4 tem 32 bits, que são divididos em quatro partes de 8 bits cada. Cada uma dessas partes é chamada de octeto e é representada em formato decimal. Mas o que é um número decimal? É um sistema de numeração que utiliza 10 dígitos, de 0 a 9. Então, para representar o IPv4 em formato decimal, precisamos converter cada um dos seus oito bits em um número decimal.

Vamos pegar um exemplo de endereço IPv4: 192.168.0.1. Para converter em decimal, precisamos converter cada octeto em decimal. Então, temos 192.168.0.1 = 11000000.10101000.00000000.00000001. Agora, para converter em decimal, precisamos converter cada um desses oito bits em um número decimal, utilizando a seguinte tabela:

| Valor do bit | Valor decimal |
| ------------ | ------------- |
| 0            | 0             |
| 1            | 1             |

Utilizando essa tabela, podemos converter cada um dos oito bits em decimal. Então, temos:

```math
11000000 = 192
10101000 = 168
00000000 = 0
00000001 = 1

```

Portanto, o endereço IPv4 192.168.0.1 pode ser representado em formato decimal como 3232235521.

Mas como representamos esse endereço IPv4 para um ser humano entender e configurar em um computador? Usamos a pontuação. O endereço IPv4 é representado em formato decimal e pontuação, como 192.168.0.1. Cada um dos quatro octetos é separado por um ponto, facilitando a leitura e a configuração do endereço IPv4.

Em resumo, o IPv4 é representado em formato decimal e pontuação. Cada octeto é representado em decimal e, em seguida, é separado por um ponto para formar o endereço IPv4 completo.

### Máscara de sub-rede

A máscara de sub-rede é usada para dividir um endereço IP em uma parte de rede e uma parte de host. Ela é usada para determinar qual é o endereço de rede e qual é o endereço de host em um determinado endereço IP. A máscara de sub-rede é uma sequência de bits que é aplicada ao endereço IP para separar a parte de rede da parte de host.

### Classes do IPv4

O IPv4 é dividido em cinco classes: A, B, C, D e E. Cada classe define um intervalo diferente de endereços IP, com diferentes quantidades de bits para a identificação da rede e do host. As classes A, B e C são as mais comuns e são usadas para identificar redes públicas e privadas.

| Classe | Faixa de endereços IP       | Máscara de rede |
| ------ | --------------------------- | --------------- |
| A      | 1.0.0.0 - 126.0.0.0         | 255.0.0.0       |
| B      | 128.0.0.0 - 191.255.0.0     | 255.255.0.0     |
| C      | 192.0.0.0 - 223.255.255.0   | 255.255.255.0   |
| D      | 224.0.0.0 - 239.255.255.255 | N/A             |
| E      | 240.0.0.0 - 255.255.255.255 | N/A             |

Observe que as classes D e E são reservadas para usos específicos e não são geralmente utilizadas para endereços de rede regulares.

## IPs reservados

Existem alguns endereços IP reservados que não podem ser usados como endereços IP públicos e que são usados para fins específicos, como testes em redes privadas, multicast, broadcast, entre outros. Alguns dos endereços IP reservados mais comuns incluem:

- 10.0.0.0 a 10.255.255.255 (Classe A)
- 172.16.0.0 a 172.31.255.255 (Classe B)
- 192.168.0.0 a 192.168.255.255 (Classe C)
- 127.0.0.0 a 127.255.255.255 (loopback)
- 169.254.0.0 a 169.254.255.255 (APIPA ou Auto-IP)

Além disso, existem também endereços IP reservados para multicast, que permitem que os pacotes sejam enviados para vários destinos simultaneamente, como:

- 224.0.0.0 a 239.255.255.255

## IP v6

O IPv6 foi desenvolvido em 1998 pela NSF (National Science Foundation) e ratificado como padrão em 2017. Ele é composto por 128 bits, não mais usando números decimais, mas sim hexadecimais. Isso permite o equivalente a 2 elevado a 128, ou 340 undecilhões de endereços possíveis. Para ter uma noção, se um único endereço IPv6 fosse um pedacinho de fita adesiva com um centímetro quadrado, seria possível envolver toda a superfície da Terra com 7 camadas de endereço.

O IPv6 é a sexta versão do Protocolo de Internet (IP) e foi desenvolvido para substituir o IPv4, que estava ficando sem endereços IP disponíveis. O IPv6 utiliza um espaço de endereçamento muito maior do que o IPv4, permitindo um número muito maior de dispositivos conectados à Internet.

Aqui está uma breve descrição de como o IPv6 funciona:

1. Endereçamento: O IPv6 utiliza um espaço de endereçamento de 128 bits, permitindo 2^128 (aproximadamente 3,4x10^38) endereços IP possíveis. Isso é uma quantidade enorme de endereços e permite que cada dispositivo tenha um endereço IP exclusivo.
2. Cabeçalho: O cabeçalho IPv6 é mais simplificado em relação ao IPv4 e possui um tamanho fixo de 40 bytes. Ele contém informações como o endereço de origem, o endereço de destino, informações sobre o tipo de tráfego e outras informações necessárias para roteamento e entrega de pacotes.
3. Roteamento: O IPv6 utiliza um roteamento hierárquico, que permite que os pacotes sejam roteados de forma eficiente através da Internet. Isso é feito através do uso de endereços de rede que permitem que os pacotes sejam encaminhados em direção ao seu destino final.
4. Transição: A transição do IPv4 para o IPv6 pode ser um desafio, já que muitos dispositivos e redes ainda utilizam o IPv4. Para facilitar a transição, existem vários mecanismos que permitem que o IPv6 e o IPv4 coexistam e se comuniquem.

Essas são apenas algumas das características básicas do IPv6. Em geral, o IPv6 é uma evolução significativa em relação ao IPv4, oferecendo uma quantidade muito maior de endereços IP e outras melhorias em termos de roteamento, segurança e eficiência da rede.

## **Características do IPv6**

Algumas das principais características do IPv6 são:

- **Endereços IP maiores:** o IPv6 usa endereços de 128 bits em vez dos 32 bits do IPv4, o que permite um número muito maior de endereços disponíveis.
- **Multicast:** o IPv6 usa multicast de forma mais eficiente do que o IPv4.
- **Mobilidade:** o IPv6 foi projetado para funcionar com dispositivos móveis e em redes sem fio.
- **Segurança:** o IPv6 inclui melhorias de segurança em relação ao IPv4, incluindo autenticação e criptografia.
- **Eficiência:** o cabeçalho do IPv6 é mais fácil de processar pelos roteadores do que o do IPv4, o que torna o protocolo mais eficiente em termos de processamento de pacotes.

## Comparação IPv4 x IPv6

|                        | IPv4                                  | IPv6                                               |
| ---------------------- | ------------------------------------- | -------------------------------------------------- |
| Tamanho do endereço IP | 32 bits                               | 128 bits                                           |
| Número de endereços IP | 4,3 bilhões                           | 340 undecilhões (ou seja, 340 seguido de 36 zeros) |
| Cabeçalho do pacote    | 20 bytes                              | 40 bytes                                           |
| Endereçamento          | Decimais                              | Hexadecimais                                       |
| Multicast              | Sim                                   | Sim                                                |
| Mobilidade             | Suporte limitado                      | Projetado para dispositivos móveis                 |
| Segurança              | Criptografia e autenticação limitadas | Criptografia e autenticação incorporadas           |

## IPv6 descrição

O IPv6 é um protocolo de internet que suporta um endereço IP de 128 bits, o que permite um número muito maior de endereços possíveis do que o seu predecessor IPv4. O IPv6 é formado por oito partes de 16 bits, que podem ser representadas em números hexadecimais.

### O que é um número hexadecimal?

Um número hexadecimal é um sistema numérico que usa dez dígitos (0 a 9) e seis letras (A a F) para representar números. Em números hexadecimais, a letra A representa o número 10, B representa 11, C representa 12, e assim por diante, até a letra F, que representa o número 15.

### Conversão de IPv6 para hexadecimal

Para que os seres humanos possam entender o endereço IPv6 e configurá-lo em um computador, cada uma das oito partes de 16 bits é convertida em um número hexadecimal. Por exemplo, o número hexadecimal 2001 pode ser gerado a partir dos primeiros 16 bits do endereço IPv6.

### Representação do IPv6 em números hexadecimais

O endereço IPv6 é representado em números hexadecimais por oito partes separadas por dois pontos. Se houver uma sequência de partes com apenas zeros, é possível simplificar a representação substituindo todas as partes de zeros por :: seguido de dois pontos. No entanto, isso só pode ser feito uma vez em todo o endereço IPv6.

### Questão sobre o endereço IPv6

Uma questão sobre o endereço IPv6 afirma que ele é dividido em quatro grupos de 32 bits cada um, o que está incorreto. Na verdade, o endereço IPv6 é dividido em oito grupos de 16 bits cada um.

Em resumo, a representação em números hexadecimais é uma forma de simplificar o endereço IPv6 para que possa ser mais facilmente entendido pelos seres humanos. E, ao contrário do que afirmava a questão mencionada, o IPv6 é dividido em oito grupos de 16 bits.

### Exemplo

Um exemplo de endereço IPv6 seria:

2001:0db8:85a3:0000:0000:8a2e:0370:7334

Este endereço IPv6 é composto por 8 blocos de 4 dígitos hexadecimais separados por dois pontos. Cada bloco representa 16 bits (4 dígitos hexadecimais = 4x4 = 16), resultando em um total de 128 bits para todo o endereço. Os zeros à esquerda podem ser omitidos para facilitar a leitura, mas eles são obrigatórios na representação do endereço.

O exemplo acima é apenas um dos muitos endereços IPv6 possíveis. O IPv6 oferece um espaço de endereço tão grande que é improvável que dois dispositivos na mesma rede tenham endereços IP idênticos. Isso é uma grande melhoria em relação ao IPv4, que tem um espaço de endereço muito menor e pode levar a conflitos de endereço em redes maiores.

### Abreviando o IP v6

O IPv6 pode ser abreviado utilizando algumas regras. A abreviação é permitida para reduzir a quantidade de zeros no endereço IPv6 e, assim, torná-lo mais fácil de ler e digitar. Aqui estão algumas das regras de abreviação comuns para o IPv6:

1. Zeros à esquerda podem ser omitidos em cada bloco, exceto no primeiro bloco. Por exemplo, 2001:0db8 pode ser abreviado para 2001:db8.
2. Se houver uma sequência contínua de blocos com valor zero, eles podem ser substituídos por dois pontos duplos (::), mas essa abreviação só pode ser usada uma vez em um endereço IPv6. Por exemplo, 2001:0db8:0000:0000:0000:0000:1428:57ab pode ser abreviado para 2001:db8::1428:57ab.
3. Se houver apenas um bloco com valor zero, ele não pode ser abreviado usando a regra do ponto duplo. Por exemplo, 2001:0db8:0000:0000:0000:0000:0000:57ab não pode ser abreviado.
4. A abreviação não deve afetar a clareza do endereço IPv6 e, portanto, deve ser usada com cuidado.

## Referências

- [Comparando IPv6 com IPv4 (IP Tradicional)](https://www.youtube.com/watch?v=f0gglwGSCgU)
- [IP (Entenda finalmente como funciona o IPv4 e o IPv6) // Dicionário do Programador](https://www.youtube.com/watch?v=O8DmpmBMUSw)
