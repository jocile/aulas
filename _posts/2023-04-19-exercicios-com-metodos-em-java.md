---
title:  "Exercícios com métodos em Java"
date: 2023-04-19 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, exercícios, java]
---
Refatore os seguintes problemas usando classes e Programação Orientada a Objetos:

1. Problema: Calcular a média de três notas e exibir o resultado.

```java
import java.util.Scanner;

public class MediaNotas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double nota1, nota2, nota3, media;

        System.out.print("Digite a primeira nota: ");
        nota1 = input.nextDouble();

        System.out.print("Digite a segunda nota: ");
        nota2 = input.nextDouble();

        System.out.print("Digite a terceira nota: ");
        nota3 = input.nextDouble();

        media = (nota1 + nota2 + nota3) / 3;

        System.out.println("A média é: " + media);
    }
}
```

Exemplo de resolução do mesmo problema em Java com métodos estáticos:

Problema: Calcular a média de três notas e exibir o resultado.

```java
import java.util.Scanner;

public class MediaNotas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite a primeira nota: ");
        double nota1 = input.nextDouble();

        System.out.print("Digite a segunda nota: ");
        double nota2 = input.nextDouble();

        System.out.print("Digite a terceira nota: ");
        double nota3 = input.nextDouble();

        double media = calcularMedia(nota1, nota2, nota3);

        System.out.println("A média é: " + media);
    }

    public static double calcularMedia(double nota1, double nota2, double nota3) {
        return (nota1 + nota2 + nota3) / 3;
    }
}
```

Neste exemplo, utilizamos um método estático calcularMedia que recebe as três notas como parâmetros e retorna a média. No método main, lemos as notas do usuário e chamamos o método calcularMedia passando as notas como argumentos. O método calcularMedia é declarado como static para que possa ser chamado diretamente pela classe MediaNotas, sem precisar criar um objeto da classe.

## Usando classes com método estático

Exemplo de resolução do mesmo problema em Java com classes que possuem métodos estáticos:

Problema: Calcular a média de três notas e exibir o resultado.

```java
import java.util.Scanner;

public class MediaNotas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite a primeira nota: ");
        double nota1 = input.nextDouble();

        System.out.print("Digite a segunda nota: ");
        double nota2 = input.nextDouble();

        System.out.print("Digite a terceira nota: ");
        double nota3 = input.nextDouble();

        double media = Aluno.calcularMedia(nota1, nota2, nota3);

        System.out.println("A média é: " + media);
    }
}

class Aluno {
    public static double calcularMedia(double nota1, double nota2, double nota3) {
        return (nota1 + nota2 + nota3) / 3;
    }
}
```

Neste ex

```java
import java.util.Scanner;

public class MediaNotas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Digite a primeira nota: ");
        double nota1 = input.nextDouble();

        System.out.print("Digite a segunda nota: ");
        double nota2 = input.nextDouble();

        System.out.print("Digite a terceira nota: ");
        double nota3 = input.nextDouble();

        double media = Aluno.calcularMedia(nota1, nota2, nota3);

        System.out.println("A média é: " + media);
    }
}

class Aluno {
    public static double calcularMedia(double nota1, double nota2, double nota3) {
        return (nota1 + nota2 + nota3) / 3;
    }
}
```

Neste exemplo, criamos uma classe Aluno que possui apenas um método estático calcularMedia, que recebe as três notas como parâmetros e retorna a média. No método main, lemos as notas do usuário e chamamos o método calcularMedia da classe Aluno passando as notas como argumentos. O método calcularMedia é declarado como static para que possa ser chamado diretamente pela classe Aluno, sem precisar criar um objeto da classe.

## Referências

[Java OOP (Object-Oriented Programming)](https://www.w3schools.com/java/java_oop.asp)
