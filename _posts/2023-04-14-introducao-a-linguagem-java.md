---
title:  "Introdução a linguagem Java"
date: 2023-04-14 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, lógica, programador, programação, exercícios, java]
---
Java é uma linguagem de programação moderna e profissional que atualmente está na 17ª versão.

## Características

Multiplataforma

- Java é uma linguagem que pode ser executada virtualmente em várias plataformas, tornando-a atraente para o mercado.
- A capacidade de processamento em cliente (browser) é um aspecto importante da linguagem.
- Programadores não precisam se preocupar em saber em qual máquina o programa será executado, pois um mesmo programa pode ser usado em vários tipos de equipamento.

Integração com outras linguagens

- Java pode ser usado em conjunto com outras linguagens, como HTML, para criar aplicações que podem ser embutidas em documentos HTML e transmitidas na internet.
- Os programas escritos em Java podem ser executados como um acessório em um computador do usuário que é transferido do servidor web para a máquina do usuário no momento do acesso.
- Exemplos de aplicações incluem compra de veículos e consulta de extrato bancário.

Similaridade com C++ e Programação Orientada a Objetos

- Java tem uma sintaxe semelhante à linguagem C++ e é orientada a objetos.
- A programação orientada a objetos é universalmente adotada como padrão de mercado.

Frameworks

- Devido ao sucesso e aceitação no mercado, foram desenvolvidos muitos frameworks para facilitar e automatizar o processo de desenvolvimento de software.
- Um framework pode ser entendido como um ambiente de trabalho que torna transparente o processo de desenvolvimento, reduzindo a preocupação do desenvolvedor em como as coisas funcionam e como elas se integram umas com as outras.

## Histórico

A linguagem Java foi criada por James Gosling e sua equipe na Sun Microsystems na década de 1990. O objetivo inicial era criar uma linguagem que permitisse a programação em diversas plataformas, além de ser mais segura e confiável do que outras linguagens disponíveis na época.

Em 1995, a Sun Microsystems lançou oficialmente a primeira versão do Java, que incluía o Java Development Kit (JDK) e o Java Runtime Environment (JRE). A linguagem Java rapidamente ganhou popularidade, especialmente na área de desenvolvimento web, devido à sua capacidade de ser executada em diferentes plataformas e dispositivos.

Em 2009, a Sun Microsystems foi adquirida pela Oracle Corporation, que passou a ser a proprietária da linguagem Java. Desde então, a Oracle tem lançado diversas versões e atualizações do Java, introduzindo novos recursos e melhorias na linguagem.

Hoje, a linguagem Java é uma das mais utilizadas em todo o mundo, com milhões de desenvolvedores trabalhando com ela em projetos de todos os tipos, desde aplicativos móveis até sistemas de gerenciamento de bancos de dados e de transações financeiras.

## Entrada de dados pelo usuário

Em Java, a entrada pelo teclado pode ser feita através da classe **`Scanner`**, que permite que o usuário insira dados pelo prompt de comando. Para isso, é necessário importar a classe **`Scanner`** no início do arquivo Java, e depois criar um objeto da classe para ler a entrada do usuário. 

Exemplo:

```java
import java.util.Scanner;

public class EntradaTeclado {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();
        System.out.println("O número digitado foi: " + numero);
    }
}
```

No exemplo acima, o usuário é solicitado a digitar um número pelo prompt de comando, e o número é armazenado na variável **`numero`** após ser lido pelo objeto **`scanner`**.

Já a entrada por janela pode ser feita utilizando uma biblioteca gráfica, como a Swing ou a JavaFX. Nessas bibliotecas, é possível criar interfaces gráficas que permitem que o usuário insira dados em campos de texto, botões, caixas de seleção, entre outros elementos. Exemplo:

```java

import javax.swing.JOptionPane;

public class EntradaJanela {
    public static void main(String[] args) {
        String nome = JOptionPane.showInputDialog("Qual é o seu nome?");
        JOptionPane.showMessageDialog(null, "Olá, " + nome + "!");
    }
}
```

No exemplo acima, é exibida uma janela de diálogo que solicita que o usuário digite seu nome. O nome digitado é armazenado na variável **`nome`**, e depois é exibida outra janela de diálogo com uma mensagem de boas-vindas ao usuário.

## Saída de dados

Em relação à saída de dados, no prompt de comando é possível utilizar o método **`System.out.println()`** para exibir informações na tela. Exemplo:

```java
public class SaidaPrompt {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
    }
}
```

