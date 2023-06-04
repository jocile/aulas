---
title:  "Desenvolvendo um CRUD com Java"
date: 2023-06-01 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, projetos, banco de dados]
---
Conectar-se a um banco de dados com Java é bastante simples. O Java possui um único conjunto de interfaces muito bem definidas que devem ser implementadas. Esse conjunto de interfaces fica dentro do pacote java.sql e nos referiremos a ela como JDBC (Java Database Connectivity). Sem um JDBC não é possível fazer uma conexão a um banco de dados.

A classe DriverManager é a responsável por se comunicar com todos os drivers que você deixou disponível. Para isso, invocamos o método estático getConnection com uma String que indica a qual banco desejamos nos conectar. Essa String é chamada de String de conexão JDBC, a que utilizaremos para acessar o nosso banco de dados tem a seguinte forma:

```java
jdbc:mysql://localhost/sua_base_de_dados
```

Agora precisamos adicionar a biblioteca do nosso sistema o conector MySQL que possibilitar a conexão com o Java, sem ele nada feito, o download do conector está disponível no site oficial do MySQL: http://dev.mysql.com/downloads/.

No site, clique em Connectors e depois em Connector/J. Faça o download e descompacte o arquivo. Serão descompactados vários arquivos, porém o arquivo que nos interessa é o que tem extensão JAR.

Agora no projeto do Netbeans click com o botão direito na pasta Bibliotecas e escolha Adicionar JAR/Pasta… procure entre os arquivos descompactados um que tenha extensão.JAR e o adicione. Por exemplo utilizamos a versão do conector mysql-connector-java-5.1.20-bin.jar.

## Conexão ao banco de dados com Java

Para conectar ao banco de dados MySQL usando Java, você precisa seguir alguns passos:

1. Certifique-se de que você possui o driver JDBC para o MySQL em seu classpath. Você pode baixar o driver MySQL Connector/J no site oficial do MySQL.
2. Importe as classes necessárias no seu código Java:

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

```

1. Defina as informações necessárias para a conexão, como URL do banco de dados, nome de usuário e senha:

```java
String url = "jdbc:mysql://localhost:3306/nome_do_banco_de_dados";
String usuario = "seu_usuario";
String senha = "sua_senha";

```

Certifique-se de substituir "nome_do_banco_de_dados", "seu_usuario" e "sua_senha" pelas informações reais do seu ambiente.

1. Estabeleça a conexão com o banco de dados usando o DriverManager:

```java
try {
    Connection connection = DriverManager.getConnection(url, usuario, senha);
    // Código para realizar operações no banco de dados
    // ...
    connection.close(); // Fechar a conexão quando não for mais necessária
} catch (SQLException e) {
    System.err.println("Erro ao conectar ao banco de dados: " + e.getMessage());
}

```

No exemplo acima, o método `getConnection` do `DriverManager` é usado para estabelecer a conexão com o banco de dados MySQL, passando a URL, o nome de usuário e a senha como parâmetros. Se a conexão for estabelecida com sucesso, você pode realizar as operações desejadas no banco de dados dentro do bloco `try`. Após concluir as operações, é importante fechar a conexão usando o método `close()`.

Certifique-se de substituir os valores da URL, nome de usuário e senha pelos valores correspondentes do seu ambiente de banco de dados. Além disso, verifique se o servidor MySQL está em execução e acessível na porta especificada na URL.

## Exemplo de conexão ao Banco de dados usando java

Como conectar ao banco de dados MySQL usando Java e executar uma consulta:

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ConexaoMySQL {
    private static final String URL = "jdbc:mysql://localhost:3306/nome_do_banco_de_dados";
    private static final String USUARIO = "seu_usuario";
    private static final String SENHA = "sua_senha";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(URL, USUARIO, SENHA)) {
            System.out.println("Conexão com o banco de dados estabelecida.");

            // Executar uma consulta
            String consulta = "SELECT * FROM Clientes";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(consulta)) {
                // Processar o resultado da consulta
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String nome = resultSet.getString("nome");
                    int idade = resultSet.getInt("idade");
                    String email = resultSet.getString("email");

                    System.out.println("ID: " + id);
                    System.out.println("Nome: " + nome);
                    System.out.println("Idade: " + idade);
                    System.out.println("Email: " + email);
                    System.out.println();
                }
            }

        } catch (SQLException e) {
            System.err.println("Erro ao conectar ao banco de dados: " + e.getMessage());
        }
    }
}

```

