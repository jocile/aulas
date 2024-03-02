---
title: "Desenvolvimento em java web com frameworks"
author: Prof. Jocilé Serra
date: 2021-09-19 18:00:00 -0300
categories: [DESENVOLVIMENTO, JAVA]
tags: [spring, tutorial, programação]
---

O Spring Boot é um projeto da Spring que veio para facilitar o processo de configuração e publicação de nossas aplicações. A intenção é ter o seu projeto rodando o mais rápido possível e sem complicação.

Ele consegue isso favorecendo a convenção sobre a configuração. Basta que você diga pra ele quais módulos deseja utilizar (WEB, Template, Persistência, Segurança, etc.) que ele vai reconhecer e configurar.

Você escolhe os módulos que deseja através dos starters que inclui no pom.xml do seu projeto. Eles, basicamente, são dependências que agrupam outras dependências. Inclusive, como temos esse grupo de dependências representadas pelo starter, nosso pom.xml acaba por ficar mais organizado.

Apesar do Spring Boot, através da convenção, já deixar tudo configurado, nada impede que você crie as suas customizações caso sejam necessárias.

O maior benefício do Spring Boot é que ele nos deixa mais livres para pensarmos nas regras de negócio da nossa aplicação.

## Conceitos de desenvolvimento web com Java

### Sistema cliente e servidor

Com o avanço da tecnologia sobre redes de computadores e com o crescimento da internet, as páginas web estão se tornando cada vez mais atraentes e cheias de recursos que aumentam a interatividade com o usuário.

Quando falamos em aplicações web, estamos nos referindo a sistemas ou sites onde grande parte da programação fica hospedada em servidores na internet, e o usuário (cliente) normalmente não precisa ter nada instalado em sua máquina para utilizá-las, além de um navegador (browser).
O acesso às páginas desses sistemas é feita utilizando o modelo chamado de request- response, ou seja, o cliente solicita que alguma ação seja realizada (request) e o servidor a realiza e responde para o cliente (response).

### API de Servlets

Na plataforma Java, esse modelo foi implementado através da Interface de Programação de Aplicação (API) de Servlets. Um Servlet estende a funcionalidade de um servidor web para servir páginas dinâmicas aos navegadores, utilizando o protocolo HTTP.

No mundo Java, os servidores web são chamados de Servlet Container, pois implementam a especificação de Servlet. O servidor converte a requisição em um objeto do tipo HttpServletRequest. Este objeto é então passado aos componentes web, que podem executar qualquer código Java para que possa ser gerado um conteúdo dinâmico. Em seguida, o componente web devolve um objeto HttpServletResponse, que representa a resposta ao cliente. Este objeto é utilizado para que o conteúdo gerado seja enviado ao navegador do usuário.

### Containers

Containers são interfaces entre componentes e funcionalidades de baixo nível específicas de uma plataforma. Para que uma aplicação web desenvolvida em Java ou um componente corporativo ser executado, eles precisam ser implantados em um container.

Os containers também são chamados de servidores de objetos, ou servidores de aplicação, pois oferecem serviços de infra-estrutura para execução de componentes.

Por exemplo: o EJB Container suporta Enterprise JavaBeans (EJB), que são componentes corporativos distribuídos. Os Servlets, JSP, páginas JSF e arquivos estáticos (HTML, CSS, imagens e etc) necessitam de um Web Container para ser executado.

Existem diversas organizações que desenvolvem containers Java EE, por exemplo: Oracle, IBM, Red Hat, Apache, etc. Apesar de tantas ofertas gratuitas, algumas empresas ainda vendem licenças de seus próprios servidores, pois oferecem suporte diferenciado ao cliente e normalmente implementam funcionalidades que os servidores gratuitos talvez não possuam.

#### Apache Tomcat

Um exemplo de container (servidor de aplicações) é o Apache Tomcat, que é leve, gratuito e muito popular.

O processo de instalação do Apache Tomcat é simples, basta descompactar o arquivo
baixado no local desejado.

Para verificar se a instalação foi bem sucedida, no Windows, acesse o diretório bin e execute o arquivo startup.bat para iniciar o servidor. Você já deve ter a JDK (Java Development Kit) instalado em seu computador para executar este passo.

