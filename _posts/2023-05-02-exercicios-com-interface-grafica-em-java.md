---
title:  "Exercícios com interfaces gráfica em Java"
date: 2023-05-02 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, gui, java]
---
Para usar interfaces gráficas em Java, podemos utilizar a biblioteca Swing, que fornece um conjunto de componentes e ferramentas para criar GUIs (Graphical User Interfaces) em Java.

Exercícios propostos:

- Faça um algoritmo para ler dois números e imprimir o maior, o menor ou então dizer se são iguais.
- Faça um algoritmo para ler um número inteiro e dizer se o número lido é par ou impar.
- Faça um algoritmo para ler dois números A e B e dizer se A é divisível por B.
- Faça um algoritmo para ler dois números e imprimi-los em ordem crescente.
- Faça um algoritmo para ler três números e imprimir o maior.

A seguir, exemplos básico de como criar uma interface gráfica com Swing em Java:

## 1. Ler números e mostrar o maior

Desenvolver um algoritmo em java, usando gui swing, para resolver o seguinte problema: Faça um algoritmo para ler três números e imprimir o maior.

Para desenvolver um algoritmo em Java usando GUI Swing para ler três números e imprimir o maior, você pode seguir os seguintes passos:

1. Crie uma classe que estenda a classe JFrame, que será a janela principal do seu aplicativo. Vamos chamar essa classe de "MaiorNumeroGUI".
2. Dentro da classe MaiorNumeroGUI, crie três componentes JLabel para exibir as instruções de entrada, JTextField para o usuário inserir os números e um JButton para acionar o algoritmo de verificação.
3. No construtor da classe MaiorNumeroGUI, configure a janela com um título e um tamanho apropriado. Em seguida, adicione os componentes JLabel, JTextField e JButton à janela, usando a classe LayoutManager apropriada para organizar os componentes.
4. Adicione um ouvinte de eventos ao JButton para que, quando o usuário clicar no botão, o programa execute o algoritmo para encontrar o maior número.
5. No método actionPerformed do ouvinte de eventos, leia os três números do JTextField e compare-os para encontrar o maior. Em seguida, exiba o resultado usando um JOptionPane.
6. Compile e execute o aplicativo para testar.

Segue abaixo um exemplo de código que implementa esses passos:

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class MaiorNumeroGUI extends JFrame implements ActionListener {

    private JLabel label1, label2, label3, resultado;
    private JTextField campo1, campo2, campo3;
    private JButton botao;

    public MaiorNumeroGUI() {
        super("Encontre o maior número");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        label1 = new JLabel("Insira três números:");
        label2 = new JLabel("Número 1:");
        label3 = new JLabel("Número 2:");
        resultado = new JLabel("");

        campo1 = new JTextField(10);
        campo2 = new JTextField(10);
        campo3 = new JTextField(10);

        botao = new JButton("Encontrar o maior");
        botao.addActionListener(this);

        JPanel painel = new JPanel();
        painel.setLayout(new GridLayout(4, 2));
        painel.add(label1);
        painel.add(new JLabel(""));
        painel.add(label2);
        painel.add(campo1);
        painel.add(label3);
        painel.add(campo2);
        painel.add(new JLabel(""));
        painel.add(botao);

        add(painel, BorderLayout.CENTER);
        add(resultado, BorderLayout.SOUTH);
    }

    public void actionPerformed(ActionEvent evento) {
        int num1 = Integer.parseInt(campo1.getText());
        int num2 = Integer.parseInt(campo2.getText());
        int num3 = Integer.parseInt(campo3.getText());

        int maior = num1;
        if (num2 > maior) {
            maior = num2;
        }
        if (num3 > maior) {
            maior = num3;
        }

        resultado.setText("O maior número é: " + maior);
    }

    public static void main(String[] args) {
        MaiorNumeroGUI app = new MaiorNumeroGUI();
        app.setVisible(true);
    }
}