No exemplo acima, a mensagem "Olá, mundo!" é exibida no prompt de comando.

Já na saída por janela, é possível utilizar novamente bibliotecas gráficas como a Swing ou a JavaFX. Exemplo:

```java
import javax.swing.JOptionPane;

public class SaidaJanela {
    public static void main(String[] args) {
        JOptionPane.showMessageDialog(null, "Olá, mundo!");
    }
}

```

No exemplo acima, é exibida uma janela de diálogo com a mensagem "Olá, mundo!".

## Condicionais

Em Java, as condicionais são expressas através dos comandos "if", "else if" e "else".

A estrutura básica da condicional "if" é a seguinte:

```java
if (condicao) {
   // bloco de codigo a ser executado se a condicao for verdadeira
}
```

A condicional "else if" permite adicionar mais uma condição para ser avaliada, caso a primeira condição do "if" seja falsa:

```java
if (condicao1) {
   // bloco de codigo a ser executado se a condicao1 for verdadeira
} else if (condicao2) {
   // bloco de codigo a ser executado se a condicao2 for verdadeira e a condicao1 for falsa
}
```

Por fim, o "else" é executado caso todas as condições anteriores sejam falsas:

```java
if (condicao1) {
   // bloco de codigo a ser executado se a condicao1 for verdadeira
} else if (condicao2) {
   // bloco de codigo a ser executado se a condicao2 for verdadeira e a condicao1 for falsa
} else {
   // bloco de codigo a ser executado se todas as condicoes anteriores forem falsas
}
```

> As condições podem ser expressas usando operadores de comparação, como "==", "!=", "<", "<=", ">" e ">=". Também é possível usar operadores lógicos como "&&" (and), "||" (or) e "!" (not) para combinar várias condições.
{: .prompt-tip }

## Expressões opcionais

o "switch case" em Java é usado como uma estrutura de controle de fluxo que permite executar diferentes blocos de código com base no valor de uma expressão.

A sintaxe básica do "switch case" em Java é a seguinte:

```java
switch(expressão) {
   case valor1:
      // código a ser executado se expressão for igual a valor1
      break;
   case valor2:
      // código a ser executado se expressão for igual a valor2
      break;
   ...
   default:
      // código a ser executado se nenhum dos valores correspondentes forem encontrados
}
```

Aqui, a expressão é avaliada e comparada aos valores especificados em cada caso (case). Se a expressão for igual a um dos valores especificados, o bloco de código correspondente será executado. O comando "break" é usado para sair do switch case depois que um bloco de código é executado.

> O bloco de código "default" é executado se nenhum dos valores correspondentes for encontrado nos casos anteriores. Esta é uma parte opcional do switch case e pode ser omitida se não houver código a ser executado em tal cenário.
{: .prompt-tip }

## Repetições

As repetições em Java são realizadas usando estruturas de controle de fluxo chamadas de loops. Existem três tipos principais de loops em Java: while, do-while e for.

Loop while:
O loop while é usado quando queremos executar um bloco de código enquanto uma condição é verdadeira. A sintaxe do loop while é a seguinte:

```java
while (condição) {
   // código a ser executado enquanto a condição for verdadeira
}
```

Loop do-while:
O loop do-while é similar ao loop while, mas a diferença é que o bloco de código é executado pelo menos uma vez, mesmo que a condição seja falsa. A sintaxe do loop do-while é a seguinte:

```java
do {
   // código a ser executado
} while (condição);
```

Loop for:
O loop for é usado quando queremos executar um bloco de código um número específico de vezes. Ele tem uma sintaxe mais complexa que os loops while e do-while, mas também é mais poderoso. A sintaxe do loop for é a seguinte:

```java
for (inicialização; condição; atualização) {
   // código a ser executado
}
```

Na inicialização, podemos declarar e/ou atribuir valores às variáveis usadas no loop. A condição é verificada a cada iteração do loop e se for falsa, o loop é interrompido. A atualização é executada no final de cada iteração e é geralmente usada para atualizar o valor da variável de controle do loop.

> Esses loops podem ser aninhados para criar estruturas de repetição mais complexas. Além disso, a palavra-chave "break" pode ser usada para interromper um loop e a palavra-chave "continue" pode ser usada para pular uma iteração do loop.
{: .prompt-info }

## Listas

Em Java, as listas são uma estrutura de dados que permite armazenar um conjunto de elementos em uma sequência ordenada e dinamicamente redimensionável. A lista mais comumente usada em Java é a ArrayList, mas existem outras, como LinkedList e Vector.

