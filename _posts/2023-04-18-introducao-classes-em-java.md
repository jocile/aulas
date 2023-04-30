---
title:  "Introdução a classes em Java"
date: 2023-04-18 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, exercícios, java]
---
Surgida na década de 1960, a OO é um estilo de programação que enfatiza os dados em detrimento das ações, ou seja, seu foco principal está na transposição para um sistema de informação de um contexto específico do mundo real no qual existem objetos que interagem entre si e que possuem características, comportamentos e responsabilidades.

## Classes

Classes são elementos fundamentais da programação orientada a objetos em Java. Elas permitem definir novos tipos de dados com seus próprios atributos (variáveis) e métodos (funções).

Para criar uma classe em Java, você precisa seguir os seguintes passos:

1. Defina o nome da classe. O nome da classe deve ser descritivo e começar com uma letra maiúscula. Exemplo: `MinhaClasse`.
2. Defina os atributos da classe. Os atributos são variáveis que armazenam dados que pertencem à classe. Eles são definidos dentro da classe, mas fora dos métodos. Exemplo: `private int meuAtributo;`
3. Defina os métodos da classe. Os métodos são funções que realizam operações relacionadas à classe. Eles são definidos dentro da classe, após a definição dos atributos. Exemplo: `public void meuMetodo() { // implementação aqui }`
4. Crie um objeto da classe. Para usar uma classe, você precisa criar um objeto da classe. Exemplo: `MinhaClasse objeto = new MinhaClasse();`
5. Use os métodos e atributos do objeto. Agora que você tem um objeto da classe, você pode usar os métodos e atributos do objeto. Exemplo: `objeto.meuMetodo(); int resultado = objeto.meuAtributo;`

Aqui está um exemplo completo de uma classe em Java:

```java
public class MinhaClasse {
  private int meuAtributo;

  public void meuMetodo() {
    System.out.println("Olá, mundo!");
  }

  public int getMeuAtributo() {
    return meuAtributo;
  }

  public void setMeuAtributo(int novoValor) {
    meuAtributo = novoValor;
  }
}

```

Neste exemplo, a classe `MinhaClasse` tem um atributo `meuAtributo`, um método `meuMetodo` que imprime uma mensagem e dois métodos `get` e `set` para obter e definir o valor do atributo.

Para usar esta classe em um programa Java, você pode criar um objeto da classe e usar seus métodos e atributos:

```java
public class Programa {
  public static void main(String[] args) {
    MinhaClasse objeto = new MinhaClasse();
    objeto.meuMetodo(); // imprime "Olá, mundo!"
    objeto.setMeuAtributo(42);
    int valor = objeto.getMeuAtributo(); // valor é 42
  }
}

```

Neste exemplo, criamos um objeto da classe `MinhaClasse`, usamos o método `meuMetodo` para imprimir uma mensagem, definimos o valor do atributo `meuAtributo` usando o método `setMeuAtributo` e obtemos o valor do atributo usando o método `getMeuAtributo`.

## Exercício

1. Faça um algoritmo para ler dois números e imprimir o maior, o menor ou então dizer se são iguais.

Para resolver esse problema usando classes em Java, você pode criar uma classe `Numeros` que tenha dois atributos (os números a serem comparados) e três métodos que retornam o maior número, o menor número e um booleano que indica se os números são iguais. Aqui está um exemplo de como você pode fazer isso:

```java
public class Numeros {
  private int numero1;
  private int numero2;

  public Numeros(int numero1, int numero2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  public int getMaior() {
    return Math.max(numero1, numero2);
  }

  public int getMenor() {
    return Math.min(numero1, numero2);
  }

  public boolean saoIguais() {
    return numero1 == numero2;
  }
}

```

Nesta classe, o construtor recebe os dois números a serem comparados e armazena-os nos atributos `numero1` e `numero2`. Os métodos `getMaior` e `getMenor` usam a classe `Math` para retornar o maior e o menor número, respectivamente. O método `saoIguais` retorna um booleano que indica se os números são iguais.