No Linux ou Mac, acesse o diretório bin do Tomcat e digite:

```bash
$ chmod +x *.sh
$ ./startup.sh; tail -f ../logs/catalina.out
Abra um browser e acesse o endereço http://localhost:8080.

```

## Ferramentas Build

Durante o desenvolvimento de aplicações existem tarefas comuns e repetitivas que podemn ser automatizadas com ferramentas construtoras (build).
Dentre elas podemos destacar:

- Estruturar arquivos fonte
- Uso de uma nova biblioteca
- Realização de testes
- Incompatibilidade entre IDEs
- Empacotamento e distribuição da aplicação

  > Considerando todos esses cenários entre outros, percebemos que se trata de tarefas comuns em diversos projetos da atualidade, mas, ao mesmo tempo, vemos que são rotinas um tanto quanto trabalhosas, ainda mais se percebemos que que elas tendem a ser executadas constantemente.
  > Pensando justamente no trabalho que temos nessas tarefas que não podemos simplesmente descartar, foram criadas algumas ferramentas que automatizam todos esses processos, essas ferramentas são conhecidas como build tools ou, no português bem forçado, ferramentas de construção.(FELIPE)[^1]

  As principais são:
  ANT – uma das primeiras mas ainda exigia muitas configurações manuais;
  Maven – é um gerenciador de projeto automatizado que se utiliza de repositórios de dependências.

### Apache Maven

Maven é uma ferramenta da Apache Software Foundation para gerenciamento de dependências e automação de build, principalmente em projetos Java.
Um projeto que usa Maven possui um arquivo XML (pom.xml) que descreve o projeto, suas dependências, detalhes do build, diretórios, plugins requeridos, etc. Este arquivo é conhecido como POM (Project Object Model).

## Persistência de dados

A maioria dos sistemas desenvolvidos em uma empresa precisa de armazenamento de dados, portanto persistência é um conceito fundamental no desenvolvimento de aplicações. Se um sistema de informação não preservasse os dados quando ele fosse encerrado, o sistema não seria prático e usual.

Quando falamos de persistência de dados com Java, normalmente falamos do uso de sistemas gerenciadores de banco de dados relacionais e SQL, porém existem diversas outras alternativas para persistir dados, como em arquivos XML, arquivos texto e etc.

### Mapeamento Objeto Relacional (ORM)

Mapeamento objeto relacional (object-relational mapping, ORM, O/RM ou O/R mapping) é uma técnica de programação para conversão de dados entre banco de dados relacionais e linguagens de programação orientada a objetos.

### Entidades

Em banco de dados, entidades são representadas por tabelas, que possuem colunas que armazenam propriedades de diversos tipos. Uma tabela pode se associar com outras e criar relacionamentos diversos.

Em uma linguagem orientada a objetos, como Java, entidades são classes, e objetos dessas classes representam elementos que existem no mundo real. Por exemplo, um sistema de faturamento possui a classe NotaFiscal, que no mundo real existe e todo mundo já viu alguma pelo menos uma vez, além de possuir uma classe que pode se chamar Imposto, que infelizmente todo mundo sente no bolso. Essas classes são chamadas de classes de domínio do sistema, pois fazem parte do negócio que está sendo desenvolvido.

### Mapeamento Objeto Relacional

Em banco de dados, podemos ter as tabelas nota_fiscal e também imposto, mas a estrutura de banco de dados relacional está longe de ser orientado a objetos, e por isso o Mapeamento Objeto Relacional (ORM) foi inventado para suprir a necessidade que os desenvolvedores têm de visualizar tudo como objetos para programarem com mais facilidade.

Podemos comparar o modelo relacional com o modelo orientado a objetos conforme a tabela abaixo:

| Modelo relacional | Modelo Orientado a objetos |
| :---------------: | :------------------------: |
|      Tabela       |           Classe           |
|       Linha       |           Objeto           |
|      Coluna       |          Atributo          |
|         -         |           Método           |
| Chave estrangeira |         Associação         |

Essa comparação é feita em todo o tempo que se está desenvolvendo usando algum mecanismo de ORM. O mapeamento é feito usando metadados que descrevem a relação entre objetos e banco de dados.