Nesse exemplo, após estabelecer a conexão com o banco de dados MySQL, executamos uma consulta para selecionar todos os registros da tabela "Clientes". Em seguida, percorremos o resultado usando o objeto `ResultSet` e exibimos as informações de cada registro no console.

Lembre-se de substituir "nome_do_banco_de_dados", "seu_usuario" e "sua_senha" pelas informações reais do seu ambiente. Certifique-se também de ter o driver JDBC do MySQL configurado corretamente no seu classpath.

Esse exemplo demonstra como realizar uma consulta simples no banco de dados MySQL usando Java. Você pode modificar a consulta de acordo com as suas necessidades e adicionar mais operações de manipulação de dados, como inserção, atualização e exclusão de registros, utilizando objetos como `PreparedStatement` para consultas parametrizadas.

## Exemplo de manipulação de registros com Java

Aqui está um exemplo de programa em Java que permite inserir, atualizar e excluir registros em uma tabela de banco de dados usando os comandos INSERT, UPDATE e DELETE. Certifique-se de ajustar as informações do banco de dados (URL, nome de usuário, senha) e o nome da tabela de acordo com o seu ambiente.

```java
import java.sql.*;
import java.util.Scanner;

public class ManipulacaoDados {
    private static final String URL = "jdbc:mysql://localhost:3306/nome_do_banco_de_dados";
    private static final String USUARIO = "seu_usuario";
    private static final String SENHA = "sua_senha";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(URL, USUARIO, SENHA)) {
            System.out.println("Conexão com o banco de dados estabelecida.");

            Scanner scanner = new Scanner(System.in);

            System.out.print("Digite o ID do cliente: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha

            System.out.print("Digite o nome do cliente: ");
            String nome = scanner.nextLine();

            System.out.print("Digite a idade do cliente: ");
            int idade = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha

            System.out.print("Digite o email do cliente: ");
            String email = scanner.nextLine();

            // Inserir um novo registro
            inserirRegistro(connection, id, nome, idade, email);

            System.out.print("Digite o novo email: ");
            String novoEmail = scanner.nextLine();

            // Atualizar o email de um registro existente
            atualizarRegistro(connection, id, novoEmail);

            // Excluir um registro
            excluirRegistro(connection, id);

            scanner.close();
        } catch (SQLException e) {
            System.err.println("Erro ao manipular dados: " + e.getMessage());
        }
    }

    private static void inserirRegistro(Connection connection, int id, String nome, int idade, String email) throws SQLException {
        String query = "INSERT INTO Clientes (id, nome, idade, email) VALUES (?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);
            statement.setString(2, nome);
            statement.setInt(3, idade);
            statement.setString(4, email);

            int rowsInserted = statement.executeUpdate();
            System.out.println(rowsInserted + " registro(s) inserido(s) com sucesso.");
        }
    }

    private static void atualizarRegistro(Connection connection, int id, String novoEmail) throws SQLException {
        String query = "UPDATE Clientes SET email = ? WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, novoEmail);
            statement.setInt(2, id);

            int rowsUpdated = statement.executeUpdate();
            System.out.println(rowsUpdated + " registro(s) atualizado(s) com sucesso.");
        }
    }

    private static void excluirRegistro(Connection connection, int id) throws SQLException {
        String query = "DELETE FROM Clientes WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);

            int rowsDeleted = statement.executeUpdate();
            System.out.println(rowsDeleted + " registro(s) excluído(s) com sucesso.");
        }
    }
    private static void select(Connection connection, int id) throws SQLException {
        String query = "SELECT * FROM Clientes WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);

            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    int clientId = resultSet.getInt("id");
                    String nome = resultSet.getString("nome");
                    int idade = resultSet.getInt("idade");
                    String email = resultSet.getString("email");

                    System.out.println("ID: " + clientId);
                    System.out.println("Nome: " + nome);
                    System.out.println("Idade: " + idade);
                    System.out.println("Email: " + email);
                } else {
                    System.out.println("Nenhum registro encontrado com o ID: " + id);
                }
            }
        }
    }
}
```

