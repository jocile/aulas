---
title:  "Aplicação cadastro de alunos com interface gráfica"
date: 2023-05-16 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, programação, gui, java, uml, diagrama]
mermaid: true
---
Criar um aplicativo em Java que represente um sistema de cadastro de alunos.

## Fase 4 interface gráfica

Monte o algoritmo de cadastramento de alunos utilizando a estrutura de registros. Represente o algoritmo em pseudocódigo, e o código em java para fazer um formulário em uma gui swing, salvando em arquivo texto.

Segue abaixo o algoritmo de cadastramento de alunos utilizando a estrutura de registros, seguido do código em Java para criar um formulário em uma GUI Swing e salvar as informações em um arquivo de texto:

Pseudocódigo:

1. Definir a estrutura de registro para o aluno, contendo os campos nome, idade, matrícula e curso.
2. Inicializar as variáveis de entrada nome, idade, matrícula e curso.
3. Criar um formulário com campos de entrada para nome, idade, matrícula e curso.
4. Ler as informações de entrada do usuário e armazená-las nas variáveis correspondentes.
5. Criar um objeto do tipo Aluno com as informações armazenadas nas variáveis.
6. Escrever as informações do objeto Aluno em um arquivo de texto.
7. Exibir uma mensagem de confirmação para o usuário.
8. Desafio: Para refatorar o algoritmo anterior de cadastramento de alunos utilizando a estrutura de registros e criar um formulário em uma GUI Swing para salvar as informações em um arquivo de texto, é necessário utilizar as bibliotecas Java Swing e Java I/O.

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.FileWriter;
import java.io.IOException;

public class CadastroalunosGUI extends JFrame {
    private JTextField nomeField, idadeField, matriculaField, cursoField;

    public CadastroalunosGUI() {
        setTitle("Cadastro de alunos");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 200);
        setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(5, 2));

        panel.add(new JLabel("Nome:"));
        nomeField = new JTextField();
        panel.add(nomeField);

        panel.add(new JLabel("Idade:"));
        idadeField = new JTextField();
        panel.add(idadeField);

        panel.add(new JLabel("Matrícula:"));
        matriculaField = new JTextField();
        panel.add(matriculaField);

        panel.add(new JLabel("Curso:"));
        cursoField = new JTextField();
        panel.add(cursoField);

        JButton cadastrarButton = new JButton("Cadastrar");
        cadastrarButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                cadastraraluno();
            }
        });
        panel.add(new JLabel());
        panel.add(cadastrarButton);

        add(panel);
        setVisible(true);
    }

    private void cadastraraluno() {
        String nome = nomeField.getText();
        int idade = Integer.parseInt(idadeField.getText());
        int matricula = Integer.parseInt(matriculaField.getText());
        String curso = cursoField.getText();

        aluno aluno = new aluno(nome, idade, matricula, curso);
        salvaraluno(aluno);

        JOptionPane.showMessageDialog(this, "aluno cadastrado com sucesso!");

        // Limpar campos do formulário
        nomeField.setText("");
        idadeField.setText("");
        matriculaField.setText("");
        cursoField.setText("");
    }

    private void salvaraluno(aluno aluno) {
        try (FileWriter writer = new FileWriter("alunos.txt", true)) {
            String linha = aluno.nome + ";" + aluno.idade + ";" + aluno.matricula + ";" + aluno.curso + "\\n";
            writer.write(linha);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new CadastroalunosGUI();
            }
        });
    }
}

class aluno {
    public String nome;
    public int idade, matricula;
    public String curso;

    public aluno(String nome, int idade, int matricula, String curso) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.curso = curso;
    }
}
```

## Fase 5 salvando em arquivo

Adicionar uma função no código que permitirá salvar os dados dos alunos em um arquivo de texto.

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.FileWriter;
import java.io.IOException;

public class CadastroalunosGUI extends JFrame {
    private JTextField nomeField, idadeField, matriculaField, cursoField;

    public CadastroalunosGUI() {
        setTitle("Cadastro de alunos");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 200);
        setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(5, 2));

        panel.add(new JLabel("Nome:"));
        nomeField = new JTextField();
        panel.add(nomeField);

        panel.add(new JLabel("Idade:"));
        idadeField = new JTextField();
        panel.add(idadeField);

        panel.add(new JLabel("Matrícula:"));
        matriculaField = new JTextField();
        panel.add(matriculaField);

        panel.add(new JLabel("Curso:"));
        cursoField = new JTextField();
        panel.add(cursoField);

        JButton cadastrarButton = new JButton("Cadastrar");
        cadastrarButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                cadastraraluno();
            }
        });
        panel.add(new JLabel());
        panel.add(cadastrarButton);

        add(panel);
        setVisible(true);
    }

    private void cadastraraluno() {
        String nome = nomeField.getText();
        int idade = Integer.parseInt(idadeField.getText());
        int matricula = Integer.parseInt(matriculaField.getText());
        String curso = cursoField.getText();

        aluno aluno = new aluno(nome, idade, matricula, curso);
        salvaraluno(aluno);

        JOptionPane.showMessageDialog(this, "aluno cadastrado com sucesso!");

        // Limpar campos do formulário
        nomeField.setText("");
        idadeField.setText("");
        matriculaField.setText("");
        cursoField.setText("");
    }

    private void salvaraluno(aluno aluno) {
        try (FileWriter writer = new FileWriter("alunos.txt", true)) {
            String linha = aluno.nome + ";" + aluno.idade + ";" + aluno.matricula + ";" + aluno.curso + "\\n";
            writer.write(linha);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new CadastroalunosGUI();
            }
        });
    }
}

class aluno {
    public String nome;
    public int idade, matricula;
    public String curso;

    public aluno(String nome, int idade, int matricula, String curso) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.curso = curso;
    }
}
```

