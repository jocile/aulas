---
title:  "Manipulação de banco de dados"
date: 2023-05-31 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, projetos, banco de dados]
---
Um banco de dados é uma peça fundamental no armazenamento e gerenciamento eficiente de grandes volumes de dados. Ele oferece uma estrutura organizada que permite o armazenamento, recuperação, atualização e exclusão de informações de maneira segura e eficiente. No contexto dos bancos de dados relacionais, há três componentes principais que desempenham papéis específicos na manipulação dos dados: a Linguagem de Definição de Dados (DDL), a Linguagem de Manipulação de Dados (DML) e a Linguagem de Consulta de Dados (DQL). Neste artigo, vamos explorar cada um desses componentes, destacando suas funções e fornecendo exemplos de como utilizá-los em SQL.

## **Linguagem de Definição de Dados (DDL)**

A Linguagem de Definição de Dados (DDL) é responsável por definir a estrutura e a organização dos dados em um banco de dados. Ela permite a criação, modificação e exclusão de objetos, como tabelas, índices, visões e restrições. A DDL é usada para criar e manter o esquema do banco de dados. Aqui estão alguns exemplos de comandos DDL em SQL:

1. **CREATE TABLE:** O comando CREATE TABLE é usado para criar uma nova tabela no banco de dados. Por exemplo:

```sql
CREATE TABLE Clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  email VARCHAR(100)
);

```

1. **ALTER TABLE:** O comando ALTER TABLE é usado para modificar a estrutura de uma tabela existente. Por exemplo, para adicionar uma nova coluna à tabela Clientes:

```sql
ALTER TABLE Clientes
ADD COLUMN endereco VARCHAR(200);

```

1. **DROP TABLE:** O comando DROP TABLE é usado para excluir uma tabela existente do banco de dados. Por exemplo:

```sql
DROP TABLE Clientes;

```

## **Linguagem de Manipulação de Dados (DML)**

A Linguagem de Manipulação de Dados (DML) é usada para inserir, atualizar e excluir registros dentro das tabelas do banco de dados. A DML permite a manipulação dos dados contidos nas tabelas. Aqui estão alguns exemplos de comandos DML em SQL:

1. **INSERT:** O comando INSERT é usado para inserir um novo registro em uma tabela. Por exemplo:

```sql
INSERT INTO Clientes (id, nome, idade, email)
VALUES (1, 'João', 30, 'joao@example.com');

```

1. **UPDATE:** O comando UPDATE é usado para atualizar os valores de um ou mais registros em uma tabela. Por exemplo, para atualizar o email do cliente com id igual a 1:

```sql
UPDATE Clientes
SET email = 'novoemail@example.com'
WHERE id = 1;

```

1. **DELETE:** O comando DELETE é usado para excluir um ou mais registros de uma tabela. Por exemplo, para excluir o cliente com id igual a 1:

```sql
DELETE FROM Clientes
WHERE id = 1;

```

## **Linguagem de Consulta de Dados (DQL)**

A Linguagem de Consulta de Dados (DQL) é usada para recuperar informações específicas dos dados armazenados nas tabelas do banco de dados. A DQL permite fazer consultas complexas e filtrar os resultados de acordo com critérios específicos. Aqui estão alguns exemplos de comandos DQL em SQL:

1. **SELECT:** O comando SELECT é usado para recuperar dados de uma ou mais tabelas. Por exemplo, para recuperar todos os clientes da tabela Clientes:

```sql
SELECT * FROM Clientes;

```

1. **SELECT com filtro:** O comando SELECT também pode ser usado para filtrar os resultados com base em condições específicas. Por exemplo, para recuperar apenas os clientes com idade acima de 25 anos:

```sql
SELECT * FROM Clientes
WHERE idade > 25;

```

1. **JOIN:** A cláusula JOIN permite combinar dados de duas ou mais tabelas com base em uma coluna comum. Por exemplo, para recuperar os pedidos feitos por um cliente específico, juntamente com os detalhes do cliente:

