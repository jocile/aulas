---
title:  "CRUD Java com Maven"
date: 2023-06-01 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, projetos, banco de dados]
---
O Maven é uma ferramenta de gerenciamento de projetos amplamente utilizada no desenvolvimento de software em Java. Ele oferece uma abordagem padronizada para a construção, compilação, empacotamento e distribuição de projetos Java. O Maven também lida com a resolução de dependências e fornece um sistema de construção baseado em plugins.

## Conceitos Básicos do Maven

Aqui estão alguns conceitos básicos do Maven que você precisa entender antes de usá-lo:

- **Projeto**: O Maven organiza o desenvolvimento de software em projetos. Cada projeto é identificado por um arquivo `pom.xml` (Project Object Model), que descreve as configurações e dependências do projeto.
- **POM**: O arquivo `pom.xml` é o coração do Maven. Ele contém as informações do projeto, como nome, versão, descrição, dependências, plugins e perfis.
- **Dependências**: O Maven facilita a resolução e gerenciamento de dependências do projeto. Você pode declarar as dependências necessárias no arquivo `pom.xml` e o Maven se encarregará de baixar as bibliotecas correspondentes automaticamente.
- **Repositório**: O Maven utiliza repositórios para armazenar e buscar dependências. Existem dois tipos principais de repositórios: repositórios locais (armazenam as dependências no ambiente local do desenvolvedor) e repositórios remotos (como o Maven Central, onde as bibliotecas estão disponíveis para download).
- **Ciclo de Vida do Build**: O Maven possui um ciclo de vida de build pré-definido com uma série de fases, como `clean`, `compile`, `test`, `package` e `install`. Cada fase executa uma série de metas (goals) associadas a plugins do Maven.
- **Plugins**: Os plugins são componentes do Maven que executam tarefas específicas durante o ciclo de vida do build. Eles podem ser usados para compilar o código-fonte, executar testes, gerar documentação, empacotar o projeto, entre outras funcionalidades.

## Configurando o Maven