Uma solução ORM consiste de uma API para executar operações CRUD simples em objetos de classes persistentes, uma linguagem ou API para especificar queries que se referem a classes e propriedades de classes, facilidades para especificar metadados de mapeamento e técnicas para interagir com objetos transacionais para identificarem automaticamente alterações realizadas, carregamento de associações por demanda e outras funções de otimização.

Em um ambiente ORM, as aplicações interagem com APIs e o modelo de classes de domínio e os códigos SQL/JDBC são abstraídos. Os comandos SQL são automaticamente gerados a partir dos metadados que relacionam objetos a banco de dados.

## Framework

Um Framework tem como principal objetivo resolver problemas recorrentes com uma abordagem genérica, promovendo a reuzabilidade e permitindo ao desenvolvedor focar seus esforços na resolução do problema em si, e não ficar reescrevendo software.
Constituindo um conjunto de bibliotecas ou componentes que são usados para criar uma base onde sua aplicação será construída.

### Java Persistence API e Hibernate

A Java Persistence API (JPA) é um framework para persistência em Java, que oferece uma API de mapeamento objeto-relacional e soluções para integrar persistência com sistemas corporativos escaláveis.

Com JPA, os objetos são POJO (Plain Old Java Objects), ou seja, não é necessário nada de especial para tornar os objetos persistentes. Basta adicionar algumas anotações nas classes que representam as entidades do sistema e começar a persistir ou consultar objetos.

JPA é uma especificação, e não um produto. Para trabalhar com JPA, precisamos de uma implementação.

O projeto do Hibernate ORM possui alguns módulos, sendo que o Hibernate EntityManager é a implementação da JPA que encapsula o Hibernate Core.

O Hibernate Core é a base para o funcionamento da persistência, com APIs nativas e metadados de mapeamentos em arquivos XML. Possui uma linguagem de consultas chamada HQL (parecido com SQL), um conjunto de interfaces para consultas usando critérios (Criteria API), etc.

## Padrão MVC

O padrão de projeto MVC (Model View Controller) torna o desenvolvimento de sistemas simplificado, separando o sistema em três responsabilidades (modelo, visualização e controle).

### Modelo

o modelo é responsável por representar os objetos de negócio, manter o estado da aplicação e fornecer ao controlador o acesso aos dados.

### Visualização

A visualização é responsável pela interface do usuário. Ela que define a forma como os dados são apresentados e encaminha as ações do usuário para o controlador.

### Controlador

O controlador é responsável por ligar o modelo e a visualização, interpretando as solicitações do usuário, traduzindo para uma operação no modelo (onde são realizadas efetivamente as mudanças no sistema) e retornando a visualização adequada à solicitação.

## O Spring

> O Spring consiste em uma plataforma completa de recursos para construção de
> aplicativos Java, que veio para simplificar o desenvolvimento em Java EE com
> diversos módulos que auxiliam na construção de sistemas reduzindo muito o
> tempo de desenvolvimento. (BRITO)[^4]

Essa plataforma conta com recursos avançados que abrangem várias áreas de uma aplicação com projetos/módulos prontos para uso, como:

- Spring Framework;
- Spring Boot;
- Spring Web;
- Spring Security;
- Spring Data;
- Spring Batch;
- Spring Cloud;
- outros.

Estes módulos prossibilitam implementar funcionalidades com uma maior produtividade, permitindo ao desenvolvedor focar nas regras de negócio, e delegar ao Spring as tarefas de configuração e implementação.

Para conhecer todos os módulos disponíveis acesse: <https://spring.io/projects>.

## O Spring Boot

O Spring Boot é um framework que faz parte do ecosistema do framework Spring, que foi criado para facilitar o processo de configuração e publicação de aplicações. A intenção é ter o seu projeto funcionando o mais rápido possível e sem complicação.

> Ele consegue isso favorecendo a convenção sobre a configuração. Basta que você diga pra ele quais módulos deseja utilizar (WEB, Template, Persistência, Segurança, etc.) que ele vai reconhecer e configurar.
>
> Você escolhe os módulos que deseja através dos starters que inclui no pom.xml do seu projeto. Eles, basicamente, são dependências que agrupam outras dependências. Inclusive, como temos esse grupo de dependências representadas pelo starter, nosso pom.xml acaba por ficar mais organizado.
>
> Apesar do Spring Boot, através da convenção, já deixar tudo configurado, nada impede que você crie as suas customizações caso sejam necessárias.
>
> O maior benefício do Spring Boot é que ele nos deixa mais livres para pensarmos nas regras de negócio da nossa aplicação. (AFONSO)[^2]