```sql
SELECT Pedidos.*, Clientes.nome
FROM Pedidos
JOIN Clientes ON Pedidos.cliente_id = Clientes.id
WHERE Clientes.id = 1;

```

Em resumo, o uso de DDL, DML e DQL permite que os bancos de dados relacionais sejam criados, atualizados, consultados e gerenciados de maneira eficiente. A DDL é usada para definir a estrutura do banco de dados, a DML é usada para manipular os dados e a DQL é usada para consultar e recuperar informações específicas. Essas linguagens de banco de dados, como exemplificado nos comandos SQL mencionados acima, desempenham papéis cruciais no trabalho com bancos de dados relacionais e são essenciais para o desenvolvimento de sistemas robustos e eficientes.

## Seleção específica de registros

Vamos continuar com mais exemplos de consultas utilizando a cláusula WHERE em comandos DQL. Aqui estão alguns casos adicionais:

1. **Selecionar registros com base em uma condição de igualdade:**

```sql
SELECT * FROM Clientes
WHERE idade = 30;

```

Este comando irá recuperar todos os clientes que possuem 30 anos de idade.

1. **Selecionar registros com base em uma condição de desigualdade:**

```sql
SELECT * FROM Produtos
WHERE preco <> 100.00;

```

Este comando irá recuperar todos os produtos cujo preço não seja igual a 100.00.

1. **Selecionar registros com base em uma condição de intervalo:**

```sql
SELECT * FROM Pedidos
WHERE data BETWEEN '2023-01-01' AND '2023-03-31';

```

Este comando irá recuperar todos os pedidos realizados entre 1 de janeiro de 2023 e 31 de março de 2023.

1. **Selecionar registros com base em uma condição de correspondência parcial:**

```sql
SELECT * FROM Clientes
WHERE nome LIKE 'Jo%';

```

Este comando irá recuperar todos os clientes cujo nome comece com "Jo", seguido de qualquer combinação de caracteres.

1. **Selecionar registros com base em múltiplas condições usando operadores lógicos:**

```sql
SELECT * FROM Produtos
WHERE categoria = 'Eletrônicos' AND preco > 500.00;

```

Este comando irá recuperar todos os produtos da categoria "Eletrônicos" com preço superior a 500.00.

1. **Selecionar registros com base em uma lista de valores possíveis:**

```sql
SELECT * FROM Clientes
WHERE cidade IN ('São Paulo', 'Rio de Janeiro', 'Belo Horizonte');

```

Este comando irá recuperar todos os clientes que residem em São Paulo, Rio de Janeiro ou Belo Horizonte.

Esses exemplos demonstram apenas algumas possibilidades de uso da cláusula WHERE para filtrar os resultados das consultas. É importante ressaltar que a cláusula WHERE pode ser combinada com outros operadores, como OR, NOT, EXISTS, entre outros, para criar consultas mais complexas e abrangentes.

> Através do uso adequado da cláusula WHERE em consultas DQL, é possível recuperar apenas os dados relevantes para uma determinada análise ou necessidade de informação, tornando a busca e manipulação dos dados mais eficientes e precisas.
{: .prompt-info }

## Referências

[Livro restrito da biblioteca Senac - {{site.data.references.apostilas.senac[15].name}}]({{site.data.references.apostilas.senac[15].link}})

[Livro restrito da biblioteca Senac - {{site.data.references.apostilas.senac[16].name}}]({{site.data.references.apostilas.senac[16].link}})

[Apostila Seduc - {{site.data.references.apostilas.informatica[0].name}} pdf]({{site.data.references.apostilas.informatica[0].link}})

[Introdução SQL -  Aula 01 - Minicurso de SQL](https://www.youtube.com/watch?v=Lq3yWn-Wb0w&list=PLTYLKz3zyxKonrLifrisb02uIjIIVvGnZ)

[Workbench - Criando  diagrama ER, exportando para SQL, implemantando  e manipulando](https://www.youtube.com/watch?v=WTyqp5PjdGI)

[Linguagem de Consulta Estruturada - SQL]({% post_url 2023-05-24-sql %})
