---
title:  "Funções em Java"
date: 2023-04-17 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, exercícios, java]
---
Em Java, as funções são chamadas de métodos e são definidas dentro de uma classe. Um método é um bloco de código que executa uma tarefa específica e pode ser chamado várias vezes ao longo do programa.

Aqui está um exemplo simples de um método em Java:

```java
public class ExemploMetodo {
    public static void main(String[] args) {
        int resultado = somar(3, 4);
        System.out.println(resultado);
    }

    public static int somar(int a, int b) {
        int resultado = a + b;
        return resultado;
    }
}
```

Neste exemplo, criamos um método chamado "somar" que recebe dois argumentos inteiros e retorna sua soma. O método é definido com o modificador "public" (que significa que ele pode ser acessado de fora da classe), o tipo de retorno (que é int neste caso), o nome do método e os parâmetros que ele recebe entre parênteses.

O método "somar" é chamado dentro do método "main" e o resultado é armazenado na variável "resultado", que é então exibida no console.

Além disso, os métodos podem ser sobrecarregados, o que significa que podemos ter dois ou mais métodos com o mesmo nome, mas diferentes tipos ou números de parâmetros. Isso é útil quando queremos executar a mesma tarefa com diferentes tipos de entrada.

```java
public class ExemploSobrecarga {
    public static void main(String[] args) {
        int resultadoInteiro = somar(3, 4);
        double resultadoDouble = somar(3.5, 4.5);
        System.out.println(resultadoInteiro);
        System.out.println(resultadoDouble);
    }

    public static int somar(int a, int b) {
        int resultado = a + b;
        return resultado;
    }

    public static double somar(double a, double b) {
        double resultado = a + b;
        return resultado;
    }
}
```

Neste exemplo, temos dois métodos "somar" com os mesmos nomes, mas diferentes tipos de entrada (int e double). Quando chamamos o método "somar" com inteiros, o método com inteiros como parâmetros é chamado e retorna um inteiro. Quando chamamos o método "somar" com doubles, o método com doubles como parâmetros é chamado e retorna um double.

## Exercícios

1. Faça um algoritmo para ler dois números e imprimir o maior, o menor ou então dizer se são iguais.
2. Faça um algoritmo para ler um número inteiro e dizer se o número lido é par ou impar.
3. Faça um algoritmo para ler dois números A e B e dizer se A é divisível por B.
4. Faça um algoritmo para ler dois números e imprimi-los em ordem crescente.
5. Faça um algoritmo para ler três números e imprimir o maior.

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

Exemplo de como resolver esse problema usando funções em Java.

```java
import java.util.Scanner;

public class ComparadorNumeros {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Digite o primeiro número: ");
    int numero1 = scanner.nextInt();

    System.out.print("Digite o segundo número: ");
    int numero2 = scanner.nextInt();

    if (ehIgual(numero1, numero2)) {
      System.out.println("Os números são iguais");
    } else {
      int maior = getMaior(numero1, numero2);
      int menor = getMenor(numero1, numero2);

      System.out.println("O maior número é: " + maior);
      System.out.println("O menor número é: " + menor);
    }
  }

  public static boolean ehIgual(int numero1, int numero2) {
    return numero1 == numero2;
  }

  public static int getMaior(int numero1, int numero2) {
    return Math.max(numero1, numero2);
  }

  public static int getMenor(int numero1, int numero2) {
    return Math.min(numero1, numero2);
  }
}

```

Aqui, estamos definindo três funções: `ehIgual`, `getMaior` e `getMenor`.

A função `ehIgual` simplesmente compara os dois números e retorna `true` se eles forem iguais e `false` caso contrário.

As funções `getMaior` e `getMenor` usam a classe `Math` do Java para determinar o maior e o menor número entre os dois dados.

No método `main`, lemos os dois números do usuário e usamos uma declaração condicional para imprimir o resultado correto com base em se os números são iguais ou diferentes.

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

Exemplo de como resolver esse problema usando funções em Java.