Certifique-se de substituir "nome_do_banco_de_dados", "seu_usuario" e "sua_senha" pelas informações reais do seu banco de dados. Além disso, verifique se a tabela "Clientes" existe e possui os campos correspondentes (id, nome, idade, email).

Nesse exemplo, utilizamos a classe **`Scanner`** para receber os novos dados do registro pela entrada do teclado. Os valores do ID, nome, idade e email são lidos usando os métodos apropriados do **`Scanner`**. Em seguida, esses valores são passados para os métodos **`inserirRegistro`**, **`atualizarRegistro`** e **`excluirRegistro`** para realizar as operações no banco de dados.

Esse programa estabelece uma conexão com o banco de dados, insere um novo registro, atualiza um registro existente e exclui um registro com base no ID. Os resultados das operações são impressos no console.

Lembre-se de que é necessário ter o driver JDBC correto para o banco de dados que você está usando (por exemplo, o driver MySQL) no classpath do projeto.

## Exemplo

Aqui está um exemplo de programa em Java que permite inserir, atualizar e excluir registros em uma tabela de banco de dados usando os comandos INSERT, UPDATE, SELECT e DELETE. Certifique-se de ajustar todas as funções e as informações do banco de dados (URL, nome de usuário, senha) e o nome da tabela de acordo com o seu ambiente.

```java
import java.sql.*;
import java.util.Scanner;

public class ManipulacaoDados {
    private static final String URL = "jdbc:mysql://localhost:3306/nome_do_banco_de_dados";
    private static final String USUARIO = "seu_usuario";
    private static final String SENHA = "sua_senha";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(URL, USUARIO, SENHA)) {
            System.out.println("Conexão com o banco de dados estabelecida.");

            Scanner scanner = new Scanner(System.in);

            System.out.print("Digite o ID do cliente: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha

            System.out.print("Digite o nome do cliente: ");
            String nome = scanner.nextLine();

            System.out.print("Digite a idade do cliente: ");
            int idade = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha

            System.out.print("Digite o email do cliente: ");
            String email = scanner.nextLine();

            // Inserir um novo registro
            inserirRegistro(connection, id, nome, idade, email);

            System.out.print("Digite o novo email: ");
            String novoEmail = scanner.nextLine();

            // Atualizar o email de um registro existente
            atualizarRegistro(connection, id, novoEmail);

            // Excluir um registro
            excluirRegistro(connection, id);

            scanner.close();
        } catch (SQLException e) {
            System.err.println("Erro ao manipular dados: " + e.getMessage());
        }
    }

    private static void inserirRegistro(Connection connection, int id, String nome, int idade, String email) throws SQLException {
        String query = "INSERT INTO Clientes (id, nome, idade, email) VALUES (?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);
            statement.setString(2, nome);
            statement.setInt(3, idade);
            statement.setString(4, email);

            int rowsInserted = statement.executeUpdate();
            System.out.println(rowsInserted + " registro(s) inserido(s) com sucesso.");
        }
    }

    private static void atualizarRegistro(Connection connection, int id, String novoEmail) throws SQLException {
        String query = "UPDATE Clientes SET email = ? WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, novoEmail);
            statement.setInt(2, id);

            int rowsUpdated = statement.executeUpdate();
            System.out.println(rowsUpdated + " registro(s) atualizado(s) com sucesso.");
        }
    }

    private static void excluirRegistro(Connection connection, int id) throws SQLException {
        String query = "DELETE FROM Clientes WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);

            int rowsDeleted = statement.executeUpdate();
            System.out.println(rowsDeleted + " registro(s) excluído(s) com sucesso.");
        }
    }
    private static void select(Connection connection, int id) throws SQLException {
        String query = "SELECT * FROM Clientes WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);

            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    int clientId = resultSet.getInt("id");
                    String nome = resultSet.getString("nome");
                    int idade = resultSet.getInt("idade");
                    String email = resultSet.getString("email");

                    System.out.println("ID: " + clientId);
                    System.out.println("Nome: " + nome);
                    System.out.println("Idade: " + idade);
                    System.out.println("Email: " + email);
                } else {
                    System.out.println("Nenhum registro encontrado com o ID: " + id);
                }
            }
        }
    }
}
```