### Exemplo com Spring

Criando Uma Aplicação Simples Com Spring MVC

O que vamos precisar:

- Uma IDE, para nosso exemplo iremos utilizar o Eclipse.
- JDK 1.8 ou uma versão anterior.
- Maven.

Criando o Projeto:

Primeiro vamos acessar a página <https://start.spring.io/> e vamos preencher os campos com as seguintes informações:

- Group: br.com.exemplo
- Artifact: meuprojeto
- Search for dependencies: Vamos selecionar Web e Thymeleaf.

Agora vamos gerar nosso projeto clicando em Generate Project.
Um arquivo meuprojeto.zip será baixado, trabalharemos com ele no próximo passo.

Importando o Projeto:

1. Extraia o conteúdo do arquivo meuprojeto.zip, baixado no passo anterior, para um diretório de sua preferência.
2. Agora vamos abrir o Eclipse e importar o nosso projeto.
3. Primeiro vamos escolher a opção Import Project
4. Vá em File > Import > Maven > Existing Maven Projects.

Criando a Controller:

1. Clique com o botão direito em cima do pacote br.com.exemplo e escolha New > Package.
2. Digite controller para o nome do pacote e clique em OK.
3. Agora, com o botão direito, clique no novo pacote criado, escolha New > Java Class.
4. Digite ExemploController para o nome da classe e clique em OK.

Nosso código do controller ficará assim:

```java
package br.com.exemplo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExemploController {

    @GetMapping("/exemplo/pagina")
    public String exemplo(){
        return "exemplo";
    }
}

```

Criando nossa página HTML:

Clique com o botão direito em templates, vá até New > HTML File.
Digite exemplo para o nome e clique em OK

O código da nossa página de exemplo ficará assim:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Exemplo</title>
  </head>
  <body>
    <h1>Página de exemplo</h1>
  </body>
</html>
```

Executando nosso projeto:

1. Clique com o botão direito em cima da classe MeuprojetoApplication.java
2. depois em Run As java Application.
3. Aguarde até que seja mostrado o log no console da sua IDE.
4. Finalizado abra seu navegador e digite <http://localhost:8080/exemplo/pagina>.

Para mais detalhes acesse: [Criando Uma Aplicação Simples Com Spring MVC](https://coderef.com.br/criando-uma-aplica%C3%A7%C3%A3o-simples-com-spring-mvc-b1e24273c90c)[^3]

## Referências

[![Vídeo-aula sobre spring framework](http://img.youtube.com/vi/VQkG6UyJhcY/0.jpg){: w="240" h="180" }](http://www.youtube.com/watch?feature=player_embedded&v=VQkG6UyJhcY)

[^2]: AFONSO, Alexandre. O que é Spring Boot? **Algaworks**, 2017. Disponível em <https://blog.algaworks.com/spring-boot/>. Acessado em 19 de setembro de 2021.
[^4]: BRITO, Michelli. Spring Boot da api rest aos microservices. 2021. Disponível em <https://www.michellibrito.com/>. Acessado em 19 de setembro de 2021.
[^1]: FELIPE, Alex. Entenda o que são build tools do mundo Java. **Medium**, 2017. Disponível em <https://medium.com/@alex.felipe/entenda-o-que-s%C3%A3o-build-tools-do-mundo-java-682a26e38ff2>. Acessado em 20 de setembro de 2021.

Produtividade no desenvolvimento de aplicações web com Spring Boot. **Algaworks**. Disponível em <https://cafe.algaworks.com/fn013-download-livro-spring-boot/>. Acessado em 19 de setembro de 2021.

[^3]: SILVA, Diego Brener. Criando Uma Aplicação Simples Com Spring MVC. **Coderef**, 2017. Disponível em <https://coderef.com.br/criando-uma-aplicação-simples-com-spring-mvc-b1e24273c90c>. Acessado em 19 de setembro de 2021.
