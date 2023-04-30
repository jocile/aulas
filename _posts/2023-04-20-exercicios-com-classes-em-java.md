---
title:  "Exercícios com classes em Java"
date: 2023-04-20 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, exercícios, java]
---
Refatorando os seguintes problemas usando classes e Programação Orientada a Objetos:

## Exemplo classe animal

1. Crie um programa com a classes animal, onde um cachorro, um gato e um passarinho herdam as características da classe animal.

Para resolver o problema proposto, podemos criar uma classe `Animal` com os atributos e métodos comuns a todos os animais, e em seguida, criar as classes `Cachorro`, `Gato` e `Passarinho` que herdam da classe `Animal` e acrescentam as suas próprias características específicas. Aqui está um exemplo de como isso pode ser feito em Java:

```java
class Animal {
  private String nome;
  private int idade;

  public Animal(String nome, int idade) {
    this.nome = nome;
    this.idade = idade;
  }

  public String getNome() {
    return nome;
  }

  public int getIdade() {
    return idade;
  }

  public void emitirSom() {
    System.out.println("Animal emitindo som...");
  }
}

class Cachorro extends Animal {
  private String raca;

  public Cachorro(String nome, int idade, String raca) {
    super(nome, idade);
    this.raca = raca;
  }

  public String getRaca() {
    return raca;
  }

  public void latir() {
    System.out.println("Au au!");
  }
}

class Gato extends Animal {
  private String cor;

  public Gato(String nome, int idade, String cor) {
    super(nome, idade);
    this.cor = cor;
  }

  public String getCor() {
    return cor;
  }

  public void miar() {
    System.out.println("Miau!");
  }
}

class Passarinho extends Animal {
  private String especie;

  public Passarinho(String nome, int idade, String especie) {
    super(nome, idade);
    this.especie = especie;
  }

  public String getEspecie() {
    return especie;
  }

  public void piar() {
    System.out.println("Piu piu!");
  }
}

public class Programa {
  public static void main(String[] args) {
    Cachorro cachorro = new Cachorro("Rex", 3, "Labrador");
    Gato gato = new Gato("Bolinha", 2, "Preto");
    Passarinho passarinho = new Passarinho("Piu", 1, "Canário");

    System.out.println(cachorro.getNome() + " é um cachorro da raça " + cachorro.getRaca() + ".");
    cachorro.latir();

    System.out.println(gato.getNome() + " é um gato " + gato.getCor() + ".");
    gato.miar();

    System.out.println(passarinho.getNome() + " é um passarinho da espécie " + passarinho.getEspecie() + ".");
    passarinho.piar();
  }
}

```

Neste exemplo, a classe `Animal` é criada com os atributos `nome` e `idade`, e o método `emitirSom`. As classes `Cachorro`, `Gato` e `Passarinho` herdam da classe `Animal` e acrescentam seus próprios atributos e métodos, como `raca`, `cor` e `especie`, e os métodos `latir`, `miar` e `piar`, respectivamente.

Na classe `Programa`, são criados um cachorro, um gato e um passarinho com suas respectivas informações, e em seguida, são chamados os métodos `latir`, `miar` e `piar`. Note que cada objeto criado é uma instância de uma subclasse de `Animal`, e portanto, possui tanto os atributos e métodos da classe `Animal` quanto os atributos e métodos da subclasse específica.

Ao executar o programa, a saída será:

```plain
Rex é um cachorro da raça Labrador.
Au au!
Bolinha é um gato Preto.
Miau!
Piu é um passarinho da espécie Canário.
Piu piu!

```

Note que, ao chamar o método `latir` para o objeto `cachorro`, a saída é "Au au!", que é específica para cachorros. O mesmo ocorre com os métodos `miar` e `piar`. Essa é a vantagem de usar herança em classes: podemos criar classes genéricas que podem ser estendidas por classes mais específicas, sem precisar repetir o código comum.

## Exemplo classes bancária

1. Programa de conta bancária, com depósito, saque e transferência.

### Programação estruturada

Exemplo de programa de conta bancária em Java com programação estruturada:

```java
import java.util.Scanner;

public class ContaBancaria {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        int opcao;
        double saldo = 0;
        
        do {
            System.out.println("Escolha uma opção:");
            System.out.println("1 - Depósito");
            System.out.println("2 - Saque");
            System.out.println("3 - Transferência");
            System.out.println("4 - Saldo");
            System.out.println("0 - Sair");
            
            opcao = input.nextInt();
            
            switch(opcao) {
                case 1:
                    System.out.print("Digite o valor do depósito: ");
                    double deposito = input.nextDouble();
                    saldo += deposito;
                    break;
                case 2:
                    System.out.print("Digite o valor do saque: ");
                    double saque = input.nextDouble();
                    if (saque <= saldo) {
                        saldo -= saque;
                    } else {
                        System.out.println("Saldo insuficiente");
                    }
                    break;
                case 3:
                    System.out.print("Digite o valor da transferência: ");
                    double transferencia = input.nextDouble();
                    if (transferencia <= saldo) {
                        System.out.print("Digite o número da conta de destino: ");
                        int contaDestino = input.nextInt();
                        System.out.println("Transferência realizada com sucesso");
                        saldo -= transferencia;
                    } else {
                        System.out.println("Saldo insuficiente");
                    }
                    break;
                case 4:
                    System.out.println("Saldo: " + saldo);
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
            
            System.out.println();
            
        } while (opcao != 0);
    }

}
```

