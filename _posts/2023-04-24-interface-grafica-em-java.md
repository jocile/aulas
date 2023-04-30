---
title:  "Interfaces gráfica em Java"
date: 2023-04-24 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, gui, java]
---
Para usar interfaces gráficas em Java, podemos utilizar a biblioteca Swing, que fornece um conjunto de componentes e ferramentas para criar GUIs (Graphical User Interfaces) em Java.

A seguir, apresento um exemplo básico de como criar uma interface gráfica com Swing em Java:

```java
import javax.swing.*;

public class ExemploGUI {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Exemplo de GUI");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        JLabel label = new JLabel("Olá, mundo!");
        panel.add(label);

        frame.getContentPane().add(panel);
        frame.pack();
        frame.setVisible(true);
    }
}

```

Neste exemplo, criamos uma janela `JFrame` com o título "Exemplo de GUI". Em seguida, criamos um painel `JPanel` e adicionamos um rótulo `JLabel` com o texto "Olá, mundo!". Adicionamos o painel ao conteúdo da janela e exibimos a janela.

Ao executar o programa, uma janela com o rótulo "Olá, mundo!" será exibida.

## Componentes

Existem diversos tipos de componentes que podem compor uma janela em Java, fornecidos pela biblioteca Swing. Alguns dos componentes mais comuns incluem:

- `JLabel`: um rótulo que exibe texto ou uma imagem;
- `JTextField`: uma caixa de texto que permite a entrada de dados pelo usuário;
- `JButton`: um botão que pode ser clicado para realizar uma ação;
- `JComboBox`: uma lista suspensa que permite a seleção de um item dentre várias opções;
- `JList`: uma lista que exibe um conjunto de itens;
- `JCheckBox`: uma caixa de seleção que permite a seleção de uma ou várias opções;
- `JRadioButton`: um botão de opção que permite a seleção de uma opção dentre várias;
- `JScrollPane`: um painel com barras de rolagem que permite a visualização de conteúdo em uma área menor do que o tamanho do componente;
- `JTable`: uma tabela que exibe dados em células organizadas em colunas e linhas.

### JLabel

```java
JLabel label = new JLabel("Digite seu nome:");
panel.add(label);

```

Nesse exemplo, criamos um rótulo `JLabel` com o texto "Digite seu nome:". O rótulo é adicionado a um painel `JPanel` chamado `panel`.

### JTextField

```java
JTextField textField = new JTextField(20);
panel.add(textField);

```

Nesse exemplo, criamos uma caixa de texto `JTextField` com espaço para 20 caracteres. A caixa de texto é adicionada ao painel `panel`.

### JButton

```java
JButton button = new JButton("Enviar");
panel.add(button);

```

Nesse exemplo, criamos um botão `JButton` com o texto "Enviar". O botão é adicionado ao painel `panel`.

### JComboBox

```java
String[] opcoes = {"Opção 1", "Opção 2", "Opção 3"};
JComboBox<String> comboBox = new JComboBox<>(opcoes);
panel.add(comboBox);

```

Nesse exemplo, criamos uma lista suspensa `JComboBox` com três opções: "Opção 1", "Opção 2" e "Opção 3". A lista suspensa é adicionada ao painel `panel`.

### JList

```java
String[] itens = {"Item 1", "Item 2", "Item 3"};
JList<String> list = new JList<>(itens);
panel.add(new JScrollPane(list));

```

Nesse exemplo, criamos uma lista `JList` com três itens: "Item 1", "Item 2" e "Item 3". A lista é adicionada a um painel com barras de rolagem `JScrollPane`.

### JCheckBox

```java
JCheckBox checkBox1 = new JCheckBox("Opção 1");
JCheckBox checkBox2 = new JCheckBox("Opção 2");
panel.add(checkBox1);
panel.add(checkBox2);

```

Nesse exemplo, criamos duas caixas de seleção `JCheckBox` com as opções "Opção 1" e "Opção 2". As caixas de seleção são adicionadas ao painel `panel`.

### JRadioButton