Desafio: criar o botão salvar que usa a função salvar Aluno.

## Adicionando o botão salvar

Adicionar um botão "Salvar" à interface gráfica que usará a função `salvarAluno()` para salvar os dados do aluno em uma nova linha no arquivo de texto. Aqui está o código atualizado:

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.FileWriter;
import java.io.IOException;

public class CadastroAlunosGUI extends JFrame {
    private JTextField nomeField, idadeField, matriculaField, cursoField;

    public CadastroAlunosGUI() {
        setTitle("Cadastro de Alunos");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 200);
        setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(5, 2));

        panel.add(new JLabel("Nome:"));
        nomeField = new JTextField();
        panel.add(nomeField);

        panel.add(new JLabel("Idade:"));
        idadeField = new JTextField();
        panel.add(idadeField);

        panel.add(new JLabel("Matrícula:"));
        matriculaField = new JTextField();
        panel.add(matriculaField);

        panel.add(new JLabel("Curso:"));
        cursoField = new JTextField();
        panel.add(cursoField);

        JButton cadastrarButton = new JButton("Cadastrar");
        cadastrarButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                cadastrarAluno();
            }
        });
        panel.add(new JLabel());
        panel.add(cadastrarButton);

        JButton salvarButton = new JButton("Salvar");
        salvarButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                salvarAluno();
            }
        });
        panel.add(new JLabel());
        panel.add(salvarButton);

        add(panel);
        setVisible(true);
    }

    private void cadastrarAluno() {
        String nome = nomeField.getText();
        int idade = Integer.parseInt(idadeField.getText());
        int matricula = Integer.parseInt(matriculaField.getText());
        String curso = cursoField.getText();

        Aluno aluno = new Aluno(nome, idade, matricula, curso);
        salvarAluno(aluno);

        JOptionPane.showMessageDialog(this, "Aluno cadastrado com sucesso!");

        // Limpar campos do formulário
        nomeField.setText("");
        idadeField.setText("");
        matriculaField.setText("");
        cursoField.setText("");
    }

    private void salvarAluno() {
        String nome = nomeField.getText();
        int idade = Integer.parseInt(idadeField.getText());
        int matricula = Integer.parseInt(matriculaField.getText());
        String curso = cursoField.getText();

        Aluno aluno = new Aluno(nome, idade, matricula, curso);
        salvarAluno(aluno);

        JOptionPane.showMessageDialog(this, "Aluno salvo com sucesso!");

        // Limpar campos do formulário
        nomeField.setText("");
        idadeField.setText("");
        matriculaField.setText("");
        cursoField.setText("");
    }

    private void salvarAluno(Aluno aluno) {
        try (FileWriter writer = new FileWriter("alunos.txt", true)) {
            String linha = aluno.nome + ";" + aluno.idade + ";" + aluno.matricula + ";" + aluno.curso + "\\n";
            writer.write(linha);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new CadastroAlunosGUI();
            }
        });
    }
}

class Aluno {
    public String nome;
    public int idade, matricula;
    public String curso;

    public Aluno(String nome, int idade, int matricula, String curso) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.curso = curso;
    }
}

```

Neste código atualizado, foi adicionado um novo botão "Salvar" à interface gráfica. Quando o botão "Salvar" for clicado, a função `salvarAluno()` será chamada, que realizará as seguintes ações:

- Obter os dados do aluno dos campos de texto da interface gráfica.
- Criar um objeto `Aluno` com os dados fornecidos.
- Chamar a função `salvarAluno(Aluno aluno)` para salvar os dados do aluno em uma nova linha no arquivo de texto "alunos.txt".
- Exibir uma mensagem de confirmação para o usuário.
- Limpar os campos do formulário.

Agora você pode cadastrar os alunos e salvá-los no arquivo de texto pressionando o botão "Salvar".

## Referências

- [GitHub: Cadastro de alunos](https://github.com/jocile/cadastro-de-alunos/)
- Xavier, Gley Fabiano Cardoso Lógica de programação E-book, capítulos 2, 4 e 8. Disponível em: <https://bibliotecadigitalsenac.com.br/?from=%3FcontentInfo%3D1306#/legacy/epub/1306> Acesso em 15/05/2023
- [Editor de diagramas Mermaid](https://mermaid.live/)