```

## 2. Faça um algoritmo para ler dois números A e B e dizer se A é divisível por B.

Para resolver o problema de ler dois números A e B e dizer se A é divisível por B, podemos seguir os seguintes passos:

1. Crie uma nova classe chamada "DivisibilidadeGUI" que estende a classe JFrame.
2. Dentro da classe DivisibilidadeGUI, crie dois componentes JLabel para exibir as instruções de entrada, dois JTextField para o usuário inserir os números e um JButton para acionar o algoritmo de verificação.
3. No construtor da classe DivisibilidadeGUI, configure a janela com um título e um tamanho apropriado. Em seguida, adicione os componentes JLabel, JTextField e JButton à janela, usando a classe LayoutManager apropriada para organizar os componentes.
4. Adicione um ouvinte de eventos ao JButton para que, quando o usuário clicar no botão, o programa execute o algoritmo para verificar a divisibilidade.
5. No método actionPerformed do ouvinte de eventos, leia os dois números do JTextField e verifique se o primeiro número é divisível pelo segundo. Exiba o resultado usando um JOptionPane.
6. Compile e execute o aplicativo para testar.

Segue abaixo um exemplo de código que implementa esses passos:

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class DivisibilidadeGUI extends JFrame implements ActionListener {

    private JLabel label1, label2, resultado;
    private JTextField campo1, campo2;
    private JButton botao;

    public DivisibilidadeGUI() {
        super("Verificar Divisibilidade");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        label1 = new JLabel("Insira dois números:");
        label2 = new JLabel("");
        resultado = new JLabel("");

        campo1 = new JTextField(10);
        campo2 = new JTextField(10);

        botao = new JButton("Verificar");
        botao.addActionListener(this);

        JPanel painel = new JPanel();
        painel.setLayout(new GridLayout(3, 2));
        painel.add(label1);
        painel.add(label2);
        painel.add(new JLabel("Número 1:"));
        painel.add(campo1);
        painel.add(new JLabel("Número 2:"));
        painel.add(campo2);

        add(painel, BorderLayout.CENTER);
        add(botao, BorderLayout.SOUTH);
        add(resultado, BorderLayout.NORTH);
    }

    public void actionPerformed(ActionEvent evento) {
        int num1 = Integer.parseInt(campo1.getText());
        int num2 = Integer.parseInt(campo2.getText());

        if (num1 % num2 == 0) {
            resultado.setText(num1 + " é divisível por " + num2);
        } else {
            resultado.setText(num1 + " não é divisível por " + num2);
        }
    }

    public static void main(String[] args) {
        DivisibilidadeGUI app = new DivisibilidadeGUI();
        app.setVisible(true);
    }
}

```

Nesse exemplo de código, estamos verificando a divisibilidade do primeiro número pelo segundo número usando o operador módulo (%). Se o resultado da divisão entre os dois números for zero, então o primeiro número é divisível pelo segundo número, caso contrário, o primeiro número não é divisível pelo segundo número.

## 3. Ler dois números e imprimir o maior, o menor ou então dizer se são iguais

Para resolver o problema de ler dois números e imprimir o maior, o menor ou dizer se são iguais, podemos seguir os seguintes passos:

1. Crie uma nova classe chamada "MaiorMenorIgualGUI" que estende a classe JFrame.
2. Dentro da classe MaiorMenorIgualGUI, crie dois componentes JLabel para exibir as instruções de entrada, dois JTextField para o usuário inserir os números e um JButton para acionar o algoritmo de verificação.
3. No construtor da classe MaiorMenorIgualGUI, configure a janela com um título e um tamanho apropriado. Em seguida, adicione os componentes JLabel, JTextField e JButton à janela, usando a classe LayoutManager apropriada para organizar os componentes.
4. Adicione um ouvinte de eventos ao JButton para que, quando o usuário clicar no botão, o programa execute o algoritmo para verificar o maior, o menor ou dizer se são iguais.
5. No método actionPerformed do ouvinte de eventos, leia os dois números do JTextField e compare-os usando operadores de comparação. Em seguida, exiba o resultado usando um JOptionPane.
6. Compile e execute o aplicativo para testar.

Segue abaixo o código atualizado que verifica se o número A é divisível pelo número B:

```java
javaCopy code
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class DivisibilidadeGUI extends JFrame implements ActionListener {

    private JLabel label1, label2, resultado;
    private JTextField campo1, campo2;
    private JButton botao;

    public DivisibilidadeGUI() {
        super("Divisibilidade");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        label1 = new JLabel("Insira dois números:");
        label2 = new JLabel("");
        resultado = new JLabel("");

        campo1 = new JTextField(10);
        campo2 = new JTextField(10);

        botao = new JButton("Verificar");
        botao.addActionListener(this);

        JPanel painel = new JPanel();
        painel.setLayout(new GridLayout(3, 2));
        painel.add(label1);
        painel.add(label2);
        painel.add(new JLabel("Número 1:"));
        painel.add(campo1);
        painel.add(new JLabel("Número 2:"));
        painel.add(campo2);

        add(painel, BorderLayout.CENTER);
        add(botao, BorderLayout.SOUTH);
        add(resultado, BorderLayout.NORTH);
    }

    public void actionPerformed(ActionEvent evento) {
        int num1 = Integer.parseInt(campo1.getText());
        int num2 = Integer.parseInt(campo2.getText());

        if (num1 % num2 == 0) {
            resultado.setText(num1 + " é divisível por " + num2 + ".");
        } else {
            resultado.setText(num1 + " não é divisível por " + num2 + ".");
        }
    }

    public static void main(String[] args) {
        DivisibilidadeGUI app = new DivisibilidadeGUI();
        app.setVisible(true);
    }
}

```