Certifique-se de substituir "nome_do_banco_de_dados", "seu_usuario" e "sua_senha" pelas informações reais do seu banco de dados. Além disso, verifique se a tabela "Clientes" existe e possui os campos correspondentes (id, nome, idade, email).

Nesse exemplo, utilizamos a classe **`Scanner`** para receber os novos dados do registro pela entrada do teclado. Os valores do ID, nome, idade e email são lidos usando os métodos apropriados do **`Scanner`**. Em seguida, esses valores são passados para os métodos **`inserirRegistro`**, **`atualizarRegistro`** e **`excluirRegistro`** para realizar as operações no banco de dados.

Esse programa estabelece uma conexão com o banco de dados, insere um novo registro, atualiza um registro existente e exclui um registro com base no ID. Os resultados das operações são impressos no console.

Lembre-se de que é necessário ter o driver JDBC correto para o banco de dados que você está usando (por exemplo, o driver MySQL) no classpath do projeto.

## Exemplo de manipulação com menu

Aqui está o código atualizado com uma função de menu que permite ao usuário escolher entre as opções de inserir, atualizar, selecionar ou deletar:

```java
import java.sql.*;
import java.util.Scanner;

public class ManipulacaoDados {
    private static final String URL = "jdbc:mysql://localhost:3306/nome_do_banco_de_dados";
    private static final String USUARIO = "seu_usuario";
    private static final String SENHA = "sua_senha";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(URL, USUARIO, SENHA)) {
            System.out.println("Conexão com o banco de dados estabelecida.");

            exibirMenu(connection);

        } catch (SQLException e) {
            System.err.println("Erro ao manipular dados: " + e.getMessage());
        }
    }

    private static void exibirMenu(Connection connection) {
        Scanner scanner = new Scanner(System.in);

        int opcao = 0;

        while (opcao != 5) {
            System.out.println("---- MENU ----");
            System.out.println("1. Inserir registro");
            System.out.println("2. Atualizar registro");
            System.out.println("3. Selecionar registro");
            System.out.println("4. Deletar registro");
            System.out.println("5. Sair");
            System.out.print("Digite a opção desejada: ");
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    inserirRegistro(connection, scanner);
                    break;
                case 2:
                    atualizarRegistro(connection, scanner);
                    break;
                case 3:
                    selecionarRegistro(connection, scanner);
                    break;
                case 4:
                    deletarRegistro(connection, scanner);
                    break;
                case 5:
                    System.out.println("Encerrando o programa...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        }

        scanner.close();
    }

    private static void inserirRegistro(Connection connection, Scanner scanner) {
        // Código para inserir um novo registro
    }

    private static void atualizarRegistro(Connection connection, Scanner scanner) {
        // Código para atualizar um registro existente
    }

    private static void selecionarRegistro(Connection connection, Scanner scanner) {
        // Código para selecionar um registro
    }

    private static void deletarRegistro(Connection connection, Scanner scanner) {
        // Código para deletar um registro
    }
}

```

Neste código, foi adicionada a função `exibirMenu` que apresenta um menu de opções ao usuário. O menu é exibido em um loop até que o usuário escolha a opção "Sair" (opção 5). Dependendo da opção selecionada pelo usuário, as respectivas funções `inserirRegistro`, `atualizarRegistro`, `selecionarRegistro` ou `deletarRegistro` serão chamadas.

Você precisará implementar o código dentro de cada uma dessas funções para realizar as operações desejadas no banco de dados. Certifique-se de fornecer as informações corretas do banco de dados na constante `URL`, e substitua "nome_do_banco_de_dados", "seu_usuario" e "sua_senha" pelas informações apropriadas.

Lembre-se de importar as classes necessárias e implementar o código específico para cada operação dentro das funções correspondentes.

## Exemplo de função para listar itens