Para começar a usar o Maven, você precisa ter o Maven instalado em seu ambiente de desenvolvimento. Você pode baixar a versão mais recente do Maven no [site oficial](https://maven.apache.org/download.cgi) e seguir as instruções de instalação específicas para o seu sistema operacional.

Após a instalação, verifique se o Maven está configurado corretamente, executando o seguinte comando no terminal ou prompt de comando:

```plaintext
mvn --version

```

Isso exibirá a versão do Maven e outras informações relevantes.

## Estrutura de Diretórios do Projeto Maven

Um projeto Maven segue uma estrutura de diretórios padrão, que ajuda a organizar o código-fonte e outros recursos. A estrutura de diretórios típica de um projeto Maven é a seguinte:

```plaintext
meu-projeto/
    ├── src/
    │   ├── main/
    │   │   ├── java/     (código-fonte principal)
    │   │   └── resources/ (recursos principais)
    │   └── test/
    │       ├── java/     (código-fonte de teste)
    │       └── resources/ (recursos de teste)

    └── pom.xml

```

O diretório `src/main/java` contém o código-fonte principal do projeto, enquanto `src/main/resources` é usado para armazenar recursos como arquivos de configuração. O diretório `src/test/java` contém os arquivos de teste unitário, e `src/test/resources` é usado para recursos de teste.

## Ciclo de Vida do Build do Maven

O Maven possui um ciclo de vida de build pré-definido com três fases principais: `default`, `clean` e `site`. Cada fase é composta por uma série de metas (goals). Aqui estão algumas das fases e metas mais comuns:

- **clean**: Remove os artefatos e arquivos gerados em builds anteriores.
  - Meta: `clean`
- **compile**: Compila o código-fonte do projeto.
  - Meta: `compile`
- **test**: Executa os testes unitários do projeto.
  - Metas: `test`, `surefire:test` (executa os testes usando o plugin Surefire)
- **package**: Empacota o código compilado em um formato específico, como JAR, WAR ou ZIP.
  - Meta: `package`
- **install**: Instala o pacote no repositório local para uso em outros projetos locais.
  - Meta: `install`
- **deploy**: Copia o pacote final para um repositório remoto para compartilhamento com outros desenvolvedores ou servidores de produção.
  - Meta: `deploy`
- **site**: Gera documentação do projeto, como relatórios, gráficos e páginas da web.
  - Meta: `site`

Para executar uma meta específica do Maven, você pode usar o seguinte comando:

```plaintext
mvn <fase>:<meta>

```

Por exemplo, para compilar o código-fonte, você pode executar:

```plaintext
mvn compile

```

O Maven executará a fase `compile` e todas as fases anteriores necessárias.

> O Maven é uma ferramenta poderosa que simplifica o gerenciamento de projetos Java. Ele oferece uma abordagem padronizada para compilação, teste, empacotamento e distribuição de projetos, além de lidar com dependências e plugins. Compreender os conceitos básicos do Maven e sua estrutura de diretórios permitirá que você configure e utilize o Maven com eficiência em seus projetos Java.
{: .prompt-info }

## Configurando o Maven com MySql Server

Neste artigo, vamos explorar o desenvolvimento de um aplicativo CRUD (Create, Read, Update, Delete) em Java, que se conecta a um SGBD (Sistema de Gerenciamento de Banco de Dados) MySQL utilizando o conector JDBC. Além disso, vamos configurar o Maven para gerenciar as dependências do projeto.

## Pré-requisitos

Antes de começarmos, certifique-se de que você tenha as seguintes ferramentas instaladas e configuradas em seu ambiente de desenvolvimento:

1. JDK (Java Development Kit) - para compilar e executar o código Java.
2. IDE (Integrated Development Environment) - como Eclipse, IntelliJ IDEA ou NetBeans para escrever o código Java.
3. SGBD MySQL - instalado e em execução em sua máquina local ou em um servidor remoto.
4. Maven - uma ferramenta de gerenciamento de dependências que ajudará a configurar e compilar o projeto.

## Configurando o Projeto com Maven

1. Crie um novo diretório para o projeto e abra-o em sua IDE.
2. Inicie um novo projeto Maven usando um dos seguintes métodos:
    - **Eclipse**: Vá em `File > New > Project...`, selecione `Maven > Maven Project` e siga as instruções para criar o projeto.
    - **VsCode**: instale as extenções para projetos java  e Maven, acesse o painel esquerdo, o explorador em `Maven > + Create Maven Project`, selecione a opção `Create from archetype`. Selecione `maven-archetype-quickstart` e siga as instruções para criar o projeto.
    - **NetBeans**: Vá em `File > New Project...`, selecione `Maven` na categoria, escolha `Maven Project` e siga as instruções para criar o projeto.
3. Após a criação do projeto, você verá um arquivo `pom.xml` que contém as configurações do Maven. Visite o [repositório do conector](https://mvnrepository.com/artifact/mysql/mysql-connector-java) e selecione a versão mais atual, copie o código, e abra o arquivo `pom.xml` e adicione a dependência do conector JDBC do MySQL. Por exemplo: cole o seguinte trecho dentro da tag `<dependencies>`:

```xml
<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>
```

Certifique-se de substituir a versão do conector JDBC pela versão mais recente disponível.

1. Salve o arquivo `pom.xml` para que as alterações entrem em vigor. O Maven agora baixará automaticamente o conector JDBC do MySQL e as dependências necessárias para o projeto.

## Criando a Conexão com o Banco de Dados

1. Crie uma nova classe chamada `DatabaseConnector` em seu projeto para lidar com a conexão ao banco de dados. Dentro da classe, declare os seguintes atributos:

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnector {
    private static final String URL = "jdbc:mysql://localhost:3306/nome_do_banco_de_dados";
    private static final String USER = "usuario";
    private static final String PASSWORD = "senha";

    private Connection connection;

    // Restante do código...
}

```

Certifique-se de substituir `nome_do_banco_de_dados`,` usuario`e`senha` pelas suas informações correspondentes.

1. Crie um método chamado `connect()` para estabelecer a conexão com o banco de dados:

```java
public void connect() {
    try {
        connection = DriverManager.getConnection(URL, USER, PASSWORD);
        System.out.println("Conexão estabelecida com o banco de dados!");
    } catch (SQLException e) {
        System.out.println("Falha ao conectar ao banco de dados: " + e.getMessage());
    }
}

```

1. Crie um método chamado `disconnect()` para encerrar a conexão com o banco de dados:

```java
public void disconnect() {
    try {
        if (connection != null && !connection.isClosed()) {
            connection.close();
            System.out.println("Conexão fechada com o banco de dados.");
        }
    } catch (SQLException e) {
        System.out.println("Falha ao fechar a conexão com o banco de dados: " + e.getMessage());
    }
}

```

A classe `DatabaseConnector` agora possui os métodos `connect()` e `disconnect()` para estabelecer e encerrar a conexão com o banco de dados.

## Operações CRUD

Agora, vamos implementar as operações CRUD (Create, Read, Update, Delete) utilizando a conexão ao banco de dados.

1. Crie uma classe chamada `ProductDAO` que será responsável por manipular os dados da tabela `Product` no banco de dados. Dentro da classe, declare os seguintes atributos:

```java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    private Connection connection;

    // Restante do código...
}

```

1. Adicione um construtor à classe `ProductDAO` que recebe um objeto `Connection` como parâmetro:

```java
public ProductDAO(Connection connection) {
    this.connection = connection;
}

```

1. Implemente os métodos CRUD na classe `ProductDAO`:

```java
public void create(Product product) {
    String query = "INSERT INTO Product (name, price) VALUES (?, ?)";

    try (PreparedStatement statement = connection.prepareStatement(query)) {
        statement.setString(1, product.getName());
        statement.setDouble(2, product.getPrice());

        statement.executeUpdate();
        System.out.println("Produto criado com sucesso.");
    } catch (SQLException e) {
        System.out.println("Falha ao criar o produto: " + e.getMessage());
    }
}

public List<Product> readAll() {
    List<Product> products = new ArrayList<>();
    String query = "SELECT * FROM Product";

    try (PreparedStatement statement = connection.prepareStatement(query)) {
        ResultSet resultSet = statement.executeQuery();

        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            double price = resultSet.getDouble("price");

            Product product = new Product(id, name, price);
            products.add(product);
        }
    } catch (SQLException e) {
        System.out.println("Falha ao ler os produtos: " + e.getMessage());
    }

    return products;
}