Para usar esta classe em um programa Java, você pode criar um objeto da classe e chamar seus métodos para obter o maior número, o menor número e verificar se os números são iguais. Aqui está um exemplo:

```java
import java.util.Scanner;

public class Programa {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Digite o primeiro número: ");
    int numero1 = scanner.nextInt();

    System.out.print("Digite o segundo número: ");
    int numero2 = scanner.nextInt();

    Numeros numeros = new Numeros(numero1, numero2);

    if (numeros.saoIguais()) {
      System.out.println("Os números são iguais.");
    } else {
      System.out.println("O maior número é " + numeros.getMaior());
      System.out.println("O menor número é " + numeros.getMenor());
    }
  }
}

```

Neste exemplo, o programa lê dois números do usuário, cria um objeto da classe `Numeros` com esses números e usa os métodos `getMaior`, `getMenor` e `saoIguais` para imprimir o resultado. Se os números forem iguais, o programa imprime uma mensagem informando isso. Caso contrário, ele imprime o maior e o menor número.

## Usando métodos estáticos

Para usar métodos estáticos no exemplo anterior, você pode modificar a classe `Numeros` para ter somente métodos estáticos e, em seguida, chamar esses métodos diretamente na classe `Programa`. Aqui está como o exemplo anterior pode ser reescrito usando métodos estáticos:

```java
import java.util.Scanner;

public class Programa {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Digite o primeiro número: ");
    int numero1 = scanner.nextInt();

    System.out.print("Digite o segundo número: ");
    int numero2 = scanner.nextInt();

    if (Numeros.saoIguais(numero1, numero2)) {
      System.out.println("Os números são iguais.");
    } else {
      System.out.println("O maior número é " + Numeros.getMaior(numero1, numero2));
      System.out.println("O menor número é " + Numeros.getMenor(numero1, numero2));
    }
  }
}

class Numeros {
  public static int getMaior(int numero1, int numero2) {
    return Math.max(numero1, numero2);
  }

  public static int getMenor(int numero1, int numero2) {
    return Math.min(numero1, numero2);
  }

  public static boolean saoIguais(int numero1, int numero2) {
    return numero1 == numero2;
  }
}

```

Neste exemplo, os métodos `getMaior`, `getMenor` e `saoIguais` foram transformados em métodos estáticos. Isso significa que eles podem ser chamados diretamente na classe `Numeros`, sem a necessidade de criar um objeto da classe.

No método `main` da classe `Programa`, os métodos estáticos são chamados diretamente na classe `Numeros`, passando os dois números como argumentos. A lógica é a mesma do exemplo anterior, mas agora não é necessário criar um objeto da classe `Numeros`.

Note que a classe `Numeros` e a classe `Programa` foram colocadas em arquivos separados, com o nome da classe principal sendo o mesmo que o nome do arquivo. Isso é uma boa prática em Java. Se você quiser manter tudo em um arquivo, basta colocar a classe `Numeros` antes da classe `Programa`.

## Referências

Xavier, Gley Fabiano Cardoso
Lógica de programação
E-book. Disponível em: [https://bibliotecadigitalsenac.com.br/?from=%3FcontentInfo%3D1306#/legacy/epub/1306](https://bibliotecadigitalsenac.com.br/?from=%3FcontentInfo%3D1306#/legacy/epub/1306) cap. 10
Acesso em 18/04/2023

- [Variáveis Primitivas e Controle de Fluxo - Alura Cursos Online](https://www.alura.com.br/apostila-java-orientacao-objetos/variaveis-primitivas-e-controle-de-fluxo)
- [Orientação a Objetos Básica - Alura Cursos Online](https://www.alura.com.br/apostila-java-orientacao-objetos/orientacao-a-objetos-basica)
- [Java OOP (Object-Oriented Programming)](https://www.w3schools.com/java/java_oop.asp)

[![Vídeo sobre POO](http://img.youtube.com/vi/aBhVJM31nBM/0.jpg){: w="200" h="50" }](http://www.youtube.com/watch?v=aBhVJM31nBM)