```java
private static void listarClientes(Connection connection) {
        String query = "SELECT * FROM Clientes";

        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) {

            List<String> clientes = new ArrayList<>();

            while (resultSet.next()) {
                int clientId = resultSet.getInt("id");
                String nome = resultSet.getString("nome");
                int idade = resultSet.getInt("idade");
                String email = resultSet.getString("email");

                clientes.add("ID: " + clientId + ", Nome: " + nome + ", Idade: " + idade + ", Email: " + email);
            }

            if (!clientes.isEmpty()) {
                System.out.println("Lista de Clientes:");
                for (String cliente : clientes) {
                    System.out.println(cliente);
                }
            } else {
                System.out.println("Nenhum cliente encontrado.");
            }

        } catch (SQLException e) {
            System.err.println("Erro ao listar clientes: " + e.getMessage());
        }
    }
```

## Exemplo de consulta simples ao MySQL com java

```java
public class App 
{
    private static final String URL = "jdbc:mysql://localhost:3306/aulajpa";
    private static final String USUARIO = "mysql";
    private static final String SENHA = "mysql";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(URL, USUARIO, SENHA)) {
            System.out.println("Conexão com o banco de dados estabelecida.");

            // Executar uma consulta
            String consulta = "SELECT * FROM Pessoa";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(consulta)) {
                // Processar o resultado da consulta
                while (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String nome = resultSet.getString("nome");
                    //int idade = resultSet.getInt("idade");
                    String email = resultSet.getString("email");

                    System.out.println("ID: " + id);
                    System.out.println("Nome: " + nome);
                    //System.out.println("Idade: " + idade);
                    System.out.println("Email: " + email);
                    System.out.println();
                }
            }

        } catch (SQLException e) {
            System.err.println("Erro ao conectar ao banco de dados: " + e.getMessage());
        }
    }
}
```

## Referências

| Vídeos                                                                                                                                                                               | descrição                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| [![Super revisão de OO e SQL com Java e JDBC - DevSuperior Nelio Alves](http://img.youtube.com/vi/xC_yKw3MYX4/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=xC_yKw3MYX4) | [Super revisão de OO e SQL com Java e JDBC - DevSuperior Nelio Alves](https://www.youtube.com/watch?v=xC_yKw3MYX4)              |
| [![Crud Completo com NetBeans e MySQL   Parte 1](http://img.youtube.com/vi/-3AGc97RPvk/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=-3AGc97RPvk)                        | [Crud Completo com NetBeans e MySQL   Parte 1](https://www.youtube.com/watch?v=-3AGc97RPvk)                                     |
| [![Crud Completo com NetBeans e MySQL   Parte 2](http://img.youtube.com/vi/-oT6T0_zayQ/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=-oT6T0_zayQ)                        | [Crud Completo com NetBeans e MySQL   Parte 2](https://www.youtube.com/watch?v=-oT6T0_zayQ&)                                    |
| [![Crud Completo com NetBeans e MySQL - Parte 3](http://img.youtube.com/vi/ZpD_5lxQFsw/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=ZpD_5lxQFsw)                        | [Crud Completo com NetBeans e MySQL - Parte 3](https://www.youtube.com/watch?v=ZpD_5lxQFsw)                                     |
| [![Java #8 - Como criar um Cadastro de funcionários (CRUD) - Parte 1](http://img.youtube.com/vi/N57B_XvVh9c/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=N57B_XvVh9c)   | [Java #8 - Como criar um Cadastro de funcionários (CRUD) - Parte 1](https://www.youtube.com/watch?v=N57B_XvVh9c)                |
| [![JAVA + MYSQL](http://img.youtube.com/vi/fgnx3QSVSAU/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=fgnx3QSVSAU)]                                                       | [#Java+MySQL](https://www.youtube.com/watch?v=fgnx3QSVSAU&list=PLwQkYMetu0ObRTdYz5eK-5exA1yLhiYS0&index=1)                      |
| [![CRUD - JAVA WEB (jsp) com MYSQL (AULA 1)](http://img.youtube.com/vi/7WXnnAIOIdk/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=7WXnnAIOIdk)                            | [CRUD - JAVA WEB (jsp) com MYSQL (AULA 1)](https://www.youtube.com/watch?v=7WXnnAIOIdk&list=PLA177te8KCzebf2RlIz55bSyUyZIsjr_m) |