Esse código é muito semelhante ao anterior, mas adiciona um novo caso de verificação na função actionPerformed. Usamos o operador de módulo (%) para verificar se num1 é divisível por num2. Se o resultado da operação de módulo for zero, num1 é divisível por num2, caso contrário, não é divisível. O resultado é então exibido na tela usando o componente JLabel.

## Exemplo de menu para selecionar os problemas anteriores

Para criar uma janela com menu que permita ao usuário escolher qual exemplo executar, podemos usar a classe JMenuBar do Java Swing. Essa classe nos permite adicionar um menu à nossa janela, e cada item do menu pode executar uma ação específica quando é selecionado.

Segue abaixo o código completo para uma janela com menu que exibe os três exemplos anteriores:

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ExemplosGUI extends JFrame implements ActionListener {

    private JMenuBar menuBar;
    private JMenu exemplosMenu;
    private JMenuItem maiorMenuItem, divisibilidadeMenuItem, maiorMenorMenuItem;

    public ExemplosGUI() {
        super("Exemplos");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Cria o menu
        menuBar = new JMenuBar();
        exemplosMenu = new JMenu("Exemplos");

        // Adiciona os itens do menu
        maiorMenuItem = new JMenuItem("Maior de três números");
        maiorMenuItem.addActionListener(this);
        exemplosMenu.add(maiorMenuItem);

        divisibilidadeMenuItem = new JMenuItem("Divisibilidade");
        divisibilidadeMenuItem.addActionListener(this);
        exemplosMenu.add(divisibilidadeMenuItem);

        maiorMenorMenuItem = new JMenuItem("Maior, Menor ou Igual");
        maiorMenorMenuItem.addActionListener(this);
        exemplosMenu.add(maiorMenorMenuItem);

        // Adiciona o menu à barra de menu
        menuBar.add(exemplosMenu);

        // Define a barra de menu da janela
        setJMenuBar(menuBar);
    }

    public void actionPerformed(ActionEvent evento) {
        if (evento.getSource() == maiorMenuItem) {
            // Executa o exemplo de encontrar o maior de três números
            new MaiorDeTresNumerosGUI().setVisible(true);
        } else if (evento.getSource() == divisibilidadeMenuItem) {
            // Executa o exemplo de verificar divisibilidade
            new DivisibilidadeGUI().setVisible(true);
        } else if (evento.getSource() == maiorMenorMenuItem) {
            // Executa o exemplo de encontrar o maior, menor ou igual
            new MaiorMenorIgualGUI().setVisible(true);
        }
    }

    public static void main(String[] args) {
        ExemplosGUI app = new ExemplosGUI();
        app.setVisible(true);
    }
}

```

Nesse código, criamos um objeto da classe JMenuBar e um objeto da classe JMenu. Em seguida, adicionamos os itens do menu usando a classe JMenuItem. Cada item é configurado com um nome e um ActionListener que será executado quando o item for selecionado.

A seguir, adicionamos o menu à barra de menu usando o método add. Finalmente, definimos a barra de menu da janela usando o método setJMenuBar.

No método actionPerformed, verificamos qual item do menu foi selecionado usando o método getSource. Dependendo do item selecionado, executamos o exemplo correspondente criando uma nova instância da classe apropriada e tornando-a visível.

Dessa forma, o usuário pode escolher qual exemplo executar a partir do menu na janela.

## Referências

- [Introduction to GUI Building](https://netbeans.apache.org/kb/docs/java/gui-functionality.html)
- [Lesson: Learning Swing with the NetBeans IDE (The Java™ Tutorials > Creating a GUI With Swing)](https://docs.oracle.com/javase/tutorial/uiswing/learn/index.html)
- [Setting up the CelsiusConverter Project (The Java™ Tutorials > Creating a GUI With Swing > Learning Swing with the NetBeans IDE)](https://docs.oracle.com/javase/tutorial/uiswing/learn/settingup.html)