public void update(Product product) {
    String query = "UPDATE Product SET name = ?, price = ? WHERE id = ?";

    try (PreparedStatement statement = connection.prepareStatement(query)) {
        statement.setString(1, product.getName());
        statement.setDouble(2, product.getPrice());
        statement.setInt(3, product.getId());

        statement.executeUpdate();
        System.out.println("Produto atualizado com sucesso.");
    } catch (SQLException e) {
        System.out.println

("Falha ao atualizar o produto: " + e.getMessage());
    }
}

public void delete(int id) {
    String query = "DELETE FROM Product WHERE id = ?";

    try (PreparedStatement statement = connection.prepareStatement(query)) {
        statement.setInt(1, id);

        statement.executeUpdate();
        System.out.println("Produto excluído com sucesso.");
    } catch (SQLException e) {
        System.out.println("Falha ao excluir o produto: " + e.getMessage());
    }
}

```

Os métodos `create()`, `readAll()`, `update()` e `delete()` são responsáveis por criar, ler, atualizar e excluir produtos no banco de dados, respectivamente.

## Testando o Aplicativo CRUD

Agora que implementamos as classes `DatabaseConnector` e `ProductDAO`, podemos testar o aplicativo CRUD.

1. Crie uma classe `Main` e adicione o método `main()` para iniciar o aplicativo:

```java
public class Main {
    public static void main(String[] args) {
        // Criar uma instância do DatabaseConnector
        DatabaseConnector connector = new DatabaseConnector();

        // Estabelecer a conexão com o banco de dados
        connector.connect();

        // Criar uma instância do ProductDAO com a conexão estabelecida
        ProductDAO productDAO = new ProductDAO(connector.getConnection());

        // Criar um novo produto
        Product product = new Product("Nome do Produto", 9.99);
        productDAO.create(product);

        // Ler todos os produtos do banco de dados
        List<Product> products = productDAO.readAll();
        for (Product p : products) {
            System.out.println(p);
        }

        // Atualizar um produto existente
        product.setPrice(19.99);
        productDAO.update(product);

        // Excluir um produto
        productDAO.delete(product.getId());

        // Encerrar a conexão com o banco de dados
        connector.disconnect();
    }
}

```

Certifique-se de substituir `"Nome do Produto"` e `9.99` pelos valores correspondentes.

1. Execute a classe `Main` e verifique a saída no console. Você deve ver a criação, leitura, atualização e exclusão do produto sendo exibidos.

Parabéns! Você desenvolveu um aplicativo CRUD em Java que se conecta ao SGBD MySQL usando o conector JDBC e configurou o Maven para gerenciar as dependências do projeto.

Este artigo abordou uma implementação básica de um CRUD, mas você pode expandir e aprimorar o aplicativo de acordo com suas necessidades, adicionando mais funcionalidades e validações.

## Referências

[Super revisão de OO e SQL com Java e JDBC - DevSuperior Nelio Alves](https://www.youtube.com/watch?v=xC_yKw3MYX4)

[Conhecendo melhor o Maven - Alura](https://www.alura.com.br/artigos/conhecendo-melhor-maven)

[Desenvolvendo aplicações Java com o VS Code - Alura](https://www.alura.com.br/artigos/desenvolvendo-aplicacoes-java-vs-code)

[GitHub - repositórios de aplicativos Java](https://github.com/topics/vscode?l=java&o=asc&s=forks)