```java
import java.util.Scanner;

public class ParImpar {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Digite um número inteiro: ");
    int numero = scanner.nextInt();

    if (ehPar(numero)) {
      System.out.println("O número " + numero + " é par");
    } else {
      System.out.println("O número " + numero + " é ímpar");
    }
  }

  public static boolean ehPar(int numero) {
    return numero % 2 == 0;
  }
}

```

Aqui, estamos definindo uma função `ehPar` que verifica se um número é par ou não. A função retorna `true` se o número é par e `false` se o número é ímpar.

No método `main`, lemos o número do usuário e usamos a função `ehPar` para determinar se o número é par ou ímpar. Em seguida, imprimimos a mensagem apropriada com base no resultado da função.

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

Exemplo de como resolver esse problema usando funções em Java.

```java
import java.util.Scanner;

public class Divisivel {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Digite um número A: ");
    int a = scanner.nextInt();

    System.out.print("Digite um número B: ");
    int b = scanner.nextInt();

    if (ehDivisivel(a, b)) {
      System.out.println(a + " é divisível por " + b);
    } else {
      System.out.println(a + " não é divisível por " + b);
    }
  }

  public static boolean ehDivisivel(int a, int b) {
    return a % b == 0;
  }
}

```

Aqui, estamos definindo uma função `ehDivisivel` que verifica se o número A é divisível por B ou não. A função retorna `true` se A for divisível por B e `false` caso contrário.

No método `main`, lemos os dois números A e B do usuário e usamos a função `ehDivisivel` para determinar se A é divisível por B ou não. Em seguida, imprimimos a mensagem apropriada com base no resultado da função.

### 4. Ordenar números

Para imprimir dois números em ordem crescente, podemos utilizar a classe Arrays e o método sort.

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Digite o primeiro número: ");
    int num1 = scanner.nextInt();
    System.out.print("Digite o segundo número: ");
    int num2 = scanner.nextInt();

    int[] numeros = {num1, num2};
    Arrays.sort(numeros);

    System.out.println("Os números em ordem crescente são: " + numeros[0] + " e " + numeros[1]);
  }
}
```

### 5. Encontrar o maior

Para encontrar o maior número entre três, podemos utilizar estruturas condicionais para compará-los.

```java
import java.util.Scanner;

public class ComparadorNumeros {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Digite o primeiro número: ");
    int numero1 = scanner.nextInt();

    System.out.print("Digite o segundo número: ");
    int numero2 = scanner.nextInt();

    if (ehIgual(numero1, numero2)) {
      System.out.println("Os números são iguais");
    } else {
      int maior = getMaior(numero1, numero2);
      int menor = getMenor(numero1, numero2);

      System.out.println("O maior número é: " + maior);
      System.out.println("O menor número é: " + menor);
    }
  }

  public static boolean ehIgual(int numero1, int numero2) {
    return numero1 == numero2;
  }

  public static int getMaior(int numero1, int numero2) {
    return Math.max(numero1, numero2);
  }

  public static int getMenor(int numero1, int numero2) {
    return Math.min(numero1, numero2);
  }
}
```

Aqui, estamos definindo três funções: `ehIgual`, `getMaior` e `getMenor`.

A função `ehIgual` simplesmente compara os dois números e retorna `true` se eles forem iguais e `false` caso contrário.

As funções `getMaior` e `getMenor` usam a classe `Math` do Java para determinar o maior e o menor número entre os dois dados.

No método `main`, lemos os dois números do usuário e usamos uma declaração condicional para imprimir o resultado correto com base em se os números são iguais ou diferentes.

## Referências

- [Apostilas - Alura Cursos Online](https://www.alura.com.br/apostilas)
- [Learn Java - Dev.java](https://dev.java/learn/)
- [O que é Java - Alura Cursos Online](https://www.alura.com.br/apostila-java-orientacao-objetos/o-que-e-java#java)
- [Java Methods](https://www.w3schools.com/java/java_methods.asp)