```java
JRadioButton radioButton1 = new JRadioButton("Opção 1");
JRadioButton radioButton2 = new JRadioButton("Opção 2");
ButtonGroup group = new ButtonGroup();
group.add(radioButton1);
group.add(radioButton2);
panel.add(radioButton1);
panel.add(radioButton2);

```

Nesse exemplo, criamos dois botões de opção `JRadioButton` com as opções "Opção 1" e "Opção 2". Os botões de opção são adicionados ao painel `panel`. Note que eles são adicionados a um grupo de botões `ButtonGroup`, para que apenas uma opção possa ser selecionada por vez.

### JTable

```java
String[][] dados = {
    {"Item 1", "10"},
    {"Item 2", "20"},
    {"Item 3", "30"}
};
String[] colunas = {"Item", "Quantidade"};
JTable table = new JTable(dados, colunas);
panel.add(new JScrollPane(table));

```

Nesse exemplo, criamos uma tabela `JTable` com três linhas e duas colunas. Os dados da tabela são armazenados em uma matriz `String[][]` e as colunas são especificadas em um vetor `String[]`. A tabela é adicionada a um painel com barras de rolagem `JScrollPane`.

### JTextArea

```java
JTextArea textArea = new JTextArea(5, 20);
panel.add(new JScrollPane(textArea));

```

Nesse exemplo, criamos uma área de texto `JTextArea` com espaço para cinco linhas e 20 colunas. A área de texto é adicionada a um painel com barras de rolagem `JScrollPane`.

### JProgressBar

```java
JProgressBar progressBar = new JProgressBar(0, 100);
progressBar.setValue(50);
panel.add(progressBar);

```

Nesse exemplo, criamos uma barra de progresso `JProgressBar` com um valor mínimo de 0 e um valor máximo de 100. O valor atual da barra é definido como 50. A barra de progresso é adicionada ao painel `panel`.

### JFileChooser

```java
JFileChooser fileChooser = new JFileChooser();
int opcao = fileChooser.showOpenDialog(panel);
if (opcao == JFileChooser.APPROVE_OPTION) {
    File arquivo = fileChooser.getSelectedFile();
    // fazer algo com o arquivo selecionado
}

```

Nesse exemplo, criamos um seletor de arquivo `JFileChooser`. Quando o usuário clica no botão "Abrir", o seletor de arquivo exibe uma janela para escolher um arquivo. Se o usuário selecionar um arquivo e clicar no botão "OK", o arquivo selecionado é armazenado em um objeto `File` e podemos fazer algo com ele. O seletor de arquivo é exibido dentro do painel `panel`.

## Entrada e saída básica

`JOptionPane` é uma classe da API Swing do Java que fornece uma maneira fácil de criar janelas de diálogo comuns em uma interface gráfica de usuário. Um desses diálogos é a entrada de dados do usuário, onde o usuário pode inserir algum texto ou valor numérico. Para usar a entrada e saída do `JOptionPane`, podemos seguir os seguintes passos:

1. Importar a classe `JOptionPane`.
2. Usar um dos métodos estáticos da classe `JOptionPane` para exibir o diálogo de entrada de dados. Por exemplo, o método `showInputDialog()` pode ser usado para obter uma entrada de texto do usuário. O método `showInputDialog(Component parentComponent, Object message)` leva dois argumentos, o primeiro é o componente pai para a janela de diálogo e o segundo é a mensagem que será exibida na janela de diálogo.
3. O valor de retorno do método `showInputDialog()` é uma `String` que representa a entrada do usuário.
4. Para exibir um valor de saída para o usuário, podemos usar o método `showMessageDialog()`, que pode exibir uma mensagem simples ou uma mensagem formatada em uma janela de diálogo.

Abaixo está um exemplo simples de como usar o `JOptionPane` para entrada e saída de dados:

```java
import javax.swing.JOptionPane;

public class EntradaSaidaJOptionPane {
    public static void main(String[] args) {
        // obtém um valor de entrada do usuário
        String nome = JOptionPane.showInputDialog(null, "Digite seu nome:");

        // exibe um valor de saída para o usuário
        JOptionPane.showMessageDialog(null, "Bem-vindo, " + nome + "!");
    }
}

```