A ArrayList é implementada como uma matriz dinâmica, que significa que sua capacidade é automaticamente aumentada ou diminuída conforme os elementos são adicionados ou removidos. A ArrayList é uma classe genérica, o que significa que podemos especificar o tipo de elementos que ela conterá. Por exemplo, podemos criar uma ArrayList que contenha apenas strings, ou apenas inteiros, etc.

Para usar a ArrayList em Java, primeiro precisamos importar a classe java.util.ArrayList. Em seguida, podemos criar uma nova ArrayList especificando o tipo de elemento que ela conterá. Aqui está um exemplo simples:

```java
import java.util.ArrayList;

public class ExemploArrayList {
    public static void main(String[] args) {
        // criar uma nova ArrayList de strings
        ArrayList<String> lista = new ArrayList<String>();

        // adicionar elementos à lista
        lista.add("elemento 1");
        lista.add("elemento 2");
        lista.add("elemento 3");

        // percorrer a lista e exibir seus elementos
        for (String elemento : lista) {
            System.out.println(elemento);
        }
    }
}
```

Neste exemplo, criamos uma nova ArrayList de strings, adicionamos alguns elementos a ela e, em seguida, usamos um loop for-each para percorrer a lista e exibir seus elementos.

> Existem muitos métodos úteis disponíveis para trabalhar com ArrayLists, como adicionar ou remover elementos, obter o tamanho da lista e acessar elementos individuais por índice. Também podemos usar o método "contains" para verificar se a lista contém um determinado elemento.
{: .prompt-info }

## Exercícios

1. Faça um algoritmo para ler dois números e imprimir o maior, o menor ou então dizer se são iguais.
2. Faça um algoritmo para ler um número inteiro e dizer se o número lido é par ou impar.
3. Faça um algoritmo para ler dois números A e B e dizer se A é divisível por B.

## Resolução com Java

### 1. Comparar números

Para resolver este problema em Java, podemos usar a classe Scanner para ler os dois números digitados pelo usuário e compará-los utilizando estruturas condicionais.

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Digite o primeiro número: ");
    int num1 = scanner.nextInt();
    System.out.print("Digite o segundo número: ");
    int num2 = scanner.nextInt();

    if(num1 == num2) {
      System.out.println("Os números são iguais");
    } else if(num1 > num2) {
      System.out.println("O maior número é " + num1);
      System.out.println("O menor número é " + num2);
    } else {
      System.out.println("O maior número é " + num2);
      System.out.println("O menor número é " + num1);
    }
  }
}
```

### 2. par ou ímpar

Para verificar se um número é par ou ímpar em Java, podemos utilizar o operador de módulo para verificar se o resto da divisão por 2 é igual a zero.

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Digite um número: ");
    int num = scanner.nextInt();

    if(num % 2 == 0) {
      System.out.println("O número " + num + " é par");
    } else {
      System.out.println("O número " + num + " é ímpar");
    }
  }
}
```

### 3. Verificar se é divisível

Para verificar se um número é divisível por outro em Java, podemos utilizar o operador de módulo novamente para verificar se o resto da divisão é igual a zero.

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Digite o primeiro número: ");
    int num1 = scanner.nextInt();
    System.out.print("Digite o segundo número: ");
    int num2 = scanner.nextInt();

    if(num1 % num2 == 0) {
      System.out.println(num1 + " é divisível por " + num2);
    } else {
      System.out.println(num1 + " não é divisível por " + num2);
    }
  }
}
```

## Referências

- [O que é Java e por onde começar? - Zup](https://www.zup.com.br/blog/o-que-e-java)
- [Java Tutorial](https://www.w3schools.com/java/default.asp)
- [Qual a diferença entre JDK, JRE e JVM](https://dicasdejava.com.br/qual-a-diferenca-entre-jdk-jre-e-jvm/)
- [Estruturas condicionais e de repetição](https://www.treinaweb.com.br/blog/estruturas-condicionais-e-de-repeticao)
- [If, else java e operador ternário: como usar?](https://blog.betrybe.com/if-else-java/)
- [Declarações if-else em java - Javatpoint](https://www.javatpoint.com/pt/declarações-if-else-em-java)
- [Java array: como declarar, usar e manipular arrays em Java?](https://blog.betrybe.com/java/java-array/)
- [Apostilas - Alura Cursos Online](https://www.alura.com.br/apostilas)
- [Learn Java - Dev.java](https://dev.java/learn/)