### Usando funções

Segue abaixo um exemplo de programa de conta bancária em Java com a classe principal usando funções:

```java
import java.util.Scanner;

public class ContaBancaria {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        double saldo = 0.0;
        
        int opcao;
        
        do {
            System.out.println("Escolha uma opção:");
            System.out.println("1 - Depósito");
            System.out.println("2 - Saque");
            System.out.println("3 - Transferência");
            System.out.println("4 - Saldo");
            System.out.println("0 - Sair");
            
            opcao = input.nextInt();
            
            switch(opcao) {
                case 1:
                    System.out.print("Digite o valor do depósito: ");
                    double deposito = input.nextDouble();
                    saldo = depositar(saldo, deposito);
                    break;
                case 2:
                    System.out.print("Digite o valor do saque: ");
                    double saque = input.nextDouble();
                    saldo = sacar(saldo, saque);
                    break;
                case 3:
                    System.out.print("Digite o valor da transferência: ");
                    double transferencia = input.nextDouble();
                    System.out.print("Digite o número da conta de destino: ");
                    int contaDestino = input.nextInt();
                    saldo = transferir(saldo, transferencia, contaDestino);
                    break;
                case 4:
                    System.out.println("Saldo: " + saldo);
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
            
            System.out.println();
            
        } while (opcao != 0);
    }
    
    public static double depositar(double saldo, double valor) {
        return saldo + valor;
    }
    
    public static double sacar(double saldo, double valor) {
        if (valor <= saldo) {
            return saldo - valor;
        } else {
            System.out.println("Saldo insuficiente");
            return saldo;
        }
    }
    
    public static double transferir(double saldo, double valor, int contaDestino) {
        if (valor <= saldo) {
            // Lógica para transferência
            return saldo - valor;
        } else {
            System.out.println("Saldo insuficiente");
            return saldo;
        }
    }

}
```

Neste exemplo, as operações de depósito, saque e transferência foram transformadas em funções que recebem o saldo atual e os valores necessários para realizar as operações e retornam o novo saldo após a operação. Na classe principal, as funções são chamadas dentro do switch-case correspondente a cada operação. O objeto da classe Conta não é mais necessário neste exemplo, uma vez que todas as operações são realizadas por meio das funções.

### usando Programação orientada a objetos

```java
import java.util.Scanner;

public class ContaBancaria {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        Conta conta = new Conta();
        
        int opcao;
        
        do {
            System.out.println("Escolha uma opção:");
            System.out.println("1 - Depósito");
            System.out.println("2 - Saque");
            System.out.println("3 - Transferência");
            System.out.println("4 - Saldo");
            System.out.println("0 - Sair");
            
            opcao = input.nextInt();
            
            switch(opcao) {
                case 1:
                    System.out.print("Digite o valor do depósito: ");
                    double deposito = input.nextDouble();
                    conta.depositar(deposito);
                    break;
                case 2:
                    System.out.print("Digite o valor do saque: ");
                    double saque = input.nextDouble();
                    if (conta.sacar(saque)) {
                        System.out.println("Saque realizado com sucesso");
                    } else {
                        System.out.println("Saldo insuficiente");
                    }
                    break;
                case 3:
                    System.out.print("Digite o valor da transferência: ");
                    double transferencia = input.nextDouble();
                    System.out.print("Digite o número da conta de destino: ");
                    int contaDestino = input.nextInt();
                    if (conta.transferir(transferencia, contaDestino)) {
                        System.out.println("Transferência realizada com sucesso");
                    } else {
                        System.out.println("Saldo insuficiente");
                    }
                    break;
                case 4:
                    System.out.println("Saldo: " + conta.getSaldo());
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
            
            System.out.println();
            
        } while (opcao != 0);
    }

}

class Conta {
    private double saldo;
    
    public void depositar(double valor) {
        this.saldo += valor;
    }
    
    public boolean sacar(double valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
    
    public boolean transferir(double valor, int contaDestino) {
        if (valor <= this.saldo) {
            // Lógica para transferência
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
    
    public double getSaldo() {
        return this.saldo;
    }
}
```

Neste exemplo, criamos uma classe Conta que possui os métodos depositar, sacar, transferir e getSaldo para realizar as operações na conta bancária. No método main, criamos um objeto da classe Conta e usamos seus métodos para realizar as operações de depósito, saque, transferência e consulta de saldo. As operações de saque e transferência verificam se há saldo suficiente na conta antes de realizar a operação e retornam um valor booleano indicando se a operação foi realizada com sucesso ou não.

## Referências

[Java OOP (Object-Oriented Programming)](https://www.w3schools.com/java/java_oop.asp)