Neste exemplo, a janela de diálogo exibe a mensagem "Digite seu nome:" e permite que o usuário insira um valor de entrada. O valor de entrada é armazenado na variável `nome`. Em seguida, uma mensagem de saída é exibida na janela de diálogo, usando o método `showMessageDialog()`. O primeiro argumento `null` significa que a janela de diálogo não tem componente pai, e o segundo argumento é a mensagem que será exibida. Nesse caso, exibimos uma mensagem de boas-vindas concatenando o valor inserido pelo usuário com uma string "Bem-vindo, ".

## Exemplo

Criar uma janela em que receba 3 notas e retorne a média.

Para criar uma janela em Java que receba 3 notas e calcule a média, podemos utilizar vários componentes da interface gráfica, como `JLabel`, `JTextField`, `JButton` e `JOptionPane`. Abaixo segue um exemplo de implementação:

```java
import java.awt.*;
import javax.swing.*;

public class MediaNotas {
    public static void main(String[] args) {
        // cria uma janela
        JFrame frame = new JFrame("Cálculo de média de notas");

        // cria um painel para os componentes
        JPanel panel = new JPanel(new GridLayout(4, 2, 10, 10));

        // cria três labels para as notas
        JLabel label1 = new JLabel("Nota 1:");
        JLabel label2 = new JLabel("Nota 2:");
        JLabel label3 = new JLabel("Nota 3:");

        // cria três campos de texto para as notas
        JTextField field1 = new JTextField(5);
        JTextField field2 = new JTextField(5);
        JTextField field3 = new JTextField(5);

        // cria um botão para calcular a média
        JButton button = new JButton("Calcular média");

        // cria um label para exibir a média
        JLabel labelMedia = new JLabel("");

        // adiciona os componentes ao painel
        panel.add(label1);
        panel.add(field1);
        panel.add(label2);
        panel.add(field2);
        panel.add(label3);
        panel.add(field3);
        panel.add(button);
        panel.add(labelMedia);

        // configura o tamanho do painel
        panel.setPreferredSize(new Dimension(300, 150));

        // configura a ação do botão
        button.addActionListener(e -> {
            // converte as notas de texto para número
            double nota1 = Double.parseDouble(field1.getText());
            double nota2 = Double.parseDouble(field2.getText());
            double nota3 = Double.parseDouble(field3.getText());

            // calcula a média
            double media = (nota1 + nota2 + nota3) / 3;

            // exibe a média no label
            labelMedia.setText("Média: " + media);
        });

        // adiciona o painel à janela
        frame.getContentPane().add(panel);

        // configura o fechamento da janela
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // exibe a janela
        frame.pack();
        frame.setVisible(true);
    }
}

```

Nesse exemplo, criamos uma janela com um painel e adicionamos três labels e três campos de texto para as notas, além de um botão para calcular a média. Quando o botão é clicado, as notas são convertidas de texto para número, a média é calculada e exibida em  um **`JLabel`** vazio para exibir a média e adicionamos esse label ao painel, abaixo do botão. Quando o botão é clicado, as notas são convertidas de texto para número, a média é calculada e exibida no label. A janela é configurada para fechar quando o usuário clicar no botão de fechar e é exibida na tela. Note que para exibir corretamente os componentes, usamos o método **`pack()`** para dimensionar a janela de acordo com o tamanho necessário dos componentes.

A janela é configurada para fechar quando o usuário clicar no botão de fechar e é exibida na tela.

## Referências

- [Introduction to GUI Building](https://netbeans.apache.org/kb/docs/java/gui-functionality.html)
- [Lesson: Learning Swing with the NetBeans IDE (The Java™ Tutorials > Creating a GUI With Swing)](https://docs.oracle.com/javase/tutorial/uiswing/learn/index.html)
- [Setting up the CelsiusConverter Project (The Java™ Tutorials > Creating a GUI With Swing > Learning Swing with the NetBeans IDE)](https://docs.oracle.com/javase/tutorial/uiswing/learn/settingup.html)
